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
    title: "Konditionen, die danach wegfallen",
    text: "Beitrag und Umfang der ersten Runde werden später nicht mehr zu diesen Bedingungen angeboten."
  },
  {
    title: "Nachricht vor dem offenen Start",
    text: "Sie erfahren von MONTER GOLD, bevor die Mitgliedschaft allgemein zugänglich ist."
  }
];

const pillars = [
  {
    title: "Vorrang",
    text: "Termine für Haushaltsgeräte, Garagentor und Klimagerät liegen vor der offenen Vergabe."
  },
  {
    title: "Planung",
    text: "Wartung setzen wir an, bevor etwas ausfällt: Gerät, Tor, Klima vor der Saison."
  },
  {
    title: "Eine Stelle",
    text: "Derselbe Betrieb kennt den Haushalt, von der Reparatur bis zum nächsten Gerät."
  }
];

const areas = [
  {
    number: "01",
    href: "/haushaltsgeraete",
    label: "Zu den Haushaltsgeräten",
    title: "Haushaltsgeräte",
    text: "Waschmaschine, Geschirrspüler, Kühlgerät, Backofen, Trockner, Fernseher. Fällt etwas aus, liegt der Termin vor der offenen Liste. Die Diagnose bleibt dieselbe: reparieren, wenn es sich rechnet, und das vorher sagen."
  },
  {
    number: "02",
    href: "/garagentore",
    label: "Zu den Garagentoren",
    title: "Garagentor",
    text: "Ein Tor, das klemmt, sperrt das Auto ein. Mitglieder werden vorgezogen. Feder, Lauf und Antrieb sehen wir in einem gesetzten Fenster an, nicht erst am Morgen, an dem nichts mehr geht."
  },
  {
    number: "03",
    href: "/klimageraete",
    label: "Zu den Klimageräten",
    title: "Klimagerät",
    text: "Vor der Saison ein festes Fenster, nicht der Anruf am ersten heißen Tag. Kühlleistung, Ablauf und Filter in einem Gang, Innen- und Außengerät als ein System."
  },
  {
    number: "04",
    href: "/geraetekauf",
    label: "Zum Gerätekauf",
    title: "Gerätekauf",
    text: "Der Verkauf ist noch in Vorbereitung. Mitglieder hören zuerst, wenn ein Gerät in die Auswahl kommt. Beraten wird der Haushalt, dessen altes Gerät wir kennen. Kaufpreis, Lieferung und Montage stehen fest, bevor etwas bestellt wird."
  }
];

const inContribution = [
  "Vorrang bei Terminen über Geräte, Tor und Klima",
  "Wartung, die wir vorschlagen und in den Kalender setzen",
  "Eine Stelle für den ganzen Haushalt",
  "Die Nachricht, bevor ein Gerät in den Verkauf kommt"
];

const namedBefore = [
  "Ersatzteile",
  "Arbeit über den gesetzten Termin hinaus",
  "Kaufpreis, Lieferung und Montage eines neuen Geräts",
  "Jede Position, die vor dem Weiterarbeiten nicht genannt wurde"
];

const steps = [
  {
    number: "01",
    title: "Eintragen",
    text: "Die Liste ist die Anmeldung. Es geht noch kein Beitrag ab."
  },
  {
    number: "02",
    title: "Schriftlich zum Start",
    text: "Beitrag, Umfang und Laufzeit stehen fest, bevor die erste Zahlung ansteht. Die erste Runde enger als der spätere offene Kreis."
  },
  {
    number: "03",
    title: "Danach monatlich",
    text: "Ein Haushalt, ein Betrag im Monat. Erst nach Ihrer Zustimmung."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "MONTER GOLD | Mitgliedschaft für den Haushalt",
  description:
    "MONTER GOLD ist eine noch geschlossene Mitgliedschaft: ein monatlicher Beitrag für Vorrang und geplante Betreuung bei Haushaltsgeräten, Garagentor, Klimagerät und Gerätekauf. Die erste Liste behält Konditionen, die später entfallen.",
  path: "/monter-gold",
  robots: comingSoonRobots
});

function GoldRule({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`relative pt-5 text-[0.72rem] font-medium uppercase tracking-[0.28em] ${
        light ? "text-[color:var(--gold-on-dark)]" : "text-[#6e5320]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-px w-10 ${light ? "bg-[color:var(--gold-on-dark)]" : "bg-[#6e5320]"}`}
      />
      {children}
    </p>
  );
}

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

        <div className="relative mx-auto max-w-[88rem] px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-20 lg:gap-y-16">
            <div className="reveal lg:col-start-1 lg:row-start-1">
              <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
                <p className="cap-line-gold tracking-eyebrow text-[color:var(--gold-on-dark)]">MONTER GOLD</p>
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/70">
                  Noch geschlossen
                </p>
              </div>
              <h1 className="font-display mt-4 text-balance text-[2.4rem] font-light leading-[0.95] tracking-tight sm:mt-5 sm:text-6xl lg:text-[5.4rem]">
                Für die
                <span className="mt-1 block text-[color:var(--gold-on-dark)]">Ersten.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-white/75 sm:mt-8 sm:text-[1.05rem]">
                Eine Mitgliedschaft für den Haushalt. Ein Beitrag im Monat. Die ersten, die sich
                eintragen, bekommen beim Start Konditionen, die danach nicht mehr verfügbar sind.
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

      <section className="bg-[#14120e] text-white">
        <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="reveal grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <GoldRule light>Der Beitrag</GoldRule>
              <h2 className="font-display mt-6 text-balance text-4xl font-light leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                Ein Haushalt.
                <span className="mt-1 block text-[color:var(--gold-on-dark)]">Ein Betrag im Monat.</span>
              </h2>
            </div>
            <div className="lg:pt-10">
              <p className="max-w-xl text-[1.05rem] font-light leading-relaxed text-white/75">
                MONTER GOLD bündelt, was an einem Haus anfällt: Haushaltsgeräte, Garagentor,
                Klimagerät und, sobald er offen ist, den Gerätekauf. Der Beitrag hält den Vorrang
                und die geplante Betreuung. Die Höhe nennen wir schriftlich, bevor die erste
                Zahlung ansteht — zuerst dieser Liste.
              </p>
              <ul className="mt-10 border-t border-white/15">
                {pillars.map((item) => (
                  <li key={item.title} className="border-b border-white/15 py-5">
                    <p className="text-[0.95rem] font-medium text-[color:var(--gold-on-dark)]">{item.title}</p>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-white/70">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <GoldRule>Vier Bereiche</GoldRule>
            <h2 className="font-display mt-6 text-balance text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              Was die Mitgliedschaft am Haus hält.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Ein Kreis, vier Leistungen. Reparatur, die vorgezogen wird. Wartung, die im Kalender
              steht. Und der Gerätekauf, sobald wir ihn öffnen, zuerst für diese Mitglieder.
            </p>
          </div>

          <div className="mt-14 border-t border-[color:var(--border)]">
            {areas.map((area) => (
              <article
                key={area.number}
                className="grid gap-6 border-b border-[color:var(--border)] py-10 sm:py-12 lg:grid-cols-[8rem_minmax(0,0.7fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10"
              >
                <span className="font-display text-3xl font-light tracking-tight text-[#6e5320]">{area.number}</span>
                <h3 className="font-display text-3xl font-light tracking-tight sm:text-4xl">{area.title}</h3>
                <div>
                  <p className="text-sm font-light leading-relaxed text-[color:var(--muted)]">{area.text}</p>
                  <Link
                    href={area.href}
                    className="mt-5 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[#6e5320]"
                  >
                    {area.label}
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)]">
        <div className="mx-auto grid max-w-[88rem] lg:grid-cols-2">
          <div className="bg-[color:var(--ink)] px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <GoldRule light>Im Beitrag</GoldRule>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Wofür der Monat da ist.
            </h2>
            <ul className="mt-10">
              {inContribution.map((item) => (
                <li key={item} className="border-t border-white/15 py-4 text-sm font-light leading-relaxed text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <GoldRule>Vorher genannt</GoldRule>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Was extra feststeht, bevor wir arbeiten.
            </h2>
            <ul className="mt-10">
              {namedBefore.map((item) => (
                <li
                  key={item}
                  className="border-t border-[color:var(--border)] py-4 text-sm font-light leading-relaxed text-[color:var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <GoldRule>Der Weg hinein</GoldRule>
              <h2 className="font-display mt-6 text-balance text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                Erst die Liste. Dann der Beitrag.
              </h2>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Für Haushalte in Wien und Niederösterreich. Die Mitgliedschaft ist noch geschlossen.
              </p>
              <Link href="#liste" className="btn-primary mt-8">
                Auf die erste Liste
              </Link>
            </div>
            <ol className="border-t border-[color:var(--border)]">
              {steps.map((step) => (
                <li key={step.number} className="grid gap-3 border-b border-[color:var(--border)] py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
                  <span className="numeral text-[#6e5320]">{step.number}</span>
                  <div>
                    <h3 className="font-display text-2xl font-normal tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
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
              Bis die Mitgliedschaft offen ist, gelten Termine und die Preisliste unverändert.
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
