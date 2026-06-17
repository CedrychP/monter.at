import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Saison-Aktionen",
    text: "Vergünstigte Wartungs- und Service-Pakete zu ausgewählten Zeiten im Jahr."
  },
  {
    title: "Paketpreise",
    text: "Kombinierte Leistungen zum Vorteilspreis — etwa Wartung mehrerer Geräte."
  },
  {
    title: "Mitglieder-Vorteile",
    text: "Zusätzliche Konditionen für künftige MONTER GOLD Mitglieder."
  },
  {
    title: "Aktuelle Förderungen",
    text: "Hinweise zu Förderungen wie der Geräte-Retter-Prämie und wie Sie diese nutzen."
  }
];

export const metadata: Metadata = {
  title: "Aktionskatalog | Angebote & Aktionen | MONTER",
  description:
    "Der MONTER Aktionskatalog ist in Vorbereitung: Saison-Aktionen, Paketpreise, Mitglieder-Vorteile und Hinweise zu aktuellen Förderungen. Bald verfügbar in Wien.",
  alternates: {
    canonical: "/aktionskatalog"
  }
};

export default function AktionskatalogPage() {
  return (
    <InfoPageLayout
      eyebrow="Aktionskatalog"
      title="Aktionen & Angebote."
      comingSoon
      intro="Unser Aktionskatalog mit Service-Paketen und saisonalen Angeboten ist in Vorbereitung. Bis dahin profitieren Sie von transparenten Preisen und Förderungen wie der Geräte-Retter-Prämie."
      heroNote="Fragen zu aktuellen Konditionen? Wir beraten Sie gerne telefonisch."
      primaryCta={{ label: "Förderung & Preise ansehen", href: "/geraete-retter-praemie" }}
      cardsEyebrow="Was Sie erwartet"
      cardsTitle="Vorteile, die sich lohnen."
      cards={cards}
      closingTitle="Schon jetzt sparen."
      closingText="Mit transparenten Preisen und der Geräte-Retter-Prämie sparen Sie bereits heute — wir zeigen Ihnen wie."
    />
  );
}
