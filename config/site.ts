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

const defaultPlayStoreUrl = "https://play.google.com/store/apps/details?id=com.bizpro.vickins";

export const siteConfig = {
  siteName: "Dira OS",
  tagline: "Business OS",
  description:
    "Dira OS is an all-in-one business operating system for managing sales, inventory, finances, staff, branches and business operations from one simple platform.",
  websiteUrl: readPublicEnv("NEXT_PUBLIC_SITE_URL", "https://dira-os.vickinstechnologies.com"),
  playStoreUrl: readPublicEnv("NEXT_PUBLIC_PLAY_STORE_URL", defaultPlayStoreUrl),
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
    descriptor: "Business Operating System",
    positioning: "Sales. Inventory. Finance. Teams. Insights."
  }
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
