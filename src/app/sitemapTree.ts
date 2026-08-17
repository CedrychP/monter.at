import { blogPosts } from "./blog/posts";
import { regionPages } from "./einsatzgebiete/regionPages";
import {
  getLocationsForRegion,
  locationHref,
  unenrichedLocationRoutes
} from "./einsatzgebiete/locationPages";
import { appliancePages } from "./haushaltsgeraete/appliancePages";
import { garagePages } from "./garagentore/garagePages";
import { klimaPages } from "./klimageraete/klimaPages";
import { isBrandDeviceEnriched } from "./marken/brandDeviceContent";
import { brandPages } from "./marken/brands";
import { brandDeviceCategories } from "./marken/devices";

export type SitemapLink = {
  label: string;
  href: string;
  children?: SitemapLink[];
};

export type SitemapGroup = {
  id: string;
  label: string;
  /** Repräsentative Hauptseite des Bereichs. */
  href: string;
  description: string;
  links: SitemapLink[];
};

export const sitemapHome: SitemapLink = { label: "Startseite", href: "/" };

export const sitemapGroups: SitemapGroup[] = [
  {
    id: "haushaltsgeraete",
    label: "Haushaltsgeräte",
    href: "/haushaltsgeraete",
    description: "Reparatur nach Gerät — Waschmaschine bis Fernseher.",
    links: [
      { label: "Haushaltsgeräte — Übersicht", href: "/haushaltsgeraete" },
      ...appliancePages.map((page) => ({
        label: page.title,
        href: `/haushaltsgeraete/${page.slug}`
      }))
    ]
  },
  {
    id: "garagentore",
    label: "Garagentore",
    href: "/garagentore",
    description: "Tore, Antriebe, Federn, Laufwerk und Wartung.",
    links: [
      { label: "Garagentore — Übersicht", href: "/garagentore" },
      ...garagePages.map((page) => ({
        label: page.title,
        href: `/garagentore/${page.slug}`
      }))
    ]
  },
  {
    id: "klimageraete",
    label: "Klimageräte",
    href: "/klimageraete",
    description: "Klimagerät-Reparatur, Wartung, Kältemittel & Montage.",
    links: [
      { label: "Klimageräte — Übersicht", href: "/klimageraete" },
      ...klimaPages.map((page) => ({
        label: page.title,
        href: `/klimageraete/${page.slug}`
      }))
    ]
  },
  {
    id: "marken",
    label: "Marken",
    href: "/marken",
    description: "Markenoffene Reparatur — Geräte je Hersteller.",
    links: [
      { label: "Marken — Übersicht", href: "/marken" },
      ...brandPages.map((brand) => ({
        label: brand.brand,
        href: `/marken/${brand.slug}`,
        children: brandDeviceCategories.map((device) => ({
          label: device.label,
          href: `/marken/${brand.slug}/${device.slug}`
        }))
      }))
    ]
  },
  {
    id: "einsatzgebiete",
    label: "Einsatzgebiete",
    href: "/einsatzgebiete",
    description: "Wo wir arbeiten — Kerngebiet und Techniker vor Ort.",
    links: [
      { label: "Einsatzgebiete — Übersicht", href: "/einsatzgebiete" },
      ...regionPages.map((region) => {
        const locations = getLocationsForRegion(region.slug);
        return {
          label: region.name,
          href: `/einsatzgebiete/${region.slug}`,
          ...(locations.length > 0
            ? {
                children: locations.map((location) => ({
                  label: location.name,
                  href: locationHref(location)
                }))
              }
            : {})
        };
      })
    ]
  },
  {
    id: "termin-preise",
    label: "Termin & Preise",
    href: "/reparatur-buchen",
    description: "Termin buchen, Preise, Ersatzteile und Montage.",
    links: [
      { label: "Reparatur buchen", href: "/reparatur-buchen" },
      { label: "Preise & Pauschalen", href: "/preise" },
      { label: "Ersatzteile", href: "/ersatzteile" },
      { label: "Wartungsservice", href: "/wartungsservice" },
      { label: "Lieferung & Montage", href: "/lieferung-montage" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    id: "service",
    label: "Service & Extras",
    href: "/kaufberatung",
    description: "Beratung, Förderungen, Entsorgung und Aktionen.",
    links: [
      { label: "Kaufberatung", href: "/kaufberatung" },
      { label: "Garantieverlängerung", href: "/garantieverlaengerung" },
      { label: "Altgeräteentsorgung", href: "/altgeraeteentsorgung" },
      { label: "Geräte-Retter-Prämie", href: "/geraete-retter-praemie" },
      { label: "Gerätekauf", href: "/geraetekauf" },
      { label: "MONTER GOLD", href: "/monter-gold" },
      { label: "Aktionskatalog", href: "/aktionskatalog" },
      { label: "Kurse", href: "/kurse" },
      { label: "Veranstaltungen", href: "/veranstaltungen" }
    ]
  },
  {
    id: "unternehmen",
    label: "Unternehmen",
    href: "/ueber-uns",
    description: "Über MONTER, Firmenkunden, Karriere & Suche.",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Firmenkunden", href: "/firmenkunden" },
      { label: "Karriere", href: "/karriere" },
      { label: "Suche", href: "/suche" }
    ]
  },
  {
    id: "wissen",
    label: "Blog & Wissen",
    href: "/blog",
    description: "Ratgeber, FAQ und Tipps rund um Reparaturen.",
    links: [
      { label: "Blog & News", href: "/blog" },
      { label: "Häufige Fragen (FAQ)", href: "/#faq" },
      ...blogPosts.map((post) => ({
        label: post.title,
        href: `/blog/${post.slug}`
      }))
    ]
  },
  {
    id: "rechtliches",
    label: "Rechtliches",
    href: "/impressum",
    description: "Impressum, Datenschutz und rechtliche Hinweise.",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/dsgvo" },
      { label: "AGB", href: "/agb" },
      { label: "Nutzungsbedingungen", href: "/nutzungsbedingungen" },
      { label: "Barrierefreiheit", href: "/barrierefreiheit" },
      { label: "Sitemap", href: "/sitemap" }
    ]
  }
];

/** Kombiseiten, die noch generischen Gerätetext tragen — auf noindex, also auch nicht in die XML-Sitemap. */
const unenrichedBrandDeviceRoutes = brandPages.flatMap((brand) =>
  brandDeviceCategories
    .filter((device) => !isBrandDeviceEnriched(brand.slug, device.slug))
    .map((device) => `/marken/${brand.slug}/${device.slug}`)
);

/** Regionen ohne geprüfte Partnerdaten — erreichbar, aber noch nicht im Index. */
const unenrichedRegionRoutes = regionPages
  .filter((region) => !region.enriched)
  .map((region) => `/einsatzgebiete/${region.slug}`);

/**
 * Seiten, die nicht in der XML-Sitemap für Suchmaschinen erscheinen sollen —
 * interne Suche, Platzhalterseiten vor dem Start und unfertige Kombiseiten.
 * Alle bleiben für Besucher erreichbar und in der Navigation verlinkt.
 */
export const SITEMAP_EXCLUDED_ROUTES = new Set<string>([
  "/suche",
  "/geraetekauf",
  "/monter-gold",
  "/kurse",
  "/veranstaltungen",
  "/aktionskatalog",
  ...unenrichedBrandDeviceRoutes,
  ...unenrichedRegionRoutes,
  ...unenrichedLocationRoutes
]);

/**
 * Flacht den Baum zu echten, internen Seiten-Routen ab (ohne #-Anker, ohne Externe).
 * Wird von der XML-Sitemap genutzt, damit Visual und Crawler-Sitemap synchron bleiben.
 */
export function getSitemapRoutes(): string[] {
  const routes = new Set<string>(["/"]);

  const collect = (link: SitemapLink) => {
    if (link.href.startsWith("/") && !link.href.includes("#")) {
      routes.add(link.href);
    }
    link.children?.forEach(collect);
  };

  for (const group of sitemapGroups) {
    if (group.href.startsWith("/") && !group.href.includes("#")) {
      routes.add(group.href);
    }
    group.links.forEach(collect);
  }

  return Array.from(routes)
    .filter((route) => !SITEMAP_EXCLUDED_ROUTES.has(route))
    .sort((a, b) => {
      if (a === "/") return -1;
      if (b === "/") return 1;
      return a.localeCompare(b, "de");
    });
}
