import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DownloadCTA } from "@/components/ui/download-cta";
import { JsonLd } from "@/components/seo/json-ld";
import type { SeoLandingPage } from "@/config/seo-landing-pages";
import { siteConfig } from "@/config/site";

export function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  const canonical = new URL(page.path, siteConfig.websiteUrl).toString();
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.websiteUrl },
      { "@type": "ListItem", position: 2, name: page.eyebrow, item: canonical }
    ]
  };

  return <main><JsonLd data={breadcrumb} />
    <section className="relative overflow-hidden border-b border-border bg-surface py-16 sm:py-20 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,var(--wash),transparent_34%)]" /><Container className="relative"><div className="max-w-3xl"><p className="eyebrow">{page.eyebrow}</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl">{page.heading}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{page.introduction}</p><div className="mt-8 flex flex-wrap gap-3"><DownloadCTA label="Get Dira OS" /><Link href="#how-it-works" className="button secondary">Explore the workflow <ArrowRight className="h-4 w-4" /></Link></div></div></Container></section>
    <section className="section"><Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div className="section-heading"><span className="eyebrow">Dira OS in practice</span><h2>{page.overviewHeading}</h2><p>{page.overview}</p><Link href="/features" className="button secondary mt-7">Explore all features <ArrowRight className="h-4 w-4" /></Link></div><div id="how-it-works" className="grid gap-3">{page.workflows.map((workflow, index) => <article key={workflow.title} className="rounded-xl border border-border bg-card p-5"><span className="text-xs font-semibold text-primary">STEP {index + 1}</span><h3 className="mt-3 text-lg font-semibold tracking-[-0.03em]">{workflow.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{workflow.description}</p></article>)}</div></Container></section>
    <section className="section surface"><Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div className="section-heading"><span className="eyebrow">Included capabilities</span><h2>{page.workflowsHeading}</h2><p>These workflows use capabilities currently described for Dira OS.</p></div><ul className="grid gap-3 sm:grid-cols-2">{page.capabilities.map((capability) => <li key={capability} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-accent" />{capability}</li>)}</ul></Container></section>
    <section className="section"><Container><div className="section-heading narrow"><span className="eyebrow">Frequently asked questions</span><h2>Things to know before you start.</h2></div><div className="mx-auto mt-8 grid max-w-4xl gap-3">{page.questions.map((item) => <details key={item.question} className="rounded-xl border border-border bg-card px-5 py-4"><summary className="cursor-pointer text-sm font-semibold">{item.question}</summary><p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p></details>)}</div></Container></section>
    <section className="section surface"><Container><div className="section-heading narrow"><span className="eyebrow">Related Dira OS pages</span><h2>Continue exploring.</h2></div><nav aria-label="Related pages" className="mx-auto mt-7 flex max-w-4xl flex-wrap gap-3">{page.related.map((item) => <Link key={item.href} href={item.href} className="button secondary">{item.label} <ArrowRight className="h-4 w-4" /></Link>)}</nav></Container></section>
    <section className="final-cta"><Container><span className="eyebrow">Dira OS by Vickins Technologies</span><h2>Bring the business<br /><em>into one view.</em></h2><p>Explore the available Android download and current plans.</p><DownloadCTA label="Get Dira OS" /><Link href="/download" className="text-link">Download options <ArrowRight size={15} /></Link></Container></section>
  </main>;
}
