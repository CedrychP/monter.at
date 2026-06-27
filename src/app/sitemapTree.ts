import { blogPosts } from "./blog/posts";
import { brandPages } from "./marken/brands";
import { brandDeviceCategories } from "./marken/devices";
import { klimaPages } from "./klimageraete/klimaPages";
import { servicePages } from "./leistungen/services";

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
    id: "leistungen",
    label: "Reparatur & Leistungen",
    href: "/#leistungen",
    description: "Haushaltsgeräte-Reparatur, Termin und Preise.",
    links: [
      { label: "Reparatur buchen", href: "/reparatur-buchen" },
      { label: "Preise & Pauschalen", href: "/preise" },
      { label: "Ersatzteile", href: "/ersatzteile" },
      { label: "Wartungsservice", href: "/wartungsservice" },
      { label: "Lieferung & Montage", href: "/lieferung-montage" },
      ...servicePages.map((service) => ({
        label: service.title,
        href: `/leistungen/${service.slug}`
      }))
    ]
  },
  {
    id: "marken",
    label: "Marken",
    href: "/#marken",
    description: "Markenoffene Reparatur — Geräte je Hersteller.",
    links: brandPages.map((brand) => ({
      label: brand.brand,
      href: `/marken/${brand.slug}`,
      children: brandDeviceCategories.map((device) => ({
        label: device.label,
        href: `/marken/${brand.slug}/${device.slug}`
      }))
    }))
  },
  {
    id: "garagentor",
    label: "Garagentore",
    href: "/garagentor-reparatur-wien",
    description: "Garagentor-Reparatur, Antrieb, Federn & Wartung.",
    links: [{ label: "Garagentor Reparatur Wien", href: "/garagentor-reparatur-wien" }]
  },
  {
    id: "klimageraete",
    label: "Klimageräte",
    href: "/klimageraete-reparatur-wien",
    description: "Klimagerät-Reparatur, Wartung, Kältemittel & Montage.",
    links: [
      { label: "Klimagerät Reparatur Wien", href: "/klimageraete-reparatur-wien" },
      ...klimaPages.map((page) => ({
        label: page.title,
        href: `/klimageraete/${page.slug}`
      }))
    ]
  },
  {
    id: "service",
    label: "Service & Extras",
    href: "/geraetekauf",
    description: "Gerätekauf, Förderungen, Beratung und Aktionen.",
    links: [
      { label: "Gerätekauf", href: "/geraetekauf" },
      { label: "Kaufberatung", href: "/kaufberatung" },
      { label: "Garantieverlängerung", href: "/garantieverlaengerung" },
      { label: "Altgeräteentsorgung", href: "/altgeraeteentsorgung" },
      { label: "Geräte-Retter-Prämie", href: "/geraete-retter-praemie" },
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
    description: "Über MONTER, Firmenkunden, Karriere & Kontakt.",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Firmenkunden", href: "/firmenkunden" },
      { label: "Karriere", href: "/karriere" },
      { label: "Kontakt", href: "/kontakt" },
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
      { label: "Barrierefreiheit", href: "/barrierefreiheit" }
    ]
  }
];

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

  return Array.from(routes);
}
