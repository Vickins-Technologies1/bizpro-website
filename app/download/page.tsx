import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Download, FileDown, Smartphone, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { QRCodeCard } from "@/components/download/qr-code";
import { siteConfig, getDownloadLink } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Download",
  description: "Download BizPro for Android, scan the APK QR code and review the installation steps.",
  path: "/download"
});

export default async function DownloadPage() {
  const download = getDownloadLink();

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-3xl space-y-6">
            <Card className="inline-flex items-center gap-4 p-4">
              <Image
                src="/brand/logo-official.png"
                alt="BizPro official logo"
                width={180}
                height={180}
                className="h-20 w-20 rounded-2xl object-cover"
                priority
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Official logo</p>
                <p className="mt-1 text-sm text-muted">The current downloadable product identity for BizPro.</p>
              </div>
            </Card>

            <SectionHeading
              eyebrow="Download"
              title="Download BizPro for Android."
              description="The primary conversion goal is simple: help people get the app quickly and safely when the APK is available."
            />

            <div className="flex flex-wrap gap-3">
              {download.available ? (
                <a
                  href={download.href}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonStyles("primary")}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download APK
                </a>
              ) : (
                <div className={buttonStyles("secondary", "cursor-not-allowed opacity-70")}>
                  <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                  Android download coming soon
                </div>
              )}
              <Link href="/contact" className={buttonStyles("secondary")}>
                Contact support
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Android version</p>
                    <p className="text-sm text-muted">{siteConfig.minimumAndroidVersion}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <FileDown className="h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Product version</p>
                    <p className="text-sm text-muted">{siteConfig.productVersion}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Status</p>
                    <p className="text-sm text-muted">{download.available ? "APK ready" : "Link not configured"}</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">QR code</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  The QR code is hidden until a valid APK URL is configured. This prevents broken scan experiences.
                </p>
              </Card>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {[
            "1. Download the APK using the button above.",
            "2. If Android asks for permission to install an application from your browser, follow the device prompts.",
            "3. Open BizPro after installation.",
            "4. Create or join your business and start working."
          ].map((step) => (
            <Card key={step} className="p-5">
              <p className="text-sm leading-7 text-muted">{step}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Installation note</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            BizPro is currently configured for Android APK distribution. Google Play availability is not implied unless it is
            explicitly configured later.
          </p>
        </Card>
      </Container>
    </section>
  );
}
