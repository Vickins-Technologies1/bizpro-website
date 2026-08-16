import Link from "next/link";
import type { Metadata } from "next";
import { Building2, ChartColumn, CheckCircle2, CloudOff, Clock3, PackageSearch, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { DownloadCTA } from "@/components/ui/download-cta";
import { ProductMockup } from "@/components/product/product-mockup";
import { OfflineSyncVisual } from "@/components/product/offline-sync-visual";
import { IndustrySelector } from "@/components/industry-selector";
import { homepageFeatureBlocks } from "@/config/features";
import { faqItems } from "@/config/faq";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "BizPro — Business OS",
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

      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Business Operating System
              </div>

              <div className="space-y-4">
                <h1 className="max-w-xl text-[2.35rem] font-semibold tracking-tight text-balance leading-[1.02] sm:text-5xl lg:text-[3.55rem]">
                  Run your business. Even when the internet doesn&apos;t.
                </h1>
                <p className="max-w-xl text-sm leading-6 text-muted sm:text-[15px]">
                  POS, inventory, finance, reporting and team management in one powerful Business OS.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <DownloadCTA />
                <Link href="/features" className={buttonStyles("secondary")}>
                  Explore Features
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {["POS", "Inventory", "Offline sync", "Branch-ready"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-[11px] font-medium text-muted"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(45,216,233,0.14),transparent_34%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_30%)] blur-2xl" />
              <ProductMockup />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 bg-card/25">
        <Container className="py-10 lg:py-12">
          <SectionHeading
            eyebrow="Core capabilities"
            title="Everything you need to run the day."
            description="BizPro combines the essentials into one place so the business stays focused and fast."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {capabilityItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="p-4">
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
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <SectionHeading
              eyebrow="Offline-first"
              title="Your business shouldn't stop because the internet did."
              description="BizPro saves locally, queues changes and syncs them when the connection returns."
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
            <OfflineSyncVisual />
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Show the product, not just the idea."
            description="Short feature blocks keep the site product-focused and easy to scan."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homepageFeatureBlocks.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-4 transition hover:-translate-y-0.5 hover:border-primary/30">
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
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="One platform. Different businesses."
            description="Retail, food service, beauty, healthcare, automotive, services and professional teams can all use BizPro."
          />
          <div className="mt-8">
            <IndustrySelector />
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Card className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
              <div className="space-y-4 p-5 sm:p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Download</p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Download BizPro for Android.</h2>
                <p className="max-w-xl text-sm leading-6 text-muted">
                  Get BizPro for Android and manage the business from one place.
                </p>
                <div className="flex flex-wrap gap-3">
                  <DownloadCTA />
                  <Link href="/contact" className={buttonStyles("secondary")}>
                    Contact BizPro
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
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers."
            description="The essentials are answered here without adding clutter."
            action={<Link href="/faq" className={buttonStyles("secondary")}>Open FAQ</Link>}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {faqPreview.map((item) => (
              <Card key={item.question} className="p-4">
                <h3 className="text-base font-semibold">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Card className="overflow-hidden border-primary/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.1),rgba(34,211,238,0.12))] p-5 sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Final CTA</p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sell. Manage. Grow.</h2>
                <p className="max-w-xl text-sm leading-6 text-muted">
                  BizPro brings sales, inventory, finance, teams and everyday operations into one Business OS.
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
