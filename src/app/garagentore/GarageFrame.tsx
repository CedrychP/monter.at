import Image from "next/image";
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

const sectionalPhoto = {
  src: "/assets/ueber-uns-garagentor-wien.webp",
  alt: "Geschlossenes Sektionaltor neben einer roten Ziegelwand, daneben eine Ampel."
};

export const garageSchemas: Record<string, { src: string; alt: string }> = {
  sektionaltor: {
    src: "/assets/garagentor-sektionaltor.webp",
    alt: "Schema eines Sektionaltors: waagrechte Paneele, seitliche Laufschienen, rote Bodendichtung."
  },
  "schwingtor-rolltor": {
    src: "/assets/garagentor-schwingtor-rolltor.webp",
    alt: "Schema eines Schwingtors mit Hebelarmen und eines Rolltors mit Lamellen."
  },
  "torantrieb-motor": {
    src: "/assets/garagentor-antrieb.webp",
    alt: "Schema eines Torantriebs: Laufschiene an der Decke, Motor und Gestänge zum Torblatt."
  },
  federwechsel: {
    src: "/assets/garagentor-feder.webp",
    alt: "Schema einer Torsionswelle: eine Feder durchgehend, die andere mit Lücke."
  },
  "laufrollen-schienen": {
    src: "/assets/garagentor-laufrollen.webp",
    alt: "Schema von Laufschienen. Eine Rolle liegt außerhalb der Führung."
  },
  "wartung-sicherheitspruefung": {
    src: "/assets/garagentor-wartung.webp",
    alt: "Schema einer Wartung: Torblatt, Lichtschranke und Prüfzeichen."
  },
  "oeffnet-nicht": {
    src: "/assets/garagentor-oeffnet-nicht.webp",
    alt: "Schema eines geschlossenen Tors. Der Antrieb an der Schiene bleibt stehen."
  },
  "schliesst-nicht": {
    src: "/assets/garagentor-schliesst-nicht.webp",
    alt: "Schema einer unterbrochenen Lichtschranke. Der Pfeil zeigt, dass das Tor zurückfährt."
  },
  klemmt: {
    src: "/assets/garagentor-klemmt.webp",
    alt: "Schema eines schiefen Torblatts. Eine Laufrolle liegt außerhalb der Schiene."
  },
  fehlercodes: {
    src: "/assets/garagentor-fehlercodes.webp",
    alt: "Anzeige 5 bei SupraMatic, 15 bei Marantec, zweimal blinken bei RollMatic. Dieselbe Zahl gilt nur in einer Baureihe."
  }
};

export function GarageSchemaImage({ slug, sizes }: { slug: string; sizes: string }) {
  const media = garageSchemas[slug] ?? garageSchemas.sektionaltor;
  return <Image src={media.src} alt={media.alt} fill sizes={sizes} className="object-contain" />;
}

export function GarageDoorMark({ slug }: { slug: string }) {
  const photo = slug === "sektionaltor";
  const media = photo ? sectionalPhoto : (garageSchemas[slug] ?? garageSchemas.sektionaltor);

  return (
    <figure className="border border-[color:var(--border)] bg-[color:var(--bg-muted)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 34rem, 100vw"
          className={photo ? "object-cover" : "object-contain"}
        />
      </div>
      <figcaption className="border-t border-[color:var(--border)] px-5 py-3 text-sm font-light text-[color:var(--muted)]">
        {photo ? "Beispielbild, kein Einsatzfoto." : "Schema, kein Einsatzfoto."}
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
