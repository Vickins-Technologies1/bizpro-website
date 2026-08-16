import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { IndustrySelector } from "@/components/industry-selector";
import { industryGroups } from "@/config/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description: "See how BizPro adapts to retail, food and beverage, beauty, hospitality, healthcare and more.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="One platform. Different businesses."
          description="BizPro adapts to the workflow of the business instead of forcing every business into exactly the same shape."
        />

        <div className="mt-10">
          <IndustrySelector />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {industryGroups.map((industry) => (
            <Card key={industry.key} className="p-5">
              <h3 className="text-lg font-semibold">{industry.label}</h3>
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

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/70 bg-card/70 p-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Flexible workflows</p>
            <h2 className="mt-2 text-2xl font-semibold">Different businesses, same reliable system.</h2>
          </div>
          <Link href="/features" className={buttonStyles("secondary")}>
            Review features
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

