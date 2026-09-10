import type { Metadata } from "next";
import Script from "next/script";
import CookieBanner from "./CookieBanner";
import { consentDefaultScript } from "./consentMode";
import { getLogoSrc } from "./logoAsset";
import MobileActionBar from "./MobileActionBar";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { localBusinessId, siteConfig } from "./siteConfig";
import TelClickTracker from "./TelClickTracker";
import "./globals.css";

const GOOGLE_ADS_ID = "AW-18096010711";
const GTM_ID = "GTM-WPK8KT88";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "MONTER Reparatur & Service | Wien",
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
  openGraph: {
    title: "MONTER Reparatur & Service | Wien",
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
    "@type": ["LocalBusiness", "Organization"],
    "@id": localBusinessId,
    name: siteConfig.serviceName,
    legalName: siteConfig.companyName,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    vatID: siteConfig.vatId,
    image: `${siteConfig.siteUrl}/assets/logo.png`,
    logo: `${siteConfig.siteUrl}/assets/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country
    },
    areaServed: ["Wien", "Niederösterreich", "Österreich"],
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref,
      contactType: "customer support",
      areaServed: "AT",
      availableLanguage: ["de"]
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.serviceName,
    url: siteConfig.siteUrl,
    inLanguage: "de-AT",
    publisher: {
      "@id": localBusinessId
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.siteUrl}/suche?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const logoSrc = getLogoSrc();

  return (
    <html lang="de-AT" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        {/* Muss vor GTM und gtag laufen, sonst greifen die Consent-Defaults zu spät. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {consentDefaultScript}
        </Script>
        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <SiteHeader logoSrc={logoSrc} />
        <div id="inhalt">{children}</div>
        <SiteFooter logoSrc={logoSrc} />
        <MobileActionBar />
        <CookieBanner />
        <TelClickTracker />
      </body>
    </html>
  );
}
