import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Layers3, RefreshCcw, ShieldCheck, ShoppingCart, Warehouse, PieChart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { featureCategories } from "@/config/features";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description: "Explore BizPro across selling, inventory, finance, operations, reporting and offline sync.",
  path: "/features"
});

const featureIcons = [ShoppingCart, Warehouse, PieChart, ShieldCheck, Layers3, RefreshCcw];

export default function FeaturesPage() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Run the business from one place."
            description="Each section is compact, visual and designed to show the product quickly."
          />
        </Reveal>

        <div className="mt-8 grid gap-4">
          {featureCategories.map((category, index) => {
            const Icon = featureIcons[index];

            return (
              <Reveal key={category.label} delay={index * 70} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="border-b border-border/60 p-5 lg:border-b-0 lg:border-r">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{category.label}</p>
                          <h3 className="mt-1 text-lg font-semibold">{category.title}</h3>
                        </div>
                      </div>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-muted">{category.description}</p>
                    </div>

                    <div className="grid gap-2 p-5 sm:grid-cols-2">
                      {category.items.map((item) => (
                        <div key={item} className="rounded-2xl border border-border/60 bg-background/70 px-3 py-2.5">
                          <p className="text-sm font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/70 bg-card/70 p-5">
            <p className="text-sm text-muted">BizPro keeps the core workflow compact so teams can move quickly.</p>
            <Link href="/download" className={buttonStyles("primary")}>
              Download BizPro
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
