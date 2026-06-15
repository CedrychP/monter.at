export type BrandPage = {
  slug: string;
  brand: string;
  metaTitle: string;
  description: string;
  intro: string;
};

const makeBrand = (brand: string, slug: string): BrandPage => ({
  slug,
  brand,
  metaTitle: `${brand} Reparatur Wien | MONTER Service`,
  description: `${brand} Haushaltsgeräte Reparatur in Wien: Fehler einschätzen, Termin vorbereiten und direkt MONTER Reparatur & Service anrufen.`,
  intro: `${brand} Geräte sind in vielen Haushalten und Objektküchen im Einsatz. Wenn Waschmaschine, Geschirrspüler, Backofen, Herd, Trockner oder Kühlgerät nicht mehr zuverlässig funktionieren, hilft eine strukturierte Einschätzung. MONTER Reparatur & Service unterstützt in Wien bei der Vorbereitung von Diagnose, Reparaturentscheidung und Terminabstimmung. Wichtig sind Gerätetyp, Modellnummer, Fehlercode und eine kurze Beschreibung des Problems.`
});

export const brandPages: BrandPage[] = [
  makeBrand("Bosch", "bosch-reparatur-wien"),
  makeBrand("Miele", "miele-reparatur-wien"),
  makeBrand("Siemens", "siemens-reparatur-wien"),
  makeBrand("Beko", "beko-reparatur-wien"),
  makeBrand("Gorenje", "gorenje-reparatur-wien"),
  makeBrand("AEG", "aeg-reparatur-wien")
];

export function getBrandPage(slug: string) {
  return brandPages.find((brand) => brand.slug === slug);
}
