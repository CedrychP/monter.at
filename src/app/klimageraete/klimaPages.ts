export type KlimaPage = {
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

export const klimaPages: KlimaPage[] = [
  {
    slug: "split-klimaanlage-wien",
    title: "Split-Klimaanlage Reparatur Wien",
    metaTitle: "Split-Klimaanlage Reparatur Wien | MONTER Service",
    description:
      "Split-Klimaanlage Reparatur in Wien & NÖ: Kühlleistung, Entwässerung, Geräusche und Steuerung. Markenoffen, schnelle Einschätzung vor Ort.",
    h1: "Split-Klimaanlage Reparatur in Wien",
    category: "Split-Klimaanlage",
    intro:
      "Wenn die Split-Klimaanlage nicht mehr kühlt, Wasser tropft, ungewöhnliche Geräusche auftreten oder die Fernbedienung nicht reagiert, braucht es eine gezielte Diagnose. MONTER Reparatur & Service unterstützt Sie bei typischen Problemen an Innen- und Außengerät in Wien und Niederösterreich.",
    sections: [
      {
        title: "Typische Fehlerbilder",
        body:
          "Schwache Kühlleistung, Eisbildung am Innengerät, undichtes Kondenswasser, unrunder Lüfterlauf oder Fehlercodes deuten auf unterschiedliche Ursachen hin — von verschmutzten Filtern über Kältemittelverlust bis zu Elektronikfehlern."
      },
      {
        title: "Innen- und Außengerät im Blick",
        body:
          "Bei Split-Systemen hängen Kühlleistung, Entwässerung und Betriebsgeräusche von beiden Einheiten ab. Wir prüfen Lüfter, Wärmetauscher, Leitungen und Steuerung und erklären, ob Reinigung, Bauteiltausch oder Wartung sinnvoll ist."
      },
      {
        title: "Vorbereitung für den Termin",
        body:
          "Marke, Modell, Fehlerbild und Standort von Innen- und Außengerät helfen bei der Einschätzung. Bei dringenden Ausfällen in heißen Perioden ist der telefonische Kontakt der schnellste Weg."
      }
    ],
    checklist: [
      "Fehlercode notieren",
      "Filterzustand prüfen",
      "Außengerät zugänglich halten",
      "Marke & Modell bereithalten",
      "Telefonisch Termin klären"
    ]
  },
  {
    slug: "multi-split-anlage-wien",
    title: "Multi-Split-Anlage Reparatur Wien",
    metaTitle: "Multi-Split-Anlage Reparatur Wien | MONTER Service",
    description:
      "Multi-Split-Klimaanlage Reparatur in Wien: ein Außengerät, mehrere Innengeräte — Diagnose bei Kühlproblemen, Leitungsfehlern und Steuerung.",
    h1: "Multi-Split-Anlage Reparatur in Wien",
    category: "Multi-Split-Anlage",
    intro:
      "Multi-Split-Anlagen versorgen mehrere Räume über ein gemeinsames Außengerät. Wenn einzelne Innengeräte ausfallen oder die Gesamtleistung sinkt, ist eine strukturierte Fehlersuche entscheidend.",
    sections: [
      {
        title: "Einzelnes Innengerät betroffen",
        body:
          "Tropft nur in einem Raum Wasser, kühlt eine Zone nicht oder reagiert ein Innengerät nicht, kann die Ursache im jeweiligen Gerät, in der Leitung oder in der Verteilung liegen."
      },
      {
        title: "Gesamtsystem prüfen",
        body:
          "Bei Multi-Split-Systemen sind Kältemittelkreislauf, Verdichterleistung und elektronische Zuordnung der Innengeräte eng verknüpft. Wir prüfen, ob das Problem lokal oder am Außengerät liegt."
      },
      {
        title: "Wartung für gleichmäßige Leistung",
        body:
          "Regelmäßige Reinigung und Kontrolle aller Innengeräte verhindert, dass ein belastetes Gerät die Gesamtanlage ausbremst — besonders in Büros und Mehrzimmer-Wohnungen."
      }
    ],
    checklist: [
      "Betroffene Räume notieren",
      "Fehlercodes aller Geräte sammeln",
      "Außengerät freihalten",
      "Leitungsführung dokumentieren",
      "Anruf vorbereiten"
    ]
  },
  {
    slug: "monoblock-klimageraet-wien",
    title: "Monoblock-Klimagerät Reparatur Wien",
    metaTitle: "Monoblock-Klimagerät Reparatur Wien | MONTER Service",
    description:
      "Monoblock-Klimagerät Reparatur in Wien: mobile und fest installierte Geräte — Kühlleistung, Abluft, Entwässerung und Elektronik.",
    h1: "Monoblock-Klimagerät Reparatur in Wien",
    category: "Monoblock-Klimagerät",
    intro:
      "Monoblock-Geräte sind kompakt und flexibel — ob mobil oder fest installiert. Wenn die Kühlleistung nachlässt, die Abluftführung stört oder das Gerät ungewöhnlich laut wird, helfen wir bei der Einschätzung und Reparatur.",
    sections: [
      {
        title: "Abluft und Wärmeabfuhr",
        body:
          "Bei Monoblock-Geräten ist eine saubere Abluftführung entscheidend. Blockierte Schlauchführungen oder undichte Fensterabdichtungen reduzieren die Kühlleistung deutlich."
      },
      {
        title: "Entwässerung und Kondensat",
        body:
          "Stehendes Wasser im Gerät oder undichte Auffangbehälter führen schnell zu Fehlermeldungen. Wir prüfen Pumpe, Schlauch und Niveauschalter."
      },
      {
        title: "Reparatur vs. Austausch",
        body:
          "Bei älteren mobilen Geräten lohnt sich eine ehrliche Abwägung. Wir sagen Ihnen transparent, wann eine Reparatur wirtschaftlich sinnvoll ist."
      }
    ],
    checklist: [
      "Gerätetyp notieren",
      "Abluftschlauch prüfen",
      "Entwässerung kontrollieren",
      "Fehlerbild beschreiben",
      "Telefonisch abklären"
    ]
  },
  {
    slug: "wartung-service-wien",
    title: "Klimagerät Wartung Wien",
    metaTitle: "Klimagerät Wartung & Service Wien | MONTER",
    description:
      "Klimagerät Wartung in Wien & NÖ: Filter, Wärmetauscher, Dichtheit und Funktionsprüfung. Beugt Ausfällen vor und hält die Kühlleistung hoch.",
    h1: "Klimagerät Wartung & Service in Wien",
    category: "Wartung & Service",
    intro:
      "Regelmäßige Wartung hält Klimageräte effizient, leise und zuverlässig. Wir reinigen Filter und Wärmetauscher, prüfen Entwässerung, Lüfter und Sicherheitsfunktionen — für Privathaushalte und Gewerbe.",
    sections: [
      {
        title: "Was eine Wartung umfasst",
        body:
          "Sichtprüfung, Reinigung zugänglicher Komponenten, Kontrolle von Kondensatableitung, Lüfterlauf und Betriebsgeräuschen sowie Prüfung der Steuerung und Fernbedienung."
      },
      {
        title: "Warum Wartung sich lohnt",
        body:
          "Verschmutzte Filter und Wärmetauscher erhöhen Stromverbrauch und Belastung des Verdichters. Geplante Wartung verlängert die Lebensdauer und reduziert teure Notfalleinsätze."
      },
      {
        title: "Wartungsintervalle",
        body:
          "Bei regelmäßig genutzten Geräten empfehlen sich jährliche Kontrollen — bei intensiver Nutzung oder gewerblichem Betrieb häufiger. Wir passen den Rhythmus an Ihr Gerät an."
      }
    ],
    checklist: [
      "Letzte Wartung notieren",
      "Geräteanzahl angeben",
      "Zugang zu Außengerät sichern",
      "Nutzungsintensität beschreiben",
      "Termin anfragen"
    ]
  },
  {
    slug: "kaeltemittel-dichtheit-wien",
    title: "Kältemittel & Dichtheit Wien",
    metaTitle: "Kältemittel & Dichtheitsprüfung Klima Wien | MONTER",
    description:
      "Kältemittelverlust und Dichtheitsprüfung bei Klimageräten in Wien: Leckage finden, fachgerecht dichten und System wieder in Betrieb nehmen.",
    h1: "Kältemittel & Dichtheitsprüfung in Wien",
    category: "Kältemittel & Dichtheit",
    intro:
      "Sinkt die Kühlleistung langsam ab oder bildet sich Eis am Verdampfer, kann Kältemittelverlust die Ursache sein. Dichtheitsprüfung und fachgerechte Instandsetzung gehören in qualifizierte Hände.",
    sections: [
      {
        title: "Anzeichen für Kältemittelverlust",
        body:
          "Schwache Kühlung trotz sauberer Filter, Eisbildung, ungewöhnliche Geräusche am Verdichter oder häufiges Abschalten des Systems können auf undichte Stellen hinweisen."
      },
      {
        title: "Leckage finden und beheben",
        body:
          "Wir lokalisieren Leckagen an Leitungen, Flanschen und Wärmetauschern und beheben undichte Stellen, bevor das System wieder befüllt und geprüft wird."
      },
      {
        title: "Rechtliche Anforderungen",
        body:
          "Arbeiten am Kältemittelkreislauf unterliegen Vorschriften. Wir führen Dichtheitsprüfungen und Befüllungen fachgerecht durch und dokumentieren den Zustand des Systems."
      }
    ],
    checklist: [
      "Kühlleistungsverlauf beschreiben",
      "Letzte Befüllung notieren",
      "Fehlercode mitteilen",
      "Gerät nicht öffnen",
      "Telefonisch abklären"
    ]
  },
  {
    slug: "kompressor-reparatur-wien",
    title: "Kompressor Reparatur Wien",
    metaTitle: "Klimagerät Kompressor Reparatur Wien | MONTER Service",
    description:
      "Kompressor- und Verdichterreparatur bei Klimageräten in Wien: Startprobleme, Überhitzung, unrunder Lauf und Leistungsverlust.",
    h1: "Kompressor & Verdichter Reparatur in Wien",
    category: "Kompressor & Verdichter",
    intro:
      "Der Verdichter ist das Herzstück jeder Klimaanlage. Startet das Gerät nicht, läuft es heiß oder liefert es dauerhaft zu wenig Kälte, prüfen wir Motor, Kondensator, Steuerung und mechanische Belastung.",
    sections: [
      {
        title: "Startprobleme und Schutzschaltungen",
        body:
          "Wiederholtes Ein- und Ausschalten, Stromstoß beim Start oder auslöste Schutzschaltungen deuten auf elektrische oder mechanische Probleme am Verdichter hin."
      },
      {
        title: "Überhitzung und Leistungsverlust",
        body:
          "Verschmutzte Wärmetauscher, Kältemittelmangel oder defekte Lüfter belasten den Verdichter. Ohne rechtzeitige Reparatur droht ein Totalausfall."
      },
      {
        title: "Reparatur oder Austausch",
        body:
          "Nicht jeder Verdichter muss sofort ersetzt werden. Wir prüfen, ob ein Bauteiltausch oder eine Instandsetzung wirtschaftlich ist — transparent und nachvollziehbar."
      }
    ],
    checklist: [
      "Startverhalten beschreiben",
      "Geräusche notieren",
      "Fehlercode fotografieren",
      "Gerät nicht weiter belasten",
      "Anruf vorbereiten"
    ]
  },
  {
    slug: "steuerung-elektronik-wien",
    title: "Klimagerät Steuerung & Elektronik Wien",
    metaTitle: "Klimagerät Steuerung & Elektronik Reparatur Wien | MONTER",
    description:
      "Steuerung und Elektronik bei Klimageräten in Wien: Platine, Sensoren, Fernbedienung, WLAN-Modul und Fehlercodes.",
    h1: "Steuerung & Elektronik Reparatur in Wien",
    category: "Steuerung & Elektronik",
    intro:
      "Reagiert die Klimaanlage nicht auf die Fernbedienung, zeigt sie Fehlercodes oder schaltet unregelmäßig, liegt die Ursache oft in Steuerplatine, Sensoren oder Verkabelung.",
    sections: [
      {
        title: "Fernbedienung und Bedieneinheit",
        body:
          "Defekte Infrarot-Empfänger, leere Batterien oder fehlerhafte Kommunikation zwischen Innen- und Außengerät können simple Ursachen sein — wir grenzen das systematisch ein."
      },
      {
        title: "Sensoren und Regelung",
        body:
          "Temperaturfühler, Drucksensoren und Niveauschalter beeinflussen den Betrieb direkt. Fehlmessungen führen zu Abschaltungen oder ungleichmäßiger Kühlung."
      },
      {
        title: "Smart-Steuerung und Module",
        body:
          "WLAN-Module und Smart-Home-Anbindungen können nach Updates oder Stromausfällen Probleme machen. Wir prüfen Hardware und Konfiguration."
      }
    ],
    checklist: [
      "Fehlercode notieren",
      "Fernbedienung testen",
      "Stromausfall-Historie nennen",
      "Marke & Modell bereithalten",
      "Telefonisch abklären"
    ]
  },
  {
    slug: "reinigung-entlueftung-wien",
    title: "Klimagerät Reinigung & Entlüftung Wien",
    metaTitle: "Klimagerät Reinigung & Entlüftung Wien | MONTER Service",
    description:
      "Reinigung und Entlüftung von Klimageräten in Wien: Filter, Wärmetauscher, Lüfter und Kondensatableitung — für bessere Luft und Kühlleistung.",
    h1: "Reinigung & Entlüftung in Wien",
    category: "Reinigung & Entlüftung",
    intro:
      "Verschmutzte Filter und Wärmetauscher verschlechtern Luftqualität und Kühlleistung. Wir reinigen zugängliche Bauteile fachgerecht und prüfen Lüfter und Entwässerung.",
    sections: [
      {
        title: "Filter und Wärmetauscher",
        body:
          "Staub und Pollen setzen sich an Filtern und Lamellen ab. Das reduziert Luftdurchsatz, erhöht den Stromverbrauch und kann unangenehme Gerüche verursachen."
      },
      {
        title: "Lüfter und Geräusche",
        body:
          "Vibrationsgeräusche oder pfeifende Lüfter deuten auf Verschmutzung oder Lagerschäden hin. Reinigung und Justierung bringen oft spürbare Verbesserung."
      },
      {
        title: "Hygiene und Luftqualität",
        body:
          "Gerade in Schlaf- und Wohnräumen lohnt sich regelmäßige Reinigung — für angenehme Raumluft und zuverlässige Kühlleistung in der Sommersaison."
      }
    ],
    checklist: [
      "Letzte Reinigung notieren",
      "Geruch / Staub beschreiben",
      "Gerätestandort nennen",
      "Zugang sichern",
      "Termin anfragen"
    ]
  },
  {
    slug: "montage-installation-wien",
    title: "Klimagerät Montage & Installation Wien",
    metaTitle: "Klimagerät Montage & Installation Wien | MONTER Service",
    description:
      "Montage und Installation von Klimageräten in Wien & NÖ: Split-Anlagen, Leitungsführung, Aufstellung und Inbetriebnahme.",
    h1: "Montage & Installation in Wien",
    category: "Montage & Installation",
    intro:
      "Ob Neuanlage oder Ersatzgerät — eine saubere Montage entscheidet über Kühlleistung, Laufzeit und Wartbarkeit. Wir installieren Split- und Monoblock-Systeme fachgerecht in Wien und Niederösterreich.",
    sections: [
      {
        title: "Standort und Leitungsführung",
        body:
          "Innen- und Außengerät müssen optimal platziert werden: kurze Leitungswege, sichere Befestigung, saubere Durchführungen und zugängliche Wartungspunkte."
      },
      {
        title: "Inbetriebnahme und Prüfung",
        body:
          "Nach der Montage folgen Vakuumierung, Dichtheitsprüfung, Inbetriebnahme und Funktionstest — damit das System von Anfang an zuverlässig läuft."
      },
      {
        title: "Bestehende Anlagen ersetzen",
        body:
          "Beim Austausch prüfen wir, ob Leitungen, Halterungen und Stromversorgung weiterverwendet werden können — das spart Aufwand und Kosten."
      }
    ],
    checklist: [
      "Raumgröße angeben",
      "Wanddurchbrüche klären",
      "Stromanschluss prüfen",
      "Außenstellfläche sichern",
      "Beratung anfragen"
    ]
  }
];

export function getKlimaPage(slug: string) {
  return klimaPages.find((page) => page.slug === slug);
}

export const klimaDeviceNavLinks = klimaPages.slice(0, 4).map((page) => ({
  label: page.category,
  href: `/klimageraete/${page.slug}`
}));

export const klimaRepairNavLinks = klimaPages.slice(4).map((page) => ({
  label: page.category,
  href: `/klimageraete/${page.slug}`
}));
