import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Learn why BizPro exists and how it brings business operations together in one offline-first system.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A simpler way to run day-to-day business operations."
            description="BizPro brings essential workflows together so teams can stay focused and work with confidence."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {[
            {
              title: "Simplify operations",
              body: "Bring sales, inventory, finance and team tools into one operating model."
            },
            {
              title: "Support offline work",
              body: "Keep work moving when connectivity is unreliable, then sync updates when the connection returns."
            },
            {
              title: "Stay connected",
              body: "Keep sales, stock and reporting aligned in one shared system."
            },
            {
              title: "Scale with confidence",
              body: "Keep the product compact, clear and ready for growing teams."
            }
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <Card className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
