import * as React from "react";

type Row = [string, string];

export default function TicketConfirmation(props: {
  rows: Row[];
  dietaryItems?: string[];
  guestName?: string;
  site?: string;
}) {
  const { rows, dietaryItems = [], guestName, site = "https://bremmiepalooza.com" } = props;

  // helpers to pull values out of the rows array
  const get = (label: string) =>
    rows.find(([k]) => k.toLowerCase() === label.toLowerCase())?.[1] || "";

  const passType = get("Pass Type");
  const events = get("Events");
  const name = guestName || get("Guest Name") || "Friend";

  return (
    <html>
      <body
        style={{
          margin: 0,
          background: "#F6F7FB",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
          color: "#111827",
        }}
      >
        {/* Card (rainbow bar is INSIDE this card now) */}
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "18px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 14,
              boxShadow:
                "0 1px 2px rgba(16,24,40,.06), 0 1px 3px rgba(16,24,40,.10)",
              padding: 24,
              overflow: "hidden", // so rainbow bar corners match the card
            }}
          >
            {/* Rainbow bar at the very top of the white card */}
            <div
              style={{
                height: 14,
                borderRadius: 10,
                background:
                  "linear-gradient(90deg,#F43F5E 0%,#F59E0B 25%,#10B981 50%,#3B82F6 75%,#8B5CF6 100%)",
                margin: "-6px 0 10px 0",
              }}
            />

            {/* brand */}
            <div
              style={{
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                color: "#E11D8F",
                marginBottom: 6,
              }}
            >
              Bremmiepalooza
            </div>

            {/* headline */}
            <h1
              style={{
                margin: "6px 0 8px",
                fontSize: 32,
                lineHeight: "36px",
                letterSpacing: "-0.02em",
              }}
            >
              You’re in, {name}! <span>🎟️</span>
            </h1>
            <p
              style={{
                margin: "0 0 16px",
                color: "#374151",
                fontSize: 16,
              }}
            >
              Thanks for securing your tickets.
            </p>

            {/* pills */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
              {passType && <Pill label={`Pass: ${passType}`} />}
              {events && <Pill label={`Events: ${events}`} />}
            </div>

            {/* details table (all answers they saw/answered) */}
            <table
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              style={{ borderCollapse: "collapse", marginTop: 8 }}
            >
              <tbody>
                {rows.map(([k, v], idx) => (
                  <tr key={idx}>
                    <td
                      style={{
                        padding: "10px 12px",
                        borderTop: "1px solid #F3F4F6",
                        width: 180,
                        color: "#6B7280",
                        fontWeight: 600,
                        fontSize: 14,
                        verticalAlign: "top",
                      }}
                    >
                      {k}
                    </td>
                    <td
                      style={{
                        padding: "10px 12px",
                        borderTop: "1px solid #F3F4F6",
                        fontSize: 15,
                        color: "#111827",
                      }}
                    >
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Dietary details, if any */}
            {dietaryItems.length > 0 && (
              <div style={{ marginTop: 20 }}>
                <div
                  style={{
                    fontSize: 14,
                    color: "#6B7280",
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  Dietary Details
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#111827" }}>
                  {dietaryItems.map((line, i) => (
                    <li key={i} style={{ margin: "4px 0" }}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* centered help line INSIDE the card */}
            <div
              style={{
                marginTop: 22,
                borderTop: "1px solid #F3F4F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 44, // vertical centering area
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 14, color: "#334155" }}>
                Questions? Just reach out to us at{" "}
                <a
                  href="mailto:info@bremmiepalooza.com"
                  style={{ color: "#E11D8F", fontWeight: 700, textDecoration: "none" }}
                >
                  info@bremmiepalooza.com
                </a>
                .
              </span>
            </div>
          </div>
        </div>

        {/* footer OUTSIDE card, centered (horizontally & vertically) */}
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 44, // vertical centering area
            color: "#6B7280",
            fontSize: 13,
            textAlign: "center",
          }}
        >
          <span>
            Sent with <span style={{ color: "#EF4444" }}>❤️</span> from{" "}
            <a
              href={site}
              style={{ color: "#E11D8F", fontWeight: 700, textDecoration: "none" }}
            >
              Bremmiepalooza
            </a>
            .
          </span>
        </div>
      </body>
    </html>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 12px",
        background: "#F5F3FF",
        color: "#4C1D95",
        borderRadius: 999,
        fontSize: 14,
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
}
