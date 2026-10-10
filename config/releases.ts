import { siteConfig } from "@/config/site";

export type PlatformId = "windows" | "macos" | "linux" | "android" | "ios" | "web";
export type PlatformStatus = "available" | "coming-soon" | "not-published";

export type DownloadArtifact = {
  id: string;
  label: string;
  format: string;
  architecture?: string;
  href: string;
  external?: boolean;
  verified: boolean;
  version?: string;
  size?: string;
  releaseDate?: string;
  minimumRequirements?: string;
  checksum?: string;
  signing?: string;
  description: string;
};

export type DownloadPlatform = {
  id: PlatformId;
  label: string;
  shortLabel: string;
  description: string;
  status: PlatformStatus;
  statusLabel: string;
  unavailableMessage?: string;
  artifacts: DownloadArtifact[];
};

export const latestRelease = {
  version: "1.0.0",
  date: "30 Sep 2026",
  platform: "Android",
  notes: ["Google Play release", "Direct APK available"],
  releaseNotesHref: ""
} as const;

const androidApkChecksum = "70A10EF1B0E05C5BCFEA1A1CB85CD6635A2398BC5C65C9621C4BCF443D7645A7";

export const downloadPlatforms: DownloadPlatform[] = [
  {
    id: "windows",
    label: "Windows",
    shortLabel: "Windows",
    description: "Desktop builds for Windows will appear here when an official installer is published.",
    status: "coming-soon",
    statusLabel: "No installer published",
    unavailableMessage: "There is no verified Windows .exe or .msi in the current release infrastructure. Windows 10/11 and CPU architecture support are therefore not claimed.",
    artifacts: []
  },
  {
    id: "macos",
    label: "macOS",
    shortLabel: "macOS",
    description: "Choose Apple Silicon or Intel once a signed macOS release is available.",
    status: "coming-soon",
    statusLabel: "No installer published",
    unavailableMessage: "There is no verified .dmg or .pkg in the current release infrastructure. Apple Silicon, Intel, and minimum macOS support are not yet published.",
    artifacts: []
  },
  {
    id: "linux",
    label: "Linux",
    shortLabel: "Linux",
    description: "Linux packages are not published in the current official release channel.",
    status: "not-published",
    statusLabel: "Not verified",
    unavailableMessage: "No .deb, .rpm, AppImage, or supported archive is available. Kali Linux compatibility has not been verified, so Dira OS should not be treated as supported there.",
    artifacts: []
  },
  {
    id: "android",
    label: "Android",
    shortLabel: "Android",
    description: "Install the official Android release from Google Play or use the published APK when direct installation is appropriate.",
    status: "available",
    statusLabel: "Available now",
    artifacts: [
      {
        id: "android-play",
        label: "Google Play",
        format: "Store listing",
        href: siteConfig.playStoreUrl,
        external: true,
        verified: true,
        version: latestRelease.version,
        releaseDate: latestRelease.date,
        minimumRequirements: siteConfig.minimumAndroidVersion,
        signing: "Distributed and signed through Google Play.",
        description: "Recommended for automatic updates and the standard Android installation flow."
      },
      {
        id: "android-apk",
        label: "Direct APK",
        format: ".apk",
        href: siteConfig.androidApkUrl,
        verified: true,
        version: latestRelease.version,
        size: "76.7 MB (73.2 MiB)",
        releaseDate: latestRelease.date,
        minimumRequirements: siteConfig.minimumAndroidVersion,
        checksum: androidApkChecksum,
        signing: "No separate signing metadata is published on this site; use Google Play when you want the store-managed path.",
        description: "A direct download from the official HTTPS site for devices where APK installation is appropriate."
      }
    ]
  },
  {
    id: "ios",
    label: "iOS / iPadOS",
    shortLabel: "iOS",
    description: "A native iPhone or iPad installer is not published in the current release infrastructure.",
    status: "coming-soon",
    statusLabel: "No app published",
    unavailableMessage: "No official App Store listing or generally installable IPA is configured. Do not install an iOS package from an unofficial source.",
    artifacts: []
  },
  {
    id: "web",
    label: "Browser / Web app",
    shortLabel: "Web app",
    description: "Use a production web app when an official sign-in URL is configured.",
    status: siteConfig.webAppUrl ? "available" : "not-published",
    statusLabel: siteConfig.webAppUrl ? "Open in browser" : "No app URL published",
    unavailableMessage: siteConfig.webAppUrl
      ? undefined
      : "This project has no verified production web-app URL or PWA manifest configured. The public website is a marketing site, not a published application destination.",
    artifacts: siteConfig.webAppUrl
      ? [
          {
            id: "web-app",
            label: "Open Dira OS Web App",
            format: "Browser",
            href: siteConfig.webAppUrl,
            external: true,
            verified: true,
            description: "Open the configured Dira OS application in your browser."
          }
        ]
      : []
  }
];

// Kept as a compact compatibility export for existing release consumers.
export const releases = [
  {
    platform: latestRelease.platform,
    version: latestRelease.version,
    size: "76.7 MB (73.2 MiB)",
    date: latestRelease.date,
    checksum: `SHA-256 ${androidApkChecksum}`,
    href: siteConfig.playStoreUrl,
    notes: [...latestRelease.notes]
  }
] as const;

export function isVerifiedArtifact(artifact: DownloadArtifact) {
  if (!artifact.verified || !artifact.href) return false;
  if (artifact.href.startsWith("/")) return !artifact.href.startsWith("//");

  try {
    return new URL(artifact.href).protocol === "https:";
  } catch {
    return false;
  }
}
