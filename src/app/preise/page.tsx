import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RepairBookingCta from "../RepairBookingCta";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

type PriceItem = {
  service: string;
  price: string;
  note: string;
  highlight?: boolean;
};

const heroPrices = [
  { label: "Anfahrt Wien", detail: "Haushaltsgeräte", price: "96 €" },
  { label: "Anfahrt Niederösterreich", detail: "Haushaltsgeräte", price: "120 €" },
  { label: "Nur Diagnose", detail: "freistehend", price: "144 €" },
  { label: "Reparatur & Diagnose", detail: "freistehend", price: "180 €" }
];

const householdTravel: PriceItem[] = [
  {
    service: "Anfahrt Wien",
    price: "96 €",
    note: "Für alle Marken außer Gaggenau. Pro Einsatz vor Ort innerhalb von Wien."
  },
  {
    service: "Anfahrt Niederösterreich",
    price: "120 €",
    note: "Für alle Marken außer Gaggenau. Pro Einsatz vor Ort in Niederösterreich."
  },
  {
    service: "Anfahrt Gaggenau",
    price: "200 €",
    note: "Nur bei Gaggenau, statt 96 € in Wien oder 120 € in Niederösterreich. Pro Einsatz vor Ort.",
    highlight: true
  },
  {
    service: "Anfahrt weitere Bundesländer",
    price: "auf Anfrage",
    note: "Im Burgenland, in Oberösterreich, der Steiermark und Salzburg hängt die Anfahrt von der Adresse ab — wir nennen sie vor dem Termin."
  }
];

const householdWork: PriceItem[] = [
  {
    service: "Nur Diagnose, freistehend",
    price: "144 €",
    note: "Prüfung eines freistehenden Geräts vor Ort. Die erste Arbeitseinheit (30 Minuten) ist inklusive."
  },
  {
    service: "Nur Diagnose, Einbau",
    price: "158 €",
    note: "Rund 10 % über dem freistehenden Satz, auf den Euro gerundet. Die Diagnose am eingebauten Gerät ist aufwendiger. Erste 30 Minuten inklusive."
  },
  {
    service: "Reparatur & Diagnose, freistehend",
    price: "180 €",
    note: "Diagnose und Reparatur vor Ort am freistehenden Gerät. Die erste Arbeitseinheit (30 Minuten) ist inklusive."
  },
  {
    service: "Reparatur & Diagnose, Einbau",
    price: "198 €",
    note: "Rund 10 % über dem freistehenden Satz, weil die Diagnose am Einbaugerät aufwendiger ist. Erste 30 Minuten inklusive.",
    highlight: true
  }
];

const householdFollowUp: PriceItem[] = [
  {
    service: "Zusätzliche Arbeitseinheit",
    price: "+60 €",
    note: "Beim Erstbesuch: eine Arbeitseinheit = 30 Minuten. Jede weitere Einheit nach der ersten wird mit 60 € verrechnet, bei Einbau und freistehend gleich."
  },
  {
    service: "Folgebesuch — Ersatzteil einbauen",
    price: "60 € + Ersatzteil",
    note: "Beim zweiten Einsatz verrechnen wir nur eine Arbeitseinheit (60 €) und das benötigte Ersatzteil — ohne erneute Diagnose- oder Reparaturpauschale."
  }
];

const garageTravel: PriceItem[] = [
  {
    service: "Anfahrt Wien",
    price: "132 €",
    note: "Anfahrt innerhalb von Wien für Garagen- und Torreparaturen."
  },
  {
    service: "Anfahrt Niederösterreich",
    price: "180 €",
    note: "Anfahrt nach Niederösterreich für Garagen- und Torreparaturen."
  },
  {
    service: "Mehr als 1 Std. Fahrt",
    price: "240 €",
    note: "Anfahrtspauschale bei einer Fahrzeit von mehr als einer Stunde (An- und Abfahrt)."
  },
  {
    service: "Anfahrt weitere Bundesländer",
    price: "auf Anfrage",
    note: "Torarbeiten bieten wir vor allem in Wien, Niederösterreich und im Burgenland an — Anfahrt und Verfügbarkeit klären wir bei der Anfrage."
  }
];

const garageLabor: PriceItem[] = [
  {
    service: "Arbeitseinheit Garagentor",
    price: "90 €",
    note: "Eine Arbeitseinheit entspricht 30 Minuten. Jede weitere Einheit wird mit 90 € verrechnet."
  },
  {
    service: "Folgebesuch — Ersatzteil einbauen",
    price: "90 € + Ersatzteil",
    note: "Beim zweiten Einsatz verrechnen wir nur eine Arbeitseinheit (90 €) und das benötigte Ersatzteil — ohne erneute Diagnose- oder Reparaturpauschale.",
    highlight: true
  }
];

const garageRepairs: PriceItem[] = [
  {
    service: "Federwechsel",
    price: "180–300 €",
    note: "Austausch von Garagentorfedern je nach Torgröße, Federart und Einbausituation."
  },
  {
    service: "Austausch der Rollen",
    price: "60–120 €",
    note: "Erneuerung von Führungs- und Laufrollen am Garagentor — abhängig von Anzahl und Typ."
  },
  {
    service: "Reparatur des Antriebs",
    price: "240–600 €",
    note: "Fehlersuche und Reparatur des Torantriebs, abhängig von Defekt und Antriebsmodell.",
    highlight: true
  },
  {
    service: "Wartung: Schmierung der Schienen und Rollen",
    price: "120 €",
    note: "Reinigung, Schmierung und Funktionsprüfung von Schienen, Rollen und beweglichen Teilen."
  },
  {
    service: "Justieren des Torantriebs",
    price: "96–180 €",
    note: "Einstellen von Endlagen, Kraft und Laufeigenschaften des Garagentorantriebs."
  },
  {
    service: "Sicherheitsüberprüfung und Inspektion",
    price: "120–240 €",
    note: "Prüfung von Sicherheitskomponenten, Federzustand, Befestigungen und Gesamtfunktion des Tors."
  }
];

const priceFactors = [
  "Gerätetyp und Fehlerbild",
  "Freistehend oder Einbau",
  "Marke, bei Gaggenau eigene Anfahrt",
  "Torgröße und Antriebsmodell",
  "Anfahrt und Fahrzeit",
  "Ersatzteilverfügbarkeit",
  "Sicherheitszustand",
  "Alter und Wirtschaftlichkeit",
  "Privat- oder Objektservice"
];

export const metadata: Metadata = buildMetadata({
  title: "Preise Reparatur Wien | Haushaltsgeräte & Garagentor | MONTER",
  description:
    "Preise inkl. MwSt. für Haushaltsgeräte- und Garagentor-Reparatur in Wien und Niederösterreich: Anfahrt, Diagnose, Reparatur, Federwechsel, Antrieb, Wartung und Inspektion — transparent und nachvollziehbar.",
  path: "/preise"
});

export default function PreisePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="relative overflow-hidden bg-[color:var(--ink)] text-white">
        <div className="mx-auto grid max-w-[88rem] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-on-dark)]">
              <span aria-hidden="true" className="h-px w-8 bg-[color:var(--accent)]" />
              Preise
            </p>
            <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem]">
              Der Betrag
              <span className="mt-1 block font-display-italic text-[color:var(--gold-on-dark)]">steht vor der Erklärung.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/75">
              Anfahrt, Diagnose und Reparatur für Haushaltsgeräte und Garagentore. Material nur,
              wenn es gebraucht wird. Alle Beträge inklusive 20&nbsp;% MwSt.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark">
                <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href="#haushaltsgeraete"
                className="group inline-flex items-center justify-center border border-white/70 px-7 py-4 text-[0.92rem] font-medium uppercase tracking-[0.04em] transition hover:bg-white"
              >
                <span className="text-white group-hover:text-[color:var(--ink)]">Alle Preise</span>
              </a>
            </div>
          </div>

          <div className="relative px-5 py-12 sm:px-8 lg:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[color:var(--accent)] lg:-left-16 lg:right-[-12%] lg:origin-bottom lg:-skew-x-12"
            />
            <div className="relative">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-white/80">
                Haushaltsgeräte, auf einen Blick
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-px bg-white/25">
                {heroPrices.map((item) => (
                  <div key={item.label} className="bg-[color:var(--accent)] px-4 py-5 sm:px-6 sm:py-6">
                    <dt className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/75">
                      {item.label}
                    </dt>
                    <dd className="font-display mt-3 text-4xl font-light tracking-tight text-white tabular-nums sm:text-5xl">
                      {item.price}
                    </dd>
                    <p className="mt-2 text-xs font-light text-white/70">{item.detail}</p>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm font-light leading-relaxed text-white/85">
                Garagentor: Anfahrt Wien <span className="font-medium text-white">132 €</span>
                {" · "}
                Arbeitseinheit <span className="font-medium text-white">90 €</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="haushaltsgeraete" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionIntro
            eyebrow="Haushaltsgeräte"
            title="Anfahrt, Diagnose, Reparatur."
            text="Die erste Arbeitseinheit von 30 Minuten steckt in Diagnose und Reparatur. Jede weitere Einheit beim Erstbesuch kostet 60 €. Einbau liegt rund 10 % über dem freistehenden Satz."
          />
          <div className="mt-12 grid gap-14">
            <PriceBlock title="Anfahrt" items={householdTravel} />
            <PriceBlock title="Diagnose und Reparatur" items={householdWork} />
            <PriceBlock title="Weitere Einheiten" items={householdFollowUp} />
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="bg-white">
        <svg viewBox="0 0 1440 56" className="block h-10 w-full sm:h-14" preserveAspectRatio="none">
          <polygon points="0,56 1440,0 1440,56" fill="#a8112a" />
        </svg>
      </div>

      <section id="garagentor" className="scroll-mt-28 bg-[color:var(--bg-muted)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionIntro
            eyebrow="Garagentor"
            title="Anfahrt, Arbeit, häufige Leistungen."
            text="Spannen wie Federwechsel oder Antrieb sind Orientierung. Torgröße, Antrieb und Einbau entscheiden den endgültigen Betrag. Auch hier inklusive 20 % MwSt."
          />
          <div className="mt-12 grid gap-14">
            <PriceBlock title="Anfahrt" items={garageTravel} />
            <PriceBlock title="Arbeitseinheit" items={garageLabor} />
            <PriceBlock title="Reparatur und Wartung" items={garageRepairs} />
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Wichtig zu wissen</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight">
              Keine versteckten Posten.
            </h2>
            <p className="mt-6 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Material und Ersatzteile werden nur verrechnet, wenn sie gebraucht werden. Der Preis
              dafür wird vor dem Einbau abgestimmt. Die festen Anfahrtssätze gelten für Wien und
              Niederösterreich. Anderswo nennen wir die Anfahrt vor dem Termin. Die Übersicht steht
              unter{" "}
              <Link href="/einsatzgebiete" className="underline transition hover:text-[color:var(--accent)]">
                Einsatzgebiete
              </Link>
              .
            </p>
          </div>
          <ul className="grid content-start gap-px bg-[color:var(--border)] sm:grid-cols-2">
            {priceFactors.map((factor) => (
              <li key={factor} className="bg-[color:var(--bg-muted)] px-5 py-4 text-sm font-light text-[color:var(--ink)]">
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RepairBookingCta />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-16">
          <Image
            src="/assets/geraete-retter-praemie.webp"
            alt="Kampagnenbild der Geräte-Retter-Prämie: eine Waschmaschine mit Werkzeug und dem Satz Bring's wieder zum Laufen."
            width={898}
            height={607}
            sizes="(min-width: 1024px) 40rem, 100vw"
            className="h-auto w-full"
          />
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Geräte-Retter-Prämie</p>
            <h2 className="font-display mt-5 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              50&nbsp;% auf die Reparatur, höchstens 130&nbsp;€.
            </h2>
            <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Die Geräte-Retter-Prämie ist der Nachfolger des Reparaturbonus. Für förderfähige
              Elektro- und Elektronikgeräte von Privatpersonen werden 50&nbsp;% der
              Brutto-Reparaturkosten gefördert, gedeckelt bei 130&nbsp;€. Den Bon beantragen Sie
              online und lösen ihn bei einem teilnehmenden Betrieb ein. Ob Ihr Gerät in der
              aktuellen Periode dabei ist, klären wir vor der Reparatur.
            </p>
            <Link href="/geraete-retter-praemie" className="link-arrow mt-6">
              Mehr zur Prämie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{eyebrow}</p>
      <h2 className="font-display mt-5 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{text}</p>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted-soft)]">
        Alle Beträge inkl. 20&nbsp;% MwSt.
      </p>
    </div>
  );
}

function PriceBlock({ title, items }: { title: string; items: PriceItem[] }) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">{title}</h3>
      <ul className="mt-4 border-t border-[color:var(--ink)]">
        {items.map((item) => {
          const isAmount = item.price.includes("€");
          return (
            <li
              key={item.service}
              className={`border-b border-[color:var(--border)] py-5 sm:py-6 ${
                item.highlight ? "border-l-[3px] border-l-[color:var(--accent)] pl-4 sm:pl-5" : ""
              }`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <h4 className="font-display text-2xl font-light leading-tight tracking-tight sm:max-w-xl sm:text-[1.7rem]">
                  {item.service}
                </h4>
                <p
                  className={`font-display font-light tracking-tight text-[color:var(--ink)] tabular-nums sm:shrink-0 sm:text-right ${
                    isAmount
                      ? item.price.length > 8
                        ? "text-4xl sm:text-5xl"
                        : "text-5xl"
                      : "text-3xl sm:pt-1"
                  }`}
                >
                  {item.price}
                </p>
              </div>
              <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {item.note}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
