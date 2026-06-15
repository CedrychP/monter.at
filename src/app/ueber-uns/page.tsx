import Link from "next/link";

const phoneDisplay = "+43 1 4171346";
const phoneHref = "+4314171346";

const stats = [
  { value: "24 h", label: "Reaktion bei dringenden Ausfällen" },
  { value: "4,9 / 5", label: "kundenorientierte Einschätzung" },
  { value: "B2C + B2B", label: "Privat- und Firmenkunden" }
];

const values = [
  {
    title: "Technisch sauber",
    text: "Wir schauen nicht nur auf das Symptom, sondern auf Ursache, Sicherheit und Wirtschaftlichkeit der Reparatur."
  },
  {
    title: "Ehrliche Einschätzung",
    text: "Nicht jede Reparatur lohnt sich. Wenn ein Austausch sinnvoller ist, kommunizieren wir das klar."
  },
  {
    title: "Privat & Gewerbe",
    text: "Wir unterstützen Haushalte, Büros, Hausverwaltungen, Vermieter und Objektbetreuung bei Geräteausfällen."
  }
];

const approachSteps = [
  {
    title: "Fehlerbild verstehen",
    text: "Wir fragen gezielt nach Gerätetyp, Marke, Modell, Standort und Symptomen, damit der Einsatz sinnvoll vorbereitet wird."
  },
  {
    title: "Wirtschaftlich entscheiden",
    text: "Reparieren ist gut, aber nicht um jeden Preis. Wir achten auf Ersatzteile, Alter, Sicherheit und Folgekosten."
  },
  {
    title: "Klar kommunizieren",
    text: "Sie sollen wissen, was der nächste Schritt ist: Termin, Diagnose, Reparatur oder ehrliche Empfehlung zum Austausch."
  }
];

export const metadata = {
  title: "Über MONTER Reparatur Service Wien",
  description:
    "Über MONTER Reparatur & Service in Wien: technische Einschätzung, ehrliche Reparaturberatung und direkter Kontakt für Haushaltsgeräte.",
  alternates: {
    canonical: "/ueber-uns"
  }
};

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Über Uns</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
                Reparatur mit Technik, Hausverstand und <span className="font-display-italic">klarer Haltung.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                MONTER Reparatur & Service ist der Service-Auftritt der Tech Craft Consulting GmbH.
                Wir verbinden technisches Verständnis, digitale Organisation und ehrliche
                Kommunikation, damit Reparaturen nicht kompliziert werden.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${phoneHref}`} className="btn-primary">
                  Direkt anrufen
                </a>
                <Link href="/kontakt" className="btn-ghost">
                  Anfrage vorbereiten
                </Link>
              </div>
            </div>

            <div className="reveal grid gap-px bg-[color:var(--border)] sm:grid-cols-1">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className="flex items-baseline justify-between bg-[color:var(--bg-muted)] p-6 lg:p-8"
                >
                  <div>
                    <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                    <p className="mt-3 max-w-[14rem] text-sm font-light leading-snug text-[color:var(--muted)]">
                      {stat.label}
                    </p>
                  </div>
                  <p className="font-display text-3xl font-light tracking-tight text-[color:var(--ink)] sm:text-4xl">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Was wir machen</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                Wir helfen, wenn Haushaltsgeräte zum Problem werden.
              </h2>
            </div>
            <p className="reveal text-[1.1rem] font-light leading-relaxed text-[color:var(--muted)]">
              Unser Fokus liegt auf Waschmaschinen, Geschirrspülern, Backöfen, Herden,
              Trocknern, Kühlgeräten und weiteren Haushaltsgeräten. Wir klären Fehlerbilder,
              prüfen die wirtschaftliche Sinnhaftigkeit und bereiten Termine so vor, dass vor
              Ort möglichst zielgerichtet gearbeitet werden kann.
            </p>
          </div>

          <div className="stagger mt-16 grid gap-px bg-[color:var(--border)] md:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.title} className="bg-[color:var(--bg-muted)] p-8 lg:p-10">
                <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                <h3 className="font-display mt-6 text-2xl font-normal tracking-tight">{value.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Arbeitsweise</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                Erst verstehen, <span className="font-display-italic">dann reparieren.</span>
              </h2>
              <p className="mt-8 max-w-md text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Viele Reparaturen scheitern nicht am Werkzeug, sondern an schlechter
                Vorbereitung. Deshalb legen wir Wert auf saubere Vorabklärung.
              </p>
            </div>
            <div className="reveal grid gap-0">
              {approachSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="border-b border-[color:var(--border)] py-8 last:border-0"
                >
                  <div className="flex items-baseline gap-8">
                    <span className="numeral whitespace-nowrap text-[color:var(--accent)]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-normal tracking-tight sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-[1rem] font-light leading-relaxed text-[color:var(--muted)]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--ink)] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="reveal">
              <p className="cap-line-light tracking-eyebrow text-white/70">Unser Anspruch</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Reparatur soll transparent, erreichbar und sinnvoll sein.
              </h2>
              <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/70">
                Ob Privatkunde, Hausverwaltung oder Betrieb: Sie bekommen eine klare
                Einschätzung, keinen unnötigen Fachjargon und einen direkten Kontaktweg.
              </p>
            </div>
            <div className="reveal lg:text-right">
              <a
                href={`tel:${phoneHref}`}
                className="font-display block break-words text-4xl font-light tracking-tight text-white sm:text-5xl"
              >
                {phoneDisplay}
              </a>
              <Link href="/kontakt" className="btn-on-dark-ghost mt-8 inline-flex">
                Anfrage stellen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
