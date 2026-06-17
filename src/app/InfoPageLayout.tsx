import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "./siteConfig";

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;

export type InfoSection = {
  title: string;
  body: string;
};

export type InfoCard = {
  number?: string;
  title: string;
  text: string;
};

type CtaConfig = {
  label: string;
  href: string;
};

type InfoPageLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroNote?: string;
  comingSoon?: boolean;
  primaryCta?: CtaConfig;
  secondaryCta?: CtaConfig;
  cardsEyebrow?: string;
  cardsTitle?: string;
  cardsIntro?: string;
  cards?: InfoCard[];
  sectionsEyebrow?: string;
  sectionsTitle?: string;
  sections?: InfoSection[];
  closingTitle?: string;
  closingText?: string;
  children?: ReactNode;
};

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
  </svg>
);

export default function InfoPageLayout({
  eyebrow,
  title,
  intro,
  heroNote,
  comingSoon = false,
  primaryCta = { label: "Reparatur buchen", href: "/#kontakt" },
  secondaryCta = { label: "Jetzt anrufen", href: `tel:${phoneHref}` },
  cardsEyebrow,
  cardsTitle,
  cardsIntro,
  cards,
  sectionsEyebrow,
  sectionsTitle,
  sections,
  closingTitle = "Schnellste Hilfe per Telefon.",
  closingText = "Bei dringenden Anliegen ist der direkte Anruf der schnellste Weg. Wir klären Fehlerbild, Termin und Aufwand direkt im Gespräch.",
  children
}: InfoPageLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              {comingSoon ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-muted)] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                  Bald verfügbar
                </span>
              ) : (
                <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{eyebrow}</p>
              )}
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
                {title}
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {intro}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
                <a href={secondaryCta.href} className="btn-ghost">
                  {secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Schnellster Weg</p>
              <a
                href={`tel:${phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phoneDisplay}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {heroNote ??
                  "Nennen Sie uns Gerät, Modell und Fehlerbild — wir melden uns zur Terminabstimmung."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {cards && cards.length > 0 ? (
        <section className="bg-[color:var(--bg-muted)] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
            <div className="reveal max-w-2xl">
              {cardsEyebrow ? (
                <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{cardsEyebrow}</p>
              ) : null}
              {cardsTitle ? (
                <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
                  {cardsTitle}
                </h2>
              ) : null}
              {cardsIntro ? (
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {cardsIntro}
                </p>
              ) : null}
            </div>
            <div className="stagger mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card, index) => (
                <article key={card.title} className="flex flex-col bg-white p-8 lg:p-10">
                  <span className="numeral text-[color:var(--accent)]">
                    {card.number ?? `0${index + 1}`}
                  </span>
                  <h3 className="font-display mt-6 text-2xl font-normal leading-tight tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {sections && sections.length > 0 ? (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div className="reveal">
                {sectionsEyebrow ? (
                  <p className="cap-line tracking-eyebrow">{sectionsEyebrow}</p>
                ) : null}
                <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                  {sectionsTitle ?? "Gut zu wissen."}
                </h2>
                <Link href={primaryCta.href} className="btn-primary mt-10">
                  {primaryCta.label}
                </Link>
              </div>
              <div className="reveal">
                <div className="grid gap-0">
                  {sections.map((section) => (
                    <div
                      key={section.title}
                      className="border-b border-[color:var(--border)] py-7 first:pt-0"
                    >
                      <h3 className="font-display text-2xl font-normal tracking-tight">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {children}

      <section className="border-t border-[color:var(--border)] bg-[color:var(--ink)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="cap-line-light tracking-eyebrow text-[color:var(--accent-on-dark)]">Kontakt</p>
              <h2 className="font-display mt-6 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                {closingTitle}
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-relaxed text-white/75">{closingText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={`tel:${phoneHref}`} className="btn-on-dark">
                {phoneDisplay}
              </a>
              <Link href="/#kontakt" className="btn-on-dark-ghost">
                Reparatur buchen
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
