import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({ title, description, path = "/", noIndex = false }: PageMetadata): Metadata {
  const url = new URL(path, siteConfig.websiteUrl);

  return {
    title,
    description,
    alternates: {
      canonical: url.toString()
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: siteConfig.siteName,
      type: "website",
      images: [
        {
          url: new URL("/brand/social-card.svg", siteConfig.websiteUrl).toString(),
          width: 1200,
          height: 630,
          alt: `${siteConfig.siteName} social preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/brand/social-card.svg", siteConfig.websiteUrl).toString()]
    },
    robots: {
      index: !noIndex,
      follow: !noIndex
    }
  };
}
