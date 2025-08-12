// --- Pretty HTML email (brand-safe, inline styles) ---
const SITE = "https://bremmiepalooza.com"; // used for logo link

const label = (s: string) => s.replace(/[_-]/g, " ")
  .replace(/\b\w/g, (m) => m.toUpperCase());

const asList = (v: any) =>
  Array.isArray(v) ? v.filter(Boolean).join(", ") : v ?? "";

const formatRows = (email: string, p: Record<string, any>) => {
  // Friendly mapping of your form fields -> display rows
  const addr = p?.mailingAddress || {};
  const dietary =
    typeof p?.dietaryRestrictions === "object"
      ? Object.entries(p.dietaryRestrictions)
          .map(([who, arr]: any) => `${label(who)}: ${asList(arr)}`)
          .join(" · ")
      : "";

  const rows: Array<[string, string]> = [
    ["Email", email],
    ["Pass Type", p?.passType],
    ["Events", asList(p?.events?.length ? p.events : ["pregame","mainstage","aftershow"])],
    ["Guest Name", p?.guestName],
    ...(p?.hasPlusOne === "yes" ? [["+1 Name", p?.plusOneName]] : []),
    ["Kids", p?.hasKids === "yes" ? (p?.numKids || "Yes") : "No"],
    ...(p?.hasKids === "yes" && Array.isArray(p?.kidNames) && p.kidNames.length
      ? [["Kid Names", asList(p.kidNames)]]
      : []),
    ["Wants Babysitting", p?.wantsBabysitting || "no"],
    ...(p?.wantsBabysitting === "yes" && Array.isArray(p?.babysittingEvents)
      ? [["Babysitting For", asList(p.babysittingEvents)]]
      : []),
    ...(dietary ? [["Dietary Restrictions", dietary]] : []),
    ...(p?.musicPreferences ? [["Music Preferences", p.musicPreferences]] : []),
    ["Mailing Address",
      [addr?.name, addr?.street, `${addr?.city || ""}${addr?.state ? ", " + addr.state : ""} ${addr?.zip || ""}`, addr?.country]
        .filter(Boolean).join(" · ")
    ],
    ["Phone", p?.phone],
    ["Timestamp", new Date().toISOString()],
  ];
  return rows.filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "");
};

const makeHtml = (email: string, payload: Record<string, any>) => {
  const rows = formatRows(email, payload)
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 12px;border-top:1px solid #eee;font-weight:600;color:#0f172a;width:38%">${label(
          k
        )}</td>
        <td style="padding:10px 12px;border-top:1px solid #eee;color:#0f172a">${String(
          v
        )}</td>
      </tr>`
    )
    .join("");

  // hidden preview text
  const preheader =
    "You’re in! Thanks for RSVPing — here’s your Bremmiepalooza recap.";

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f5f7fb;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">
      ${preheader}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f7fb;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:14px;box-shadow:0 3px 20px rgba(0,0,0,0.06);overflow:hidden">
            <!-- Header -->
            <tr>
              <td style="background:#d81b8c;background-image:linear-gradient(90deg,#EC4899,#FACC15,#3B82F6,#A855F7);color:#ffffff;padding:28px 24px;text-align:center">
                <a href="${SITE}" style="text-decoration:none;display:inline-block">
                  <img src="${SITE}/bremmiepalooza-logo-for-cta.png" alt="Bremmiepalooza" width="260" style="display:block;margin:0 auto 10px;max-width:100%;border:0;outline:none">
                </a>
                <div style="font-family:Arial Black, Impact, Arial, sans-serif;font-size:24px;line-height:1.2;text-transform:uppercase;letter-spacing:.5px">
                  You’re In! 🎟️
                </div>
              </td>
            </tr>

            <!-- Body copy -->
            <tr>
              <td style="padding:24px 24px 8px;font-family:Arial, Helvetica, sans-serif;color:#0f172a">
                <p style="margin:0 0 12px;font-size:16px">
                  Thanks for securing your tickets, <strong>${payload?.guestName || ""}</strong>!
                </p>
                <p style="margin:0 0 4px;font-size:14px;color:#475569">
                  Here’s a quick recap of what you submitted:
                </p>
              </td>
            </tr>

            <!-- Recap table -->
            <tr>
              <td style="padding:0 24px 12px">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-family:Arial, Helvetica, sans-serif;font-size:14px">
                  <tbody>
                    ${rows}
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td align="center" style="padding:12px 24px 28px">
                <a href="${SITE}/tickets" style="display:inline-block;background-image:linear-gradient(90deg,#EC4899,#FACC15,#3B82F6,#A855F7);color:#111;text-decoration:none;font-weight:700;border-radius:999px;padding:12px 22px;font-family:Arial Black, Impact, Arial, sans-serif;font-size:14px">
                  View Tickets Info
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f8fafc;color:#64748b;padding:16px 24px;text-align:center;font-family:Arial, Helvetica, sans-serif;font-size:12px">
                Questions? Reply to this email or visit
                <a href="${SITE}" style="color:#0ea5e9;text-decoration:none">${SITE.replace("https://","")}</a>.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
