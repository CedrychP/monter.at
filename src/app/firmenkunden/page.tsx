import type { Metadata } from "next";
import { siteConfig } from "../siteConfig";
import SimpleLeadForm from "../SimpleLeadForm";

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;

const benefits = [
  {
    number: "01",
    title: "Ein Ansprechpartner",
    text: "Feste Kontaktperson für alle Geräte und Objekte — kurze Wege, klare Kommunikation."
  },
  {
    number: "02",
    title: "Terminlogistik",
    text: "Planbare Termine, abgestimmt auf Mieter, Hausverwaltung und Betrieb."
  },
  {
    number: "03",
    title: "Dokumentation",
    text: "Nachvollziehbare Berichte und Rechnungen — ideal für Objekt- und Kostenmanagement."
  },
  {
    number: "04",
    title: "Kostenklarheit",
    text: "Transparente Pauschalen und Materialkosten nur bei tatsächlichem Bedarf."
  }
];

export const metadata: Metadata = {
  title: "Firmenkunden & Hausverwaltungen Wien | MONTER Geräteservice",
  description:
    "Geräteservice für Betriebe, Hausverwaltungen und Vermieter in Wien: ein Ansprechpartner, planbare Termine, Dokumentation und Kostenklarheit. Jetzt Firmenkunden-Anfrage senden.",
  alternates: {
    canonical: "/firmenkunden"
  }
};

export default function FirmenkundenPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Firmenkunden</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
                Geräteservice für Betriebe & Objekte.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Wenn Geräte im Objekt ausfallen, zählt mehr als die Reparatur: Terminlogistik,
                Dokumentation, Kostenklarheit und kurze Ausfallzeiten. Genau dafür ist unser
                Firmenkundenbereich ausgelegt — für Betriebe, Hausverwaltungen und Vermieter.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#firmenkunden-anfrage" className="btn-primary">
                  Anfrage für Ihr Objekt
                </a>
                <a href={`tel:${phoneHref}`} className="btn-ghost">
                  Jetzt anrufen
                </a>
              </div>
            </div>
            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Direktkontakt</p>
              <a
                href={`tel:${phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phoneDisplay}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Mehrere Geräte im Objekt? Wir koordinieren Termine, Diagnose und Reparatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Vorteile</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Service, der zu Ihrem Betrieb passt.
            </h2>
          </div>
          <div className="stagger mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="flex flex-col bg-white p-8">
                <span className="numeral text-[color:var(--accent)]">{benefit.number}</span>
                <h3 className="font-display mt-6 text-xl font-normal leading-tight tracking-tight">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="firmenkunden-anfrage" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow">Anfrage</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              Objekt-Anfrage senden.
            </h2>
            <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Beschreiben Sie kurz Ihr Objekt und Anliegen — wir melden uns zur Abstimmung von
              Umfang, Terminen und Konditionen.
            </p>
          </div>

          <div className="reveal rounded-sm border border-[color:var(--border)] bg-white p-6 sm:p-10">
            <SimpleLeadForm
              requestType="firmenkunden"
              eyebrow="Firmenkunden"
              title="Anfrage für Ihr Objekt"
              description="Für Betriebe, Hausverwaltungen und Vermieter. Wir melden uns zur Abstimmung."
              nameLabel="Ansprechpartner"
              namePlaceholder="Vor- und Nachname"
              includeCompany
              companyLabel="Firma / Hausverwaltung"
              messageLabel="Ihr Anliegen"
              messagePlaceholder="Anzahl Objekte/Geräte, Art der Geräte, Standort, gewünschter Ablauf …"
              submitLabel="Anfrage senden"
              phoneHref={phoneHref}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
