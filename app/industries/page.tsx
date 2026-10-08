import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, Check, Clock3, HeartPulse, Hotel, Palette, Scale, ShoppingBag, Spool, UtensilsCrossed, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DownloadCTA } from "@/components/ui/download-cta";
import { Reveal } from "@/components/ui/reveal";
import { IndustrySelector } from "@/components/industry-selector";
import { industryDetailMap, industryGroups } from "@/config/industries";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description: "See how Dira OS adapts to retail, food and beverage, beauty, hospitality, healthcare, automotive, services and professional services.",
  path: "/industries"
});

const industryIcons = [ShoppingBag, UtensilsCrossed, Palette, Hotel, HeartPulse, Wrench, Spool, Scale];

function WorkflowCard({ industry, index }: { industry: (typeof industryGroups)[number]; index: number }) {
  const detail = industryDetailMap[industry.key];
  const Icon = industryIcons[index];

  return <Reveal delay={index * 50} direction={index % 2 === 0 ? "left" : "right"}><article id={industry.key} className="group h-full scroll-mt-24 rounded-xl border border-border bg-card p-5 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-panel"><div className="flex items-start justify-between gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary"><Icon className="h-4 w-4" /></div><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{industry.label}</h3><p className="mt-2 min-h-[3.5rem] text-sm leading-6 text-muted">{industry.summary}</p><div className="mt-5 border-t border-border pt-4"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Workflow lens</p><div className="mt-3 flex flex-wrap items-center gap-1.5">{detail.workflow.map((step, stepIndex) => <span key={step} className="flex items-center gap-1.5 text-[10px] font-medium text-muted"><span className={cn("rounded-md px-2 py-1", stepIndex === 0 ? "bg-primary/10 text-primary" : "bg-surface-muted")}>{step}</span>{stepIndex < detail.workflow.length - 1 && <ArrowRight className="h-3 w-3 text-muted" />}</span>)}</div></div><div className="mt-5 space-y-2">{industry.capabilities.slice(0, 3).map((capability) => <div key={capability} className="flex items-center gap-2 text-xs text-muted"><Check className="h-3.5 w-3.5 text-accent" /> {capability}</div>)}</div></article></Reveal>;
}

export default function IndustriesPage() {
  return <main>
    <section className="relative overflow-hidden border-b border-border bg-surface py-16 sm:py-20 lg:py-24"><div className="absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-[size:64px_64px] opacity-70" /><Container className="relative"><Reveal><div className="max-w-3xl"><p className="eyebrow">Built around the work</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl">Different businesses. One connected operating system.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Dira OS adapts to the rhythm of the business—while keeping sales, operations, finance, teams and branches connected underneath.</p><div className="mt-8 flex flex-wrap gap-3"><DownloadCTA label="Start Free" /><Link href="#industry-selector" className="button secondary">Explore industries <ArrowRight className="h-4 w-4" /></Link></div></div></Reveal><div className="mt-14 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-border bg-card/80 p-4"><Building2 className="h-5 w-5 text-primary" /><p className="mt-4 text-sm font-semibold">Shared foundation</p><p className="mt-1 text-xs leading-5 text-muted">The same connected workspace across different business models.</p></div><div className="rounded-xl border border-border bg-card/80 p-4"><Clock3 className="h-5 w-5 text-accent" /><p className="mt-4 text-sm font-semibold">Workflow-aware</p><p className="mt-1 text-xs leading-5 text-muted">A clearer lens on the steps that matter in each industry.</p></div><div className="rounded-xl border border-border bg-card/80 p-4"><Check className="h-5 w-5 text-primary" /><p className="mt-4 text-sm font-semibold">Practical control</p><p className="mt-1 text-xs leading-5 text-muted">Real capabilities stay visible without forcing one shape on every business.</p></div></div></Container></section>

    <section id="industry-selector" className="section"><Container><div className="section-heading narrow"><span className="eyebrow">Choose a workflow</span><h2>See how the operating picture changes by industry.</h2><p>Use the selector to move between industry contexts, then explore the workflow lenses below.</p></div><div className="mt-10"><IndustrySelector /></div></Container></section>

    <section className="section surface"><Container><div className="section-heading"><span className="eyebrow">Eight business contexts</span><h2>Designed to feel relevant, not generic.</h2><p>Each industry has its own rhythm. Dira OS keeps the connected foundation while making the working flow easier to recognize.</p></div><div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{industryGroups.map((industry, index) => <WorkflowCard key={industry.key} industry={industry} index={index} />)}</div></Container></section>

    <section className="section"><Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]"><div className="section-heading"><span className="eyebrow">Same system, right context</span><h2>Keep the foundation connected as the work changes.</h2><p>Whether the day starts with a product, a booking, a job, a client or a patient, the wider operating picture stays close.</p><Link href="/features" className="button secondary mt-7">Explore product capabilities <ArrowRight className="h-4 w-4" /></Link></div><div className="rounded-2xl border border-border bg-surface p-5 shadow-panel sm:p-6"><div className="flex items-center justify-between border-b border-border pb-4"><span className="text-xs font-semibold">Industry context</span><span className="text-[10px] font-semibold text-accent">Connected workspace</span></div><div className="mt-5 grid gap-2 sm:grid-cols-2">{["Customer activity", "Daily operations", "Finance visibility", "Team access", "Branch context", "Business insights"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"><span className={cn("flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold", index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent")}>{String(index + 1).padStart(2, "0")}</span><span className="text-xs font-medium">{item}</span></div>)}</div></div></Container></section>

    <section className="final-cta"><Container><span className="eyebrow">Find your operating rhythm</span><h2>Make the business<br /><em>easier to understand.</em></h2><p>Start with the workflows that matter to your team.</p><DownloadCTA label="Get Dira OS" /></Container></section>
  </main>;
}
