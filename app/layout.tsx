import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { GlobalBackgroundSlideshow } from "@/components/layout/global-background-slideshow";
import { DownloadProvider } from "@/components/download/download-context";
import { SiteChrome } from "@/components/layout/site-chrome";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";
import "@/app/globals.css";

const displayFont = localFont({ src: "../public/fonts/sora-latin.woff2", variable: "--font-display", weight: "400 700", display: "swap" });
const bodyFont = localFont({ src: "../public/fonts/dm-sans-latin.woff2", variable: "--font-body", weight: "400 700", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: "Dira OS — Business Operating System for Modern Businesses",
    template: "%s"
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.siteName }],
  creator: siteConfig.siteName,
  publisher: siteConfig.siteName,
  openGraph: {
    siteName: siteConfig.siteName,
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
  alternates: { canonical: siteConfig.websiteUrl },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/brand/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#07111a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/backgrounds/analytics-review.webp" />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <GlobalBackgroundSlideshow />
        <DownloadProvider>
          <JsonLd data={getOrganizationSchema()} />
          <JsonLd data={getWebsiteSchema()} />
          <div className="site-content"><SiteChrome>{children}</SiteChrome></div>
        </DownloadProvider>
      </body>
    </html>
  );
}
