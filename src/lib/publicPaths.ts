import { SITEMAP_EXCLUDED_ROUTES, getSitemapRoutes } from "../app/sitemapTree";
import { trustAnchorRewrites } from "./trustAnchors";

/** Alte Adressen, die per 301 weiterleiten und deshalb keine Markdown-404 sind. */
const LEGACY_EXACT = ["/leistungen", "/garagentor-reparatur-wien", "/klimageraete-reparatur-wien", "/opengraph-image"];

/** Dynamische Seiten und verschachtelte Weiterleitungen. Unbekannte Wurzelpfade fallen nicht darunter. */
const HTML_PREFIXES = [
  "/api/",
  "/blog/",
  "/haushaltsgeraete/",
  "/garagentore/",
  "/klimageraete/",
  "/marken/",
  "/einsatzgebiete/",
  "/leistungen/"
];

let knownPaths: Set<string> | null = null;

function knownHtmlPaths() {
  if (!knownPaths) {
    knownPaths = new Set<string>([
      ...getSitemapRoutes(),
      ...SITEMAP_EXCLUDED_ROUTES,
      ...trustAnchorRewrites.map((rewrite) => rewrite.source),
      ...LEGACY_EXACT
    ]);
  }
  return knownPaths;
}

export function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

/** True, wenn der Pfad HTML oder eine Weiterleitung ausliefert. Sonst ist er eine 404. */
export function shouldServeHtml(pathname: string) {
  const path = normalizePath(pathname);
  if (path === "/") return true;
  if (knownHtmlPaths().has(path)) return true;
  return HTML_PREFIXES.some((prefix) => path.startsWith(prefix));
}
