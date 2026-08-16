import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DownloadCTA } from "@/components/ui/download-cta";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" }
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/60 bg-card/30">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{siteConfig.siteName}</p>
              <h2 className="text-3xl font-semibold tracking-tight">{siteConfig.brand.descriptor}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted">
              {siteConfig.description} Built as a premium, independent website that stays globally neutral while
              remaining configurable for the current market.
            </p>
            <div className="flex flex-wrap gap-3">
              <DownloadCTA />
              <Link href="/contact" className={buttonStyles("secondary")}>
                Contact BizPro
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Explore</p>
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Contact</p>
            <div className="grid gap-3">
              {siteConfig.contactEmail ? (
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contactEmail}
                </a>
              ) : (
                <p className="text-sm text-muted">Email not configured</p>
              )}

              {siteConfig.contactPhone ? (
                <a
                  href={`tel:${siteConfig.contactPhone}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contactPhone}
                </a>
              ) : (
                <p className="text-sm text-muted">Phone not configured</p>
              )}

              <p className="text-sm text-muted">Support hours: {siteConfig.supportHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">© {year} BizPro. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Link href="/download" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:opacity-80">
              Download <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

