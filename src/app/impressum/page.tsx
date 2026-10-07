import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const companyName = siteConfig.companyName;
const serviceName = siteConfig.serviceName;
const email = siteConfig.email;
const phone = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;
const vatId = siteConfig.vatId;
/** Anschrift laut Firmenbuch, nicht die Kurzform der übrigen Seiten. */
const registeredAddress = "Rappgasse 1/3-6, 1210 Wien, Österreich";
const registerNumber = "FN 656028 y";
const registerCourt = "Handelsgericht Wien";
const mapEmbedSrc = `https://maps.google.com/maps?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}&z=16&hl=de&output=embed`;
const gewerbeordnungUrl =
  "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517";

export const metadata: Metadata = buildMetadata({
  title: "Impressum | MONTER Reparatur & Service",
  description:
    "Impressum der Tech Craft Consulting GmbH, Medieninhaberin von MONTER Reparatur & Service: Sitz Wien, Firmenbuch, Geschäftsführung und Kontakt.",
  path: "/impressum"
});

const providerDetails: Detail[] = [
  { label: "Firma", value: companyName },
  { label: "Rechtsform", value: "Gesellschaft mit beschränkter Haftung" },
  { label: "Sitz", value: "Wien" },
  { label: "Anschrift", value: registeredAddress },
  {
    label: "Telefon",
    value: (
      <a href={`tel:${phoneHref}`} data-legal-phone className="border-b border-current">
        {phone}
      </a>
    )
  },
  {
    label: "E-Mail",
    value: (
      <a href={`mailto:${email}`} className="border-b border-current">
        {email}
      </a>
    )
  },
  { label: "UID-Nummer", value: vatId },
  { label: "Firmenbuch", value: registerNumber },
  { label: "Gericht", value: registerCourt }
];

const disclosureDetails: Detail[] = [
  { label: "Medieninhaber", value: companyName },
  {
    label: "Gegenstand",
    value:
      "Consulting, sämtliche handwerklichen Tätigkeiten, Installateur, Reparatur von Haushaltsgeräten."
  },
  { label: "Geschäftsführung", value: "Ramzan Mugaev" },
  { label: "Vertretung", value: "Der Geschäftsführer vertritt die Gesellschaft selbständig." },
  {
    label: "Richtung",
    value: `Information über die Reparatur- und Serviceleistungen von ${serviceName} und Förderung des Absatzes dieser Leistungen.`
  }
];

type Detail = {
  label: string;
  value: ReactNode;
};

const legalLinks = [
  { href: "/dsgvo", label: "Datenschutz" },
  { href: "/agb", label: "AGB" }
];

function DetailList({ items }: { items: Detail[] }) {
  return (
    <dl>
      {items.map((item) => (
        <div
          key={item.label}
          className="grid gap-1 border-b border-[color:var(--border)] py-5 sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-8"
        >
          <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
            {item.label}
          </dt>
          <dd className="font-light leading-relaxed text-[color:var(--ink)]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Impressum</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
                Angaben zum Rechtsträger.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {serviceName} ist die Marke dieses Webauftritts. Medieninhaber und Diensteanbieter
                ist die {companyName} mit Sitz in Wien.
              </p>
            </div>

            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Kontakt</p>
              <a
                href={`tel:${phoneHref}`}
                data-legal-phone
                className="font-display mt-4 block text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="mt-4 block break-words text-sm font-light text-[color:var(--ink)]"
              >
                {email}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {siteConfig.openingHoursDisplay[0]}
                <br />
                {siteConfig.openingHoursDisplay[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-px bg-[color:var(--border)] lg:grid-cols-3">
            <article className="bg-white p-8 lg:p-10">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Medieninhaber</p>
              <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">{companyName}</h2>
              <p className="mt-5 font-light leading-relaxed text-[color:var(--muted)]">
                {registeredAddress}
              </p>
            </article>
            <article className="bg-white p-8 lg:p-10">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Marke</p>
              <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">{serviceName}</h2>
              <p className="mt-5 font-light leading-relaxed text-[color:var(--muted)]">
                Öffentlicher Auftritt für Reparatur und Service in Wien.
              </p>
            </article>
            <article className="bg-[color:var(--ink)] p-8 text-white lg:p-10">
              <p className="cap-line-light tracking-eyebrow text-white/70">Register</p>
              <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">{registerNumber}</h2>
              <p className="mt-5 font-light leading-relaxed text-white/70">
                {registerCourt}
                <br />
                UID {vatId}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-white pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="cap-line tracking-eyebrow">Pflichtangaben</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-light leading-tight tracking-tight">
              Anbieter und Offenlegung.
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Die Angaben folgen § 5 E-Commerce-Gesetz, § 14 Unternehmensgesetzbuch und § 25
              Mediengesetz.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="link-arrow">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="reveal">
            <h3 className="font-display text-2xl font-normal tracking-tight">Anbieter</h3>
            <DetailList items={providerDetails} />

            <h3 className="font-display mt-14 text-2xl font-normal tracking-tight">Offenlegung</h3>
            <DetailList items={disclosureDetails} />

            <h3 className="font-display mt-14 text-2xl font-normal tracking-tight">Gewerbe</h3>
            <div className="border-b border-[color:var(--border)] py-5">
              <p className="font-light leading-relaxed text-[color:var(--ink)]">
                Die Gesellschaft unterliegt der Gewerbeordnung 1994. Gesetzliche
                Interessenvertretung ist die Wirtschaftskammer Wien, Mitgliedstaat Österreich.
                Aufsichtsbehörde ist der Magistrat der Stadt Wien, Magistratisches Bezirksamt für
                den 21. Bezirk.
              </p>
              <a
                href={gewerbeordnungUrl}
                target="_blank"
                rel="noreferrer"
                className="link-arrow mt-5"
              >
                Gewerbeordnung im Rechtsinformationssystem
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid overflow-hidden border border-[color:var(--border)] bg-white lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-8 lg:p-12">
              <p className="cap-line tracking-eyebrow">Standort</p>
              <h2 className="font-display mt-8 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Sitz in Floridsdorf.
              </h2>
              <p className="mt-6 font-light leading-relaxed text-[color:var(--muted)]">
                {registeredAddress}
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {siteConfig.openingHoursDisplay[0]}
                <br />
                {siteConfig.openingHoursDisplay[1]}
              </p>
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="link-arrow mt-8"
              >
                In Google Maps öffnen
              </a>
            </div>
            <iframe
              title={`Karte: ${companyName}, ${registeredAddress}`}
              src={mapEmbedSrc}
              className="h-80 w-full border-0 lg:h-full lg:min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
