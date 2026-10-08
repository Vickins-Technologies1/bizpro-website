export type Release = { platform: string; version: string; size: string; date: string; checksum?: string; href: string; notes: string[] };
export const releases: Release[] = [
  { platform: "Android", version: "1.0.0", size: "73.2 MB", date: "30 Sep 2026", checksum: "SHA-256 70A10EF1B0E05C5BCFEA1A1CB85CD6635A2398BC5C65C9621C4BCF443D7645A7", href: "https://play.google.com/store/apps/details?id=com.bizpro.vickins", notes: ["Google Play release", "Direct APK available"] }
];
