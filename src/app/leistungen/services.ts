export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  category: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
  checklist: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "waschmaschine-reparatur-wien",
    title: "Waschmaschine Reparatur Wien",
    metaTitle: "Waschmaschine Reparatur Wien | MONTER Service",
    description:
      "Waschmaschine Reparatur in Wien: schnelle Einschätzung, klare Diagnose und telefonische Terminabstimmung. Jetzt MONTER Service anrufen.",
    h1: "Waschmaschine Reparatur in Wien",
    category: "Waschmaschine",
    intro:
      "Wenn die Waschmaschine nicht abpumpt, schleudert, Wasser verliert oder einen Fehlercode zeigt, zählt eine schnelle und sinnvolle Einschätzung. MONTER Reparatur & Service unterstützt Haushalte, Vermieter und Hausverwaltungen in Wien bei typischen Waschmaschinenproblemen.",
    sections: [
      {
        title: "Typische Fehlerbilder",
        body:
          "Häufige Ursachen sind blockierte Pumpen, defekte Türverriegelungen, verschmutzte Siebe, Probleme mit Wasserzulauf oder Ablauf sowie Elektronikfehler. Eine gute Vorbereitung mit Marke, Modellnummer und Fehlercode hilft, den Reparaturbedarf realistisch einzuschätzen."
      },
      {
        title: "Reparatur statt unnötiger Neukauf",
        body:
          "Nicht jede Waschmaschine muss sofort ersetzt werden. Entscheidend sind Alter, Zustand, Ersatzteilpreis und Sicherheitsaspekte. Wir erklären transparent, wann eine Reparatur wirtschaftlich sinnvoll ist und wann ein Austausch die bessere Lösung sein kann."
      },
      {
        title: "Vorbereitung für den Termin",
        body:
          "Für die Anfrage sind Standort, Gerätetyp, Marke, Fehlerbild und Fotos vom Typenschild besonders hilfreich. Bei dringenden Ausfällen ist der telefonische Kontakt der schnellste Weg."
      }
    ],
    checklist: ["Fehlercode notieren", "Typenschild fotografieren", "Wasserstand prüfen", "Standort nennen", "Telefonisch Termin klären"]
  },
  {
    slug: "geschirrspueler-reparatur-wien",
    title: "Geschirrspüler Reparatur Wien",
    metaTitle: "Geschirrspüler Reparatur Wien | MONTER Service",
    description:
      "Geschirrspüler Reparatur in Wien: Hilfe bei Undichtigkeit, Pumpenproblemen und schlechter Reinigung. Jetzt Reparaturanfrage vorbereiten.",
    h1: "Geschirrspüler Reparatur in Wien",
    category: "Geschirrspüler",
    intro:
      "Ein defekter Geschirrspüler stört den Alltag schnell. Ob Wasser stehen bleibt, das Gerät nicht heizt, schlecht reinigt oder ausläuft: Für eine gute Reparaturentscheidung braucht es eine klare Diagnose.",
    sections: [
      {
        title: "Wenn das Reinigungsergebnis schlechter wird",
        body:
          "Verstopfte Siebe, blockierte Sprüharme, falsche Dosierung oder ein Heizproblem können dazu führen, dass Geschirr nicht sauber wird. Auch Wasserzufuhr und Ablauf sollten geprüft werden."
      },
      {
        title: "Undichtigkeiten ernst nehmen",
        body:
          "Wasser unter dem Gerät kann Dichtungen, Pumpen oder Schläuche betreffen. Gerade bei Einbaugeräten ist eine schnelle Einschätzung wichtig, um Küchenmöbel und Böden zu schützen."
      },
      {
        title: "Schnellere Abwicklung durch Daten",
        body:
          "Marke, Modellnummer, Fehlercode und Fotos helfen bei der Vorbereitung. So lässt sich besser abschätzen, ob Ersatzteile wahrscheinlich benötigt werden."
      }
    ],
    checklist: ["Siebe prüfen", "Fehlercode fotografieren", "Undichtigkeit dokumentieren", "Modellnummer bereithalten", "Anruf vorbereiten"]
  },
  {
    slug: "backofen-herd-reparatur-wien",
    title: "Backofen & Herd Reparatur Wien",
    metaTitle: "Backofen Herd Reparatur Wien | MONTER Service",
    description:
      "Backofen und Herd Reparatur in Wien: klare Hilfe bei Heizproblemen, Elektronikfehlern und Sicherheitsfragen. Jetzt anrufen.",
    h1: "Backofen und Herd Reparatur in Wien",
    category: "Backofen & Herd",
    intro:
      "Wenn Backofen oder Herd nicht mehr heizen, Sicherungen auslösen oder Bedienelemente nicht reagieren, sollte Sicherheit an erster Stelle stehen. MONTER Reparatur & Service hilft bei der strukturierten Einschätzung.",
    sections: [
      {
        title: "Heizleistung und Elektronik",
        body:
          "Betroffen sein können Heizkörper, Temperaturfühler, Schalter, Relais oder Steuerung. Ohne Messung ist oft schwer zu erkennen, ob ein einzelnes Bauteil oder mehrere Komponenten betroffen sind."
      },
      {
        title: "Sicherheitsrelevante Symptome",
        body:
          "Geruch, Funken, wiederholt ausgelöste Sicherungen oder sichtbare Schäden sollten nicht ignoriert werden. In solchen Fällen bitte das Gerät nicht weiter nutzen und telefonisch abklären."
      },
      {
        title: "Wirtschaftlichkeit prüfen",
        body:
          "Bei älteren Geräten lohnt sich eine ehrliche Abwägung. Ersatzteilpreis, Gerätezustand und Reparaturaufwand entscheiden, ob Instandsetzung sinnvoll ist."
      }
    ],
    checklist: ["Sicherung prüfen", "Betriebsart notieren", "Fehlerbild beschreiben", "Gerät nicht öffnen", "Telefonisch abklären"]
  },
  {
    slug: "trockner-reparatur-wien",
    title: "Trockner Reparatur Wien",
    metaTitle: "Trockner Reparatur Wien | MONTER Service",
    description:
      "Trockner Reparatur in Wien: Unterstützung bei feuchter Wäsche, Sensorproblemen, Wärmepumpe und Luftwegen. Jetzt Kontakt aufnehmen.",
    h1: "Trockner Reparatur in Wien",
    category: "Trockner",
    intro:
      "Wenn der Trockner läuft, aber die Wäsche feucht bleibt, steigen Zeitaufwand und Energiekosten. Eine gezielte Einschätzung hilft, Filterprobleme von technischen Defekten zu unterscheiden.",
    sections: [
      {
        title: "Filter, Luftwege und Wärmetauscher",
        body:
          "Viele Probleme entstehen durch blockierte Luftwege, verschmutzte Filter oder einen zugesetzten Wärmetauscher. Dadurch kann Feuchtigkeit nicht richtig abgeführt werden."
      },
      {
        title: "Sensorik und Wärme",
        body:
          "Feuchtigkeitssensoren, Heizung oder Wärmepumpe können betroffen sein. Wenn Reinigung keine Verbesserung bringt, ist eine fachliche Diagnose sinnvoll."
      },
      {
        title: "Reparaturentscheidung",
        body:
          "Bei Trocknern hängt die Wirtschaftlichkeit stark von Alter, Energieeffizienz und Bauteilkosten ab. Wir helfen bei einer klaren Einschätzung."
      }
    ],
    checklist: ["Flusenfilter reinigen", "Wärmetauscher prüfen", "Programm notieren", "Marke und Modell bereithalten", "Anrufen"]
  },
  {
    slug: "kuehlschrank-reparatur-wien",
    title: "Kühlschrank Reparatur Wien",
    metaTitle: "Kühlschrank Reparatur Wien | MONTER Service",
    description:
      "Kühlschrank Reparatur in Wien: schnelle Einschätzung bei Temperaturproblemen, Vereisung und Dichtungen. Jetzt Notdienst kontaktieren.",
    h1: "Kühlschrank Reparatur in Wien",
    category: "Kühlschrank",
    intro:
      "Wenn ein Kühlschrank nicht richtig kühlt, kann das schnell Lebensmittel betreffen. Wichtig ist eine schnelle Einschätzung von Temperatur, Dichtung, Vereisung und Geräuschentwicklung.",
    sections: [
      {
        title: "Temperatur und Dichtungen",
        body:
          "Undichte Türen, beschädigte Dichtungen oder falsche Beladung können die Kühlleistung verschlechtern. Auch vereiste Bereiche beeinflussen den Betrieb."
      },
      {
        title: "Kompressor und Laufverhalten",
        body:
          "Läuft der Kompressor dauerhaft, gar nicht oder ungewöhnlich laut, sollte die Ursache geprüft werden. Der Kältekreislauf ist kein Bereich für Experimente."
      },
      {
        title: "Schnelle Schadensbegrenzung",
        body:
          "Messen Sie die Temperatur, sichern Sie empfindliche Lebensmittel und notieren Sie, seit wann das Problem besteht. Danach kann telefonisch der nächste Schritt geklärt werden."
      }
    ],
    checklist: ["Temperatur messen", "Dichtung prüfen", "Vereisung fotografieren", "Geräusche notieren", "Lebensmittel sichern"]
  },
  {
    slug: "tiefkuehl-reparatur-wien",
    title: "Tiefkühl Reparatur Wien",
    metaTitle: "Tiefkühl Reparatur Wien | MONTER Service",
    description:
      "Tiefkühl Reparatur in Wien: Hilfe bei Temperaturverlust, Vereisung, Alarmen und Ausfällen. Jetzt schnell telefonisch klären.",
    h1: "Tiefkühl Reparatur in Wien",
    category: "Tiefkühlgerät",
    intro:
      "Bei Tiefkühlgeräten zählt Zeit. Wenn die Temperatur steigt, ein Alarm erscheint oder starke Vereisung entsteht, sollte rasch entschieden werden, ob Reparatur möglich und sinnvoll ist.",
    sections: [
      {
        title: "Temperaturverlust richtig bewerten",
        body:
          "Je nach Dauer des Ausfalls können Lebensmittel gefährdet sein. Eine klare Information über Temperatur, Laufverhalten und Geräuschbild hilft bei der Einschätzung."
      },
      {
        title: "Vereisung und Türdichtung",
        body:
          "Starke Vereisung kann durch undichte Dichtungen, falsche Nutzung oder technische Probleme entstehen. Wiederkehrende Vereisung sollte geprüft werden."
      },
      {
        title: "Reparatur oder Austausch",
        body:
          "Gerätealter, Energieeffizienz und Ersatzteilkosten bestimmen, ob eine Reparatur wirtschaftlich ist. Wir geben eine ehrliche Orientierung."
      }
    ],
    checklist: ["Temperatur prüfen", "Alarm notieren", "Dichtung ansehen", "Gerätealter schätzen", "Sofort anrufen"]
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
