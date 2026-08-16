import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = ["", "/features", "/industries", "/pricing", "/download", "/about", "/contact", "/faq", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route || "/", siteConfig.websiteUrl).toString(),
    lastModified: new Date()
  }));
}

