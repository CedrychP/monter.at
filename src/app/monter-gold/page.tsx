import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { heroSrcSet, heroVariant } from "../../lib/heroLcp";
import { buildMetadata, comingSoonRobots } from "../pageMetadata";
import { siteConfig } from "../siteConfig";
import GoldSignup from "./GoldSignup";
import { goldExtra, goldPlans, goldShared } from "./goldPlans";

const goldHero = "/assets/hero-monter-gold.webp";

const bill: { label: string; open: string; member: string; win: boolean }[] = [
  { label: "Anfahrt Haushaltsgerät, Wien", open: "96 €", member: "0 €", win: true },
  { label: "Anfahrt Haushaltsgerät, Niederösterreich", open: "120 €", member: "0 €", win: true },
  { label: "Diagnose, freistehend", open: "144 €", member: "Gold 1×, Platinum 2×", win: true },
  { label: "Reparatur und Diagnose, freistehend", open: "180 €", member: "180 €", win: false },
  { label: "Zweiter Termin, Arbeit", open: "60 €", member: "0 €", win: true },
  { label: "Weitere Arbeitseinheit", open: "60 €", member: "45 € ab Gold", win: true },
  { label: "Garagentor-Anfahrt Wien", open: "132 €", member: "132 €", win: false }
];

export const metadata: Metadata = buildMetadata({
  title: "MONTER GOLD | Silber, Gold, Platinum",
  description:
    "MONTER GOLD für eine Wohnadresse: Silber 19,90 €, Gold 29,90 €, Platinum 39,90 € im Monat, mindestens 12 Monate. Anfahrt 0 €, Geräteakte inklusive.",
  path: "/monter-gold",
  robots: comingSoonRobots,
  images: [`${siteConfig.siteUrl}/assets/hero-monter-gold-1440.webp`]
});

export default function MonterGoldPage() {
  return (
    <main className="overflow-x-clip bg-white text-[color:var(--ink)]">
      <section className="relative isolate overflow-hidden bg-black text-white">
        <img
          src={heroVariant(goldHero, 768)}
          srcSet={heroSrcSet(goldHero)}
          sizes="100vw"
          alt="Dunkle gebogene Flächen mit einem goldenen Lichtstreifen."
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="gold-hero-photo absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/55" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black/50 via-black/10 to-transparent sm:block" />

        <div className="relative mx-auto flex min-h-[36rem] max-w-[88rem] flex-col justify-end px-5 pb-8 pt-16 sm:min-h-[44rem] sm:px-8 sm:pb-12 sm:pt-20 lg:min-h-[52rem] lg:pb-14">
          <p className="gold-rise cap-line-gold tracking-eyebrow text-[color:var(--gold-on-dark)]">MONTER GOLD</p>
          <h1 className="gold-rise gold-rise-2 font-display mt-5 max-w-4xl text-balance text-[2.6rem] font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Der Haushalt bleibt.
          </h1>
          <p className="gold-rise gold-rise-3 mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-white/80 sm:text-[1.08rem]">
            Drei Mitgliedschaften, eine Akte. Die Anfahrt für Haushaltsgeräte in Wien und
            Niederösterreich steht bei Mitgliedern auf 0 €. Mindestens 12 Monate.
          </p>
          <div className="gold-rise gold-rise-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#liste" className="gold-btn">
              Tarif wählen
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark-ghost">
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <div className="gold-rise gold-rise-4 mt-10 grid border-t border-white/25 sm:grid-cols-3">
            {goldPlans.map((plan) => (
              <a
                key={plan.id}
                href={`#${plan.id}`}
                className="border-b border-white/25 py-5 sm:border-b-0 sm:px-5 sm:py-6 sm:first:pl-0"
              >
                <span className="gold-rule block h-px w-10 bg-[color:var(--gold-on-dark)]" />
                <span className="mt-4 block text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold-on-dark)]">
                  {plan.name}
                </span>
                <span className="mt-2 block font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
                  {plan.price} €
                </span>
                <span className="mt-1 block text-sm font-light text-white/70">im Monat, 12 Monate</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
            Drei Tarife
          </p>
          <h2 className="font-display mt-4 max-w-4xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            Dieselbe Akte. Drei Stufen auf der Rechnung.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/75 sm:text-lg">
            Silber nimmt die Anfahrt weg. Gold legt einen Check ins Jahr. Platinum legt den zweiten
            dazu. Mindestens 12 Monate, eine Wohnadresse.
          </p>
          <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
            {goldPlans.map((plan, index) => {
              const featured = plan.id === "gold";
              return (
                <article
                  id={plan.id}
                  key={plan.id}
                  className={`gold-rise flex scroll-mt-28 flex-col px-6 py-8 sm:px-7 ${
                    featured
                      ? "bg-[color:var(--gold-on-dark)] text-[color:var(--ink)]"
                      : "border border-white/15 bg-[#111111] text-white"
                  }`}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p
                    className={`text-[0.72rem] font-medium uppercase tracking-[0.2em] ${
                      featured ? "text-[color:var(--ink)]" : "text-[color:var(--gold-on-dark)]"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p className="font-display mt-5 text-6xl font-light leading-none tracking-tight sm:text-7xl">
                    {plan.price}
                    <span className="ml-2 align-top text-[0.42em]">€</span>
                  </p>
                  <p className={`mt-3 text-sm ${featured ? "text-[color:var(--ink)]/70" : "text-white/60"}`}>
                    im Monat · {plan.year} € im Jahr
                  </p>
                  <p className="mt-6 text-xl font-medium leading-snug sm:text-2xl">{plan.line}</p>
                  <ul className={`mt-6 flex-1 border-t ${featured ? "border-black/15" : "border-white/15"}`}>
                    {plan.points.map((point) => (
                      <li
                        key={point}
                        className={`border-b py-3.5 text-[0.95rem] font-normal leading-relaxed ${
                          featured
                            ? "border-black/15 text-[color:var(--ink)]"
                            : "border-white/15 text-white/80"
                        }`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/monter-gold?tarif=${plan.id}#liste`}
                    className={`${featured ? "btn-primary" : "btn-on-dark"} mt-6 w-full`}
                  >
                    <span>{plan.name} vormerken</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe4] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#6e5320]">
            Die Rechnung
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            Was Mitglieder anders sehen.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-[color:var(--ink)]/75 sm:text-lg">
            Alle Beträge inklusive 20 % MwSt. Der Check ist eine Diagnose, freistehend oder eingebaut.
            Die Reparaturpauschale und das Ersatzteil bleiben.
          </p>
          <ul className="mt-10 border-t border-[color:var(--ink)]">
            {bill.map((row) => (
              <li
                key={row.label}
                className="grid gap-3 border-b border-[color:var(--ink)]/15 py-6 sm:grid-cols-[1.15fr_0.7fr_0.9fr] sm:items-end sm:gap-8"
              >
                <p className="text-base font-medium sm:text-lg">{row.label}</p>
                <p>
                  <span className="block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    Ohne
                  </span>
                  <span
                    className={`font-display mt-1 block text-3xl font-light tracking-tight sm:text-4xl ${
                      row.member.startsWith("0")
                        ? "text-[color:var(--muted)] line-through decoration-[color:var(--ink)]/25"
                        : "text-[color:var(--ink)]"
                    }`}
                  >
                    {row.open}
                  </span>
                </p>
                <p>
                  <span className="block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#6e5320]">
                    Mitglied
                  </span>
                  <span
                    className={`font-display mt-1 block text-3xl font-light tracking-tight sm:text-4xl ${
                      row.win ? "text-[#6e5320]" : "text-[color:var(--ink)]"
                    }`}
                  >
                    {row.member}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Anfahrt 0 € gilt für bis zu drei Einsätze in Wien und Niederösterreich. Der zweite Termin
            desselben Falls kostet nur das Ersatzteil. 45 € gilt ab Gold für die weitere Arbeitseinheit.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-5 px-5 sm:px-8 lg:grid-cols-2">
          <div className="flex h-full flex-col bg-[color:var(--ink)] px-6 py-8 text-white sm:px-8 sm:py-10">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
              In jedem Tarif
            </p>
            <h2 className="font-display mt-4 text-4xl font-light leading-[0.95] tracking-tight sm:text-5xl">
              Das steht fest, bevor Sie wählen.
            </h2>
            <ul className="mt-8">
              {goldShared.map((item) => (
                <li key={item} className="border-t border-white/15 py-4 text-base font-light leading-relaxed text-white/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-full flex-col border border-[color:var(--ink)] px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#6e5320]">
              Vor dem Termin genannt
            </p>
            <h2 className="font-display mt-4 text-4xl font-light leading-[0.95] tracking-tight sm:text-5xl">
              Das kommt extra auf die Rechnung.
            </h2>
            <ul className="mt-8">
              {goldExtra.map((item) => (
                <li
                  key={item}
                  className="border-t border-[color:var(--border)] py-4 text-base font-medium leading-relaxed text-[color:var(--ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Die öffentliche Liste steht auf{" "}
              <Link href="/preise" className="text-[color:var(--accent)]">
                <span>Preise</span>
              </Link>
              . Haushaltsgeräte,{" "}
              <Link href="/garagentore" className="text-[color:var(--accent)]">
                <span>Garagentor</span>
              </Link>{" "}
              und der{" "}
              <Link href="/geraetekauf" className="text-[color:var(--accent)]">
                <span>Gerätekauf</span>
              </Link>{" "}
              bleiben eigene Seiten. Der Gerätekauf ist noch nicht offen.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
              Die Liste
            </p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Vormerken. Noch nicht zahlen.
            </h2>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-white/80 sm:text-lg">
              Wählen Sie Silber, Gold oder Platinum. Die E-Mail hält den Tarif fest. Abgebucht wird
              nichts. Die 12 Monate beginnen erst, wenn Sie den Vertrag schriftlich bestätigen.
            </p>
            <ul className="mt-8 grid grid-cols-3 gap-px bg-white/15">
              {goldPlans.map((plan) => (
                <li key={plan.id} className="bg-black px-3 py-4">
                  <span className="block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[color:var(--gold-on-dark)]">
                    {plan.name}
                  </span>
                  <span className="mt-2 block font-display text-2xl font-light tracking-tight sm:text-3xl">
                    {plan.price} €
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Suspense fallback={null}>
            <GoldSignup />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
