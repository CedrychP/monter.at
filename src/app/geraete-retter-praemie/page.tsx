import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";

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
      "Die Geräte-Retter-Prämie ist das Nachfolgemodell des österreichischen Reparaturbonus. Sie unterstützt die Reparatur von Elektro- und Elektronikgeräten finanziell und macht Reparieren attraktiver als Wegwerfen."
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

export const metadata: Metadata = {
  title: "Geräte-Retter-Prämie nutzen | Reparaturförderung Wien | MONTER",
  description:
    "Geräte-Retter-Prämie: bis zu 50 % und max. 130 € Förderung auf die Reparatur von Elektro- und Elektronikgeräten. Nachfolger des Reparaturbonus — wir helfen beim Einlösen in Wien.",
  alternates: {
    canonical: "/geraete-retter-praemie"
  }
};

export default function GeraeteRetterPraemiePage() {
  return (
    <InfoPageLayout
      eyebrow="Förderung"
      title="Geräte-Retter-Prämie nutzen."
      intro="Reparieren lohnt sich doppelt: Mit der Geräte-Retter-Prämie — dem Nachfolger des Reparaturbonus — sparen Sie bis zu 50 % und maximal 130 € auf die Reparatur Ihrer Elektrogeräte. Wir helfen Ihnen beim Einlösen."
      heroNote="Wir informieren Sie im Zuge der Anfrage über den aktuellen Förderstand."
      primaryCta={{ label: "Reparatur mit Prämie anfragen", href: "/#kontakt" }}
      cardsEyebrow="Ihre Vorteile"
      cardsTitle="So viel können Sie sparen."
      cardsIntro="Die wichtigsten Eckdaten der Förderung auf einen Blick."
      cards={cards}
      sectionsEyebrow="Förderung im Detail"
      sectionsTitle="Reparieren statt wegwerfen."
      sections={sections}
      closingTitle="Prämie nutzen & sparen."
      closingText="Beschreiben Sie uns Ihr Gerät und Fehlerbild — wir prüfen die Reparatur und unterstützen beim Einlösen der Prämie."
    />
  );
}
