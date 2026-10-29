import Link from "next/link";
import { Suspense } from "react";
import { heroSrcSet, heroVariant } from "../../lib/heroLcp";
import { buildMetadata, comingSoonRobots } from "../pageMetadata";
import { siteConfig } from "../siteConfig";
import GoldSignup from "./GoldSignup";
import { goldExtra, goldPlans, goldShared } from "./goldPlans";

const goldHero = "/assets/hero-monter-gold.webp";

const bill = [
  ["Anfahrt Haushaltsgerät, Wien", "96 €", "0 €, bis drei Einsätze"],
  ["Anfahrt Haushaltsgerät, Niederösterreich", "120 €", "0 €, bis drei Einsätze"],
  ["Diagnose, freistehend", "144 €", "in Gold einmal, in Platinum zweimal inklusive"],
  ["Reparatur und Diagnose, freistehend", "180 €", "180 €"],
  ["Zweiter Termin, Arbeit", "60 €", "0 €, nur das Ersatzteil"],
  ["Weitere Arbeitseinheit", "60 €", "60 € in Silber, 45 € in Gold und Platinum"],
  ["Garagentor-Anfahrt Wien", "132 €", "132 €"]
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

      <section className="bg-[#f7f4ee] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-5xl">
            Drei Beiträge. Dieselbe Rechnung, verschieden weit.
          </h2>
          <div className="mt-10 grid items-stretch gap-4 sm:mt-12 lg:grid-cols-3 lg:gap-6">
            {goldPlans.map((plan, index) => (
              <article
                id={plan.id}
                key={plan.id}
                className={`gold-rise flex scroll-mt-28 flex-col border px-6 py-7 sm:px-7 ${
                  plan.id === "gold"
                    ? "border-[#6e5320] bg-[#f3ead7]"
                    : "border-[color:var(--border)] bg-white"
                }`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6e5320]">
                  {plan.name}
                </p>
                <p className="font-display mt-4 text-5xl font-light tracking-tight">{plan.price} €</p>
                <p className="mt-2 text-sm font-light text-[color:var(--muted)]">
                  im Monat, {plan.year} € im Jahr
                </p>
                <p className="mt-5 text-[1.02rem] font-medium text-[color:var(--ink)]">{plan.line}</p>
                <ul className="mt-6 border-t border-[color:var(--border)]">
                  {plan.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-[color:var(--border)] py-3 text-sm font-light leading-relaxed text-[color:var(--muted)]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href={`/monter-gold?tarif=${plan.id}#liste`} className="btn-primary mt-6 w-full">
                  <span>Liste für {plan.name}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-3xl font-light tracking-tight sm:text-4xl">
            Was auf der Mitgliedsrechnung steht.
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Alle Beträge inklusive 20 % MwSt. Der Check ist eine Diagnose, freistehend oder eingebaut:
            in Gold einmal im Jahr, in Platinum zweimal. Die Reparaturpauschale bleibt, das Teil auch.
          </p>
          <div className="mt-8 hidden grid-cols-[1.3fr_0.8fr_1.3fr] gap-6 border-b border-[color:var(--ink)] pb-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] sm:grid">
            <p>Position</p>
            <p>Ohne Mitgliedschaft</p>
            <p>MONTER GOLD</p>
          </div>
          <ul className="border-t border-[color:var(--ink)] sm:border-t-0">
            {bill.map((row) => (
              <li
                key={row[0]}
                className="grid gap-1 border-b border-[color:var(--border)] py-4 sm:grid-cols-[1.3fr_0.8fr_1.3fr] sm:items-baseline sm:gap-6"
              >
                <p className="font-medium">{row[0]}</p>
                <p className="text-sm font-light text-[color:var(--muted)]">
                  <span className="sm:hidden">Ohne Mitgliedschaft: </span>
                  {row[1]}
                </p>
                <p className="text-sm font-light text-[color:var(--ink)]">
                  <span className="sm:hidden">MONTER GOLD: </span>
                  {row[2]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[#f7f4ee] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">Für alle drei.</h2>
            <ul className="mt-6 border-t border-[color:var(--ink)]">
              {goldShared.map((item) => (
                <li
                  key={item}
                  className="border-b border-[color:var(--border)] py-4 text-sm font-light leading-relaxed text-[color:var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
              Was extra feststeht.
            </h2>
            <ul className="mt-6 border-t border-[color:var(--ink)]">
              {goldExtra.map((item) => (
                <li
                  key={item}
                  className="border-b border-[color:var(--border)] py-4 text-sm font-light leading-relaxed text-[color:var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Die öffentliche Liste steht auf{" "}
              <Link href="/preise" className="text-[color:var(--accent)]">
                <span>Preise</span>
              </Link>. Haushaltsgeräte,{" "}
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

      <section className="bg-[color:var(--ink)] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[88rem] items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-light leading-[0.95] tracking-tight sm:text-5xl">
              Erst die Liste. Dann der Vertrag.
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/75">
              Die E-Mail merkt den Tarif vor. Es geht kein Beitrag ab, und die 12 Monate beginnen
              nicht. Beides steht im Vertrag, den Sie schriftlich bestätigen, bevor etwas abgebucht
              wird.
            </p>
          </div>
          <Suspense fallback={null}>
            <GoldSignup />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
