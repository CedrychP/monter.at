import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout, { type InfoSection } from "../InfoPageLayout";
import { HubDetailLinks, HubFaq, type HubDetailLink, type HubFaqItem } from "../HubBlocks";
import { brandAlphabetGroups, brandOverview, brandPages } from "./brands";
import { brandDeviceCategories } from "./devices";
import { buildMetadata } from "../pageMetadata";

const brandLinks: HubDetailLink[] = brandPages.map((brand) => ({
  label: brand.brand,
  href: `/marken/${brand.slug}`,
  text: brand.hubTeaser
}));

const brandPageBySearchName = new Map(
  brandPages.map((brand) => [brand.brand.toUpperCase(), brand.slug])
);

const sections: InfoSection[] = [
  {
    title: "Markenoffen heißt: nicht nur eine Marke",
    body:
      "Wir sind kein Vertragswerkstatt-Betrieb eines einzelnen Herstellers, sondern arbeiten an Geräten aller gängigen Marken. Das hat einen praktischen Vorteil: In einem Haushalt stehen selten Geräte nur eines Herstellers — Waschmaschine, Geschirrspüler und Backofen kommen oft von drei verschiedenen Marken und lassen sich bei einem Termin abarbeiten."
  },
  {
    title: "Ersatzteile und Lieferzeiten",
    body:
      "Bei stark verbreiteten Marken wie Bosch, Siemens und Miele sind Verschleiß- und Elektronikteile in der Regel gut und lange verfügbar. Bei Nischenmarken, Handelsmarken und Geräten aus dem Möbelhandel dauert die Beschaffung häufiger — dann prüfen wir, ob ein baugleiches Teil aus derselben Konzernplattform passt. Das entscheidet oft darüber, ob eine Reparatur überhaupt wirtschaftlich bleibt."
  },
  {
    title: "Fehlercodes richtig nutzen",
    body:
      "Fast alle modernen Geräte zeigen Fehlercodes an — je Hersteller mit eigener Systematik. Der Code sagt, welcher Bereich eine Störung meldet, aber nicht automatisch, welches Bauteil defekt ist. Notieren Sie den Code trotzdem: Er verkürzt die Diagnose vor Ort deutlich und hilft schon am Telefon bei der Frage, welche Teile wir mitbringen sollten."
  },
  {
    title: "Einsatzgebiet und Termine",
    body:
      "Wir betreuen alle Wiener Bezirke und das nähere Niederösterreich — für Privathaushalte, Vermieter, Hausverwaltungen und Gewerbe. Im Burgenland, in Oberösterreich, der Steiermark und Salzburg sind Techniker vor Ort im Einsatz. Für die Anfrage brauchen wir Marke, Modellnummer vom Typenschild, den Fehlercode und eine kurze Beschreibung.",
    link: { label: "Alle Einsatzgebiete", href: "/einsatzgebiete" }
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Reparieren Sie meine Marke, wenn sie nicht in der Liste steht?",
    answer:
      "In der Regel ja. Die Liste zeigt die Marken, die bei uns am häufigsten vorkommen — sie ist keine Abgrenzung. Rufen Sie mit Marke und Modellnummer an, dann klären wir vorab die Ersatzteillage."
  },
  {
    question: "Ist eine Vertragswerkstatt nicht besser als ein markenoffener Betrieb?",
    answer:
      "Innerhalb der Herstellergarantie ist der Weg über den Hersteller meist sinnvoll, weil die Leistung dort abgedeckt ist. Danach ist ein markenoffener Betrieb häufig schneller und günstiger — und kann mehrere Geräte unterschiedlicher Marken bei einem Termin erledigen."
  },
  {
    question: "Verwenden Sie Originalersatzteile?",
    answer:
      "Wir arbeiten bevorzugt mit Originalteilen. Wo diese nicht mehr lieferbar oder unverhältnismäßig teuer sind, setzen wir geprüfte Alternativteile ein und sagen Ihnen das vorher — Sie entscheiden."
  },
  {
    question: "Was bedeutet der Fehlercode auf meinem Display?",
    answer:
      "Jeder Hersteller nutzt eine eigene Systematik, und ein Code benennt den betroffenen Bereich, nicht zwingend das defekte Bauteil. Auf den Markenseiten finden Sie die häufigsten Codes je Marke mit ihrer Bedeutung als erste Orientierung."
  },
  {
    question: "Wo finde ich die Modellnummer meines Geräts?",
    answer:
      "Auf dem Typenschild: bei Waschmaschinen und Trocknern meist im Türrahmen oder auf der Rückseite, bei Geschirrspülern an der Türkante, bei Backöfen im Türrahmen und bei Kühlgeräten innen an der Seitenwand. Ein Foto des Typenschilds genügt uns."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Marken — Haushaltsgeräte Reparatur Wien | MONTER Service",
  description:
    "Markenoffene Haushaltsgeräte-Reparatur in Wien: Bosch, Miele, Siemens, AEG, Beko, Gorenje und über 60 weitere Marken. Fehlercodes, Ersatzteillage und Termin klären.",
  path: "/marken"
});

export default function MarkenHubPage() {
  return (
    <InfoPageLayout
      eyebrow="Marken"
      title="Reparatur nach Marke."
      intro="Wir reparieren Haushaltsgeräte markenoffen — von Bosch, Miele und Siemens über AEG, Beko und Gorenje bis zu Handelsmarken aus dem Möbelhandel. Für die häufigsten Marken finden Sie eigene Seiten mit typischen Fehlercodes, Modellreihen und Hinweisen zur Ersatzteillage."
      heroNote="Nennen Sie Marke, Modellnummer und Fehlercode — damit lässt sich die Ersatzteillage vorab klären."
      primaryCta={{ label: "Reparatur anfragen", href: "/reparatur-buchen" }}
      afterHero={
        <HubDetailLinks
          eyebrow="Markenseiten"
          title="Die häufigsten Marken im Detail."
          intro="Mit markenspezifischen Fehlercodes, verbreiteten Modellreihen und einer Einschätzung zur Ersatzteilverfügbarkeit."
          links={brandLinks}
        />
      }
      sectionsEyebrow="Gut zu wissen"
      sectionsTitle="Worauf es bei Marke und Ersatzteil ankommt."
      sections={sections}
      closingTitle="Marke geklärt, Termin offen?"
      closingText="Telefon ist der schnellste Weg. Wir klären Fehlerbild, Ersatzteillage und Termin direkt im Gespräch."
    >
      <section className="border-t border-[color:var(--border)] bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">
              {brandOverview.length} Marken
            </p>
            <h2 className="font-display mt-6 text-balance text-3xl font-light tracking-tight sm:text-4xl">
              Alle Marken im Service.
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Diese Marken kommen bei uns regelmäßig vor. Marken mit eigener Seite sind verlinkt —
              alle anderen reparieren wir genauso, nur ohne eigene Detailseite.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {brandAlphabetGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <p className="border-b border-[color:var(--border)] pb-3 tracking-eyebrow text-[color:var(--muted)]">
                  {group.label}
                </p>
                <ul className="mt-5 grid gap-2">
                  {group.brands.map((brand) => {
                    const slug = brandPageBySearchName.get(brand);
                    return (
                      <li key={brand} className="text-sm font-light">
                        {slug ? (
                          <Link
                            href={`/marken/${slug}`}
                            className="border-b border-transparent text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                          >
                            {brand}
                          </Link>
                        ) : (
                          <span className="text-[color:var(--muted)]">{brand}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-[color:var(--border)] pt-10">
            <p className="tracking-eyebrow text-[color:var(--muted)]">Nach Gerät statt nach Marke</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {brandDeviceCategories.map((device) => (
                <Link
                  key={device.slug}
                  href={`/haushaltsgeraete/${device.serviceSlug}`}
                  className="border-b border-transparent py-1 text-sm font-light text-[color:var(--muted)] transition hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]"
                >
                  {device.label} Reparatur
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt: Marken & Ersatzteile." items={faqs} />
    </InfoPageLayout>
  );
}
