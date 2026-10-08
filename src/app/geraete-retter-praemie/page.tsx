import type { Metadata } from "next";
import Image from "next/image";
import RepairBookingCta from "../RepairBookingCta";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const imagePath = "/assets/geraete-retter-praemie.webp";
const imageUrl = `${siteConfig.siteUrl}${imagePath}`;
const imageCaption =
  "Geräte-Retter-Prämie: Waschmaschine mit Werkzeug und dem Satz Bring's wieder zum Laufen.";

const pageDescription =
  "Geräte-Retter-Prämie: 50 % und höchstens 130 € auf die Reparatur, nur in der laufenden Förderperiode. MONTER ist Partnerunternehmen und löst den Bon ein.";

const figures = [
  { value: "50 %", label: "der Brutto-Reparaturkosten", note: "für förderfähige Elektro- und Elektronikgeräte" },
  { value: "130 €", label: "höchstens pro Reparatur", note: "liegt die Rechnung darüber, bleibt der Deckel" },
  { value: "100 €", label: "Beispiel bei 200 € Rechnung", note: "die Hälfte, unter dem Deckel, geht ab" }
];

const steps = [
  {
    number: "01",
    title: "Bon holen",
    text: "Sie beantragen den Bon online. Die Schritte der laufenden Periode nennen wir bei der Anfrage."
  },
  {
    number: "02",
    title: "Gerät prüfen lassen",
    text: "Waschmaschine, Geschirrspüler, Kühlschrank, Trockner, Backofen — typische Geräte. Ob Ihres dabei ist, klären wir vor der Reparatur."
  },
  {
    number: "03",
    title: "Weniger zahlen",
    text: "MONTER ist Partnerunternehmen. Der Förderbetrag geht direkt von der Rechnung, Sie zahlen den Rest."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Was ist die Geräteretterprämie?",
    answer:
      "Die Geräte-Retter-Prämie — oft Geräteretterprämie geschrieben — ist das Nachfolgemodell des österreichischen Reparaturbonus. Sie fördert die Reparatur von Elektro- und Elektronikgeräten mit 50 % der Brutto-Reparaturkosten, maximal 130 € pro Reparatur."
  },
  {
    question: "Wie hoch ist die Geräteretterprämie in Österreich?",
    answer:
      "50 % der Bruttoreparatur, gedeckelt bei 130 €. Beispiel: Kostet die Reparatur 200 €, werden 100 € gefördert. Liegt die Rechnung über 260 €, bleiben 130 € der Höchstbetrag."
  },
  {
    question: "Gilt die Prämie nur für begrenzte Zeit?",
    answer:
      "Ja. Sie hängt an der laufenden Förderperiode. Ist die Periode zu oder der Rahmen ausgeschöpft, gibt es den Abzug nicht. Den aktuellen Stand nennen wir bei der Anfrage, bevor ein Termin feststeht."
  },
  {
    question: "Ist MONTER Partnerunternehmen?",
    answer:
      "Ja. MONTER Reparatur & Service ist teilnehmendes Partnerunternehmen. Den Bon lösen Sie bei uns ein, der Förderbetrag wird direkt von der Rechnung abgezogen."
  },
  {
    question: "Wie läuft der Antrag ab?",
    answer:
      "Sie beantragen den Bon online und bringen ihn zum Termin mit oder lösen ihn über uns ein. Der Förderbetrag geht von der Rechnung ab. Die genauen Schritte der laufenden Periode nennen wir bei der Anfrage."
  },
  {
    question: "Für welche Geräte gilt die Prämie?",
    answer:
      "Für förderfähige Elektro- und Elektronikgeräte von Privatpersonen — typisch Waschmaschine, Geschirrspüler, Kühlschrank, Trockner, Backofen. Ob Ihr Gerät in der aktuellen Periode dabei ist, klären wir vor der Reparatur."
  }
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Geräte-Retter-Prämie",
  description: pageDescription,
  url: `${siteConfig.siteUrl}/geraete-retter-praemie`,
  inLanguage: "de-AT",
  primaryImageOfPage: {
    "@type": "ImageObject",
    contentUrl: imageUrl,
    url: imageUrl,
    width: 898,
    height: 607,
    caption: imageCaption,
    description: imageCaption,
    inLanguage: "de-AT",
    representativeOfPage: true
  }
};

export const metadata: Metadata = buildMetadata({
  title: "Geräteretterprämie Österreich | Geräte-Retter-Prämie | MONTER",
  description: pageDescription,
  path: "/geraete-retter-praemie",
  images: [imageUrl]
});

export default function GeraeteRetterPraemiePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <section className="overflow-hidden bg-[#eef4ec]">
        <div className="mx-auto grid max-w-[88rem] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:py-20">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Nur diese Förderperiode</p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.4rem]">
              Die Hälfte
              <span className="mt-1 block font-display-italic text-[color:var(--accent)]">bleibt bei Ihnen.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Die Geräte-Retter-Prämie folgt auf den Reparaturbonus. 50&nbsp;% der
              Brutto-Reparaturkosten gehen ab, höchstens 130&nbsp;€. MONTER ist
              Partnerunternehmen. Den Bon lösen Sie bei der Reparatur ein — solange diese
              Periode läuft.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#ablauf" className="btn-primary">
                Wie der Bon läuft
              </a>
              <a href="#termin" className="btn-ghost">
                Zum Reparaturtermin
              </a>
            </div>
          </div>
          <figure className="reveal relative">
            <Image
              src={imagePath}
              alt={imageCaption}
              width={898}
              height={607}
              priority
              sizes="(min-width: 1024px) 44rem, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 max-w-lg text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Bring&apos;s wieder zum Laufen. Das Motiv der Geräte-Retter-Prämie.
            </figcaption>
          </figure>
        </div>
      </section>

      <div aria-hidden="true" className="bg-[#eef4ec]">
        <svg viewBox="0 0 1440 56" className="block h-10 w-full sm:h-14" preserveAspectRatio="none">
          <polygon points="0,0 1440,56 0,56" fill="#0a0a0a" />
        </svg>
      </div>

      <section className="bg-[color:var(--ink)] text-white">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-on-dark)]">
            <span aria-hidden="true" className="h-px w-8 bg-[color:var(--accent)]" />
            Was abgeht
          </p>
          <h2 className="font-display mt-6 max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Drei Zahlen. Danach der Ablauf.
          </h2>
          <dl className="mt-12 grid gap-px bg-white/15 sm:grid-cols-3">
            {figures.map((item) => (
              <div key={item.value} className="bg-[color:var(--ink)] px-6 py-8 sm:px-8 sm:py-10">
                <dd className="font-display text-5xl font-light tracking-tight text-white tabular-nums sm:text-6xl">
                  {item.value}
                </dd>
                <dt className="mt-4 text-base font-normal text-white">{item.label}</dt>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/65">{item.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="ablauf" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Ablauf</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Vom Bon zur Rechnung.
            </h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Die Prämie gilt nur für die laufende Förderperiode. Ist sie zu oder der Rahmen
              ausgeschöpft, entfällt der Abzug. Ob Ihr Gerät jetzt dabei ist, sagen wir vor dem
              Termin.
            </p>
          </div>
          <ol className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="bg-white p-8 sm:p-10">
                <span className="numeral text-[color:var(--accent)]">{step.number}</span>
                <h3 className="font-display mt-6 text-3xl font-light tracking-tight">{step.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt, bevor der Termin feststeht." items={faqs} />

      <section className="bg-white">
        <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-16">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Reparaturtermin</p>
          <h2 className="font-display mt-5 max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Passt die Periode, folgt der Termin.
          </h2>
          <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            Gerät und Fehlerbild reichen. Wir sagen, ob die Prämie jetzt greift, und stimmen den
            Besuch ab. Noch kein Auftrag.
          </p>
        </div>
      </section>

      <div id="termin" className="scroll-mt-28">
        <RepairBookingCta />
      </div>
    </main>
  );
}
