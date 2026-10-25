# Dira OS SEO audit and implementation

Audit date: 25 October 2026

Canonical target: `https://dira-os.vickinstechnologies.com`

## Scope

The audit covered the Next.js App Router, public routes, metadata, canonical URLs, robots and sitemap generation, structured data, Google Play discovery, public assets, redirects, headings, navigation, accessibility-related semantics, and the production response headers available from the deployed domain.

The verified Google Play listing is `https://play.google.com/store/apps/details?id=com.bizpro.vickins`. Its public description confirms Dira OS capabilities including POS, inventory, finance, reporting, customer and team management, and offline-first workflows. The website copy and structured data use those verified capabilities without adding ratings, reviews, customer counts, awards, or other unsupported claims.

## Findings and fixes

| Severity | Finding | Resolution |
| --- | --- | --- |
| Critical | Production `robots.txt` and sitemap URLs still advertised the legacy `bizpro.vickinstechnologies.com` hostname. | Canonical metadata, robots and sitemap URLs now use the fixed production URL `https://dira-os.vickinstechnologies.com`, ignoring stale `NEXT_PUBLIC_SITE_URL` overrides. Deploy this build and confirm the live output. |
| High | The sitemap contained only the broad feature and industry overviews. | Added four product workflow pages and four industry pages to the canonical sitemap. The sitemap omits `lastmod` because reliable per-page content modification dates are not maintained. |
| High | `robots.txt` allowed all paths and did not identify common private namespaces. | Added explicit disallows for `/api/`, `/admin/`, `/app/`, `/dashboard/`, `/login`, `/preview/`, and `/test/`, while keeping public assets crawlable and publishing the canonical sitemap URL. |
| High | The `/download/apk` alias returned a temporary 307 redirect. | Changed the alias to a permanent 308 redirect to the static APK. The redirect remains outside the sitemap. |
| High | No site-wide Organization or WebSite JSON-LD existed; SoftwareApplication data was also absent. | Added one centralized Organization and WebSite graph in the root layout and one verified SoftwareApplication graph on the homepage. FAQPage JSON-LD is retained only on the FAQ page. |
| Medium | Social metadata pointed to a square app logo while declaring 1200×630 dimensions. | Open Graph and X metadata now use the existing branded 1200×630 `public/brand/social-card.svg` asset. |
| Medium | Several page titles and descriptions were generic and did not distinguish search intent. | Added unique, capability-accurate metadata for all public pages, including POS, inventory, offline, Android, pricing, industry, support, and legal intent. |
| Medium | Privacy and Terms pages rendered their main heading as an `h2`. | Added an explicit heading level option and changed those pages to a single primary `h1`. |
| Low | The root environment example used a placeholder domain and omitted the Play Store variable. | Updated `.env.example` with the canonical hostname, verified Play URL, public support contacts, and current release. |
| Low | The site did not set a few safe response hardening headers. | Disabled the framework signature and added `nosniff`, strict-origin referrer policy, and a restrictive permissions policy. |

## Public route inventory

Indexable public pages are:

`/`, `/features`, `/industries`, `/pricing`, `/download`, `/about`, `/contact`, `/faq`, `/privacy`, `/terms`, `/pos-software`, `/inventory-management`, `/business-finance`, `/offline-business-software`, `/industries/retail`, `/industries/restaurants`, `/industries/beauty`, `/industries/professional-services`

The `/download/apk` endpoint is a redirect and is intentionally excluded from the sitemap. Private application namespaces are blocked in `robots.txt`, but authentication and authorization must still be enforced by the application if those routes are introduced.

## Keyword and intent strategy

The primary themes are business management software, POS and sales workflows, inventory and stock management, financial visibility, and offline-first Android business software. Kenya is represented naturally through the verified publisher and currency context rather than repeated geographic landing pages. No near-duplicate location pages or keyword-stuffed copy were added.

## Measurement status

The local production build completed successfully. The local SEO checker returned 200 for all 18 public pages, validated unique titles/descriptions and canonicals, checked same-origin links, parsed the JSON-LD blocks, and verified the sitemap, robots output and both redirects. The sitemap was also parsed as XML. No Lighthouse, PageSpeed Insights, CrUX, Search Console, or Bing Webmaster data was available in the workspace, so no Core Web Vitals or ranking improvement is claimed.

## Remaining deployment action

The live domain response identified Vercel on 25 October 2026. Before these source changes are deployed, the public homepage still returns a canonical pointing at `https://bizpro.vickinstechnologies.com`, and live `robots.txt`/`sitemap.xml` still advertise that legacy host. Deploy the updated build, then verify that every canonical, Open Graph URL, robots sitemap URL, and sitemap `<loc>` uses the Dira OS hostname and that requests to the old hostname return a permanent redirect. Search Console verification is supported with a server-side `GOOGLE_SITE_VERIFICATION` environment value containing only the token provided by Google. Do not set a token until the property is created.

The exact production sitemap URL is `https://dira-os.vickinstechnologies.com/sitemap.xml`. Submit it after Search Console property verification. See [docs/seo-monitoring.md](seo-monitoring.md) for the steps.
