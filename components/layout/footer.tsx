import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DownloadCTA } from "@/components/ui/download-cta";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/industries", label: "Industries" },
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
    <footer className="site-footer mt-14 border-t border-border/60 bg-surface-muted/45">
      <Container className="py-9">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_0.8fr]">
          <div className="footer-brand space-y-4">
            <div>
              <div className="flex items-center gap-2.5">
                <Image src="/brand/logo-official.png" alt="Dira OS" width={32} height={32} className="h-8 w-8 object-contain" unoptimized />
                <div>
                  <p className="text-sm font-bold tracking-[-0.02em]">{siteConfig.siteName}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{siteConfig.tagline}</p>
                </div>
              </div>
            </div>
            <p className="max-w-md text-xs leading-6 text-muted">
              A mobile business operating system for sales, inventory, finance and everyday operations. By Vickins Technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <DownloadCTA compact label="Get Started" />
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

        <div className="footer-bottom mt-8 flex flex-col gap-3 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">© {year} Dira OS · Vickins Technologies. All rights reserved.</p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-xs text-muted transition hover:text-primary">{siteConfig.contactEmail}</a>
        </div>
      </Container>
    </footer>
  );
}
