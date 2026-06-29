import type { MetadataRoute } from "next";
import { siteConfig } from "./siteConfig";
import { getSitemapRoutes } from "./sitemapTree";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function getSitemapPriority(route: string): number {
  if (route === "") return 1;

  if (
    route === "/kontakt" ||
    route === "/reparatur-buchen" ||
    route.startsWith("/leistungen/") ||
    route === "/garagentor-reparatur-wien" ||
    route === "/klimageraete-reparatur-wien" ||
    route.startsWith("/klimageraete/")
  ) {
    return 0.9;
  }

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
