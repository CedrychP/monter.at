export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  date: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
  checklist: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "waschmaschine-pumpt-nicht-ab",
    title: "Waschmaschine pumpt nicht ab: Ursachen und erste Schritte",
    description:
      "Was tun, wenn die Waschmaschine nicht abpumpt? Die wichtigsten Ursachen, sichere Sofortmaßnahmen und wann ein Reparaturservice sinnvoll ist.",
    category: "Waschmaschine",
    readingTime: "4 Min.",
    date: "2026-04-28",
    intro:
      "Wenn Wasser in der Waschmaschine stehen bleibt, ist das unangenehm und oft dringend. Viele Ursachen lassen sich eingrenzen, bevor ein Techniker vor Ort ist.",
    sections: [
      {
        title: "Häufige Ursachen",
        body:
          "Typische Gründe sind ein verstopftes Flusensieb, ein blockierter Ablaufschlauch, Fremdkörper in der Pumpe oder ein Problem mit der Elektronik. Auch ein geknickter Schlauch kann bereits reichen."
      },
      {
        title: "Was Sie selbst prüfen können",
        body:
          "Schalten Sie das Gerät aus, ziehen Sie den Netzstecker und prüfen Sie, ob Wasser sicher abgelassen werden kann. Das Flusensieb sollte nur geöffnet werden, wenn Sie Wasser auffangen können."
      },
      {
        title: "Wann Reparatur sinnvoll ist",
        body:
          "Wenn die Pumpe Geräusche macht, das Gerät Fehlercodes zeigt oder Wasser wiederholt stehen bleibt, sollte die Ursache professionell geprüft werden. So vermeiden Sie Folgeschäden."
      }
    ],
    checklist: [
      "Netzstecker ziehen",
      "Wasser sicher auffangen",
      "Flusensieb vorsichtig prüfen",
      "Ablaufschlauch auf Knick prüfen",
      "Fehlercode notieren"
    ]
  },
  {
    slug: "geschirrspueler-reinigt-nicht-richtig",
    title: "Geschirrspüler reinigt nicht richtig: Das kann dahinterstecken",
    description:
      "Wenn Geschirr schmutzig bleibt, liegen die Ursachen oft bei Sprüharmen, Wasserzufuhr, Sieben oder Dosierung. Ein Überblick für schnelle Orientierung.",
    category: "Geschirrspüler",
    readingTime: "4 Min.",
    date: "2026-04-28",
    intro:
      "Ein Geschirrspüler soll Arbeit abnehmen. Bleiben Gläser milchig oder Teller schmutzig, lohnt sich eine strukturierte Prüfung.",
    sections: [
      {
        title: "Sprüharme und Siebe",
        body:
          "Verstopfte Sprüharme oder verschmutzte Siebe gehören zu den häufigsten Ursachen. Wenn Wasser nicht sauber zirkuliert, kann auch ein gutes Programm kein gutes Ergebnis liefern."
      },
      {
        title: "Reiniger, Salz und Klarspüler",
        body:
          "Falsche Dosierung oder fehlendes Salz kann die Reinigungsleistung deutlich verschlechtern. Besonders bei hartem Wasser ist die Einstellung der Wasserhärte wichtig."
      },
      {
        title: "Technische Ursachen",
        body:
          "Wenn das Gerät nicht heizt, zu wenig Wasser zieht oder ungewöhnliche Geräusche macht, kann ein technischer Defekt vorliegen. Dann ist eine Diagnose sinnvoll."
      }
    ],
    checklist: [
      "Siebe reinigen",
      "Sprüharme abnehmen und ausspülen",
      "Salz und Klarspüler prüfen",
      "Programm mit hoher Temperatur testen",
      "Fehlercode fotografieren"
    ]
  },
  {
    slug: "backofen-heizt-nicht-mehr",
    title: "Backofen heizt nicht mehr: Mögliche Ursachen",
    description:
      "Der Backofen bleibt kalt oder erreicht die Temperatur nicht? Lesen Sie, welche Bauteile betroffen sein können und wann Vorsicht geboten ist.",
    category: "Backofen & Herd",
    readingTime: "3 Min.",
    date: "2026-04-28",
    intro:
      "Wenn der Backofen nicht mehr heizt, betrifft das Komfort und Sicherheit. Gerade bei Elektrogeräten sollte nicht improvisiert werden.",
    sections: [
      {
        title: "Heizkörper und Temperaturfühler",
        body:
          "Defekte Ober-/Unterhitze, Umluft-Heizkörper oder Temperaturfühler können dazu führen, dass der Backofen kalt bleibt oder die Temperatur stark schwankt."
      },
      {
        title: "Bedienung und Elektronik",
        body:
          "Manchmal liegt das Problem an Schaltern, Relais oder der Steuerung. Wenn Anzeigen funktionieren, aber keine Wärme entsteht, ist eine Messung notwendig."
      },
      {
        title: "Sicherheit zuerst",
        body:
          "Arbeiten an Herd und Backofen sollten fachgerecht erfolgen. Bei Geruch, Funken, ausgelöster Sicherung oder sichtbaren Schäden bitte nicht weiter testen."
      }
    ],
    checklist: [
      "Sicherung prüfen",
      "Betriebsart wechseln",
      "Temperaturverhalten beobachten",
      "Fehlerbild notieren",
      "Keine Bauteile selbst öffnen"
    ]
  },
  {
    slug: "kuehlschrank-kuehlt-nicht",
    title: "Kühlschrank kühlt nicht richtig: Was jetzt wichtig ist",
    description:
      "Wenn der Kühlschrank zu warm wird, zählt schnelle Einschätzung. Ursachen, Sofortmaßnahmen und Hinweise zur Reparaturentscheidung.",
    category: "Kühlen",
    readingTime: "4 Min.",
    date: "2026-04-28",
    intro:
      "Ein zu warmer Kühlschrank kann Lebensmittel verderben. Deshalb sollte die Ursache schnell eingegrenzt und das Risiko richtig bewertet werden.",
    sections: [
      {
        title: "Temperatur und Luftzirkulation",
        body:
          "Überfüllung, blockierte Luftkanäle oder falsch eingestellte Temperaturen können die Kühlleistung beeinflussen. Auch warme Speisen belasten das Gerät."
      },
      {
        title: "Dichtungen und Vereisung",
        body:
          "Undichte Türdichtungen oder starke Vereisung führen dazu, dass der Kühlschrank dauerhaft arbeitet und trotzdem nicht richtig kühlt."
      },
      {
        title: "Kompressor und Kältekreislauf",
        body:
          "Wenn der Kompressor nicht startet, sehr heiß wird oder dauerhaft läuft, kann ein technisches Problem vorliegen. Hier ist eine fachliche Einschätzung wichtig."
      }
    ],
    checklist: [
      "Temperatur messen",
      "Türdichtung prüfen",
      "Lüftung freihalten",
      "Vereisung dokumentieren",
      "Lebensmittel sichern"
    ]
  },
  {
    slug: "trockner-trocknet-nicht",
    title: "Trockner trocknet nicht: Filter, Sensorik oder Technik?",
    description:
      "Der Trockner läuft, aber die Wäsche bleibt feucht? Ursachen reichen von Filtern bis Sensorik. So grenzen Sie das Problem ein.",
    category: "Trockner",
    readingTime: "3 Min.",
    date: "2026-04-28",
    intro:
      "Wenn ein Trockner deutlich länger braucht oder Wäsche feucht bleibt, steigt der Energieverbrauch. Eine frühe Prüfung spart Zeit und Kosten.",
    sections: [
      {
        title: "Filter und Luftwege",
        body:
          "Verstopfte Flusenfilter, Wärmetauscher oder Luftwege sind häufige Ursachen. Der Trockner kann Wärme nicht richtig nutzen oder Feuchtigkeit nicht abführen."
      },
      {
        title: "Sensorik und Programme",
        body:
          "Feuchtigkeitssensoren können verschmutzen. Dann beendet das Gerät Programme zu früh oder erkennt den Trocknungsgrad nicht korrekt."
      },
      {
        title: "Wärmepumpe oder Heizung",
        body:
          "Wenn trotz Reinigung keine Wärme entsteht, können Heizung, Wärmepumpe oder Steuerung betroffen sein. Dann lohnt sich eine Diagnose."
      }
    ],
    checklist: [
      "Flusenfilter reinigen",
      "Wärmetauscher prüfen",
      "Beladung reduzieren",
      "Sensorflächen reinigen",
      "Programmverhalten notieren"
    ]
  },
  {
    slug: "reparatur-oder-neukauf",
    title: "Reparatur oder Neukauf: Wann lohnt sich eine Haushaltsgeräte-Reparatur?",
    description:
      "Nicht jede Reparatur lohnt sich, aber viele Geräte müssen nicht sofort ersetzt werden. Kriterien für eine wirtschaftliche Entscheidung.",
    category: "Ratgeber",
    readingTime: "5 Min.",
    date: "2026-04-28",
    intro:
      "Die wichtigste Frage ist oft nicht, ob man ein Gerät reparieren kann, sondern ob es wirtschaftlich sinnvoll ist. Eine ehrliche Einschätzung hilft.",
    sections: [
      {
        title: "Alter und Zustand",
        body:
          "Ein gepflegtes Gerät mit überschaubarem Defekt kann eine Reparatur wert sein. Bei sehr alten Geräten mit mehreren Problemen kann ein Austausch sinnvoller sein."
      },
      {
        title: "Ersatzteile und Aufwand",
        body:
          "Kosten entstehen nicht nur durch Arbeitszeit, sondern auch durch Ersatzteile, Anfahrt und Diagnose. Verfügbarkeit spielt eine große Rolle."
      },
      {
        title: "Sicherheit und Ausfallrisiko",
        body:
          "Bei elektrischen Problemen, Undichtigkeiten oder wiederkehrenden Fehlern sollte Sicherheit höher gewichtet werden als eine kurzfristige Ersparnis."
      }
    ],
    checklist: [
      "Alter des Geräts",
      "Anschaffungspreis",
      "Ersatzteilkosten",
      "Häufigkeit der Fehler",
      "Sicherheitszustand"
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
