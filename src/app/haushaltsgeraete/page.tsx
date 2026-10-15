import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { servedAreas } from "../einsatzgebiete/regionPages";
import { buildMetadata } from "../pageMetadata";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { appliancePages } from "./appliancePages";
import { applianceProblemPages } from "./applianceProblems";

const description =
  "Haushaltsgeräte Reparatur: pumpt nicht ab, kühlt nicht, heizt nicht, Fehlercodes. Waschmaschine bis Fernseher, markenoffen in Wien, NÖ und Linz.";

const devicePhotos: Record<string, { src: string; alt: string }> = {
  waschmaschine: {
    src: "/assets/haushalt-foto-waschmaschine.webp",
    alt: "Weiße Frontlader-Waschmaschine in einer schmalen Waschküche, Tür geschlossen."
  },
  geschirrspueler: {
    src: "/assets/haushalt-foto-geschirrspueler.webp",
    alt: "Einbaugeschirrspüler mit Holzfront in einer Küchenzeile, Tür geschlossen."
  },
  "backofen-herd": {
    src: "/assets/haushalt-foto-backofen.webp",
    alt: "Einbaubackofen unter einem schwarzen Glaskeramikfeld, Ofentür geschlossen."
  },
  trockner: {
    src: "/assets/haushalt-foto-trockner.webp",
    alt: "Weißer Trockner neben einem Wäschekorb, Tür geschlossen."
  },
  kuehlschrank: {
    src: "/assets/haushalt-foto-kuehlschrank.webp",
    alt: "Kühl-Gefrierkombination aus Edelstahl in einer Küchennische, Türen geschlossen."
  },
  tiefkuehl: {
    src: "/assets/haushalt-foto-tiefkuehl.webp",
    alt: "Weißer Gefrierschrank mit senkrechtem Griff neben einem Vorratsregal, Tür geschlossen."
  },
  waschtrockner: {
    src: "/assets/haushalt-foto-waschtrockner.webp",
    alt: "Waschmaschine und Trockner übereinander in einer schmalen Nische."
  },
  dunstabzug: {
    src: "/assets/haushalt-foto-dunstabzug.webp",
    alt: "Schwarze Schräghaube über einem Gaskochfeld."
  },
  fernseher: {
    src: "/assets/haushalt-foto-fernseher.webp",
    alt: "Schwarzer Fernseher mit dunklem Bildschirm auf einem Holzsideboard."
  }
};

const faqs: HubFaqItem[] = [
  {
    question: "Welche Daten brauchen Sie für eine erste Einschätzung?",
    answer:
      "Gerätetyp, Marke, Modellnummer vom Typenschild, den angezeigten Fehlercode und eine kurze Beschreibung des Problems. Mit diesen Angaben können wir am Telefon meist schon sagen, welche Teile wir mitbringen sollten."
  },
  {
    question: "Lohnt sich die Reparatur bei einem älteren Gerät?",
    answer:
      "Das hängt an Gerätealter, Zustand, Ersatzteilpreis und Energieverbrauch. Als Orientierung: Liegt die Reparatur deutlich unter der Hälfte eines gleichwertigen Neugeräts und ist das Gerät sonst in Ordnung, ist die Instandsetzung meist sinnvoll. Wir rechnen das im Einzelfall offen durch."
  },
  {
    question: "Reparieren Sie auch Einbaugeräte?",
    answer:
      "Ja. Einbaugeräte in Küchenzeilen bauen wir für die Reparatur fachgerecht aus und wieder ein. Bei Wasserschäden an Einbaugeräten ist Eile wichtig, damit Möbelkorpus und Boden keinen Folgeschaden nehmen."
  },
  {
    question: "Wie schnell ist ein Termin möglich?",
    answer:
      "Das hängt von Bezirk und Auslastung ab. Dringende Fälle wie Wasseraustritt oder ein ausgefallenes Tiefkühlgerät ziehen wir vor — rufen Sie in solchen Fällen direkt an, das ist deutlich schneller als das Formular."
  },
  {
    question: "Reparieren Sie auch alte Elektrogeräte und Altgeräte?",
    answer:
      "Ja, solange Ersatzteile beschaffbar sind. Bei älteren Haushaltsgeräten prüfen wir zuerst die Teilelage und rechnen den Aufwand gegen ein gleichwertiges Neugerät. Wenn die Reparatur sich nicht mehr lohnt, sagen wir das vor der Bestellung."
  },
  {
    question: "Kommen Sie auch nach Klosterneuburg, Vösendorf oder Linz?",
    answer:
      "Ja. Klosterneuburg, Vösendorf und das nähere Wiener Umland fahren wir regelmäßig an. In Linz sind Techniker vor Ort im Einsatz. Die Linzer Geräteseiten bleiben unter dem jeweiligen Gerät erreichbar."
  }
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Haushaltsgeräte Reparatur Wien | MONTER",
    description,
    url: `${siteConfig.siteUrl}/haushaltsgeraete`,
    areaServed: servedAreas.map((area) => ({ "@type": area.type, name: area.name })),
    provider: localBusinessProviderRef
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Haushaltsgeräte Reparatur Wien | MONTER",
        item: `${siteConfig.siteUrl}/haushaltsgeraete`
      }
    ]
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Haushaltsgeräte Reparatur Wien | MONTER",
  description,
  path: "/haushaltsgeraete"
});

export default function HaushaltsgeraeteHubPage() {
  const washing = appliancePages.filter((page) =>
    ["waschmaschine", "geschirrspueler", "trockner", "waschtrockner"].includes(page.slug)
  );
  const living = appliancePages.filter((page) => !washing.some((item) => item.slug === page.slug));

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section id="probleme" className="border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 pb-6 pt-12 sm:px-8 sm:pt-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
              <li>
                <Link href="/" className="hover:text-[color:var(--ink)]">
                  Start
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[color:var(--ink)]">Haushaltsgeräte</li>
            </ol>
          </nav>
          <div className="mt-10 max-w-3xl">
            <h1 className="font-display text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Haushaltsgeräte, nach dem Fehlerbild.
            </h1>
            <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">
              Pumpt das Gerät nicht ab, kühlt es nicht, oder steht eine Zahl im Display? Wir prüfen zuerst das Fehlerbild, dann das Gerät. Markenoffen an Waschmaschine, Geschirrspüler, Backofen, Kühl- und Tiefkühlgerät, Trockner, Dunstabzug und Fernseher, in Wien, im näheren Niederösterreich und in Linz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={`tel:${siteConfig.phoneHref}`}>
                <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </a>
              <Link className="btn-ghost" href="/reparatur-buchen">
                Termin anfragen
              </Link>
            </div>
          </div>

          <h2 className="mt-16 font-display text-lg font-light text-[color:var(--muted)]">Was das Gerät gerade tut.</h2>
          <ul className="mt-4 border-t border-[color:var(--border)]">
            {applianceProblemPages.map((problem) => (
              <li key={problem.slug} className="border-b border-[color:var(--border)]">
                <Link
                  href={`/haushaltsgeraete/${problem.slug}`}
                  className="group grid gap-x-10 gap-y-1 py-6 sm:grid-cols-[16rem_1fr] sm:items-baseline sm:py-7"
                >
                  <h3 className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent)] sm:text-3xl">
                    {problem.category}
                  </h3>
                  <span className="text-base font-light leading-7 text-[color:var(--muted)]">{problem.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Danach das Gerät</p>
              <h2 className="font-display mt-6 max-w-2xl text-4xl font-light tracking-tight sm:text-5xl">Nach dem Gerät.</h2>
              <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">
                Anfahrt und Diagnose sind pauschaliert, Arbeitszeit und Material werden ausgewiesen.{" "}
                <Link href="/preise">
                  <span className="text-[color:var(--accent)]">Preise und Pauschalen</span>
                </Link>.
              </p>
            </div>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/assets/haushalt-foto-uebersicht.webp"
                  alt="Weiße Waschmaschine neben einem Geschirrspüler in einer hellen Küche."
                  fill
                  sizes="(min-width: 1024px) 40rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</figcaption>
            </figure>
          </div>

          <h3 className="mt-14 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">Waschen und Spülen</h3>
          <ul className="mt-4 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {washing.map((page) => {
              const photo = devicePhotos[page.slug];
              return (
                <li key={page.slug} className="bg-white">
                  <Link href={`/haushaltsgeraete/${page.slug}`} className="block h-full">
                    {photo ? (
                      <div className="relative aspect-[4/3] border-b border-[color:var(--border)] bg-[color:var(--bg-muted)]">
                        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 20rem, 100vw" className="object-cover" />
                      </div>
                    ) : null}
                    <div className="px-6 py-8">
                      <h3 className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{page.category}</h3>
                      <span className="mt-4 block text-base font-light leading-7 text-[color:var(--muted)]">{page.short}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <h3 className="mt-14 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">Küche und Wohnen</h3>
          <ul className="mt-4 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {living.map((page) => {
              const photo = devicePhotos[page.slug];
              return (
                <li key={page.slug} className="bg-white">
                  <Link href={`/haushaltsgeraete/${page.slug}`} className="block h-full">
                    {photo ? (
                      <div className="relative aspect-[4/3] border-b border-[color:var(--border)] bg-[color:var(--bg-muted)]">
                        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 28rem, 100vw" className="object-cover" />
                      </div>
                    ) : null}
                    <div className="px-6 py-8">
                      <h3 className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{page.category}</h3>
                      <span className="mt-4 block text-base font-light leading-7 text-[color:var(--muted)]">{page.short}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Haushaltsgeräte: kurz beantwortet." items={faqs} />

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Gerät, Modell, was es gerade tut.</h2>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Die Modellnummer vom Typenschild und der Fehlercode, notiert bevor der Strom aus ist, sagen uns, welche Teile mitkommen. Wasseraustritt und ein ausgefallenes Tiefkühlgerät klären wir am Telefon vorrangig. Die Anfrage ist noch kein Auftrag.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href={`tel:${siteConfig.phoneHref}`}>
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
            <Link className="btn-ghost" href="/reparatur-buchen">
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
