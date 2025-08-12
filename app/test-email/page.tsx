// app/test-email/page.tsx
export default function TestEmail() {
  // Sample test data
  const testData = {
    guestName: "John Doe",
    email: "john@example.com", 
    passType: "3-Day",
    events: "The Pregame, The Main Stage, The Aftershow",
    hasPlusOne: "Yes",
    plusOneName: "Jane Doe",
    hasKids: "No",
    phone: "+1 (555) 123-4567",
    mailingAddress: "123 Main St, Brooklyn, NY 11222, USA"
  };

  const emailHtml = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>🎟️ You're In! Bremmiepalooza 2026</title>
<style type="text/css">
img{-ms-interpolation-mode:bicubic;} 
table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} 
p, a, li, td, blockquote{mso-line-height-rule:exactly;} 
p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;} 
@media only screen and (max-width: 480px){
  body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} 
}
.mcnPreviewText{display: none !important;} 
.bodyCell{margin:0 auto; padding:0; width:100%;}
.ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font{line-height:100%;} 
.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} 
a[x-apple-data-detectors]{color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;} 
body{height:100%; margin:0; padding:0; width:100%; background: #000000;}
p{margin:0; padding:0;} 
table{border-collapse:collapse;} 
td, p, a{word-break:break-word;} 
h1, h2, h3, h4, h5, h6{display:block; margin:0; padding:0;} 
img, a img{border:0; height:auto; outline:none; text-decoration:none;} 
a[href^="tel"], a[href^="sms"]{color:inherit; cursor:default; text-decoration:none;} 
li p {margin: 0 !important;}

/* Custom Styles */
body, #bodyTable { background-color: rgb(0, 0, 0); }
body, table, td, p, a, li, blockquote { text-size-adjust: 100%; margin: 0px; padding: 0px; }
body { margin: 0px; padding: 0px; min-width: 100%; background-color: rgb(0, 0, 0); font-family: Arial, sans-serif; width: 100% !important; }
.container { width: 100%; max-width: 600px; margin: 0px auto; background-color: rgb(0, 0, 0); }
.header-section { padding: 40px 20px 0px; text-align: center; position: relative; background-color: rgb(0, 0, 0); }
.festival-logo { margin: 20px 0px 0px 0px; text-align: center; position: relative; z-index: 10; }
.festival-logo img { max-width: 90%; width: 500px; height: auto; display: block; margin: 0px auto; }
.hero-title { font-size: 48px; color: rgb(233, 30, 99); font-weight: 900; margin: 0px; font-family: "Arial Black", Arial, sans-serif; text-transform: uppercase; letter-spacing: 3px; }

@media only screen and (max-width: 600px) {
    .container { width: 100% !important; max-width: 100% !important; }
    .header-section { padding: 10px 15px 0px !important; }
    .festival-logo img { width: 90% !important; max-width: 350px !important; }
    .hero-title { font-size: 32px !important; }
    .content-padding { padding: 20px 15px !important; }
}
</style>
</head>
<body>
<span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">You're in! Thanks for RSVPing — here's your Bremmiepalooza recap.</span>

<center>
<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="background-color: rgb(0, 0, 0);">
<tbody><tr>
<td class="bodyCell" align="center" valign="top">
<table id="root" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody data-block-id="3" class="mceWrapper">
<tr><td style="background-color:transparent" valign="top" align="center" class="mceSectionHeader">
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px" role="presentation">
<tbody><tr><td style="background-color:#000000" valign="top" class="mceWrapperInner">
<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="2">
<tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
<table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
<tbody><tr><td valign="top" class="mceColumn" colspan="12" width="100%">
<table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
<tbody><tr><td valign="top">

<div class="container">
<!-- Header Section with Logo -->
<div class="header-section">
<div class="festival-logo">
<img src="https://bremmiepalooza.com/bremmiepalooza-logo-for-cta.png" alt="Bremmiepalooza 2026" width="500" height="auto" style="max-width: 90%; width: 500px; height: auto; display: block; margin: 0 auto;">
</div>
</div>

<!-- Hotel Photo Strip -->
<div style="text-align:center;margin:0;padding:0;">
<img src="https://bremmiepalooza.com/Hotel_Banner_v02.png" alt="Your Paradise Venue Awaits" width="600" style="width:100%;max-width:600px;height:auto;display:block;margin:0 auto;">
</div>

<!-- You're In! Hero -->
<div style="padding:40px 20px;text-align:center;">
<h1 class="hero-title">YOU'RE IN! 🎟️</h1>
</div>

<!-- Details Table -->
<div class="content-padding" style="padding:20px 30px 40px 30px;">
<table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background-color:#000000;">
<tbody>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Email</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.email}</td>
</tr>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Pass Type</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.passType}</td>
</tr>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Events</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.events}</td>
</tr>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Guest Name</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.guestName}</td>
</tr>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Plus One</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.hasPlusOne}</td>
</tr>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Plus One Name</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.plusOneName}</td>
</tr>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Kids</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.hasKids}</td>
</tr>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Phone</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.phone}</td>
</tr>
<tr>
<td style="padding:12px 16px;border-top:1px solid #333;font-weight:bold;color:#ffffff;width:40%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Mailing Address</td>
<td style="padding:12px 16px;border-top:1px solid #333;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${testData.mailingAddress}</td>
</tr>
</tbody>
</table>
</div>

</div>

</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>
</td></tr>
</tbody>
</table>
</center>

</body>
</html>`;

  return <div dangerouslySetInnerHTML={{ __html: emailHtml }} />;
}
