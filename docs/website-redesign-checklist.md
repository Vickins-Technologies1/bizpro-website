# Dira OS website redesign route checklist

This inventory records the public web surface covered by the shared redesign. The root layout supplies the permanent ink/blue/cyan visual system, optimized Sora and DM Sans fonts, the persistent seven-image background slideshow, and shared navigation and footer. Existing page copy, links, SEO metadata, structured data, and download/contact behavior remain in their route components.

## Indexable website pages

| Route | Page | Redesign coverage |
| --- | --- | --- |
| `/` | Home | New mobile-first product hero and phone preview; existing product, feature, industry, insight, pricing, FAQ, and download sections retained |
| `/about` | About | Shared theme, slideshow, navigation, footer |
| `/business-finance` | Business finance | Shared theme, slideshow, navigation, footer |
| `/contact` | Contact | Shared theme, slideshow, navigation, footer; contact form endpoint retained |
| `/download` | Download center | Shared theme, slideshow, navigation, footer; platform downloads retained |
| `/faq` | FAQ | Shared theme, slideshow, navigation, footer |
| `/features` | Features | Shared theme, slideshow, navigation, footer |
| `/industries` | Industries | Shared theme, slideshow, navigation, footer |
| `/industries/beauty` | Beauty industry | Shared theme, slideshow, navigation, footer |
| `/industries/professional-services` | Professional services industry | Shared theme, slideshow, navigation, footer |
| `/industries/restaurants` | Restaurants industry | Shared theme, slideshow, navigation, footer |
| `/industries/retail` | Retail industry | Shared theme, slideshow, navigation, footer |
| `/inventory-management` | Inventory management | Shared theme, slideshow, navigation, footer |
| `/offline-business-software` | Offline business software | Shared theme, slideshow, navigation, footer |
| `/pos-software` | POS software | Shared theme, slideshow, navigation, footer |
| `/pricing` | Pricing | Shared theme, slideshow, navigation, footer |
| `/privacy` | Privacy policy | Shared theme, slideshow, navigation, footer |
| `/terms` | Terms of service | Shared theme, slideshow, navigation, footer |

## Supporting endpoints and assets

- `POST /api/contact` remains the contact form handler.
- `/download/apk` remains the existing redirect to the Android package.
- `/robots.txt` and `/sitemap.xml` remain generated SEO endpoints.
- `/downloads/dira-os-setup-0.1.0.exe` and the Android package remain on the existing download path.
- `/icon.svg` and the existing brand favicon assets remain available.

## Scope note

The web app contains no login, registration, onboarding, account dashboard, or admin page routes. Those screens are not part of this public marketing-site repository. Its existing contact API is not an account or dashboard UI.
