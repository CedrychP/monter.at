import Image from "next/image";
import Link from "next/link";
import { HubFaq } from "../HubBlocks";
import { servedAreas } from "../einsatzgebiete/regionPages";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import type { ApplianceProblemPage } from "./applianceProblems";
import { applianceErrorIndex } from "./errorCodeIndex";

const photos: Record<string, { src: string; alt: string }> = {
  "pumpt-nicht-ab": {
    src: "/assets/haushalt-foto-pumpt-nicht-ab.webp",
    alt: "Geöffnete Waschmaschine, Wasser steht in der Trommel."
  },
  "kuehlt-nicht": {
    src: "/assets/haushalt-foto-kuehlt-nicht.webp",
    alt: "Geöffneter Kühlschrank, die Rückwand ist leicht vereist."
  },
  "heizt-nicht": {
    src: "/assets/haushalt-foto-heizt-nicht.webp",
    alt: "Geöffneter Backofen, der Innenraum ist kalt und dunkel."
  },
  "trocknet-nicht": {
    src: "/assets/haushalt-foto-trocknet-nicht.webp",
    alt: "Geöffneter Trockner mit feuchten Tüchern in der Trommel."
  },
  fehlercodes: {
    src: "/assets/haushalt-foto-fehlercodes.webp",
    alt: "Bedienfeld mit dunklem Display ohne Ziffer und einer roten Leuchte."
  }
};

function ProblemPhoto({ slug }: { slug: string }) {
  const photo = photos[slug];
  if (!photo) return null;

  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--bg-muted)]">
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 36rem, 100vw" className="object-cover" />
      </div>
      <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</figcaption>
    </figure>
  );
}

function ErrorCodeDatabase() {
  const rows = applianceErrorIndex();
  const devices: { device: string; brands: { brand: string; href: string; rows: typeof rows }[] }[] = [];

  for (const row of rows) {
    let deviceGroup = devices.find((entry) => entry.device === row.device);
    if (!deviceGroup) {
      deviceGroup = { device: row.device, brands: [] };
      devices.push(deviceGroup);
    }
    let brandGroup = deviceGroup.brands.find((entry) => entry.brand === row.brand);
    if (!brandGroup) {
      brandGroup = { brand: row.brand, href: row.href, rows: [] };
      deviceGroup.brands.push(brandGroup);
    }
    brandGroup.rows.push(row);
  }

  return (
    <div className="mt-10 space-y-14">
      {devices.map((device) => (
        <section key={device.device}>
          <h3 className="font-display text-3xl font-light tracking-tight">{device.device}</h3>
          <div className="mt-6 space-y-8">
            {device.brands.map((brand) => (
              <div key={brand.brand}>
                <h4 className="text-[0.72rem] font-medium uppercase tracking-[0.18em]">
                  <Link href={brand.href}>
                    <span className="text-[color:var(--accent)]">{brand.brand}</span>
                  </Link>
                </h4>
                <ul className="mt-3 border-t border-[color:var(--border)]">
                  {brand.rows.map((row) => (
                    <li key={`${row.brand}-${row.code}`} className="grid gap-2 border-b border-[color:var(--border)] py-4 sm:grid-cols-[6rem_1fr] sm:items-baseline">
                      <p className="font-display text-2xl font-light tracking-tight">{row.code}</p>
                      <p className="text-base font-light leading-7 text-[color:var(--muted)]">{row.meaning}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ApplianceFrame({ page }: { page: ApplianceProblemPage }) {
  const path = `/haushaltsgeraete/${page.slug}`;
  const [lead, ...rest] = page.sections;
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
            <p className="cap-line tracking-eyebrow mt-8 text-[color:var(--muted)]">Nur innerhalb einer Marke.</p>
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
            <ProblemPhoto slug={page.slug} />
            <div>
              <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">{lead.title}</h2>
              <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">{lead.body}</p>
            </div>
          </div>
        </section>
      ) : null}

      {page.slug === "fehlercodes" ? (
        <section className="border-b border-[color:var(--border)]">
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
            <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Nur freigegebene Codes</p>
            <h2 className="font-display mt-6 text-4xl font-light tracking-tight sm:text-5xl">Nach Gerät und Marke.</h2>
            <ErrorCodeDatabase />
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="bg-[color:var(--bg-muted)]">
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
            <ul className="grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
              {rest.map((section) => (
                <li key={section.title} className="bg-white px-6 py-8 sm:px-8 sm:py-10">
                  <h2 className="font-display text-2xl font-light tracking-tight">{section.title}</h2>
                  <p className="mt-4 text-base font-light leading-7 text-[color:var(--muted)]">{section.body}</p>
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
          <ul className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-3">
            {page.related.map((item) => (
              <li key={item.href} className="bg-white">
                <Link href={item.href} className="block h-full px-6 py-8">
                  <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.category}</span>
                  <h3 className="font-display mt-4 text-2xl font-light tracking-tight text-[color:var(--ink)]">{item.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title={`${page.category}: kurz beantwortet.`} items={page.faq} />

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Marke, Modell, was es gerade tut.</h2>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Die Modellnummer vom Typenschild und die Anzeige, notiert bevor der Strom aus ist, sagen uns, welche Teile mitkommen. Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird. Die Anfrage ist noch kein Auftrag.
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
