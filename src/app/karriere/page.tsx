import type { Metadata } from "next";
import { siteConfig } from "../siteConfig";
import SimpleLeadForm from "../SimpleLeadForm";

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;

const reasons = [
  {
    number: "01",
    title: "Echtes Handwerk",
    text: "Abwechslungsreiche Einsätze bei Haushaltsgeräten und Garagentoren — kein Tag wie der andere."
  },
  {
    number: "02",
    title: "Faires Miteinander",
    text: "Ein verlässliches Team, klare Abläufe und ehrliche Kommunikation auf Augenhöhe."
  },
  {
    number: "03",
    title: "Region Wien & NÖ",
    text: "Wohnortnahe Einsätze in Wien und Umgebung — planbare Wege und Termine."
  },
  {
    number: "04",
    title: "Entwicklung",
    text: "Raum, dazuzulernen und Verantwortung zu übernehmen — wir wachsen gemeinsam."
  }
];

const positions = [
  "Servicetechniker:in Haushaltsgeräte",
  "Servicetechniker:in Garagentore",
  "Lehre / Einstieg",
  "Büro & Disposition",
  "Initiativbewerbung"
];

export const metadata: Metadata = {
  title: "Karriere bei MONTER | Jobs & Bewerbung Wien",
  description:
    "Karriere bei MONTER Reparatur & Service in Wien: Servicetechniker:innen für Haushaltsgeräte und Garagentore, Büro & Disposition sowie Initiativbewerbungen. Jetzt bewerben.",
  alternates: {
    canonical: "/karriere"
  }
};

export default function KarrierePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Karriere</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
                Werde Teil von MONTER.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Wir suchen Menschen mit technischem Geschick und Hausverstand, die gerne anpacken
                und Kundinnen und Kunden in Wien und Niederösterreich ehrlich weiterhelfen. Auch
                Initiativbewerbungen sind jederzeit willkommen.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#bewerbung" className="btn-primary">
                  Jetzt bewerben
                </a>
                <a href={`tel:${phoneHref}`} className="btn-ghost">
                  Fragen? Anrufen
                </a>
              </div>
            </div>
            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Direkt erreichbar</p>
              <a
                href={`tel:${phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phoneDisplay}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Fragen zur Bewerbung oder zu offenen Stellen? Melden Sie sich gerne direkt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Warum MONTER</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Arbeiten mit Sinn und Substanz.
            </h2>
          </div>
          <div className="stagger mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="flex flex-col bg-white p-8">
                <span className="numeral text-[color:var(--accent)]">{reason.number}</span>
                <h3 className="font-display mt-6 text-xl font-normal leading-tight tracking-tight">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bewerbung" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow">Bewerbung</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              In wenigen Schritten bewerben.
            </h2>
            <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Schreiben Sie uns kurz, wer Sie sind und worauf Sie sich bewerben. Wir melden uns
              zeitnah. Unterlagen wie Lebenslauf können Sie nach der ersten Rückmeldung gerne
              nachreichen.
            </p>
          </div>

          <div className="reveal rounded-sm border border-[color:var(--border)] bg-white p-6 sm:p-10">
            <SimpleLeadForm
              requestType="karriere"
              eyebrow="Bewerbung"
              title="Jetzt bewerben"
              description="Wir freuen uns auf Ihre Bewerbung und melden uns zeitnah zurück."
              nameLabel="Vor- und Nachname"
              namePlaceholder="Max Mustermann"
              includePosition
              positionLabel="Worauf bewerben Sie sich?"
              positionOptions={positions}
              messageLabel="Anschreiben / Nachricht"
              messagePlaceholder="Kurz zu Ihnen: Erfahrung, Verfügbarkeit, Motivation …"
              submitLabel="Bewerbung senden"
              phoneHref={phoneHref}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
