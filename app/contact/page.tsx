import Link from "next/link";
import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contact BizPro by email, phone or WhatsApp using configurable public contact details.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Reach out through the configured support channels."
          description="The site keeps contact information centralized and falls back gracefully when a channel is missing."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            <Card className="p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Email</h3>
                  {siteConfig.contactEmail ? (
                    <a className="text-sm text-muted transition hover:text-foreground" href={`mailto:${siteConfig.contactEmail}`}>
                      {siteConfig.contactEmail}
                    </a>
                  ) : (
                    <p className="text-sm text-muted">Email not configured</p>
                  )}
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  {siteConfig.contactPhone ? (
                    <a className="text-sm text-muted transition hover:text-foreground" href={`tel:${siteConfig.contactPhone}`}>
                      {siteConfig.contactPhone}
                    </a>
                  ) : (
                    <p className="text-sm text-muted">Phone not configured</p>
                  )}
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  {siteConfig.whatsappUrl ? (
                    <a className="text-sm text-muted transition hover:text-foreground" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                      Open WhatsApp
                    </a>
                  ) : (
                    <p className="text-sm text-muted">WhatsApp not configured</p>
                  )}
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Support hours</p>
              <p className="mt-3 text-sm leading-7 text-muted">{siteConfig.supportHours}</p>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Link href="/download" className={buttonStyles("secondary")}>
                Download page
              </Link>
              {siteConfig.whatsappUrl ? (
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className={buttonStyles("primary")}>
                  Open WhatsApp
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

