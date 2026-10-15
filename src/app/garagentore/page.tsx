import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { garagePages } from "./garagePages";

const description =
  "Garagentor Reparatur in Wien: öffnet nicht, schließt nicht, klemmt, Feder und Antrieb. Sektionaltor, Schwingtor, Rolltor, markenoffen in Wien und NÖ.";

const problems = [
  {
    href: "/garagentore/federwechsel",
    title: "Feder gebrochen",
    text: "Lauter Knall, das Tor ist plötzlich bleischwer."
  },
  {
    href: "/garagentore/oeffnet-nicht",
    title: "Öffnet nicht",
    text: "Still, ein Summen, oder auch von Hand nicht zu heben."
  },
  {
    href: "/garagentore/schliesst-nicht",
    title: "Schließt nicht",
    text: "Kurz vor dem Boden fährt es wieder auf."
  },
  {
    href: "/garagentore/klemmt",
    title: "Klemmt",
    text: "Schleift, ruckelt oder hängt in der Führung."
  },
  {
    href: "/garagentore/fehlercodes",
    title: "Fehlercode",
    text: "Anzeige oder Blinkzahl notieren. Dieselbe Zahl gilt nur in einer Baureihe."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Kann ich eine gebrochene Torfeder selbst tauschen?",
    answer:
      "Bitte nicht. Torsionsfedern stehen auch gebrochen unter hoher Spannung und tragen fast das gesamte Torgewicht. Ohne Spannstäbe und ohne Sicherung des Torblatts besteht ernsthafte Verletzungsgefahr. Benutzen Sie das Tor bis zum Termin nicht weiter."
  },
  {
    question: "Mein Antrieb reagiert nicht mehr — ist der Motor kaputt?",
    answer:
      "Meist nicht. In vielen Fällen liegt die Ursache bei Handsender, Funkempfänger, Endlagen, Lichtschranke oder Steuerplatine. Wir prüfen in dieser Reihenfolge, damit kein intakter Motor unnötig getauscht wird."
  },
  {
    question: "Reparieren Sie auch alte Tore ohne Originalteile?",
    answer:
      "Ja. Bei älteren Toren, für die keine Originalteile mehr lieferbar sind, arbeiten wir mit passenden Alternativbauteilen oder gefertigten Ersatzteilen. Das hält bestehende Tore oft viele Jahre länger im Betrieb."
  },
  {
    question: "Wie oft sollte ein Garagentor gewartet werden?",
    answer:
      "Für private Garagen genügt in der Regel eine jährliche Wartung. Bei Sammelgaragen und gewerblichen Anlagen mit vielen Torfahrten pro Tag empfehlen wir halbjährliche Kontrollen — kraftbetätigte Tore im gewerblichen Umfeld unterliegen zudem einer regelmäßigen Prüfpflicht."
  },
  {
    question: "Wie schnell sind Sie bei einem blockierten Tor vor Ort?",
    answer:
      "Ein blockiertes Tor behandeln wir vorrangig, weil damit oft ein Fahrzeug eingeschlossen ist. Rufen Sie in solchen Fällen direkt an — telefonisch klären wir Fehlerbild und den nächstmöglichen Termin sofort."
  },
  {
    question: "Reparieren Sie Garagentore in ganz Wien?",
    answer:
      "Ja — alle Bezirke, plus das nähere Niederösterreich. Sektionaltor, Schwingtor, Rolltor, Holz- und Designtore. Nennen Sie Torart und Antriebsmarke, dann wissen wir, welche Teile wir mitbringen."
  }
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garagentore Wien | Reparatur & Service | MONTER",
    description,
    url: `${siteConfig.siteUrl}/garagentore`,
    areaServed: [
      { "@type": "City", name: "Wien" },
      { "@type": "State", name: "Niederösterreich" }
    ],
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
        name: "Garagentore Wien | Reparatur & Service | MONTER",
        item: `${siteConfig.siteUrl}/garagentore`
      }
    ]
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Garagentore Wien | Reparatur & Service | MONTER",
  description,
  path: "/garagentore"
});

export default function GaragentoreHubPage() {
  const doors = garagePages.slice(0, 2);
  const drive = garagePages.slice(2);

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
              <li className="text-[color:var(--ink)]">Garagentore</li>
            </ol>
          </nav>
          <div className="mt-10 max-w-3xl">
            <h1 className="font-display text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Garagentore in Wien.
            </h1>
            <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">
              Öffnet das Tor nicht, fährt es vor dem Boden wieder auf, oder war da ein Knall und es ist bleischwer? Wir prüfen Mechanik und Elektronik in dieser Reihenfolge, markenoffen an Sektional-, Schwing- und Rolltoren sowie an Holz- und Designtoren, in Wien und im näheren Niederösterreich.
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

          <h2 className="mt-16 font-display text-lg font-light text-[color:var(--muted)]">Was das Tor gerade tut.</h2>
          <ul className="mt-4 border-t border-[color:var(--border)]">
            {problems.map((problem) => (
              <li key={problem.href} className="border-b border-[color:var(--border)]">
                <Link
                  href={problem.href}
                  className="group grid gap-x-10 gap-y-1 py-6 sm:grid-cols-[16rem_1fr] sm:items-baseline sm:py-7"
                >
                  <h3 className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent)] sm:text-3xl">
                    {problem.title}
                  </h3>
                  <span className="text-base font-light leading-7 text-[color:var(--muted)]">{problem.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Danach die Bauart</p>
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-light tracking-tight sm:text-5xl">Nach der Bauart.</h2>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Häufige Antriebe sind Hörmann, Sommer, Marantec, Novoferm und Chamberlain. Anfahrt und Erstprüfung sind pauschaliert, Arbeitszeit und Material werden ausgewiesen.{" "}
            <Link href="/preise"><span className="text-[color:var(--accent)]">Preise und Pauschalen</span></Link>.
          </p>

          <h3 className="mt-14 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">Tore</h3>
          <ul className="mt-4 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2">
            {doors.map((page) => (
              <li key={page.slug} className="bg-white">
                <Link href={`/garagentore/${page.slug}`} className="block h-full px-6 py-8">
                  <h3 className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{page.category}</h3>
                  <span className="mt-4 block text-base font-light leading-7 text-[color:var(--muted)]">{page.short}</span>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">Antrieb und Reparatur</h3>
          <ul className="mt-4 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {drive.map((page) => (
              <li key={page.slug} className="bg-white">
                <Link href={`/garagentore/${page.slug}`} className="block h-full px-6 py-8">
                  <h3 className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{page.category}</h3>
                  <span className="mt-4 block text-base font-light leading-7 text-[color:var(--muted)]">{page.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Garagentore: kurz beantwortet." items={faqs} />

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Torart, Antrieb, was es gerade tut.</h2>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Daran erkennen wir, ob Feder, Laufwerk oder Steuerung zuerst dran ist, und welche Teile mitkommen. Ein Tor, das ein Fahrzeug einschließt, klären wir am Telefon vorrangig. Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird. Die Anfrage ist noch kein Auftrag.
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
