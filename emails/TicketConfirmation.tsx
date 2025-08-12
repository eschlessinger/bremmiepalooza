// emails/TicketConfirmation.tsx
import * as React from "react";

type Row = [string, string];

type Props = {
  rows: Row[];
  dietaryItems?: string[];
  guestName?: string;
  site: string;
};

const BRAND_PINK = "#e11d8f"; // tailwind pink-600
const TEXT = "#111827";       // gray-900
const MUTED = "#374151";      // gray-700
const BORDER = "#e5e7eb";     // gray-200
const BG_SOFT = "#f3e8ff";    // violet-100-like for the "pills"
const LINK = BRAND_PINK;

export default function TicketConfirmation({
  rows,
  dietaryItems = [],
  guestName,
  site,
}: Props) {
  // Pull Pass/Events to render as lil' badges (pills) near the header
  const rowsMap = Object.fromEntries(rows);
  const passType = rowsMap["Pass Type"] || "";
  const events = rowsMap["Events"] || "";

  // Helper to render the details table
  const detailRows = rows.map(([k, v]) => (
    <tr key={k}>
      <td
        style={{
          padding: "10px 12px",
          borderBottom: `1px solid ${BORDER}`,
          verticalAlign: "top",
          fontWeight: 600,
          color: MUTED,
          width: "32%",
        }}
      >
        {k}
      </td>
      <td
        style={{
          padding: "10px 12px",
          borderBottom: `1px solid ${BORDER}`,
          verticalAlign: "top",
          color: TEXT,
        }}
      >
        {v}
      </td>
    </tr>
  ));

  return (
    <html>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#f9fafb", // gray-50
          fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
          color: TEXT,
        }}
      >
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ background: "#f9fafb" }}
        >
          <tbody>
            <tr>
              <td style={{ padding: "24px 0" }}>
                <table
                  role="presentation"
                  width={640}
                  cellPadding={0}
                  cellSpacing={0}
                  align="center"
                  style={{
                    margin: "0 auto",
                    background: "#ffffff",
                    borderRadius: 14,
                    border: `1px solid ${BORDER}`,
                    overflow: "hidden",
                  }}
                >
                  {/* Header / Brand */}
                  <tbody>
                    <tr>
                      <td style={{ padding: "24px 28px 0 28px" }}>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 800,
                            letterSpacing: 1,
                            color: BRAND_PINK,
                            textTransform: "uppercase",
                          }}
                        >
                          Bremmiepalooza
                        </div>

                        <h1
                          style={{
                            margin: "12px 0 8px",
                            fontSize: 30,
                            lineHeight: 1.25,
                            color: TEXT,
                          }}
                        >
                          You’re In, {guestName || "Friend"}!{" "}
                          <span role="img" aria-label="tickets">
                            🎟️
                          </span>
                        </h1>

                        <p
                          style={{
                            margin: 0,
                            fontSize: 16,
                            color: MUTED,
                          }}
                        >
                          Thanks for securing your tickets.
                        </p>

                        {/* Pills row */}
                        <div style={{ marginTop: 16 }}>
                          {passType ? (
                            <span style={pillStyle}>Pass: {passType}</span>
                          ) : null}
                          {events ? (
                            <span style={{ ...pillStyle, marginLeft: 10 }}>
                              Events: {events}
                            </span>
                          ) : null}
                        </div>
                      </td>
                    </tr>

                    {/* Details */}
                    <tr>
                      <td style={{ padding: "20px 28px 24px" }}>
                        <table
                          role="presentation"
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{
                            border: `1px solid ${BORDER}`,
                            borderRadius: 12,
                            overflow: "hidden",
                          }}
                        >
                          <tbody>{detailRows}</tbody>
                        </table>

                        {/* Per-person dietary list */}
                        {dietaryItems.length > 0 && (
                          <div style={{ marginTop: 18 }}>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: MUTED,
                                marginBottom: 6,
                              }}
                            >
                              Dietary (by person)
                            </div>
                            <ul
                              style={{
                                margin: "0 0 0 18px",
                                padding: 0,
                                color: TEXT,
                              }}
                            >
                              {dietaryItems.map((line, i) => (
                                <li key={i} style={{ marginBottom: 4 }}>
                                  {line}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    {/* Footer helper + cute sign-off */}
                    <tr>
                      <td
                        style={{
                          padding: "8px 28px 26px",
                          borderTop: `1px solid ${BORDER}`,
                        }}
                      >
                        <p
                          style={{
                            margin: "14px 0 0",
                            fontSize: 14,
                            color: MUTED,
                          }}
                        >
                          Questions? Just reach out to us at{" "}
                          <a
                            href="mailto:info@bremmiepalooza.com"
                            style={{
                              color: LINK,
                              fontWeight: 700,
                              textDecoration: "none",
                            }}
                          >
                            info@bremmiepalooza.com
                          </a>
                          .
                        </p>

                        <p
                          style={{
                            margin: "18px 0 0",
                            fontSize: 13,
                            color: MUTED,
                          }}
                        >
                          Sent with{" "}
                          <span role="img" aria-label="love">
                            ❤️
                          </span>{" "}
                          from{" "}
                          <a
                            href={site}
                            style={{
                              color: LINK,
                              fontWeight: 700,
                              textDecoration: "none",
                            }}
                          >
                            Bremmiepalooza
                          </a>
                          .
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Spacer under the card */}
                <div style={{ height: 24 }} />
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

const pillStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "8px 14px",
  background: BG_SOFT,
  borderRadius: 9999,
  fontWeight: 700,
  fontSize: 14,
  color: "#111827",
};
