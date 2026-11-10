import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CircleDollarSign,
  CloudOff,
  Layers3,
  Package,
  ReceiptText,
  ShoppingCart,
  Users2
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { DownloadCTA } from "@/components/ui/download-cta";
import { Reveal } from "@/components/ui/reveal";
import { OfflineSyncVisual } from "@/components/product/offline-sync-visual";
import { featureCategories } from "@/config/features";
import { featureLandingPages } from "@/config/seo-landing-pages";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Business Management Software Features",
  description: "Explore Dira OS features for point of sale, inventory, sales, expenses, reporting, customers, teams, branches and offline-first work.",
  path: "/features"
});

const featureIcons: LucideIcon[] = [ShoppingCart, Layers3, Package, CircleDollarSign, BarChart3, Users2, Building2, CloudOff];

function CapabilityCard({ category, index }: { category: (typeof featureCategories)[number]; index: number }) {
  const Icon = featureIcons[index];
  const accent = index % 2 === 0 ? "text-primary" : "text-accent";

  return (
    <Reveal delay={index * 45} direction="up">
      <article className="h-full border-t border-border py-4">
        <div className="flex items-center gap-3"><div className={cn("flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10", accent)}><Icon className="h-4 w-4" aria-hidden="true" /></div><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{category.label}</p><h3 className="mt-1">{category.title}</h3></div></div>
        <p className="mt-3 text-sm leading-5 text-muted">{category.description}</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">{category.items.map((item) => <li key={item} className="flex items-start gap-2 text-xs leading-5 text-muted"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />{item}</li>)}</ul>
      </article>
    </Reveal>
  );
}

export default function FeaturesPage() {
  return <main>
    <section className="relative overflow-hidden border-b border-border bg-surface py-16 sm:py-20 lg:py-24"><div className="absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-[size:64px_64px] opacity-70" /><Container className="relative"><Reveal><div className="max-w-3xl"><p className="eyebrow">Product capabilities</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl">The operating system behind the work.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Dira OS brings the essential parts of a modern business together—from the first customer interaction to the operational and financial picture that follows.</p><div className="mt-8 flex flex-wrap gap-3"><DownloadCTA label="Start Free" /><Link href="#capability-map" className="button secondary">Explore capabilities <ArrowRight className="h-4 w-4" /></Link></div></div></Reveal><div className="mt-14 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-border bg-card/80 p-4"><ReceiptText className="h-5 w-5 text-primary" /><p className="mt-4 text-sm font-semibold">Business activity</p><p className="mt-1 text-xs leading-5 text-muted">Keep the work moving from one connected place.</p></div><div className="rounded-xl border border-border bg-card/80 p-4"><Users2 className="h-5 w-5 text-accent" /><p className="mt-4 text-sm font-semibold">People and access</p><p className="mt-1 text-xs leading-5 text-muted">Give teams and branches the right context.</p></div><div className="rounded-xl border border-border bg-card/80 p-4"><BarChart3 className="h-5 w-5 text-primary" /><p className="mt-4 text-sm font-semibold">Connected insight</p><p className="mt-1 text-xs leading-5 text-muted">Read the signals that help you decide what is next.</p></div></div></Container></section>

    <section id="capability-map" className="section"><Container><div className="section-heading narrow"><span className="eyebrow">One connected product</span><h2>Capabilities organized around how businesses work.</h2><p>Explore the parts of Dira OS individually, then see how they connect in the same workspace.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{featureCategories.map((category, index) => { const Icon = featureIcons[index]; return <a key={category.label} href={`#${category.label.toLowerCase().replaceAll(" ", "-")}`} className="group rounded-xl border border-border bg-card p-4 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40"><Icon className="h-4 w-4 text-primary" /><p className="mt-4 text-sm font-semibold">{category.label}</p><p className="mt-1 text-xs text-muted">{category.description}</p><ArrowRight className="mt-4 h-4 w-4 text-muted transition group-hover:translate-x-1 group-hover:text-primary" /></a>; })}</div></Container></section>

    <section className="section surface"><Container><div className="section-heading narrow"><span className="eyebrow">Explore by need</span><h2>Go deeper on a core business workflow.</h2><p>See practical detail for sales, stock, finance and offline work.</p></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{featureLandingPages.map((page) => <Link key={page.path} href={page.path} className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40"><span className="eyebrow">{page.eyebrow}</span><h3 className="mt-3 text-lg font-semibold">{page.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{page.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></Container></section>

    <section className="section surface"><Container className="grid gap-x-6 gap-y-5 md:grid-cols-2 xl:grid-cols-4">{featureCategories.map((category, index) => <div id={category.label.toLowerCase().replaceAll(" ", "-")} key={category.label}><CapabilityCard category={category} index={index} /></div>)}</Container></section>

    <section className="section surface"><Container><div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div className="section-heading"><span className="eyebrow">Keep working</span><h2>Offline-first is part of the product, not an afterthought.</h2><p>Continue core work locally and let the workspace catch up when the connection returns.</p><Link href="/download" className="button secondary mt-7">See download options <ArrowRight className="h-4 w-4" /></Link></div><OfflineSyncVisual /></div></Container></section>

    <section className="final-cta"><Container><span className="eyebrow">Ready when you are</span><h2>Make the business<br /><em>easier to run.</em></h2><p>Start with one month free. No card required.</p><DownloadCTA label="Get Dira OS" /></Container></section>
  </main>;
}
