import type { ReactNode } from "react";
import Link from "next/link";
import { HubFaq } from "../HubBlocks";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { allGaragePages, type GaragePage } from "./garagePages";

const voice: Record<string, { kicker: string; ctaTitle: string; ctaText: string }> = {
  "oeffnet-nicht": {
    kicker: "Still oder nur ein Summen.",
    ctaTitle: "Torart, Antrieb, was es gerade tut.",
    ctaText:
      "Ob der Antrieb still bleibt, summt oder das Tor auch von Hand bleischwer ist, entscheidet, ob wir beim Funk, beim Kondensator oder bei der Feder anfangen. Ein Tor, das ein Fahrzeug einschließt, klären wir am Telefon vorrangig. Die Anfrage ist noch kein Auftrag."
  },
  "schliesst-nicht": {
    kicker: "Es fährt zurück, bevor es zu ist.",
    ctaTitle: "Wo es stoppt, und ob die Lichtschranke frei ist.",
    ctaText:
      "Kurz vor dem Boden wieder auf heißt meist Kraftbegrenzung, nicht Motorschaden. Nennen Sie die Stelle und die Torart. Den Aufwand sagen wir vor Ort, bevor ein Teil bestellt wird. Die Anfrage ist noch kein Auftrag."
  },
  klemmt: {
    kicker: "Es schleift in der Führung.",
    ctaTitle: "Geräusch, seit wann, welche Torart.",
    ctaText:
      "Schleifen und ein schiefes Tor klären wir an Laufrollen, Schienen und Seil, nicht am Motor. Steht das Tor schief, bitte nicht weiterfahren. Die Anfrage ist noch kein Auftrag."
  },
  sektionaltor: {
    kicker: "Paneele unter die Decke.",
    ctaTitle: "Hersteller, Breite, wo es hängt.",
    ctaText:
      "Ein Paneel, eine Dichtung oder ein schiefes Tor brauchen unterschiedliche Teile. Foto der Schadstelle und Torart reichen für den Start. Den Aufwand nennen wir vor Ort, bevor etwas bestellt wird. Die Anfrage ist noch kein Auftrag."
  },
  "schwingtor-rolltor": {
    kicker: "Ein Blatt oder ein Panzer.",
    ctaTitle: "Torart, und ob es von selbst zufällt.",
    ctaText:
      "Ein Schwingtor, das zufällt, und ein Rollpanzer, der aus der Führung ist, sind zwei verschiedene Eingriffe. Bitte keines von beiden selbst zurücksetzen. Die Anfrage ist noch kein Auftrag."
  },
  "torantrieb-motor": {
    kicker: "Strom, Funk, dann erst der Motor.",
    ctaTitle: "Marke, Geräusch, Handsender.",
    ctaText:
      "Ob er still bleibt, klickt oder brummt, sagt uns, ob Funk, Kondensator oder Mechanik zuerst dran ist. Marke und Modell vom Typenschild reichen. Die Anfrage ist noch kein Auftrag."
  },
  federwechsel: {
    kicker: "Bitte nicht selbst nachspannen.",
    ctaTitle: "Torart, Maße, Foto der Bruchstelle.",
    ctaText:
      "Breite, Höhe und ein Foto der Federaufnahme reichen, damit das passende Paar mitkommt. Federbrüche behandeln wir vorrangig, häufig am selben oder nächsten Werktag. Die Anfrage ist noch kein Auftrag."
  },
  "laufrollen-schienen": {
    kicker: "Schienen reinigen, nicht fetten.",
    ctaTitle: "Seit wann es laut ist, und die Torart.",
    ctaText:
      "Ein lautes Tor ist oft ein Satz Laufrollen, nicht der Antrieb. Wir tauschen den ganzen Satz und reinigen die Schienen. Den Aufwand nennen wir vor Ort. Die Anfrage ist noch kein Auftrag."
  },
  "wartung-sicherheitspruefung": {
    kicker: "Einmal im Jahr, privat.",
    ctaTitle: "Torart, wie oft es am Tag fährt.",
    ctaText:
      "Privat genügt meist ein Jahr. Sammelgarage und Betrieb mit vielen Fahrten prüfen wir halbjährlich. Kraftbegrenzung und Lichtschranke gehören zur Prüfung. Die Anfrage ist noch kein Auftrag."
  },
  fehlercodes: {
    kicker: "Nur innerhalb einer Baureihe.",
    ctaTitle: "Zahl, Marke, Modell.",
    ctaText:
      "Notieren Sie die Anzeige oder die Blinkgruppen, bevor der Strom aus ist. Dieselbe Zahl bedeutet bei der nächsten Baureihe etwas anderes. Die Anfrage ist noch kein Auftrag."
  }
};

function DoorDrawing({ slug }: { slug: string }) {
  const ink = "currentColor";
  const accent = "var(--accent)";
  const frame = <rect x="86" y="46" width="148" height="150" fill="none" stroke={ink} strokeWidth="1.5" />;
  const panels = <path d="M86 84h148M86 122h148M86 160h148" fill="none" stroke={ink} strokeWidth="1.5" />;

  let drawing: ReactNode = (
    <>
      {frame}
      {panels}
      <path d="M98 168h124" fill="none" stroke={accent} strokeWidth="1.5" />
    </>
  );

  if (slug === "federwechsel") {
    drawing = (
      <>
        {frame}
        {panels}
        <path d="M36 58h78" fill="none" stroke={ink} strokeWidth="1.5" />
        <path d="M206 58h78" fill="none" stroke={accent} strokeWidth="1.5" />
        <path d="M48 58c6-14 18-14 24 0s18 14 24 0 18-14 24 0" fill="none" stroke={ink} strokeWidth="1.5" />
        <path d="M214 58c6-14 18-14 24 0s18 14 24 0" fill="none" stroke={accent} strokeWidth="1.5" />
      </>
    );
  } else if (slug === "oeffnet-nicht" || slug === "torantrieb-motor") {
    drawing = (
      <>
        <path d="M86 28h148" fill="none" stroke={ink} strokeWidth="1.5" />
        <rect x="168" y="16" width="40" height="18" fill="none" stroke={ink} strokeWidth="1.5" />
        <circle cx="188" cy="25" r="3" fill={accent} />
        {frame}
        {panels}
      </>
    );
  } else if (slug === "schliesst-nicht") {
    drawing = (
      <>
        {frame}
        {panels}
        <path d="M150 196v18" fill="none" stroke={ink} strokeWidth="1.5" />
        <path d="M150 214l-8-8M150 214l8-8" fill="none" stroke={accent} strokeWidth="1.5" />
      </>
    );
  } else if (slug === "klemmt" || slug === "laufrollen-schienen") {
    drawing = (
      <>
        <path d="M70 36v176M250 36v176" fill="none" stroke={ink} strokeWidth="1.5" />
        {frame}
        {panels}
        <circle cx="70" cy="96" r="7" fill="none" stroke={ink} strokeWidth="1.5" />
        <circle cx="250" cy="96" r="7" fill="none" stroke={ink} strokeWidth="1.5" />
        <circle cx="58" cy="150" r="7" fill="none" stroke={accent} strokeWidth="1.5" />
      </>
    );
  } else if (slug === "schwingtor-rolltor") {
    drawing = (
      <>
        <path d="M96 46h128l18 150H78z" fill="none" stroke={ink} strokeWidth="1.5" />
        <path d="M104 196h112" fill="none" stroke={accent} strokeWidth="1.5" />
      </>
    );
  } else if (slug === "fehlercodes") {
    drawing = (
      <>
        <text x="28" y="78" fill={ink} fontSize="32">
          5
        </text>
        <text x="92" y="72" fill={ink} fontSize="13" letterSpacing="1.6">
          SUPRAMATIC
        </text>
        <text x="28" y="132" fill={ink} fontSize="32">
          15
        </text>
        <text x="100" y="126" fill={ink} fontSize="13" letterSpacing="1.6">
          MARANTEC
        </text>
        <text x="28" y="186" fill={accent} fontSize="32">
          2×
        </text>
        <text x="100" y="180" fill={ink} fontSize="13" letterSpacing="1.6">
          ROLLMATIC
        </text>
      </>
    );
  } else if (slug === "wartung-sicherheitspruefung") {
    drawing = (
      <>
        {frame}
        {panels}
        <path d="M248 78l10 10 20-24" fill="none" stroke={accent} strokeWidth="1.5" />
      </>
    );
  }

  return (
      <svg
        viewBox="0 0 320 240"
        role="img"
        aria-label={
          slug === "fehlercodes"
            ? "Anzeige 5 bei SupraMatic, 15 bei Marantec, zweimal blinken bei RollMatic. Dieselbe Zahl gilt nur in einer Baureihe."
            : "Schema eines Garagentors"
        }
        className="h-auto w-full text-[color:var(--ink)]"
      >
      {drawing}
    </svg>
  );
}

export function GarageDoorMark({ slug }: { slug: string }) {
  return (
    <figure className="border border-[color:var(--border)] bg-[color:var(--bg-muted)]">
      <div className="px-6 py-8 sm:px-10 sm:py-10">
        <DoorDrawing slug={slug} />
      </div>
      <figcaption className="border-t border-[color:var(--border)] px-5 py-3 text-sm font-light text-[color:var(--muted)]">
        Schema, kein Einsatzfoto.
      </figcaption>
    </figure>
  );
}

export function GarageFrame({ page }: { page: GaragePage }) {
  const path = `/garagentore/${page.slug}`;
  const closing = voice[page.slug] ?? voice["sektionaltor"];
  const related = (page.relatedSlugs ?? []).flatMap((slug) => {
    const match = allGaragePages.find((item) => item.slug === slug);
    return match ? [match] : [];
  });
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      url: `${siteConfig.siteUrl}${path}`,
      areaServed: [
        { "@type": "City", name: "Wien" },
        { "@type": "State", name: "Niederösterreich" }
      ],
      provider: localBusinessProviderRef
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "Garagentore", item: `${siteConfig.siteUrl}/garagentore` },
        { "@type": "ListItem", position: 3, name: page.title, item: `${siteConfig.siteUrl}${path}` }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto grid max-w-[88rem] items-end gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                <li>
                  <Link href="/" className="hover:text-[color:var(--ink)]">
                    Start
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/garagentore" className="hover:text-[color:var(--ink)]">
                    Garagentore
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[color:var(--ink)]">{page.category}</li>
              </ol>
            </nav>
            <p className="cap-line tracking-eyebrow mt-8 text-[color:var(--muted)]">{closing.kicker}</p>
            <h1 className="font-display mt-6 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">{page.h1}</h1>
            <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={`tel:${siteConfig.phoneHref}`}>
                <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </a>
              <Link className="btn-ghost" href="/reparatur-buchen">
                Termin anfragen
              </Link>
            </div>
          </div>
          <GarageDoorMark slug={page.slug} />
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <ul className="grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
            {page.sections.map((section) => (
              <li key={section.title} className="bg-white px-6 py-8 sm:px-8 sm:py-10">
                <h2 className="font-display text-2xl font-light tracking-tight">{section.title}</h2>
                <p className="mt-4 text-base font-light leading-7 text-[color:var(--muted)]">{section.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-[color:var(--border)]">
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8">
            <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Daneben</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">Was dazugehört.</h2>
            <ul className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="bg-white">
                  <Link href={`/garagentore/${item.slug}`} className="block h-full px-6 py-8">
                    <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.category}</span>
                    <h3 className="font-display mt-4 text-2xl font-light tracking-tight text-[color:var(--ink)]">{item.h1}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <HubFaq eyebrow="Häufige Fragen" title={`${page.category}: kurz beantwortet.`} items={page.faq} />

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">{closing.ctaTitle}</h2>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-[color:var(--muted)]">{closing.ctaText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href={`tel:${siteConfig.phoneHref}`}>
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
            <Link className="btn-ghost" href="/reparatur-buchen">
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
