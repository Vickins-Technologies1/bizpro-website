import { siteConfig } from "@/config/site";

const absolute = (path: string) => new URL(path, siteConfig.websiteUrl).toString();

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.websiteUrl}/#organization`,
    name: siteConfig.companyName,
    url: siteConfig.companyUrl,
    logo: absolute("/brand/icon-512.png"),
    email: siteConfig.contactEmail || undefined,
    telephone: siteConfig.contactPhone || undefined,
    sameAs: [siteConfig.companyUrl, siteConfig.playStoreUrl, siteConfig.socialLinks.linkedin, siteConfig.socialLinks.twitter].filter(Boolean)
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.websiteUrl}/#website`,
    name: siteConfig.siteName,
    url: siteConfig.websiteUrl,
    description: siteConfig.description,
    inLanguage: "en-KE",
    publisher: { "@id": `${siteConfig.websiteUrl}/#organization` }
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.websiteUrl}/#software`,
    name: siteConfig.siteName,
    url: siteConfig.websiteUrl,
    description: siteConfig.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android",
    softwareVersion: siteConfig.productVersion,
    image: absolute("/brand/icon-512.png"),
    downloadUrl: siteConfig.playStoreUrl,
    featureList: [
      "Point of sale",
      "Inventory management",
      "Sales and expense tracking",
      "Business reporting",
      "Customer management",
      "Team management",
      "Offline-first workflows"
    ],
    publisher: { "@id": `${siteConfig.websiteUrl}/#organization` }
  };
}
