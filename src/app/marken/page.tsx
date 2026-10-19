import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { servedAreas } from "../einsatzgebiete/regionPages";
import { buildMetadata } from "../pageMetadata";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { brandAlphabetGroups, brandOverview, brandPages } from "./brands";

const description =
  "Markenoffene Haushaltsgeräte-Reparatur in Wien: Bosch, Miele, Siemens, AEG, Beko, Gorenje und Bauknecht, dazu die übrigen Marken ohne eigene Seite. Backofen und Herd sind zwei Geräte.";

const faqs: HubFaqItem[] = [
  {
    question: "Reparieren Sie meine Marke, wenn sie nicht in der Liste steht?",
    answer:
      "In der Regel ja. Die sieben Markenseiten sind die häufigsten Geräte bei uns, keine Abgrenzung. Rufen Sie mit Marke und Modellnummer an, dann klären wir die Ersatzteillage."
  },
  {
    question: "Ist eine Vertragswerkstatt nicht besser als ein markenoffener Betrieb?",
    answer:
      "Innerhalb der Herstellergarantie ist der Weg über den Hersteller meist sinnvoll, weil die Leistung dort abgedeckt ist. Danach ist ein markenoffener Betrieb häufig schneller und kann mehrere Geräte unterschiedlicher Marken bei einem Termin erledigen."
  },
  {
    question: "Verwenden Sie Originalersatzteile?",
    answer:
      "Wir arbeiten bevorzugt mit Originalteilen. Wo diese nicht mehr lieferbar oder unverhältnismäßig teuer sind, setzen wir geprüfte Alternativteile ein und sagen Ihnen das vorher. Sie entscheiden."
  },
  {
    question: "Was bedeutet der Fehlercode auf meinem Display?",
    answer:
      "Jeder Hersteller nutzt eine eigene Systematik, und dieselbe Nummer gilt nicht für jedes Gerät der Marke. Der Code benennt den Bereich, nicht das Bauteil. Auf der Geräteseite der Marke stehen die Anzeigen, die wir dafür schon führen."
  },
  {
    question: "Wo finde ich die Modellnummer meines Geräts?",
    answer:
      "Auf dem Typenschild: bei Waschmaschinen und Trocknern meist im Türrahmen oder auf der Rückseite, bei Geschirrspülern an der Türkante, bei Backöfen im Türrahmen, bei Kochfeldern auf dem Feld und bei Kühlgeräten innen an der Seitenwand. Ein Foto genügt."
  }
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marken — Haushaltsgeräte Reparatur Wien | MONTER Service",
    description,
    url: `${siteConfig.siteUrl}/marken`,
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
        name: "Marken — Haushaltsgeräte Reparatur Wien | MONTER Service",
        item: `${siteConfig.siteUrl}/marken`
      }
    ]
  }
];

const brandPageBySearchName = new Map(brandPages.map((brand) => [brand.brand.toUpperCase(), brand.slug]));

export const metadata: Metadata = buildMetadata({
  title: "Marken — Haushaltsgeräte Reparatur Wien | MONTER Service",
  description,
  path: "/marken"
});

export default function MarkenHubPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
              <li>
                <Link href="/" className="hover:text-[color:var(--ink)]">
                  Start
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[color:var(--ink)]">Marken</li>
            </ol>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Markenoffen</p>
            <h1 className="font-display mt-6 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">Reparatur nach Marke.</h1>
            <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">
              Sieben Marken haben eigene Seiten, jede mit Waschmaschine, Geschirrspüler, Trockner, Backofen, Herd, Kühlschrank und Tiefkühlgerät. Backofen und Herd sind zwei URLs. In der Liste stehen {brandOverview.length} Namen. Verlinkt sind die sieben mit eigener Seite.
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
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">Die sieben Markenseiten.</h2>
            <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">
              Wir sind keine Vertragswerkstatt eines Herstellers. In einem Haushalt stehen selten nur Geräte einer Marke. Innerhalb der Herstellergarantie bleibt der Weg über den Hersteller der richtige, weil die Leistung dort abgedeckt ist.
            </p>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--bg-muted)]">
              <Image
                src="/assets/haushalt-foto-uebersicht.webp"
                alt="Weiße Waschmaschine neben einem Geschirrspüler in einer hellen Küche."
                fill
                priority
                loading="eager"
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</figcaption>
          </figure>
        </div>
        <div className="mx-auto max-w-[88rem] px-5 pb-16 sm:px-8 sm:pb-20">
          <ul className="border-t border-[color:var(--border)]">
            {brandPages.map((brand) => (
              <li key={brand.slug} className="border-b border-[color:var(--border)]">
                <Link href={`/marken/${brand.slug}`} className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr] sm:items-baseline">
                  <span className="font-display text-3xl font-light tracking-tight text-[color:var(--ink)]">{brand.brand}</span>
                  <span className="text-lg font-light leading-8 text-[color:var(--muted)]">{brand.hubTeaser}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">Worauf es ankommt.</h2>
          <ul className="mt-10 border-t border-[color:var(--border)]">
            <li className="grid items-start gap-4 border-b border-[color:var(--border)] py-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
              <h3 className="font-display text-2xl font-light tracking-tight">Ersatzteile</h3>
              <p className="text-lg font-light leading-8 text-[color:var(--muted)]">
                Bei Bosch, Siemens und Miele sind Verschleiß- und Elektronikteile lange verfügbar. Bei Handelsmarken dauert die Beschaffung häufiger. Dann prüfen wir, ob ein baugleiches Teil aus derselben Plattform passt, und sagen das vorher.
              </p>
            </li>
            <li className="grid items-start gap-4 border-b border-[color:var(--border)] py-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
              <h3 className="font-display text-2xl font-light tracking-tight">Fehlercodes</h3>
              <p className="text-lg font-light leading-8 text-[color:var(--muted)]">
                Der Code sagt, welcher Bereich eine Störung meldet. Dieselbe Nummer ist nicht die Diagnose für jedes Gerät der Marke. Notieren Sie ihn trotzdem, bevor der Strom aus ist.
              </p>
            </li>
            <li className="grid items-start gap-4 border-b border-[color:var(--border)] py-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
              <h3 className="font-display text-2xl font-light tracking-tight">Einsatzgebiet</h3>
              <p className="text-lg font-light leading-8 text-[color:var(--muted)]">
                Wien und das nähere Niederösterreich fahren wir regelmäßig an. In Linz sind Techniker vor Ort. Die Gebiete stehen bei den{" "}
                <Link href="/einsatzgebiete"><span className="text-[color:var(--accent)]">Einsatzgebieten</span></Link>.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">{brandOverview.length} Marken im Service.</h2>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Namen mit eigener Seite sind verlinkt. Alle anderen reparieren wir genauso, nur ohne eigene Detailseite.
          </p>
          <div className="mt-12 grid gap-12">
            {brandAlphabetGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h3 className="border-b border-[color:var(--border)] pb-3 font-display text-2xl font-light tracking-tight">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {group.brands.map((name) => {
                    const slug = brandPageBySearchName.get(name);
                    return (
                      <li key={name} className="text-sm font-light">
                        {slug ? (
                          <Link href={`/marken/${slug}`}>
                            <span className="text-[color:var(--accent)]">{name}</span>
                          </Link>
                        ) : (
                          <span className="text-[color:var(--muted)]">{name}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Marken: kurz beantwortet." items={faqs} />

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Marke, Modell, was es gerade tut.</h2>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Ein Foto vom Typenschild und der Fehlercode, notiert bevor der Strom aus ist, sagen uns, welche Teile mitkommen. Die Anfrage ist noch kein Auftrag.
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
