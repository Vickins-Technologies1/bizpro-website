import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock3, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DownloadCTA } from "@/components/ui/download-cta";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Contact Dira OS Support", description: "Contact the Dira OS team about business management software, Android installation, support and plans.", path: "/contact" });

export default function ContactPage() {
  const contactItems = [
    siteConfig.contactEmail ? { label: "Email", href: `mailto:${siteConfig.contactEmail}`, value: siteConfig.contactEmail, icon: Mail } : null,
    siteConfig.contactPhone ? { label: "Phone", href: `tel:${siteConfig.contactPhone}`, value: siteConfig.contactPhone, icon: Phone } : null,
    siteConfig.whatsappUrl ? { label: "WhatsApp", href: siteConfig.whatsappUrl, value: "Open WhatsApp", icon: MessageCircle, external: true } : null
  ].filter(Boolean) as Array<{ label: string; href: string; value: string; icon: typeof Mail; external?: boolean }>;

  return <main><section className="relative overflow-hidden border-b border-border bg-surface py-16 sm:py-20 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,var(--wash),transparent_34%)]" /><Container className="relative"><Reveal><div className="max-w-3xl"><p className="eyebrow">Contact Dira OS</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl">Let’s make the next step clearer.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Use the available support channels or send a message with the form. We’ll keep the conversation focused on what your business needs.</p><div className="mt-8 flex flex-wrap gap-3"><DownloadCTA label="Start Free" /><Link href="/faq" className="button secondary">Read FAQs <ArrowRight className="h-4 w-4" /></Link></div></div></Reveal></Container></section>

    <section className="section"><Container className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]"><div><div className="section-heading"><span className="eyebrow">Available channels</span><h2>Choose the way that works for you.</h2><p>Contact details shown here come from the configured Dira OS support channels.</p></div><div className="mt-8 grid gap-3">{contactItems.length ? contactItems.map(({ label, href, value, icon: Icon, external }, index) => <Reveal key={label} delay={index * 70} direction="left"><a className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-primary/35" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span><span><b className="block text-sm font-semibold">{label}</b><small className="mt-1 block text-xs text-muted">{value}</small></span><ArrowRight className="ml-auto h-4 w-4 text-muted transition group-hover:translate-x-1 group-hover:text-primary" /></a></Reveal>) : <div className="rounded-xl border border-border bg-card p-4 text-sm leading-6 text-muted">No direct contact channels are configured yet. Use the form to prepare a message when support details become available.</div>}</div><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-border bg-surface p-4"><Clock3 className="h-4 w-4 text-accent" /><p className="mt-3 text-xs font-semibold">Support hours</p><p className="mt-1 text-xs text-muted">{siteConfig.supportHours}</p></div><div className="rounded-xl border border-border bg-surface p-4"><ShieldCheck className="h-4 w-4 text-primary" /><p className="mt-3 text-xs font-semibold">Useful context</p><p className="mt-1 text-xs text-muted">Tell us about your team and workflow.</p></div></div></div><div><ContactForm /></div></Container></section>

    <section className="section surface"><Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div><p className="eyebrow">Need a quick answer?</p><h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Start with the FAQ.</h2><p className="mt-2 text-sm text-muted">Find clear answers about offline work, plans, teams and branches.</p></div><Link href="/faq" className="button secondary">Read FAQs <ArrowRight className="h-4 w-4" /></Link></Container></section>
  </main>;
}
