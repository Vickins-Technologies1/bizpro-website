import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  Building2,
  Check,
  CircleDollarSign,
  Cloud,
  Database,
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
import { ProductShowcase } from "@/components/product/product-showcase";
import { IndustrySelector } from "@/components/industry-selector";
import { HomeFaq } from "@/components/home-faq";
import { siteConfig } from "@/config/site";
import { pricingPlans } from "@/config/pricing";
import { faqItems } from "@/config/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dira OS — The Business Operating System for Modern SMEs",
  description: "Run sales, inventory, finance, customers and business operations from one powerful, offline-first business operating system.",
  path: "/"
});

const capabilities = [
  [ShoppingCart, "Sales & POS", "Move every sale forward."],
  [Package, "Inventory", "Know what is available."],
  [CircleDollarSign, "Finance", "Keep money in view."],
  [Users2, "Customers & team", "Keep people connected."],
  [BarChart3, "Reports", "See the signal quickly."],
  [WifiOff, "Offline-first", "Keep working without a signal."]
] as const;

const coreFeatures = [
  [ShoppingCart, "Sales & POS", "Fast checkout, product search, receipts and sales history."],
  [Package, "Inventory", "Stock levels, low-stock visibility, SKU and barcode support."],
  [CircleDollarSign, "Finance", "Revenue, expenses and simple performance summaries."],
  [Users2, "Customers & staff", "Customer records, roles and access for everyday teams."],
  [BarChart3, "Reports & analytics", "Compact views of sales trends and business activity."],
  [Building2, "Branches", "Keep locations and teams working from one system."]
] as const;

const showcaseRows = [
  { icon: ShoppingCart, label: "SALES", title: "Sell faster. Keep every transaction organized.", body: "A clear checkout flow for busy counters, with product search, barcode support, receipts, sales history and offline selling.", points: ["Fast checkout", "Product search", "Receipts & sales history"] },
  { icon: Package, label: "INVENTORY", title: "Know what you have before you need it.", body: "Keep products, stock movement and low-stock visibility close to every sale so your team can act early.", points: ["Stock tracking", "Product management", "Low-stock visibility"] },
  { icon: CircleDollarSign, label: "FINANCE", title: "Keep the numbers close to the work.", body: "Bring revenue, expenses and business performance into one straightforward operating view.", points: ["Revenue visibility", "Expense capture", "Financial summaries"] }
] as const;

function DemoDashboard() {
  return <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-panel">
    <div className="flex items-center justify-between border-b border-border bg-surface-muted px-4 py-3"><div className="flex items-center gap-2"><Image src="/brand/dira-logo.png" alt="" width={22} height={22} className="rounded-md" unoptimized /><span className="text-[11px] font-semibold">Dira OS</span></div><span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Synced</span></div>
    <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[0.7fr_1.3fr]">
      <div className="space-y-3"><div className="rounded-xl bg-primary p-4 text-primary-foreground"><div className="flex items-start justify-between"><div><p className="text-[10px] text-blue-100">Today&apos;s revenue</p><p className="mt-2 text-2xl font-semibold tracking-tight">KES 84,200</p></div><BarChart3 className="h-4 w-4 text-blue-100" /></div><p className="mt-3 text-[10px] text-blue-100">↑ 12.4% from yesterday</p></div>{[["Sales", "126"], ["Products", "482"], ["Low stock", "06"]].map(([label, value]) => <div key={label} className="flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2.5 text-[11px]"><span className="text-muted">{label}</span><span className="font-semibold">{value}</span></div>)}</div>
      <div className="rounded-xl border border-border bg-surface p-4"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold">Sales overview</p><p className="mt-1 text-[10px] text-muted">Demo data · Last 7 days</p></div><span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-600">On track</span></div><div className="mt-7 flex h-32 items-end gap-2">{[34, 48, 42, 62, 55, 78, 68, 92, 82].map((height, index) => <span key={index} className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-primary to-sky-400 motion-safe:animate-bar-rise" style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }} />)}</div><div className="mt-2 flex items-center justify-between text-[10px] text-muted"><span>Mon</span><span>Today</span></div><div className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-[10px] text-muted"><Receipt className="h-3.5 w-3.5 text-primary" /> Recent transactions <span className="ml-auto font-semibold text-primary">View all</span></div></div>
    </div>
  </div>;
}

function PhonePreview() {
  return <div className="relative mx-auto w-full max-w-[17rem] motion-safe:animate-slide-up"><div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" /><div className="relative rounded-[2.3rem] border-[7px] border-slate-900 bg-slate-900 p-2 shadow-[0_28px_70px_rgba(15,23,42,0.22)] dark:border-slate-950 dark:bg-slate-950"><div className="overflow-hidden rounded-[1.9rem] bg-surface"><div className="flex items-center justify-between bg-surface-muted px-4 py-2.5 text-[9px] text-muted"><span>9:41</span><span className="h-1.5 w-10 rounded-full bg-muted/30" /><span>● ●</span></div><div className="space-y-3 p-3"><div className="flex items-center justify-between"><div><p className="text-[8px] font-medium uppercase tracking-[0.18em] text-muted">Good morning</p><p className="mt-1 text-sm font-semibold">Your business</p></div><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><LayoutGrid className="h-3.5 w-3.5" /></div></div><div className="rounded-xl border border-border bg-surface-muted p-3"><p className="text-[8px] text-muted">Today&apos;s revenue</p><p className="mt-1 text-lg font-semibold">KES 84,200</p><div className="mt-3 flex h-12 items-end gap-1">{[34, 52, 42, 68, 54, 82, 70].map((height, index) => <span key={index} className="flex-1 rounded-t bg-primary/80" style={{ height: `${height}%` }} />)}</div></div><div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-[9px] font-semibold text-emerald-600"><Cloud className="h-3 w-3" /> Your data is synced</div></div></div></div></div>;
}

export default function HomePage() {
  const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.siteName, url: siteConfig.websiteUrl, description: siteConfig.description };
  const softwareSchema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: siteConfig.siteName, applicationCategory: "BusinessApplication", operatingSystem: "Android" };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

    <section className="hero-grid overflow-hidden border-b border-border bg-background">
      <Container><div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14 lg:py-20"><div className="max-w-xl"><p className="eyebrow">Dira OS · Business operating system</p><h1 className="mt-4 text-balance text-[clamp(2.45rem,5vw,4.35rem)] font-semibold leading-[1.02] tracking-[-0.06em]">Run your business from <span className="text-gradient">one powerful system.</span></h1><p className="mt-5 max-w-lg text-[15px] leading-6 text-muted">Bring sales, inventory, finance, customers, staff and reporting together in one simple, offline-first workspace.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><DownloadCTA label="Get started" className="sm:min-w-[9.5rem]" /><Link href="#product" className={buttonStyles("secondary", "sm:min-w-[9.5rem]")}>Explore Dira OS <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted"><Check className="h-4 w-4 text-primary" /> 1 month free <span className="text-border">·</span> No card required <span className="text-border">·</span> Works offline</div></div><div className="relative lg:pl-3"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" /><DemoDashboard /><div className="absolute -bottom-4 -left-2 hidden items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-[10px] font-medium text-muted shadow-panel sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Offline-ready workflows</div></div></div></Container>
    </section>

    <section aria-label="Dira OS capabilities" className="border-b border-border bg-surface"><Container><div className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">{capabilities.map(([Icon, label, caption]) => <div key={label} className="px-3 py-4 sm:px-4"><Icon className="h-4 w-4 text-primary" aria-hidden="true" /><p className="mt-2 text-xs font-semibold">{label}</p><p className="mt-1 text-[10px] leading-4 text-muted">{caption}</p></div>)}</div></Container></section>

    <section id="product" className="section-pad"><Container><div className="grid items-end gap-5 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Everything connected</p><h2 className="section-title mt-3">Everything your business needs. In one place.</h2></div><p className="max-w-lg text-[15px] leading-6 text-muted">Dira OS keeps the essential work close together, so your team can sell, manage and decide with less friction.</p></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{coreFeatures.map(([Icon, title, description]) => <Card key={title} className="group p-4 hover:-translate-y-0.5 hover:border-primary/30"><div className="flex items-start justify-between"><div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary"><Icon className="h-4 w-4" aria-hidden="true" /></div><ArrowRight className="h-4 w-4 text-border transition group-hover:translate-x-0.5 group-hover:text-primary" /></div><h3 className="mt-5 text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-muted">{description}</p></Card>)}</div></Container></section>

    <section className="border-y border-border bg-surface-muted/70 section-pad"><Container><div className="mb-8 max-w-2xl"><p className="eyebrow">Product views</p><h2 className="section-title mt-3">See the work, not just the promise.</h2><p className="mt-3 text-[15px] leading-6 text-muted">Explore the core Dira OS workflows. Every view stays connected to the same operating system.</p></div><ProductShowcase /></Container></section>

    <section className="section-pad"><Container><div className="mb-8 max-w-2xl"><p className="eyebrow">One operating picture</p><h2 className="section-title mt-3">The details that keep the day moving.</h2></div><div className="space-y-4">{showcaseRows.map((row, index) => { const Icon = row.icon; return <div key={row.label} className="grid items-center gap-6 rounded-2xl border border-border bg-surface p-5 shadow-panel sm:p-6 lg:grid-cols-[0.9fr_1.1fr]">{index % 2 === 0 ? <><div><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div><p className="eyebrow mt-5">{row.label}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{row.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-muted">{row.body}</p><ul className="mt-5 grid gap-2 text-xs text-muted sm:grid-cols-3">{row.points.map((point) => <li key={point} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />{point}</li>)}</ul></div><DemoDashboard /></> : <><DemoDashboard /><div><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div><p className="eyebrow mt-5">{row.label}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{row.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-muted">{row.body}</p><ul className="mt-5 grid gap-2 text-xs text-muted sm:grid-cols-3">{row.points.map((point) => <li key={point} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />{point}</li>)}</ul></div></>}</div> })}</div></Container></section>

    <section className="border-y border-border bg-surface-muted/70 section-pad"><Container><div className="grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="eyebrow">Offline-first by design</p><h2 className="section-title mt-3">Keep selling. Even when the internet doesn&apos;t.</h2><p className="mt-4 max-w-lg text-[15px] leading-6 text-muted">Dira OS keeps critical workflows available on the device, then synchronizes when connectivity returns.</p></div><OfflineSyncVisual /></div></Container></section>

    <section id="solutions" className="section-pad"><Container><div className="grid items-end gap-4 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Business types</p><h2 className="section-title mt-3">Built around how your business works.</h2></div><p className="max-w-lg text-[15px] leading-6 text-muted">From retail and food to services and professional teams, use the same connected system with a workflow that fits.</p></div><div className="mt-7"><IndustrySelector /></div></Container></section>

    <section className="border-y border-border bg-surface-muted/70 section-pad"><Container><div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]"><div><p className="eyebrow">Business dashboard</p><h2 className="section-title mt-3">A calmer view of what is happening.</h2><p className="mt-3 max-w-lg text-[15px] leading-6 text-muted">See revenue, sales, expenses, inventory and recent activity in a dashboard your team can read quickly.</p><div className="mt-6 grid gap-3 sm:grid-cols-3">{[[Database, "Revenue", "KES 84.2k"], [Receipt, "Sales", "126 today"], [Barcode, "Inventory", "06 low stock"]].map(([Icon, label, value]) => <div key={label as string} className="rounded-xl border border-border bg-surface p-3"><Icon className="h-4 w-4 text-primary" /><p className="mt-3 text-[10px] text-muted">{label as string}</p><p className="mt-1 text-sm font-semibold">{value as string}</p></div>)}</div></div><div className="hidden lg:block"><PhonePreview /></div></div></Container></section>

    <section id="pricing" className="section-pad"><Container><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Pricing</p><h2 className="section-title mt-3">Start simple. Scale when you need to.</h2><p className="mt-3 text-sm text-muted"><span className="font-semibold text-foreground">1 month free</span> · No credit card required · Employee-based plans</p></div><Link href="/pricing" className={buttonStyles("secondary")}>Compare plans <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{pricingPlans.map((plan) => <Card key={plan.name} className={`flex flex-col p-4 ${plan.recommended ? "border-primary/60 ring-1 ring-primary/20" : ""}`}><div className="flex items-center justify-between"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{plan.name}</p>{plan.recommended ? <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">Recommended</span> : null}</div><p className="mt-4 text-2xl font-semibold tracking-tight">{plan.price}</p><p className="mt-1 text-xs text-muted">{plan.note}</p><ul className="mt-4 space-y-2 text-[11px] text-muted">{plan.features.slice(0, 3).map((feature) => <li key={feature} className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" />{feature}</li>)}</ul><Link href="/download" className="mt-5 inline-flex items-center text-xs font-semibold text-primary hover:text-primary/80">Start free trial <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link></Card>)}</div></Container></section>

    <section className="section-pad"><Container><div className="grid items-center gap-8 rounded-2xl border border-primary/20 bg-primary/[0.05] p-6 sm:p-9 lg:grid-cols-[1fr_0.8fr]"><div><p className="eyebrow">Dira OS on Android</p><h2 className="section-title mt-3">Your business. In your pocket.</h2><p className="mt-3 max-w-lg text-[15px] leading-6 text-muted">Keep sales, stock, teams and performance close to the work with Dira OS on Android.</p><div className="mt-6 flex flex-wrap gap-3"><DownloadCTA label="Start free" /><Link href="/download" className={buttonStyles("secondary")}>Download Dira OS</Link></div></div><div className="lg:justify-self-end"><PhonePreview /></div></div></Container></section>

    <section className="border-t border-border section-pad"><Container><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">FAQ</p><h2 className="section-title mt-3">Quick answers.</h2></div><HomeFaq items={faqItems.filter((item) => ["What is Dira OS?", "Does Dira OS work offline?", "What happens when the internet comes back?", "Which businesses can use Dira OS?", "Is there a free trial?"].includes(item.question))} /></Container></section>

    <section className="pb-14 sm:pb-16"><Container><div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.06] p-7 sm:p-10"><div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" /><div className="relative"><p className="eyebrow">Make the next move</p><h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Build a better way to run your business.</h2><p className="mt-3 max-w-xl text-[15px] leading-6 text-muted">Bring your sales, inventory, finance and operations together with Dira OS.</p><div className="mt-6 flex flex-wrap items-center gap-3"><DownloadCTA label="Start free" /><Link href="#product" className={buttonStyles("secondary")}>Explore features <ArrowRight className="h-4 w-4" /></Link></div></div></div></Container></section>
  </>;
}
