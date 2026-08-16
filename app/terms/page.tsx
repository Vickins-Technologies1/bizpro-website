import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
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
        <SectionHeading
          eyebrow="Legal"
          title="Terms of Service"
          description="A concise terms outline for BizPro."
        />

        <div className="mt-8 grid gap-4">
          {[
            "BizPro features depend on the deployed build and public settings.",
            "Download links, support details and pricing should be verified before use.",
            "Final legal copy should be reviewed before the site goes fully live."
          ].map((item) => (
            <Card key={item} className="p-4">
              <p className="text-sm leading-6 text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
