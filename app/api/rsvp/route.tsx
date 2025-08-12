import * as React from "react";
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { render } from "@react-email/render";

import TicketConfirmation from "@/emails/TicketConfirmation";
import { sql } from "@/lib/db";

export const runtime = "nodejs"; // Resend needs Node runtime

// ----- ENV -----
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bremmiepalooza.com";
const EMAIL_FROM =
  process.env.EMAIL_FROM || "Bremmiepalooza <info@bremmiepalooza.com>";
const RESEND_KEY = process.env.RESEND_API_KEY || "";

// ----- Resend client -----
const resend = new Resend(RESEND_KEY);

// ----- Minimal schema (accepts everything, requires email) -----
const Schema = z.object({ email: z.string().email() }).passthrough();

// Pretty labels for event ids
const EVENT_LABELS: Record<string, string> = {
  pregame: "The Pregame",
  mainstage: "The Main Stage",
  aftershow: "The Aftershow",
};

type YesNo = "yes" | "no" | "" | undefined;

const formatEvents = (ids: string[] = []) =>
  ids.map((id) => EVENT_LABELS[id] || id).join(", ");

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

const formatDietary = (dict?: Record<string, string[]>) => {
  if (!dict) return "";
  const entries = Object.entries(dict)
    .filter(([, arr]) => Array.isArray(arr) && arr.length > 0)
    .map(([who, arr]) => `${who}: ${arr.join(", ")}`);
  return entries.join(" · ");
};

export async function POST(req: Request) {
  try {
    // 1) Validate and parse input
    const data = Schema.parse(await req.json());
    const { email, ...payload } = data;

    // 2) Build rows (only things the guest saw/answered)
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

    // ALWAYS-asked -> show (Yes/No where appropriate)
    push("Email", email);
    push("Pass Type", payload.passType);
    push(
      "Events",
      formatEvents(
        payload.passType === "3-Day"
          ? ["pregame", "mainstage", "aftershow"]
          : payload.events || []
      )
    );
    push("Guest Name", payload.guestName);
    push("+1", formatYesNo(payload.hasPlusOne as YesNo)); // they saw this

    // +1 details only if yes
    push("+1 Name", payload.plusOneName, payload.hasPlusOne === "yes");

    // Kids -> always asked
    push("Kids", formatYesNo(payload.hasKids as YesNo));

    // Kids follow-ups only if yes
    const hasKids = payload.hasKids === "yes";
    push("Num Kids", payload.numKids, hasKids);
    push("Kid Names", payload.kidNames, hasKids);
    push(
      "Wants Babysitting",
      formatYesNo(payload.wantsBabysitting as YesNo),
      hasKids
    );
    push(
      "Babysitting Events",
      formatEvents(payload.babysittingEvents || []),
      hasKids && payload.wantsBabysitting === "yes"
    );

    // Dietary, only if any present
    push("Dietary Restrictions", formatDietary(payload.dietaryRestrictions));

    // Other optionals
    push("Music Preferences", payload.musicPreferences);

    // Address (compact)
    push("Mailing Address", formatAddress(payload.mailingAddress));

    // Phone
    push("Phone", payload.phone);

    // Timestamp
    push("Timestamp", new Date().toISOString());

    // 3) Save to Postgres
    const payloadJson = JSON.stringify(payload || {});
    await sql`
      insert into rsvps (email, payload)
      values (${email}, ${payloadJson}::jsonb)
    `;

    // 4) Render email (React -> HTML) + text fallback
    const reactEl = (
      <TicketConfirmation rows={rows} guestName={payload?.guestName} site={SITE} />
    );
    const html = await render(reactEl);
    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    // 5) Send email
    const subject = "You’re In! 🎟️ Your Bremmiepalooza Ticket";
    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject,
      html,
      text,
      // bcc: "", // optional: you removed this earlier
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
