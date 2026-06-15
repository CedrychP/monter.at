import type { Metadata } from "next";
import Script from "next/script";
import CookieBanner from "./CookieBanner";
import { getLogoSrc } from "./logoAsset";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { siteConfig } from "./siteConfig";
import "./globals.css";

const GOOGLE_ADS_ID = "AW-18096010711";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Haushaltsgeräte Reparatur Wien | MONTER Service",
    template: "%s"
  },
  description:
    "Haushaltsgeräte Reparatur in Wien: Rufen Sie MONTER Reparatur & Service für schnelle Einschätzung, klare Preise und Notdienst-Kontakt an.",
  keywords: [
    "Haushaltsgeräte Reparatur",
    "Waschmaschine Reparatur",
    "Geschirrspüler Reparatur",
    "Kühlschrank Reparatur",
    "Trockner Reparatur",
    "Firmenkunden Geräteservice",
    "MONTER Reparatur und Service"
  ],
  authors: [{ name: "Tech Craft Consulting GmbH" }],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Haushaltsgeräte Reparatur Wien | MONTER Service",
    description:
      "Schnelle Haushaltsgeräte Reparatur in Wien für Privatkunden, Firmenkunden und Hausverwaltungen.",
    url: siteConfig.siteUrl,
    siteName: "MONTER Reparatur & Service",
    locale: "de_AT",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.serviceName,
    legalName: siteConfig.companyName,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    vatID: siteConfig.vatId,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country
    },
    areaServed: ["Wien", "Niederösterreich", "Österreich"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref,
      contactType: "customer support",
      areaServed: "AT",
      availableLanguage: ["de"]
    }
  };

  const logoSrc = getLogoSrc();

  return (
    <html lang="de" data-scroll-behavior="smooth">
      <head>
        <Script
          id="gtag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader logoSrc={logoSrc} />
        {children}
        <SiteFooter logoSrc={logoSrc} />
        <CookieBanner />
      </body>
    </html>
  );
}
