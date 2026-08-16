import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
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
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description="A concise privacy outline for BizPro."
        />

        <div className="mt-8 grid gap-4">
          {[
            "BizPro uses only the information needed to run the website and app.",
            "Public settings such as contact details and download links are managed centrally.",
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
