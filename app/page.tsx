import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeClient } from "@/components/home-client";

export const metadata: Metadata = buildMetadata({
  title: "Dira OS — Run your business as one system",
  description: "The offline-first business operating system for sales, operations, finance, customers, teams, branches and insights.",
  path: "/"
});

export default function HomePage() {
  return <HomeClient />;
}
