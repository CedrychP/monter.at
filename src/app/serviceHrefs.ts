/** Baut die kanonischen Pfade der Themenhäuser. */

export function applianceHref(slug: string) {
  return `/haushaltsgeraete/${slug}`;
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
