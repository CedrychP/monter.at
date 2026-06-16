import { blogPosts } from "./blog/posts";
import { brandPages } from "./marken/brands";
import { servicePages } from "./leistungen/services";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string;
};

export const popularSearches = [
  "Waschmaschine",
  "Geschirrspüler",
  "Bosch Reparatur",
  "Notdienst",
  "Preise",
  "Geräte-Retter-Prämie"
];

export function buildSearchIndex(): SearchEntry[] {
  const fromServices: SearchEntry[] = servicePages.map((service) => ({
    title: service.title,
    description: service.description,
    href: `/leistungen/${service.slug}`,
    category: "Leistung",
    keywords: `${service.title} ${service.description} ${service.category} reparatur`
  }));
  const fromBrands: SearchEntry[] = brandPages.map((brand) => ({
    title: `${brand.brand} Reparatur Wien`,
    description: brand.description,
    href: `/marken/${brand.slug}`,
    category: "Marke",
    keywords: `${brand.brand} marke reparatur ${brand.description}`
  }));
  const fromBlog: SearchEntry[] = blogPosts.map((post) => ({
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    category: "Blog",
    keywords: `${post.title} ${post.description} ${post.category}`
  }));
  const fromStatic: SearchEntry[] = [
    {
      title: "Preise & Pauschalen",
      description: "Anfahrt, Diagnose, Arbeitspauschale und Material — transparent.",
      href: "/preise",
      category: "Service",
      keywords: "preise pauschale anfahrt diagnose kosten"
    },
    {
      title: "Kontakt & Anfrage",
      description: "Telefonisch oder per Anfrageformular Termin abstimmen.",
      href: "/kontakt",
      category: "Service",
      keywords: "kontakt anfrage termin notdienst telefon"
    },
    {
      title: "Über MONTER Reparatur & Service",
      description: "Service-Auftritt der Tech Craft Consulting GmbH in Wien.",
      href: "/ueber-uns",
      category: "Unternehmen",
      keywords: "über uns unternehmen tcc tech craft"
    }
  ];
  return [...fromServices, ...fromBrands, ...fromBlog, ...fromStatic];
}

export function filterSearchResults(index: SearchEntry[], query: string, limit = 8): SearchEntry[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  const tokens = normalized.split(/\s+/).filter(Boolean);
  return index
    .map((entry) => {
      const haystack = `${entry.title} ${entry.keywords}`.toLowerCase();
      let score = 0;
      tokens.forEach((token) => {
        if (haystack.includes(token)) score += 1;
        if (entry.title.toLowerCase().includes(token)) score += 2;
      });
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => entry);
}
