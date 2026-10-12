import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoogleRatingBadge } from "../GoogleRatingLive";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { getGoogleReviews, toGoogleRatingSummary } from "../../lib/googleReviews";
import { buildMetadata } from "../pageMetadata";
import { localBusinessId, siteConfig } from "../siteConfig";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`
)}`;

const heroImage = "/assets/ueber-uns-waschmaschinenmotor-wien.webp";
const laundryImage = "/assets/ueber-uns-waschkueche-wien.webp";
const garageImage = "/assets/ueber-uns-garagentor-wien.webp";
const climateImage = "/assets/ueber-uns-klimageraet-oesterreich.webp";
const ovenImage = "/assets/blog-backofen-heizt-nicht-wien.webp";

const heroAlt = "Geöffneter Waschmaschinenmotor mit Riemen, Spule und Verkabelung.";
const heroCaption = "Motor, Riemen, Kabel. Die Ursache sitzt oft hinter der Blende.";

const states = [
  { name: "Wien", href: "/einsatzgebiete/wien" },
  { name: "Niederösterreich", href: "/einsatzgebiete/niederoesterreich" },
  { name: "Linz", href: "/einsatzgebiete/linz" }
];

const scenes = [
  {
    image: laundryImage,
    alt: "Weiße Waschmaschine und Trockner nebeneinander unter einer Arbeitsplatte.",
    kicker: "Im Haus",
    title: "Haushaltsgeräte",
    text: "Waschmaschine, Geschirrspüler, Trockner, Kühlgerät, Backofen. Markenoffen, unter anderem Bosch, Siemens, Miele und AEG. Das Gerät bleibt stehen.",
    href: "/haushaltsgeraete",
    label: "Zu den Geräten"
  },
  {
    image: garageImage,
    alt: "Geschlossenes Sektionaltor neben einer roten Ziegelwand, daneben eine Ampel.",
    kicker: "Am Tor",
    title: "Garagentore",
    text: "Feder, Laufrollen, Antrieb und Sicherheitsprüfung. Das volle Spektrum in Wien und Niederösterreich.",
    href: "/garagentore",
    label: "Zu den Toren"
  },
  {
    image: ovenImage,
    alt: "Herd mit Knebeln und geschlossener Backofentür.",
    kicker: "In der Küche",
    title: "Backofen und Herd",
    text: "Oberhitze, Umluft, Temperatur. Der Ofen bleibt in der Nische, der Techniker kommt zur Küche.",
    href: "/haushaltsgeraete/backofen-herd-reparatur-wien",
    label: "Zum Backofen"
  },
  {
    image: climateImage,
    alt: "Weißes Außengerät einer Split-Klimaanlage an einer Wand unter einem Metalldach.",
    kicker: "An der Wand",
    title: "Klimageräte",
    text: "Split, Multi-Split und Monoblock. Filter reinigen geht selbst. Am Kältemittelkreis arbeitet nur zertifiziertes Personal.",
    href: "/klimageraete",
    label: "Zur Klima"
  }
];

const stance = [
  {
    title: "Technisch sauber",
    text: "Wir schauen auf Ursache, Sicherheit und darauf, ob sich die Reparatur rechnet. Nicht nur auf das Symptom."
  },
  {
    title: "Ehrliche Einschätzung",
    text: "Nicht jede Reparatur lohnt sich. Wenn ein Austausch sinnvoller ist, sagen wir das, bevor Teile bestellt werden."
  },
  {
    title: "Haushalt und Betrieb",
    text: "Privat, Hausverwaltung, Vermieter und Gewerbe. Mehrere Geräte im selben Haus an einem Termin, die Anfahrt dann nur einmal."
  }
];

const steps = [
  {
    title: "Fehlerbild verstehen",
    text: "Gerät, Marke, Modell, Standort und was es genau macht. Damit der Techniker vorbereitet kommt."
  },
  {
    title: "Wirtschaftlich entscheiden",
    text: "Alter, Zustand, Ersatzteilpreis und Aufwand. Die Preise stehen vorher, inklusive 20 % MwSt."
  },
  {
    title: "Klar kommunizieren",
    text: "Termin, Diagnose, Reparatur oder die Empfehlung zum Austausch. Sie wissen, was der nächste Schritt ist."
  }
];

const slipLines = [
  { label: "Anfang", value: "Wien" },
  { label: "Heute", value: "Wien, NÖ, Linz" },
  { label: "Gerät", value: "Haushalt, Tor, Klima" }
];

const faqs: HubFaqItem[] = [
  {
    question: "Wo sitzt MONTER?",
    answer:
      "Der Sitz ist in Floridsdorf, Rappgasse 1/6, 1210 Wien. MONTER ist ein österreichischer Reparaturbetrieb. Angefangen hat es in Wien. Die Angaben zum Rechtsträger stehen im Impressum."
  },
  {
    question: "Welche Geräte repariert ihr?",
    answer:
      "Haushaltsgeräte wie Waschmaschine, Geschirrspüler, Trockner, Kühlgerät und Backofen, dazu Garagentore und Klimageräte. Markenoffen, unter anderem Bosch, Siemens, Miele und AEG. Das Gerät bleibt im Haus, der Techniker kommt zum Termin."
  },
  {
    question: "Wie schnell gibt es einen Termin?",
    answer:
      "Termine meist binnen 1–2 Tagen. Bei Wasser oder einem ausgefallenen Kühlgerät versuchen wir im Wiener Raum oft noch am selben Tag. Den Termin stimmen wir ab. Montag bis Freitag 07:00–18:00 Uhr, Samstag und Sonntag geschlossen. Eine Anfrage ist noch kein Auftrag."
  },
  {
    question: "Arbeitet ihr nur in Wien?",
    answer:
      "Angefangen hat es in Wien. Heute fahren wir Wien und Niederösterreich vom Standort in Floridsdorf aus. In Linz sind Techniker vor Ort. Außerhalb dieser drei Gebiete nehmen wir keine Aufträge an."
  }
];

const pageDescription =
  "MONTER ist ein Reparaturbetrieb aus Wien. Einsatz in Wien, Niederösterreich und Linz. Haushaltsgeräte, Garagentore und Klima.";

export const metadata: Metadata = buildMetadata({
  title: "Über uns | In Wien begonnen | MONTER",
  description: pageDescription,
  path: "/ueber-uns",
  keywords: [
    "Reparaturbetrieb Österreich",
    "MONTER Wien",
    "Haushaltsgeräte Reparatur Österreich",
    "angefangen in Wien",
    "Garagentor Reparatur Wien"
  ],
  images: [`${siteConfig.siteUrl}${heroImage}`]
});

export const revalidate = 3600;

export default async function UeberUnsPage() {
  const googleReviews = await getGoogleReviews();
  const googleSummary = toGoogleRatingSummary(googleReviews);
  const pageUrl = `${siteConfig.siteUrl}/ueber-uns`;
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Über MONTER Reparatur & Service",
    description: pageDescription,
    inLanguage: "de-AT",
    about: { "@id": localBusinessId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      contentUrl: `${siteConfig.siteUrl}${heroImage}`,
      caption: heroCaption,
      description: heroAlt
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Start",
          item: siteConfig.siteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Über uns",
          item: pageUrl
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <section className="overflow-hidden bg-[color:var(--ink)] text-white">
        <div className="mx-auto grid max-w-[88rem] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <div className="absolute bottom-0 left-0 top-0 hidden w-2 bg-[color:var(--accent)] lg:block" aria-hidden="true" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent-on-dark)]">
              Österreichischer Reparaturbetrieb
            </p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              In Wien
              <span className="mt-1 block italic text-[color:var(--accent-on-dark)]">begonnen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/75">
              MONTER ist ein österreichischer Betrieb. Angefangen hat es in Wien, in Floridsdorf. Haushaltsgeräte,
              Garagentore und Klimageräte, markenoffen, beim Menschen zu Hause. Heute sind Techniker in sechs
              Bundesländern im Einsatz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/reparatur-buchen" className="btn-on-dark">
                <span>Termin anfragen</span>
              </Link>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark-ghost">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <figure className="relative min-h-[28rem] lg:min-h-full">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-[color:var(--ink)] lg:via-transparent lg:to-transparent" aria-hidden="true" />
            <figcaption className="absolute right-4 top-4 max-w-[14rem] bg-black/75 px-3 py-2 text-xs font-light text-white">
              {heroCaption}
            </figcaption>
            <div className="absolute bottom-4 left-4 right-4 border-4 border-[color:var(--accent)] bg-white p-4 text-[color:var(--ink)] sm:right-auto sm:w-60 lg:-left-8 lg:bottom-8 lg:-rotate-2" aria-hidden="true">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">Auftrag</p>
                <p className="font-display text-sm tracking-[0.14em] text-[color:var(--accent)]">AT</p>
              </div>
              <p className="font-display mt-2 text-4xl font-light leading-none tracking-tight">Wien</p>
              <dl className="mt-3 border-t border-[color:var(--border)]">
                {slipLines.map((line) => (
                  <div key={line.label} className="flex justify-between gap-3 border-b border-[color:var(--border)] py-1.5 text-sm">
                    <dt className="font-light text-[color:var(--muted)]">{line.label}</dt>
                    <dd className="text-right font-light">{line.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </figure>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display max-w-md text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Angefangen in Wien.
              <span className="mt-1 block italic text-[color:var(--accent)]">Niederösterreich und Linz.</span>
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:max-w-xl lg:justify-end">
              {states.map((state) => (
                <li key={state.name}>
                  <Link href={state.href} className="border-b border-current">
                    <span className={state.name === "Wien" ? "text-[color:var(--accent)]" : "text-[color:var(--ink)]"}>
                      {state.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 max-w-3xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {"Wien und Niederösterreich vom Standort in Floridsdorf. In Linz Techniker vor Ort. Wo der Techniker fährt, steht bei den "}
            <Link href="/einsatzgebiete" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Einsatzgebieten</span>
            </Link>{"."}
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <figure>
              <Image
                src={scenes[0].image}
                alt={scenes[0].alt}
                width={1600}
                height={1200}
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">
                Das Gerät bleibt im Haus. Der Techniker kommt zum Termin.
              </figcaption>
            </figure>
            <div>
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{scenes[0].kicker}</p>
              <h2 className="font-display mt-4 text-4xl font-light tracking-tight sm:text-5xl">{scenes[0].title}</h2>
              <p className="mt-4 max-w-md text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{scenes[0].text}</p>
              <Link href={scenes[0].href} className="link-arrow mt-6">
                <span>{scenes[0].label}</span>
              </Link>
            </div>
          </div>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {scenes.slice(1).map((scene) => (
              <li key={scene.title}>
                <figure>
                  <Image
                    src={scene.image}
                    alt={scene.alt}
                    width={1600}
                    height={1200}
                    sizes="(min-width: 768px) 28rem, 100vw"
                    className="aspect-[4/3] w-full object-cover object-center"
                  />
                  <figcaption className="mt-4">
                    <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">{scene.kicker}</p>
                    <h2 className="font-display mt-2 text-2xl font-light tracking-tight">{scene.title}</h2>
                    <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{scene.text}</p>
                  </figcaption>
                </figure>
                <Link href={scene.href} className="link-arrow mt-4">
                  <span>{scene.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <ul className="grid gap-10 md:grid-cols-3">
            {stance.map((item, index) => (
              <li key={item.title}>
                <p className="font-display text-5xl font-light italic tracking-tight text-[color:var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display mt-3 text-3xl font-light tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {"Für Objekte mit mehreren Geräten gibt es "}
            <Link href="/firmenkunden" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Firmenkunden</span>
            </Link>{", mit Wartungsvertrag und Vorrang, wenn Küche, Kühlung oder der Zugang über das Tor steht. Die Anfahrt für Wien und Niederösterreich steht unter "}
            <Link href="/preise" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Preise</span>
            </Link>{"."}
          </p>
        </div>
      </section>

      <section id="arbeitsweise" className="scroll-mt-28 bg-[color:var(--ink)] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent-on-dark)]">Arbeitsweise</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Erst verstehen, <span className="italic text-[color:var(--accent-on-dark)]">dann reparieren.</span>
            </h2>
            <p className="mt-6 max-w-md text-[1.02rem] font-light leading-relaxed text-white/70">
              Marke, Modellnummer vom Typenschild und der Fehlercode reichen oft, damit das passende Teil schon beim
              ersten Termin dabei ist.
            </p>
          </div>
          <ol>
            {steps.map((step, index) => (
              <li key={step.title} className="border-b border-white/15 py-7 first:pt-0 last:border-b-0">
                <div className="flex gap-6">
                  <p className="font-display text-3xl font-light italic text-[color:var(--accent-on-dark)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-light tracking-tight sm:text-3xl">{step.title}</h3>
                    <p className="mt-3 text-[1rem] font-light leading-relaxed text-white/70">{step.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Standort</p>
          <h2 className="font-display mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            Hier hat der Betrieb angefangen. Von Floridsdorf aus fahren wir alle 23 Wiener Bezirke und das nähere
            Niederösterreich.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {siteConfig.openingHoursDisplay[0]}
            <br />
            {siteConfig.openingHoursDisplay[1]}
          </p>
          <div className="mt-6">
            <GoogleRatingBadge initial={googleSummary} href={siteConfig.googleReviewsUrl} />
          </div>
          <a href={mapsHref} target="_blank" rel="noreferrer" className="link-arrow mt-6">
            In Google Maps öffnen
          </a>
          <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
            <Link href="/einsatzgebiete" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Alle Einsatzgebiete</span>
            </Link>{". Die gesetzlichen Angaben stehen im "}
            <Link href="/impressum" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Impressum</span>
            </Link>{". Interessenvertretung ist die Wirtschaftskammer Wien."}
          </p>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz zum Betrieb." items={faqs} />

      <section className="bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Gerät nennen, Termin abstimmen.
          </h2>
          <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            Marke, Modell und was es macht. Wir melden uns, meist innerhalb eines Werktags. Noch kein Auftrag.
          </p>
          <div className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-2">
            <Link href="/reparatur-buchen" className="group bg-[color:var(--accent)] p-8 text-white sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/80">Termin</p>
              <p className="font-display mt-5 text-4xl font-light tracking-tight sm:text-5xl">
                <span className="text-white">Reparatur buchen.</span>
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/80">
                Für Waschmaschine, Geschirrspüler, Kühlgerät, Tor und Klima.
              </p>
            </Link>
            <Link href="/kontakt" className="group bg-[color:var(--ink)] p-8 text-white sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">Schriftlich</p>
              <p className="font-display mt-5 text-4xl font-light tracking-tight sm:text-5xl">
                <span className="text-white">Anfrage senden.</span>
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70">
                Wenn das Telefon gerade nicht geht. Dieselbe Klärung, nur über das Formular.
              </p>
            </Link>
          </div>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="mt-8 inline-flex items-baseline gap-3 border-b border-[color:var(--ink)] pb-1"
          >
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">Oder direkt</span>
            <span className="font-display text-2xl font-light tracking-tight" data-phone-number>
              {siteConfig.phoneDisplay}
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
