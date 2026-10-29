export type GoldPlan = {
  id: "silber" | "gold" | "platinum";
  name: string;
  price: string;
  year: string;
  line: string;
  points: string[];
};

export const goldPlans: GoldPlan[] = [
  {
    id: "silber",
    name: "Silber",
    price: "19,90",
    year: "238,80",
    line: "Die Anfahrt fällt weg.",
    points: [
      "Eine Wohnadresse, die Geräteakte mit Modell und letztem Befund.",
      "Bis zu drei Einsätze im Jahr in Wien oder Niederösterreich: Anfahrt 0 €.",
      "Zweiter Termin desselben Falls: nur das Ersatzteil.",
      "Termin vor der offenen Liste."
    ]
  },
  {
    id: "gold",
    name: "Gold",
    price: "29,90",
    year: "358,80",
    line: "Ein Check ist im Beitrag.",
    points: [
      "Alles aus Silber.",
      "Einmal im Jahr Anfahrt und Diagnose eines Haushaltsgeräts inklusive.",
      "Weitere Arbeitseinheit 45 € statt 60 €.",
      "Nachricht, bevor ein Neugerät in die Auswahl kommt."
    ]
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "39,90",
    year: "478,80",
    line: "Zwei Checks im Jahr.",
    points: [
      "Alles aus Gold.",
      "Zweimal im Jahr Anfahrt und Diagnose inklusive.",
      "Eine Person führt die Akte dieser Adresse.",
      "Geplante Termine vor Gold und Silber."
    ]
  }
];

export const goldShared = [
  "Mindestlaufzeit 12 Monate. Wie es danach weitergeht, steht im Vertrag, bevor die erste Lastschrift läuft.",
  "Diagnose bleibt 144 € freistehend und 158 € bei Einbau. Reparatur und Diagnose 180 € bzw. 198 €.",
  "Repariert wird, wenn es sich rechnet. Sonst sagen wir das, bevor ein Teil bestellt wird.",
  "Wasseraustritt und ein ausgefallenes Tiefkühlgerät bleiben für alle vorrangig."
];

export const goldExtra = [
  "Ersatzteile",
  "Gaggenau-Anfahrt, der Aufpreis über 96 € bzw. 120 €",
  "Linz, die Anfahrt wird vor dem Termin genannt",
  "Arbeit am Kältekreis und die Arbeitszeit am Garagentor",
  "Kaufpreis, Lieferung und Montage eines neuen Geräts"
];
