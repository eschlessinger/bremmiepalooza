// app/api/rsvp/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { sql } from "@/lib/db";
import TicketConfirmation from "@/emails/TicketConfirmation";

// NEW: render React -> HTML
import * as React from "react";
import { render } from "@react-email/render";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY || "");

// ---------- Helpers ----------
const SITE = "https://bremmiepalooza.com";

const label = (s: string) =>
  s.replace(/[_-]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

const asList = (v: any) =>
  Array.isArray(v) ? v.filter(Boolean).join(", ") : v ?? "";

const EVENT_LABELS = {
  pregame: "The Pregame",
  mainstage: "The Main Stage",
  aftershow: "The Aftershow",
} as const;

const prettyEventList = (ids: any) =>
  Array.isArray(ids) && ids.length
    ? ids.map((id: string) => EVENT_LABELS[id] ?? label(id)).join(", ")
    : "";

const formatRows = (email: string, p: Record<string, any>) => {
  const addr = p?.mailingAddress || {};

  // Which events they’re attending
  const attending =
    p?.passType === "3-Day"
      ? Object.values(EVENT_LABELS).join(", ")
      : prettyEventList(p?.events);

  const rows: Array<[string, string]> = [
    ["Email", email],
    ["Pass Type", p?.passType],
    ["Events", attending],
    ["Guest Name", p?.guestName],
  ];

  if (p?.hasPlusOne === "yes") rows.push(["+1 Name", p?.plusOneName]);

  // Kids + babysitting
  const hasKids = p?.hasKids === "yes";
  rows.push(["Kids", hasKids ? (p?.numKids || "Yes") : "No"]);

  if (hasKids) {
    const wants = p?.wantsBabysitting === "yes";
    rows.push(["Wants Babysitting", wants ? "Yes" : "No"]);
    if (wants) rows.push(["Babysitting For", prettyEventList(p?.babysittingEvents)]);
  }

  // Dietary
  const dietary =
    typeof p?.dietaryRestrictions === "object"
      ? Object.entries(p.dietaryRestrictions)
          .map(([who, arr]: any) => `${label(who)}: ${asList(arr)}`)
          .join(" · ")
      : "";
  if (dietary) rows.push(["Dietary Restrictions", dietary]);

  if (p?.musicPreferences) rows.push(["Music Preferences", p.musicPreferences]);

  rows.push([
    "Mailing Address",
    [
      addr?.name,
      addr?.street,
      `${addr?.city || ""}${addr?.state ? ", " + addr.state : ""} ${addr?.zip || ""}`,
      addr?.country,
    ]
      .filter(Boolean)
      .join(" · "),
  ]);

  rows.push(["Phone", p?.phone]);
  rows.push(["Timestamp", new Date().toISOString()]);

  return rows.filter(
    ([, v]) => v !== undefined && v !== null && String(v).trim() !== ""
  );
};

// ---------- Validation ----------
const Schema = z.object({ email: z.string().email() }).passthrough();

// ---------- POST handler ----------
export async function POST(req: Request) {
  try {
    const data = Schema.parse(await req.json());
    const { email, ...payload } = data;

    // Save to Postgres
    const payloadJson = JSON.stringify(payload || {});
    await sql`
      insert into rsvps (email, payload)
      values (${email}, ${payloadJson}::jsonb)
    `;

    // Build email
    const from =
      process.env.EMAIL_FROM || "Bremmiepalooza <onboarding@resend.dev>";
    const bcc = process.env.EMAIL_BCC; // (you removed it – fine to keep here)
    const subject = "You’re In — Bremmiepalooza Ticket 🎟️";
    const rows = formatRows(email, payload);

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY missing on server" },
        { status: 500 }
      );
    }

    // Render React -> HTML (works with all Resend versions)
    const reactEl = (
      <TicketConfirmation rows={rows} guestName={payload?.guestName} site={SITE} />
    );
    const html = render(reactEl);
    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n"); // plain text fallback

    const result = await resend.emails.send({
      from,
      to: email,
      ...(bcc ? { bcc } : {}),
      subject,
      html,
      text,
    });

    if ((result as any)?.error) {
      console.error("Resend error:", (result as any).error);
      return NextResponse.json(
        { ok: false, error: (result as any).error?.message || "Resend send failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("RSVP POST error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Bad Request" },
      { status: 400 }
    );
  }
}
