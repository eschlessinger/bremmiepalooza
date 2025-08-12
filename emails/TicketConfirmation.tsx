// /emails/TicketConfirmation.tsx
import * as React from "react";

type Props = {
  rows: Array<[string, string]>;
  guestName?: string;
  site?: string; // e.g. https://bremmiepalooza.com
};

export default function TicketConfirmation({
  rows,
  guestName = "",
  site = "https://bremmiepalooza.com",
}: Props) {
  const preheader =
    "You’re in! Thanks for RSVPing — here’s your Bremmiepalooza recap.";

  const tableRow = (k: string, v: string, i: number) => (
    <tr key={i}>
      <td
        style={{
          padding: "10px 12px",
          borderTop: "1px solid #eee",
          fontWeight: 600,
          color: "#0f172a",
          width: "38%",
        }}
      >
        {k}
      </td>
      <td
        style={{
          padding: "10px 12px",
          borderTop: "1px solid #eee",
          color: "#0f172a",
        }}
      >
        {v}
      </td>
    </tr>
  );

  return (
    <div style={{ margin: 0, padding: 0, background: "#f5f7fb" }}>
      {/* inbox preview text */}
      <div
        style={{
          display: "none",
          maxHeight: 0,
          overflow: "hidden",
          opacity: 0,
          color: "transparent",
        }}
      >
        {preheader}
      </div>

      <table
        role="presentation"
        width="100%"
        cellSpacing={0}
        cellPadding={0}
        style={{ background: "#f5f7fb", padding: "24px 0" }}
      >
        <tbody>
          <tr>
            <td align="center">
              <table
                role="presentation"
                width={600}
                cellSpacing={0}
                cellPadding={0}
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  boxShadow: "0 3px 20px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                }}
              >
                {/* Header */}
                <tbody>
                  <tr>
                    <td
                      style={{
                        background: "#d81b8c",
                        backgroundImage:
                          "linear-gradient(90deg,#EC4899,#FACC15,#3B82F6,#A855F7)",
                        color: "#ffffff",
                        padding: "28px 24px",
                        textAlign: "center",
                      }}
                    >
                      <a href={site} style={{ textDecoration: "none" }}>
                        <img
                          src={`${site}/bremmiepalooza-logo-for-cta.png`}
                          alt="Bremmiepalooza"
                          width={260}
                          style={{
                            display: "block",
                            margin: "0 auto 10px",
                            maxWidth: "100%",
                            border: 0,
                            outline: "none",
                          }}
                        />
                      </a>
                      <div
                        style={{
                          fontFamily:
                            "Arial Black, Impact, Arial, sans-serif",
                          fontSize: 24,
                          lineHeight: 1.2,
                          textTransform: "uppercase",
                          letterSpacing: ".5px",
                        }}
                      >
                        You’re In! 🎟️
                      </div>
                    </td>
                  </tr>

                  {/* Body intro */}
                  <tr>
                    <td
                      style={{
                        padding: "24px 24px 8px",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "#0f172a",
                      }}
                    >
                      <p style={{ margin: "0 0 12px", fontSize: 16 }}>
                        Thanks for securing your tickets{" "}
                        <strong>{guestName || ""}</strong>!
                      </p>
                      <p
                        style={{
                          margin: "0 0 4px",
                          fontSize: 14,
                          color: "#475569",
                        }}
                      >
                        Here’s a quick recap of what you submitted:
                      </p>
                    </td>
                  </tr>

                  {/* Recap table */}
                  <tr>
                    <td style={{ padding: "0 24px 12px" }}>
                      <table
                        role="presentation"
                        width="100%"
                        cellSpacing={0}
                        cellPadding={0}
                        style={{
                          borderCollapse: "collapse",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 14,
                        }}
                      >
                        <tbody>{rows.map(([k, v], i) => tableRow(k, v, i))}</tbody>
                      </table>
                    </td>
                  </tr>

                  {/* CTA */}
                  <tr>
                    <td align="center" style={{ padding: "12px 24px 28px" }}>
                      <a
                        href={`${site}/tickets`}
                        style={{
                          display: "inline-block",
                          backgroundImage:
                            "linear-gradient(90deg,#EC4899,#FACC15,#3B82F6,#A855F7)",
                          color: "#111",
                          textDecoration: "none",
                          fontWeight: 700,
                          borderRadius: 999,
                          padding: "12px 22px",
                          fontFamily:
                            "Arial Black, Impact, Arial, sans-serif",
                          fontSize: 14,
                        }}
                      >
                        View Tickets Info
                      </a>
                    </td>
                  </tr>

                  {/* Footer */}
                  <tr>
                    <td
                      style={{
                        background: "#f8fafc",
                        color: "#64748b",
                        padding: "16px 24px",
                        textAlign: "center",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: 12,
                      }}
                    >
                      Questions? Reply to this email or visit{" "}
                      <a
                        href={site}
                        style={{ color: "#0ea5e9", textDecoration: "none" }}
                      >
                        {site.replace("https://", "")}
                      </a>
                      .
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
