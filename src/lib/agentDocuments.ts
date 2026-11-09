import { homeDescription, homeTitle } from "./homeMeta";
import { siteConfig } from "../app/siteConfig";

const absolute = (path: string) => `${siteConfig.siteUrl}${path}`;

export function homepageMarkdown() {
  return `# ${homeTitle}

${homeDescription}

${siteConfig.serviceName} repariert Haushaltsgeräte, Klimageräte und Garagentore markenoffen. Die Anfrage ist noch kein Auftrag.

- Adresse: ${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}
- Telefon: ${siteConfig.phoneDisplay}
- E-Mail: ${siteConfig.email}
- Einsatz: Wien, Niederösterreich und Linz. In Linz liegt der Schwerpunkt bei Haushaltsgeräten.

## Weiter

- [Preise](${absolute("/preise")}): veröffentlichte Bruttobeträge inkl. 20 % MwSt.
- [Reparatur buchen](${absolute("/reparatur-buchen")})
- [Kontakt](${absolute("/contact")})
- [Über uns](${absolute("/about")})
- [Datenschutz](${absolute("/privacy")})
- [Sitemap](${absolute("/sitemap.xml")})
- [llms.txt](${absolute("/llms.txt")})
`;
}

export function notFoundMarkdown() {
  return `# Seite nicht gefunden

Diese Adresse gibt es auf ${siteConfig.siteUrl} nicht. Der Link ist veraltet oder die Schreibweise stimmt nicht.

- [llms.txt](${absolute("/llms.txt")})
- [Sitemap](${absolute("/sitemap.xml")})
- [Startseite](${absolute("/")})
`;
}
