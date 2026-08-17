import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "BizPro terms overview.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Legal" title="Terms of Service" description="A concise terms outline for BizPro." />
        </Reveal>

        <div className="mt-8 grid gap-4">
          {[
            "Use BizPro in line with the accepted terms and any applicable local requirements.",
            "Account access and product availability may vary by deployment and plan.",
            "Content and pricing can change over time as the service evolves."
          ].map((item, index) => (
            <Reveal key={item} delay={index * 80}>
              <Card className="p-4">
                <p className="text-sm leading-6 text-muted">{item}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
