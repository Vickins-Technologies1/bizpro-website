export type DownloadLink = {
  href: string;
  external: boolean;
  available: boolean;
  label: string;
};

function readPublicEnv(name: string, fallback: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : fallback;
}

const defaultSiteUrl = "https://dira-os.vickinstechnologies.com";
const defaultPlayStoreUrl = "https://play.google.com/store/apps/details?id=com.bizpro.vickins";

function readPublicUrl(name: string, fallback: string) {
  const value = readPublicEnv(name, fallback);

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString().replace(/\/$/, "") : fallback;
  } catch {
    return fallback;
  }
}

function readDownloadUrl(name: string, fallback: string) {
  const value = readPublicEnv(name, fallback);

  if (value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : fallback;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  siteName: "Dira OS",
  tagline: "Business OS",
  companyName: "Vickins Technologies Inc.",
  companyUrl: "https://www.vickinstechnologies.com",
  description:
    "Dira OS is an offline-first business operating system for point of sale, inventory, finance, reporting, customers and teams.",
  websiteUrl: readPublicUrl("NEXT_PUBLIC_SITE_URL", defaultSiteUrl),
  playStoreUrl: readDownloadUrl("NEXT_PUBLIC_PLAY_STORE_URL", defaultPlayStoreUrl),
  androidApkUrl: readDownloadUrl("NEXT_PUBLIC_ANDROID_APK_URL", "/downloads/bizpro.apk"),
  webAppUrl: readDownloadUrl("NEXT_PUBLIC_WEB_APP_URL", ""),
  contactEmail: readPublicEnv("NEXT_PUBLIC_CONTACT_EMAIL", "vickinstechnologies@gmail.com"),
  contactPhone: readPublicEnv("NEXT_PUBLIC_CONTACT_PHONE", "+254794501005"),
  whatsappUrl: readPublicEnv("NEXT_PUBLIC_WHATSAPP_URL", ""),
  supportHours: readPublicEnv("NEXT_PUBLIC_SUPPORT_HOURS", "Mon-Fri, 9:00-17:00"),
  productVersion: readPublicEnv("NEXT_PUBLIC_PRODUCT_VERSION", "1.0.0"),
  minimumAndroidVersion: readPublicEnv("NEXT_PUBLIC_MIN_ANDROID_VERSION", "Android 8.0+"),
  defaultCurrency: readPublicEnv("NEXT_PUBLIC_DEFAULT_CURRENCY", "KES"),
  analyticsEndpoint: readPublicEnv("NEXT_PUBLIC_ANALYTICS_ENDPOINT", ""),
  socialLinks: {
    twitter: readPublicEnv("NEXT_PUBLIC_TWITTER_URL", ""),
    linkedin: readPublicEnv("NEXT_PUBLIC_LINKEDIN_URL", "")
  },
  brand: {
    descriptor: "Business Operating System",
    positioning: "Operations. Finance. Customers. Teams. Insights."
  },
  lastModified: "2026-10-10"
} as const;

export function getDownloadLink(): DownloadLink {
  const isExternal = /^https?:\/\//i.test(siteConfig.playStoreUrl);

  if (siteConfig.playStoreUrl) {
    return {
      href: siteConfig.playStoreUrl,
      external: isExternal,
      available: true,
      label: "Get it on Google Play"
    };
  }

  return {
    href: defaultPlayStoreUrl,
    external: false,
    available: true,
    label: "Get it on Google Play"
  };
}

export function getMailtoUrl(subject: string, body: string) {
  if (!siteConfig.contactEmail) {
    return "";
  }

  const params = new URLSearchParams({
    subject,
    body
  });

  return `mailto:${siteConfig.contactEmail}?${params.toString()}`;
}
