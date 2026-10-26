"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "We couldn’t send your message. Please try again.");
      form.reset();
      setStatus("sent");
      setFeedback("Thanks for reaching out. Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "We couldn’t send your message. Please try again.");
    }
  }

  const inputClass = "min-h-10 rounded-2xl border border-border/70 bg-background/70 px-3.5 text-sm outline-none transition placeholder:text-muted focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring";
  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-border/70 bg-card/70 p-4 sm:p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">Name
          <input name="name" autoComplete="name" required maxLength={100} className={inputClass} placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-medium">Email
          <input name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} placeholder="you@example.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium">Subject
        <input name="subject" required maxLength={150} className={inputClass} placeholder="How can we help?" />
      </label>
      <label className="grid gap-2 text-sm font-medium">Message
        <textarea name="message" rows={6} required maxLength={5000} className="rounded-2xl border border-border/70 bg-background/70 px-3.5 py-3 text-sm outline-none transition placeholder:text-muted focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring" placeholder="Tell us what you need..." />
      </label>
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={status === "sending"} className={cn(buttonStyles("primary"), "disabled:cursor-wait disabled:opacity-60")}>
          <Send className="h-4 w-4" aria-hidden="true" />{status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className={cn("text-sm text-muted", status === "sent" && "text-accent", status === "error" && "text-red-600")}>
          {feedback || "We’ll get back to you as soon as we can."}
        </p>
      </div>
    </form>
  );
}
