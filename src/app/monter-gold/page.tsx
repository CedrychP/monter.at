import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, comingSoonRobots } from "../pageMetadata";
import GoldSignup from "./GoldSignup";

const firstRound = [
  {
    title: "Vor allen späteren Anmeldungen",
    text: "Die Reihenfolge ist die Liste. Wer sich jetzt einträgt, steht vor denen, die erst zum Start kommen."
  },
  {
    title: "Dinge, die danach wegfallen",
    text: "Zugänge und Konditionen dieser ersten Runde werden später nicht mehr vergeben."
  },
  {
    title: "Nachricht vor dem offenen Start",
    text: "Sie erfahren von MONTER GOLD, bevor der Club allgemein zugänglich ist."
  }
];

const planned = [
  {
    number: "01",
    title: "Bevorzugte Termine",
    text: "Schnellere Vergabe, sobald der Club offen ist."
  },
  {
    number: "02",
    title: "Nur diese Runde",
    text: "Konditionen, die an die erste Liste gehen und danach entfallen."
  },
  {
    number: "03",
    title: "Wartung im Abo",
    text: "Planbare Wartung für Geräte und Tore."
  },
  {
    number: "04",
    title: "Früher als der offene Club",
    text: "Information zum Start, bevor MONTER GOLD für alle da ist."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "MONTER GOLD | Die erste Liste",
  description:
    "MONTER GOLD ist noch geschlossen. Wer sich jetzt einträgt, gehört zu den ersten Kundinnen und Kunden und erhält beim Start Dinge, die danach nicht mehr verfügbar sind.",
  path: "/monter-gold",
  robots: comingSoonRobots
});

export default function MonterGoldPage() {
  return (
    <main className="bg-white text-[color:var(--ink)]">
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-24 -top-28 h-[34rem] w-[34rem] rounded-full blur-[140px]"
            style={{ backgroundColor: "rgba(227, 192, 113, 0.16)" }}
          />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-20 lg:gap-y-16">
            <div className="reveal lg:col-start-1 lg:row-start-1">
              <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
                <p className="cap-line-gold tracking-eyebrow text-[color:var(--gold-on-dark)]">MONTER GOLD</p>
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/70">
                  Noch geschlossen
                </p>
              </div>
              <h1 className="font-display mt-4 text-balance text-[2.65rem] font-light leading-[0.95] tracking-tight sm:mt-5 sm:text-6xl lg:text-[5.4rem]">
                Für die
                <span className="mt-1 block text-[color:var(--gold-on-dark)]">Ersten.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-white/75 sm:mt-8 sm:text-[1.05rem]">
                Die ersten, die sich jetzt eintragen, bekommen beim Start Dinge, die danach nicht
                mehr verfügbar sind.
              </p>
            </div>

            <div className="reveal lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <GoldSignup />
            </div>

            <ul className="reveal border-t border-white/15 lg:col-start-1 lg:row-start-2">
              {firstRound.map((item) => (
                <li key={item.title} className="border-b border-white/15 py-5">
                  <p className="text-[0.95rem] font-medium text-[color:var(--gold-on-dark)]">{item.title}</p>
                  <p className="mt-1.5 max-w-xl text-sm font-light leading-relaxed text-white/70">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <p className="relative pt-5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#6e5320]">
              <span aria-hidden="true" className="absolute left-0 top-0 h-px w-10 bg-[#6e5320]" />
              Vorgesehen
            </p>
            <h2 className="font-display mt-6 text-balance text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              Was der Club später umfasst.
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Noch nicht buchbar. Die erste Liste erfährt als Erstes, wann es soweit ist — und behält,
              was danach nicht mehr dazukommt.
            </p>
          </div>

          <div className="stagger mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
            {planned.map((item) => (
              <article key={item.number} className="bg-white p-8 sm:p-10">
                <span className="numeral text-[#6e5320]">{item.number}</span>
                <h3 className="font-display mt-6 text-2xl font-normal tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-light tracking-tight sm:text-3xl">
              Reparaturen laufen wie bisher.
            </h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Termine, Preise und der Anruf ändern sich durch die Liste nicht.
            </p>
          </div>
          <Link href="/reparatur-buchen" className="btn-ghost w-full sm:w-auto">
            Reparatur buchen
          </Link>
        </div>
      </section>
    </main>
  );
}
