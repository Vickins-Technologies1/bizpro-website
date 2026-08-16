import Link from "next/link";
import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { pricingPlans } from "@/config/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Explore BizPro Lite, Standard and Pro. Contact us for current pricing if plan prices are not configured.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plan structure, with current pricing configurable later."
          description="BizPro uses three plans today. If pricing is not configured yet, the site shows a professional contact-first fallback."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 ${plan.recommended ? "border-primary/25 ring-1 ring-primary/10" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{plan.name}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{plan.note}</p>
                </div>
                {plan.recommended ? (
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Recommended
                  </span>
                ) : null}
              </div>

              <div className="mt-6 rounded-3xl border border-border/70 bg-background/70 p-5">
                <p className="text-sm text-muted">Contact us for current pricing</p>
              </div>

              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/70 bg-card/70 p-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Need a quote?</p>
            <h2 className="mt-2 text-2xl font-semibold">Talk to BizPro for the latest plan details.</h2>
          </div>
          <Link href="/contact" className={buttonStyles("secondary")}>
            Contact us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

