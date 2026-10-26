import nodemailer from "nodemailer";

const { SMTP_USER, GOOGLE_APP_PASSWORD, CONTACT_RECEIVER_EMAIL } = process.env;
if (!SMTP_USER || !GOOGLE_APP_PASSWORD || !CONTACT_RECEIVER_EMAIL) {
  console.error("Missing SMTP_USER, GOOGLE_APP_PASSWORD, or CONTACT_RECEIVER_EMAIL.");
  process.exit(1);
}

try {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: SMTP_USER, pass: GOOGLE_APP_PASSWORD },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000
  });
  await transporter.verify();
  console.log("Gmail SMTP connection and authentication verified.");
} catch {
  console.error("Gmail SMTP verification failed. Check the server-side credentials and Gmail account settings.");
  process.exitCode = 1;
}
