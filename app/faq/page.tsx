import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ChevronDown, CircleHelp, Download, Wifi } from "lucide-react";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadCTA } from "@/components/ui/download-cta";
import { Reveal } from "@/components/ui/reveal";
import { faqItems } from "@/config/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Dira OS FAQ | Offline POS, Inventory and Business Software", description: "Find answers about Dira OS offline-first workflows, POS, inventory, pricing, teams, branches and Android installation.", path: "/faq" });

const groups = [
  { title: "The basics", icon: CircleHelp, questions: ["What is Dira OS?", "Which businesses can use Dira OS?"] },
  { title: "Working with Dira OS", icon: Wifi, questions: ["Does Dira OS work offline?", "What happens when the internet comes back?", "Can multiple employees use Dira OS?", "Can businesses have multiple branches?"] },
  { title: "Getting started", icon: Download, questions: ["How much does Dira OS cost?", "Is there a free trial?", "Is Dira OS available on Android?", "What currency does Dira OS support?", "How do I contact support?"] }
] as const;

export default function FaqPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

  return <main><section className="relative overflow-hidden border-b border-border bg-surface py-16 sm:py-20 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,var(--wash),transparent_34%)]" /><Container className="relative"><JsonLd data={schema} /><Reveal><div className="max-w-3xl"><p className="eyebrow">Questions, answered</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl">Clarity before you start.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Straight answers about the Dira OS operating model, offline work, plans, teams, branches and getting started.</p><div className="mt-8 flex flex-wrap gap-3"><DownloadCTA label="Start Free" /><Link href="/contact" className="button secondary">Ask the team <ArrowRight className="h-4 w-4" /></Link></div></div></Reveal></Container></section>

    <section className="section"><Container><div className="mx-auto grid max-w-4xl gap-10">{groups.map((group, groupIndex) => { const Icon = group.icon; return <Reveal key={group.title} delay={groupIndex * 70}><section><div className="mb-4 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span><h2 className="text-xl font-semibold tracking-[-0.03em]">{group.title}</h2></div><div className="grid gap-2">{group.questions.map((question) => { const item = faqItems.find((candidate) => candidate.question === question); if (!item) return null; return <details key={item.question} className="group rounded-xl border border-border bg-card px-4 py-4 transition hover:border-primary/30"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold outline-none">{item.question}<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition group-open:text-primary"><ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" /></span></summary><p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{item.answer}</p></details>; })}</div></section></Reveal>; })}</div></Container></section>

    <section className="section surface"><Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow">Still have a question?</p><h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Talk to the Dira OS team.</h2><p className="mt-2 text-sm text-muted">Use the available contact channels and we’ll point you in the right direction.</p></div><Link href="/contact" className="button secondary">Contact us <ArrowRight className="h-4 w-4" /></Link></Container></section>
  </main>;
}
