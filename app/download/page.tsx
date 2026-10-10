import type { Metadata } from "next";
import { DownloadCenter } from "@/components/download/download-center";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Download Dira OS for Every Platform",
  description: "Find the verified Dira OS download for your device. Install the official Android release from Google Play or download the published APK.",
  path: "/download"
});

export default function DownloadPage() {
  return <DownloadCenter />;
}
