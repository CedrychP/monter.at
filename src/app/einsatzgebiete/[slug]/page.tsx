import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../DetailPageLayout";
import { HubDetailLinks, HubFaq } from "../../HubBlocks";
import { getRegionPage, regionPages, type RegionPage, type RegionService } from "../regionPages";
import { findLocationByCityName, getLocationsForRegion, locationHref } from "../locationPages";

type RegionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const serviceLinks: Record<RegionService, { label: string; href: string; text: string }> = {
  haushaltsgeraete: {
    label: "Haushaltsgeräte",
    href: "/haushaltsgeraete",
    text: "Waschmaschine, Geschirrspüler, Backofen, Kühlgerät, Trockner, Dunstabzug und Fernseher."
  },
  garagentore: {
    label: "Garagentore",
    href: "/garagentore",
    text: "Federwechsel, Torantrieb und Motor, Laufrollen und Schienen, Wartung und Sicherheitsprüfung."
  },
  klimageraete: {
    label: "Klimageräte",
    href: "/klimageraete",
    text: "Split- und Multi-Split-Anlagen, Monoblock-Geräte, Kältemittel, Elektronik und Wartung."
  }
};

const anfrageChecklist = [
  "Postleitzahl",
  "Marke & Modellnummer",
  "Fehlercode",
  "Fehlerbild",
  "Erreichbarkeit"
];

export function generateStaticParams() {
  return regionPages.map((region) => ({
    slug: region.slug
  }));
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionPage(slug);

  if (!region) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return {
    title: region.metaTitle,
    description: region.description,
    alternates: {
      canonical: `/einsatzgebiete/${region.slug}`
    },
    openGraph: {
      title: region.metaTitle,
      description: region.description,
      type: "website"
    },
    // Regionen ohne geprüfte Partnerdaten bleiben aus dem Index, sind aber erreichbar.
    ...(region.enriched ? {} : { robots: { index: false, follow: true } })
  };
}

function RegionFacts({ region }: { region: RegionPage }) {
  const isCore = region.coverage === "kerngebiet";

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Betreuung & Anfahrt</p>
          <h2 className="font-display mt-6 text-balance text-3xl font-light tracking-tight sm:text-4xl">
            {isCore
              ? `${region.name} mit eigenem Team.`
              : `${region.name} mit Technikern vor Ort.`}
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {region.coverageNote}
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-3">
          <div className="bg-white p-7">
            <p className="tracking-eyebrow text-[color:var(--muted)]">Anfahrt Haushaltsgeräte</p>
            <p className="font-display mt-4 text-3xl font-light tracking-tight text-[color:var(--accent)]">
              {region.travelFee.appliance}
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Pro Einsatz vor Ort, exklusive USt.
            </p>
          </div>
          <div className="bg-white p-7">
            <p className="tracking-eyebrow text-[color:var(--muted)]">Anfahrt Garagentore</p>
            <p className="font-display mt-4 text-3xl font-light tracking-tight text-[color:var(--accent)]">
              {region.travelFee.garage}
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Pro Einsatz vor Ort, exklusive USt.
            </p>
          </div>
          <div className="bg-white p-7">
            <p className="tracking-eyebrow text-[color:var(--muted)]">Termine</p>
            <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--ink)]">
              {region.responseNote}
            </p>
            <Link
              href="/preise"
              className="mt-5 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]"
            >
              Alle Preise
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <p className="cap-line tracking-eyebrow">Leistungen in {region.name}</p>
          <div className="mt-7 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {region.services.map((service) => {
              const entry = serviceLinks[service];
              return (
                <Link
                  key={service}
                  href={entry.href}
                  className="group flex flex-col bg-white p-7 transition hover:bg-[color:var(--bg-muted)]"
                >
                  <h3 className="font-display text-xl font-normal leading-tight tracking-tight">
                    {entry.label}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {entry.text}
                  </p>
                  <span className="mt-6 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                    Zur Übersicht
                    <span className="ml-1 transition group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegionCities({ region }: { region: RegionPage }) {
  const label = region.slug === "wien" ? "Bezirke" : "Orte";

  return (
    <section className="border-t border-[color:var(--border)] bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="cap-line tracking-eyebrow">{label}</p>
            <h2 className="font-display mt-7 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              {region.slug === "wien"
                ? "Alle 23 Bezirke."
                : `Wo wir in ${region.name} unterwegs sind.`}
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              {region.slug === "wien"
                ? "Einheitlicher Anfahrtssatz im gesamten Stadtgebiet — von der Inneren Stadt bis Liesing. Jeder Bezirk hat eine eigene Seite mit Baubestand, Zugang und typischen Einsätzen."
                : "Eine Auswahl, keine abschließende Liste. Steht Ihr Ort nicht dabei, rufen Sie kurz an — wir sagen Ihnen offen, ob ein Einsatz sinnvoll ist."}
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {region.cities.map((city) => {
              const location = findLocationByCityName(region.slug, city.name);
              const row = (
                <>
                  <span className="font-medium tabular-nums tracking-tight">{city.plz}</span>
                  <span
                    className={
                      location
                        ? "font-normal text-[color:var(--ink)] group-hover:text-[color:var(--accent)]"
                        : "font-normal text-[color:var(--muted)]"
                    }
                  >
                    {city.name}
                  </span>
                  {location ? (
                    <span
                      aria-hidden="true"
                      className="ml-auto text-[color:var(--accent)] transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  ) : null}
                </>
              );

              if (!location) {
                return (
                  <div
                    key={`${city.plz}-${city.name}`}
                    className="flex items-baseline gap-4 border-b border-[color:var(--border)] py-3 text-sm"
                  >
                    {row}
                  </div>
                );
              }

              return (
                <Link
                  key={`${city.plz}-${city.name}`}
                  href={locationHref(location)}
                  className="group flex items-baseline gap-4 border-b border-[color:var(--border)] py-3 text-sm transition"
                >
                  {row}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function RegionDetailPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = getRegionPage(slug);

  if (!region) {
    notFound();
  }

  const related = regionPages.filter((item) => item.slug !== region.slug).slice(0, 3);
  const locations = getLocationsForRegion(region.slug);

  return (
    <DetailPageLayout
      hub={{ label: "Einsatzgebiete", href: "/einsatzgebiete" }}
      category={region.name}
      h1={region.h1}
      intro={region.intro}
      contactNote="Nennen Sie Postleitzahl und Fehlerbild — wir sagen Ihnen sofort, wer kommt."
      checklist={anfrageChecklist}
      sections={region.sections}
      relatedEyebrow="Weitere Einsatzgebiete"
      relatedTitle="Wo wir außerdem arbeiten."
      related={related.map((item) => ({
        category: item.coverage === "kerngebiet" ? "Kerngebiet" : "Techniker vor Ort",
        title: item.name,
        href: `/einsatzgebiete/${item.slug}`
      }))}
      jsonLd={{
        name: `Reparatur und Service ${region.name}`,
        description: region.description,
        path: `/einsatzgebiete/${region.slug}`
      }}
      areaServed={{ type: region.slug === "wien" ? "City" : "State", name: region.name }}
    >
      <RegionFacts region={region} />
      {locations.length > 0 ? (
        <HubDetailLinks
          eyebrow={region.slug === "wien" ? "Bezirke" : "Städte"}
          title={
            region.slug === "wien" ? "Wien im Detail." : `Städte in ${region.name} im Detail.`
          }
          intro={
            region.slug === "wien"
              ? "Baubestand, Zugang und typische Einsätze unterscheiden sich zwischen den Bezirken deutlich. Diese Seiten sagen, worauf es an Ihrer Adresse ankommt."
              : "Eigene Seiten mit Baubestand, typischen Einsätzen und der Terminlage vor Ort."
          }
          links={locations.map((item) => ({
            label: item.name,
            href: locationHref(item),
            text: item.short
          }))}
        />
      ) : null}
      <RegionCities region={region} />
      <HubFaq
        eyebrow="Häufige Fragen"
        title={`Kurz geklärt: ${region.name}.`}
        items={region.faq}
      />
    </DetailPageLayout>
  );
}
