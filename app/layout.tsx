import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteChrome } from "@/components/layout/site-chrome";
import { siteConfig } from "@/config/site";
import "@/app/globals.css";

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
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ],
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1"><SiteChrome>{children}</SiteChrome></main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
