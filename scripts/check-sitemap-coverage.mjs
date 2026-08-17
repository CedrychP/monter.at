/**
 * Vergleicht gecrawlte Seiten mit der XML-Sitemap.
 * Meldet indexierbare Seiten, die in der Sitemap fehlen.
 * Aufruf: node scripts/check-sitemap-coverage.mjs http://localhost:3111
 */
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const sitemapXml = await fetch(`${base}/sitemap.xml`).then((r) => r.text());
const sitemapPaths = new Set(
  [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    const path = new URL(m[1]).pathname.replace(/\/$/, "");
    return path === "" ? "/" : path;
  })
);

const seen = new Set();
const queue = ["/"];
const noindex = [];
const missing = [];

function normalize(href) {
  if (!href || /^(https?:|mailto:|tel:|#)/i.test(href) || !href.startsWith("/")) return null;
  const [path] = href.split("#");
  return path === "" ? "/" : path.replace(/\/$/, "") || "/";
}

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);

  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  if (response.status !== 200) continue;
  if (!(response.headers.get("content-type") ?? "").includes("text/html")) continue;

  const html = await response.text();
  const isNoindex = /name="robots" content="noindex/.test(html);

  if (isNoindex) noindex.push(path);
  else if (!sitemapPaths.has(path)) missing.push(path);

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const target = normalize(match[1]);
    if (target && !seen.has(target)) queue.push(target);
  }
}

console.log(`Gecrawlte Seiten: ${seen.size}`);
console.log(`Sitemap-Einträge: ${sitemapPaths.size}`);
console.log(`Bewusst auf noindex: ${noindex.length}`);

const orphans = [...sitemapPaths].filter((path) => !seen.has(path));
if (orphans.length) console.log(`\nIn Sitemap, aber nicht intern verlinkt (${orphans.length}):\n  ${orphans.join("\n  ")}`);

if (missing.length === 0) {
  console.log("\nAlle indexierbaren Seiten stehen in der Sitemap.");
} else {
  console.log(`\nFEHLT in Sitemap, obwohl indexierbar (${missing.length}):\n  ${missing.join("\n  ")}`);
  process.exitCode = 1;
}
