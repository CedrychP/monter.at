import Image from "next/image";
import Link from "next/link";
import { HubFaq } from "../HubBlocks";
import { servedAreas } from "../einsatzgebiete/regionPages";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import type { AppliancePage } from "./appliancePages";

const photos: Record<string, { src: string; alt: string }> = {
  waschmaschine: {
    src: "/assets/haushalt-foto-waschmaschine.webp",
    alt: "Weiße Frontlader-Waschmaschine in einer schmalen Waschküche, Tür geschlossen."
  },
  geschirrspueler: {
    src: "/assets/haushalt-foto-geschirrspueler.webp",
    alt: "Einbaugeschirrspüler mit Holzfront in einer Küchenzeile, Tür geschlossen."
  },
  backofen: {
    src: "/assets/haushalt-foto-backofen.webp",
    alt: "Einbaubackofen unter einem schwarzen Glaskeramikfeld, Ofentür geschlossen."
  },
  herd: {
    src: "/assets/haushalt-foto-herd.webp",
    alt: "Schwarzes Glaskeramikkochfeld mit vier Zonen in einer Arbeitsplatte."
  },
  trockner: {
    src: "/assets/haushalt-foto-trockner.webp",
    alt: "Weißer Trockner neben einem Wäschekorb, Tür geschlossen."
  },
  kuehlschrank: {
    src: "/assets/haushalt-foto-kuehlschrank.webp",
    alt: "Kühl-Gefrierkombination aus Edelstahl in einer Küchennische, Türen geschlossen."
  },
  tiefkuehl: {
    src: "/assets/haushalt-foto-tiefkuehl.webp",
    alt: "Weißer Gefrierschrank mit senkrechtem Griff neben einem Vorratsregal, Tür geschlossen."
  },
  waschtrockner: {
    src: "/assets/haushalt-foto-waschtrockner.webp",
    alt: "Waschmaschine und Trockner übereinander in einer schmalen Nische."
  },
  dunstabzug: {
    src: "/assets/haushalt-foto-dunstabzug.webp",
    alt: "Schwarze Schräghaube über einem Gaskochfeld."
  },
  fernseher: {
    src: "/assets/haushalt-foto-fernseher.webp",
    alt: "Schwarzer Fernseher mit dunklem Bildschirm auf einem Holzsideboard."
  }
};

const sanitaer = new Set(["waschmaschine", "geschirrspueler", "trockner", "waschtrockner"]);

type RelatedEntry = {
  category: string;
  title: string;
  href: string;
};

function RelatedRows({ items }: { items: RelatedEntry[] }) {
  return (
    <ul className="mt-8 border-t border-[color:var(--border)]">
      {items.map((item) => (
        <li key={item.href} className="border-b border-[color:var(--border)]">
          <Link href={item.href} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline">
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.category}</span>
            <span className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ApplianceDeviceFrame({
  page,
  nearby,
  brands
}: {
  page: AppliancePage;
  nearby: RelatedEntry[];
  brands: RelatedEntry[];
}) {
  const path = `/haushaltsgeraete/${page.slug}`;
  const photo = photos[page.slug];
  const [lead, ...rest] = page.sections;
  const group = sanitaer.has(page.slug) ? "Sanitärgeräte" : "Küche & Wohnen";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      url: `${siteConfig.siteUrl}${path}`,
      areaServed: servedAreas.map((area) => ({ "@type": area.type, name: area.name })),
      provider: localBusinessProviderRef
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "Haushaltsgeräte", item: `${siteConfig.siteUrl}/haushaltsgeraete` },
        { "@type": "ListItem", position: 3, name: page.title, item: `${siteConfig.siteUrl}${path}` }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                <li>
                  <Link href="/" className="hover:text-[color:var(--ink)]">
                    Start
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/haushaltsgeraete" className="hover:text-[color:var(--ink)]">
                    Haushaltsgeräte
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[color:var(--ink)]">{page.category}</li>
              </ol>
            </nav>
            <p className="cap-line tracking-eyebrow mt-8 text-[color:var(--muted)]">{group}</p>
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
        </div>
      </section>

      {lead ? (
        <section className="border-b border-[color:var(--border)]">
          <div className="mx-auto grid max-w-[88rem] items-start gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {photo ? (
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--bg-muted)]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 36rem, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</figcaption>
              </figure>
            ) : null}
            <div>
              <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">{lead.title}</h2>
              <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">{lead.body}</p>
            </div>
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section>
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
            <ul className="border-t border-[color:var(--border)]">
              {rest.map((section) => (
                <li key={section.title} className="grid items-start gap-4 border-b border-[color:var(--border)] py-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
                  <h2 className="font-display text-2xl font-light tracking-tight sm:text-3xl">{section.title}</h2>
                  <p className="text-lg font-light leading-8 text-[color:var(--muted)]">{section.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Daneben</p>
          <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">Was dazugehört.</h2>
          <RelatedRows items={nearby} />
          {brands.length > 0 ? (
            <div className="mt-16">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">Nach der Marke.</h2>
              <RelatedRows items={brands} />
            </div>
          ) : null}
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title={`${page.category}: kurz beantwortet.`} items={page.faq} />

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Marke, Modell, was es gerade tut.</h2>
          <ul className="mt-8 max-w-xl border-t border-[color:var(--border)]">
            {page.checklist.map((item) => (
              <li key={item} className="border-b border-[color:var(--border)] py-3 text-base font-light text-[color:var(--ink)]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird. Die Anfrage ist noch kein Auftrag.
          </p>
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
