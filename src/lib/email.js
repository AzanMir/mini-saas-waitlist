import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const BLOCKED_FROM_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
];

function getFromAddress() {
  const configured = process.env.FROM_EMAIL ?? "Azan SaaS <onboarding@resend.dev>";
  const match = configured.match(/<([^>]+)>/) ?? [null, configured];
  const address = (match[1] ?? configured).trim().toLowerCase();
  const domain = address.split("@")[1];

  if (domain && BLOCKED_FROM_DOMAINS.includes(domain)) {
    throw new Error(
      "Cannot send from a personal email (e.g. Gmail). Use onboarding@resend.dev for testing, or verify your own domain at https://resend.com/domains"
    );
  }

  return configured;
}

export async function sendWaitlistConfirmation(email) {
  if (!resend) {
    throw new Error("Email service is not configured. Set RESEND_API_KEY.");
  }

  const from = getFromAddress();

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: "You're on the Azan SaaS waitlist!",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h1 style="font-size: 24px; margin-bottom: 16px;">You're on the list!</h1>
        <p style="color: #444; line-height: 1.6;">
          Thanks for joining the Azan SaaS waitlist. We'll notify you at
          <strong>${email}</strong> as soon as we launch.
        </p>
        <p style="color: #888; font-size: 14px; margin-top: 24px;">
          — The Azan SaaS Team
        </p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
