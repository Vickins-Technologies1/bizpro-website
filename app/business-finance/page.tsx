import type { Metadata } from "next";
import { featureLandingPages } from "@/config/seo-landing-pages";
import { buildMetadata } from "@/lib/seo";
import { SeoLandingPageView } from "@/components/seo/seo-landing-page";

const page = featureLandingPages.find((entry) => entry.path === "/business-finance")!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path
});

export default function Page() {
  return <SeoLandingPageView page={page} />;
}

