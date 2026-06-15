const serviceName = "MONTER Reparatur & Service";
const email = "office@tccreparatur.at";

export const metadata = {
  title: "Nutzungsbedingungen | MONTER Reparatur Service",
  description:
    "Nutzungsbedingungen für den Webauftritt von MONTER Reparatur & Service in Wien.",
  alternates: {
    canonical: "/nutzungsbedingungen"
  }
};

const sections = [
  {
    title: "Geltungsbereich",
    text: `Diese Nutzungsbedingungen regeln die Nutzung des Webauftritts von ${serviceName}. Mit dem Besuch der Website erkennen Sie diese Bedingungen an.`
  },
  {
    title: "Inhalte & Haftung",
    text:
      "Alle Angaben auf dieser Website dienen der allgemeinen Information. Wir bemühen uns um Aktualität und Richtigkeit, übernehmen jedoch keine Gewähr für Vollständigkeit oder Fehlerfreiheit."
  },
  {
    title: "Urheberrecht",
    text:
      "Texte, Bilder und Gestaltungselemente dieser Website sind urheberrechtlich geschützt. Eine Verwendung ohne vorherige Zustimmung ist nicht gestattet."
  },
  {
    title: "Externe Links",
    text:
      "Verlinkungen auf externe Websites liegen außerhalb unseres Einflussbereichs. Für deren Inhalte übernehmen wir keine Verantwortung."
  }
];

export default function NutzungsbedingungenPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="reveal max-w-3xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Rechtliches</p>
            <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
              Nutzungsbedingungen
            </h1>
            <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Bedingungen für die Nutzung des Webauftritts von {serviceName}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-px bg-[color:var(--border)] lg:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="bg-white p-8 lg:p-10">
                <h2 className="font-display text-2xl font-normal tracking-tight">{section.title}</h2>
                <p className="mt-5 font-light leading-relaxed text-[color:var(--muted)]">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-sm font-light text-[color:var(--muted)]">
            Fragen dazu:{" "}
            <a
              href={`mailto:${email}`}
              className="border-b border-[color:var(--ink)] text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              {email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
