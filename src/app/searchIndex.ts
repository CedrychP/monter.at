import { blogPosts } from "./blog/posts";
import { isBrandDeviceEnriched } from "./marken/brandDeviceContent";
import { brandPages } from "./marken/brands";
import { brandDeviceCategories } from "./marken/devices";
import { appliancePages } from "./haushaltsgeraete/appliancePages";
import { applianceProblemPages } from "./haushaltsgeraete/applianceProblems";
import { applianceHref, brandDeviceHref, brandHref, garageHref, klimaHref } from "./serviceHrefs";
import { allGaragePages } from "./garagentore/garagePages";
import { allKlimaPages } from "./klimageraete/klimaPages";
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
  const fromAppliances: SearchEntry[] = [
    ...applianceProblemPages.map((service) => ({
      title: service.title,
      description: service.description,
      href: applianceHref(service.slug),
      category: "Haushaltsgeräte",
      keywords: `${service.title} ${service.description} ${service.category} fehlercode reparatur`
    })),
    ...appliancePages.map((service) => ({
      title: service.title,
      description: service.description,
      href: applianceHref(service.slug),
      category: "Haushaltsgeräte",
      keywords: `${service.title} ${service.description} ${service.category} reparatur`
    }))
  ];
  const fromGarage: SearchEntry[] = allGaragePages.map((page) => ({
    title: page.title,
    description: page.description,
    href: garageHref(page.slug),
    category: "Garagentore",
    keywords: `${page.title} ${page.description} ${page.category} garagentor reparatur`
  }));
  const fromKlima: SearchEntry[] = allKlimaPages.map((page) => ({
    title: page.title,
    description: page.description,
    href: klimaHref(page.slug),
    category: "Klimageräte",
    keywords: `${page.title} ${page.description} ${page.category} klimaanlage reparatur`
  }));
  const fromBrands: SearchEntry[] = [
    ...brandPages.map((brand) => ({
      title: `${brand.brand} Reparatur Wien`,
      description: brand.description,
      href: brandHref(brand.slug),
      category: "Marke",
      keywords: `${brand.brand} marke reparatur ${brand.description}`
    })),
    ...brandPages.flatMap((brand) =>
      brandDeviceCategories
        .filter((device) => isBrandDeviceEnriched(brand.slug, device.slug))
        .map((device) => ({
          title: `${brand.brand} ${device.label} Reparatur Wien`,
          description: device.short,
          href: brandDeviceHref(brand.slug, device.slug),
          category: "Marke",
          keywords: `${brand.brand} ${device.label} ${device.plural} reparatur`
        }))
    )
  ];
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
      keywords: "einsatzgebiet einsatzgebiete wien niederösterreich linz anfahrt bezirk"
    },
    {
      title: "Preise & Pauschalen",
      description: "Anfahrt, Diagnose, Reparatur, Lieferung und Montage — transparent.",
      href: "/preise",
      category: "Service",
      keywords: "preise pauschale anfahrt diagnose kosten lieferung montage komfortplus"
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
      description: "Österreichischer Reparaturbetrieb, angefangen in Wien: Haushaltsgeräte, Garagentore und Klima.",
      href: "/ueber-uns",
      category: "Unternehmen",
      keywords: "über uns unternehmen monter reparatur wien floridsdorf österreich begonnen"
    },
    {
      title: "Geräteretterprämie Österreich",
      description: "50 % und max. 130 € auf die Reparatur — Ablauf und Einlösen.",
      href: "/geraete-retter-praemie",
      category: "Förderung",
      keywords: "geräteretterprämie geräteretterprämie österreich geräte-retter-prämie reparaturbonus förderung"
    },
    {
      title: "Notdienst Haushaltsgeräte Wien",
      description: "18:00–08:00. Abend 180 €, Wochenende 216 €, Nacht 240 €, brutto.",
      href: "/notdienst",
      category: "Service",
      keywords: "notdienst notfall wasserschaden abend nacht wochenende 18 uhr anfahrt diagnose"
    },
    {
      title: "Lieferpreise Großgeräte Wien",
      description: "Komfortplus 180 € brutto, Lieferung 102 €, ab 50 km plus 78 €.",
      href: "/lieferpreise",
      category: "Service",
      keywords: "lieferpreise lieferung komfortplus 85 150 anfahrt 50 km auspacken lift"
    },
    {
      title: "Montage & Installation Wien",
      description: "Anschluss und Aufbau, allein 108 € brutto oder im Komfortplus-Paket.",
      href: "/lieferung-montage",
      category: "Service",
      keywords: "montage installation anschluss aufbau lieferung komfortplus großgeräte altgerät trockner"
    },
    {
      title: "Altgeräteentsorgung Wien",
      description: "Mitnahme allein 42 € brutto, im Komfortplus-Paket enthalten.",
      href: "/altgeraeteentsorgung",
      category: "Service",
      keywords: "altgeräteentsorgung altgerät mitnahme entsorgung elektro 35 euro"
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
