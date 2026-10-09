import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { getSoftwareApplicationSchema } from "@/lib/structured-data";
import { HomeClient } from "@/components/home-client";

export const metadata: Metadata = buildMetadata({
  title: "Dira OS | Business Management, POS & Inventory Software",
  description: "Manage sales, inventory, customers and business operations with Dira OS, an offline-first Android business management app for growing teams.",
  path: "/"
});

export default function HomePage() {
  return <><JsonLd data={getSoftwareApplicationSchema()} /><HomeClient /></>;
}
