import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import RepairBookingForm from "./RepairBookingForm";
import ReviewsCarousel from "./ReviewsCarousel";
import HeroSlider from "./HeroSlider";
import ApplianceSlider from "./ApplianceSlider";
import { brandPages, brandOverview } from "./marken/brands";

const businessImage =
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=85";

const emergencyPhoneDisplay = "01 4171346";
const emergencyPhoneHref = "+4314171346";

const kontaktLinks = [
  {
    title: "Ersatzteile bestellen",
    text: "Originalteil für Ihr Gerät anfragen — wir besorgen und verbauen es.",
    href: "/ersatzteile",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 7.5 12 12l8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Allgemeines Anliegen",
    text: "Fragen, Anliegen oder Beschwerden — wir melden uns zeitnah zurück.",
    href: "/kontakt",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5h16v11H8l-4 3V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Firmenkunden",
    text: "Service für Betriebe, Hausverwaltungen und Vermieter.",
    href: "#geschaeftskunden",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 21V5l8-2v18M12 21V9l8 2v10M4 21h16M8 8h0M8 12h0M8 16h0M16 14h0M16 17h0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

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

const whyMonter = [
  {
    title: "Markenoffener Service",
    text: "Bosch, Siemens, Miele, AEG, Gorenje und 60+ weitere Marken — aus einer Hand.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 7l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M3 12l9 4 9-4M3 17l9 4 9-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Transparente Pauschalen",
    text: "Anfahrt, Diagnose und Arbeit klar vorab — ohne versteckte Kosten oder Überraschungen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5h16v14H4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M4 9h16M8 14h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Ehrliche Empfehlung",
    text: "Reparatur nur, wenn sie sich lohnt. Andernfalls raten wir offen zum Tausch.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Schnell vor Ort",
    text: "Planbare Termine in Wien und Niederösterreich — oft schon kurzfristig verfügbar.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Förderfähig sparen",
    text: "Mit der Geräte-Retter-Prämie sichern Sie sich bis zu 50 % bzw. 130 € Zuschuss.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Privat & Gewerbe",
    text: "Für Haushalte, Hausverwaltungen, Vermieter und Betriebe — mit sauberer Dokumentation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V8l7-4 7 4v13" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M17 21V11l4 2v8M8 12h2M8 16h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
];

const whyMonterStats = [
  { value: "4,9", rating: true, label: "Bewertung unserer Kund:innen" },
  { value: "60+", rating: false, label: "Marken im Service" },
  { value: "bis 130 €", rating: false, label: "Reparaturbonus zurück" }
];

// Platzhalter-Bilder (verifiziert ladbar) — Fotos werden später feinjustiert
const applianceCategories = [
  {
    title: "Waschmaschine",
    image:
      "https://images.unsplash.com/photo-1632923565835-6582b54f2105?auto=format&fit=crop&w=1200&q=85",
    href: "/leistungen/waschmaschine-reparatur-wien"
  },
  {
    title: "Trockner",
    image:
      "https://images.unsplash.com/photo-1775210727386-4c798dfae209?auto=format&fit=crop&w=1200&q=85",
    href: "/leistungen/trockner-reparatur-wien"
  },
  {
    title: "Geschirrspüler",
    image:
      "https://images.unsplash.com/photo-1620568400263-6f1cf95b9e30?auto=format&fit=crop&w=1200&q=85",
    href: "/leistungen/geschirrspueler-reparatur-wien"
  },
  {
    title: "Kühlschrank",
    image:
      "https://images.unsplash.com/photo-1667404202905-4335b5370d96?auto=format&fit=crop&w=1200&q=85",
    href: "/leistungen/kuehlschrank-reparatur-wien"
  },
  {
    title: "Gefrierschrank",
    image:
      "https://images.unsplash.com/photo-1719642357460-d0f611ebc108?auto=format&fit=crop&w=1200&q=85",
    href: "/leistungen/tiefkuehl-reparatur-wien"
  },
  {
    title: "Backofen & Herd",
    image:
      "https://images.unsplash.com/photo-1677727852911-74e9d5269003?auto=format&fit=crop&w=1200&q=85",
    href: "/leistungen/backofen-herd-reparatur-wien"
  }
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
    title: "Anrufen oder Anfrage senden",
    text: "Beschreiben Sie Gerät, Modell und Fehlerbild — telefonisch oder per Formular. Ein Foto vom Typenschild hilft.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A15 15 0 0 1 3 6.1 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Telefonat & Termin",
    text: "Wir melden uns, nehmen die wichtigsten Daten auf und vereinbaren einen Termin — meist schon binnen 1–2 Tagen.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="15" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 9.5h17M8 3v3.4M16 3v3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.8 14.3l2 2 4-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Techniker vor Ort",
    text: "Unser Techniker kommt zum vereinbarten Termin, repariert direkt vor Ort — oder gibt eine ehrliche Empfehlung.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a3.6 3.6 0 0 0-4.8 4.3L4 16.5 7.5 20l5.9-5.9a3.6 3.6 0 0 0 4.3-4.8l-2.4 2.4-2-2 2.4-2.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    )
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

const brandPageByName = new Map(brandPages.map((brand) => [brand.brand.toUpperCase(), brand.slug]));

const faqs = [
  {
    question: "Was kostet eine Waschmaschine Reparatur in Wien?",
    answer:
      "Eine reine Diagnose vor Ort liegt bei 120 €, Reparatur & Diagnose bei 150 € — jeweils inklusive der ersten 30-Minuten-Arbeitseinheit, jede weitere Einheit kostet 50 €. Die Anfahrt (80 € in Wien, 100 € in NÖ) wird ab einer Fahrzeit von über 40 Minuten verrechnet. Material wie Heizstab, Pumpe oder Stoßdämpfer kommt nur bei tatsächlichem Bedarf dazu und wird vor dem Einbau transparent abgestimmt."
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
  },
  {
    question: "Welche Geräte reparieren Sie?",
    answer:
      "Wir reparieren Waschmaschinen, Trockner, Geschirrspüler, Kühl- und Gefriergeräte sowie Backöfen, Herde und Kochfelder. Dazu kommen Garagentore und -antriebe. Ob sich eine Reparatur lohnt, klären wir vorab transparent mit Ihnen ab."
  },
  {
    question: "Wie läuft ein Reparaturtermin ab?",
    answer:
      "Sie rufen an oder senden eine Anfrage. Wir melden uns telefonisch, nehmen Gerät, Modell und Fehlerbild auf und vereinbaren einen Termin — meist schon binnen 1–2 Tagen. Der Techniker kommt zum vereinbarten Zeitfenster, diagnostiziert und repariert nach Möglichkeit direkt vor Ort."
  },
  {
    question: "Bekomme ich vorab einen Kostenvoranschlag?",
    answer:
      "Ja. Auf Wunsch erstellen wir einen Kostenvoranschlag. Arbeitsaufwand über die erste Arbeitseinheit hinaus oder benötigtes Material stimmen wir grundsätzlich vor dem Einbau mit Ihnen ab — Sie zahlen nie etwas, dem Sie nicht zugestimmt haben."
  },
  {
    question: "Gibt es Gewährleistung auf die Reparatur?",
    answer:
      "Ja. Auf unsere Arbeitsleistung und die fachgerecht verbauten Ersatzteile besteht die gesetzliche Gewährleistung. Sollte nach der Reparatur am selben Fehlerbild etwas auftreten, finden wir gemeinsam eine faire Lösung."
  },
  {
    question: "Verwenden Sie Originalersatzteile?",
    answer:
      "Wir verbauen Original- oder qualitativ gleichwertige, passgenaue Ersatzteile namhafter Hersteller. Welches Teil zum Einsatz kommt und was es kostet, besprechen wir vor dem Einbau."
  },
  {
    question: "Welche Zahlungsmöglichkeiten gibt es?",
    answer:
      "Sie können bequem in bar, per Karte oder auf Rechnung per Überweisung bezahlen. Sie erhalten in jedem Fall eine ordentliche Rechnung mit ausgewiesener Mehrwertsteuer."
  },
  {
    question: "Kann ich die Geräte-Retter-Prämie nutzen?",
    answer:
      "Ja. Mit der Geräte-Retter-Prämie (Nachfolger des Reparaturbonus) werden 50 % der förderfähigen Reparaturkosten gefördert — bis zu 130 € pro Reparatur, plus bis zu 30 € für einen Kostenvoranschlag. Wir unterstützen Sie bei der Abwicklung."
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Haushaltsgeräte- und Garagentor-Reparatur",
    provider: {
      "@type": "LocalBusiness",
      name: "MONTER Reparatur & Service",
      telephone: emergencyPhoneHref
    },
    areaServed: ["Wien", "Niederösterreich"],
    url: "https://tcc-reparatur-service.at"
  };

  return (
    <main className="relative bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* HERO */}
      <HeroSlider />

      {/* MARKENLEISTE */}
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8 sm:py-7">
          <p className="shrink-0 tracking-eyebrow text-[color:var(--muted)]">Markenoffener Service</p>
          <div className="marquee min-w-0 flex-1 overflow-hidden">
            <div className="marquee-track flex items-center gap-12 whitespace-nowrap text-base font-normal tracking-[0.18em] text-[color:var(--muted)]">
              {[...featuredBrands, ...featuredBrands].map((brand, index) => (
                <span key={`${brand}-${index}`}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WARUM MONTER */}
      <section
        id="warum-monter"
        className="relative isolate overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(to bottom, var(--bg) 0%, var(--bg-muted) 12%, var(--bg-muted) 62%, var(--bg) 100%)"
        }}
      >
        {/* dezente rote Akzent-Glows im Hintergrund */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full blur-[110px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.16)" }}
          />
          <div
            className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full blur-[110px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.11)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              maskImage: "radial-gradient(120% 80% at 85% 0%, #000 0%, transparent 65%)",
              WebkitMaskImage: "radial-gradient(120% 80% at 85% 0%, #000 0%, transparent 65%)",
              backgroundImage:
                "linear-gradient(to right, rgba(168,17,42,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,17,42,0.09) 1px, transparent 1px)",
              backgroundSize: "64px 64px"
            }}
          />
        </div>
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="cap-line tracking-eyebrow text-[color:var(--ink)]">Warum MONTER?</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl">
                Ehrliche Reparatur statt schneller Tausch.
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] font-normal leading-relaxed text-[color:var(--muted)]">
              Nicht jedes Gerät muss ersetzt werden — und nicht jede Reparatur lohnt sich. Wir prüfen
              das Fehlerbild, sprechen Optionen offen aus und stimmen den Aufwand vorab transparent
              mit Ihnen ab. Für Entscheidungen, die langfristig tragen.
            </p>
          </div>

          <div className="reveal mt-10 grid gap-px overflow-hidden rounded-sm bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {whyMonter.map((item) => (
              <div key={item.title} className="flex flex-col bg-white p-6 lg:p-7">
                <span className="text-[color:var(--accent)]" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-display mt-4 text-lg font-normal leading-tight tracking-tight sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm font-normal leading-relaxed text-[color:var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {whyMonterStats.map((stat) => (
                <div key={stat.label}>
                  {stat.rating ? (
                    <div className="flex items-center gap-2.5">
                      <p className="font-display text-3xl font-normal tracking-tight text-[color:var(--ink)] sm:text-4xl">
                        {stat.value}
                      </p>
                      <span className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3Z" />
                          </svg>
                        ))}
                      </span>
                    </div>
                  ) : (
                    <p className="font-display text-3xl font-normal tracking-tight text-[color:var(--ink)] sm:text-4xl">
                      {stat.value}
                    </p>
                  )}
                  <p className="mt-1 text-sm font-normal text-[color:var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link href="/ueber-uns" className="link-arrow whitespace-nowrap">
              Mehr über MONTER erfahren
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* LEISTUNGSBEREICHE — Überblick als Kästen */}
      <section id="bereiche" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        {/* eigenständiges rotes Akzent-Design (Glows + Punkte-Muster) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-44 top-1/4 h-[34rem] w-[34rem] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.10)" }}
          />
          <div
            className="absolute -right-48 -bottom-44 h-[30rem] w-[30rem] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.08)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              maskImage: "radial-gradient(115% 90% at 15% 18%, #000 0%, transparent 62%)",
              WebkitMaskImage: "radial-gradient(115% 90% at 15% 18%, #000 0%, transparent 62%)",
              backgroundImage:
                "radial-gradient(rgba(168,17,42,0.18) 1.1px, transparent 1.4px)",
              backgroundSize: "22px 22px"
            }}
          />
        </div>
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <p className="cap-line tracking-eyebrow">Leistungsbereiche</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Alles für Ihr Gerät — aus einer Hand.
            </h2>
            <p className="mt-8 text-[1.05rem] font-normal leading-relaxed text-[color:var(--muted)]">
              Vom defekten Haushaltsgerät bis zum klemmenden Garagentor: Reparatur, Ersatzteile,
              Services und Marken — alles an einer Stelle.
            </p>
          </div>

          <div className="reveal mt-12 grid gap-px overflow-hidden rounded-sm bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Haushaltsgeräte-Reparatur",
                text: "Waschmaschine, Geschirrspüler, Kühl- & Gefriergeräte, Backofen, Herd und Trockner — markenoffen.",
                href: "/#leistungen",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="3" width="16" height="18" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="12" cy="13" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M7 6h.01M10 6h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                title: "Garagentor-Reparatur",
                text: "Federwechsel, Antriebs- und Motorreparatur, Laufrollen sowie Wartung und Sicherheitscheck.",
                href: "/garagentor-reparatur-wien",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 21V8.5L12 4l9 4.5V21" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M6 21v-9h12v9M6 15h12M6 18h12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: "Ersatzteile",
                text: "Pumpe, Heizstab, Dichtung, Laufrolle oder Elektronik — Originalteile besorgt und fachgerecht verbaut.",
                href: "/ersatzteile",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M12 3v2.6M12 18.4V21M3 12h2.6M18.4 12H21M5.6 5.6l1.9 1.9M16.5 16.5l1.9 1.9M18.4 5.6l-1.9 1.9M7.5 16.5l-1.9 1.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                title: "Services",
                text: "Wartung, Montage & Installation, Lieferung und Anschluss — mit klaren Pauschalen und Dokumentation.",
                href: "/preise",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14.7 6.3a3.6 3.6 0 0 0-4.8 4.3L4 16.5 7.5 20l5.9-5.9a3.6 3.6 0 0 0 4.3-4.8l-2.4 2.4-2-2 2.4-2.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: "Geräte & Kategorien",
                text: "Waschen · Spülen · Kühlen · Backen & Kochen · Trocknen — für jede Kategorie der passende Service.",
                href: "/#leistungen",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
                    <rect x="14" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
                    <rect x="3" y="14" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
                    <rect x="14" y="14" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                )
              },
              {
                title: "Hauptmarken",
                text: "Bosch, Siemens, Miele, AEG, Gorenje und 60+ weitere Marken — kompetent und markenoffen serviciert.",
                href: "/#marken",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M8.5 13.2L7 21l5-2.6L17 21l-1.5-7.8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                )
              }
            ].map((box) => (
              <Link
                key={box.title}
                href={box.href}
                className="group flex flex-col bg-white p-6 transition-colors duration-300 hover:bg-[color:var(--bg-muted)] lg:p-7"
              >
                <span className="text-[color:var(--accent)]" aria-hidden="true">
                  {box.icon}
                </span>
                <h3 className="font-display mt-4 text-lg font-normal leading-tight tracking-tight sm:text-xl">
                  {box.title}
                </h3>
                <p className="mt-2.5 text-sm font-normal leading-relaxed text-[color:var(--muted)]">
                  {box.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]">
                  Mehr erfahren
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN — Geräte-Slider */}
      <section id="leistungen" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow">Haushaltsgeräte</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Hochwertige Reparatur für Haushaltsgeräte.
            </h2>
          </div>

          <div className="reveal mt-12">
            <ApplianceSlider items={applianceCategories} />
          </div>
        </div>
      </section>

      {/* GARAGENTOR — Leistungen als Kästen (Struktur wie im Header-Menü) */}
      <section id="garage" className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="cap-line tracking-eyebrow">Garagentor-Reparatur</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Sichere, leise und zuverlässige Tore.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/garagentor-reparatur-wien" className="btn-primary">
                Garagenservice ansehen
              </Link>
              <Link href="/preise" className="btn-ghost">
                Preise ansehen
              </Link>
            </div>
          </div>

          <div className="reveal mt-12 grid gap-px overflow-hidden rounded-sm bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Sektionaltore",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 21V8.5L12 4l9 4.5V21" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M6 21v-9h12v9M6 15h12M6 18h12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: "Rolltore",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="3.4" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                    <rect x="5" y="7.4" width="14" height="13.1" rx="1" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M5 11.4h14M5 14.4h14M5 17.4h14" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                )
              },
              {
                title: "Torantriebe",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M12 3v2.6M12 18.4V21M3 12h2.6M18.4 12H21M5.6 5.6l1.9 1.9M16.5 16.5l1.9 1.9M18.4 5.6l-1.9 1.9M7.5 16.5l-1.9 1.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                title: "Motoren",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="8" width="12" height="8" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M15 10.5h3l2 1.5-2 1.5h-3" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M6 8V6M10 8V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                title: "Federn & Federbruch",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 5h10M7 17h10M7 5c0 1.5 10 1.5 10 3s-10 1.5-10 3 10 1.5 10 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: "Rollentausch",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="8" cy="11" r="3" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="16" cy="11" r="3" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M3 18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                title: "Wartung & Service",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14.7 6.3a3.6 3.6 0 0 0-4.8 4.3L4 16.5 7.5 20l5.9-5.9a3.6 3.6 0 0 0 4.3-4.8l-2.4 2.4-2-2 2.4-2.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: "Sicherheitsüberprüfung",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3l7 3v5c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              }
            ].map((box) => (
              <Link
                key={box.title}
                href="/garagentor-reparatur-wien"
                className="group flex flex-col bg-white p-6 transition-colors duration-300 hover:bg-[color:var(--bg-muted)] lg:p-7"
              >
                <span className="text-[color:var(--accent)]" aria-hidden="true">
                  {box.icon}
                </span>
                <h3 className="font-display mt-4 text-lg font-normal leading-tight tracking-tight sm:text-xl">
                  {box.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]">
                  Ansehen
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROZESS — kreativer Stepper */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] py-24 text-white sm:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-0 h-[28rem] w-[44rem] max-w-[90vw] -translate-x-1/2 rounded-full blur-[140px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.20)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              maskImage: "radial-gradient(100% 70% at 50% 0%, #000 0%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(100% 70% at 50% 0%, #000 0%, transparent 70%)",
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "64px 64px"
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <p className="cap-line-light tracking-eyebrow text-white/70">Ablauf</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              In <span className="font-display-italic">drei Schritten</span> zur Reparatur.
            </h2>
            <p className="mt-6 max-w-xl text-[1.02rem] font-normal leading-relaxed text-white/65">
              Von der ersten Anfrage bis zum Techniker vor Ort — unkompliziert und meist schon
              binnen 1–2 Tagen.
            </p>
          </div>

          <div className="reveal relative mt-16">
            {/* Verbindungslinie zwischen den Schritten (Desktop) */}
            <div className="pointer-events-none absolute inset-x-0 top-9 hidden h-px bg-gradient-to-r from-white/0 via-white/25 to-white/0 md:block" />

            <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
              {processSteps.map((step, index) => (
                <li key={step.title} className="relative flex flex-col items-start">
                  <div className="relative z-10 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border border-white/15 bg-white/[0.05] text-[color:var(--accent-on-dark)] backdrop-blur-sm">
                    {step.icon}
                    <span className="absolute -bottom-1.5 -right-1.5 grid h-7 w-7 place-items-center rounded-full bg-[color:var(--accent)] font-display text-xs font-semibold text-white shadow-lg shadow-black/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display mt-7 text-2xl font-normal tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm font-normal leading-relaxed text-white/65">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal mt-14 flex flex-col gap-3 sm:flex-row">
            <Link href={`tel:${emergencyPhoneHref}`} className="btn-primary">
              Jetzt anrufen
            </Link>
            <Link href="/#kontakt" className="btn-on-dark-ghost">
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>

      {/* GERÄTE-RETTER-PRÄMIE */}
      <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-44 top-1/3 h-[34rem] w-[34rem] rounded-full blur-[130px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.10)" }}
          />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Copy + Nutzen + CTA */}
            <div>
              <p className="cap-line tracking-eyebrow">Förderung · Geräte-Retter-Prämie</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl">
                Reparieren lohnt sich —{" "}
                <span className="text-[color:var(--accent)]">bis zu 130&nbsp;€ zurück.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] font-normal leading-relaxed text-[color:var(--muted)]">
                Mit der Geräte-Retter-Prämie (Nachfolger des Reparaturbonus) bekommen Sie 50&nbsp;%
                Ihrer Reparaturkosten gefördert. Wir übernehmen die Abwicklung — Sie sparen bares Geld
                und schonen die Umwelt.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  "50 % der Kosten gefördert — bis zu 130 € pro Reparatur",
                  "Zusätzlich bis zu 30 € für den Kostenvoranschlag",
                  "Wir reichen die Förderung für Sie ein — kein Papierkram"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[0.98rem] font-normal leading-relaxed text-[color:var(--ink)]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/#kontakt" className="btn-primary">
                  Jetzt Reparatur anfragen
                </Link>
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

            {/* Ersparnis-Karte mit Rechenbeispiel */}
            <div className="relative overflow-hidden rounded-sm bg-[color:var(--ink)] p-8 text-white sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[90px]"
                style={{ backgroundColor: "rgba(255, 96, 115, 0.18)" }}
              />
              <div className="relative">
                <p className="cap-line-light tracking-eyebrow text-white/60">Ihre Ersparnis</p>
                <div className="mt-6 flex items-end gap-4">
                  <span className="font-display text-7xl font-normal leading-none tracking-tight text-[color:var(--accent-on-dark)] sm:text-8xl">
                    50%
                  </span>
                  <span className="mb-2 text-base font-normal leading-snug text-white/70">
                    zurück
                    <br />
                    bis 130&nbsp;€
                  </span>
                </div>

                <div className="mt-8 rounded-sm border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/45">
                    Rechenbeispiel
                  </p>
                  <dl className="mt-4 space-y-2.5 text-[0.98rem]">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-white/70">Reparaturkosten</dt>
                      <dd className="font-display tabular-nums text-white">220&nbsp;€</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-white/70">Förderung (50 %)</dt>
                      <dd className="font-display tabular-nums text-[color:var(--accent-on-dark)]">
                        −110&nbsp;€
                      </dd>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-4 border-t border-white/10 pt-3">
                      <dt className="font-medium text-white">Ihr Preis</dt>
                      <dd className="font-display text-xl tabular-nums text-white">110&nbsp;€</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* So einfach geht's */}
          <div className="reveal mt-20">
            <p className="cap-line tracking-eyebrow">So einfach geht&apos;s</p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-3">
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
                  text: "Wir reichen die Förderunterlagen ein. Der Betrag wird direkt auf Ihr hinterlegtes Konto überwiesen."
                }
              ].map((step, index) => (
                <div key={step.title} className="bg-white p-8 lg:p-10">
                  <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                  <h3 className="font-display mt-6 text-xl font-normal tracking-tight sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm font-normal leading-relaxed text-[color:var(--muted)]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm font-normal leading-relaxed text-[color:var(--muted)]">
              Bitte vorab prüfen, ob Gerät, Leistung und Betrieb förderfähig sind. Maßgeblich
              sind immer die aktuellen Bedingungen der offiziellen Geräte-Retter-Prämie.
            </p>
          </div>
        </div>
      </section>

      {/* MARKEN */}
      <section id="marken" className="relative isolate overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-44 top-1/4 h-[34rem] w-[34rem] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.08)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              maskImage: "radial-gradient(110% 80% at 90% 8%, #000 0%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(110% 80% at 90% 8%, #000 0%, transparent 60%)",
              backgroundImage:
                "radial-gradient(rgba(168,17,42,0.16) 1.1px, transparent 1.4px)",
              backgroundSize: "22px 22px"
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <p className="cap-line tracking-eyebrow">Markenübersicht</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl">
              Reparatur für viele bekannte Hersteller.
            </h2>
            <p className="mt-5 max-w-2xl text-[1.02rem] font-normal leading-relaxed text-[color:var(--muted)]">
              MONTER ist markenoffen. Ist Ihre Marke nicht dabei, rufen Sie uns trotzdem kurz an.
            </p>
          </div>

          {/* Trust-Signale */}
          <div className="reveal mt-7 flex flex-wrap gap-x-8 gap-y-3">
            {[
              "60+ Marken im Service",
              "Original- & passgenaue Ersatzteile",
              "Herstellerübergreifend & unabhängig"
            ].map((item) => (
              <span key={item} className="flex items-center gap-2.5 text-sm font-medium text-[color:var(--ink)]">
                <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </span>
            ))}
          </div>

          <div className="reveal mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-[color:var(--border)] sm:grid-cols-3 md:grid-cols-4">
            {featuredBrands.map((brand) => (
              <div
                key={brand}
                className="group grid min-h-[6rem] place-items-center bg-white p-6 transition-colors duration-300 hover:bg-[color:var(--ink)]"
              >
                <span className="font-display text-xl font-normal tracking-tight text-[color:var(--ink)] transition-colors duration-300 group-hover:text-white sm:text-2xl">
                  {brand}
                </span>
              </div>
            ))}
          </div>

          <div className="reveal mt-9">
            <p className="tracking-eyebrow text-[color:var(--muted)]">Vollständige Markenliste</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {brandOverview.map((brand) => (
                <Link
                  key={brand}
                  href={brandPageByName.has(brand) ? `/marken/${brandPageByName.get(brand)}` : "/kontakt"}
                  className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-normal text-[color:var(--muted)] transition-colors duration-200 hover:border-[color:var(--ink)] hover:bg-white hover:text-[color:var(--ink)]"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANFAHRTSGEBIETE */}
      <section id="anfahrt" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="cap-line tracking-eyebrow">Einsatzgebiete</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl">
                Wir kommen zu Ihnen.
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] font-normal leading-relaxed text-[color:var(--muted)]">
              Reparaturen in Wien und im Wiener Umland — schnell, planbar und mit transparenter
              Anfahrt. Material wird nur bei tatsächlichem Bedarf verrechnet, bei längeren
              Wegstrecken können Aufpreise anfallen.
            </p>
          </div>

          {/* Trust-Badges */}
          <div className="reveal mt-9 grid gap-px overflow-hidden rounded-sm border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-3">
            {[
              {
                title: "Schnell vor Ort",
                text: "Termine oft schon binnen 1–2 Tagen.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: "Transparente Anfahrt",
                text: "Wien 80 €, NÖ 100 €. Längere Wegstrecken mit Aufpreis.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )
              },
              {
                title: "Faire Abrechnung",
                text: "Material nur bei tatsächlichem Bedarf.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              }
            ].map((badge) => (
              <div key={badge.title} className="bg-white p-6">
                <span className="text-[color:var(--accent)]" aria-hidden="true">
                  {badge.icon}
                </span>
                <h3 className="font-display mt-3.5 text-lg font-normal tracking-tight sm:text-xl">
                  {badge.title}
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-relaxed text-[color:var(--muted)]">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-[color:var(--border)] bg-[color:var(--border)] lg:grid-cols-[1.7fr_1fr]">
            <div className="bg-white p-6 sm:p-8">
              <div className="flex items-baseline justify-between border-b border-[color:var(--border)] pb-5">
                <h3 className="flex items-center gap-2.5 font-display text-2xl font-normal tracking-tight">
                  <span className="text-[color:var(--accent)]" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  Wien
                </h3>
                <span className="font-display text-2xl font-normal text-[color:var(--accent)]">
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
                    <span className="font-normal text-[color:var(--muted)]">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8">
              <div className="flex items-baseline justify-between border-b border-[color:var(--border)] pb-5">
                <h3 className="flex items-center gap-2.5 font-display text-2xl font-normal tracking-tight">
                  <span className="text-[color:var(--accent)]" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  Niederösterreich
                </h3>
                <span className="font-display text-2xl font-normal text-[color:var(--accent)]">
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
                    <span className="font-normal text-[color:var(--muted)]">{area.name}</span>
                  </div>
                ))}
                <div className="mt-6 rounded-sm bg-[color:var(--bg-muted)] p-5">
                  <p className="text-sm font-normal leading-relaxed text-[color:var(--muted)]">
                    Ihre Region nicht dabei? Rufen Sie kurz an — wir prüfen Termine in der Nähe.
                  </p>
                  <a
                    href={`tel:${emergencyPhoneHref}`}
                    className="mt-3 inline-flex w-fit items-center gap-2 font-display text-lg font-normal tracking-tight text-[color:var(--ink)] transition hover:text-[color:var(--accent)]"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A15 15 0 0 1 3 6.1 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                    {emergencyPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section id="bewertungen" className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="cap-line tracking-eyebrow">Bewertungen</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Vertrauen entsteht durch klare Arbeit.
              </h2>
            </div>
            <div className="text-right">
              <p className="font-display text-5xl font-normal tracking-tight text-[color:var(--accent)] sm:text-6xl">
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
      <section id="geschaeftskunden" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Firmenkunden</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl">
                Geräteservice für Betriebe, Hausverwaltungen und Vermieter.
              </h2>
              <p className="mt-6 max-w-xl text-[1.02rem] font-normal leading-relaxed text-[color:var(--muted)]">
                Wenn Geräte im Objekt ausfallen, zählt mehr als nur die Reparatur:
                Terminlogistik, Dokumentation, Kostenklarheit und kurze Ausfallzeiten —
                genau dafür ist der Firmenkundenbereich ausgelegt.
              </p>
              <Link href="/kontakt" className="mt-8 inline-flex">
                <span className="btn-primary">Anfrage für Ihr Objekt</span>
              </Link>
            </div>

            <div className="reveal grid gap-px overflow-hidden rounded-sm bg-[color:var(--border)] sm:grid-cols-2">
              {businessBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-white p-6 transition-colors duration-300 hover:bg-[color:var(--bg-muted)] lg:p-7"
                >
                  <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                  <h3 className="font-display mt-5 text-lg font-normal tracking-tight sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-[color:var(--muted)]">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-sm">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={businessImage}
                alt="Geräteservice für Firmenkunden"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
              <div className="absolute inset-0 flex items-center px-8 sm:px-14">
                <div className="max-w-2xl text-white">
                  <p className="cap-line-light tracking-eyebrow text-white/70">Direktkontakt</p>
                  <p className="font-display mt-5 text-3xl font-normal leading-tight tracking-tight sm:text-[2.75rem]">
                    Mehrere Geräte im Objekt? <span className="font-display-italic">Wir koordinieren das.</span>
                  </p>
                  <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <a
                      href={`tel:${emergencyPhoneHref}`}
                      className="inline-flex items-center gap-2 font-display text-xl font-normal tracking-tight text-white transition hover:text-[color:var(--accent-on-dark)]"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A15 15 0 0 1 3 6.1 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                      {emergencyPhoneDisplay}
                    </a>
                    <Link href="/#kontakt" className="btn-on-dark inline-flex items-center gap-2">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      </svg>
                      Anfrage senden
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative isolate overflow-hidden border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-44 top-0 h-[30rem] w-[30rem] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.07)" }}
          />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="cap-line tracking-eyebrow">Häufige Fragen</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl">
                Kurz geklärt. <span className="font-display-italic">Schneller entschieden.</span>
              </h2>
            </div>
            <a
              href={`tel:${emergencyPhoneHref}`}
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-sm border border-[color:var(--border)] bg-white px-5 py-3 transition hover:border-[color:var(--ink)]"
            >
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A15 15 0 0 1 3 6.1 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-left">
                <span className="block text-xs font-normal text-[color:var(--muted)]">Frage nicht dabei?</span>
                <span className="block font-display text-lg font-normal tracking-tight text-[color:var(--ink)]">
                  {emergencyPhoneDisplay}
                </span>
              </span>
            </a>
          </div>

          <div className="reveal mt-10 grid gap-x-10 md:grid-cols-2">
            {[
              faqs.slice(0, Math.ceil(faqs.length / 2)),
              faqs.slice(Math.ceil(faqs.length / 2))
            ].map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="border-t border-[color:var(--border)] [&>details:last-child]:border-b-0 md:[&>details:last-child]:border-b"
              >
                {group.map((faq) => (
                  <details key={faq.question} className="accordion-item">
                    <summary>
                      <span className="font-display pr-5 text-base font-normal tracking-tight text-[color:var(--ink)] sm:text-lg">
                        {faq.question}
                      </span>
                      <span className="accordion-icon" aria-hidden="true" />
                    </summary>
                    <p className="pb-6 text-[0.95rem] font-normal leading-relaxed text-[color:var(--muted)]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.06)" }}
          />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Terminbuchung</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Reparaturtermin <span className="font-display-italic">buchen.</span>
              </h2>
              <p className="mt-7 max-w-md text-[1.05rem] font-normal leading-relaxed text-[color:var(--muted)]">
                Gerät, Fehlerbild und Wunschtermin angeben — wir melden uns zur Abstimmung. Bei
                dringenden Ausfällen ist der direkte Anruf der schnellste Weg.
              </p>

              <a
                href={`tel:${emergencyPhoneHref}`}
                className="group mt-10 flex items-center gap-4 rounded-sm border border-[color:var(--border)] bg-white p-5 transition hover:border-[color:var(--ink)]"
              >
                <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A15 15 0 0 1 3 6.1 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-normal tracking-eyebrow text-[color:var(--muted)]">
                    Direkt anrufen
                  </span>
                  <span className="font-display block text-2xl font-normal tracking-tight text-[color:var(--ink)] sm:text-3xl">
                    {emergencyPhoneDisplay}
                  </span>
                </span>
              </a>

              <div className="mt-8">
                <p className="tracking-eyebrow text-[color:var(--muted)]">Kein Reparaturtermin?</p>
                <div className="mt-4 grid gap-2.5">
                  {kontaktLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="group flex items-center gap-4 rounded-xl border border-[color:var(--border)] bg-white p-4 transition hover:border-[color:var(--ink)]"
                    >
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-lg bg-[color:var(--bg-muted)] text-[color:var(--accent)] transition-colors group-hover:bg-[color:var(--accent-soft)]">
                        {link.icon}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-[color:var(--ink)]">
                          {link.title}
                        </span>
                        <span className="block text-xs font-normal leading-relaxed text-[color:var(--muted)]">
                          {link.text}
                        </span>
                      </span>
                      <span className="flex-none text-[color:var(--muted-soft)] transition-transform group-hover:translate-x-0.5 group-hover:text-[color:var(--ink)]">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal rounded-sm border border-[color:var(--border)] bg-white p-6 sm:p-10">
              <RepairBookingForm phoneHref={emergencyPhoneHref} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
