import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, CloudOff, Clock3, PackageSearch, Users2, Building2, ChartColumn } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { DownloadCTA } from "@/components/ui/download-cta";
import { ProductMockup } from "@/components/product/product-mockup";
import { OfflineSyncVisual } from "@/components/product/offline-sync-visual";
import { homepageFeatureBlocks } from "@/config/features";
import { industryGroups } from "@/config/industries";
import { faqItems } from "@/config/faq";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "BizPro — Business OS",
  description: siteConfig.description,
  path: "/"
});

const trustItems = [
  { label: "Offline-first", icon: CloudOff },
  { label: "Fast POS", icon: Clock3 },
  { label: "Inventory control", icon: PackageSearch },
  { label: "Team access", icon: Users2 },
  { label: "Branch management", icon: Building2 },
  { label: "Reporting", icon: ChartColumn }
] as const;

const problems = [
  {
    title: "Internet goes down.",
    result: "Keep working.",
    description:
      "BizPro records core actions locally so counters, stock updates and day-to-day operations keep moving."
  },
  {
    title: "Stock becomes difficult to track.",
    result: "Stay in control.",
    description:
      "Manage products, suppliers, stock changes and purchase activity from one connected workspace."
  },
  {
    title: "Business finances are scattered.",
    result: "See the bigger picture.",
    description:
      "Bring sales, expenses and customer balances into a cleaner operational view."
  },
  {
    title: "Staff need different levels of access.",
    result: "Give everyone the right tools.",
    description:
      "Roles and permissions help owners, managers and staff work inside the boundaries they need."
  }
] as const;

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

      <section className="pb-12 pt-10 sm:pt-16 lg:pb-20 lg:pt-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Business Operating System
              </div>

              <div className="space-y-5">
                <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
                  Run your business. Even when the internet doesn&apos;t.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  BizPro brings POS, inventory, finance, reporting, team management and more into one powerful
                  offline-first Business Operating System.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <DownloadCTA />
                <Link href="/features" className={buttonStyles("secondary")}>
                  Explore Features
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Offline-first workflows",
                  "Flexible public configuration",
                  "Globally neutral product identity"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="mb-4 flex items-center gap-4 p-4">
                <Image
                  src="/brand/logo-official.png"
                  alt="BizPro official logo"
                  width={180}
                  height={180}
                  className="h-20 w-20 rounded-2xl object-cover"
                  priority
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Official logo</p>
                  <p className="mt-1 text-sm text-muted">Primary brand asset used across BizPro website sections.</p>
                </div>
              </Card>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(45,216,233,0.16),transparent_38%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_34%)] blur-2xl" />
              <ProductMockup />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 bg-card/35">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Trust"
            title="Everything your business needs to operate with confidence."
            description="A premium website should explain the product quickly, without noise. BizPro focuses on the capabilities that matter most."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-base font-semibold">{item.label}</p>
                      <p className="text-sm text-muted">Core capability</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Problems"
            title="Real operating problems, handled with practical product design."
            description="BizPro is built around everyday business friction, not abstract SaaS language."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {problems.map((item) => (
              <Card key={item.title} className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">{item.title}</p>
                <div className="mt-4 space-y-2">
                  <h3 className="text-2xl font-semibold">{item.result}</h3>
                  <p className="text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionHeading
              eyebrow="Offline-first"
              title="Your business shouldn't stop because the internet did."
              description="Actions are saved locally, queued for sync, and updated to the cloud when connectivity returns. The experience is designed to stay calm, clear and fast."
              action={
                <div className="flex flex-wrap gap-3">
                  <Link href="/download" className={buttonStyles("secondary")}>
                    Download page
                  </Link>
                  <Link href="/features" className={buttonStyles("ghost")}>
                    View feature details
                  </Link>
                </div>
              }
            />
            <OfflineSyncVisual />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Core features"
            title="The essentials are organized to support everyday operations."
            description="Each capability is presented with a clear visual, a short explanation and a practical role in the broader system."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homepageFeatureBlocks.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-5 transition hover:-translate-y-0.5 hover:border-primary/30">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-muted">
                      Core
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{feature.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {feature.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="One platform"
                title="Different businesses. One connected operating system."
                description="BizPro adapts to business types instead of forcing every team into the same rigid workflow."
              />
              <Link href="/industries" className={buttonStyles("secondary")}>
                Explore industries
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {industryGroups.slice(0, 4).map((industry) => (
                <Card key={industry.key} className="p-5">
                  <p className="text-lg font-semibold">{industry.label}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{industry.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {industry.capabilities.map((capability) => (
                      <span key={capability} className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted">
                        {capability}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Built to flex across different business models."
            description="Retail, restaurants, beauty, hospitality, healthcare, automotive, services and professional offices can all use the same core platform."
            action={<Link href="/industries" className={buttonStyles("secondary")}>View all industries</Link>}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {industryGroups.slice(0, 8).map((industry) => (
              <Card key={industry.key} className="p-5">
                <h3 className="text-lg font-semibold">{industry.label}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{industry.summary}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <Card className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-5 p-6 sm:p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Download</p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Run your business with BizPro.</h2>
                <p className="max-w-xl text-sm leading-7 text-muted">
                  Bring sales, inventory, finance, teams and everyday operations together in one Business OS. The Android
                  APK is the primary conversion goal on this website.
                </p>
                <div className="flex flex-wrap gap-3">
                  <DownloadCTA />
                  <Link href="/pricing" className={buttonStyles("secondary")}>
                    View pricing
                  </Link>
                </div>
              </div>
              <div className="bg-[linear-gradient(135deg,rgba(59,130,246,0.10),rgba(34,211,238,0.16))] p-6 sm:p-8 lg:p-10">
                <div className="grid gap-3 rounded-3xl border border-border/70 bg-background/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Primary CTA hierarchy</p>
                  {[
                    "Download BizPro",
                    "Explore Features",
                    "View Industries",
                    "Contact BizPro"
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm",
                        index === 0 ? "border-primary/20 bg-primary/5 text-foreground" : "border-border/60 text-muted"
                      )}
                    >
                      <span>{item}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers to the most common questions."
            description="The homepage should remove friction and make it easy for visitors to understand what BizPro does."
            action={<Link href="/faq" className={buttonStyles("secondary")}>Open FAQ</Link>}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqItems.slice(0, 4).map((item) => (
              <Card key={item.question} className="p-5">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <Card className="overflow-hidden border-primary/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.10),rgba(34,211,238,0.12))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Final CTA</p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sell. Manage. Grow.</h2>
                <p className="max-w-2xl text-sm leading-7 text-muted">
                  BizPro combines the tools businesses need into one clear operating system. Download the Android app
                  when the APK is available or open the download page for the current status.
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
        </Container>
      </section>
    </>
  );
}
