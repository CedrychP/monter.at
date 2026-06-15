const companyName = "Tech Craft Consulting GmbH";
const serviceName = "MONTER Reparatur & Service";
const address = "Rappgasse 1/6, 1210 Wien";
const email = "office@tccreparatur.at";
const vatId = "ATU82408379";
const phone = "+4314171346";
const phoneHref = "+4314171346";

export const metadata = {
  title: "Datenschutz DSGVO | MONTER Reparatur Service",
  description:
    "Datenschutz und DSGVO-Informationen von MONTER Reparatur & Service in Wien. Lesen Sie, wie Kontakt- und Cookie-Daten verarbeitet werden.",
  alternates: {
    canonical: "/dsgvo"
  }
};

const privacySections = [
  {
    title: "Verantwortlicher",
    text: `Verantwortlich für diesen Webauftritt ist die ${companyName}, ${address}, als Betreiberin des Service-Auftritts ${serviceName}.`
  },
  {
    title: "Kontaktaufnahme",
    text: `Wenn Sie telefonisch unter ${phone}, per E-Mail an ${email} oder über ein vorbereitetes Formular Kontakt aufnehmen, verarbeiten wir die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage.`
  },
  {
    title: "Cookies",
    text: "Notwendige Cookies dienen der technischen Bereitstellung. Optionale Analyse- oder Marketing-Cookies werden nur nach Ihrer Zustimmung verwendet."
  },
  {
    title: "Ihre Rechte",
    text: "Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch."
  }
];

export default function DsgvoPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Datenschutz</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
                DSGVO & Datenschutz
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Informationen zur Verarbeitung personenbezogener Daten auf dem Webauftritt von
                {` ${serviceName}`}.
              </p>
            </div>

            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Datenschutzkontakt</p>
              <a
                href={`tel:${phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phone}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Für Fragen zur Kontaktaufnahme und Datenverarbeitung erreichen Sie uns telefonisch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-px bg-[color:var(--border)] lg:grid-cols-3">
            <article className="bg-white p-8 lg:p-10">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Verantwortlicher</p>
              <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">{companyName}</h2>
              <p className="mt-5 font-light leading-relaxed text-[color:var(--muted)]">{address}</p>
              <p className="mt-2 font-light leading-relaxed text-[color:var(--muted)]">
                Service-Auftritt: {serviceName}
              </p>
            </article>

            <article className="bg-white p-8 lg:p-10">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Cookies</p>
              <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">
                Einwilligung steuerbar
              </h2>
              <p className="mt-5 font-light leading-relaxed text-[color:var(--muted)]">
                Optionale Cookies werden nur nach Zustimmung verwendet. Einstellungen können
                im Footer geändert werden.
              </p>
            </article>

            <article className="bg-[color:var(--ink)] p-8 text-white lg:p-10">
              <p className="cap-line-light tracking-eyebrow text-white/70">Kontakt</p>
              <h2 className="font-display mt-7 break-words text-2xl font-normal tracking-tight">
                {email}
              </h2>
              <p className="mt-5 font-light leading-relaxed text-white/70">
                Telefon: {phone}
                <br />
                UID: {vatId}
              </p>
            </article>
          </div>

          <div className="stagger mt-16 grid gap-px bg-[color:var(--border)] md:grid-cols-2">
            {privacySections.map((section, index) => (
              <section key={section.title} className="bg-[color:var(--bg-muted)] p-8 lg:p-10">
                <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                <h2 className="font-display mt-6 text-2xl font-normal tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-5 font-light leading-relaxed text-[color:var(--muted)]">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
