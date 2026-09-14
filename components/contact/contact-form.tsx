"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { getMailtoUrl, siteConfig } from "@/config/site";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!siteConfig.contactEmail) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `Dira OS contact from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      "",
      message
    ].join("\n");

    const mailtoUrl = getMailtoUrl(subject, body);
    if (mailtoUrl) {
      setStatus("sent");
      window.location.href = mailtoUrl;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-border/70 bg-card/70 p-4 sm:p-5">
      {status === "sent" ? (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-300">
          Message ready. Your email app should open with the details prefilled.
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            name="name"
            autoComplete="name"
            className="min-h-10 rounded-2xl border border-border/70 bg-background/70 px-3.5 text-sm outline-none transition placeholder:text-muted focus:border-primary/40"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="min-h-10 rounded-2xl border border-border/70 bg-background/70 px-3.5 text-sm outline-none transition placeholder:text-muted focus:border-primary/40"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium">
        Company
        <input
          name="company"
          autoComplete="organization"
          className="min-h-10 rounded-2xl border border-border/70 bg-background/70 px-3.5 text-sm outline-none transition placeholder:text-muted focus:border-primary/40"
          placeholder="Company name"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea
          name="message"
          rows={6}
          className="rounded-2xl border border-border/70 bg-background/70 px-3.5 py-3 text-sm outline-none transition placeholder:text-muted focus:border-primary/40"
          placeholder="Tell us what you need..."
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className={cn(buttonStyles("primary"), !siteConfig.contactEmail && "cursor-not-allowed opacity-60")}
          disabled={!siteConfig.contactEmail}
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Send message
        </button>
        <p className="text-sm text-muted">The form opens your email app with the details prefilled.</p>
      </div>
    </form>
  );
}
