import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { faqItems } from "@/config/faq";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Answers to common questions about BizPro, offline workflows and Android installation.",
  path: "/faq"
});

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Quick answers." description="Short answers to the most common questions." />
        </Reveal>

        <div className="mt-8 grid gap-4">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <Card className="p-0">
                <details className="group p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold outline-none">
                    {item.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/70 text-muted transition group-open:text-primary">
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
                </details>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
