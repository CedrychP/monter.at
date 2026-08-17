import { wienDistricts } from "./locations/wien";
import { niederoesterreichCities } from "./locations/niederoesterreich";
import { weitereCities } from "./locations/weitere";

/**
 * Orts- und Bezirksseiten unterhalb einer Region.
 *
 * Jede Seite muss ortsspezifisch tragen: Baubestand, Zugangssituation und
 * typische Einsätze unterscheiden sich real zwischen Innerer Stadt, Donaustadt
 * und St. Pölten. Wo das nicht der Fall wäre, gehört kein eigener Ort angelegt —
 * dann genügt die Nennung in der Ortsliste der Region.
 */
export type LocationPage = {
  /** Slug der übergeordneten Region aus regionPages.ts. */
  regionSlug: string;
  slug: string;
  /** Anzeigename ohne Postleitzahl, z.B. "Favoriten" oder "St. Pölten". */
  name: string;
  /** Abweichender Name in der Ortsliste der Region, falls dort anders bezeichnet. */
  cityListName?: string;
  /** Postleitzahlen des Bezirks bzw. der Stadt. */
  postalCodes: string[];
  metaTitle: string;
  description: string;
  h1: string;
  /** Teaser für die Ortsliste auf der Regionsseite. */
  short: string;
  intro: string;
  /** Baubestand, Zugang, Besonderheiten — der ortsspezifische Kern der Seite. */
  character: string;
  /** Typische Einsätze an dieser Adresse. */
  focus: string[];
  sections: {
    title: string;
    body: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  /** Index-Gate wie bei den Regionen: ohne eigenen Inhalt kein Indexeintrag. */
  enriched: boolean;
};

export const locationPages: LocationPage[] = [
  ...wienDistricts,
  ...niederoesterreichCities,
  ...weitereCities
];

const locationByPath = new Map(
  locationPages.map((location) => [`${location.regionSlug}/${location.slug}`, location])
);

export function getLocationPage(regionSlug: string, slug: string): LocationPage | undefined {
  return locationByPath.get(`${regionSlug}/${slug}`);
}

export function getLocationsForRegion(regionSlug: string): LocationPage[] {
  return locationPages.filter((location) => location.regionSlug === regionSlug);
}

export function locationHref(location: LocationPage): string {
  return `/einsatzgebiete/${location.regionSlug}/${location.slug}`;
}

const locationByCityName = new Map(
  locationPages.map((location) => [
    `${location.regionSlug}|${location.cityListName ?? location.name}`,
    location
  ])
);

/** Verknüpft einen Eintrag aus der Ortsliste einer Region mit seiner Detailseite. */
export function findLocationByCityName(
  regionSlug: string,
  cityName: string
): LocationPage | undefined {
  return locationByCityName.get(`${regionSlug}|${cityName}`);
}

/** Routen der noch nicht ausgearbeiteten Orte — bleiben aus der XML-Sitemap. */
export const unenrichedLocationRoutes = locationPages
  .filter((location) => !location.enriched)
  .map(locationHref);
