import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { faqItems } from "@/config/faq";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Find answers to common questions about BizPro, offline workflows, Android installation and support.",
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
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <SectionHeading
          eyebrow="FAQ"
          title="Answers to the questions people ask most often."
          description="Clear answers help the website feel confident and reduce friction before the first conversation."
        />

        <div className="mt-10 grid gap-4">
          {faqItems.map((item) => (
            <Card key={item.question} className="p-5">
              <details>
                <summary className="cursor-pointer list-none text-lg font-semibold outline-none">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
              </details>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Support</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            {siteConfig.contactEmail
              ? `For anything not covered here, contact ${siteConfig.contactEmail}.`
              : "For anything not covered here, use the configured support channels on the contact page."}
          </p>
        </Card>
      </Container>
    </section>
  );
}

