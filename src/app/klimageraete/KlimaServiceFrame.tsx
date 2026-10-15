import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { HubFaq } from "../HubBlocks";
import { klimaHref } from "../serviceHrefs";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { allKlimaPages, type KlimaPage } from "./klimaPages";

type KlimaServiceFrameProps = {
  page: KlimaPage;
  kicker: string;
  graphic: ReactNode;
  pattern?: "dots" | "grid" | "plain";
  ctaTitle: string;
  ctaText: string;
  children: ReactNode;
};

const patterns = {
  dots: "opacity-70 [background-image:radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1.2px)] [background-size:22px_22px]",
  grid: "opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]",
  plain: ""
};

export function KlimaPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 36rem, 100vw" className="object-cover" />
      </div>
      <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</figcaption>
    </figure>
  );
}

export function KlimaServiceFrame({ page, kicker, graphic, pattern = "plain", ctaTitle, ctaText, children }: KlimaServiceFrameProps) {
  const path = `/klimageraete/${page.slug}`;
  const related = (page.relatedSlugs ?? []).flatMap((slug) => {
    const match = allKlimaPages.find((item) => item.slug === slug);
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
        { "@type": "ListItem", position: 2, name: "Klimageräte", item: `${siteConfig.siteUrl}/klimageraete` },
        { "@type": "ListItem", position: 3, name: page.title, item: `${siteConfig.siteUrl}${path}` }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden border-b border-white/10 bg-[color:var(--ink)] text-white">
        {pattern !== "plain" ? <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${patterns[pattern]}`} /> : null}
        <div className="relative mx-auto grid max-w-[88rem] items-end gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="max-w-xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/60">
                <li>
                  <Link href="/" className="hover:text-white">
                    Start
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/klimageraete" className="hover:text-white">
                    Klimageräte
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>{page.category}</li>
              </ol>
            </nav>
            <p className="mt-8 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent-on-dark)]">{kicker}</p>
            <h1 className="font-display mt-4 text-balance text-5xl font-light leading-[0.92] tracking-tight sm:text-6xl">{page.h1}</h1>
            <p className="mt-8 max-w-md text-[1.05rem] font-light leading-relaxed text-white/80">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
              <Link href="/reparatur-buchen" className="btn-on-dark-ghost">
                <span>Termin anfragen</span>
              </Link>
            </div>
          </div>
          <div className="border border-white/15 px-4 py-6 sm:px-8">{graphic}</div>
        </div>
      </section>

      {children}

      <section className="border-b border-[color:var(--border)] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <ul className="grid gap-px bg-[color:var(--ink)] lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="bg-white">
                <Link href={klimaHref(item.slug)} className="group block h-full px-6 py-7">
                  <h3 className="font-display text-2xl font-light tracking-tight group-hover:text-[color:var(--accent)]">{item.category}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title={`${page.category}: kurz beantwortet.`} items={page.faq} />

      <section className="bg-[color:var(--bg-muted)] text-[color:var(--ink)]">
        <div className="mx-auto grid max-w-[88rem] gap-10 px-5 pb-20 pt-4 sm:px-8 sm:pb-28 sm:pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Einschätzung</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">{ctaTitle}</h2>
            <p className="mt-5 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">{ctaText}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary min-h-16">
              <span>
                Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </span>
            </a>
            <Link href="/reparatur-buchen" className="btn-ghost min-h-16">
              <span>Termin anfragen</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
