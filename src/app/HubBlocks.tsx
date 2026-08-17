import Link from "next/link";

export type HubDetailLink = {
  label: string;
  href: string;
  text: string;
};

export type HubFaqItem = {
  question: string;
  answer: string;
};

type HubDetailLinksProps = {
  eyebrow: string;
  title: string;
  intro: string;
  links: HubDetailLink[];
};

/** Verlinkt die Detailseiten eines Hubs — trägt die interne Verlinkung der Kategorie. */
export function HubDetailLinks({ eyebrow, title, intro, links }: HubDetailLinksProps) {
  return (
    <section className="border-t border-[color:var(--border)] bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{eyebrow}</p>
          <h2 className="font-display mt-6 text-balance text-3xl font-light tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">{intro}</p>
        </div>

        <div className="stagger mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col bg-white p-8 transition hover:bg-[color:var(--bg-muted)] lg:p-10"
            >
              <h3 className="font-display text-2xl font-normal leading-tight tracking-tight">
                {link.label}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {link.text}
              </p>
              <span className="mt-8 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                Zur Seite
                <span className="ml-1 transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

type HubFaqProps = {
  eyebrow: string;
  title: string;
  items: HubFaqItem[];
};

export function HubFaq({ eyebrow, title, items }: HubFaqProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="reveal grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="cap-line tracking-eyebrow">{eyebrow}</p>
            <h2 className="font-display mt-8 text-balance text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl">
              {title}
            </h2>
            <Link
              href="/#faq"
              className="mt-8 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]"
            >
              Alle häufigen Fragen
              <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="border-t border-[color:var(--border)]">
            {items.map((item) => (
              <details key={item.question} className="accordion-item">
                <summary>
                  <span className="font-display min-w-0 flex-1 pr-4 text-base font-normal tracking-tight text-[color:var(--ink)] sm:pr-5 sm:text-lg">
                    {item.question}
                  </span>
                  <span className="accordion-icon" aria-hidden="true" />
                </summary>
                <p className="pb-6 text-[0.95rem] font-light leading-relaxed text-[color:var(--muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
