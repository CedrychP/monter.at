import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";

const cards: InfoCard[] = [
  {
    title: "Bis zu 50 % gespart",
    text: "Gefördert werden 50 % der Brutto-Reparaturkosten für förderfähige Elektro- und Elektronikgeräte."
  },
  {
    title: "Maximal 130 € pro Reparatur",
    text: "Pro förderfähiger Reparatur wird ein Bon von bis zu 130 € auf die Reparaturkosten angerechnet."
  },
  {
    title: "Für Privatpersonen",
    text: "Privatpersonen können den Bon für haushaltsübliche Geräte beantragen — einfach online."
  },
  {
    title: "Bei teilnehmenden Betrieben",
    text: "Die Prämie wird direkt bei der Reparatur über einen teilnehmenden Betrieb eingelöst."
  }
];

const sections: InfoSection[] = [
  {
    title: "Was ist die Geräte-Retter-Prämie?",
    body:
      "Die Geräte-Retter-Prämie — oft Geräteretterprämie geschrieben — ist das Nachfolgemodell des österreichischen Reparaturbonus. Sie unterstützt die Reparatur von Elektro- und Elektronikgeräten finanziell und macht Reparieren attraktiver als Wegwerfen."
  },
  {
    title: "So funktioniert es",
    body:
      "Sie beantragen den Bon online und lösen ihn bei einem teilnehmenden Reparaturbetrieb ein. Der Förderbetrag wird direkt von den Reparaturkosten abgezogen — Sie zahlen nur den reduzierten Betrag."
  },
  {
    title: "Rechenbeispiel",
    body:
      "Kostet eine Reparatur z. B. 200 €, werden 50 % gefördert — das wären 100 €. Da der Maximalbetrag bei 130 € liegt, profitieren Sie hier mit den vollen 100 € Ersparnis und zahlen nur 100 €."
  },
  {
    title: "Aktuelle Bedingungen",
    body:
      "Förderhöhe, Voraussetzungen und Verfügbarkeit können sich ändern und hängen von der jeweiligen Förderperiode ab. Wir informieren Sie im Zuge Ihrer Anfrage über den aktuellen Stand."
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
    question: "Wie läuft der Antrag ab?",
    answer:
      "Sie beantragen den Bon online, bringen ihn zum Termin mit oder lösen ihn über uns als teilnehmenden Betrieb ein. Der Förderbetrag wird direkt von der Rechnung abgezogen. Die genauen Schritte der laufenden Periode nennen wir bei der Anfrage."
  },
  {
    question: "Für welche Geräte gilt die Prämie?",
    answer:
      "Für förderfähige Elektro- und Elektronikgeräte von Privatpersonen — typisch Waschmaschine, Geschirrspüler, Kühlschrank, Trockner, Backofen. Ob Ihr Gerät in der aktuellen Periode dabei ist, klären wir vor der Reparatur."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Geräteretterprämie Österreich | Geräte-Retter-Prämie | MONTER",
  description:
    "Geräteretterprämie Österreich: 50 % und max. 130 € auf die Reparatur. Ablauf, Höhe und Einlösen der Geräte-Retter-Prämie in Wien — Nachfolger des Reparaturbonus.",
  path: "/geraete-retter-praemie"
});

export default function GeraeteRetterPraemiePage() {
  return (
    <InfoPageLayout
      eyebrow="Förderung"
      title="Geräte-Retter-Prämie nutzen."
      intro="Geräteretterprämie in Österreich: Mit der Geräte-Retter-Prämie — dem Nachfolger des Reparaturbonus — sparen Sie 50 % und maximal 130 € auf die Reparatur Ihrer Elektrogeräte. Hier stehen Was, Höhe und Ablauf. Wir helfen beim Einlösen in Wien."
      heroNote="Wir informieren Sie im Zuge der Anfrage über den aktuellen Förderstand."
      primaryCta={{ label: "Reparatur mit Prämie anfragen", href: "/reparatur-buchen" }}
      cardsEyebrow="Ihre Vorteile"
      cardsTitle="So viel können Sie sparen."
      cardsIntro="Die wichtigsten Eckdaten der Förderung auf einen Blick."
      cards={cards}
      sectionsEyebrow="Förderung im Detail"
      sectionsTitle="Reparieren statt wegwerfen."
      sections={sections}
      closingTitle="Prämie nutzen & sparen."
      closingText="Beschreiben Sie uns Ihr Gerät und Fehlerbild — wir prüfen die Reparatur und unterstützen beim Einlösen der Prämie."
    >
      <HubFaq
        eyebrow="Häufige Fragen"
        title="Geräteretterprämie: kurz geklärt."
        items={faqs}
      />
    </InfoPageLayout>
  );
}
