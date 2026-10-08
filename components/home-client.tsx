"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  CalendarClock,
  Check,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Layers3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users2,
  Wifi
} from "lucide-react";
import { DownloadCTA } from "@/components/ui/download-cta";
import { Container } from "@/components/ui/container";
import { IndustrySelector } from "@/components/industry-selector";
import { OfflineSyncVisual } from "@/components/product/offline-sync-visual";
import { ProductShowcase } from "@/components/product/product-showcase";
import { homepageFeatureBlocks } from "@/config/features";
import { industryGroups } from "@/config/industries";
import { pricingPlans } from "@/config/pricing";
import { faqItems } from "@/config/faq";
import { cn } from "@/lib/utils";

const capabilityItems = [
  [Layers3, "Sales"], [Activity, "Operations"], [CircleDollarSign, "Finance"], [Users2, "Customers"],
  [Users2, "Teams"], [Building2, "Branches"], [BarChart3, "Insights"], [Wifi, "Offline"]
] as const;

const previewMetrics = [
  ["Revenue", "In view"], ["Transactions", "Recorded"], ["Expenses", "Tracked"], ["Customers", "Active"]
] as const;

const previewActivity = [
  [BarChart3, "New sale", "Recorded in Sales"], [CalendarClock, "Appointment", "Ready for today"], [Users2, "Customer", "Profile updated"],
  [CreditCard, "Payment", "Added to Finance"], [Layers3, "Service / job", "Assigned to a team"], [CircleDollarSign, "Expense", "Captured for review"]
] as const;

function WorkspacePreview() {
  return <div className="overflow-hidden rounded-[1.25rem] border border-border bg-card shadow-panel"><div className="flex items-center justify-between border-b border-border bg-surface-muted/70 px-4 py-3 text-[10px] font-semibold text-muted sm:px-5"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Dira OS / Command center</span><span className="flex items-center gap-1.5 text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Connected</span></div><div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1.02fr_.98fr]"><div className="rounded-xl border border-border bg-surface-muted p-4"><div className="flex items-start justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Business performance</p><p className="mt-3 text-2xl font-semibold tracking-[-0.05em]">One clear picture.</p><p className="mt-2 text-xs leading-5 text-muted">The work behind the business, together.</p></div><BarChart3 className="h-5 w-5 text-primary" /></div><div className="mt-5 grid grid-cols-2 gap-2">{previewMetrics.map(([label, value]) => <div key={label} className="rounded-lg border border-border bg-card p-3"><p className="text-[10px] text-muted">{label}</p><p className="mt-2 text-xs font-semibold">{value}</p></div>)}</div><div className="mt-4 flex h-12 items-end gap-1.5 rounded-lg border border-border bg-card px-3 pb-2 pt-3">{[32, 46, 38, 58, 51, 68, 62, 82].map((height, index) => <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80" style={{ height: `${height}%` }} />)}</div></div><div className="rounded-xl border border-border bg-surface-muted p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold">Recent activity</p><span className="text-[10px] text-muted">Illustrative view</span></div><div className="mt-3 space-y-1.5">{previewActivity.map(([Icon, title, detail]) => <div key={title} className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-2.5 py-2"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"><Icon className="h-3.5 w-3.5" /></span><span className="min-w-0"><b className="block truncate text-[11px] font-semibold">{title}</b><small className="mt-0.5 block truncate text-[10px] text-muted">{detail}</small></span><Check className="ml-auto h-3.5 w-3.5 shrink-0 text-accent" /></div>)}</div></div></div><div className="grid gap-2 border-t border-border bg-surface-muted/45 px-4 py-3 sm:grid-cols-3 sm:px-5"><span className="flex items-center gap-2 text-[10px] text-muted"><MapPin className="h-3.5 w-3.5 text-accent" /> Branches connected</span><span className="flex items-center gap-2 text-[10px] text-muted"><Users2 className="h-3.5 w-3.5 text-accent" /> Team in sync</span><span className="flex items-center gap-2 text-[10px] text-muted"><Wifi className="h-3.5 w-3.5 text-accent" /> Ready offline</span></div></div>;
}

export function HomeClient() {
  return <main>
    <section className="hero !bg-[radial-gradient(circle_at_80%_5%,var(--wash),transparent_32%),linear-gradient(var(--background),var(--surface))]"><Container className="hero-grid"><div className="hero-copy"><span className="eyebrow"><Sparkles size={13} /> Business operating system</span><h1>Run your entire business from one system.</h1><p>Connect sales, operations, finance, customers, teams, branches and insights in one workspace that keeps working when the internet does not.</p><div className="hero-actions"><DownloadCTA label="Start Free" /><Link className="button secondary" href="#capabilities">Explore Dira OS <ArrowRight size={16} /></Link></div><div className="proof-row"><span><Check size={14} /> One month free</span><span><Wifi size={14} /> Offline-first</span><span><ShieldCheck size={14} /> Role-based access</span></div></div><div className="hero-product"><WorkspacePreview /><div className="preview-caption"><span><i /> Product workspace preview</span><b>Everything happening, connected.</b></div></div></Container><Container className="trust-row"><span>One system for the work behind the work</span><div>{["SALES", "OPERATIONS", "FINANCE", "CUSTOMERS", "INSIGHTS"].map((item) => <b key={item}>{item}</b>)}</div></Container></section>

    <section id="capabilities" className="border-y border-border bg-surface"><Container className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4 lg:grid-cols-8">{capabilityItems.map(([Icon, label]) => <div key={label} className="flex items-center justify-center gap-2 bg-surface px-2 py-4 text-xs font-semibold text-muted"><Icon className="h-4 w-4 text-primary" /> {label}</div>)}</Container></section>

    <section className="section surface"><Container><div className="section-heading narrow"><span className="eyebrow">Product ecosystem</span><h2>One workspace across the way you work.</h2><p>Move from the command center to workflows, mobile work and insights without losing the connected product picture underneath.</p></div><div className="mt-12"><ProductShowcase /></div></Container></section>

    <section className="section" id="features"><Container><div className="section-heading"><span className="eyebrow">Everything your business needs</span><h2>A business operating system, shaped around the work.</h2><p>Start with the capabilities your business needs today and keep the operating picture connected as you grow.</p></div><div className="bento-grid">{homepageFeatureBlocks.map(({ icon: Icon, title, description, bullets }, index) => <article className={`feature-card feature-${index}`} key={title}><div className="icon-box"><Icon size={18} /></div><h3>{title}</h3><p>{description}</p><div className="mt-6 flex flex-wrap gap-2">{bullets.map((bullet) => <span key={bullet} className="rounded-md border border-border bg-surface px-2 py-1 text-[10px] font-medium text-muted">{bullet}</span>)}</div></article>)}</div></Container></section>

    <section className="section surface"><Container className="split"><div className="section-heading"><span className="eyebrow">Offline-first by design</span><h2>Keep working. Reconnect when you can.</h2><p>Core actions can be recorded locally so the day does not stop when connectivity is unavailable. When the connection returns, queued work can sync back to the wider workspace.</p><Link href="/features" className="button secondary mt-7">See offline capabilities <ArrowRight size={16} /></Link></div><OfflineSyncVisual /></Container></section>

    <section className="section" id="industries"><Container><div className="section-heading"><span className="eyebrow">Universal by design</span><h2>Built around real business workflows.</h2><p>Different industries, different rhythms. The operating system stays connected while the work adapts to the business.</p></div><div className="mt-10"><IndustrySelector /></div><div className="mt-7 flex flex-wrap gap-2">{industryGroups.map((industry) => <Link href={`/industries#${industry.key}`} key={industry.key} className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-semibold text-muted transition hover:border-primary/35 hover:text-foreground">{industry.label}</Link>)}</div></Container></section>

    <section className="section dark-panel"><Container className="split"><div className="section-heading light"><span className="eyebrow">Business intelligence</span><h2>See the business as it is.</h2><p>Bring sales activity, finance, customers, teams and operations into a more readable view—without making the work feel more complicated.</p><div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">{["Revenue", "Expenses", "Customers", "Operations", "Teams", "Trends"].map((item) => <span key={item} className="rounded-lg border border-border bg-surface-muted/70 px-3 py-2 text-xs text-muted">{item}</span>)}</div></div><div className="insight-grid !mt-0"><div className="insight-chart"><span>Business activity</span><strong>One view</strong><em>Signals connected across the workspace</em><svg viewBox="0 0 600 180" aria-label="Illustrative business activity trend"><path d="M0 145 C70 134 90 115 145 124 S220 90 270 103 S345 61 395 78 S460 45 515 55 S565 34 600 22" fill="none" stroke="currentColor" strokeWidth="3" /></svg></div><div className="insight-side"><div><span>Sales</span><strong>Recorded</strong><em>Activity stays visible</em></div><div><span>Team activity</span><strong>Connected</strong><em>Ownership stays clear</em></div><aside><Sparkles size={15} /><span><b>Useful context</b>See what changed and where to look next.</span></aside></div></div></Container></section>

    <section className="section" id="pricing-preview"><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="section-heading narrow"><span className="eyebrow">Simple pricing</span><h2>Start small. Grow with clarity.</h2><p>Every plan includes one month free and no card required.</p></div><Link href="/pricing" className="text-link ml-0">View full pricing <ArrowRight size={15} /></Link></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{pricingPlans.map((plan) => <article key={plan.name} className={cn("rounded-xl border bg-card p-5", plan.recommended ? "border-primary/50 shadow-panel" : "border-border")}><div className="flex items-center justify-between"><h3 className="font-semibold">{plan.name}</h3>{plan.recommended && <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">Recommended</span>}</div><p className="mt-5 text-xl font-semibold tracking-[-0.04em]">{plan.price}</p><p className="mt-2 text-xs text-muted">{plan.note}</p><div className="mt-5 space-y-2">{plan.features.map((feature) => <p key={feature} className="flex items-start gap-2 text-xs text-muted"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" /> {feature}</p>)}</div></article>)}</div></Container></section>

    <section className="faq-section"><Container><div className="section-heading narrow"><span className="eyebrow">Questions, answered</span><h2>Clarity before you start.</h2></div><div className="faq-grid">{faqItems.slice(0, 6).map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={16} /></summary><p>{answer}</p></details>)}</div><div className="mt-7"><Link href="/faq" className="text-link ml-0">Read all FAQs <ArrowRight size={15} /></Link></div></Container></section>

    <section className="final-cta"><Container><span className="eyebrow">Run with clarity</span><h2>One operating system.<br /><em>More room to move.</em></h2><p>Bring the work of your business into one connected place.</p><DownloadCTA label="Get Dira OS" /><Link href="/download" className="text-link">Explore downloads <ArrowRight size={15} /></Link></Container></section>
  </main>;
}
