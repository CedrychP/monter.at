import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";
import { brandPages } from "./marken/brands";
import { brandDeviceCategories } from "./marken/devices";
import { servicePages } from "./leistungen/services";
import { siteConfig } from "./siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/kontakt",
    "/preise",
    "/ueber-uns",
    "/blog",
    "/impressum",
    "/dsgvo",
    "/agb",
    "/nutzungsbedingungen",
    "/barrierefreiheit"
  ];

  const serviceRoutes = servicePages.map((service) => `/leistungen/${service.slug}`);
  const brandRoutes = brandPages.map((brand) => `/marken/${brand.slug}`);
  const brandDeviceRoutes = brandPages.flatMap((brand) =>
    brandDeviceCategories.map((device) => `/marken/${brand.slug}/${device.slug}`)
  );
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...brandRoutes,
    ...brandDeviceRoutes,
    ...blogRoutes
  ].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/leistungen") || route.startsWith("/kontakt")
          ? 0.9
          : route.startsWith("/marken/") && route.split("/").length > 3
            ? 0.8
            : 0.7
  }));
}
