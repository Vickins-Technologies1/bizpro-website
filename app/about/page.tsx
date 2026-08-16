import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
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
        <SectionHeading
          eyebrow="About"
          title="A simpler way to run day-to-day business operations."
          description="BizPro exists to bring essential business workflows together, reduce fragmentation and support reliable everyday operation."
        />

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
              title: "Stay flexible",
              body: "Use configuration for currency, contact details, download URL and other public settings."
            },
            {
              title: "Scale responsibly",
              body: "Keep the brand globally neutral while allowing the product to grow into different markets later."
            }
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

