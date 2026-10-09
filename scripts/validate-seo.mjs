const baseUrl = (process.env.SEO_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const canonicalBase = (process.env.SEO_CANONICAL_URL || "https://dira-os.vickinstechnologies.com").replace(/\/$/, "");
const routes = ["/", "/features", "/industries", "/pricing", "/download", "/about", "/contact", "/faq", "/privacy", "/terms"];

const failures = [];
const pages = [];

function fail(message) {
  failures.push(message);
}

function oneMatch(value, expression) {
  return value.match(expression)?.[1]?.trim() || "";
}

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  const html = await response.text();
  const title = oneMatch(html, /<title>(.*?)<\/title>/i);
  const description = oneMatch(html, /<meta name="description" content="(.*?)"/i);
  const canonical = oneMatch(html, /<link rel="canonical" href="(.*?)"/i);
  const h1Count = [...html.matchAll(/<h1(?:\s|>)/gi)].length;
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];

  pages.push({ route, title, description, canonical });

  if (response.status !== 200) fail(`${route}: expected 200, received ${response.status}`);
  if (!title) fail(`${route}: missing title`);
  if (!description) fail(`${route}: missing meta description`);
  if (h1Count !== 1) fail(`${route}: expected one h1, found ${h1Count}`);
  if (canonical !== `${canonicalBase}${route === "/" ? "" : route}`) fail(`${route}: incorrect canonical ${canonical}`);

  for (const script of jsonLd) {
    try {
      JSON.parse(script[1]);
    } catch {
      fail(`${route}: invalid JSON-LD`);
    }
  }
}

if (new Set(pages.map((page) => page.title)).size !== pages.length) fail("duplicate page titles detected");
if (new Set(pages.map((page) => page.description)).size !== pages.length) fail("duplicate meta descriptions detected");
if (new Set(pages.map((page) => page.canonical)).size !== pages.length) fail("duplicate canonical URLs detected");

const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
const robots = await robotsResponse.text();
if (robotsResponse.status !== 200) fail(`robots.txt: expected 200, received ${robotsResponse.status}`);
if (!robots.includes(`Sitemap: ${canonicalBase}/sitemap.xml`)) fail("robots.txt: canonical sitemap missing");

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
const sitemap = await sitemapResponse.text();
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (sitemapResponse.status !== 200) fail(`sitemap.xml: expected 200, received ${sitemapResponse.status}`);
if (locations.length !== routes.length) fail(`sitemap.xml: expected ${routes.length} URLs, found ${locations.length}`);
for (const location of locations) {
  if (!location.startsWith(`${canonicalBase}/`) && location !== canonicalBase) fail(`sitemap.xml: non-canonical URL ${location}`);
}

const redirectResponse = await fetch(`${baseUrl}/download/apk`, { redirect: "manual" });
if (redirectResponse.status !== 308) fail(`/download/apk: expected 308, received ${redirectResponse.status}`);

if (failures.length) {
  console.error(failures.map((failure) => `FAIL ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`SEO checks passed for ${baseUrl}: ${routes.length} pages, robots.txt, sitemap.xml, JSON-LD, and redirect.`);
}
