# MONTER Reparatur & Service

Next.js-Website für MONTER Reparatur & Service. Der Rechtsträger steht im Impressum.

## Entwicklung

```bash
npm install
npm run dev
```

Die Website nutzt den Next.js App Router, TypeScript und Tailwind CSS.

## Wo du was änderst

Stammdaten (Name, Adresse, Telefon, E-Mail, Öffnungszeiten) stehen in `src/app/siteConfig.ts`. Seiten lesen sie von dort, statt die Werte zu kopieren.

Jede öffentliche URL ist ein Ordner unter `src/app` mit einer `page.tsx`. Die Startseite ist `src/app/page.tsx`, der Kontakt `src/app/kontakt/page.tsx`, das Impressum `src/app/impressum/page.tsx`.

Rahmen der Seite: `src/app/layout.tsx` lädt Header, Footer und Tracking. Navigation steht in `src/app/SiteHeader.tsx`, der Footer in `src/app/SiteFooter.tsx`. Gemeinsame Textseiten nutzen `src/app/InfoPageLayout.tsx`.

Server-Helfer (Mail, Bewertungen, Rate-Limit) liegen in `src/lib`. Formulare posten an `src/app/api`.

## Kontaktformular

Der sichtbare Anfragebereich ist als Conversion-Formular vorbereitet. Für echte
Einsendungen muss noch ein Anbieter oder Backend angebunden werden, zum Beispiel
E-Mail API, CRM, HubSpot, Formspree, Resend oder ein eigener API-Handler.
