// /emails/TicketConfirmation.tsx
import * as React from "react";

type Row = [label: string, value: string];

export default function TicketConfirmation({
  rows,
  guestName,
}: {
  rows: Row[];
  guestName?: string;
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
        <title>You’re In! 🎟️ Your Bremmiepalooza Tix</title>
      </head>
      <body style={styles.body}>
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            {/* Header gradient bar */}
            <tr>
              <td>
                <div style={styles.headerBar} />
              </td>
            </tr>

            {/* Card */}
            <tr>
              <td style={styles.container}>
                <table role="presentation" width="100%" style={styles.card}>
                  <tbody>
                    <tr>
                      <td style={{ padding: "24px" }}>
                        <h1 style={styles.h1}>
                          YOU’RE IN! <span style={{ fontSize: 22 }}>🎟️</span>
                        </h1>

                        <p style={styles.lead}>
                          Thanks for securing your tickets{guestName ? `, ${guestName}` : ""}!
                        </p>

                        <p style={styles.sublead}>
                          Here’s a quick recap of what you submitted:
                        </p>

                        {/* Details Table */}
                        <table role="presentation" width="100%" style={styles.detailsTable}>
                          <tbody>
                            {rows.map(([k, v], i) => (
                              <tr key={i}>
                                <td style={styles.detailsKey}>{k}</td>
                                <td style={styles.detailsValue}>{v}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* Footer help text */}
                        <p style={styles.footerText}>
                          Questions? Just reach out to us at{" "}
                          <strong style={styles.pink}>info@bremmiepalooza.com</strong>
                          .
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Bottom padding */}
            <tr>
              <td style={{ height: 32 }} />
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
    background: "#f7f7fb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", sans-serif',
    color: "#111827",
  },
  headerBar: {
    width: "100%",
    height: 56,
    background:
      "linear-gradient(90deg,#ec4899 0%,#f59e0b 20%,#facc15 35%,#22c55e 55%,#3b82f6 75%,#a855f7 100%)",
  },
  container: {
    padding: "20px 16px",
  },
  card: {
    maxWidth: 720,
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: 16,
    boxShadow:
      "0 1px 3px rgba(0,0,0,0.07), 0 10px 24px rgba(16,24,40,0.06)",
  },
  h1: {
    margin: 0,
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: 0.3,
  },
  lead: {
    margin: "16px 0 6px 0",
    fontSize: 16,
    color: "#111827",
  },
  sublead: {
    margin: "2px 0 18px 0",
    fontSize: 14,
    color: "#374151",
  },
  detailsTable: {
    width: "100%",
    borderCollapse: "collapse",
    borderTop: "1px solid #e5e7eb",
    borderBottom: "1px solid #e5e7eb",
  },
  detailsKey: {
    width: "32%",
    padding: "10px 12px",
    fontWeight: 700,
    background: "#fafafa",
    borderBottom: "1px solid #efefef",
  },
  detailsValue: {
    padding: "10px 12px",
    borderBottom: "1px solid #efefef",
    color: "#111827",
  },
  footerText: {
    marginTop: 18,
    fontSize: 14,
    color: "#374151",
  },
  pink: {
    color: "#e11d8d",
    fontWeight: 800,
  },
};
