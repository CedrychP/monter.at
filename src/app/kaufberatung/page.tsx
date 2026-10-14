import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const repairPoints = ["Alter", "Zustand", "Ersatzteilpreis", "Aufwand"];
const replacePoints = ["Bedarf", "Platz", "Budget", "Energie"];

const criteria = [
  {
    title: "Nutzung",
    text: "Wie oft das Gerät läuft und wie groß der Haushalt ist."
  },
  {
    title: "Platz und Einbau",
    text: "Ob es frei steht oder eingebaut ist, und wie viel Raum der Anschluss lässt."
  },
  {
    title: "Laufende Kosten",
    text: "Ein neueres Gerät kann sich über den Verbrauch rechnen. Die laufenden Kosten ordnen wir realistisch ein."
  },
  {
    title: "Der Weg danach",
    text: "Wenn der Tausch die bessere Wahl ist: Auswahl, Lieferung, Montage, Anschluss und das Altgerät."
  }
];

const path = [
  {
    number: "01",
    title: "Einschätzung",
    text: "Gerät und Fehlerbild. Wir sagen, ob die Reparatur wirtschaftlich ist oder der Austausch klarer."
  },
  {
    number: "02",
    title: "Auswahl",
    text: "Herstellerneutral, nach Bedarf, Platz und Budget. Der Ausgangspunkt bleibt Ihr Gerät, nicht ein Verkauf."
  },
  {
    number: "03",
    title: "Anschluss",
    text: "Auf Wunsch Lieferung, Montage und Anschluss, plus die fachgerechte Mitnahme des Altgeräts."
  }
];

const devices = [
  { label: "Waschmaschine", href: "/haushaltsgeraete/waschmaschine" },
  { label: "Geschirrspüler", href: "/haushaltsgeraete/geschirrspueler" },
  { label: "Trockner", href: "/haushaltsgeraete/trockner" },
  { label: "Kühlschrank", href: "/haushaltsgeraete/kuehlschrank" },
  { label: "Backofen & Herd", href: "/haushaltsgeraete/backofen-herd" }
];

const faqs: HubFaqItem[] = [
  {
    question: "Wann lohnt sich die Reparatur, wann ein Neukauf?",
    answer:
      "Wir schauen auf Alter, Zustand, Ersatzteilpreis und Aufwand. Oft lässt sich ein Defekt wirtschaftlich beheben. Manchmal ist der Austausch die klarere Entscheidung. Das sagen wir offen, bevor weitergerechnet wird."
  },
  {
    question: "Ist die Kaufberatung herstellerneutral?",
    answer:
      "Ja. Wenn ein Neukauf sinnvoll ist, helfen wir bei der Auswahl nach Bedarf, Platz und Budget. Der Ausgangspunkt ist Ihr Gerät, nicht eine Marke."
  },
  {
    question: "Übernehmen Sie auch Lieferung und das Altgerät?",
    answer:
      "Auf Wunsch ja: Lieferung, Montage, Anschluss und die fachgerechte Entsorgung des Altgeräts. Ob sich die Reparatur des alten Geräts noch lohnt, klären wir davor."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Kaufberatung Haushaltsgeräte Wien | Reparieren oder ersetzen | MONTER",
  description:
    "Kaufberatung in Wien: Wir sagen ehrlich, ob sich eine Reparatur lohnt oder ein Neukauf sinnvoller ist — herstellerneutral, mit Blick auf Energie, Folgekosten und Einbau.",
  path: "/kaufberatung"
});

export default function KaufberatungPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Kaufberatung in Wien</p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.4rem]">
              Reparieren.
              <span className="mt-1 block font-display-italic text-[color:var(--accent)]">Oder ersetzen.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Bevor ein Gerät wegkommt, lohnt sich eine ehrliche Einschätzung. Wir bewerten die
              Reparatur wirtschaftlich und beraten herstellerneutral, wenn ein Neukauf die bessere
              Wahl ist.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#anfrage" className="btn-primary">
                Zur Beratung
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-[color:var(--ink)] px-7 py-8 text-white sm:px-10 sm:py-10">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
                Wenn es sich rechnet
              </p>
              <p className="font-display mt-4 text-4xl font-light tracking-tight sm:text-5xl">Reparieren.</p>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/70">
                {repairPoints.join(" · ")}
              </p>
            </div>
            <svg viewBox="0 0 800 36" className="block h-7 w-full" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 800,36 0,36" fill="#a8112a" />
            </svg>
            <div className="bg-[color:var(--accent)] px-7 py-8 text-white sm:px-10 sm:py-10">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/80">
                Wenn der Tausch klarer ist
              </p>
              <p className="font-display mt-4 text-4xl font-light tracking-tight sm:text-5xl">Ersetzen.</p>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/80">
                {replacePoints.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Worauf die Empfehlung steht.
          </h2>
          <div className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-2">
            <div className="bg-white p-8 sm:p-10">
              <h3 className="font-display text-3xl font-light tracking-tight">Reparieren</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Oft lässt sich ein Defekt wirtschaftlich beheben. Dafür wiegen wir diese vier Punkte.
              </p>
              <ul className="mt-8 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
                {repairPoints.map((point) => (
                  <li key={point} className="py-4 font-display text-2xl font-light tracking-tight">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 sm:p-10">
              <h3 className="font-display text-3xl font-light tracking-tight">Ersetzen</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Manchmal ist der Austausch die bessere Entscheidung. Dann sortieren wir die Auswahl.
              </p>
              <ul className="mt-8 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
                {criteria.map((item) => (
                  <li key={item.title} className="bg-white p-5">
                    <p className="font-display text-xl font-light tracking-tight">{item.title}</p>
                    <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <nav aria-label="Geräte" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {devices.map((device) => (
              <Link key={device.href} href={device.href} className="border-b border-current">
                <span className="text-[color:var(--ink)]">{device.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Danach</p>
          <h2 className="font-display mt-6 max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Von der Einschätzung bis zum Anschluss.
          </h2>
          <ol className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-16">
            {path.map((step) => (
              <li key={step.number} className="border-t-2 border-[color:var(--accent)] pt-6">
                <p className="font-display text-sm font-light tracking-[0.16em] text-[color:var(--accent)]">{step.number}</p>
                <h3 className="font-display mt-4 text-3xl font-light tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {"Lieferung und Montage stehen unter "}
            <Link href="/lieferung-montage" className="border-b border-current"><span className="text-[color:var(--ink)]">Montage &amp; Installation</span></Link>{", die Beträge unter "}
            <Link href="/lieferpreise" className="border-b border-current"><span className="text-[color:var(--ink)]">Lieferpreise</span></Link>{", die Entsorgung unter "}
            <Link href="/altgeraeteentsorgung" className="border-b border-current"><span className="text-[color:var(--ink)]">Altgeräteentsorgung</span></Link>{". Was eine Reparatur kostet, steht bei den "}
            <Link href="/preise" className="border-b border-current"><span className="text-[color:var(--ink)]">Preisen</span></Link>.
          </p>
        </div>
      </section>

      <HubFaq
        eyebrow="Häufige Fragen"
        title="Kurz geklärt, bevor Sie sich festlegen."
        items={faqs}
      />

      <section id="anfrage" className="scroll-mt-28 bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Gerät und Situation schildern.
          </h2>
          <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            Rufen Sie kurz an oder schreiben Sie uns. Wir helfen, die Wahl zu treffen. Noch kein
            Auftrag.
          </p>
          <div className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-2">
            <Link href="/kontakt" className="group bg-[color:var(--ink)] p-8 text-white sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
                Noch unklar
              </p>
              <p className="font-display mt-5 text-4xl font-light tracking-tight">
                <span className="text-white">Beratung anfragen.</span>
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70">
                Gerät, Fehlerbild und was Sie vorhaben. Wir melden uns.
              </p>
            </Link>
            <Link href="/reparatur-buchen" className="group bg-[color:var(--bg-muted)] p-8 sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Reparatur ist die Wahl
              </p>
              <p className="font-display mt-5 text-4xl font-light tracking-tight">
                <span className="text-[color:var(--ink)]">Termin buchen.</span>
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Wenn die Einschätzung schon steht und der Techniker kommen soll.
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
