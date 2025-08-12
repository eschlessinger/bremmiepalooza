// app/api/rsvp/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { sql } from "@/lib/db";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY || "");

// ---------- Helpers & branded HTML ----------
const SITE = "https://bremmiepalooza.com"; // change if needed

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

  // Kids + babysitting logic
  const hasKids = p?.hasKids === "yes";
  rows.push(["Kids", hasKids ? (p?.numKids || "Yes") : "No"]);

  if (hasKids) {
    const wants = p?.wantsBabysitting === "yes";
    rows.push(["Wants Babysitting", wants ? "Yes" : "No"]);
    if (wants) {
      rows.push(["Babysitting For", prettyEventList(p?.babysittingEvents)]);
    }
  }

  // Dietary
  const dietary =
    typeof p?.dietaryRestrictions === "object"
      ? Object.entries(p.dietaryRestrictions)
          .map(([who, arr]: any) => `${label(who)}: ${asList(arr)}`)
          .join(" · ")
      : "";
  if (dietary) rows.push(["Dietary Restrictions", dietary]);

  if (p?.musicPreferences)
    rows.push(["Music Preferences", p.musicPreferences]);

  rows.push([
    "Mailing Address",
    [
      addr?.name,
      addr?.street,
      `${addr?.city || ""}${addr?.state ? ", " + addr.state : ""} ${
        addr?.zip || ""
      }`,
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

const makeHtml = (email: string, payload: Record<string, any>) => {
  const rows = formatRows(email, payload)
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 12px;border-top:1px solid #eee;font-weight:600;color:#0f172a;width:38%">${label(
          k
        )}</td>
        <td style="padding:10px 12px;border-top:1px solid #eee;color:#0f172a">${String(
          v
        )}</td>
      </tr>`
    )
    .join("");

  const preheader =
    "You’re in! Thanks for RSVPing — here’s your Bremmiepalooza recap.";

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f5f7fb;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">
      ${preheader}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f7fb;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:14px;box-shadow:0 3px 20px rgba(0,0,0,0.06);overflow:hidden">
            <tr>
              <td style="background:#d81b8c;background-image:linear-gradient(90deg,#EC4899,#FACC15,#3B82F6,#A855F7);color:#ffffff;padding:28px 24px;text-align:center">
                <a href="${SITE}" style="text-decoration:none;display:inline-block">
                  <img src="${SITE}/bremmiepalooza-logo-for-cta.png" alt="Bremmiepalooza" width="260" style="display:block;margin:0 auto 10px;max-width:100%;border:0;outline:none">
                </a>
                <div style="font-family:Arial Black, Impact, Arial, sans-serif;font-size:24px;line-height:1.2;text-transform:uppercase;letter-spacing:.5px">
                  You’re In! 🎟️
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 24px 8px;font-family:Arial, Helvetica, sans-serif;color:#0f172a">
                <p style="margin:0 0 12px;font-size:16px">
                  Thanks for securing your tickets, <strong>${payload?.guestName || ""}</strong>!
                </p>
                <p style="margin:0 0 4px;font-size:14px;color:#475569">
                  Here’s a quick recap of what you submitted:
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 12px">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-family:Arial, Helvetica, sans-serif;font-size:14px">
                  <tbody>
                    ${rows}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:12px 24px 28px">
                <a href="${SITE}/tickets" style="display:inline-block;background-image:linear-gradient(90deg,#EC4899,#FACC15,#3B82F6,#A855F7);color:#111;text-decoration:none;font-weight:700;border-radius:999px;padding:12px 22px;font-family:Arial Black, Impact, Arial, sans-serif;font-size:14px">
                  View Tickets Info
                </a>
              </td>
            </tr>
            <tr>
              <td style="background:#f8fafc;color:#64748b;padding:16px 24px;text-align:center;font-family:Arial, Helvetica, sans-serif;font-size:12px">
                Questions? Reply to this email or visit
                <a href="${SITE}" style="color:#0ea5e9;text-decoration:none">${SITE.replace(
                  "https://",
                  ""
                )}</a>.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

// ---------- Validation ----------
const Schema = z.object({ email: z.string().email() }).passthrough();

// ---------- Handlers ----------
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

    // Send confirmation
    const from =
      process.env.EMAIL_FROM || "Bremmiepalooza <onboarding@resend.dev>";
    const bcc = process.env.EMAIL_BCC;
    const subject = "You’re In — Bremmiepalooza Tix 🎟️";
    const html = makeHtml(email, payload);

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY missing on server" },
        { status: 500 }
      );
    }

    const result = await resend.emails.send({
      from,
      to: email,
      ...(bcc ? { bcc } : {}),
      subject,
      html,
    });

    if ((result as any)?.error) {
      console.error("Resend error:", (result as any).error);
      return NextResponse.json(
        {
          ok: false,
          error: (result as any).error?.message || "Resend send failed",
        },
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
