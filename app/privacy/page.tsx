import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "BizPro privacy overview.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Legal" title="Privacy Policy" description="A concise privacy outline for BizPro." />
        </Reveal>

        <div className="mt-8 grid gap-4">
          {[
            "BizPro uses only the information needed to run the website and app.",
            "Contact details are used to reply to support and sales requests.",
            "Usage data may be collected to keep the product reliable and improve performance."
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
