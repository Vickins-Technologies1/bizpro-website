export type Release = { platform: string; version: string; size: string; date: string; checksum: string; href: string; notes: string[] };
export const releases: Release[] = [
  { platform: "Windows", version: "1.0.0", size: "86 MB", date: "30 Sep 2026", checksum: "PLACEHOLDER-WINDOWS-SHA256", href: "/downloads/DiraOS-Setup-1.0.0.exe", notes: ["Initial desktop release", "Offline sales and inventory"] },
  { platform: "macOS", version: "1.0.0", size: "92 MB", date: "30 Sep 2026", checksum: "PLACEHOLDER-MACOS-SHA256", href: "/downloads/DiraOS-1.0.0.dmg", notes: ["Initial desktop release"] },
  { platform: "Linux", version: "1.0.0", size: "88 MB", date: "30 Sep 2026", checksum: "PLACEHOLDER-LINUX-SHA256", href: "/downloads/DiraOS-1.0.0.AppImage", notes: ["AppImage and deb packages"] },
  { platform: "Android", version: "1.0.0", size: "24 MB", date: "30 Sep 2026", checksum: "Published by Google Play", href: "https://play.google.com/store/apps/details?id=com.bizpro.vickins", notes: ["M-Pesa-ready POS"] },
  { platform: "iOS", version: "—", size: "—", date: "Coming soon", checksum: "—", href: "#", notes: ["iOS app is in preparation"] }
];
