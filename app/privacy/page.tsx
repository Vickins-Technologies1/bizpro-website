import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Placeholder privacy policy content for BizPro, structured so final legal copy can be added later.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description="This page uses professional placeholder copy until the final legal text is provided."
        />

        <div className="mt-10 grid gap-4">
          {[
            "BizPro only collects and processes data required to operate the service and support business workflows.",
            "Public contact details and site settings are configurable through environment variables.",
            "Any analytics implementation should remain opt-in and limited to non-invasive website events.",
            "This placeholder policy should be replaced with the final legal review before launch."
          ].map((item) => (
            <Card key={item} className="p-5">
              <p className="text-sm leading-7 text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

