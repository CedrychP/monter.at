/**
 * Crawlt alle internen Links ab der Startseite und meldet Status != 200.
 * Aufruf: node scripts/check-links.mjs http://localhost:3111
 */
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const seen = new Map();
const queue = ["/"];
const referrers = new Map();

function normalize(href) {
  if (!href) return null;
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return null;
  if (!href.startsWith("/")) return null;
  const [path] = href.split("#");
  return path === "" ? "/" : path.replace(/\/$/, "") || "/";
}

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;

  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  seen.set(path, response.status);

  if (response.status !== 200) continue;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) continue;

  const html = await response.text();
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const target = normalize(match[1]);
    if (!target || seen.has(target)) continue;
    if (!referrers.has(target)) referrers.set(target, path);
    queue.push(target);
  }
}

const broken = [...seen].filter(([, status]) => status !== 200 && status !== 301 && status !== 308);
const redirects = [...seen].filter(([, status]) => status === 301 || status === 308);

console.log(`Geprüfte interne Seiten: ${seen.size}`);
console.log(`Weiterleitungen: ${redirects.length}`);
for (const [path, status] of redirects) console.log(`  ${status}  ${path}`);

if (broken.length === 0) {
  console.log("Keine defekten internen Links gefunden.");
} else {
  console.log(`\nDEFEKT (${broken.length}):`);
  for (const [path, status] of broken) {
    console.log(`  ${status}  ${path}   (verlinkt von ${referrers.get(path) ?? "?"})`);
  }
  process.exitCode = 1;
}
