import { sql } from "@vercel/postgres";
import { Resend } from "resend";
import TicketConfirmation from "@/emails/TicketConfirmation";
import { z } from "zod";

const schema = z.object({
  passType: z.string(),
  events: z.array(z.string()),
  guestName: z.string().min(1),
  hasPlusOne: z.string(),
  plusOneName: z.string().optional().catch(""),
  hasKids: z.string(),
  numKids: z.string().optional().catch(""),
  kidNames: z.array(z.string()).optional().catch([]),
  wantsBabysitting: z.string().optional().catch(""),
  babysittingEvents: z.array(z.string()).optional().catch([]),
  dietaryRestrictions: z.record(z.array(z.string())).optional().catch({}),
  musicPreferences: z.string().optional().catch(""),
  mailingAddress: z.object({
    name: z.string().optional().catch(""),
    street: z.string().optional().catch(""),
    city: z.string().optional().catch(""),
    state: z.string().optional().catch(""),
    zip: z.string().optional().catch(""),
    country: z.string().optional().catch(""),
  }),
  phone: z.string().optional().catch(""),
  email: z.string().email(),
  timestamp: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    // 1) store in Postgres
    await sql`
      insert into rsvps (email, payload)
      values (${parsed.email}, ${JSON.stringify(parsed)}::jsonb)
    `;

    // 2) send confirmation email
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: parsed.email,
      bcc: process.env.EMAIL_BCC || undefined,
      subject: "Bremmiepalooza: You're in! 🎟️",
      react: TicketConfirmation({ data: parsed }),
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Bad request" }), { status: 400 });
  }
}
