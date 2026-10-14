import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { notdienstJobs, notdienstTariffs, notdienstVatNote } from "../notdienstPrices";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const faqs: HubFaqItem[] = [
  {
    question: "Wann gilt der Notdienst?",
    answer:
      "Von 18:00 bis 08:00 in der Früh. Montag bis Freitag von 18 bis 22 Uhr kostet Anfahrt und Diagnose 180 €. Am Wochenende in demselben Fenster 216 €. Von 22 Uhr bis 8 Uhr in der Früh 240 €. Alle Beträge sind brutto, inklusive 20 % MwSt."
  },
  {
    question: "Ist der Notdienst ein garantierter Termin?",
    answer:
      "Nein. Rufen Sie an. Wir sagen, ob in dem Fenster noch ein Techniker frei ist. Die Anfrage ist noch kein Auftrag."
  },
  {
    question: "Was kostet der Wasserschaden Express?",
    answer:
      "600 € brutto. Darin sind Wasser stoppen, alles reinigen und die Reparatur des Geräts, wenn sie möglich ist."
  },
  {
    question: "Kommen die Arbeitspreise zur Anfahrt dazu?",
    answer:
      "Ja. Ablaufpumpe, Türversiegelung, Wasserzulauf, Geschirrspüler und Heizsystem sind eigene Posten und beginnen bei den genannten Bruttosätzen. Den genauen Betrag nennen wir vor dem Einbau."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Notdienst Wien | 18:00–08:00 | MONTER",
  description:
    "Notdienst für Haushaltsgeräte von 18:00 bis 08:00. Abend 180 €, Wochenende 216 €, Nacht 240 €, jeweils brutto für Anfahrt und Diagnose. Wasserschaden Express 600 €.",
  path: "/notdienst"
});

export default function NotdienstPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="bg-[color:var(--ink)] text-white">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-on-dark)]">
            Notdienst
          </p>
          <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <h1 className="font-display text-balance text-5xl font-light leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              18:00
              <span className="mt-1 block text-[color:var(--accent-on-dark)]">bis 08:00.</span>
            </h1>
            <p className="max-w-md text-[1.05rem] font-light leading-relaxed text-white/75">
              Nach der regulären Zeit. Rufen Sie an, wir sagen, ob in dem Fenster noch ein Techniker frei ist.{" "}
              {notdienstVatNote}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark">
              <span className="text-[color:var(--ink)]">
                Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </span>
            </a>
            <a href="#einsaetze" className="btn-on-dark-ghost">
              <span>Einsätze und Preise</span>
            </a>
          </div>
          <ul className="mt-14 grid gap-px bg-white/15 md:grid-cols-3">
            {notdienstTariffs.map((tariff) => (
              <li key={tariff.service} className="bg-[color:var(--ink)] px-6 py-8 sm:px-8">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-on-dark)]">
                  {tariff.service}
                </p>
                <p className="font-display mt-3 text-3xl font-light tracking-tight">{tariff.window}</p>
                <p className="font-display mt-4 text-6xl font-light leading-none tracking-tight tabular-nums sm:text-7xl">
                  {tariff.price}
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/65">{tariff.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="einsaetze" className="scroll-mt-28 bg-[color:var(--accent)] text-white">
        <div className="mx-auto grid max-w-[88rem] items-end gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/75">Wasserschaden</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-tight tracking-tight sm:text-6xl">
              Express.
            </h2>
            <p className="mt-4 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/85">
              Wasser stoppen, alles reinigen und das Gerät reparieren, wenn es möglich ist.
            </p>
          </div>
          <p className="font-display text-6xl font-light leading-none tracking-tight tabular-nums sm:text-7xl">600 €</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Was im Notdienst dazu kommt.
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {notdienstVatNote} Die Arbeiten kommen zur Anfahrt und Diagnose dazu. Dieselben Sätze stehen auch bei den{" "}
            <Link href="/preise#notdienst" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Preisen</span>
            </Link>.
          </p>
          <ul className="mt-12 border-t border-[color:var(--ink)]">
            {notdienstJobs
              .filter((job) => job.service !== "Wasserschaden Express")
              .map((job) => (
                <li
                  key={job.service}
                  className="grid gap-3 border-b border-[color:var(--border)] py-7 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-10"
                >
                  <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                      {job.window}
                    </p>
                    <h3 className="font-display mt-2 text-3xl font-light tracking-tight">{job.service}</h3>
                    <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      {job.note}
                    </p>
                  </div>
                  <p className="font-display text-4xl font-light tracking-tight tabular-nums sm:text-5xl">{job.price}</p>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt, bevor Sie anrufen." items={faqs} />

      <section className="border-t border-[color:var(--border)] bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Fehlerbild und Adresse.
            </h2>
            <p className="mt-4 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Wasser, Gerät, Stockwerk. Wir sagen, ob der Notdienst in dem Fenster noch geht.
            </p>
          </div>
          <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
            <span data-phone-number>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
