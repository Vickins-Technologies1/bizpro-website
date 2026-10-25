import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { getSoftwareApplicationSchema } from "@/lib/structured-data";
import { HomeClient } from "@/components/home-client";

export const metadata: Metadata = buildMetadata({
  title: "Dira OS | Business Management & POS Software",
  description: "Manage sales, inventory, expenses, finances and teams with Dira OS business software. Work offline, sync when connected and keep your business in one platform.",
  path: "/"
});

export default function HomePage() {
  return <><JsonLd data={getSoftwareApplicationSchema()} /><HomeClient /></>;
}
