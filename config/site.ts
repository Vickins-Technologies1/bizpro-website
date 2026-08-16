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

export const siteConfig = {
  siteName: "BizPro",
  tagline: "Business OS",
  description:
    "BizPro is an offline-first Business Operating System for managing sales, POS, inventory, finance, teams and everyday business operations.",
  websiteUrl: readPublicEnv("NEXT_PUBLIC_SITE_URL", "https://bizpro.vickinstechnologies.com"),
  apkUrl: readPublicEnv("NEXT_PUBLIC_ANDROID_APK_URL", ""),
  contactEmail: readPublicEnv("NEXT_PUBLIC_CONTACT_EMAIL", ""),
  contactPhone: readPublicEnv("NEXT_PUBLIC_CONTACT_PHONE", ""),
  whatsappUrl: readPublicEnv("NEXT_PUBLIC_WHATSAPP_URL", ""),
  supportHours: readPublicEnv("NEXT_PUBLIC_SUPPORT_HOURS", "Mon-Fri, 9:00-17:00"),
  productVersion: readPublicEnv("NEXT_PUBLIC_PRODUCT_VERSION", "Current release"),
  minimumAndroidVersion: readPublicEnv("NEXT_PUBLIC_MIN_ANDROID_VERSION", "Android 8.0+"),
  defaultCurrency: readPublicEnv("NEXT_PUBLIC_DEFAULT_CURRENCY", "KES"),
  analyticsEndpoint: readPublicEnv("NEXT_PUBLIC_ANALYTICS_ENDPOINT", ""),
  socialLinks: {
    twitter: readPublicEnv("NEXT_PUBLIC_TWITTER_URL", ""),
    linkedin: readPublicEnv("NEXT_PUBLIC_LINKEDIN_URL", "")
  },
  brand: {
    descriptor: "Business OS",
    positioning: "Sell. Manage. Grow."
  }
} as const;

export function getDownloadLink(): DownloadLink {
  if (siteConfig.apkUrl) {
    return {
      href: siteConfig.apkUrl,
      external: true,
      available: true,
      label: "Download APK"
    };
  }

  return {
    href: "/download",
    external: false,
    available: false,
    label: "Download BizPro"
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
