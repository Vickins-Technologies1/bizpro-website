import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Building2, ChartColumn, CheckCircle2, CloudOff, Clock3, PackageSearch, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { DownloadCTA } from "@/components/ui/download-cta";
import { OfflineSyncVisual } from "@/components/product/offline-sync-visual";
import { IndustrySelector } from "@/components/industry-selector";
import { Reveal } from "@/components/ui/reveal";
import { homepageFeatureBlocks } from "@/config/features";
import { faqItems } from "@/config/faq";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dira OS — Business Operating System",
  description: siteConfig.description,
  path: "/"
});

const capabilityItems = [
  { label: "Offline-first", icon: CloudOff },
  { label: "Fast POS", icon: Clock3 },
  { label: "Inventory control", icon: PackageSearch },
  { label: "Team access", icon: Users2 },
  { label: "Branch management", icon: Building2 },
  { label: "Reporting", icon: ChartColumn }
] as const;

const faqPreview = faqItems.slice(0, 3);

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.websiteUrl,
    description: siteConfig.description
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.siteName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: siteConfig.defaultCurrency
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <section className="relative isolate overflow-hidden py-12 sm:py-16 lg:min-h-[calc(100svh-5.5rem)] lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_8%,rgba(45,216,233,0.16),transparent_25%),radial-gradient(circle_at_12%_56%,rgba(59,130,246,0.09),transparent_24%),radial-gradient(circle_at_88%_44%,rgba(59,130,246,0.08),transparent_24%)] dark:bg-[radial-gradient(circle_at_50%_8%,rgba(45,216,233,0.2),transparent_25%),radial-gradient(circle_at_12%_56%,rgba(59,130,246,0.13),transparent_24%),radial-gradient(circle_at_88%_44%,rgba(59,130,246,0.12),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 opacity-40 [background-image:linear-gradient(rgba(90,102,124,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(90,102,124,0.12)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="space-y-6">
              <div
                className="inline-flex items-center rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-primary motion-safe:animate-slide-up"
                style={{ animationDelay: "60ms" }}
              >
                BUSINESS OPERATIONS, SIMPLIFIED
              </div>

              <div className="space-y-5">
                <h1
                  className="text-balance text-[clamp(2.75rem,7vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.055em] motion-safe:animate-slide-up"
                  style={{ animationDelay: "120ms" }}
                >
                  Run Your Business<br /><span className="text-primary">Smarter With Dira OS.</span>
                </h1>
                <p
                  className="mx-auto max-w-2xl text-[15px] leading-7 text-muted motion-safe:animate-slide-up sm:text-[17px] sm:leading-8"
                  style={{ animationDelay: "190ms" }}
                >
                  Dira OS brings sales, inventory, finances, staff, branches and business insights together in one powerful business operating system.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-3 motion-safe:animate-slide-up sm:flex-row sm:items-center" style={{ animationDelay: "260ms" }}>
                <DownloadCTA label="Start Free Trial" className="sm:min-w-[13rem]" />
                <Link href="/features" className={buttonStyles("secondary", "sm:min-w-[11rem]")}>
                  Explore Features
                </Link>
              </div>

              <div
                className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] leading-5 text-muted motion-safe:animate-slide-up"
                style={{ animationDelay: "330ms" }}
              >
                {["Offline-first sync", "Android ready", "Built for daily operations"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-14 w-full max-w-3xl motion-safe:animate-slide-up" style={{ animationDelay: "420ms" }}>
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4">
                {[
                  { label: "Sales today", value: "+24.8%", note: "vs. last week" },
                  { label: "Stock health", value: "92%", note: "18 items synced" },
                  { label: "Team active", value: "08", note: "across 2 branches" },
                  { label: "Time saved", value: "6.4h", note: "this week", accent: true }
                ].map((item, index) => (
                  <div key={item.label} className={`rounded-3xl border border-border/70 bg-card/75 p-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/30 ${index % 2 === 1 ? "sm:translate-y-5" : ""}`}>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">{item.label}</span>
                      {item.accent ? <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden="true" /> : null}
                    </div>
                    <p className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">{item.value}</p>
                    <p className="mt-1 text-xs text-muted">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 bg-card/25">
        <Container className="py-10 lg:py-12">
          <Reveal>
            <SectionHeading
              eyebrow="Core capabilities"
              title="Everything you need to run the day."
              description="Dira OS combines the essentials into one place so the business stays focused, visible and in control."
            />
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {capabilityItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 60}>
                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-xs text-muted">Core capability</p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="Offline-first"
                title="Your business shouldn't stop because the internet did."
                description="Dira OS saves locally, queues changes and syncs them when the connection returns."
                action={
                  <div className="flex flex-wrap gap-3">
                    <Link href="/download" className={buttonStyles("secondary")}>
                      Open download page
                    </Link>
                    <Link href="/features" className={buttonStyles("ghost")}>
                      View features
                    </Link>
                  </div>
                }
              />
            </Reveal>
            <OfflineSyncVisual />
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Features"
              title="Show the product, not just the idea."
              description="Short feature blocks keep the site product-focused and easy to scan."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homepageFeatureBlocks.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 70} direction={index % 2 === 0 ? "left" : "right"}>
                  <Card className="p-4 transition hover:-translate-y-0.5 hover:border-primary/30">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <span className="rounded-full border border-border/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                        Core
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {feature.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="One platform. Different businesses."
              description="One operating system. Different businesses. Configured around how you work."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8">
            <IndustrySelector />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Reveal>
            <Card className="overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
                <div className="space-y-4 p-5 sm:p-6 lg:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Download</p>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start your Dira OS journey.</h2>
                  <p className="max-w-xl text-sm leading-6 text-muted">
                    Explore Dira OS and manage your business from one connected system.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <DownloadCTA />
                    <Link href="/contact" className={buttonStyles("secondary")}>
                      Contact Dira OS
                    </Link>
                  </div>
                </div>
                <div className="flex items-center bg-[linear-gradient(135deg,rgba(59,130,246,0.1),rgba(34,211,238,0.14))] p-5 sm:p-6 lg:p-8">
                  <div className="grid gap-2 rounded-3xl border border-border/70 bg-background/80 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Android</p>
                    <p className="text-sm font-semibold">{siteConfig.productVersion}</p>
                    <p className="text-xs text-muted">{siteConfig.minimumAndroidVersion}</p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Quick answers."
              description="The essentials are answered here without adding clutter."
              action={<Link href="/faq" className={buttonStyles("secondary")}>Open FAQ</Link>}
            />
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {faqPreview.map((item, index) => (
              <Reveal key={item.question} delay={index * 60}>
                <Card className="p-4">
                  <h3 className="text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Reveal>
            <Card className="overflow-hidden border-primary/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.1),rgba(34,211,238,0.12))] p-5 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Final CTA</p>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sell. Manage. Grow.</h2>
                  <p className="max-w-xl text-sm leading-6 text-muted">
                    Dira OS brings sales, inventory, finance, teams and everyday operations into one Business Operating System.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <DownloadCTA />
                  <Link href="/features" className={buttonStyles("secondary")}>
                    Explore Features
                  </Link>
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
