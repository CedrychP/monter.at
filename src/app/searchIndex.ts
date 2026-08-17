import { blogPosts } from "./blog/posts";
import { brandPages } from "./marken/brands";
import { appliancePages } from "./haushaltsgeraete/appliancePages";
import { garagePages } from "./garagentore/garagePages";
import { klimaPages } from "./klimageraete/klimaPages";

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
  const fromAppliances: SearchEntry[] = appliancePages.map((service) => ({
    title: service.title,
    description: service.description,
    href: `/haushaltsgeraete/${service.slug}`,
    category: "Haushaltsgeräte",
    keywords: `${service.title} ${service.description} ${service.category} reparatur`
  }));
  const fromGarage: SearchEntry[] = garagePages.map((page) => ({
    title: page.title,
    description: page.description,
    href: `/garagentore/${page.slug}`,
    category: "Garagentore",
    keywords: `${page.title} ${page.description} ${page.category} garagentor reparatur`
  }));
  const fromKlima: SearchEntry[] = klimaPages.map((page) => ({
    title: page.title,
    description: page.description,
    href: `/klimageraete/${page.slug}`,
    category: "Klimageräte",
    keywords: `${page.title} ${page.description} ${page.category} klimaanlage reparatur`
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
      title: "Haushaltsgeräte Reparatur Wien",
      description: "Übersicht aller Gerätearten — Waschmaschine bis Fernseher.",
      href: "/haushaltsgeraete",
      category: "Haushaltsgeräte",
      keywords: "haushaltsgeräte reparatur übersicht geräte waschmaschine backofen"
    },
    {
      title: "Garagentor Reparatur Wien",
      description: "Tore, Antriebe, Federn, Laufwerk und Wartung im Überblick.",
      href: "/garagentore",
      category: "Garagentore",
      keywords: "garagentor reparatur übersicht antrieb feder sektionaltor rolltor"
    },
    {
      title: "Klimagerät Reparatur Wien",
      description: "Split, Multi-Split, Monoblock, Wartung und Montage im Überblick.",
      href: "/klimageraete",
      category: "Klimageräte",
      keywords: "klimagerät klimaanlage reparatur übersicht split wartung montage"
    },
    {
      title: "Marken — Reparatur nach Hersteller",
      description: "Bosch, Miele, Siemens, AEG, Beko, Gorenje und viele weitere.",
      href: "/marken",
      category: "Marken",
      keywords: "marken hersteller reparatur bosch miele siemens aeg beko gorenje"
    },
    {
      title: "Preise & Pauschalen",
      description: "Anfahrt, Diagnose, Reparatur und Material — transparent.",
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
  return [...fromAppliances, ...fromGarage, ...fromKlima, ...fromBrands, ...fromBlog, ...fromStatic];
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
