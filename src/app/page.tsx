import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import ReviewsCarousel from "./ReviewsCarousel";
import { servicePages } from "./leistungen/services";
import { brandPages } from "./marken/brands";

const heroStockImage =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2400&q=85";

const applianceTileImage =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=85";

const garageTileImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85";

const detailImage =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=85";

const businessImage =
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=85";

const emergencyPhoneDisplay = "+43 1 4171346";
const emergencyPhoneHref = "+4314171346";

export const metadata: Metadata = {
  title:
    "Haushaltsgeräte & Garagentor Reparatur Wien | MONTER Reparatur & Service",
  description:
    "Haushaltsgeräte Reparatur in Wien: Waschmaschine, Geschirrspüler, Kühlschrank, Backofen und Trockner. Dazu Garagentor-Reparatur und Wartung. Klare Diagnose, transparente Preise, markenoffen für Bosch, Siemens, Miele, AEG und mehr.",
  keywords: [
    "Haushaltsgeräte Reparatur Wien",
    "Waschmaschine Reparatur Wien",
    "Geschirrspüler Reparatur Wien",
    "Kühlschrank Reparatur Wien",
    "Backofen Reparatur Wien",
    "Trockner Reparatur Wien",
    "Garagentor Reparatur Wien",
    "Reparatur Bosch Siemens Miele",
    "Hausverwaltung Geräteservice Wien"
  ],
  alternates: {
    canonical: "/"
  }
};

const heroFacts = [
  { value: "60+", label: "Marken reparieren wir" },
  { value: "Wien & NÖ", label: "Service direkt vor Ort" },
  { value: "Transparent", label: "Klare Pauschalen vorab" }
];

const serviceAreasOverview = [
  { value: "Markenoffen", label: "Bosch, Siemens, Miele, AEG, Gorenje & mehr" },
  { value: "Ehrlich", label: "Reparatur nur, wenn sie sich lohnt" },
  { value: "Planbar", label: "Termine für Privat- und Firmenkunden" },
  { value: "Dokumentiert", label: "Saubere Belege für Hausverwaltungen" }
];

const applianceServices = [
  {
    title: "Waschmaschine & Trockner",
    text: "Reparatur bei Wasserschäden, Heizungsdefekten, Trommellagern, Pumpenproblemen oder Elektronikfehlern.",
    href: "/leistungen/waschmaschine-reparatur-wien"
  },
  {
    title: "Geschirrspüler",
    text: "Behebung von Undichtigkeiten, schwacher Reinigungsleistung, Pumpen- und Heizungsproblemen sowie Fehlercodes.",
    href: "/leistungen/geschirrspueler-reparatur-wien"
  },
  {
    title: "Kühl- & Gefriergeräte",
    text: "Temperaturprobleme, Türdichtungen, Vereisung, Geräusche, erhöhter Stromverbrauch — mit klarer Empfehlung.",
    href: "/leistungen/kuehlschrank-reparatur-wien"
  },
  {
    title: "Herd, Backofen & Kochfeld",
    text: "Sicherheitsprüfung, Heizstäbe, Thermostate, Glaskeramik- und Induktionssensorik — sorgfältig geprüft.",
    href: "/leistungen/backofen-herd-reparatur-wien"
  }
];

const garageServices = [
  "Federwechsel & Torsionsfedern",
  "Antriebsreparatur & Justierung",
  "Austausch von Laufrollen",
  "Wartung, Schmierung & Inspektion"
];

const businessBenefits = [
  {
    title: "Planbare Termine",
    text: "Für Büros, Teeküchen, Apartments und Objektbetreuung — abgestimmt auf Ihre Abläufe."
  },
  {
    title: "Klare Dokumentation",
    text: "Saubere Belege für Hausverwaltungen, Versicherungen und Buchhaltung."
  },
  {
    title: "Priorisierte Analyse",
    text: "Bei mehreren Geräten im Objekt: gezielte Fehlerdiagnose statt Trial & Error."
  },
  {
    title: "Wartungsberatung",
    text: "Klare Sicht auf Kosten, Ausfallzeit und Lebensdauer Ihrer Geräte."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Anfrage senden",
    text: "Gerät, Modell und Fehlerbild beschreiben. Foto vom Typenschild hilft bei der Vorbereitung."
  },
  {
    number: "02",
    title: "Diagnose & Termin",
    text: "Wir prüfen die wahrscheinlichste Ursache und stimmen die nächsten Schritte transparent ab."
  },
  {
    number: "03",
    title: "Reparatur oder Empfehlung",
    text: "Vor Ort wird instand gesetzt — oder Sie erhalten eine ehrliche Ersatzempfehlung."
  }
];

const serviceAreasVienna = [
  { plz: "1010", name: "Innere Stadt" },
  { plz: "1020", name: "Leopoldstadt" },
  { plz: "1030", name: "Landstraße" },
  { plz: "1040", name: "Wieden" },
  { plz: "1050", name: "Margareten" },
  { plz: "1060", name: "Mariahilf" },
  { plz: "1070", name: "Neubau" },
  { plz: "1080", name: "Josefstadt" },
  { plz: "1090", name: "Alsergrund" },
  { plz: "1100", name: "Favoriten" },
  { plz: "1110", name: "Simmering" },
  { plz: "1120", name: "Meidling" },
  { plz: "1130", name: "Hietzing" },
  { plz: "1140", name: "Penzing" },
  { plz: "1150", name: "Rudolfsheim-Fünfhaus" },
  { plz: "1160", name: "Ottakring" },
  { plz: "1170", name: "Hernals" },
  { plz: "1180", name: "Währing" },
  { plz: "1190", name: "Döbling" },
  { plz: "1200", name: "Brigittenau" },
  { plz: "1210", name: "Floridsdorf" },
  { plz: "1220", name: "Donaustadt" },
  { plz: "1230", name: "Liesing" }
];

const serviceAreasLowerAustria = [
  { plz: "2103", name: "Langenzersdorf" },
  { plz: "2380", name: "Perchtoldsdorf" },
  { plz: "3400", name: "Klosterneuburg" }
];

const featuredBrands = [
  "Bosch",
  "Siemens",
  "Miele",
  "AEG",
  "Gorenje",
  "Elektra Bregenz",
  "NEFF",
  "Küppersbusch"
];

const brandOverview = [
  "AEG", "AIDA", "AIRFORCE", "ALTUS", "AMICA", "ARISTON", "BALAY", "BAUKNECHT",
  "BEKO", "BLAUPUNKT", "BOMANN", "BOSCH", "BULTHAUP", "CANDY", "CATA", "CONSTRUCTA",
  "DAEWOO", "DOMETIC", "DUNAVOX", "ELEKTRA BREGENZ", "ELICA", "EUDORA", "EXQUISIT",
  "FABER", "FALCON", "FALMEC", "FRANKE", "GAGGENAU", "GORENJE", "GUTMANN", "HAIER",
  "HANSEATIC", "HISENSE", "HOOVER", "HOTPOINT", "IGNIS", "IKEA", "INDESIT", "JACUZZI",
  "KÜPPERSBUSCH", "KOENIC", "LA CORNUE", "LIEBHERR", "MEDION", "MIELE", "NABO",
  "NEFF", "NORDFROST", "NOVY", "PKM", "PRIVILEG", "RESPEKTA", "SAMSUNG",
  "SCHAUB LORENZ", "SCHOLTES", "SHARP", "SIEMENS", "SMEG", "TEKA", "VIVAX",
  "VESTFROST", "WHIRLPOOL", "ZANUSSI"
];

const brandPageByName = new Map(brandPages.map((brand) => [brand.brand.toUpperCase(), brand.slug]));

const faqs = [
  {
    question: "Was kostet eine Waschmaschine Reparatur in Wien?",
    answer:
      "Die Anfahrt in Wien beträgt 80 €. Eine reine Diagnose vor Ort liegt bei 100 €, bei direkter Reparatur entfällt die Diagnosegebühr und es wird die Arbeitspauschale von 120 € verrechnet. Material wie Heizstab, Pumpe oder Stoßdämpfer kommt nur bei tatsächlichem Bedarf dazu und wird vor dem Einbau transparent abgestimmt."
  },
  {
    question: "Wie schnell ist eine Geschirrspüler Reparatur möglich?",
    answer:
      "Nach telefonischer Abstimmung versuchen wir, einen zeitnahen Termin im Wiener Stadtgebiet oder im Wiener Umland zu finden. Meist reicht ein einziger Vor-Ort-Termin, sofern gängige Ersatzteile von Bosch, Siemens, Miele, Whirlpool oder Beko verfügbar sind."
  },
  {
    question: "Reparieren Sie auch Garagentore?",
    answer:
      "Ja. Neben Haushaltsgeräten bieten wir Garagentor-Reparatur und Wartung an: Federwechsel, Antriebsreparatur und -justierung, Austausch von Laufrollen sowie Sicherheitsüberprüfung und Inspektion. Die Anfahrt für Garagenarbeiten beträgt 110 € in Wien und 150 € in Niederösterreich."
  },
  {
    question: "Repariert MONTER auch für Firmenkunden?",
    answer:
      "Ja. Neben Privatkunden werden ausdrücklich Büros, Hausverwaltungen, Vermieter, Serviced Apartments, Kanzleien und andere gewerbliche Kunden in Wien und Umgebung angenommen. Mehrere Geräte pro Objekt lassen sich über einen einzigen Termin bündeln."
  },
  {
    question: "Welche Marken werden abgedeckt?",
    answer:
      "Die Reparatur ist markenoffen. Repariert werden unter anderem Bosch, Siemens, Miele, AEG, Elektra Bregenz, Whirlpool, Bauknecht, Beko, Samsung, Gorenje, Neff, Liebherr, Haier, Hisense und viele weitere."
  },
  {
    question: "Wann lohnt sich eine Reparatur und wann eher ein Tausch?",
    answer:
      "Das hängt von Alter, Ersatzteilpreis, Sicherheitszustand und Ausfallrisiko ab. Bei sehr alten Geräten, mehrfachen Defekten oder Sicherheitsmängeln geben wir eine ehrliche Empfehlung zum Geräte-Tausch — statt eine teure Reparatur durchzuführen, die wirtschaftlich keinen Sinn ergibt."
  }
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MONTER Reparatur & Service",
    legalName: "Tech Craft Consulting GmbH",
    description:
      "Haushaltsgeräte- und Garagentor-Reparatur sowie Geräteservice für Privatkunden und Firmenkunden.",
    areaServed: "Österreich",
    serviceType: [
      "Haushaltsgeräte Reparatur",
      "Waschmaschinen Reparatur",
      "Geschirrspüler Reparatur",
      "Kühlschrank Reparatur",
      "Garagentor Reparatur",
      "Firmenkunden Geräteservice"
    ],
    telephone: emergencyPhoneHref,
    url: "https://tcc-reparatur-service.at"
  };

  return (
    <main className="relative bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroStockImage}
            alt="Premium Haushaltsgeräte- und Garagentor-Service in Wien"
            fill
            priority
            sizes="100vw"
            className="hero-image object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
        </div>

        <div className="mx-auto w-full max-w-[88rem] px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:pb-20 lg:pt-36">
          <div className="reveal max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-white/85">
              <span className="inline-flex items-center gap-3 tracking-eyebrow">
                <span className="status-dot" aria-hidden="true">
                  <span className="status-dot-core" />
                </span>
                Premium Reparaturservice · Wien
              </span>
              <span className="hidden h-px w-12 bg-white/25 sm:block" />
              <span className="hidden text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/55 sm:inline">
                Tech Craft Consulting GmbH
              </span>
            </div>

            <h1 className="mt-10 text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[4.75rem] lg:text-[6rem]">
              Reparatur,
              <span className="mt-1 block font-display font-light text-white/95">
                wie sie sein <span className="text-[color:var(--accent)]">sollte.</span>
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-pretty text-[1.05rem] font-light leading-relaxed text-white/85 sm:text-[1.15rem]">
              Haushaltsgeräte und Garagentore — instand gesetzt mit klarer Diagnose,
              transparenten Preisen und einer wirtschaftlich sinnvollen Lösung. Für
              Privathaushalte, Hausverwaltungen und Betriebe in Wien und Umgebung.
            </p>

            <div className="mt-11 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${emergencyPhoneHref}`} className="btn-on-dark">
                Jetzt anrufen
              </a>
              <Link href="/kontakt" className="btn-on-dark-ghost">
                Anfrage vorbereiten
              </Link>
            </div>

            <p className="mt-8 text-sm font-light text-white/65">
              Schnellster Weg: telefonisch unter{" "}
              <a
                className="border-b border-white/40 font-medium text-white transition hover:border-white"
                href={`tel:${emergencyPhoneHref}`}
              >
                {emergencyPhoneDisplay}
              </a>
              .
            </p>
          </div>

          <div className="reveal mt-16 grid max-w-3xl grid-cols-1 gap-px border-t border-white/15 sm:grid-cols-3">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="pt-6 sm:pr-8">
                <p className="font-display text-2xl font-light tracking-tight text-white sm:text-[1.7rem]">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/65">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative border-t border-white/15">
          <div className="mx-auto flex max-w-[88rem] flex-col gap-6 px-5 py-6 text-sm font-light text-white/75 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="tracking-eyebrow text-white/55">Markenoffener Service</p>
            <div className="marquee w-full overflow-hidden sm:max-w-3xl">
              <div className="marquee-track flex items-center gap-12 whitespace-nowrap text-base font-light tracking-[0.18em] text-white/70">
                {[...featuredBrands, ...featuredBrands].map((brand, index) => (
                  <span key={`${brand}-${index}`}>{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGSBEREICHE — zwei Kacheln */}
      <section id="bereiche" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <p className="cap-line tracking-eyebrow">Leistungsbereiche</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Zwei Schwerpunkte. Ein Anspruch.
            </h2>
            <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Vom defekten Haushaltsgerät bis zum klemmenden Garagentor: saubere Diagnose,
              transparente Kommunikation und eine ehrliche Entscheidung.
            </p>
          </div>

          <div className="stagger mt-16 grid gap-px bg-[color:var(--border)] lg:grid-cols-2">
            {[
              {
                eyebrow: "Bereich 01",
                title: "Haushaltsgeräte",
                text: "Waschmaschine, Geschirrspüler, Kühl- und Gefriergeräte, Backofen, Herd und Trockner — markenoffen repariert.",
                image: applianceTileImage,
                href: "/#leistungen",
                cta: "Geräte ansehen"
              },
              {
                eyebrow: "Bereich 02",
                title: "Garagentor-Reparatur",
                text: "Federwechsel, Antriebsreparatur, Laufrollen und Wartung — für sichere, leise und zuverlässige Tore.",
                image: garageTileImage,
                href: "/garagentor-reparatur-wien",
                cta: "Garagenservice ansehen"
              }
            ].map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden bg-[color:var(--ink)] p-8 text-white lg:min-h-[32rem] lg:p-12"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="-z-10 object-cover opacity-70 transition duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <p className="cap-line-light tracking-eyebrow text-white/70">{tile.eyebrow}</p>
                <h3 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
                  {tile.title}
                </h3>
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/80">
                  {tile.text}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-white">
                  {tile.cta}
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EINFÜHRUNG / PHILOSOPHIE */}
      <section id="ueber-uns" className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--ink)]">Service-Verständnis</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Ehrliche Reparatur statt schneller Tausch.
              </h2>
            </div>
            <div className="reveal space-y-7 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              <p>
                Nicht jedes Gerät muss ersetzt werden. Und nicht jede Reparatur lohnt sich. Bei
                MONTER Reparatur & Service stehen Diagnose, Sicherheit und Wirtschaftlichkeit im
                Mittelpunkt — nicht der schnelle Verkauf.
              </p>
              <p>
                Wir prüfen das Fehlerbild, sprechen Optionen offen aus und stimmen den Aufwand
                vorab mit Ihnen ab. So entstehen Termine, die planbar bleiben, und Entscheidungen,
                die langfristig tragen.
              </p>

              <div className="grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2">
                {serviceAreasOverview.map((item) => (
                  <div key={item.value} className="bg-white p-6">
                    <p className="font-display text-lg font-normal tracking-tight text-[color:var(--ink)]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/ueber-uns" className="link-arrow">
                Mehr über MONTER erfahren
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="cap-line tracking-eyebrow">Haushaltsgeräte</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Reparatur mit technischem Blick.
              </h2>
            </div>
            <p className="max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Vier Schwerpunkte, ein Anspruch: saubere Fehlerdiagnose, transparente
              Kommunikation und eine klare Entscheidung — Reparatur, Wartung oder Austausch.
            </p>
          </div>

          <div className="stagger mt-16 grid gap-px bg-[color:var(--border)] md:grid-cols-2 lg:grid-cols-4">
            {applianceServices.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex h-full flex-col justify-between bg-white p-8 transition hover:bg-[color:var(--ink)] hover:text-white lg:p-10"
              >
                <div>
                  <span className="numeral text-[color:var(--accent)] group-hover:text-white">
                    0{index + 1}
                  </span>
                  <h3 className="font-display mt-6 text-2xl font-normal leading-tight tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)] group-hover:text-white/75">
                    {service.text}
                  </p>
                </div>
                <span className="mt-12 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition group-hover:text-white">
                  Mehr erfahren
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-light text-[color:var(--muted)]">
            <span className="tracking-eyebrow text-[color:var(--ink)]">Weitere Leistungen</span>
            {servicePages.slice(4).map((service) => (
              <Link
                key={service.slug}
                href={`/leistungen/${service.slug}`}
                className="border-b border-transparent transition hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GARAGENTOR */}
      <section id="garage" className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="reveal flex flex-col justify-center">
              <p className="cap-line tracking-eyebrow">Garagentor-Reparatur</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
                Sichere, leise und zuverlässige Tore.
              </h2>
              <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Ob klemmender Antrieb, gebrochene Feder oder lautes Laufverhalten: Wir prüfen
                Mechanik und Elektronik, justieren präzise und tauschen Verschleißteile fachgerecht.
              </p>

              <div className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
                {garageServices.map((item, index) => (
                  <div key={item} className="bg-white p-6">
                    <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                    <p className="mt-4 text-[0.98rem] font-light leading-relaxed text-[color:var(--ink)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/garagentor-reparatur-wien" className="btn-primary">
                  Garagenservice ansehen
                </Link>
                <Link href="/preise" className="btn-ghost">
                  Preise ansehen
                </Link>
              </div>
            </div>

            <div className="reveal">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={garageTileImage}
                  alt="Garagentor-Reparatur und Wartung in Wien"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHWERPUNKT WIEN */}
      <section id="reparatur-wien" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="reveal order-2 lg:order-1">
              <div className="relative aspect-[5/6] w-full overflow-hidden">
                <Image
                  src={detailImage}
                  alt="Reparaturservice für Haushaltsgeräte"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="reveal order-1 flex flex-col justify-center lg:order-2">
              <p className="cap-line tracking-eyebrow">Reparaturkompetenz</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
                Wien als Service-Gebiet — markenoffen, präzise, durchdacht.
              </h2>
              <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Von der Innenstadt bis Floridsdorf, vom Wiener Umland bis Klosterneuburg: Wir
                kommen direkt zu Ihnen, lesen Fehlercodes vor Ort aus und entscheiden gemeinsam,
                wann eine Reparatur wirtschaftlich sinnvoll ist — und wann nicht.
              </p>

              <div className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
                {[
                  {
                    title: "Waschmaschine",
                    text: "Heizstab, Laugenpumpe, Türschloss, Trommellager, Stoßdämpfer und Steuerelektronik.",
                    href: "/leistungen/waschmaschine-reparatur-wien"
                  },
                  {
                    title: "Geschirrspüler",
                    text: "Umwälzpumpe, Heizung, Aquastop, Zu- und Ablauf, Steuerelektronik und Möbelfront.",
                    href: "/leistungen/geschirrspueler-reparatur-wien"
                  },
                  {
                    title: "Kühl- & Gefriergeräte",
                    text: "Temperaturverteilung, Türdichtungen, Sensorik und Kompressor — sicher beurteilt.",
                    href: "/leistungen/kuehlschrank-reparatur-wien"
                  },
                  {
                    title: "Backofen & Trockner",
                    text: "Heizstäbe, Thermostat, Lüfter, Wärmepumpe und Feuchtigkeitssensor.",
                    href: "/leistungen/backofen-herd-reparatur-wien"
                  }
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group bg-white p-6 transition hover:bg-[color:var(--bg-muted)]"
                  >
                    <h3 className="font-display text-xl font-normal tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      {item.text}
                    </p>
                    <span className="mt-4 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]">
                      Details
                      <span className="ml-1 transition group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="bg-[color:var(--ink)] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <p className="cap-line-light tracking-eyebrow text-white/70">Ablauf</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="font-display-italic">In drei klaren Schritten</span> zur Lösung.
            </h2>
          </div>

          <div className="stagger mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="bg-[color:var(--ink)] p-10 lg:p-12">
                <span className="font-display text-5xl font-light text-[color:var(--accent)] sm:text-6xl">
                  {step.number}
                </span>
                <h3 className="font-display mt-8 text-2xl font-normal tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-5 text-sm font-light leading-relaxed text-white/70">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section id="bewertungen" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="cap-line tracking-eyebrow">Bewertungen</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Vertrauen entsteht durch klare Arbeit.
              </h2>
            </div>
            <div className="text-right">
              <p className="font-display text-5xl font-light tracking-tight text-[color:var(--accent)] sm:text-6xl">
                4,9
              </p>
              <p className="mt-1 tracking-eyebrow text-[color:var(--muted)]">
                von 5 · Weiterempfehlung
              </p>
            </div>
          </div>

          <div className="mt-16">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      {/* FIRMENKUNDEN */}
      <section id="geschaeftskunden" className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Firmenkunden</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
                Geräteservice für Betriebe, Hausverwaltungen und Vermieter.
              </h2>
              <p className="mt-10 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Wenn Geräte im Objekt ausfallen, zählt mehr als nur die Reparatur:
                Terminlogistik, Dokumentation, Kostenklarheit und kurze Ausfallzeiten —
                genau dafür ist der Firmenkundenbereich ausgelegt.
              </p>
              <Link href="/kontakt" className="mt-12 inline-flex">
                <span className="btn-primary">Anfrage für Ihr Objekt</span>
              </Link>
            </div>

            <div className="reveal grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
              {businessBenefits.map((benefit, index) => (
                <div key={benefit.title} className="bg-white p-8 lg:p-10">
                  <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                  <h3 className="font-display mt-6 text-xl font-normal tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-20 overflow-hidden">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={businessImage}
                alt="Geräteservice für Firmenkunden"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 flex items-center px-8 sm:px-16">
                <div className="max-w-2xl text-white">
                  <p className="cap-line-light tracking-eyebrow text-white/70">Direktkontakt</p>
                  <p className="font-display mt-6 text-3xl font-light leading-tight tracking-tight sm:text-5xl">
                    Mehrere Geräte im Objekt? <span className="font-display-italic">Wir koordinieren das.</span>
                  </p>
                  <a
                    href={`tel:${emergencyPhoneHref}`}
                    className="mt-8 inline-flex items-center border-b border-white/60 py-1 text-[0.85rem] font-medium uppercase tracking-[0.16em] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {emergencyPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GERÄTE-RETTER-PRÄMIE */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="cap-line tracking-eyebrow">Förderung</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                Geräte-Retter-Prämie nutzen.
              </h2>
              <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Das Nachfolgemodell des Reparaturbonus in Österreich. Privatpersonen können
                für förderfähige Elektro- und Elektronikgeräte einen Bon beantragen und bei
                teilnehmenden Partnerbetrieben einlösen.
              </p>
            </div>
            <div className="border-l border-[color:var(--border)] py-2 pl-10">
              <p className="font-display text-7xl font-light leading-none tracking-tight text-[color:var(--ink)] sm:text-8xl">
                50%
              </p>
              <p className="mt-4 max-w-md font-light leading-relaxed text-[color:var(--muted)]">
                der förderfähigen Bruttokosten, maximal 130 € für Reparatur, Service oder
                Wartung und maximal 30 € für einen Kostenvoranschlag.
              </p>
            </div>
          </div>

          <div className="stagger mt-16 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-3">
            {[
              {
                title: "Bon online erstellen",
                text: "Der Bon wird auf der offiziellen Förderwebsite beantragt und ist ab Ausstellung drei Wochen gültig."
              },
              {
                title: "Gerät prüfen lassen",
                text: "Förderbar sind Elektro- und Elektronikgeräte, die üblicherweise in privaten Haushalten verwendet werden."
              },
              {
                title: "Förderung einreichen",
                text: "Der Partnerbetrieb reicht die Förderunterlagen ein. Der Betrag wird direkt auf das hinterlegte Konto überwiesen."
              }
            ].map((step, index) => (
              <div key={step.title} className="bg-white p-10">
                <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                <h3 className="font-display mt-6 text-2xl font-normal tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Bitte vorab prüfen, ob Gerät, Leistung und Betrieb förderfähig sind. Maßgeblich
              sind immer die aktuellen Bedingungen der offiziellen Geräte-Retter-Prämie.
            </p>
            <a
              className="link-arrow whitespace-nowrap"
              href="https://www.xn--gerte-retter-prmie-ntbm.at/"
              rel="noreferrer"
              target="_blank"
            >
              Offizielle Förderseite
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ANFAHRTSGEBIETE */}
      <section id="anfahrt" className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="cap-line tracking-eyebrow">Anfahrtsgebiete</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Wir kommen zu Ihnen.
              </h2>
            </div>
            <p className="max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Reparaturen in Wien und im Wiener Umland. Anfahrt Wien 80 €,
              Niederösterreich 100 € (An- und Abfahrt). Material wird nur bei tatsächlichem
              Bedarf verrechnet.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-[color:var(--border)] lg:grid-cols-[1.7fr_1fr]">
            <div className="bg-white p-8 sm:p-12">
              <div className="flex items-baseline justify-between border-b border-[color:var(--border)] pb-5">
                <h3 className="font-display text-2xl font-normal tracking-tight">Wien</h3>
                <span className="font-display text-2xl font-light text-[color:var(--accent)]">
                  ab 80 €
                </span>
              </div>
              <div className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                {serviceAreasVienna.map((area) => (
                  <div
                    key={area.plz}
                    className="flex items-baseline gap-4 border-b border-[color:var(--border)] py-2.5 text-sm"
                  >
                    <span className="font-medium tabular-nums tracking-tight">{area.plz}</span>
                    <span className="font-light text-[color:var(--muted)]">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 sm:p-12">
              <div className="flex items-baseline justify-between border-b border-[color:var(--border)] pb-5">
                <h3 className="font-display text-2xl font-normal tracking-tight">Niederösterreich</h3>
                <span className="font-display text-2xl font-light text-[color:var(--accent)]">
                  ab 100 €
                </span>
              </div>
              <div className="mt-6 grid gap-y-2">
                {serviceAreasLowerAustria.map((area) => (
                  <div
                    key={area.plz}
                    className="flex items-baseline gap-4 border-b border-[color:var(--border)] py-2.5 text-sm"
                  >
                    <span className="font-medium tabular-nums tracking-tight">{area.plz}</span>
                    <span className="font-light text-[color:var(--muted)]">{area.name}</span>
                  </div>
                ))}
                <p className="mt-6 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Ihre Region nicht dabei? Rufen Sie kurz an — wir prüfen Termine in der Nähe.
                </p>
                <a
                  href={`tel:${emergencyPhoneHref}`}
                  className="mt-4 inline-flex w-fit border-b border-[color:var(--ink)] py-1 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  {emergencyPhoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Kontakt</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
                Schnelle Hilfe beginnt mit einem Anruf.
              </h2>
              <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Am schnellsten klären wir Gerät, Fehlerbild, Standort und Termin direkt am
                Telefon. Das Formular ist ideal, wenn Sie Daten vorab sammeln möchten.
              </p>

              <div className="mt-12 border-t border-[color:var(--border)] pt-10">
                <p className="tracking-eyebrow text-[color:var(--muted)]">Direkt anrufen</p>
                <a
                  href={`tel:${emergencyPhoneHref}`}
                  className="font-display mt-4 block text-4xl font-light tracking-tight text-[color:var(--accent)] sm:text-5xl"
                >
                  {emergencyPhoneDisplay}
                </a>
                <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Bevorzugter Kontaktweg für dringende Reparaturen, Terminabstimmung und erste
                  Einschätzung.
                </p>
              </div>

              <div className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-3">
                {["Schnelle Einschätzung", "Privat & Gewerbe", "Klare Schritte"].map((item) => (
                  <div key={item} className="bg-white py-5">
                    <p className="text-sm font-light text-[color:var(--ink)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <ContactForm phoneHref={emergencyPhoneHref} />
            </div>
          </div>
        </div>
      </section>

      {/* MARKEN */}
      <section id="marken" className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <p className="cap-line tracking-eyebrow">Markenübersicht</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Reparatur für viele bekannte Hersteller.
            </h2>
            <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              MONTER ist markenoffen. Ist Ihre Marke nicht dabei, rufen Sie uns trotzdem kurz an.
            </p>
          </div>

          <div className="reveal mt-16 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 md:grid-cols-4">
            {featuredBrands.map((brand) => (
              <div
                key={brand}
                className="grid min-h-[8rem] place-items-center bg-white p-8"
              >
                <span className="font-display text-2xl font-normal tracking-tight">{brand}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 border-t border-[color:var(--border)] pt-10">
            <p className="tracking-eyebrow text-[color:var(--muted)]">Vollständige Markenliste</p>
            <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {brandOverview.map((brand) => (
                <Link
                  key={brand}
                  href={brandPageByName.has(brand) ? `/marken/${brandPageByName.get(brand)}` : "/kontakt"}
                  className="border-b border-[color:var(--border)] py-2 text-sm font-light text-[color:var(--muted)] transition hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <p className="cap-line tracking-eyebrow">Häufige Fragen</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                Kurz geklärt. <span className="font-display-italic">Schneller entschieden.</span>
              </h2>
              <p className="mt-8 max-w-md text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Die wichtigsten Antworten vor der Reparatur. Bei einem akuten Ausfall ist der
                direkte Anruf der schnellste Weg.
              </p>
              <a
                href={`tel:${emergencyPhoneHref}`}
                className="mt-10 inline-flex w-fit"
              >
                <span className="btn-primary">{emergencyPhoneDisplay}</span>
              </a>
            </div>

            <div className="reveal">
              {faqs.map((faq) => (
                <details key={faq.question} className="accordion-item">
                  <summary>
                    <span className="font-display pr-6 text-xl font-normal tracking-tight text-[color:var(--ink)] sm:text-2xl">
                      {faq.question}
                    </span>
                    <span className="accordion-icon" aria-hidden="true" />
                  </summary>
                  <p className="pb-6 text-[0.98rem] font-light leading-relaxed text-[color:var(--muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
