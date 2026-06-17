import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Geprüfte Auswahl",
    text: "Eine kuratierte Auswahl an Haushaltsgeräten — passend beraten statt unübersichtlich."
  },
  {
    title: "Beratung inklusive",
    text: "Wir helfen, das richtige Gerät nach Bedarf, Platz und Budget zu finden — herstellerneutral."
  },
  {
    title: "Lieferung & Montage",
    text: "Auf Wunsch übernehmen wir Lieferung, Anschluss und Inbetriebnahme sowie die Altgeräte-Mitnahme."
  },
  {
    title: "Service aus einer Hand",
    text: "Kauf, Installation, Wartung und Reparatur — alles bei einem verlässlichen Ansprechpartner."
  }
];

export const metadata: Metadata = {
  title: "Gerätekauf bei MONTER | Bald verfügbar",
  description:
    "Der Gerätekauf bei MONTER ist in Vorbereitung: kuratierte Haushaltsgeräte mit Beratung, Lieferung, Montage und Service aus einer Hand. Bald in Wien verfügbar.",
  alternates: {
    canonical: "/geraetekauf"
  }
};

export default function GeraetekaufPage() {
  return (
    <InfoPageLayout
      eyebrow="Gerätekauf"
      title="Gerätekauf bei MONTER."
      comingSoon
      intro="Der Neugerätekauf ist bei uns gerade in Vorbereitung. Schon bald können Sie geprüfte Haushaltsgeräte mit ehrlicher Beratung, Lieferung, Montage und Service aus einer Hand erhalten."
      heroNote="Bis dahin beraten wir Sie gerne telefonisch zu Reparatur, Austausch und Auswahl."
      primaryCta={{ label: "Kaufberatung anfragen", href: "/kaufberatung" }}
      cardsEyebrow="Was Sie erwartet"
      cardsTitle="Kaufen, liefern, anschließen."
      cardsIntro="Geräte und Service kombiniert — verlässlich aus einer Hand."
      cards={cards}
      closingTitle="Schon jetzt Fragen zum Gerät?"
      closingText="Ob Reparatur, Austausch oder Auswahl — rufen Sie uns an, wir beraten Sie ehrlich."
    />
  );
}
