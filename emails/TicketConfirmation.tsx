import * as React from "react";

type Props = { email: string; payload: Record<string, any> };

export default function TicketConfirmation({ email, payload }: Props) {
  const entries = Object.entries(payload || {});
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif", color: "#111", padding: 16 }}>
        <h2 style={{ margin: 0, marginBottom: 8 }}>Bremmiepalooza Ticket Confirmation</h2>
        <p style={{ marginTop: 0 }}>
          We got your RSVP for <strong>{email}</strong>. Here’s what you submitted:
        </p>
        <table width="100%" cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <tbody>
            {entries.length === 0 ? (
              <tr><td>No extra details provided.</td></tr>
            ) : (
              entries.map(([k, v]) => (
                <tr key={k} style={{ borderTop: "1px solid #eee" }}>
                  <td style={{ width: "40%", fontWeight: "bold", verticalAlign: "top", textTransform: "capitalize" }}>
                    {k.replace(/[_-]/g, " ")}
                  </td>
                  <td>
                    {Array.isArray(v) ? v.join(", ") : typeof v === "object" ? JSON.stringify(v) : String(v ?? "")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <p style={{ marginTop: 16 }}>If anything looks off, just reply to this email.</p>
      </body>
    </html>
  );
}
