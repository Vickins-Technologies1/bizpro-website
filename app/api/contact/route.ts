import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contact-email";

export const runtime = "nodejs";
export const maxDuration = 20;
const MAX_BYTES = 12_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; expires: number }>();

function json(body: { ok: boolean; error?: string }, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest) {
  const length = Number(request.headers.get("content-length") || 0);
  if (length > MAX_BYTES) return json({ ok: false, error: "Request is too large." }, 413);
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) return json({ ok: false, error: "Request not allowed." }, 403);

  let body: unknown;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > MAX_BYTES) return json({ ok: false, error: "Request is too large." }, 413);
    body = JSON.parse(raw);
  } catch { return json({ ok: false, error: "Invalid request." }, 400); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return json({ ok: false, error: "Invalid request." }, 400);
  const fields = body as Record<string, unknown>;
  // Honeypot: appear to accept automated submissions without sending mail.
  if (typeof fields.website === "string" && fields.website.trim()) return json({ ok: true });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const limit = attempts.get(ip);
  if (limit && limit.count >= MAX_REQUESTS && limit.expires > now) return json({ ok: false, error: "Too many messages. Please try again in a few minutes." }, 429);
  attempts.set(ip, { count: (limit?.count || 0) + 1, expires: limit?.expires && limit.expires > now ? limit.expires : now + WINDOW_MS });

  const limits = { name: 100, email: 254, subject: 150, message: 5000 };
  const values = {} as Record<keyof typeof limits, string>;
  for (const key of Object.keys(limits) as Array<keyof typeof limits>) {
    const value = fields[key];
    if (typeof value !== "string") return json({ ok: false, error: "Please complete all fields." }, 400);
    values[key] = value.trim();
    if (!values[key] || values[key].length > limits[key] || /[\r\n]/.test(values[key]) && key !== "message") return json({ ok: false, error: "Please check the form fields and try again." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return json({ ok: false, error: "Enter a valid email address." }, 400);

  try {
    await sendContactEmail(values);
    return json({ ok: true });
  } catch (error) {
    const code = error instanceof Error ? error.message : "UNKNOWN";
    console.error("Contact email delivery failed", { code: code === "CONTACT_EMAIL_CONFIG_MISSING" ? code : "SMTP_DELIVERY_FAILED" });
    return json({ ok: false, error: "We couldn’t send your message right now. Please try again later or use the email address shown on this page." }, 503);
  }
}

export function GET() { return json({ ok: false, error: "Method not allowed." }, 405); }
export function PUT() { return json({ ok: false, error: "Method not allowed." }, 405); }
export function PATCH() { return json({ ok: false, error: "Method not allowed." }, 405); }
export function DELETE() { return json({ ok: false, error: "Method not allowed." }, 405); }
