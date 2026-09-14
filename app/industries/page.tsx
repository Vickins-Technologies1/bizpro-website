import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { IndustrySelector } from "@/components/industry-selector";
import { industryGroups } from "@/config/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description: "See how Dira OS adapts to retail, food service, beauty, hospitality, healthcare and more.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Different businesses. One platform."
            description="Dira OS adjusts to the workflow instead of forcing every business into the same shape."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
          <IndustrySelector />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {industryGroups.map((industry, index) => (
            <Reveal key={industry.key} delay={index * 60} direction={index % 2 === 0 ? "up" : "right"}>
              <Card className="p-4">
                <h3 className="text-base font-semibold">{industry.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{industry.summary}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={90}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/70 bg-card/70 p-5">
            <p className="text-sm text-muted">Dira OS keeps the same core system while adapting to the business.</p>
            <Link href="/features" className={buttonStyles("secondary")}>
              Review features
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
