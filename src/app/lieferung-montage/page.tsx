import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Anlieferung",
    text: "Wir bringen Ihr Gerät zum vereinbarten Termin an den Aufstellort — auch in höhere Stockwerke nach Absprache."
  },
  {
    title: "Anschluss & Inbetriebnahme",
    text: "Fachgerechter Anschluss an Strom, Wasser und Abfluss inklusive Funktionsprüfung und kurzer Einweisung."
  },
  {
    title: "Einbau & Montage",
    text: "Montage von Einbaugeräten, Ausrichten und sichere Befestigung — sauber und passgenau."
  },
  {
    title: "Altgeräte-Mitnahme",
    text: "Auf Wunsch nehmen wir Ihr Altgerät mit und führen es der fachgerechten Entsorgung zu."
  }
];

const sections: InfoSection[] = [
  {
    title: "Sauber angeschlossen statt selbst gemacht",
    body:
      "Gerade bei Wasch- und Spülgeräten ist der korrekte Anschluss entscheidend, um Wasserschäden zu vermeiden. Wir schließen fachgerecht an und prüfen auf Dichtheit und Funktion."
  },
  {
    title: "Einbaugeräte passgenau montiert",
    body:
      "Backöfen, Geschirrspüler oder Kühlgeräte zum Einbau müssen exakt ausgerichtet und sicher befestigt sein. Wir übernehmen Montage und Inbetriebnahme."
  },
  {
    title: "Alles aus einer Hand",
    body:
      "Lieferung, Montage, Anschluss und Altgeräte-Mitnahme lassen sich in einem Termin kombinieren — das spart Zeit und Wege."
  }
];

export const metadata: Metadata = {
  title: "Lieferung & Montage Wien | Haushaltsgeräte anschließen | MONTER",
  description:
    "Lieferung, Montage und Anschluss von Haushaltsgeräten in Wien: Anlieferung, fachgerechter Anschluss, Einbau und Altgeräte-Mitnahme — alles aus einer Hand.",
  alternates: {
    canonical: "/lieferung-montage"
  }
};

export default function LieferungMontagePage() {
  return (
    <InfoPageLayout
      eyebrow="Lieferung & Montage"
      title="Lieferung, Montage & Anschluss."
      intro="Neues Gerät gekauft? Wir liefern, montieren und schließen fachgerecht an — inklusive Funktionsprüfung und auf Wunsch Mitnahme des Altgeräts. Sauber, sicher und ohne Stress."
      heroNote="Nennen Sie Gerät, Aufstellort und Wunschtermin — wir koordinieren Lieferung und Montage."
      primaryCta={{ label: "Lieferung & Montage anfragen", href: "/#kontakt" }}
      cardsEyebrow="Leistungen"
      cardsTitle="Vom Karton zum laufenden Gerät."
      cardsIntro="Wir übernehmen den kompletten Ablauf — markenoffen in Wien und Umgebung."
      cards={cards}
      sectionsEyebrow="Gut zu wissen"
      sectionsTitle="Fachgerecht angeschlossen."
      sections={sections}
      closingTitle="Lieferung & Montage planen."
      closingText="Sagen Sie uns, welches Gerät wohin soll — wir kümmern uns um den Rest."
    />
  );
}
