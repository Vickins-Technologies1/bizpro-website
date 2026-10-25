import type { Metadata } from "next";
import { industryLandingPages } from "@/config/seo-landing-pages";
import { buildMetadata } from "@/lib/seo";
import { SeoLandingPageView } from "@/components/seo/seo-landing-page";

const page = industryLandingPages.find((entry) => entry.path === "/industries/retail")!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path
});

export default function Page() {
  return <SeoLandingPageView page={page} />;
}

