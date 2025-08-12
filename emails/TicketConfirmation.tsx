import * as React from "react";

/** A row of label/value pairs shown in the recap table */
export type Row = [string, string];

type Props = {
  rows: Row[];
  dietaryItems?: string[];
  guestName?: string;
  site: string;
};

/* ----------------------- palette / tokens ----------------------- */
const BRAND_PINK = "#E11D8F";
const PURPLE_TEXT = "#4F46E5"; // indigo-600 vibe
const LAVENDER_BG = "#F4EAFF"; // light lavender fill for chips
const BORDER = "#E9EDF5";
const TEXT = "#111827";
const MUTED = "#6B7280";

/* ----------------------- tiny helpers --------------------------- */
function getValue(rows: Row[], label: string): string {
  const found = rows.find(([k]) => k === label);
  return found ? found[1] : "";
}

/** “Pill / chip” for the little Pass / Events labels under the heading */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 12px",
        background: LAVENDER_BG,
        color: PURPLE_TEXT,
        fontWeight: 800,            // bold purple text
        borderRadius: 999,
        fontSize: 14,
        lineHeight: "18px",
        border: `1px solid ${BORDER}`, // subtle outline
      }}
    >
      {children}
    </span>
  );
}

/* ----------------------- component ------------------------------ */
export default function TicketConfirmation({
  rows,
  dietaryItems = [],
  guestName,
  site,
}: Props) {
  const name = guestName || "Guest";

  const passType = getValue(rows, "Pass Type");
  const events = getValue(rows, "Events");

  return (
    <Html>
      <Head />
      <Preview>{`You’re In, ${name}! 🎟️`}</Preview>
      <Body style={body}>
        {/* main card */}
        <div style={card}>
          {/* gradient bar INSIDE the card, flush to the top edge */}
          <div style={gradBar} />

          <div style={inner}>
            {/* brand */}
            <div style={brand}>BREMMIEPALOOZA</div>

            {/* title */}
            <h1 style={title}>
              You’re In, {name}! <span style={ticketEmoji}>🎟️</span>
            </h1>

            <p style={lead}>Thanks for securing your tickets.</p>

            {/* chips row (Pass / Events) */}
            <div style={chipsRow}>
              {passType && <Chip>Pass: {passType}</Chip>}
              {events && <Chip>Events: {events}</Chip>}
            </div>

            {/* recap table */}
            <div style={recapWrap}>
              <h3 style={recapTitle}>Here’s a quick recap of what you submitted:</h3>
              <table width="100%" cellPadding={0} cellSpacing={0} style={table}>
                <tbody>
                  {rows.map(([k, v], i) => (
                    <tr key={`${k}-${i}`}>
                      <td style={cellLabel}>{k}</td>
                      <td style={cellValue}>{v}</td>
                    </tr>
                  ))}
                  {dietaryItems.length > 0 && (
                    <tr>
                      <td style={cellLabel}>Dietary Restrictions</td>
                      <td style={cellValue}>
                        {dietaryItems.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* bottom question line – centered within the white card */}
            <div style={bottomDivider} />
            <p style={bottomQuestion}>
              Questions? Just reach out to us at{" "}
              <a
                href="mailto:info@bremmiepalooza.com"
                style={mailto}
              >
                info@bremmiepalooza.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* footer OUTSIDE the card, centered in the gray background */}
        <p style={footer}>
          Sent with <span style={{ color: "#EF4444" }}>❤️</span> from{" "}
          <a href={site} style={brandLink}>
            Bremmiepalooza
          </a>
          .
        </p>
      </Body>
    </Html>
  );
}

/* ----------------------- styles ------------------------------ */
const body: React.CSSProperties = {
  margin: 0,
  padding: "24px",
  background: "#F6F7FB",
  color: TEXT,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
};

const card: React.CSSProperties = {
  maxWidth: 680,
  margin: "0 auto",
  background: "#FFFFFF",
  borderRadius: 16,
  border: `1px solid ${BORDER}`,
  overflow: "hidden",
};

const gradBar: React.CSSProperties = {
  height: 14,
  width: "100%",
  background:
    "linear-gradient(90deg,#EC4899,#F59E0B,#10B981,#3B82F6,#A855F7)",
};

const inner: React.CSSProperties = {
  padding: 24,
};

const brand: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: 1.2,
  fontWeight: 800,
  color: BRAND_PINK,
  textTransform: "uppercase",
  marginBottom: 8,
};

const title: React.CSSProperties = {
  fontSize: 32,
  lineHeight: "36px",
  margin: "4px 0 6px",
};

const ticketEmoji: React.CSSProperties = { fontSize: 24 };

const lead: React.CSSProperties = {
  margin: "0 0 14px",
  color: MUTED,
  fontSize: 16,
};

const chipsRow: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  margin: "6px 0 18px",
};

const recapWrap: React.CSSProperties = {
  border: `1px solid ${BORDER}`,
  borderRadius: 12,
  padding: 18,
};

const recapTitle: React.CSSProperties = {
  margin: "0 0 10px",
  fontSize: 16,
};

const table: React.CSSProperties = {
  borderCollapse: "collapse",
  width: "100%",
};

const cellLabel: React.CSSProperties = {
  width: 180,
  verticalAlign: "top",
  color: MUTED,
  fontSize: 14,
  padding: "10px 10px 10px 0",
  borderTop: `1px solid ${BORDER}`,
};

const cellValue: React.CSSProperties = {
  fontSize: 15,
  padding: "10px 0",
  borderTop: `1px solid ${BORDER}`,
};

const bottomDivider: React.CSSProperties = {
  height: 1,
  background: BORDER,
  margin: "20px 0 0",
};

const bottomQuestion: React.CSSProperties = {
  textAlign: "center",
  margin: "16px 0 8px",
  fontSize: 14,
};

const mailto: React.CSSProperties = {
  color: BRAND_PINK,
  textDecoration: "none",
  fontWeight: 800,
};

const footer: React.CSSProperties = {
  textAlign: "center",
  color: MUTED,
  fontSize: 14,
  margin: "16px 0 0",
};

const brandLink: React.CSSProperties = {
  color: BRAND_PINK,
  textDecoration: "none",
  fontWeight: 800,
};

/* wrapper tags to satisfy react-email runtime */
function Html({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}

function Head() {
  return <head />;
}

function Body({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <body style={style}>{children}</body>;
}

function Preview({ children }: { children: React.ReactNode }) {
  // react-email reads <Preview> but here we just render nothing to keep the
  // file standalone/compiling in Next.
  return <>{children && null}</>;
}
