/** Request-Header, den der Proxy setzt, damit das Layout die Sprache am html-Tag setzen kann. */
export const PATH_HEADER = "x-monter-path";

/**
 * Nur Seiten mit einem echten englischen Gegenstück.
 * hreflang zeigt in beide Richtungen, x-default bleibt die deutsche Seite.
 */
export const englishPairs = [
  { de: "/", en: "/en" },
  { de: "/haushaltsgeraete", en: "/en/appliance-repair" },
  { de: "/garagentore", en: "/en/garage-door-repair" },
  { de: "/klimageraete", en: "/en/air-conditioning" },
  { de: "/preise", en: "/en/prices" },
  { de: "/einsatzgebiete", en: "/en/service-area" },
  { de: "/kontakt", en: "/en/contact" },
  { de: "/ueber-uns", en: "/en/about" },
  { de: "/dsgvo", en: "/en/privacy" }
] as const;

export const englishNav = [
  { href: "/en", label: "Home" },
  { href: "/en/appliance-repair", label: "Appliances" },
  { href: "/en/garage-door-repair", label: "Garage doors" },
  { href: "/en/air-conditioning", label: "Air conditioning" },
  { href: "/en/prices", label: "Prices" },
  { href: "/en/service-area", label: "Service area" },
  { href: "/en/contact", label: "Contact" }
] as const;

export const englishIndex = [
  ...englishNav,
  { href: "/en/about", label: "About" },
  { href: "/en/privacy", label: "Privacy" }
] as const;

export function isEnglishPath(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function pairedLanguages(path: string) {
  const pair = englishPairs.find((item) => item.de === path || item.en === path);
  if (!pair) return undefined;

  return {
    "de-AT": pair.de,
    en: pair.en,
    "x-default": pair.de
  };
}

export function englishHrefFor(pathname: string) {
  return englishPairs.find((item) => item.de === pathname)?.en ?? "/en";
}

export function germanHrefFor(pathname: string) {
  return englishPairs.find((item) => item.en === pathname)?.de ?? "/";
}
