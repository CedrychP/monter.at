import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Reparieren oder ersetzen?",
    text: "Wir bewerten Alter, Zustand, Ersatzteilpreis und Aufwand und sagen ehrlich, was wirtschaftlich sinnvoller ist."
  },
  {
    title: "Passendes Gerät finden",
    text: "Wenn ein Neukauf sinnvoll ist, helfen wir bei der Auswahl nach Bedarf, Platz und Budget — herstellerneutral."
  },
  {
    title: "Energie & Folgekosten",
    text: "Ein modernes Gerät kann sich durch geringeren Verbrauch rechnen. Wir ordnen die laufenden Kosten realistisch ein."
  },
  {
    title: "Einbau & Anschluss",
    text: "Auf Wunsch übernehmen wir Lieferung, Montage und Anschluss — und nehmen das Altgerät mit."
  }
];

const sections: InfoSection[] = [
  {
    title: "Ehrlich statt verkaufsorientiert",
    body:
      "Unser Ausgangspunkt ist Ihr Gerät, nicht der Verkauf. Oft lässt sich ein Defekt wirtschaftlich beheben — und manchmal ist ein Austausch klar die bessere Entscheidung. Wir sagen Ihnen offen, was für Ihre Situation passt."
  },
  {
    title: "Worauf es bei der Auswahl ankommt",
    body:
      "Nutzungsverhalten, Haushaltsgröße, verfügbarer Platz, Einbausituation und Energieeffizienz sind entscheidend. Wir helfen, die wichtigen Kriterien für Ihre Entscheidung zu sortieren."
  },
  {
    title: "Von der Beratung bis zum Anschluss",
    body:
      "Wenn Sie möchten, begleiten wir den ganzen Weg: Einschätzung, Auswahl, Lieferung, Montage und Anschluss — sowie die fachgerechte Entsorgung des Altgeräts."
  }
];

export const metadata: Metadata = {
  title: "Kaufberatung Haushaltsgeräte Wien | Reparieren oder ersetzen | MONTER",
  description:
    "Kaufberatung in Wien: Wir sagen ehrlich, ob sich eine Reparatur lohnt oder ein Neukauf sinnvoller ist — herstellerneutral, mit Blick auf Energie, Folgekosten und Einbau.",
  alternates: {
    canonical: "/kaufberatung"
  }
};

export default function KaufberatungPage() {
  return (
    <InfoPageLayout
      eyebrow="Kaufberatung"
      title="Neu kaufen oder reparieren?"
      intro="Bevor ein Gerät ersetzt wird, lohnt sich eine ehrliche Einschätzung. Wir bewerten die Reparatur wirtschaftlich — und beraten herstellerneutral, wenn ein Neukauf die bessere Wahl ist."
      heroNote="Beschreiben Sie Gerät und Fehlerbild — wir geben eine ehrliche Empfehlung."
      primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
      cardsEyebrow="Wobei wir helfen"
      cardsTitle="Klare Entscheidung statt Bauchgefühl."
      cards={cards}
      sectionsEyebrow="Unser Ansatz"
      sectionsTitle="Beratung, die zu Ihnen passt."
      sections={sections}
      closingTitle="Unsicher bei der Entscheidung?"
      closingText="Rufen Sie kurz an oder schildern Sie Ihr Anliegen — wir helfen, die richtige Wahl zu treffen."
    />
  );
}
