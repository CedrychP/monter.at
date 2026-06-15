const companyName = "Tech Craft Consulting GmbH";
const serviceName = "MONTER Reparatur & Service";
const address = "Rappgasse 1/6, 1210 Wien";
const email = "office@tccreparatur.at";
const vatId = "ATU82408379";
const phone = "+4314171346";
const phoneHref = "+4314171346";

const companyDetails = [
  { label: "Firma", value: companyName },
  { label: "Adresse", value: address },
  { label: "E-Mail", value: email },
  { label: "Telefon", value: phone },
  { label: "UID-Nummer", value: vatId }
];

export const metadata = {
  title: "Impressum | MONTER Reparatur Service",
  description:
    "Impressum von MONTER Reparatur & Service in Wien mit Unternehmensdaten der Tech Craft Consulting GmbH und direktem Kontakt.",
  alternates: {
    canonical: "/impressum"
  }
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Impressum</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
                {serviceName}
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Rechtliche Informationen zum Service-Auftritt der {companyName}.
              </p>
            </div>

            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Schnellkontakt</p>
              <a
                href={`tel:${phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phone}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Für Reparaturanfragen bitte bevorzugt telefonisch melden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-px bg-[color:var(--border)] lg:grid-cols-3">
            <article className="bg-white p-8 lg:p-10">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Betreiber</p>
              <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">{companyName}</h2>
              <p className="mt-5 font-light leading-relaxed text-[color:var(--muted)]">{address}</p>
              <p className="mt-2 font-light leading-relaxed text-[color:var(--muted)]">
                Service-Auftritt: {serviceName}
              </p>
            </article>

            <article className="bg-white p-8 lg:p-10">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Kontakt</p>
              <a href={`tel:${phoneHref}`} className="font-display mt-7 block text-2xl font-normal tracking-tight">
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="mt-3 block break-words font-light text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
              >
                {email}
              </a>
            </article>

            <article className="bg-[color:var(--ink)] p-8 text-white lg:p-10">
              <p className="cap-line-light tracking-eyebrow text-white/70">UID-Nummer</p>
              <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">{vatId}</h2>
              <p className="mt-5 font-light leading-relaxed text-white/70">
                Umsatzsteuer-Identifikationsnummer der {companyName}.
              </p>
            </article>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Pflichtangaben</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-tight tracking-tight">
                Unternehmensdaten
              </h2>
            </div>
            <div className="reveal grid gap-0">
              {companyDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-1 border-b border-[color:var(--border)] py-5 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <p className="tracking-eyebrow text-[color:var(--muted)] sm:w-40">{detail.label}</p>
                  <p className="break-words font-light text-[color:var(--ink)]">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
