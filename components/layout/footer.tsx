import Link from "next/link";
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
    <footer className="mt-16 border-t border-border/60 bg-card/25">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{siteConfig.siteName}</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">{siteConfig.brand.descriptor}</h2>
            </div>
            <p className="max-w-md text-xs leading-6 text-muted">
              One connected platform for selling, tracking and operating the business.
            </p>
            <div className="flex flex-wrap gap-2">
              <DownloadCTA />
              <Link href="/contact" className={buttonStyles("secondary")}>
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Product</p>
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-xs text-muted transition hover:text-foreground">
                  {item.label}
                </Link>
              ))}
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
            <p className="text-xs text-muted">Support hours: {siteConfig.supportHours}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-5">
          <p className="text-xs text-muted">© {year} BizPro. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
