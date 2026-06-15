const serviceName = "MONTER Reparatur & Service";
const email = "office@tccreparatur.at";
const phone = "+43 1 4171346";
const phoneHref = "+4314171346";

export const metadata = {
  title: "Barrierefreiheit | MONTER Reparatur Service",
  description:
    "Informationen zur Barrierefreiheit des Webauftritts von MONTER Reparatur & Service in Wien.",
  alternates: {
    canonical: "/barrierefreiheit"
  }
};

const sections = [
  {
    title: "Unser Anspruch",
    text: `${serviceName} bemüht sich, den Webauftritt möglichst barrierefrei bereitzustellen — lesbar, bedienbar und verständlich für möglichst viele Nutzerinnen und Nutzer.`
  },
  {
    title: "Stand der Umsetzung",
    text:
      "Wir arbeiten kontinuierlich an Kontrasten, Tastaturbedienbarkeit, semantischer Struktur und verständlichen Formulierungen. Nicht alle Inhalte sind bereits vollständig optimiert."
  },
  {
    title: "Feedback & Kontakt",
    text:
      "Wenn Sie auf Barrieren stoßen, melden Sie sich bitte — wir prüfen Hinweise zeitnah und verbessern die Website nach Möglichkeit."
  }
];

export default function BarrierefreiheitPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="reveal max-w-3xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Zugänglichkeit</p>
            <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
              Barrierefreiheit
            </h1>
            <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Informationen zur Zugänglichkeit des Webauftritts von {serviceName}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-px bg-[color:var(--border)] lg:grid-cols-3">
            {sections.map((section) => (
              <article key={section.title} className="bg-white p-8 lg:p-10">
                <h2 className="font-display text-2xl font-normal tracking-tight">{section.title}</h2>
                <p className="mt-5 font-light leading-relaxed text-[color:var(--muted)]">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 border border-[color:var(--border)] p-8">
            <p className="tracking-eyebrow text-[color:var(--muted)]">Barrierefreiheit melden</p>
            <p className="mt-4 font-light leading-relaxed text-[color:var(--muted)]">
              Telefon:{" "}
              <a
                href={`tel:${phoneHref}`}
                className="border-b border-[color:var(--ink)] text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                {phone}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${email}`}
                className="border-b border-[color:var(--ink)] text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                {email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
