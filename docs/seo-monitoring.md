# Dira OS SEO monitoring plan

## Initial verification checklist

After deploying with `NEXT_PUBLIC_SITE_URL=https://dira-os.vickinstechnologies.com`:

1. Open the canonical home page and confirm its status is 200.
2. Open `/robots.txt` and confirm it includes `Sitemap: https://dira-os.vickinstechnologies.com/sitemap.xml`.
3. Open `/sitemap.xml`, validate it as XML, and confirm that every `<loc>` uses HTTPS and the canonical hostname.
4. Inspect each public route for one unique `<title>`, one useful meta description, one canonical link, and one primary `h1`.
5. Confirm `/download/apk` returns 308 and ends at `/downloads/bizpro.apk`.
6. Confirm the Google Play link resolves to the verified Dira OS listing.
7. Run Lighthouse on mobile and desktop after deployment. Record LCP, INP, CLS, TTFB, accessibility, and the tested URL/date; do not compare results from different devices or throttling profiles as if they were the same measurement.

## Google Search Console

The domain owner must complete verification; no verification token is stored in this repository.

1. Add a Domain property for `vickinstechnologies.com` if DNS access is available, or add the URL-prefix property `https://dira-os.vickinstechnologies.com/`.
2. Complete the DNS, HTML file, HTML meta tag, or Analytics verification method supplied by Search Console.
3. Submit `https://dira-os.vickinstechnologies.com/sitemap.xml` under **Sitemaps**.
4. Use **URL inspection** for the home page and the main product pages, then request indexing after the canonical hostname is live.
5. Review **Pages** for excluded URLs, redirects, duplicate canonical selection, crawl errors, and server errors.
6. Review **Performance** for impressions, clicks, CTR, position, branded versus non-branded queries, and landing pages.
7. Review **Core Web Vitals** and compare field data over time. A new site may have insufficient field data initially.

## Bing Webmaster Tools

1. Add `https://dira-os.vickinstechnologies.com/` as a site.
2. Verify ownership through the method Bing provides, or import the verified Search Console property if the owner chooses that route.
3. Submit `https://dira-os.vickinstechnologies.com/sitemap.xml` under **Sitemaps**.
4. Use URL Inspection to check the homepage and the key feature, pricing, FAQ, and download pages.
5. Monitor indexed pages, crawl issues, search queries, clicks, impressions, and page experience reports.

## Monthly KPI record

Record the date, property, period, and source alongside each value:

- Indexed public pages and valid sitemap URLs
- Organic impressions, clicks, CTR, and average position
- Branded and non-branded query visibility
- Organic sessions and landing pages
- Crawl errors, redirect errors, and broken internal links
- Mobile and desktop LCP, INP, CLS, and TTFB
- Android download CTA clicks and completed Play Store visits, if analytics is configured

Organic rankings and traffic can take time to change. Do not report an improvement without a comparable baseline, the same measurement source, and a defined date range.
