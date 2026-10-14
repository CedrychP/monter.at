import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { lieferPrices, lieferPricesVatNote } from "../lieferPreise";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const included = ["Lieferung", "Montage", "Auspacken", "Altgerätmitnahme"];

const singleServices = ["Lieferung", "Montage & Installation", "Auspackservice", "Altgerätmitnahme"];

const singles = lieferPrices.filter((item) => singleServices.includes(item.service));
const surcharges = lieferPrices.filter(
  (item) => item.service.startsWith("Anfahrt") || item.service.startsWith("Keine-Lift")
);

const facts = [
  {
    title: "Gerät",
    text: "Waschmaschine, Trockner, Geschirrspüler oder Kühlgerät. Dazu, ob es freistehend oder zum Einbau ist."
  },
  {
    title: "Weg",
    text: "Adresse und Stockwerk. Ab 50 km und ohne Lift stehen die Zuschläge fest, bevor der Termin gilt."
  },
  {
    title: "Umfang",
    text: "Komfortplus, nur die Lieferung, oder Lieferung plus einzelne Bausteine. Die Anfrage ist noch kein Auftrag."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Was ist im Komfortplus-Paket enthalten?",
    answer:
      "Für 150 € inklusive 20 % MwSt. liefern wir das Gerät, montieren und schließen es an, packen es aus und nehmen das Altgerät mit. Die Anfahrtserhöhung ab 50 km und die Keine-Lift-Pauschale sind nicht im Paketpreis enthalten. Sie kommen dazu, wenn die Adresse oder das Stiegenhaus sie auslöst."
  },
  {
    question: "Was kostet die Lieferung allein?",
    answer:
      "85 € inklusive 20 % MwSt. Montage, Auspackservice und Altgerätmitnahme sind dann eigene Posten: Montage 90 €, Auspacken 25 €, Altgerätmitnahme 35 €."
  },
  {
    question: "Wann kommt die Anfahrtserhöhung von 65 €?",
    answer:
      "Ab einer Lieferentfernung von 50 km, einmal pro Auftrag, zusätzlich zur Lieferung. Ob die Adresse darüber liegt, sagen wir vor dem Termin."
  },
  {
    question: "Was ist die Keine-Lift-Pauschale?",
    answer:
      "Wenn kein Lift vorhanden ist und das Gerät getragen werden muss: 20 € bei normalen Geräten, 35 € bei größeren Geräten, jeweils inklusive 20 % MwSt. Welcher Satz für Ihr Gerät gilt, sagen wir vor dem Termin."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Lieferpreise Wien | Großgeräte ab 85 € | MONTER",
  description:
    "Lieferpreise für Großgeräte in Wien: Komfortplus 150 € mit Lieferung, Montage, Auspacken und Altgerätmitnahme. Lieferung allein 85 €, ab 50 km plus 65 €. Inkl. MwSt.",
  path: "/lieferpreise"
});

export default function LieferpreisePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="bg-[color:var(--ink)] text-white">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-on-dark)]">
            Lieferpreise in Wien
          </p>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <h1 className="font-display text-balance text-6xl font-light leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                Komfortplus.
              </h1>
              <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/75">
                Ein Termin. Das Gerät kommt, wird montiert, ausgepackt, und das alte geht mit.{" "}
                {lieferPricesVatNote}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#anfrage" className="btn-on-dark">
                  <span className="text-[color:var(--ink)]">Komfortplus anfragen</span>
                </a>
                <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark-ghost">
                  <span>
                    Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                  </span>
                </a>
              </div>
            </div>
            <p className="font-display text-7xl font-light leading-none tracking-tight text-[color:var(--gold-on-dark)] tabular-nums sm:text-8xl lg:text-9xl">
              150 €
            </p>
          </div>
          <ul className="mt-14 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4">
            {included.map((item) => (
              <li key={item} className="border-b border-white/15 px-1 py-5 sm:border-b-0 sm:px-4 sm:py-6">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold-on-dark)]">
                  Enthalten
                </p>
                <p className="font-display mt-2 text-2xl font-light tracking-tight sm:text-3xl">{item}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/60">
            Ab 50 km und ohne Lift kommen die Zuschläge dazu. Sie sind nicht in den 150 € enthalten.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Einzeln, wenn das Paket zu viel ist.
            </h2>
            <p className="max-w-sm text-sm font-light leading-relaxed text-[color:var(--muted)]">
              {lieferPricesVatNote} Dieselben Beträge stehen bei den{" "}
              <Link href="/preise#lieferung" className="border-b border-current">
                <span className="text-[color:var(--ink)]">Preisen</span>
              </Link>.
            </p>
          </div>
          <ul className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
            {singles.map((item) => (
              <li key={item.service} className="bg-[color:var(--bg-muted)] px-6 py-8 sm:px-8 sm:py-10">
                <p className="font-display text-6xl font-light leading-none tracking-tight tabular-nums sm:text-7xl">
                  {item.price}
                </p>
                <h3 className="font-display mt-4 text-2xl font-light tracking-tight">{item.service}</h3>
                <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Zuschläge</p>
            <h2 className="font-display mt-5 text-balance text-4xl font-light leading-tight tracking-tight">
              Nur wenn der Weg sie auslöst.
            </h2>
          </div>
          <ul>
            {surcharges.map((item) => (
              <li
                key={item.service}
                className="grid gap-2 border-t border-[color:var(--border)] py-6 last:border-b sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <div>
                  <h3 className="font-display text-2xl font-light tracking-tight">{item.service}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.note}</p>
                </div>
                <p className="font-display text-4xl font-light tracking-tight text-[color:var(--accent)] tabular-nums">
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Drei Angaben, dann der Betrag.
          </h2>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {facts.map((fact) => (
              <li key={fact.title} className="border-t-2 border-[color:var(--ink)] pt-5">
                <h3 className="font-display text-3xl font-light tracking-tight">{fact.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{fact.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Montage und Anschluss allein kosten 90 € und sind im Komfortplus enthalten. Der Ablauf steht unter{" "}
            <Link href="/lieferung-montage" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Montage &amp; Installation</span>
            </Link>.
          </p>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt, bevor das Gerät unterwegs ist." items={faqs} />

      <section id="anfrage" className="scroll-mt-28 bg-[color:var(--accent)] text-white">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/80">Komfortplus</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              150 €, ein Termin.
            </h2>
            <p className="mt-4 text-[1.02rem] font-light leading-relaxed text-white/80">
              Gerät, Adresse, Stockwerk. Wir nennen Lieferung, Zuschläge und Termin. Die Anfrage ist noch kein Auftrag.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/kontakt" className="btn-on-dark">
              <span className="text-[color:var(--ink)]">Termin anfragen</span>
            </Link>
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark-ghost">
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
