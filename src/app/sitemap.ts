import type { MetadataRoute } from "next";
import { siteConfig } from "./siteConfig";
import { getSitemapRoutes } from "./sitemapTree";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const HUB_ROUTES = new Set(["/haushaltsgeraete", "/garagentore", "/klimageraete", "/marken"]);

function getSitemapPriority(route: string): number {
  if (route === "") return 1;

  // Kategorie-Hubs sind einen Klick von der Startseite entfernt und tragen die Struktur.
  if (HUB_ROUTES.has(route)) return 0.9;

  if (
    route === "/kontakt" ||
    route === "/reparatur-buchen" ||
    route.startsWith("/haushaltsgeraete/") ||
    route.startsWith("/garagentore/") ||
    route.startsWith("/klimageraete/")
  ) {
    return 0.9;
  }

  // Einsatzgebiete stützen die Regionalsuche, bleiben aber unter den Produkt-Hubs.
  // Ortsseiten liegen eine Stufe darunter: sie tragen die lokale Longtail-Suche.
  if (route === "/einsatzgebiete") return 0.8;
  if (route.split("/").length > 3 && route.startsWith("/einsatzgebiete/")) return 0.6;
  if (route.startsWith("/einsatzgebiete/")) return 0.7;

  if (
    route === "/preise" ||
    route === "/blog" ||
    route.startsWith("/blog/") ||
    route.startsWith("/marken/")
  ) {
    return 0.8;
  }

  if (
    route === "/impressum" ||
    route === "/dsgvo" ||
    route === "/agb" ||
    route === "/nutzungsbedingungen" ||
    route === "/barrierefreiheit"
  ) {
    return 0.3;
  }

  return 0.7;
}

function getChangeFrequency(route: string): ChangeFrequency {
  if (route === "") return "weekly";
  if (route.startsWith("/blog")) return "monthly";
  if (
    route === "/impressum" ||
    route === "/dsgvo" ||
    route === "/agb" ||
    route === "/nutzungsbedingungen" ||
    route === "/barrierefreiheit"
  ) {
    return "yearly";
  }
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Routen kommen aus dem zentralen Seitenbaum (sitemapTree.ts) — dadurch bleiben
  // die visuelle Sitemap (/sitemap) und die XML-Sitemap immer synchron.
  const routes = getSitemapRoutes().map((route) => (route === "/" ? "" : route));

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    changeFrequency: getChangeFrequency(route),
    priority: getSitemapPriority(route)
  }));
}
