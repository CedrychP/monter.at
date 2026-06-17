import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Bevorzugte Termine",
    text: "Schnellere Terminvergabe und bevorzugte Bearbeitung für Mitglieder."
  },
  {
    title: "Exklusive Vorteile",
    text: "Vergünstigungen auf ausgewählte Leistungen und besondere Mitglieder-Konditionen."
  },
  {
    title: "Wartung im Abo",
    text: "Planbare Wartung für Ihre Geräte und Tore — damit alles zuverlässig läuft."
  },
  {
    title: "Früher Zugang",
    text: "Als Erstes informiert über Gerätekauf, Aktionen und neue Services."
  }
];

export const metadata: Metadata = {
  title: "MONTER GOLD Club | Bald verfügbar",
  description:
    "Der MONTER GOLD Club ist in Vorbereitung: bevorzugte Termine, exklusive Vorteile, Wartung im Abo und früher Zugang zu neuen Services. Bald für Kundinnen und Kunden in Wien.",
  alternates: {
    canonical: "/monter-gold"
  }
};

export default function MonterGoldPage() {
  return (
    <InfoPageLayout
      eyebrow="MONTER GOLD"
      title="Der MONTER GOLD Club."
      comingSoon
      intro="Exklusive Vorteile für treue Kundinnen und Kunden: Der MONTER GOLD Club ist gerade in Vorbereitung. Freuen Sie sich auf bevorzugte Termine, besondere Konditionen und früheren Zugang zu neuen Services."
      heroNote="Möchten Sie informiert werden, sobald der Club startet? Melden Sie sich kurz bei uns."
      primaryCta={{ label: "Vormerken & anfragen", href: "/kontakt" }}
      cardsEyebrow="Was Sie erwartet"
      cardsTitle="Vorteile für Mitglieder."
      cardsIntro="Ein Überblick über die geplanten Club-Vorteile."
      cards={cards}
      closingTitle="Früh dabei sein."
      closingText="Sagen Sie uns Bescheid — wir informieren Sie, sobald der MONTER GOLD Club verfügbar ist."
    />
  );
}
