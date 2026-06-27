import type { MetadataRoute } from "next";
import { siteConfig } from "./siteConfig";
import { getSitemapRoutes } from "./sitemapTree";

export default function sitemap(): MetadataRoute.Sitemap {
  // Routen kommen aus dem zentralen Seitenbaum (sitemapTree.ts) — dadurch bleiben
  // die visuelle Sitemap (/sitemap) und die XML-Sitemap immer synchron.
  const routes = getSitemapRoutes().map((route) => (route === "/" ? "" : route));

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/leistungen") || route === "/kontakt" || route === "/reparatur-buchen"
          ? 0.9
          : route.startsWith("/marken/") && route.split("/").length > 3
            ? 0.8
            : 0.7
  }));
}
