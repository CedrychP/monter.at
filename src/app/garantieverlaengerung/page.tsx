import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Gewährleistung auf Reparaturen",
    text: "Auf unsere Reparaturleistung erhalten Sie eine Gewährleistung — sollte derselbe Fehler erneut auftreten, sehen wir uns das selbstverständlich an."
  },
  {
    title: "Originale Ersatzteile",
    text: "Wir verbauen passende Original- oder gleichwertige Teile. Das erhöht die Haltbarkeit und die Verlässlichkeit der Reparatur."
  },
  {
    title: "Dokumentierte Arbeit",
    text: "Sie erhalten eine nachvollziehbare Rechnung mit den durchgeführten Arbeiten und verbauten Teilen — wichtig für Garantie und Nachweis."
  },
  {
    title: "Ehrliche Einschätzung",
    text: "Wir sagen offen, wann sich eine Reparatur lohnt und wann ein Austausch sinnvoller ist — ohne unnötige Arbeiten."
  }
];

const sections: InfoSection[] = [
  {
    title: "Gewährleistung auf unsere Arbeit",
    body:
      "Für unsere Reparaturen gilt die gesetzliche Gewährleistung. Tritt nach der Reparatur derselbe Fehler wieder auf, klären wir das unkompliziert und prüfen die Ursache erneut."
  },
  {
    title: "Garantie der Hersteller",
    body:
      "Bei neuen Geräten gelten die jeweiligen Hersteller- und Händlergarantien. Wir helfen Ihnen, Garantiefälle richtig einzuordnen und die passenden Unterlagen bereitzuhalten."
  },
  {
    title: "Erweiterte Garantiepakete",
    body:
      "Erweiterte Garantie- und Servicepakete für gekaufte Geräte sind in Vorbereitung. Sprechen Sie uns an — wir informieren Sie, sobald diese verfügbar sind."
  }
];

export const metadata: Metadata = {
  title: "Garantie & Gewährleistung | Reparatur Wien | MONTER",
  description:
    "Garantie und Gewährleistung bei MONTER: Gewährleistung auf Reparaturleistungen, originale Ersatzteile und dokumentierte Arbeit. Erweiterte Garantiepakete in Vorbereitung.",
  alternates: {
    canonical: "/garantieverlaengerung"
  }
};

export default function GarantieverlaengerungPage() {
  return (
    <InfoPageLayout
      eyebrow="Garantie & Gewährleistung"
      title="Garantie auf Reparatur & Teile."
      intro="Verlässliche Arbeit, originale Ersatzteile und eine nachvollziehbare Dokumentation: Auf unsere Reparaturen erhalten Sie Gewährleistung. Erweiterte Garantiepakete für gekaufte Geräte sind in Vorbereitung."
      heroNote="Fragen zu Garantie oder Gewährleistung? Wir beraten Sie gerne telefonisch."
      primaryCta={{ label: "Frage zur Garantie stellen", href: "/kontakt" }}
      cardsEyebrow="Ihre Sicherheit"
      cardsTitle="Worauf Sie sich verlassen können."
      cards={cards}
      sectionsEyebrow="Gut zu wissen"
      sectionsTitle="Garantie richtig einordnen."
      sections={sections}
      closingTitle="Fragen zur Garantie?"
      closingText="Wir erklären Ihnen, was für Ihre Reparatur oder Ihr Gerät gilt — klar und ohne Kleingedrucktes."
    />
  );
}
