import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Download, FileDown, Smartphone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { QRCodeCard } from "@/components/download/qr-code";
import { siteConfig, getDownloadLink } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Download",
  description: "Download BizPro for Android and scan the APK QR code.",
  path: "/download"
});

export default function DownloadPage() {
  const download = getDownloadLink();

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-3xl border border-border/70 bg-card/70 p-3.5">
              <Image
                src="/brand/logo-official.png"
                alt="BizPro official logo"
                width={160}
                height={160}
                className="h-14 w-14 rounded-2xl object-cover"
                priority
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">BizPro</p>
                <p className="text-sm text-muted">Business OS for Android</p>
              </div>
            </div>

            <SectionHeading
              eyebrow="Download"
              title="Download BizPro for Android."
              description="Get BizPro and run sales, inventory and business operations from one place."
            />

            <div className="flex flex-wrap gap-3">
              {download.available ? (
                <a href={download.href} target="_blank" rel="noreferrer" className={buttonStyles("primary")}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download APK
                </a>
              ) : (
                <Link href="/contact" className={buttonStyles("primary")}>
                  Contact BizPro
                </Link>
              )}
              <Link href="/features" className={buttonStyles("secondary")}>
                View features
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Android</p>
                    <p className="text-sm text-muted">{siteConfig.minimumAndroidVersion}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <FileDown className="h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Version</p>
                    <p className="text-sm text-muted">{siteConfig.productVersion}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">{download.available ? "Ready" : "Link"}</p>
                    <p className="text-sm text-muted">{download.available ? "APK available" : "Contact support"}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="w-full max-w-sm">
            {download.available ? (
              <QRCodeCard value={download.href} />
            ) : (
              <Card className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">APK</p>
                <p className="mt-2 text-sm leading-6 text-muted">Contact BizPro for the latest APK link.</p>
              </Card>
            )}
          </div>
        </div>

        <Card className="mt-8 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Install</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "1. Download the APK.",
              "2. Allow installs from your browser if prompted.",
              "3. Open BizPro.",
              "4. Start using your business workspace."
            ].map((step) => (
              <div key={step} className="rounded-2xl border border-border/60 bg-background/70 p-3 text-sm leading-6 text-muted">
                {step}
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
