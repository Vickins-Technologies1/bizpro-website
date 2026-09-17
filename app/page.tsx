import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CircleDollarSign,
  Cloud,
  LayoutGrid,
  Package,
  Receipt,
  ShoppingCart,
  Users2,
  WifiOff
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { DownloadCTA } from "@/components/ui/download-cta";
import { OfflineSyncVisual } from "@/components/product/offline-sync-visual";
import { IndustrySelector } from "@/components/industry-selector";
import { HomeFaq } from "@/components/home-faq";
import { siteConfig } from "@/config/site";
import { pricingPlans } from "@/config/pricing";
import { faqItems } from "@/config/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dira OS — Business Operating System for Modern Businesses",
  description: "Dira OS connects sales, inventory, finance, teams, branches and reports in one offline-first business operating system.",
  path: "/"
});

const capabilities = [
  [ShoppingCart, "POS"],
  [Package, "Inventory"],
  [CircleDollarSign, "Finance"],
  [Users2, "Teams"],
  [Building2, "Branches"],
  [BarChart3, "Reports"]
] as const;

const featureDetails = [
  [ShoppingCart, "POS", "Sell faster. Serve better.", "Process sales, payments and receipts in seconds with a focused POS built for busy businesses."],
  [Package, "Inventory", "Know your stock. Control your business.", "Track inventory in real time, catch low stock early and keep every product accounted for."],
  [CircleDollarSign, "Finance", "Know your numbers. Make better decisions.", "Track income, expenses and business performance from one clear financial view."],
  [Users2, "Teams", "Give every employee the right access.", "Manage roles, permissions and staff activity without losing control."],
  [Building2, "Branches", "One business. Every location.", "Manage multiple branches from one connected system."],
  [BarChart3, "Reports", "Turn activity into insight.", "See sales, revenue, expenses and inventory performance at a glance."]
] as const;

function DashboardScreen() {
  return (
    <div className="dashboard-screen rounded-[1rem] border border-slate-200/80 bg-white p-2.5 text-slate-950 shadow-[0_22px_60px_rgba(15,23,42,0.16)] sm:p-3">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white"><LayoutGrid className="h-3.5 w-3.5" /></span>
          <span className="text-[11px] font-semibold">Overview</span>
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">● Synced</span>
      </div>
      <div className="grid grid-cols-3 gap-2 py-3">
        <div className="rounded-lg bg-slate-50 p-2"><p className="text-[8px] text-slate-500">Revenue</p><p className="mt-1 text-sm font-bold">KES 84,200</p><p className="mt-1 text-[8px] font-semibold text-emerald-600">+12.4%</p></div>
        <div className="rounded-lg bg-slate-50 p-2"><p className="text-[8px] text-slate-500">Sales</p><p className="mt-1 text-sm font-bold">126</p><p className="mt-1 text-[8px] text-slate-500">Today</p></div>
        <div className="rounded-lg bg-slate-50 p-2"><p className="text-[8px] text-slate-500">Low stock</p><p className="mt-1 text-sm font-bold">06</p><p className="mt-1 text-[8px] text-amber-600">Review</p></div>
      </div>
      <div className="rounded-lg border border-slate-100 p-3">
        <div className="flex items-center justify-between"><p className="text-[9px] font-semibold">Revenue trend</p><p className="text-[8px] text-slate-400">This week</p></div>
        <div className="mt-3 flex h-20 items-end gap-1.5">{[26, 38, 30, 52, 45, 68, 58, 82, 72, 90].map((height, i) => <span key={i} className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 motion-safe:animate-bar-rise" style={{ height: `${height}%`, animationDelay: `${i * 40}ms` }} />)}</div>
      </div>
      <div className="mt-2 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><div className="flex items-center gap-2"><Receipt className="h-3.5 w-3.5 text-blue-600" /><span className="text-[9px] font-medium">Recent transactions</span></div><span className="text-[9px] font-semibold text-blue-600">View all</span></div>
    </div>
  );
}

function ProductCanvas() {
  return (
    <div className="product-canvas relative rounded-[1.4rem] border border-white/10 bg-[#101318] p-2.5 shadow-[0_34px_100px_rgba(0,0,0,0.38)] sm:p-3">
      <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3 text-white">
        <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500"><LayoutGrid className="h-3.5 w-3.5" /></span><span className="text-xs font-semibold">Dira OS</span></div>
        <span className="text-[10px] text-slate-400">Main branch · Today</span>
      </div>
      <div className="grid gap-3 p-2 sm:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-2">
          <div className="rounded-xl bg-white/[0.08] p-3 text-white"><p className="text-[10px] text-slate-400">Today&apos;s revenue</p><p className="mt-2 text-xl font-bold">KES 84,200</p><p className="mt-1 text-[10px] text-emerald-300">↑ 12.4% from yesterday</p></div>
          {[['Sales', '126'], ['Products', '482'], ['Team', '08']].map(([label, value]) => <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2.5 text-[10px] text-slate-300"><span>{label}</span><span className="font-semibold text-white">{value}</span></div>)}
        </div>
        <div className="rounded-xl bg-white p-3"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold text-slate-900">Revenue trend</p><span className="text-[9px] text-slate-400">Last 7 days</span></div><div className="mt-8 flex h-32 items-end gap-2">{[35, 48, 42, 66, 58, 78, 70, 92, 82].map((height, i) => <span key={i} className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-blue-600 to-cyan-300 motion-safe:animate-bar-rise" style={{ height: `${height}%`, animationDelay: `${i * 45}ms` }} />)}</div><div className="mt-3 flex items-center justify-between text-[9px] text-slate-400"><span>Mon</span><span>Today</span></div></div>
      </div>
      <div className="flex items-center gap-2 border-t border-white/10 px-2 pt-2 text-[10px] text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Data synced just now</div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] motion-safe:animate-slide-up">
      <div className="absolute -inset-8 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="relative rounded-[2.5rem] border-[8px] border-slate-950 bg-slate-950 p-2 shadow-[0_34px_90px_rgba(15,23,42,0.3)]">
        <div className="overflow-hidden rounded-[2rem] bg-slate-50"><div className="flex items-center justify-between bg-slate-950 px-5 py-3 text-[10px] text-white"><span>9:41</span><span className="h-1.5 w-12 rounded-full bg-white/20" /><span>● ●</span></div><div className="space-y-4 p-4"><div className="flex items-center justify-between"><div><p className="text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">Good morning</p><p className="mt-1 text-base font-bold text-slate-950">Your business</p></div><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"><LayoutGrid className="h-4 w-4" /></div></div><DashboardScreen /><div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-2.5 text-[10px] font-semibold text-emerald-700"><Cloud className="h-3.5 w-3.5" /> Your data is synced</div></div></div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.siteName, url: siteConfig.websiteUrl, description: siteConfig.description };
  const softwareSchema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: siteConfig.siteName, applicationCategory: "BusinessApplication", operatingSystem: "Android" };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

    <section className="hero-grid overflow-hidden border-b border-white/10 bg-[#080A0D] text-white">
      <Container><div className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl"><p className="eyebrow text-cyan-300">The business operating system</p><h1 className="mt-5 text-balance text-[clamp(2.65rem,5vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.055em]">Run your entire business.<br /><span className="text-gradient">From one powerful system.</span></h1><p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-300 sm:text-base">Dira OS brings sales, inventory, finance, teams and branches into one connected platform — built to keep your business running, online or offline.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><DownloadCTA label="Start Free" className="sm:min-w-[9.5rem]" /><Link href="#product" className={buttonStyles("secondary", "border-white/15 bg-white/[0.06] text-white hover:border-white/25 hover:bg-white/10 sm:min-w-[9.5rem]")}>See How It Works <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400"><Check className="h-4 w-4 text-cyan-300" /> No card required <span className="text-white/20">·</span> Setup in minutes <span className="text-white/20">·</span> Works offline</div></div>
        <div className="relative lg:pl-4"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl" /><ProductCanvas /><div className="absolute -bottom-5 -left-2 hidden rounded-xl border border-white/10 bg-[#101318] px-3 py-2 text-[10px] text-slate-300 shadow-xl sm:block"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />Offline-ready workflows</div></div>
      </div></Container>
    </section>

    <section className="border-b border-border/60 bg-card/45"><Container><div className="grid grid-cols-2 divide-x divide-y divide-border/60 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">{capabilities.map(([Icon, label]) => <div key={label} className="flex items-center justify-center gap-2 px-3 py-4 text-xs font-semibold text-muted"><Icon className="h-4 w-4 text-primary" aria-hidden="true" />{label}</div>)}</div></Container></section>

    <section id="product" className="section-pad"><Container><div className="grid items-end gap-6 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="eyebrow">One connected system</p><h2 className="section-title mt-4">Everything your business needs.<br />Nothing you don&apos;t.</h2></div><p className="max-w-lg text-[15px] leading-7 text-muted">The essential tools for selling, managing and growing — connected in one calm, clear workspace.</p></div><div className="mt-10 grid border-y border-border/70 sm:grid-cols-2 lg:grid-cols-3">{featureDetails.map(([Icon, label, heading, description], i) => <article key={label} className={`group border-border/70 py-6 sm:px-5 lg:px-6 ${i % 3 !== 2 ? "lg:border-r" : ""} ${i < 3 ? "lg:border-b" : ""} ${i % 2 === 0 ? "sm:border-r lg:border-r" : "sm:border-r-0 lg:border-r"}`}><div className="flex items-start justify-between gap-4"><div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary"><Icon className="h-4 w-4" aria-hidden="true" /></div><span className="text-[11px] font-semibold tracking-[0.18em] text-muted">0{i + 1}</span></div><p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{label}</p><h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-primary">{heading}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted">{description}</p></article>)}</div></Container></section>

    <section className="section-pad bg-[#080A0D] text-white"><Container><div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="eyebrow text-cyan-300">Offline-first by design</p><h2 className="section-title mt-4 text-white">Business doesn&apos;t wait for the internet.<br />Neither should you.</h2><p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-300">Dira OS keeps your essential operations running when connectivity is unreliable. Sales and activity are stored securely on your device and synchronized when you&apos;re back online.</p></div><OfflineSyncVisual /></div></Container></section>

    <section className="section-pad border-b border-border/60"><Container><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Built for ambitious businesses</p><h2 className="mt-4 text-balance text-3xl font-bold tracking-[-0.045em] sm:text-5xl">Everything you need to sell, manage and grow — without juggling multiple systems.</h2></div></Container></section>

    <section id="solutions" className="section-pad bg-card/30"><Container><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Solutions</p><h2 className="section-title mt-4">One platform. Built around your business.</h2><p className="mt-4 text-[15px] leading-7 text-muted">Flexible foundations for the industries already supported by Dira OS.</p></div><div className="mt-10"><IndustrySelector /></div></Container></section>

    <section className="section-pad"><Container><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Why Dira OS</p><h2 className="section-title mt-4">The clarity to run today. The foundation to grow.</h2></div><div className="mt-10 grid gap-0 border-y border-border/70 sm:grid-cols-2 lg:grid-cols-4">{[[LayoutGrid, "Simple", "Powerful business tools without unnecessary complexity."], [Cloud, "Connected", "Sales, inventory, finance and operations in one system."], [WifiOff, "Offline-first", "Keep selling when connectivity isn't reliable."], [Building2, "Built to scale", "Grow from one location to multiple branches without changing systems."]].map(([Icon, title, body], i) => <div key={title as string} className={`border-border/70 px-1 py-6 sm:px-5 lg:px-6 ${i < 3 ? "lg:border-r" : ""} ${i % 2 === 0 ? "sm:border-r" : "sm:border-r-0 lg:border-r"}`}><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" aria-hidden="true" /></div><p className="mt-5 text-[11px] font-semibold tracking-[0.18em] text-primary">0{i + 1}</p><h3 className="mt-2 text-lg font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted">{body as string}</p></div>)}</div></Container></section>

    <section id="pricing" className="section-pad bg-[#080A0D] text-white"><Container><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow text-cyan-300">Pricing</p><h2 className="section-title mt-4 text-white">Start simple.<br />Scale when you need to.</h2><p className="mt-4 text-sm text-slate-300"><span className="font-semibold text-white">1 month free</span> · No credit card required</p></div><Link href="/pricing" className={buttonStyles("secondary", "border-white/15 bg-white/[0.06] text-white hover:bg-white/10")}>Compare plans <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{pricingPlans.map((plan) => <Card key={plan.name} className={`border-white/10 bg-[#101318] p-5 text-white ${plan.recommended ? "ring-1 ring-cyan-300/70" : ""}`}><div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{plan.name}</p>{plan.recommended ? <span className="text-[10px] text-cyan-200">Recommended</span> : null}</div><p className="mt-5 text-2xl font-bold tracking-tight">{plan.price}</p><p className="mt-1 text-xs text-slate-300">{plan.note}</p><ul className="mt-5 space-y-2 text-xs text-slate-300">{plan.features.slice(0, 3).map((feature) => <li key={feature} className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-cyan-300" />{feature}</li>)}</ul><Link href="/download" className="mt-6 inline-flex text-xs font-semibold text-white hover:text-cyan-200">Start Free <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link></Card>)}</div></Container></section>

    <section className="section-pad"><Container><div className="grid items-center gap-10 border-y border-border/70 py-10 sm:py-14 lg:grid-cols-[1fr_0.75fr]"><div><p className="eyebrow">Dira OS on Android</p><h2 className="section-title mt-4">Your business.<br />In your pocket.</h2><p className="mt-4 max-w-lg text-[15px] leading-7 text-muted">Stay connected to your business wherever you are.</p><div className="mt-7 flex flex-wrap gap-3"><DownloadCTA label="Start Free" /><Link href="/download" className={buttonStyles("secondary")}>Learn more</Link></div></div><PhoneMockup /></div></Container></section>

    <section className="border-t border-border/60 section-pad"><Container><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">FAQ</p><h2 className="section-title mt-4">Quick answers.</h2></div><HomeFaq items={faqItems.slice(0, 8)} /></Container></section>

    <section className="pb-16 sm:pb-20"><Container><div className="relative overflow-hidden rounded-[1.5rem] bg-[#080A0D] p-8 text-white sm:p-12"><div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" /><div className="relative"><p className="eyebrow text-cyan-300">Make the next move</p><h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Your business deserves a better operating system.</h2><p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300">Sales. Stock. Finance. Teams. Branches. One connected platform built to keep your business moving.</p><div className="mt-7 flex flex-wrap items-center gap-4"><DownloadCTA label="Start Free" className="bg-white text-slate-950 hover:bg-white/90" /><span className="text-xs text-slate-400">No card required · Setup in minutes</span></div></div></div></Container></section>
  </>;
}
