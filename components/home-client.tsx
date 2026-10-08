"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  CloudOff,
  Layers3,
  Package,
  ShieldCheck,
  Sparkles,
  Users2,
  Wifi
} from "lucide-react";
import { DownloadCTA } from "@/components/ui/download-cta";
import { Container } from "@/components/ui/container";
import { OfflineSyncVisual } from "@/components/product/offline-sync-visual";
import { ProductShowcase } from "@/components/product/product-showcase";
import { homepageFeatureBlocks } from "@/config/features";
import { industryGroups } from "@/config/industries";
import { pricingPlans } from "@/config/pricing";
import { faqItems } from "@/config/faq";
import { cn } from "@/lib/utils";

const capabilityItems = [
  [Layers3, "Sales"], [Package, "Operations"], [CircleDollarSign, "Finance"],
  [Users2, "Teams"], [Building2, "Branches"], [BarChart3, "Insights"], [Wifi, "Offline"]
] as const;

function WorkspacePreview() {
  const rows = [
    ["Today’s activity", "Sales, stock and finance in one view"],
    ["Team workspace", "Roles and branch access"],
    ["Connection status", "Ready to work offline"]
  ];

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-border bg-card shadow-panel">
      <div className="flex items-center justify-between border-b border-border bg-surface-muted/70 px-4 py-3 text-[10px] font-semibold text-muted sm:px-5">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Dira OS / Workspace</span>
        <span className="flex items-center gap-1.5 text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Connected</span>
      </div>
      <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl border border-border bg-surface-muted p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Business overview</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.05em]">One clear picture.</p>
          <p className="mt-2 text-xs leading-5 text-muted">Bring the work behind your business into one calm workspace.</p>
          <div className="mt-6 grid grid-cols-2 gap-2">{[["Sales", "Active"], ["Inventory", "In view"], ["Finance", "Tracked"], ["Teams", "Aligned"]].map(([label, status]) => <div key={label} className="rounded-lg border border-border bg-card p-3"><p className="text-[10px] text-muted">{label}</p><p className="mt-2 text-xs font-semibold">{status}</p></div>)}</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1"><p className="text-xs font-semibold">Workspace signals</p><span className="text-[10px] text-muted">Illustrative view</span></div>
          {rows.map(([title, description], index) => <div key={title} className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5"><span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", index === 0 ? "bg-primary/10 text-primary" : index === 1 ? "bg-accent/10 text-accent" : "bg-surface-muted text-muted")}>{index === 0 ? <BarChart3 className="h-4 w-4" /> : index === 1 ? <Users2 className="h-4 w-4" /> : <CloudOff className="h-4 w-4" />}</span><span><b className="block text-xs font-semibold">{title}</b><small className="mt-1 block text-[10px] text-muted">{description}</small></span><Check className="ml-auto h-4 w-4 text-accent" /></div>)}
        </div>
      </div>
    </div>
  );
}

export function HomeClient() {
  return <main>
    <section className="hero !bg-[radial-gradient(circle_at_80%_5%,var(--wash),transparent_32%),linear-gradient(var(--background),var(--surface))]"><Container className="hero-grid"><div className="hero-copy"><span className="eyebrow"><Sparkles size={13} /> Business operating system</span><h1>One intelligent system for the way your business works.</h1><p>Connect sales, operations, finance, teams, branches and insights in one workspace that keeps working when the internet does not.</p><div className="hero-actions"><DownloadCTA label="Start Free" /><Link className="button secondary" href="#capabilities">Explore Dira OS <ArrowRight size={16} /></Link></div><div className="proof-row"><span><Check size={14} /> One month free</span><span><Wifi size={14} /> Offline-first</span><span><ShieldCheck size={14} /> Role-based access</span></div></div><div className="hero-product"><WorkspacePreview /><div className="preview-caption"><span><i /> Product workspace preview</span><b>Designed for the work behind the work.</b></div></div></Container><Container className="trust-row"><span>One platform for everyday business operations</span><div>{["SALES", "OPERATIONS", "FINANCE", "TEAMS", "INSIGHTS"].map((item) => <b key={item}>{item}</b>)}</div></Container></section>

    <section id="capabilities" className="border-y border-border bg-surface"><Container className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4 lg:grid-cols-7">{capabilityItems.map(([Icon, label]) => <div key={label} className="flex items-center justify-center gap-2 bg-surface px-3 py-4 text-xs font-semibold text-muted"><Icon className="h-4 w-4 text-primary" /> {label}</div>)}</Container></section>

    <section className="section"><Container><div className="section-heading"><span className="eyebrow">One connected operating system</span><h2>From everyday activity to a clearer next move.</h2><p>Dira OS keeps the major parts of a business connected, so information can move with the work instead of getting lost between tools.</p></div><div className="flow">{[[Users2, "Customers", "Understand demand"], [Layers3, "Operations", "Keep work moving"], [BarChart3, "Sales", "Record activity"], [CircleDollarSign, "Finance", "See the position"]].map(([Icon, label, value], index) => <div className="flow-item" key={label as string}><div className="flow-icon"><Icon size={19} /></div><span>{label as string}</span><b>{value as string}</b>{index < 3 && <ArrowRight size={16} />}</div>)}</div></Container></section>

    <section className="section surface"><Container><div className="section-heading narrow"><span className="eyebrow">Product ecosystem</span><h2>One workspace across the way you work.</h2><p>Use Dira OS across the everyday surfaces of your business, with the same connected product picture underneath.</p></div><div className="mt-12"><ProductShowcase /></div></Container></section>

    <section className="section" id="features"><Container><div className="section-heading"><span className="eyebrow">Core capabilities</span><h2>Powerful where it matters. Calm everywhere else.</h2><p>Start with the capabilities your business needs today and keep the operating picture connected as you grow.</p></div><div className="bento-grid">{homepageFeatureBlocks.map(({ icon: Icon, title, description, bullets }, index) => <article className={`feature-card feature-${index}`} key={title}><div className="icon-box"><Icon size={18} /></div><h3>{title}</h3><p>{description}</p><div className="mt-6 flex flex-wrap gap-2">{bullets.map((bullet) => <span key={bullet} className="rounded-md border border-border bg-surface px-2 py-1 text-[10px] font-medium text-muted">{bullet}</span>)}</div></article>)}</div></Container></section>

    <section className="section surface"><Container className="split"><div className="section-heading"><span className="eyebrow">Offline-first by design</span><h2>Keep working. Reconnect when you can.</h2><p>Core actions can be recorded locally so the day does not stop when connectivity is unavailable. When the connection returns, queued work can sync back to the wider workspace.</p><Link href="/features" className="button secondary mt-7">See offline capabilities <ArrowRight size={16} /></Link></div><OfflineSyncVisual /></Container></section>

    <section className="section"><Container><div className="section-heading"><span className="eyebrow">Universal by design</span><h2>Built around real business workflows.</h2><p>Different industries, different rhythms. The operating system stays connected while the work adapts to the business.</p></div><div className="industry-grid">{industryGroups.map((industry) => <Link href={`/industries#${industry.key}`} key={industry.key} className="group block"><article className="h-full transition duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/40"><span>{industry.label}</span><p>{industry.summary}</p><ArrowRight size={16} /></article></Link>)}</div></Container></section>

    <section className="section dark-panel"><Container className="split"><div className="section-heading light"><span className="eyebrow">Business intelligence</span><h2>See the business as it is.</h2><p>Bring sales activity, stock movement, finance and team operations into a more readable view—without making the work feel more complicated.</p><div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">{["Revenue", "Expenses", "Customers", "Operations", "Teams", "Trends"].map((item) => <span key={item} className="rounded-lg border border-border bg-surface-muted/70 px-3 py-2 text-xs text-muted">{item}</span>)}</div></div><div className="insight-grid !mt-0"><div className="insight-chart"><span>Business activity</span><strong>One view</strong><em>Signals connected across the workspace</em><svg viewBox="0 0 600 180" aria-label="Illustrative business activity trend"><path d="M0 145 C70 134 90 115 145 124 S220 90 270 103 S345 61 395 78 S460 45 515 55 S565 34 600 22" fill="none" stroke="currentColor" strokeWidth="3" /></svg></div><div className="insight-side"><div><span>Sales</span><strong>Recorded</strong><em>Activity stays visible</em></div><div><span>Inventory</span><strong>Connected</strong><em>Movement follows work</em></div><aside><Sparkles size={15} /><span><b>Useful context</b>See what changed and where to look next.</span></aside></div></div></Container></section>

    <section className="section surface"><Container><div className="section-heading narrow"><span className="eyebrow">Teams and branches</span><h2>Make the whole operation easier to see.</h2><p>Give people the right access, keep branches connected and make ownership clearer across the business.</p></div><div className="mt-12 grid gap-3 md:grid-cols-3">{[[Users2, "Teams", "Roles and permissions for the people doing the work."], [Building2, "Branches", "A connected view for businesses working across locations."], [ShieldCheck, "Control", "Clearer access and more dependable everyday workflows."]].map(([Icon, title, body]) => <article className="rounded-xl border border-border bg-card p-5 shadow-soft" key={title as string}><div className="icon-box"><Icon size={18} /></div><h3 className="mt-5 text-lg font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted">{body as string}</p></article>)}</div></Container></section>

    <section className="section" id="pricing-preview"><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="section-heading narrow"><span className="eyebrow">Simple pricing</span><h2>Start small. Grow with clarity.</h2><p>Every plan includes one month free and no card required.</p></div><Link href="/pricing" className="text-link ml-0">View full pricing <ArrowRight size={15} /></Link></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{pricingPlans.map((plan) => <article key={plan.name} className={cn("rounded-xl border bg-card p-5", plan.recommended ? "border-primary/50 shadow-panel" : "border-border")}><div className="flex items-center justify-between"><h3 className="font-semibold">{plan.name}</h3>{plan.recommended && <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">Recommended</span>}</div><p className="mt-5 text-xl font-semibold tracking-[-0.04em]">{plan.price}</p><p className="mt-2 text-xs text-muted">{plan.note}</p><div className="mt-5 space-y-2">{plan.features.map((feature) => <p key={feature} className="flex items-start gap-2 text-xs text-muted"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" /> {feature}</p>)}</div></article>)}</div></Container></section>

    <section className="faq-section"><Container><div className="section-heading narrow"><span className="eyebrow">Questions, answered</span><h2>Clarity before you start.</h2></div><div className="faq-grid">{faqItems.slice(0, 6).map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={16} /></summary><p>{answer}</p></details>)}</div><div className="mt-7"><Link href="/faq" className="text-link ml-0">Read all FAQs <ArrowRight size={15} /></Link></div></Container></section>

    <section className="final-cta"><Container><span className="eyebrow">Run with clarity</span><h2>One operating system.<br /><em>More room to move.</em></h2><p>Bring the work of your business into one connected place.</p><DownloadCTA label="Get Dira OS" /><Link href="/download" className="text-link">Explore downloads <ArrowRight size={15} /></Link></Container></section>
  </main>;
}
