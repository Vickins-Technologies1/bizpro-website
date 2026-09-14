import Link from "next/link";
import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { pricingPlans } from "@/config/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Choose a Dira OS plan for your team, from Starter to Enterprise.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple plan structure."
            description="Start with a 1-month free trial, then choose a plan based on your team size."
          />
        </Reveal>

        <Reveal delay={70}>
          <div className="mt-4 rounded-3xl border border-border/70 bg-card/60 p-4 text-sm text-muted">
            1 month free trial. No card required.
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80} direction={index === 1 ? "up" : index === 0 ? "left" : "right"}>
              <Card className={`p-5 ${plan.recommended ? "border-primary/25 ring-1 ring-primary/10" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{plan.name}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{plan.note}</p>
                  </div>
                  {plan.recommended ? (
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary motion-safe:animate-soft-pulse">
                      Recommended
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 text-2xl font-semibold tracking-tight">{plan.price}</p>

                <ul className="mt-5 grid gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={90}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/70 bg-card/70 p-5">
            <p className="text-sm text-muted">Need help choosing? Talk to the Dira OS team.</p>
            <Link href="/contact" className={buttonStyles("secondary")}>
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
