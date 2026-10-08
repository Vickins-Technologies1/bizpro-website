export type Release = { platform: string; version: string; size: string; date: string; checksum?: string; href: string; notes: string[] };
export const releases: Release[] = [
  { platform: "Android", version: "1.0.0", size: "24 MB", date: "30 Sep 2026", checksum: "Published by Google Play", href: "https://play.google.com/store/apps/details?id=com.bizpro.vickins", notes: ["Google Play release"] }
];
