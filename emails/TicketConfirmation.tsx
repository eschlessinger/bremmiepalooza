import * as React from "react";

type Row = [string, string];
type Props = {
  rows: Row[];
  dietaryItems?: string[];
  guestName?: string;
  site?: string;
};

const BRAND = "BREMMIEPALOOZA";
const PINK = "#E11D8A";
const FG = "#0F172A"; // slate-900
const MUTED = "#64748B"; // slate-500
const CARD_BG = "#ffffff";
const PAGE_BG = "#F6F7FB"; // very light gray
const BORDER = "#E2E8F0";

export default function TicketConfirmation({
  rows,
  dietaryItems = [],
  guestName = "Guest",
  site = "https://bremmiepalooza.com",
}: Props) {
  // Extract just the two small chips shown beneath the title
  const passType = getValue(rows, "Pass Type");
  const events = getValue(rows, "Events");

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>You’re In!</title>
        <meta name="color-scheme" content="light only" />
      </head>
      <body style={styles.body}>
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ minHeight: "100%", background: PAGE_BG }}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: "24px 12px" }}>
                {/* CARD */}
                <table role="presentation" width={680} style={styles.card} cellPadding={0} cellSpacing={0}>
                  <tbody>
                    {/* Rainbow stripe INSIDE the card */}
                    <tr>
                      <td style={{ padding: 0 }}>
                        <div style={styles.rainbow} />
                      </td>
                    </tr>

                    {/* Header section */}
                    <tr>
                      <td style={{ padding: "28px 28px 4px 28px" }}>
                        <div style={{ color: PINK, fontWeight: 800, letterSpacing: 1.2, fontSize: 12 }}>
                          {BRAND}
                        </div>

                        <h1 style={styles.h1}>
                          You’re In, {guestName}!
                          <span style={{ marginLeft: 8, fontSize: 26 }}>🎟️</span>
                        </h1>

                        <p style={styles.sub}>Thanks for securing your tickets.</p>

                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
                          {passType && <Chip>Pass: {passType}</Chip>}
                          {events && <Chip>Events: {events}</Chip>}
                        </div>
                      </td>
                    </tr>

                    {/* Details table */}
                    <tr>
                      <td style={{ padding: "6px 28px 10px 28px" }}>
                        <SectionTitle>Here’s a quick recap of what you submitted:</SectionTitle>
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={styles.table}>
                          <tbody>
                            {rows.map(([label, value], i) => {
                              const isDietRow = label === "Dietary Restrictions" && dietaryItems.length > 0;
                              return (
                                <tr key={i}>
                                  <td style={styles.th}>{label}</td>
                                  <td style={styles.td}>
                                    {isDietRow ? (
                                      <div>
                                        {dietaryItems.map((line, idx) => (
                                          <div key={idx}>{line}</div>
                                        ))}
                                      </div>
                                    ) : (
                                      value
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Bottom “Questions?” line — centered vertically inside the card */}
                    <tr>
                      <td style={{ padding: "0 28px 24px 28px" }}>
                        <div style={styles.divider} />
                        <div style={styles.bottomHelp}>
                          Questions? Just reach out to us at {" "}
                          <a href="mailto:info@bremmiepalooza.com" style={styles.helpLink}>
                            info@bremmiepalooza.com
                          </a>
                          .
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* OUTSIDE the card — centered in the light gray area */}
                <div style={styles.footerLove}>
                  Sent with <span style={{ color: "#EF4444" }}>♥</span> from{" "}
                  <a href={site} target="_blank" rel="noreferrer" style={styles.brandLink}>
                    Bremmiepalooza
                  </a>
                  .
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

/* ----------------- helpers ----------------- */

function getValue(rows: Row[], label: string): string {
  const found = rows.find(([k]) => k === label);
  return found ? found[1] : "";
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 12px",
        background: "#F4EAFF",          // light lavender fill
        color: "#4F46E5",               // purple text (indigo-600)
        fontWeight: 800,                // bold
        borderRadius: 999,
        fontSize: 14,
        lineHeight: "18px",
        border: `1px solid ${BORDER}`,  // keep subtle outline
      }}
    >
      {children}
    </span>
  );
}


function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontWeight: 700,
        color: FG,
        margin: "6px 0 12px 0",
      }}
    >
      {children}
    </div>
  );
}

/* ----------------- styles ----------------- */

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    padding: 0,
    WebkitTextSizeAdjust: "100%",
    background: PAGE_BG,
    color: FG,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'",
  },
  card: {
    background: CARD_BG,
    borderRadius: 16,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    border: `1px solid ${BORDER}`,
  },
  rainbow: {
    height: 10,
    borderRadius: "16px 16px 0 0",
    background:
      "linear-gradient(90deg,#EC4899 0%,#F59E0B 20%,#10B981 40%,#3B82F6 60%,#8B5CF6 85%,#EC4899 100%)",
  },
  h1: {
    margin: "6px 0 4px 0",
    fontSize: 36,
    lineHeight: "42px",
    color: FG,
    fontWeight: 900,
    letterSpacing: -0.3,
  },
  sub: {
    margin: 0,
    color: MUTED,
    fontSize: 16,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderTop: `1px solid ${BORDER}`,
    borderLeft: `1px solid ${BORDER}`,
    borderRight: `1px solid ${BORDER}`,
    borderRadius: 12,
    overflow: "hidden",
  },
  th: {
    width: 160,
    padding: "12px 14px",
    background: "#FBFDFF",
    borderBottom: `1px solid ${BORDER}`,
    color: MUTED,
    fontWeight: 600,
    verticalAlign: "top",
  },
  td: {
    padding: "12px 14px",
    borderBottom: `1px solid ${BORDER}`,
    color: FG,
    verticalAlign: "top",
  },
  divider: {
    height: 1,
    background: BORDER,
    margin: "4px 0 10px 0",
  },
  bottomHelp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48, // ensures vertical centering space
    textAlign: "center",
    color: FG,
  },
  helpLink: {
    color: PINK,
    fontWeight: 800,
    textDecoration: "none",
  },
  footerLove: {
    marginTop: 12,
    textAlign: "center",
    color: MUTED,
    fontSize: 14,
  },
  brandLink: {
    color: PINK,
    textDecoration: "none",
    fontWeight: 800,
  },
};
