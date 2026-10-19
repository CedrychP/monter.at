export type BrandDeviceCategory = {
  /** URL-Slug innerhalb der Marken-Unterseite: /marken/<brand>/<slug> */
  slug: string;
  /** Anzeigetitel im Singular */
  label: string;
  /** Mehrzahl, für Fließtext */
  plural: string;
  /** Eyebrow-Text & Kategorie */
  category: string;
  /** Pfad in /haushaltsgeraete/* für interne Verlinkung */
  serviceSlug: string;
  /** Kurzbeschreibung für Hero-Subline / Cross-Links */
  short: string;
  /** Drei Inhaltsblöcke */
  sections: {
    title: string;
    body: string;
  }[];
  /** Checkliste „Daten für die Anfrage" */
  checklist: string[];
};

export const brandDeviceCategories: BrandDeviceCategory[] = [
  {
    slug: "waschmaschine",
    label: "Waschmaschine",
    plural: "Waschmaschinen",
    category: "Waschmaschine",
    serviceSlug: "waschmaschine",
    short:
      "Reparatur bei Pumpenproblemen, Türverriegelung, Wasserzulauf, Schleudern und Fehlercodes.",
    sections: [
      {
        title: "Typische Fehlerbilder",
        body:
          "Wenn eine Waschmaschine nicht mehr abpumpt, schleudert, Wasser verliert, Fehlercodes anzeigt oder die Tür blockiert, helfen strukturierte Daten zur Einschätzung. Häufig betroffen sind Laugenpumpe, Tür­verriegelung, Heizung, Drucksensoren oder Elektronik."
      },
      {
        title: "Reparatur statt Neukauf",
        body:
          "Nicht jede Waschmaschine muss ersetzt werden. Entscheidend sind Gerätealter, Zustand, Ersatzteilpreis und Sicherheits­aspekte. MONTER Reparatur & Service unterstützt in Wien und Umgebung dabei, eine ehrliche Entscheidung zwischen Instandsetzung und Austausch zu treffen."
      },
      {
        title: "Vorbereitung des Termins",
        body:
          "Für die Anfrage sind Standort in Wien oder Umgebung, Gerätetyp, Modell­nummer, Fehler­code und ein kurzes Foto vom Typenschild hilfreich. Bei dringenden Wasser­schäden ist der telefonische Kontakt der schnellste Weg."
      }
    ],
    checklist: [
      "Fehlercode notieren",
      "Modellnummer fotografieren",
      "Wasserstand prüfen",
      "Standort in Wien & Umgebung nennen",
      "Telefonisch Termin klären"
    ]
  },
  {
    slug: "geschirrspueler",
    label: "Geschirrspüler",
    plural: "Geschirrspüler",
    category: "Geschirrspüler",
    serviceSlug: "geschirrspueler",
    short:
      "Hilfe bei Pumpenproblemen, Heiz­defekten, Undichtigkeiten und schlechter Reinigungsleistung.",
    sections: [
      {
        title: "Schlechte Reinigung erkennen",
        body:
          "Wenn der Geschirrspüler nicht mehr sauber spült, können verstopfte Siebe, blockierte Sprüharme, eine defekte Heizung oder falsche Dosierung Ursache sein. Auch Wasserzulauf und Ablauf sollten geprüft werden."
      },
      {
        title: "Undichtigkeiten ernst nehmen",
        body:
          "Wasser unter dem Gerät kann Dichtungen, Laugenpumpe oder Schlauch­verbindungen betreffen. Gerade bei Einbau­geräten in Wiener Wohnungen ist eine schnelle Einschätzung wichtig, um Möbel und Böden zu schützen."
      },
      {
        title: "Zeit sparen durch saubere Daten",
        body:
          "Marke, Modell­nummer, Fehler­code und Fotos beschleunigen die Vorbereitung. So lässt sich abschätzen, ob Ersatzteile wahrscheinlich nötig werden oder ob eine einfache Wartung ausreicht."
      }
    ],
    checklist: [
      "Siebe prüfen",
      "Fehlercode fotografieren",
      "Undichtigkeit dokumentieren",
      "Modellnummer bereithalten",
      "Anruf vorbereiten"
    ]
  },
  {
    slug: "trockner",
    label: "Trockner",
    plural: "Trockner",
    category: "Trockner",
    serviceSlug: "trockner",
    short:
      "Hilfe bei feuchter Wäsche, Sensor­problemen, Wärmetauscher und Wärmepumpe.",
    sections: [
      {
        title: "Filter, Luftwege und Wärmetauscher",
        body:
          "Wenn der Trockner läuft, die Wäsche aber feucht bleibt, sind häufig verstopfte Filter, ein zugesetzter Wärmetauscher oder blockierte Luftwege schuld. Reinigung kann viele Probleme lösen — bringt sie keine Verbesserung, ist eine fachliche Diagnose sinnvoll."
      },
      {
        title: "Sensorik, Heizung und Wärmepumpe",
        body:
          "Feuchtigkeits­sensoren, Heizregister oder Wärmepumpe können Defekte aufweisen. Wärmepumpen­trockner verlangen besondere Sorgfalt; falsche Eingriffe können den Kältekreislauf schädigen."
      },
      {
        title: "Reparaturentscheidung",
        body:
          "Beim Trockner hängt die Wirtschaftlichkeit stark von Energie­effizienz und Bauteilkosten ab. Wir geben in Wien und Umgebung eine ehrliche Orientierung, ob Reparatur oder Austausch besser passt."
      }
    ],
    checklist: [
      "Flusenfilter reinigen",
      "Wärmetauscher prüfen",
      "Programm notieren",
      "Marke und Modell bereithalten",
      "Anrufen"
    ]
  },
  {
    slug: "backofen",
    label: "Backofen",
    plural: "Backöfen",
    category: "Backofen",
    serviceSlug: "backofen",
    short:
      "Oberhitze, Unterhitze, Temperaturfühler, Tür und Steuerung. Der Ofen ist ein eigenes Gerät.",
    sections: [
      {
        title: "Heizart und Temperatur",
        body:
          "Wenn eine Heizart ausfällt oder die Temperatur nicht mehr zur Anzeige passt, sind oft Heizkörper, Temperaturfühler oder die Ansteuerung betroffen. Ohne Messung ist selten klar, welches Bauteil das ist."
      },
      {
        title: "Tür, Dichtung und Sicherung",
        body:
          "Geruch, Funken oder eine Sicherung, die auslöst, sind ein Stopp-Signal. Das Gerät nicht weiter betreiben und die Sicherung nicht wiederholt zurücksetzen."
      },
      {
        title: "Getrennt vom Kochfeld",
        body:
          "Ein Set aus Backofen und Kochfeld sind zwei Geräte. Eine kalte Zone am Feld reparieren wir nicht über den Ofen, und umgekehrt."
      }
    ],
    checklist: [
      "Modellnummer vom Typenschild",
      "Heizart, die ausfällt",
      "Fehlercode oder Anzeige",
      "Ob die Sicherung ausgelöst hat"
    ]
  },
  {
    slug: "herd",
    label: "Herd",
    plural: "Kochfelder",
    category: "Herd",
    serviceSlug: "herd",
    short:
      "Kochzonen, Sensorfeld, Induktion und Glaskeramik. Das Feld ist nicht der Backofen.",
    sections: [
      {
        title: "Zone, Sensor und Elektronik",
        body:
          "Eine tote Zone, ein Sensorfeld, das dauernd eine Taste meldet, oder eine Induktionsspule sind Befunde am Kochfeld. Die Leistungselektronik ist der teure Posten, einzelne Spulen und Tasten oft nicht."
      },
      {
        title: "Glas und Anschluss",
        body:
          "Ein gesprungenes Glaskeramikfeld kommt als Baugruppe. Löst die Sicherung aus oder riechen Klemmen verschmort, das Feld nicht weiter betreiben."
      },
      {
        title: "Eigenes Gerät neben dem Ofen",
        body:
          "Steht das Feld im Set mit einem Backofen, bleiben es zwei Reparaturen. Die Modellnummer steht auf dem Feld, nicht nur am Ofen."
      }
    ],
    checklist: [
      "Modellnummer auf dem Feld",
      "Welche Zone ausfällt",
      "Fehlercode oder Anzeige",
      "Ob das Feld zu einem Set gehört"
    ]
  },
  {
    slug: "kuehlschrank",
    label: "Kühlschrank",
    plural: "Kühlschränke",
    category: "Kühlschrank",
    serviceSlug: "kuehlschrank",
    short:
      "Einschätzung bei Temperatur­problemen, Vereisung, Dichtungen und Kompressor­geräuschen.",
    sections: [
      {
        title: "Temperatur und Dichtungen",
        body:
          "Undichte Türen, beschädigte Dichtungen oder eine falsche Beladung können die Kühl­leistung verschlechtern. Auch vereiste Bereiche beeinflussen den Betrieb und die Energie­effizienz spürbar."
      },
      {
        title: "Kompressor und Laufverhalten",
        body:
          "Läuft der Kompressor dauerhaft, gar nicht oder ungewöhnlich laut, sollte die Ursache fachlich geprüft werden. Eingriffe am Kältekreislauf sind kein Bereich für Experimente."
      },
      {
        title: "Schnelle Schadensbegrenzung",
        body:
          "Temperatur messen, empfindliche Lebensmittel sichern und notieren, seit wann das Problem besteht. Danach lässt sich der nächste Schritt telefonisch in Wien und Umgebung klären."
      }
    ],
    checklist: [
      "Temperatur messen",
      "Dichtung prüfen",
      "Vereisung fotografieren",
      "Geräusche notieren",
      "Lebensmittel sichern"
    ]
  },
  {
    slug: "tiefkuehlgeraet",
    label: "Tiefkühlgerät",
    plural: "Tiefkühlgeräte",
    category: "Tiefkühlgerät",
    serviceSlug: "tiefkuehl",
    short:
      "Schnelle Einschätzung bei Temperatur­verlust, Alarmen, Vereisung und Ausfällen.",
    sections: [
      {
        title: "Temperaturverlust richtig bewerten",
        body:
          "Bei Tiefkühl­geräten zählt jede Stunde. Steigt die Temperatur, erscheint ein Alarm oder fällt das Gerät ganz aus, ist eine zügige Einschätzung wichtig. Notieren Sie Temperatur, Lauf­verhalten und Geräusch­bild."
      },
      {
        title: "Vereisung und Türdichtung",
        body:
          "Starke Vereisung kann durch undichte Türdichtungen, falsche Nutzung oder technische Defekte entstehen. Wiederkehrende Vereisung ist ein deutliches Signal, das geprüft werden sollte."
      },
      {
        title: "Reparatur oder Austausch",
        body:
          "Gerätealter, Energie­effizienz und Ersatzteilkosten bestimmen, ob eine Tiefkühl­geräte Reparatur in Wien oder Umgebung wirtschaftlich ist. Wir geben eine klare Orientierung."
      }
    ],
    checklist: [
      "Temperatur prüfen",
      "Alarm notieren",
      "Dichtung ansehen",
      "Gerätealter schätzen",
      "Sofort anrufen"
    ]
  }
];

export function getBrandDeviceCategory(slug: string) {
  return brandDeviceCategories.find((device) => device.slug === slug);
}
