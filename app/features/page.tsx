import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, ShoppingCart, Warehouse, PieChart, RefreshCcw, Layers3 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { featureCategories } from "@/config/features";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description: "Explore BizPro features across selling, inventory, finance, operations, reporting and offline sync.",
  path: "/features"
});

const featureIcons = [ShoppingCart, Warehouse, PieChart, ShieldCheck, Layers3, RefreshCcw];

export default function FeaturesPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to run the business, presented in a clear system."
            description="This page uses an editorial layout instead of a wall of generic cards. Each category shows how BizPro fits into everyday operations."
          />
        </div>

        <div className="mt-10 grid gap-6">
          {featureCategories.map((category, index) => {
            const Icon = featureIcons[index];

            return (
              <Card key={category.label} className="overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="border-b border-border/60 p-6 lg:border-b-0 lg:border-r lg:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{category.label}</p>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">{category.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{category.description}</p>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {category.items.map((item) => (
                        <div key={item} className="rounded-2xl border border-border/60 bg-background/70 p-4">
                          <p className="text-sm font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">System note</p>
            <h2 className="mt-3 text-2xl font-semibold">BizPro keeps the brand neutral and scalable.</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              The site can support multiple countries, currencies and deployment configurations through a single source of
              public settings. The current default currency is {siteConfig.defaultCurrency}.
            </p>
          </Card>
          <Link href="/download" className={buttonStyles("primary")}>
            Download BizPro
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

