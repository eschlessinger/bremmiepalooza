import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { sql } from "@/lib/db";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY || "");
const Schema = z.object({ email: z.string().email() }).passthrough();

// tiny helpers to build a safe HTML email
const escapeHtml = (v: any) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toDisplay = (v: any) =>
  Array.isArray(v)
    ? v.map(escapeHtml).join(", ")
    : typeof v === "object" && v !== null
    ? escapeHtml(JSON.stringify(v))
    : escapeHtml(v);

const makeHtml = (email: string, payload: Record<string, any>) => {
  const rows = Object.entries(payload || {})
    .map(
      ([k, v]) => `
      <tr style="border-top:1px solid #eee">
        <td style="padding:8px 12px;font-weight:bold;text-transform:capitalize;width:40%">${escapeHtml(
          k.replace(/[_-]/g, " ")
        )}</td>
        <td style="padding:8px 12px">${toDisplay(v)}</td>
      </tr>`
    )
    .join("");

  return `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#111;padding:16px">
    <h2 style="margin:0 0 8px">Bremmiepalooza Ticket Confirmation</h2>
    <p style="margin-top:0">We got your RSVP for <strong>${escapeHtml(
      email
    )}</strong>. Here’s what you submitted:</p>
    <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
      <tbody>
        ${rows || `<tr><td style="padding:8px 12px">No extra details provided.</td></tr>`}
      </tbody>
    </table>
    <p style="margin-top:16px">If anything looks off, just reply to this email.</p>
  </body></html>`;
};

export async function POST(req: Request) {
  try {
    const data = Schema.parse(await req.json());
    const { email, ...payload } = data;
    const payloadJson = JSON.stringify(payload || {});

    // Save to Postgres
    await sql`insert into rsvps (email, payload) values (${email}, ${payloadJson}::jsonb)`;

    // Send confirmation email (HTML)
    const from =
      process.env.EMAIL_FROM || "Bremmiepalooza <onboarding@resend.dev>";
    const bcc = process.env.EMAIL_BCC;
    const html = makeHtml(email, payload);

    await resend.emails.send({
      from,
      to: email,
      ...(bcc ? { bcc } : {}),
      subject: "Your Bremmiepalooza Ticket",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("RSVP POST error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Bad request" },
      { status: 400 }
    );
  }
}

