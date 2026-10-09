import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/download", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, siteConfig.websiteUrl).toString(),
    lastModified: new Date(siteConfig.lastModified),
    changeFrequency,
    priority
  }));
}

