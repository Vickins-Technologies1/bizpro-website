import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import Script from "next/script";
import { GlobalBackgroundSlideshow } from "@/components/layout/global-background-slideshow";
import { DownloadProvider } from "@/components/download/download-context";
import { Navbar } from "@/components/layout/navbar";
import { SiteChrome } from "@/components/layout/site-chrome";
import { Preloader } from "@/components/ui/preloader";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";
import "@/app/globals.css";
import "@/app/themes.css";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#07111a" }
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="dira-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem("dira-os-theme"); const system = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; const theme = saved === "light" || saved === "dark" ? saved : system; document.documentElement.dataset.theme = theme; document.documentElement.style.colorScheme = theme; } catch { document.documentElement.dataset.theme = "dark"; document.documentElement.style.colorScheme = "dark"; } })();`
          }}
        />
        <link rel="preload" as="image" href="/backgrounds/analytics-review.webp" />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <ThemeProvider>
          <GlobalBackgroundSlideshow />
          <DownloadProvider>
            <JsonLd data={getOrganizationSchema()} />
            <JsonLd data={getWebsiteSchema()} />
            <Preloader />
            <Navbar />
            <div className="site-content"><SiteChrome>{children}</SiteChrome></div>
          </DownloadProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
