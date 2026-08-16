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
  description: "Contact BizPro using the available support channels.",
  path: "/contact"
});

export default function ContactPage() {
  const contactItems = [
    siteConfig.contactEmail
      ? { label: "Email", href: `mailto:${siteConfig.contactEmail}`, value: siteConfig.contactEmail, icon: Mail }
      : null,
    siteConfig.contactPhone
      ? { label: "Phone", href: `tel:${siteConfig.contactPhone}`, value: siteConfig.contactPhone, icon: Phone }
      : null,
    siteConfig.whatsappUrl
      ? { label: "WhatsApp", href: siteConfig.whatsappUrl, value: "Open WhatsApp", icon: MessageCircle, external: true }
      : null
  ].filter(Boolean) as Array<{
    label: string;
    href: string;
    value: string;
    icon: typeof Mail;
    external?: boolean;
  }>;

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Talk to BizPro."
          description="Reach us through the available support options."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {contactItems.length ? (
              contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.label} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{item.label}</h3>
                        <a
                          className="text-sm text-muted transition hover:text-foreground"
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                );
              })
            ) : (
              <Card className="p-4">
                <p className="text-sm leading-6 text-muted">Reach out through the contact page to get the latest support details.</p>
              </Card>
            )}

            <Card className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Support hours</p>
              <p className="mt-2 text-sm text-muted">{siteConfig.supportHours}</p>
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
