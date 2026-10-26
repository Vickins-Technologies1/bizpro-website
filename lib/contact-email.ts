import nodemailer from "nodemailer";

export type ContactMessage = { name: string; email: string; subject: string; message: string };

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
}

export async function sendContactEmail(data: ContactMessage) {
  const { SMTP_USER, GOOGLE_APP_PASSWORD, CONTACT_RECEIVER_EMAIL } = process.env;
  if (!SMTP_USER || !GOOGLE_APP_PASSWORD || !CONTACT_RECEIVER_EMAIL) throw new Error("CONTACT_EMAIL_CONFIG_MISSING");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: SMTP_USER, pass: GOOGLE_APP_PASSWORD },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000
  });
  const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, escapeHtml(value)])) as ContactMessage;
  await transporter.sendMail({
    from: SMTP_USER,
    to: CONTACT_RECEIVER_EMAIL,
    replyTo: data.email,
    subject: `[Dira OS Contact] ${data.subject}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`,
    html: `<h2>Dira OS contact message</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Subject:</strong> ${safe.subject}</p><p><strong>Message:</strong></p><p style="white-space:pre-wrap">${safe.message}</p>`
  });
}
