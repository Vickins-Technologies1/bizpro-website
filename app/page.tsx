import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeClient } from "@/components/home-client";

export const metadata: Metadata = buildMetadata({
  title: "Dira OS — Run your business as one system",
  description: "The offline-first business operating system for sales, inventory, finance, teams and branches across East Africa.",
  path: "/"
});

export default function HomePage() {
  return <HomeClient />;
}
