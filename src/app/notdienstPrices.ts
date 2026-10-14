export type NotdienstPrice = {
  service: string;
  window: string;
  price: string;
  note: string;
  highlight?: boolean;
};

/** Brutto aus den Nettosätzen, inklusive 20 % MwSt. */
export const notdienstTariffs: NotdienstPrice[] = [
  {
    service: "Abend",
    window: "18:00–22:00",
    price: "180 €",
    note: "Anfahrt und Diagnose, Montag bis Freitag."
  },
  {
    service: "Wochenende",
    window: "18:00–22:00",
    price: "216 €",
    note: "Anfahrt und Diagnose, Samstag und Sonntag."
  },
  {
    service: "Nacht",
    window: "22:00–08:00",
    price: "240 €",
    note: "Anfahrt und Diagnose, von 22 Uhr bis 8 Uhr in der Früh."
  }
];

export const notdienstJobs: NotdienstPrice[] = [
  {
    service: "Wasserschaden Express",
    window: "Wasser stoppen, reinigen, reparieren wenn möglich",
    price: "600 €",
    note: "Wasser stoppen, alles reinigen und das Gerät reparieren, wenn es möglich ist.",
    highlight: true
  },
  {
    service: "Ablaufpumpe wechseln",
    window: "Waschmaschine",
    price: "ab 178,80 €",
    note: "Tausch der Ablaufpumpe an der Waschmaschine. Der genaue Betrag steht vor dem Einbau."
  },
  {
    service: "Türversiegelung wechseln",
    window: "Waschmaschine",
    price: "ab 154,80 €",
    note: "Tausch der Türversiegelung an der Waschmaschine."
  },
  {
    service: "Wasserzulauf prüfen",
    window: "Fehler beheben",
    price: "ab 142,80 €",
    note: "Wasserzulauf prüfen und den Fehler beheben."
  },
  {
    service: "Geschirrspüler",
    window: "Reinigen und Verstopfung",
    price: "ab 154,80 €",
    note: "Geschirrspüler reinigen und eine Verstopfung beheben."
  },
  {
    service: "Heizsystem ersetzen",
    window: "Heizung",
    price: "ab 214,80 €",
    note: "Heizsystem ersetzen. Der genaue Betrag steht vor dem Einbau."
  }
];

export const notdienstVatNote = "Alle Beträge brutto, inklusive 20 % MwSt.";
