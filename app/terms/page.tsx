import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Placeholder terms of service content for BizPro.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Legal"
          title="Terms of Service"
          description="This page is intentionally structured to make it easy to replace the placeholder copy with final terms."
        />

        <div className="mt-10 grid gap-4">
          {[
            "BizPro is provided as a configurable business software platform, and available features depend on the deployed build and public settings.",
            "Download links, contact details and product version information are managed centrally through environment configuration.",
            "Users should verify the current APK, support channels and pricing before making operational decisions.",
            "Replace this placeholder legal content with final reviewed terms prior to public launch."
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

