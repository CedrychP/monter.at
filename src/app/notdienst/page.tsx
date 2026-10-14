import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { notdienstJobs, notdienstTariffs, notdienstVatNote } from "../notdienstPrices";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const laundryImage = "/assets/blog-waschmaschine-pumpt-nicht-ab-wien.webp";
const expressImage = "/assets/ersatzteile-waschmaschine-wien.webp";

const faqs: HubFaqItem[] = [
  {
    question: "Wann gilt der Notdienst?",
    answer:
      "Von 18:00 bis 08:00 in der Früh. Montag bis Freitag von 18 bis 22 Uhr kostet Anfahrt und Diagnose 180 €. Am Wochenende in demselben Fenster 216 €. Von 22 Uhr bis 8 Uhr in der Früh 240 €. Alle Beträge sind brutto, inklusive 20 % MwSt."
  },
  {
    question: "Ist der Notdienst ein garantierter Termin?",
    answer:
      "Nein. Rufen Sie an. Wir sagen, ob in dem Fenster noch ein Techniker frei ist. Die Anfrage ist noch kein Auftrag."
  },
  {
    question: "Was kostet der Wasserschaden Express?",
    answer:
      "600 € brutto. Darin sind Wasser stoppen, alles reinigen und die Reparatur des Geräts, wenn sie möglich ist."
  },
  {
    question: "Kommen die Arbeitspreise zur Anfahrt dazu?",
    answer:
      "Ja. Ablaufpumpe, Türversiegelung, Wasserzulauf, Geschirrspüler und Heizsystem sind eigene Posten und beginnen bei den genannten Bruttosätzen. Den genauen Betrag nennen wir vor dem Einbau."
  }
];

const expressSteps = ["Wasser stoppen", "Alles reinigen", "Reparieren, wenn möglich"];

const jobMedia: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "Ablaufpumpe wechseln": {
    src: "/assets/ueber-uns-waschmaschinenmotor-wien.webp",
    alt: "Geöffneter Waschmaschinenmotor mit Riemen, Spule und Verkabelung.",
    width: 1600,
    height: 1200
  },
  "Türversiegelung wechseln": {
    src: "/assets/blog-bosch-waschmaschine-reparieren-wien.webp",
    alt: "Weiße Waschmaschinentür mit Wäsche in der Trommel, daneben ein Regal mit Körben.",
    width: 1600,
    height: 1200
  },
  "Wasserzulauf prüfen": {
    src: "/assets/startseite-waschmaschine-wien.webp",
    alt: "Weiße Waschmaschine mit runder Glastür vor hellem Hintergrund.",
    width: 771,
    height: 1024
  },
  Geschirrspüler: {
    src: "/assets/blog-geschirrspueler-reinigt-nicht-wien.webp",
    alt: "Geöffneter Geschirrspüler mit Körben, Tellern und einer Tasse.",
    width: 1600,
    height: 1066
  },
  "Heizsystem ersetzen": {
    src: "/assets/blog-backofen-heizt-nicht-wien.webp",
    alt: "Herd mit Metallknebeln und geschlossener Backofentür.",
    width: 1600,
    height: 1068
  }
};

/** 24-Stunden-Ring, 0 Uhr oben. Der Bogen läuft von 18 Uhr über Mitternacht bis 8 Uhr. */
function NightDial() {
  const center = 120;
  const radius = 86;
  const point = (hour: number) => {
    const theta = (hour / 24) * Math.PI * 2;
    return {
      x: center + radius * Math.sin(theta),
      y: center - radius * Math.cos(theta)
    };
  };
  const start = point(18);
  const end = point(8);
  const night = `M ${start.x} ${start.y} A ${radius} ${radius} 0 1 1 ${end.x} ${end.y}`;
  const day = `M ${end.x} ${end.y} A ${radius} ${radius} 0 0 1 ${start.x} ${start.y}`;
  const marks = [18, 22, 8];

  return (
    <figure className="mt-10 flex items-center gap-6 sm:gap-8">
      <svg viewBox="0 0 240 240" className="h-36 w-36 shrink-0 sm:h-44 sm:w-44" role="img" aria-label="Notdienst von 18 Uhr bis 8 Uhr">
        <path d={day} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="10" />
        <path d={night} fill="none" stroke="var(--accent-on-dark)" strokeWidth="10" strokeLinecap="round" />
        {marks.map((hour) => {
          const mark = point(hour);
          return <circle key={hour} cx={mark.x} cy={mark.y} r="5" fill="white" />;
        })}
        <text x="120" y="114" textAnchor="middle" fill="white" fontSize="28" fontFamily="inherit">
          14
        </text>
        <text x="120" y="136" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" letterSpacing="2">
          STUNDEN
        </text>
      </svg>
      <figcaption className="max-w-[12rem] text-sm font-light leading-relaxed text-white/70">
        Der Bogen ist das Fenster. Tagsüber, von 8 bis 18 Uhr, gilt der reguläre Dienst.
      </figcaption>
    </figure>
  );
}

export const metadata: Metadata = buildMetadata({
  title: "Notdienst Wien | 18:00–08:00 | MONTER",
  description:
    "Notdienst für Haushaltsgeräte von 18:00 bis 08:00. Abend 180 €, Wochenende 216 €, Nacht 240 €, jeweils brutto für Anfahrt und Diagnose. Wasserschaden Express 600 €.",
  path: "/notdienst"
});

export default function NotdienstPage() {
  const jobs = notdienstJobs.filter((job) => job.service !== "Wasserschaden Express");

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="bg-[color:var(--ink)] text-white lg:grid lg:min-h-[46rem] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-between px-5 py-16 sm:px-8 sm:py-20 lg:py-16">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-on-dark)]">
              Notdienst
            </p>
            <h1 className="font-display mt-5 max-w-xl text-balance text-5xl font-light leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              18:00
              <span className="mt-1 block text-[color:var(--accent-on-dark)]">bis 08:00.</span>
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] font-light leading-relaxed text-white/75">
              Nach der regulären Zeit. Rufen Sie an, wir sagen, ob in dem Fenster noch ein Techniker frei ist.{" "}
              {notdienstVatNote}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark">
                <span className="text-[color:var(--ink)]">
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
              <a href="#einsaetze" className="btn-on-dark-ghost">
                <span>Einsätze und Preise</span>
              </a>
            </div>
          </div>
          <NightDial />
        </div>
        <figure className="relative min-h-[24rem] sm:min-h-[32rem] lg:min-h-full">
          <Image
            src={laundryImage}
            alt="Zwei weiße Siemens-Waschmaschinen in einem gefliesten Raum neben einer grauen Tür."
            fill
            priority
            loading="eager"
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
          <figcaption className="absolute bottom-4 left-4 bg-white px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]">
            Beispielbild
          </figcaption>
        </figure>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Drei Fenster, ein Anruf.
            </h2>
            <p className="max-w-sm text-sm font-light leading-relaxed text-[color:var(--muted)]">{notdienstVatNote}</p>
          </div>
          <div className="mt-10" aria-hidden="true">
            <div className="flex h-2">
              <div className="w-[28.6%] bg-[color:var(--accent)]" />
              <div className="w-[71.4%] bg-[color:var(--ink)]" />
            </div>
            <div className="relative mt-2 h-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
              <span className="absolute left-0">18:00</span>
              <span className="absolute left-[28.6%] -translate-x-1/2">22:00</span>
              <span className="absolute right-0">08:00</span>
            </div>
          </div>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {notdienstTariffs.map((tariff, index) => (
              <li
                key={tariff.service}
                className={
                  index === 2
                    ? "bg-[color:var(--ink)] px-6 py-8 text-white sm:px-8"
                    : "bg-white px-6 py-8 sm:px-8"
                }
              >
                <p
                  className={
                    index === 2
                      ? "text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-on-dark)]"
                      : "text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]"
                  }
                >
                  {tariff.service}
                </p>
                <p className="font-display mt-4 text-3xl font-light tracking-tight">{tariff.window}</p>
                <p className="font-display mt-6 text-6xl font-light leading-none tracking-tight tabular-nums">{tariff.price}</p>
                <p className={index === 2 ? "mt-4 text-sm font-light leading-relaxed text-white/70" : "mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]"}>
                  {tariff.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="einsaetze" className="scroll-mt-28 bg-[color:var(--ink)] text-white lg:grid lg:min-h-[36rem] lg:grid-cols-[1.15fr_0.85fr]">
        <figure className="relative min-h-[22rem] lg:min-h-full">
          <Image
            src={expressImage}
            alt="Person in grauer Latzhose an der geöffneten Rückseite einer Waschmaschine, davor ein Werkzeugkasten."
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-[center_40%]"
          />
        </figure>
        <div className="flex flex-col justify-between bg-[color:var(--accent)] px-5 py-14 sm:px-8 sm:py-16">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/75">Wasserschaden</p>
            <h2 className="font-display mt-4 text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Express.
            </h2>
            <p className="font-display mt-6 text-7xl font-light leading-none tracking-tight tabular-nums">600 €</p>
            <p className="mt-5 max-w-sm text-[1.02rem] font-light leading-relaxed text-white/85">
              Wasser stoppen, alles reinigen und das Gerät reparieren, wenn es möglich ist.
            </p>
          </div>
          <ol className="mt-10 border-t border-white/30">
            {expressSteps.map((step, index) => (
              <li key={step} className="flex items-baseline gap-4 border-b border-white/30 py-3">
                <span className="font-display text-2xl font-light tabular-nums text-white/70">0{index + 1}</span>
                <span className="text-lg font-light">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Was im Notdienst dazu kommt.
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {notdienstVatNote} Die Arbeiten kommen zur Anfahrt und Diagnose dazu. Dieselben Sätze stehen auch bei den{" "}
            <Link href="/preise#notdienst" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Preisen</span>
            </Link>.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {jobs.map((job, index) => {
              const media = jobMedia[job.service];
              const span = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
              return (
                <li key={job.service} className={span}>
                  <figure>
                    {media ? (
                      <Image
                        src={media.src}
                        alt={media.alt}
                        width={media.width}
                        height={media.height}
                        sizes={index < 2 ? "(min-width: 1024px) 40rem, 100vw" : "(min-width: 1024px) 26rem, 100vw"}
                        className={
                          job.service === "Wasserzulauf prüfen"
                            ? "aspect-[4/3] w-full bg-[color:var(--bg-muted)] object-contain object-center"
                            : "aspect-[4/3] w-full object-cover object-center"
                        }
                      />
                    ) : null}
                    <figcaption className="mt-4">
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                        {job.window}
                      </p>
                      <h3 className="font-display mt-2 text-3xl font-light tracking-tight">{job.service}</h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{job.note}</p>
                      <p className="font-display mt-4 text-4xl font-light tracking-tight tabular-nums">{job.price}</p>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt, bevor Sie anrufen." items={faqs} />

      <section className="border-t border-[color:var(--border)] bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Fehlerbild und Adresse.
            </h2>
            <p className="mt-4 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Wasser, Gerät, Stockwerk. Wir sagen, ob der Notdienst in dem Fenster noch geht.
            </p>
          </div>
          <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
            <span data-phone-number>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
