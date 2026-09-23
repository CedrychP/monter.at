import { blogPosts } from "./blog/posts";
import { brandPages } from "./marken/brands";
import { appliancePages } from "./haushaltsgeraete/appliancePages";
import { garagePages } from "./garagentore/garagePages";
import { klimaPages } from "./klimageraete/klimaPages";
import { regionPages } from "./einsatzgebiete/regionPages";
import { getLocationPage, locationPages, locationHref } from "./einsatzgebiete/locationPages";

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
  const fromRegions: SearchEntry[] = regionPages.map((region) => ({
    title: `Einsatzgebiet ${region.name}`,
    description: region.short,
    href: `/einsatzgebiete/${region.slug}`,
    category: "Einsatzgebiet",
    keywords: `${region.name} einsatzgebiet anfahrt region bundesland ${region.cities
      .map((city) => `${city.plz} ${city.name}`)
      .join(" ")}`
  }));
  const fromLocations: SearchEntry[] = locationPages.map((location) => {
    const city = location.parentSlug
      ? getLocationPage(location.regionSlug, location.parentSlug)
      : undefined;
    const name = city ? `${city.name}-${location.name}` : location.name;
    return {
      title: `Reparatur ${name}`,
      description: location.short,
      href: locationHref(location),
      category: city
        ? `Stadtteil ${city.name}`
        : location.regionSlug === "wien"
          ? "Wiener Bezirk"
          : "Stadt",
      keywords: `${name} ${location.name} ${location.postalCodes.join(" ")} reparatur techniker vor ort ${location.short}`
    };
  });
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
      keywords: "haushaltsgeräte reparatur wien elektrogeräte reparaturdienst altgeräte"
    },
    {
      title: "Garagentore Wien",
      description: "Tore, Antriebe, Federn, Laufwerk und Wartung im Überblick.",
      href: "/garagentore",
      category: "Garagentore",
      keywords: "garagentore wien garagentor reparatur übersicht antrieb feder sektionaltor rolltor"
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
      description: "Bosch, Miele, Siemens, AEG, Bauknecht, Beko, Gorenje und viele weitere.",
      href: "/marken",
      category: "Marken",
      keywords: "marken hersteller reparatur bosch miele siemens aeg bauknecht beko gorenje"
    },
    {
      title: "Einsatzgebiete in Österreich",
      description: "Wien, Niederösterreich und Nordburgenland mit eigenem Team, Rest über Partner.",
      href: "/einsatzgebiete",
      category: "Einsatzgebiet",
      keywords: "einsatzgebiet einsatzgebiete region bundesland österreich anfahrt partner"
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
    },
    {
      title: "Geräteretterprämie Österreich",
      description: "50 % und max. 130 € auf die Reparatur — Ablauf und Einlösen.",
      href: "/geraete-retter-praemie",
      category: "Förderung",
      keywords: "geräteretterprämie geräteretterprämie österreich geräte-retter-prämie reparaturbonus förderung"
    },
    {
      title: "Lieferservice Großgeräte Wien",
      description: "Lieferung, Anschluss, Aufbau und Altgeräte-Mitnahme.",
      href: "/lieferung-montage",
      category: "Service",
      keywords: "lieferservice großgeräte anschluss aufbau lieferung montage altgerät trockner"
    }
  ];
  return [
    ...fromAppliances,
    ...fromGarage,
    ...fromKlima,
    ...fromBrands,
    ...fromRegions,
    ...fromLocations,
    ...fromBlog,
    ...fromStatic
  ];
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
