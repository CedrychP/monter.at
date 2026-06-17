import Link from "next/link";
import ContactForm from "../ContactForm";

const phoneDisplay = "01 4171346";
const phoneHref = "+4314171346";
const email = "info@monter.at";
const address = "Rappgasse 1/6, 1210 Wien";
const mapsQuery = encodeURIComponent(address);

const contactCards = [
  {
    eyebrow: "Anrufen",
    title: phoneDisplay,
    text: "Am schnellsten klären wir Fragen und Anliegen direkt am Telefon.",
    href: `tel:${phoneHref}`,
    cta: "Jetzt anrufen"
  },
  {
    eyebrow: "E-Mail",
    title: email,
    text: "Für Fragen, Anliegen, Beschwerden oder Feedback aller Art.",
    href: `mailto:${email}`,
    cta: "E-Mail schreiben"
  }
];

const otherRequests = [
  {
    title: "Reparatur buchen",
    text: "Gerät defekt? Termin direkt online anfragen.",
    href: "/reparatur-buchen"
  },
  {
    title: "Ersatzteile",
    text: "Passendes Originalteil anfragen.",
    href: "/ersatzteile"
  },
  {
    title: "Firmenkunden",
    text: "Service für Betriebe & Hausverwaltungen.",
    href: "/firmenkunden"
  }
];

export const metadata = {
  title: "Kontakt & Anliegen | MONTER Reparatur & Service Wien",
  description:
    "Kontakt zu MONTER Reparatur & Service in Wien: Fragen, Anliegen, Beschwerden oder Feedback telefonisch, per E-Mail an info@monter.at oder über das Kontaktformular.",
  alternates: {
    canonical: "/kontakt"
  }
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Kontakt</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.5rem]">
                Frage, Anliegen <span className="font-display-italic">oder Feedback?</span>
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Sie haben eine allgemeine Frage, ein Anliegen, eine Beschwerde oder möchten uns
                Feedback geben? Schreiben Sie uns über das Formular oder melden Sie sich direkt —
                wir kümmern uns darum.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${phoneHref}`} className="btn-primary">
                  Jetzt anrufen
                </a>
                <a href="#anliegen" className="btn-ghost">
                  Zum Formular
                </a>
              </div>
            </div>

            <div className="reveal grid gap-px bg-[color:var(--border)]">
              {contactCards.map((card) => (
                <article key={card.eyebrow} className="bg-[color:var(--bg-muted)] p-8 lg:p-10">
                  <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{card.eyebrow}</p>
                  <a
                    href={card.href}
                    className="font-display mt-6 block break-words text-2xl font-normal leading-tight tracking-tight text-[color:var(--ink)] sm:text-3xl"
                  >
                    {card.title}
                  </a>
                  <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {card.text}
                  </p>
                  <a href={card.href} className="link-arrow mt-6">
                    {card.cta}
                    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="anliegen" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="reveal space-y-10">
            <div>
              <p className="cap-line tracking-eyebrow">Anderes Anliegen?</p>
              <h2 className="font-display mt-8 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Direkt zum richtigen Weg.
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-relaxed text-[color:var(--muted)]">
                Für Reparatur, Ersatzteile oder Firmenkunden gibt es eigene, schnellere Formulare:
              </p>
              <div className="mt-6 grid gap-2.5">
                {otherRequests.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-xl border border-[color:var(--border)] bg-white p-4 transition hover:border-[color:var(--ink)]"
                  >
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-[color:var(--ink)]">
                        {item.title}
                      </span>
                      <span className="block text-xs font-normal leading-relaxed text-[color:var(--muted)]">
                        {item.text}
                      </span>
                    </span>
                    <span className="flex-none text-[color:var(--muted-soft)] transition-transform group-hover:translate-x-0.5 group-hover:text-[color:var(--ink)]">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Adresse</p>
              <h3 className="font-display mt-4 break-words text-2xl font-normal tracking-tight">
                {address}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Service- und Unternehmensstandort der Tech Craft Consulting GmbH.
              </p>
            </div>
          </div>

          <div className="reveal rounded-sm border border-[color:var(--border)] bg-white p-6 sm:p-10">
            <ContactForm
              eyebrow="Anliegen"
              title="Anliegen senden"
              defaultRequestType="anliegen"
              lockRequestType
              includeCustomerType
              phoneHref={phoneHref}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-0 border border-[color:var(--border)] bg-white lg:grid-cols-[0.7fr_1.3fr]">
            <div className="p-8 lg:p-12">
              <p className="cap-line tracking-eyebrow">Standort</p>
              <h2 className="font-display mt-8 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Unser Standort in Wien.
              </h2>
              <p className="mt-6 font-light leading-relaxed text-[color:var(--muted)]">{address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="link-arrow mt-8"
              >
                In Google Maps öffnen
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
              </a>
            </div>
            <iframe
              title="Google Maps Standort Tech Craft Consulting GmbH"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-80 w-full border-0 grayscale lg:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
