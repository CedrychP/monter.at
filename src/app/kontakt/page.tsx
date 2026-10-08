import type { Metadata } from "next";
import ContactForm from "../ContactForm";
import RepairBookingCta from "../RepairBookingCta";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const address = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;
const mapsQuery = encodeURIComponent(address);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

const channels = [
  {
    eyebrow: "Anrufen",
    title: siteConfig.phoneDisplay,
    text: "Am schnellsten klären wir Fragen und Anliegen direkt am Telefon.",
    href: `tel:${siteConfig.phoneHref}`,
    cta: "Jetzt anrufen",
    phone: true
  },
  {
    eyebrow: "E-Mail",
    title: siteConfig.email,
    text: "Für Fragen, Anliegen, Beschwerden oder Feedback aller Art.",
    href: `mailto:${siteConfig.email}`,
    cta: "E-Mail schreiben",
    phone: false
  }
];

const topics = [
  {
    number: "01",
    title: "Frage",
    text: "Etwas, das Sie vorab klären wollen."
  },
  {
    number: "02",
    title: "Anliegen",
    text: "Eine Beschwerde oder etwas, das nicht rund lief."
  },
  {
    number: "03",
    title: "Feedback",
    text: "Was gut war, und was besser werden soll."
  }
];

const socials = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "TikTok", href: siteConfig.social.tiktok },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "LinkedIn", href: siteConfig.social.linkedin }
];

export const metadata: Metadata = buildMetadata({
  title: "Kontakt & Anliegen | MONTER Reparatur & Service Wien",
  description:
    "Kontakt zu MONTER Reparatur & Service in Wien: Fragen, Anliegen, Beschwerden oder Feedback telefonisch, per E-Mail an info@monter.at oder über das Kontaktformular.",
  path: "/kontakt"
});

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="overflow-hidden bg-[color:var(--ink)] text-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-20">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-on-dark)]">
              <span aria-hidden="true" className="h-px w-8 bg-[color:var(--accent)]" />
              Kontakt
            </p>
            <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.5rem]">
              Frage, Anliegen
              <span className="mt-1 block font-display-italic text-[color:var(--gold-on-dark)]">oder Feedback.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/75">
              Schreiben Sie uns, wenn etwas unklar ist, nicht rund lief oder Sie uns etwas
              mitgeben wollen. Für einen Reparaturtermin, ein Ersatzteil oder Firmenkunden gibt
              es jeweils einen eigenen Weg.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="border border-white/20 px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/80">
                {siteConfig.openingHoursDisplay[0]}
              </span>
              <span className="border border-white/20 px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/55">
                Wochenende geschlossen
              </span>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark">
                Jetzt anrufen
              </a>
              <a
                href="#anliegen"
                className="group inline-flex items-center justify-center border border-white/70 px-7 py-4 text-[0.92rem] font-medium uppercase tracking-[0.04em] transition hover:bg-white"
              >
                <span className="text-white group-hover:text-[color:var(--ink)]">Zum Formular</span>
              </a>
            </div>
          </div>
          <FormSheet />
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg-muted)]">
        <div className="mx-auto grid max-w-[88rem] gap-px bg-[color:var(--border)] px-5 sm:px-8 lg:grid-cols-3">
          {channels.map((channel) => (
            <article key={channel.eyebrow} className="bg-white p-8 sm:p-10">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{channel.eyebrow}</p>
              <a href={channel.href} className="mt-6 block">
                <span
                  {...(channel.phone ? { "data-phone-number": true } : {})}
                  className="font-display block break-words text-3xl font-light leading-tight tracking-tight text-[color:var(--ink)] sm:text-4xl"
                >
                  {channel.title}
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {channel.text}
              </p>
              <a href={channel.href} className="link-arrow mt-6">
                {channel.cta}
              </a>
            </article>
          ))}
          <article className="bg-white p-8 sm:p-10">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Adresse</p>
            <h2 className="font-display mt-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              {siteConfig.address.street}
              <span className="mt-1 block text-[color:var(--muted)]">
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </span>
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              {siteConfig.openingHoursDisplay[0]}
              <br />
              {siteConfig.openingHoursDisplay[1]}
            </p>
            <a href={mapsHref} target="_blank" rel="noreferrer" className="link-arrow mt-6">
              In Google Maps öffnen
            </a>
          </article>
        </div>
      </section>

      <section id="anliegen" className="scroll-mt-28 bg-[color:var(--bg-muted)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Anliegen</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              Was in dieses Formular gehört.
            </h2>
            <p className="mt-5 max-w-md text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Frage, Beschwerde oder Rückmeldung. Wir melden uns. Ein Reparaturtermin entsteht
              hier nicht.
            </p>
            <ol className="mt-10 grid gap-px bg-[color:var(--border)]">
              {topics.map((topic) => (
                <li key={topic.number} className="bg-white p-6 sm:p-7">
                  <span className="numeral text-[color:var(--accent)]">{topic.number}</span>
                  <h3 className="font-display mt-4 text-2xl font-light tracking-tight">{topic.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{topic.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal border border-[color:var(--border)] bg-white p-6 sm:p-10">
            <ContactForm
              eyebrow="Anliegen"
              title="Anliegen senden"
              defaultRequestType="anliegen"
              lockRequestType
              includeCustomerType
              phoneHref={siteConfig.phoneHref}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-8 sm:pb-10">
        <div className="mx-auto grid max-w-[88rem] lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Standort</p>
            <h2 className="font-display mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              {siteConfig.address.street}
            </h2>
            <p className="mt-3 text-lg font-light text-[color:var(--muted)]">
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
            <dl className="mt-8 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)]">
              <div className="bg-white px-4 py-4">
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted-soft)]">
                  Geöffnet
                </dt>
                <dd className="mt-1 text-sm font-light text-[color:var(--ink)]">
                  {siteConfig.openingHoursDisplay[0]}
                </dd>
              </div>
              <div className="bg-white px-4 py-4">
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted-soft)]">
                  Wochenende
                </dt>
                <dd className="mt-1 text-sm font-light text-[color:var(--ink)]">
                  {siteConfig.openingHoursDisplay[1]}
                </dd>
              </div>
            </dl>
            <a href={mapsHref} target="_blank" rel="noreferrer" className="link-arrow mt-8">
              In Google Maps öffnen
            </a>
            <ul className="mt-10 flex flex-wrap gap-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex border border-[color:var(--border)] px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition hover:border-[color:var(--ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <iframe
            title="Google Maps Standort MONTER Reparatur & Service"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="h-80 w-full border-0 sm:h-[28rem] lg:h-full lg:min-h-[32rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <RepairBookingCta />
    </main>
  );
}

function FormSheet() {
  return (
    <div className="reveal relative mx-auto w-full max-w-[28rem]" aria-hidden="true">
      <svg viewBox="0 0 480 560" className="h-auto w-full">
        <circle cx="250" cy="280" r="220" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <rect x="64" y="28" width="352" height="504" fill="#f4f4f5" />
        <path d="M64 28h56" stroke="#a8112a" strokeWidth="3" />
        <text
          x="96"
          y="84"
          fill="#a8112a"
          fontSize="13"
          letterSpacing="3.2"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        >
          NACHRICHT
        </text>
        <text
          x="96"
          y="128"
          fill="#0a0a0a"
          fontSize="32"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        >
          Ihr Anliegen
        </text>
        <SheetField y={168} label="Name" width={210} />
        <SheetField y={228} label="E-Mail" width={250} />
        <text
          x="96"
          y="300"
          fill="#6b6b74"
          fontSize="12"
          letterSpacing="2.4"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        >
          ANLIEGEN
        </text>
        <path
          id="contact-line"
          className="contact-dash"
          d="M96 324h230"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="1.5"
        />
        <path d="M96 354h176" stroke="#d3d3d8" strokeWidth="1.3" />
        <path d="M96 384h204" stroke="#d3d3d8" strokeWidth="1.3" />
        <circle className="contact-motion" r="4.5" fill="#a8112a">
          <animateMotion dur="5.5s" repeatCount="indefinite">
            <mpath href="#contact-line" />
          </animateMotion>
        </circle>
        <rect x="96" y="440" width="168" height="48" fill="#0a0a0a" />
        <text
          x="124"
          y="469"
          fill="#ffffff"
          fontSize="13"
          letterSpacing="2.6"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        >
          SENDEN
        </text>
      </svg>
    </div>
  );
}

function SheetField({ y, label, width }: { y: number; label: string; width: number }) {
  return (
    <g>
      <text
        x="96"
        y={y}
        fill="#6b6b74"
        fontSize="12"
        letterSpacing="2.4"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
      >
        {label.toUpperCase()}
      </text>
      <path d={`M96 ${y + 18}h${width}`} stroke="#d3d3d8" strokeWidth="1.3" />
    </g>
  );
}
