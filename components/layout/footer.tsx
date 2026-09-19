import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DownloadCTA } from "@/components/ui/download-cta";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/download", label: "Download" }
] as const;

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" }
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-border/60 bg-surface-muted/45">
      <Container className="py-9">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr_0.75fr]">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{siteConfig.siteName}</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">{siteConfig.brand.descriptor}</h2>
            </div>
            <p className="max-w-md text-xs leading-6 text-muted">
              A modern business operating system designed to simplify everyday business management.
            </p>
            <div className="flex flex-wrap gap-2">
              <DownloadCTA compact label="Start Free Trial" />
              <Link href="/contact" className={buttonStyles("secondary")}>
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Product</p>
            <div className="grid gap-2">
              {productLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-xs text-muted transition hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Company</p>
            <div className="grid gap-2">
              {companyLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-xs text-muted transition hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Support</p>
            <div className="grid gap-2">
              <Link href="/faq" className="text-xs text-muted transition hover:text-foreground">FAQ</Link>
              <Link href="/contact" className="text-xs text-muted transition hover:text-foreground">Support</Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Legal</p>
            <div className="grid gap-2">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-xs text-muted transition hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-5">
          <p className="text-xs text-muted">© {year} Dira OS. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
