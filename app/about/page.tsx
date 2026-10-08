import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CloudOff, Layers3, ShieldCheck, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DownloadCTA } from "@/components/ui/download-cta";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "About", description: "Learn why Dira OS exists and how it brings business operations together in one offline-first system.", path: "/about" });

const principles = [
  { title: "Make operations clearer", body: "Bring sales, inventory, finance and business activity into one operating picture.", icon: Layers3 },
  { title: "Keep work moving", body: "Support core work locally when connectivity is unavailable, then sync when the connection returns.", icon: CloudOff },
  { title: "Give teams context", body: "Keep roles, permissions and branch access close to the work people are responsible for.", icon: Users2 },
  { title: "Protect everyday control", body: "Keep the product focused, practical and readable for the teams using it every day.", icon: ShieldCheck }
];

export default function AboutPage() {
  return <main><section className="relative overflow-hidden border-b border-border bg-surface py-16 sm:py-20 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,var(--wash),transparent_34%)]" /><Container className="relative"><Reveal><div className="max-w-3xl"><p className="eyebrow">About Dira OS</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl">A business operating system for the work behind the work.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Dira OS brings the essential parts of day-to-day business management together, so teams can work with a clearer picture of what is happening and what comes next.</p><div className="mt-8 flex flex-wrap gap-3"><DownloadCTA label="Start Free" /><Link href="/features" className="button secondary">Explore capabilities <ArrowRight className="h-4 w-4" /></Link></div></div></Reveal></Container></section>

    <section className="section"><Container><div className="section-heading narrow"><span className="eyebrow">The Dira OS approach</span><h2>Connected by default. Practical by design.</h2><p>The product is shaped around the real operating rhythm of a business: customers, work, money, teams and the decisions that connect them.</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2">{principles.map(({ title, body, icon: Icon }, index) => <Reveal key={title} delay={index * 70}><article className="h-full rounded-xl border border-border bg-card p-5 sm:p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary"><Icon className="h-4 w-4" /></div><h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-muted">{body}</p></article></Reveal>)}</div></Container></section>

    <section className="section surface"><Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div className="section-heading"><span className="eyebrow">One connected picture</span><h2>Less distance between the work and the understanding.</h2><p>Dira OS is designed to keep activity legible across sales, operations, finance, teams and branches—without turning everyday work into a maze of tools.</p></div><div className="rounded-2xl border border-border bg-card p-5 shadow-panel sm:p-6"><div className="flex items-center justify-between border-b border-border pb-4"><span className="text-xs font-semibold">Operating picture</span><span className="text-[10px] font-semibold text-accent">Connected</span></div><div className="mt-5 grid gap-2">{["Customers", "Daily operations", "Sales activity", "Finance visibility", "Teams and branches", "Business insights"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3"><span className="text-[10px] font-semibold text-primary">0{index + 1}</span><span className="text-xs font-medium">{item}</span><span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" /></div>)}</div></div></Container></section>

    <section className="final-cta"><Container><span className="eyebrow">See it in practice</span><h2>Run the business<br /><em>as one system.</em></h2><p>Explore the product, industries and workflows that make up Dira OS.</p><Link href="/features" className="button primary">Explore Dira OS <ArrowRight className="h-4 w-4" /></Link></Container></section>
  </main>;
}
