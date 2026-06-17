import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../siteConfig";

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;

type PartCategory = {
  number: string;
  title: string;
  text: string;
};

const applianceParts: PartCategory[] = [
  {
    number: "01",
    title: "Pumpen & Schläuche",
    text: "Laugenpumpen, Umwälzpumpen, Ablaufschläuche und Dichtungen für Waschmaschine und Geschirrspüler."
  },
  {
    number: "02",
    title: "Heizelemente",
    text: "Heizstäbe und Heizungen für Waschmaschine, Trockner, Geschirrspüler und Backofen."
  },
  {
    number: "03",
    title: "Lager & Trommeln",
    text: "Trommellager, Wellendichtringe und Antriebsriemen — passend zu Marke und Modell."
  },
  {
    number: "04",
    title: "Türen & Dichtungen",
    text: "Türdichtungen, Türschlösser, Scharniere und Manschetten für eine dichte, sichere Schließung."
  },
  {
    number: "05",
    title: "Elektronik & Steuerung",
    text: "Steuerplatinen, Thermostate, Sensoren und Schalter für eine zuverlässige Funktion."
  },
  {
    number: "06",
    title: "Kühlung",
    text: "Kompressoren, Ventilatoren, Thermostate und Dichtungen für Kühl- und Gefriergeräte."
  }
];

const garageParts: PartCategory[] = [
  {
    number: "07",
    title: "Federn & Seile",
    text: "Torsions- und Zugfedern sowie Tragseile — exakt auf Torgröße und Gewicht abgestimmt."
  },
  {
    number: "08",
    title: "Laufrollen & Schienen",
    text: "Laufrollen, Führungsschienen und Beschläge für einen leisen, ruhigen Lauf."
  },
  {
    number: "09",
    title: "Antriebe & Elektronik",
    text: "Motoren, Zahnriemen, Platinen, Handsender und Lichtschranken für moderne Torantriebe."
  }
];

const partsSteps = [
  {
    number: "01",
    title: "Gerät nennen",
    text: "Marke, Modell und Fehlerbild durchgeben — gerne mit Foto des Typenschilds."
  },
  {
    number: "02",
    title: "Teil identifizieren",
    text: "Wir bestimmen das passende Originalteil und prüfen Verfügbarkeit und Preis."
  },
  {
    number: "03",
    title: "Einbauen lassen",
    text: "Wir besorgen das Teil und verbauen es fachgerecht — oder liefern es passend zu."
  }
];

export const metadata: Metadata = {
  title: "Ersatzteile Haushaltsgeräte & Garagentor Wien | MONTER",
  description:
    "Originale Ersatzteile für Haushaltsgeräte und Garagentore in Wien: Pumpen, Heizstäbe, Dichtungen, Lager, Elektronik, Federn, Laufrollen und Antriebe. Wir identifizieren, besorgen und verbauen das passende Teil.",
  alternates: {
    canonical: "/ersatzteile"
  }
};

function PartGrid({ items }: { items: PartCategory[] }) {
  return (
    <div className="stagger grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="flex flex-col bg-white p-8 lg:p-10">
          <span className="numeral text-[color:var(--accent)]">{item.number}</span>
          <h3 className="font-display mt-6 text-2xl font-normal leading-tight tracking-tight">
            {item.title}
          </h3>
          <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function ErsatzteilePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Ersatzteile</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
                Das richtige Teil, schnell gefunden.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Ob Pumpe, Heizstab, Dichtung, Laufrolle oder Elektronik — wir identifizieren das
                passende Originalteil für Ihr Haushaltsgerät oder Garagentor, besorgen es und bauen
                es fachgerecht ein. Markenoffen in Wien und Niederösterreich.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="btn-primary">
                  Ersatzteil anfragen
                </Link>
                <a href={`tel:${phoneHref}`} className="btn-ghost">
                  Jetzt anrufen
                </a>
              </div>
            </div>
            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Schnellster Weg</p>
              <a
                href={`tel:${phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phoneDisplay}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Nennen Sie uns Marke, Modell und Fehlerbild — wir finden das passende Teil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Haushaltsgeräte</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Teile für Ihr Gerät
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Waschmaschine, Geschirrspüler, Kühl- und Gefriergeräte, Backofen, Herd und Trockner —
              markenoffen für Bosch, Siemens, Miele, AEG, Gorenje und mehr.
            </p>
          </div>
          <div className="mt-10">
            <PartGrid items={applianceParts} />
          </div>

          <div className="reveal mt-20 border-t border-[color:var(--border)] pt-16">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Garagentore</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Teile für Ihr Tor
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Federn, Laufrollen, Schienen, Antriebe und Elektronik — abgestimmt auf Torgröße,
              Gewicht und Antriebsmodell.
            </p>
          </div>
          <div className="mt-10">
            <PartGrid items={garageParts} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">So läuft es ab</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                Vom Fehlerbild zum passenden Teil.
              </h2>
              <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Wir verbauen Ersatzteile am liebsten direkt im Zuge der Reparatur — so passt das Teil
                garantiert und funktioniert auf Anhieb. Material wird nur dann verrechnet, wenn es
                tatsächlich benötigt wird.
              </p>
              <Link href="/kontakt" className="btn-primary mt-10">
                Ersatzteil anfragen
              </Link>
            </div>

            <div className="reveal">
              <div className="grid gap-0">
                {partsSteps.map((step) => (
                  <div
                    key={step.number}
                    className="border-b border-[color:var(--border)] py-7 first:pt-0"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="numeral text-[color:var(--accent)]">{step.number}</span>
                      <div>
                        <h3 className="font-display text-2xl font-normal tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
