import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/app/", "/dashboard/", "/login", "/preview/", "/test/"]
    },
    sitemap: new URL("/sitemap.xml", siteConfig.websiteUrl).toString(),
    host: siteConfig.websiteUrl
  };
}

