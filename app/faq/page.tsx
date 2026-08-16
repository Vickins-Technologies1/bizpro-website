import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { faqItems } from "@/config/faq";
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

        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers."
          description="Short answers to the most common questions."
        />

        <div className="mt-8 grid gap-4">
          {faqItems.map((item) => (
            <Card key={item.question} className="p-4">
              <details>
                <summary className="cursor-pointer list-none text-base font-semibold outline-none">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
              </details>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
