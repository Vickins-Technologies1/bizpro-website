export type DownloadLink = {
  href: string;
  external: boolean;
  available: boolean;
  label: string;
};

export const siteConfig = {
  siteName: "BizPro",
  tagline: "Business OS",
  description:
    "BizPro is an offline-first Business Operating System for managing sales, POS, inventory, finance, teams and everyday business operations.",
  websiteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizpro.example.com",
  apkUrl: process.env.NEXT_PUBLIC_ANDROID_APK_URL ?? "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  supportHours: process.env.NEXT_PUBLIC_SUPPORT_HOURS ?? "Mon-Fri, 9:00-17:00",
  productVersion: process.env.NEXT_PUBLIC_PRODUCT_VERSION ?? "Coming soon",
  minimumAndroidVersion: process.env.NEXT_PUBLIC_MIN_ANDROID_VERSION ?? "Android 8.0+",
  defaultCurrency: process.env.NEXT_PUBLIC_DEFAULT_CURRENCY ?? "KES",
  analyticsEndpoint: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ?? "",
  socialLinks: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""
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
      label: "Download BizPro"
    };
  }

  return {
    href: "/download",
    external: false,
    available: false,
    label: "Android download coming soon"
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
