/** Baut die kanonischen Pfade der Themenhäuser. Linz ist ein Kind der Geräteseite, kein eigener Slug. */

export function applianceHref(slug: string, place?: "linz") {
  return place === "linz" ? `/haushaltsgeraete/${slug}/linz` : `/haushaltsgeraete/${slug}`;
}

export function brandHref(slug: string) {
  return `/marken/${slug}`;
}

export function brandDeviceHref(brandSlug: string, deviceSlug: string) {
  return `/marken/${brandSlug}/${deviceSlug}`;
}

export function garageHref(slug: string) {
  return `/garagentore/${slug}`;
}

export function klimaHref(slug: string) {
  return `/klimageraete/${slug}`;
}
