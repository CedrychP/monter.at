import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Richtig pflegen",
    text: "Praktische Tipps zu Reinigung und Pflege, damit Geräte länger zuverlässig laufen."
  },
  {
    title: "Fehler früh erkennen",
    text: "Warnzeichen verstehen und kleine Probleme lösen, bevor sie teuer werden."
  },
  {
    title: "Sicher im Umgang",
    text: "Sicherheitshinweise für den Alltag mit Haushaltsgeräten und Garagentoren."
  },
  {
    title: "Nachhaltig nutzen",
    text: "Energie sparen und die Lebensdauer Ihrer Geräte sinnvoll verlängern."
  }
];

export const metadata: Metadata = {
  title: "Kurse & Workshops | Geräte richtig pflegen | MONTER",
  description:
    "Kurse und Workshops von MONTER sind in Vorbereitung: Geräte richtig pflegen, Fehler früh erkennen und sicher nutzen. Bald verfügbar in Wien.",
  alternates: {
    canonical: "/kurse"
  }
};

export default function KursePage() {
  return (
    <InfoPageLayout
      eyebrow="Kurse & Workshops"
      title="Kurse & Workshops."
      comingSoon
      intro="Wir planen praxisnahe Kurse rund um Pflege, Wartung und den sicheren Umgang mit Haushaltsgeräten und Garagentoren. So holen Sie mehr aus Ihren Geräten heraus und vermeiden unnötige Reparaturen."
      heroNote="Interesse an einem Kurs? Sagen Sie uns kurz Bescheid — wir melden uns."
      primaryCta={{ label: "Interesse melden", href: "/kontakt" }}
      cardsEyebrow="Was Sie lernen"
      cardsTitle="Wissen aus der Praxis."
      cards={cards}
      closingTitle="Schon jetzt Fragen?"
      closingText="Gerne geben wir Ihnen auch direkt am Telefon Tipps zur Pflege und Nutzung Ihrer Geräte."
    />
  );
}
