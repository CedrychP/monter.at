import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { lieferPricesVatNote } from "../lieferPreise";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const steps = [
  {
    number: "01",
    title: "Aufstellen",
    text: "Freistehende Geräte kommen an den Aufstellort, werden ausgerichtet und angeschlossen."
  },
  {
    number: "02",
    title: "Einbau",
    text: "Backofen, Geschirrspüler und Einbau-Kühlschrank sitzen in der Nische. Front und Maß sollten vorab bekannt sein."
  },
  {
    number: "03",
    title: "Prüfung",
    text: "Bei Wasch- und Spülgeräten prüfen wir Dichtheit und Funktion. Eine kurze Einweisung gehört dazu."
  }
];

const places = [
  {
    label: "Freistehend",
    title: "Aufstellen und anschließen.",
    text: "Waschmaschine, Trockner, Geschirrspüler, Kühl- und Gefriergerät. Ausrichten, Anschluss, Funktionsprüfung."
  },
  {
    label: "Einbau",
    title: "Passgenau in der Nische.",
    text: "Backofen, Geschirrspüler und Kühlgerät zum Einbau: befestigt, angeschlossen, auf Dichtheit geprüft."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Was kostet Montage und Installation allein?",
    answer:
      "90 € inklusive 20 % MwSt., ohne Lieferung. Im Komfortplus-Paket für 150 € sind Lieferung, Montage, Auspacken und Altgerätmitnahme zusammen enthalten."
  },
  {
    question: "Schließen Sie auch Einbaugeräte an?",
    answer:
      "Ja. Geschirrspüler, Backofen und Einbau-Kühlschrank montieren wir in der Nische, inklusive Wasser, Abwasser und Strom, soweit der Anschluss am Aufstellort vorhanden ist. Front und Maß der Nische sollten vorab bekannt sein."
  },
  {
    question: "Liefern Sie auch, oder nur die Montage?",
    answer:
      "Beides. Lieferung allein kostet 85 €, Montage allein 90 €. Komfortplus für 150 € verbindet Lieferung, Montage, Auspacken und Altgerätmitnahme. Die Lieferpreise stehen auf der eigenen Seite, dieselben Beträge auch bei den Preisen."
  },
  {
    question: "Was gilt ohne Lift?",
    answer:
      "Wenn kein Lift vorhanden ist und das Gerät getragen werden muss, gilt eine Keine-Lift-Pauschale: 20 € bei normalen Geräten, 35 € bei größeren Geräten, jeweils inklusive 20 % MwSt. Welcher Satz gilt, sagen wir vor dem Termin."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Montage & Installation Wien | Großgeräte | MONTER",
  description:
    "Montage und Installation von Großgeräten in Wien: Anschluss an Strom, Wasser und Abfluss. Allein 90 €, im Komfortplus-Paket 150 € inklusive Lieferung. Inkl. MwSt.",
  path: "/lieferung-montage"
});

export default function LieferungMontagePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Montage &amp; Installation in Wien</p>
          <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <h1 className="font-display max-w-4xl text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Vom Karton zum laufenden Gerät.
            </h1>
            <p className="max-w-sm text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)] lg:pb-2">
              Aufstellen, anschließen, prüfen. In Wien und im näheren Niederösterreich. Montage allein 90 €.{" "}
              {lieferPricesVatNote}
            </p>
          </div>
          <ol className="mt-16 grid gap-px bg-[color:var(--border)] md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="bg-white px-6 py-8 sm:px-8 sm:py-10">
                <p className="font-display text-5xl font-light leading-none tracking-tight text-[color:var(--accent)]">
                  {step.number}
                </p>
                <h2 className="font-display mt-6 text-3xl font-light tracking-tight">{step.title}</h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[color:var(--accent)] text-white">
        <div className="mx-auto grid max-w-[88rem] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-white/75">Das Paket</p>
            <h2 className="font-display mt-4 text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Komfortplus
            </h2>
            <p className="font-display mt-4 text-6xl font-light leading-none tracking-tight tabular-nums sm:text-7xl">
              150 €
            </p>
          </div>
          <div>
            <p className="max-w-xl text-[1.15rem] font-light leading-relaxed text-white/90">
              Lieferung, Montage, Auspacken und Altgerätmitnahme in einem Termin. Die Montage allein wäre 90 €, die
              Lieferung allein 85 €.
            </p>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/75">
              Ab 50 km kommen 65 € dazu. Ohne Lift 20 € bei normalen Geräten, 35 € bei größeren. Auspacken allein 25 €,
              Altgerätmitnahme allein 35 €. Beides ist im Paket enthalten.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#anfrage" className="btn-on-dark">
                <span className="text-[color:var(--ink)]">Montage anfragen</span>
              </a>
              <Link href="/lieferpreise" className="btn-on-dark-ghost">
                <span>Alle Lieferpreise</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Strom, Wasser, Abfluss.
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
            {places.map((place) => (
              <article key={place.label}>
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  {place.label}
                </p>
                <h3 className="font-display mt-4 text-4xl font-light leading-tight tracking-tight">{place.title}</h3>
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">{place.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-2xl border-l-2 border-[color:var(--ink)] pl-5 text-[1.02rem] font-light leading-relaxed">
            Gerade bei Wasch- und Spülgeräten hängt der Wasserschaden am Anschluss. Wir schließen an und prüfen, statt
            das Gerät nur abzustellen.
          </p>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Montage und Anschluss, kurz geklärt." items={faqs} />

      <section id="anfrage" className="scroll-mt-28 border-t border-[color:var(--border)] bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto grid max-w-[88rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Gerät, Nische, Aufstellort.
            </h2>
            <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Nennen Sie das Gerät, ob es Einbau oder freistehend ist, und das Stockwerk. Wir sagen Montage und Termin.
              Die Anfrage ist noch kein Auftrag.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/kontakt" className="btn-primary">
              <span>Anschluss anfragen</span>
            </Link>
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
