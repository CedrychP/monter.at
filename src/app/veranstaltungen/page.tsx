import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Info-Termine",
    text: "Veranstaltungen rund um Reparatur, Pflege und Förderungen wie die Geräte-Retter-Prämie."
  },
  {
    title: "Aktionstage",
    text: "Besondere Tage mit Beratung, Service-Angeboten und persönlichem Austausch."
  },
  {
    title: "Kooperationen",
    text: "Gemeinsame Termine mit Partnern aus der Region rund um nachhaltige Nutzung."
  },
  {
    title: "Community",
    text: "Gelegenheiten, MONTER und das Team persönlich kennenzulernen."
  }
];

export const metadata: Metadata = {
  title: "Veranstaltungen | Termine & Aktionstage | MONTER",
  description:
    "Veranstaltungen von MONTER sind in Vorbereitung: Info-Termine, Aktionstage und Kooperationen rund um Reparatur, Pflege und Förderungen. Bald in Wien.",
  alternates: {
    canonical: "/veranstaltungen"
  }
};

export default function VeranstaltungenPage() {
  return (
    <InfoPageLayout
      eyebrow="Veranstaltungen"
      title="Veranstaltungen & Termine."
      comingSoon
      intro="Wir planen Veranstaltungen rund um Reparatur, Pflege und nachhaltige Nutzung. Info-Termine, Aktionstage und Kooperationen — Details folgen in Kürze."
      heroNote="Möchten Sie zu Terminen informiert werden? Melden Sie sich gerne bei uns."
      primaryCta={{ label: "Auf dem Laufenden bleiben", href: "/kontakt" }}
      cardsEyebrow="Was geplant ist"
      cardsTitle="Termine, die verbinden."
      cards={cards}
      closingTitle="Bleiben Sie informiert."
      closingText="Sagen Sie uns Bescheid — wir informieren Sie, sobald die ersten Termine feststehen."
    />
  );
}
