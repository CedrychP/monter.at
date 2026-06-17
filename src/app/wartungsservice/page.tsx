import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Haushaltsgeräte-Wartung",
    text: "Reinigung, Prüfung und kleine Justierungen für Waschmaschine, Geschirrspüler, Trockner & Co. — damit Geräte länger zuverlässig laufen."
  },
  {
    title: "Garagentor-Wartung",
    text: "Prüfung von Federn, Seilen, Laufrollen, Antrieb und Sicherheitsfunktionen für einen sicheren, leisen Lauf."
  },
  {
    title: "Sicherheitsüberprüfung",
    text: "Kontrolle sicherheitsrelevanter Bauteile und Funktionen — besonders wichtig bei stark genutzten Toren und Geräten."
  },
  {
    title: "Pflege & Empfehlung",
    text: "Konkrete Empfehlungen zu Reinigung, Nutzung und sinnvollen Intervallen, damit Reparaturen seltener werden."
  }
];

const sections: InfoSection[] = [
  {
    title: "Warum sich Wartung lohnt",
    body:
      "Regelmäßige Wartung erkennt Verschleiß, bevor er zum teuren Ausfall wird. Saubere Filter, geprüfte Mechanik und justierte Bauteile sparen Energie, verlängern die Lebensdauer und erhöhen die Sicherheit."
  },
  {
    title: "Was wir prüfen",
    body:
      "Je nach Gerät prüfen wir Mechanik, Elektronik, Dichtungen, Filter, Schläuche, Federn, Rollen und Sicherheitsfunktionen — und dokumentieren, was in Ordnung ist und was Aufmerksamkeit braucht."
  },
  {
    title: "Sinnvolle Intervalle",
    body:
      "Für viele Geräte und Tore ist eine jährliche Wartung ein guter Richtwert. Bei intensiver Nutzung — etwa in Betrieben oder bei häufig genutzten Toren — kann ein kürzeres Intervall sinnvoll sein."
  }
];

export const metadata: Metadata = {
  title: "Wartungsservice Wien | Haushaltsgeräte & Garagentore | MONTER",
  description:
    "Wartungsservice in Wien für Haushaltsgeräte und Garagentore: Prüfung, Reinigung, Justierung und Sicherheitskontrolle. Beugt Ausfällen vor und verlängert die Lebensdauer.",
  alternates: {
    canonical: "/wartungsservice"
  }
};

export default function WartungsservicePage() {
  return (
    <InfoPageLayout
      eyebrow="Wartungsservice"
      title="Wartung & Service für Ihre Geräte."
      intro="Mit regelmäßiger Wartung bleiben Haushaltsgeräte und Garagentore zuverlässig und sicher. Wir prüfen, reinigen und justieren — und geben klare Empfehlungen, damit Reparaturen seltener nötig sind."
      heroNote="Nennen Sie uns Geräte oder Tor und Standort — wir stimmen einen Wartungstermin ab."
      primaryCta={{ label: "Wartung anfragen", href: "/#kontakt" }}
      cardsEyebrow="Leistungen"
      cardsTitle="Wartung mit System."
      cardsIntro="Für Haushaltsgeräte und Garagentore — markenoffen in Wien und Niederösterreich."
      cards={cards}
      sectionsEyebrow="Gut zu wissen"
      sectionsTitle="Vorsorge statt Ausfall."
      sections={sections}
      closingTitle="Wartungstermin vereinbaren."
      closingText="Sagen Sie uns kurz, um welche Geräte oder Tore es geht — wir finden einen passenden Termin."
    />
  );
}
