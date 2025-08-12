import * as React from "react";
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { render } from "@react-email/render";

import TicketConfirmation from "@/emails/TicketConfirmation";
import { sql } from "@/lib/db";

export const runtime = "nodejs";

// ---- ENV / Clients --------------------------------------------------------
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bremmiepalooza.com";
const EMAIL_FROM =
  process.env.EMAIL_FROM || "Bremmiepalooza <info@bremmiepalooza.com>";
const RESEND_KEY = process.env.RESEND_API_KEY || "";
const resend = new Resend(RESEND_KEY);

// ---- Schema (accepts everything, requires email) --------------------------
const Schema = z.object({ email: z.string().email() }).passthrough();

// ---- Helpers --------------------------------------------------------------
type YesNo = "yes" | "no" | "" | undefined;

const EVENT_LABELS: Record<string, string> = {
  pregame: "The Pregame",
  mainstage: "The Main Stage",
  aftershow: "The Aftershow",
};

const formatEvents = (passType?: string, ids: string[] = []) =>
  (passType === "3-Day"
    ? ["pregame", "mainstage", "aftershow"]
    : ids
  ).map((id) => EVENT_LABELS[id] || id).join(", ");

const formatYesNo = (v: YesNo) => (v === "yes" ? "Yes" : v === "no" ? "No" : "");

const formatAddress = (a?: {
  name?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}) => {
  if (!a) return "";
  const parts = [
    a.name,
    a.street,
    [a.city, a.state, a.zip].filter(Boolean).join(" "),
    a.country,
  ].filter(Boolean);
  return parts.join(" · ");
};

const stringifyRestrictions = (list?: string[]) => {
  if (!list || list.length === 0) return "None";
  if (list.length === 1 && list[0].toLowerCase() === "none") return "None";
  return list.join(", ");
};

// Build per-person dietary lines using real names
function buildDietaryItems(payload: any): string[] {
  const items: string[] = [];
  const dr: Record<string, string[]> = payload?.dietaryRestrictions || {};

  // Main guest (always shown on the form)
  {
    const name = payload?.guestName || "Guest";
    items.push(`${name}: ${stringifyRestrictions(dr?.main)}`);
  }

  // Plus One (only if present)
  if (payload?.hasPlusOne === "yes") {
    const name = payload?.plusOneName || "Plus One";
    items.push(`${name}: ${stringifyRestrictions(dr?.plus_one)}`);
  }

  // Kids: map kid_i -> kidNames[i]; use numKids or kidNames length, whichever is larger
  const kidNames: string[] = Array.isArray(payload?.kidNames) ? payload.kidNames : [];
  const nKidsFromCount =
    typeof payload?.numKids === "string"
      ? parseInt(payload.numKids || "0", 10) || 0
      : Number(payload?.numKids) || 0;
  const kidCount = Math.max(kidNames.length, nKidsFromCount);

  for (let i = 0; i < kidCount; i++) {
    const key = `kid_${i}`;
    const name = kidNames[i] || `Kid ${i + 1}`;
    items.push(`${name}: ${stringifyRestrictions(dr?.[key])}`);
  }

  return items;
}

// ---- Route handlers -------------------------------------------------------
export async function POST(req: Request) {
  try {
    // 1) Parse input
    const data = Schema.parse(await req.json());
    const { email, ...payload } = data;

    // 2) Build rows (only things they saw/answered)
    const rows: Array<[string, string]> = [];
    const push = (
      label: string,
      value?: string | number | string[] | null,
      show: boolean = true
    ) => {
      if (!show) return;
      let v = "";
      if (Array.isArray(value)) v = value.filter(Boolean).join(", ");
      else if (value === null || value === undefined) v = "";
      else v = String(value);
      if (v.trim() !== "") rows.push([label, v]);
    };

    push("Email", email);
    push("Pass Type", payload.passType);
    push("Events", formatEvents(payload.passType, payload.events || []));
    push("Guest Name", payload.guestName);

    // +1 (everyone saw this question) -> show Yes/No
    push("+1", formatYesNo(payload.hasPlusOne as YesNo));
    // +1 Name only if yes
    push("+1 Name", payload.plusOneName, payload.hasPlusOne === "yes");

    // Kids (everyone saw this question) -> show Yes/No
    push("Kids", formatYesNo(payload.hasKids as YesNo));

    const hasKids = payload.hasKids === "yes";
    // Kids follow-ups only if yes
    push("Num Kids", payload.numKids, hasKids);
    push("Kid Names", payload.kidNames, hasKids);
    push(
      "Wants Babysitting",
      formatYesNo(payload.wantsBabysitting as YesNo),
      hasKids
    );
    push(
      "Babysitting Events",
      formatEvents(undefined, payload.babysittingEvents || []),
      hasKids && payload.wantsBabysitting === "yes"
    );

    // Always include Dietary row; template will render per-person lines
    rows.push(["Dietary Restrictions", "See below"]);

    // Other optional answers
    push("Music Preferences", payload.musicPreferences);

    // Address + phone
    push("Mailing Address", formatAddress(payload.mailingAddress));
    push("Phone", payload.phone);

    // Timestamp
    push("Timestamp", new Date().toISOString());

    // 3) Save to Postgres
    const payloadJson = JSON.stringify(payload || {});
    await sql`
      insert into rsvps (email, payload)
      values (${email}, ${payloadJson}::jsonb)
    `;

    // 4) Render email (React -> HTML) with per-person dietary items
    const dietaryItems = buildDietaryItems(payload);
    const reactEl = (
      <TicketConfirmation
        rows={rows}
        dietaryItems={dietaryItems}
        guestName={payload?.guestName}
        site={SITE}
      />
    );
    const html = await render(reactEl);
    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
      (dietaryItems.length ? `\n\nDietary:\n- ${dietaryItems.join("\n- ")}` : "");

    // 5) Send
    const subject = "You’re In! 🎟️ Your Bremmiepalooza Tix";
    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject,
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("RSVP POST error:", e);
    return NextResponse.json(
      { ok: false, error: String(e?.message || e) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const now = await sql`select now() as now`;
    return NextResponse.json({
      ok: true,
      now: now?.[0]?.now ?? null,
      hasResendKey: !!RESEND_KEY,
      from: EMAIL_FROM,
    });
  } catch (e: any) {
    console.error("RSVP GET error:", e);
    return NextResponse.json(
      { ok: false, error: String(e?.message || e) },
      { status: 500 }
    );
  }
}
