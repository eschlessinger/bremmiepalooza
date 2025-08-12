import * as React from "react";

type Props = {
  rows: Array<[string, string]>;
  guestName?: string;
  site?: string;
};

const brand = {
  bg: "#f6f8fb",
  card: "#ffffff",
  text: "#0b1020",
  sub: "#4a5568",
  divider: "#e9edf1",
  accent: "#d81b8c",
  pill: "#f6e8ff",
  gradient:
    "linear-gradient(90deg,#EC4899 0%, #FACC15 33%, #3B82F6 66%, #A855F7 100%)",
};

export default function TicketConfirmation({
  rows,
  guestName,
  site = "https://bremmiepalooza.com",
}: Props) {
  const name = (guestName?.trim() || "Guest").replace(/[<>&]/g, (m) => esc[m]);

  // Pull some commonly-used fields if present
  const map = Object.fromEntries(rows);
  const passType = map["Pass Type"] || "";
  const events = map["Events"] || "";

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>You’re in — Bremmiepalooza</title>
        <meta name="color-scheme" content="light only" />
      </head>
      <body style={styles.body}>
        <table role="presentation" width="100%" style={styles.outer}>
          <tbody>
            <tr>
              <td>
                {/* Header */}
                <table role="presentation" width="100%" style={styles.header}>
                  <tbody>
                    <tr>
                      <td style={styles.headerStrip} />
                    </tr>
                    <tr>
                      <td style={styles.headerInner}>
                        <div style={styles.kicker}>Bremmiepalooza</div>
                        <h1 style={styles.title}>You’re In, {name}! 🎟️</h1>
                        <div style={styles.subtitle}>
                          Thanks for securing your tickets.
                        </div>

                        <div style={{ height: 16 }} />
                        <div style={styles.chipsRow}>
                          {passType ? (
                            <span style={styles.chip}>Pass: {passType}</span>
                          ) : null}
                          {events ? (
                            <span style={styles.chip}>Events: {events}</span>
                          ) : null}
                        </div>

                        <div style={{ height: 24 }} />
                        <a
                          href={`${site}/tickets/success`}
                          style={styles.cta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Tickets Info
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Card */}
                <table role="presentation" width="100%" style={styles.card}>
                  <tbody>
                    <tr>
                      <td style={{ padding: "24px" }}>
                        <div style={styles.cardTitle}>
                          Here’s a quick recap of what you submitted:
                        </div>

                        <table
                          role="presentation"
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={styles.table}
                        >
                          <tbody>
                            {rows
                              .filter(
                                ([, v]) =>
                                  v !== undefined &&
                                  v !== null &&
                                  String(v).trim() !== ""
                              )
                              .map(([k, v]) => (
                                <tr key={k}>
                                  <td style={styles.th}>{k}</td>
                                  <td style={styles.td}>{escapeHtml(v)}</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>

                        <div style={{ height: 8 }} />
                        <div style={styles.help}>
                          Questions? Just reply to this email or visit{" "}
                          <a href={site} style={styles.link}>
                            bremmiepalooza.com
                          </a>
                          .
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Footer */}
                <table role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style={styles.footer}>
                        Sent with ❤️ from{" "}
                        <a href={site} style={styles.link}>
                          Bremmiepalooza
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
      </body>
    </html>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    padding: 0,
    background: brand.bg,
    color: brand.text,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  outer: {
    width: "100%",
    maxWidth: 640,
    margin: "0 auto",
  },
  header: {
    background: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
  },
  headerStrip: {
    height: 10,
    backgroundImage: brand.gradient,
  },
  headerInner: {
    padding: "28px 24px 12px",
    textAlign: "left",
  },
  kicker: {
    letterSpacing: 0.6,
    fontWeight: 700,
    textTransform: "uppercase",
    color: brand.accent,
    fontSize: 12,
  },
  title: {
    margin: "8px 0 4px",
    fontSize: 28,
    lineHeight: "34px",
  },
  subtitle: {
    color: brand.sub,
    fontSize: 14,
  },
  chipsRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  chip: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: brand.pill,
    color: brand.text,
    fontSize: 12,
    border: "1px solid #ead8ff",
  },
  cta: {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: 999,
    color: "#0b1020",
    textDecoration: "none",
    fontWeight: 800,
    backgroundImage: brand.gradient,
  },
  card: {
    marginTop: 16,
    background: "#ffffff",
    borderRadius: 16,
    border: `1px solid ${brand.divider}`,
  },
  cardTitle: {
    fontWeight: 700,
    marginBottom: 10,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    width: 160,
    padding: "10px 0",
    color: brand.sub,
    fontSize: 13,
    verticalAlign: "top",
    borderTop: `1px solid ${brand.divider}`,
  },
  td: {
    padding: "10px 0",
    fontSize: 14,
    borderTop: `1px solid ${brand.divider}`,
  },
  help: {
    color: brand.sub,
    fontSize: 12,
  },
  link: {
    color: brand.accent,
    textDecoration: "none",
    fontWeight: 700,
  },
  footer: {
    textAlign: "center" as const,
    color: brand.sub,
    fontSize: 12,
    padding: "18px 0 32px",
  },
};

const esc: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;" };
function escapeHtml(input: string) {
  return String(input).replace(/[<>&]/g, (m) => esc[m]);
}
