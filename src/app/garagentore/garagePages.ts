import type { HubFaqItem } from "../HubBlocks";

export type GaragePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  category: string;
  /** Teaser für Hub-Übersicht und Cross-Links. */
  short: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
  checklist: string[];
  /** Wird als FAQPage-JSON-LD und Akkordeon auf der Detailseite ausgegeben. */
  faq: HubFaqItem[];
  relatedSlugs?: string[];
};

export const garagePages: GaragePage[] = [
  {
    slug: "sektionaltor",
    title: "Sektionaltor Reparatur Wien",
    metaTitle: "Sektionaltor Reparatur Wien | MONTER Service",
    description:
      "Sektionaltor Reparatur in Wien & NÖ: klemmende Paneele, verzogene Schienen, ausgeschlagene Laufrollen und undichte Dichtungen. Markenoffen, schnell vor Ort.",
    h1: "Sektionaltor Reparatur in Wien",
    category: "Sektionaltor",
    short:
      "Klemmende Paneele, verzogene Schienen, ausgehängte Tragseile und poröse Dichtungen.",
    intro:
      "Sektionaltore laufen über mehrere gelenkig verbundene Paneele nach oben unter die Decke. Genau diese Bauweise macht sie platzsparend — und anfällig für verzogene Paneele, ausgeschlagene Laufrollen und verstellte Schienen. Wir richten aus, justieren und tauschen Verschleißteile in Wien und Niederösterreich.",
    sections: [
      {
        title: "Klemmende oder verzogene Paneele",
        body:
          "Ein Anstoßen mit dem Auto, ein verbogenes Scharnier oder ein verzogenes Paneel führt dazu, dass das Tor in der Führung hängt. Wir prüfen, ob sich das Paneel richten lässt oder ob ein Einzeltausch sinnvoll ist — bei Sektionaltoren ist das oft möglich, ohne das ganze Tor zu ersetzen."
      },
      {
        title: "Seile, Trommeln und Gleichlauf",
        body:
          "Läuft eine Seite höher als die andere, steht das Tor schief oder ist ein Tragseil ausgehängt, muss der Gleichlauf neu eingestellt werden. Ausgefranste oder gerissene Seile gehören sofort getauscht, weil das Tor sonst unkontrolliert absinken kann."
      },
      {
        title: "Dichtungen und Zugluft",
        body:
          "Poröse Bodendichtungen, harte Seitendichtungen und eingedrückte Paneeldichtungen lassen Wasser, Laub und Kälte in die Garage. Der Austausch ist unkompliziert und bringt bei beheizten oder angebauten Garagen einen spürbaren Unterschied."
      },
      {
        title: "Wann Reparatur sinnvoll ist",
        body:
          "Solange Zarge, Schienen und Federpaket in Ordnung sind, ist die Reparatur einzelner Bauteile meist deutlich wirtschaftlicher als ein neues Tor. Wir sagen offen, wenn ein Tor am Ende seiner Lebensdauer ist — statt Teile zu tauschen, die den Zustand nicht mehr retten."
      }
    ],
    checklist: [
      "Torhersteller notieren",
      "Torbreite & -höhe messen",
      "Schadstelle fotografieren",
      "Antrieb vorhanden? angeben",
      "Telefonisch Termin klären"
    ],
    faq: [
      {
        question: "Lässt sich ein einzelnes Paneel tauschen?",
        answer:
          "Bei Sektionaltoren häufig ja — das ist der große Vorteil dieser Bauart. Voraussetzung ist, dass der Hersteller das Paneel in Farbe und Sicke noch liefert. Bei älteren Toren prüfen wir die Verfügbarkeit vorab, damit klar ist, ob Einzeltausch oder Richten der sinnvollere Weg ist."
      },
      {
        question: "Mein Tor steht schief. Ist das gefährlich?",
        answer:
          "Ein schief laufendes Tor deutet auf ein ausgehängtes oder gelängtes Tragseil hin, und das ist sicherheitsrelevant: Im Extremfall kann das Torblatt unkontrolliert absinken. Bitte das Tor nicht weiter benutzen und den Antrieb entriegeln, bis es geprüft ist."
      },
      {
        question: "Was kostet eine Sektionaltor-Reparatur?",
        answer:
          "Die Anfahrt inklusive Prüfung ist ein fester Betrag, danach kommen Arbeitszeit und Teile dazu. Dichtungen, Laufrollen und Scharniere liegen im überschaubaren Rahmen, ein Paneeltausch deutlich darüber. Sie erfahren den Aufwand vor Ort, bevor wir etwas bestellen."
      }
    ],
    relatedSlugs: ["klemmt", "federwechsel", "laufrollen-schienen"]
  },
  {
    slug: "schwingtor-rolltor",
    title: "Schwingtor & Rolltor Reparatur Wien",
    metaTitle: "Schwingtor & Rolltor Reparatur Wien | MONTER Service",
    description:
      "Schwingtor und Rolltor Reparatur in Wien & NÖ: schwergängige Schwingtore, defekter Rollpanzer, Wickelwelle und Führungsschienen. Markenoffen instand gesetzt.",
    h1: "Schwingtor & Rolltor Reparatur in Wien",
    category: "Schwing- & Rolltor",
    short:
      "Hängende Schwingtore, verbogene Lamellen, Wickelwelle und Führungsschienen.",
    intro:
      "Schwingtore kippen als eine Fläche nach außen, Rolltore wickeln sich auf eine Welle über der Öffnung. Beide Bauarten sind in Wien weit verbreitet — vor allem in Altbau- und Hofgaragen. Wir bringen schwergängige, hängende oder blockierte Tore wieder in einen sauberen und sicheren Lauf.",
    sections: [
      {
        title: "Schwingtor hängt oder schleift",
        body:
          "Wenn ein Schwingtor beim Öffnen schleift, in der Endlage hängen bleibt oder von selbst zufällt, sind meist Federspannung, Hebelarme oder die Lagerung ausgeschlagen. Wir stellen die Federn passend zum Torgewicht nach und ersetzen verschlissene Lager und Gleitstücke."
      },
      {
        title: "Rollpanzer und Wickelwelle",
        body:
          "Verbogene Lamellen, gerissene Federzüge in der Welle oder ein aus der Führung gesprungener Rollpanzer blockieren das Tor oft komplett. Wir richten Lamellen, tauschen einzelne Profile und setzen den Panzer sauber in die Führung zurück."
      },
      {
        title: "Führungsschienen und Endlagen",
        body:
          "Verschmutzte oder eingedrückte Führungen erzeugen lautes Rattern und erhöhen den Verschleiß am Motor. Nach dem Ausrichten der Schienen stellen wir Endlagen und Kraftbegrenzung neu ein, damit das Tor auf beiden Wegen zuverlässig stoppt."
      },
      {
        title: "Altbau und Sondermaße",
        body:
          "Bei älteren Toren in Wiener Innenhöfen sind Originalteile oft nicht mehr lieferbar. Wir arbeiten dann mit passenden Alternativbauteilen oder gefertigten Ersatzteilen — das hält bestehende Tore oft viele Jahre länger im Betrieb."
      }
    ],
    checklist: [
      "Torart nennen (Schwing- oder Rolltor)",
      "Baujahr schätzen",
      "Blockade beschreiben",
      "Fotos von innen und außen",
      "Telefonisch abklären"
    ],
    faq: [
      {
        question: "Mein Schwingtor fällt von selbst zu — was ist die Ursache?",
        answer:
          "Dann trägt die Federspannung das Torgewicht nicht mehr: Zugfedern sind gelängt, ausgehängt oder gebrochen. Das ist ein Sicherheitsthema, weil das Torblatt beim Zufallen erhebliche Kräfte entwickelt. Bitte das Tor bis zur Reparatur nicht mehr benutzen."
      },
      {
        question: "Der Rollpanzer ist aus der Führung gesprungen. Selbst einhängen?",
        answer:
          "Bitte nicht. Beim Einsetzen steht der Panzer unter Spannung der Federzüge in der Wickelwelle, und eine falsche Wicklungsrichtung beschädigt Lamellen und Welle. Wir setzen den Panzer zurück und prüfen dabei gleich Führungen und Federzüge."
      },
      {
        question: "Bekommt man für alte Tore in Innenhöfen noch Ersatzteile?",
        answer:
          "Originalteile oft nicht mehr, passende Alternativbauteile in der Regel schon. Wir arbeiten mit Standardprofilen, angepassten Lagern und gefertigten Ersatzteilen — damit halten bestehende Tore häufig noch viele Jahre, ohne dass die ganze Anlage getauscht werden muss."
      }
    ],
    relatedSlugs: ["klemmt", "federwechsel", "oeffnet-nicht"]
  },
  {
    slug: "torantrieb-motor",
    title: "Garagentorantrieb & Motor Reparatur Wien",
    metaTitle: "Garagentorantrieb & Motor Reparatur Wien | MONTER",
    description:
      "Garagentorantrieb Reparatur in Wien & NÖ: Motor reagiert nicht, Tor bleibt stehen oder reversiert. Steuerplatine, Endlagen, Lichtschranke und Handsender geprüft.",
    h1: "Torantrieb & Motor Reparatur in Wien",
    category: "Torantrieb & Motor",
    short:
      "Antrieb ohne Reaktion, Tor bleibt stehen oder reversiert — Steuerung, Endlagen, Funk.",
    intro:
      "Ein Antrieb, der nicht reagiert, ist selten gleich ein Motorschaden. Häufig stecken Endlagen, Lichtschranke, Steuerplatine oder Handsender hinter dem Problem. Wir grenzen die Ursache gezielt ein und tauschen nur, was wirklich defekt ist — für Hörmann, Sommer, Marantec, Novoferm, Chamberlain und weitere Systeme.",
    sections: [
      {
        title: "Antrieb reagiert nicht",
        body:
          "Zuerst prüfen wir Stromversorgung, Sicherung, Notentriegelung und Handsender-Codierung. Erst danach geht es an Steuerplatine, Kondensator und Motorwicklung. Diese Reihenfolge verhindert, dass ein intakter Motor unnötig getauscht wird."
      },
      {
        title: "Tor bleibt stehen oder reversiert",
        body:
          "Stoppt das Tor auf halbem Weg oder fährt es wieder auf, greift meist die Kraftbegrenzung — ausgelöst durch schwergängige Mechanik, ein defektes Federpaket oder eine verschmutzte Lichtschranke. Wir beheben die mechanische Ursache und stellen die Kraft danach korrekt ein."
      },
      {
        title: "Handsender, Empfänger und Sicherheit",
        body:
          "Reichweitenprobleme, verlorene Handsender oder ein defekter Funkempfänger lassen sich meist ohne Antriebstausch lösen. Bei älteren Anlagen prüfen wir zusätzlich, ob Lichtschranke und Krafterkennung dem heutigen Sicherheitsstand entsprechen."
      },
      {
        title: "Reparatur oder neuer Antrieb",
        body:
          "Bei Antrieben über etwa 15 Jahren sind Platinen und Funkteile oft nicht mehr lieferbar. Dann ist ein Neuantrieb wirtschaftlich sinnvoller als die Teilesuche. Wir nennen beide Wege mit Aufwand und Kosten, bevor etwas bestellt wird."
      }
    ],
    checklist: [
      "Antriebsmarke & Modell notieren",
      "Verhalten beschreiben (Klick, Brummen, nichts)",
      "Handsender-LED prüfen",
      "Lichtschranke ansehen",
      "Telefonisch abklären"
    ],
    faq: [
      {
        question: "Der Antrieb brummt, das Tor bewegt sich nicht. Motorschaden?",
        answer:
          "Meist nicht. Brummen ohne Bewegung deutet häufig auf den Anlaufkondensator, ein blockiertes Getriebe oder eine schwergängige Mechanik hin. Wir prüfen in dieser Reihenfolge, weil ein Kondensator ein Bruchteil eines neuen Antriebs kostet."
      },
      {
        question: "Warum fährt mein Tor kurz vor Schluss wieder auf?",
        answer:
          "Das ist die Kraftbegrenzung, und sie arbeitet richtig: Sie erkennt einen Widerstand. Ursache ist meist schwergängige Mechanik, ein nachlassendes Federpaket, eine verschmutzte Lichtschranke oder eine verstellte Endlage. Wir beheben die Ursache und stellen die Kraft danach korrekt ein."
      },
      {
        question: "Muss bei einem alten Antrieb gleich alles neu?",
        answer:
          "Nicht zwangsläufig. Handsender, Empfänger, Lichtschranke und Kondensator sind meist einzeln lieferbar. Erst wenn Steuerplatine oder Funkteile nicht mehr verfügbar sind — bei Anlagen ab etwa 15 Jahren häufig der Fall — ist ein neuer Antrieb wirtschaftlich sinnvoller. Wir nennen beide Wege mit Kosten."
      }
    ],
    relatedSlugs: ["fehlercodes", "oeffnet-nicht", "federwechsel"]
  },
  {
    slug: "federwechsel",
    title: "Garagentor Federbruch & Federwechsel Wien",
    metaTitle: "Garagentor Federbruch & Federwechsel Wien | MONTER",
    description:
      "Federbruch am Garagentor in Wien & NÖ: Torsions- und Zugfedern passgenau auf Torgewicht getauscht. Gebrochene Federn stehen unter Spannung — bitte nicht selbst tauschen.",
    h1: "Federbruch & Federwechsel in Wien",
    category: "Federn & Federbruch",
    short:
      "Gebrochene Torsions- und Zugfedern, passgenau auf Torgewicht und Torhöhe berechnet.",
    intro:
      "Ein lauter Knall in der Garage und ein Tor, das sich plötzlich kaum noch heben lässt: Das ist das typische Bild eines Federbruchs. Die Federn tragen fast das gesamte Torgewicht — deshalb ist ein Tausch Arbeit für Fachleute mit passendem Werkzeug. Wir kommen in Wien und Niederösterreich kurzfristig vor Ort.",
    sections: [
      {
        title: "Federbruch sicher erkennen",
        body:
          "Sichtbar getrennte Windungen an der Torsionsfeder, ein Tor, das der Antrieb nicht mehr hebt, oder ein Tor, das von selbst zufällt, sind klare Anzeichen. Bitte das Tor dann nicht weiter benutzen und den Antrieb nicht mehr belasten — er ist für das volle Torgewicht nicht ausgelegt."
      },
      {
        title: "Warum kein Selbstversuch",
        body:
          "Torsionsfedern sind auch im gebrochenen Zustand unter hoher Spannung. Ohne Spannstäbe und ohne Sicherung des Torblatts drohen schwere Verletzungen. Das gilt genauso für Zugfedern an Schwingtoren, die beim Aushängen unkontrolliert zurückschnellen können."
      },
      {
        title: "Passgenauer Tausch statt Standardfeder",
        body:
          "Federn werden auf Torgewicht, Torhöhe, Windungsrichtung und Drahtstärke berechnet. Eine zu schwache Feder überlastet den Antrieb, eine zu starke lässt das Tor aufreißen. Wir ermitteln die Werte am Tor und setzen passende Federn ein."
      },
      {
        title: "Immer beide Federn tauschen",
        body:
          "Bricht eine Feder, hat die zweite dieselbe Belastungsgeschichte hinter sich. Wir empfehlen den Tausch im Paar — das verhindert einen zweiten Ausfall wenige Monate später und hält den Gleichlauf des Tores erhalten."
      }
    ],
    checklist: [
      "Tor nicht mehr benutzen",
      "Antrieb entriegeln",
      "Bruchstelle fotografieren",
      "Torgewicht/-größe schätzen",
      "Sofort anrufen"
    ],
    faq: [
      {
        question: "Kann ich das Tor bis zur Reparatur noch von Hand öffnen?",
        answer:
          "Nur mit Vorsicht und möglichst zu zweit. Ohne funktionierende Feder trägt niemand mehr das Torgewicht — das Torblatt kann beim Absinken erhebliche Kraft entwickeln. Am besten lassen Sie das Tor geschlossen und den Antrieb entriegelt, bis die Feder getauscht ist."
      },
      {
        question: "Warum sollen beide Federn getauscht werden?",
        answer:
          "Weil beide dieselbe Belastungsgeschichte haben. Federn werden nach Lastwechseln bemessen; bricht die erste, ist die zweite statistisch am Ende ihrer Lebensdauer. Ein Paartausch verhindert einen zweiten Ausfall wenige Monate später und erhält den Gleichlauf des Tores."
      },
      {
        question: "Wie schnell können Sie bei einem Federbruch kommen?",
        answer:
          "Federbrüche behandeln wir vorrangig, weil das Tor bis dahin nicht sicher nutzbar ist — häufig am selben oder nächsten Werktag. Hilfreich für die Vorbereitung sind Torbreite, Torhöhe, Torart und ein Foto der Bruchstelle mitsamt Federaufnahme."
      }
    ],
    relatedSlugs: ["oeffnet-nicht", "sektionaltor", "schwingtor-rolltor"]
  },
  {
    slug: "laufrollen-schienen",
    title: "Garagentor Laufrollen & Schienen Wien",
    metaTitle: "Garagentor Laufrollen & Schienen Reparatur Wien | MONTER",
    description:
      "Laufrollen und Schienen am Garagentor in Wien & NÖ: ausgeschlagene Rollen, trockene Lager und verstellte Laufschienen — für leisen, gleichmäßigen Torlauf.",
    h1: "Laufrollen & Schienen in Wien",
    category: "Laufrollen & Schienen",
    short:
      "Ausgeschlagene Rollen, trockene Lager und verstellte Führungen — für leisen Lauf.",
    intro:
      "Lautes Rumpeln, Ruckeln oder ein Tor, das in der Führung verkantet, kommt fast immer von der Laufgarnitur: ausgeschlagene Rollen, trockene Lager oder verstellte Schienen. Der Tausch ist überschaubar — und schont Antrieb und Federn spürbar.",
    sections: [
      {
        title: "Ausgeschlagene Laufrollen",
        body:
          "Rollen mit Flachstellen, ausgelaufenen Kugellagern oder abgenutztem Kunststoffbelag erzeugen Lärm und lassen das Tor schwanken. Wir tauschen die komplette Garnitur, weil einzelne neue Rollen zwischen alten schnell wieder ungleichmäßig laufen."
      },
      {
        title: "Verstellte oder verbeulte Schienen",
        body:
          "Ein Anstoßen, gelockerte Konsolen oder Setzungen im Mauerwerk verschieben die Laufschienen. Wir messen die Führung neu aus, richten sie zueinander aus und befestigen die Konsolen wieder sicher — sonst bleibt jede neue Rolle nur eine kurze Lösung."
      },
      {
        title: "Schmierung und Wartung",
        body:
          "Trockene Lager und Scharniere sind die häufigste Ursache für plötzlich laute Tore. Wichtig ist das richtige Mittel: Laufschienen werden gereinigt, nicht gefettet, während Rollenlager und Scharniere gezielt geschmiert werden."
      },
      {
        title: "Warum sich der Tausch früh lohnt",
        body:
          "Schwergängige Mechanik lässt den Antrieb dauerhaft gegen Widerstand arbeiten und belastet die Federn zusätzlich. Ein Satz Laufrollen kostet einen Bruchteil eines Antriebs — deshalb ist ein früher Tausch oft die günstigste Reparatur am Tor."
      }
    ],
    checklist: [
      "Geräusch beschreiben",
      "Torhersteller notieren",
      "Rollen fotografieren",
      "Seit wann laut? angeben",
      "Termin anfragen"
    ],
    faq: [
      {
        question: "Mein Tor ist plötzlich sehr laut. Muss ich schmieren?",
        answer:
          "Gezielt ja, aber mit dem richtigen Mittel und an der richtigen Stelle: Rollenlager, Scharniere und Federwellenlager werden geschmiert, die Laufschienen dagegen nur gereinigt. Fett in der Schiene bindet Staub und verschlimmert das Problem mittelfristig."
      },
      {
        question: "Warum tauschen Sie alle Laufrollen statt nur der defekten?",
        answer:
          "Weil eine neue Rolle zwischen abgenutzten wieder ungleichmäßig läuft und das Tor dadurch weiter schwankt. Ein kompletter Satz kostet wenig, hält den Lauf gleichmäßig und schont Antrieb und Federn deutlich länger."
      },
      {
        question: "Was passiert, wenn ich das aufschiebe?",
        answer:
          "Schwergängige Mechanik lässt den Antrieb dauerhaft gegen Widerstand arbeiten und belastet zusätzlich die Federn. Aus einem Satz Laufrollen wird dann schnell ein Antriebs- oder Federschaden — deshalb ist der frühe Tausch fast immer die günstigste Variante."
      }
    ],
    relatedSlugs: ["klemmt", "sektionaltor", "torantrieb-motor"]
  },
  {
    slug: "wartung-sicherheitspruefung",
    title: "Garagentor Wartung & Sicherheitsprüfung Wien",
    metaTitle: "Garagentor Wartung & Sicherheitsprüfung Wien | MONTER",
    description:
      "Garagentor Wartung in Wien & NÖ: Federn, Seile, Rollen, Antrieb, Kraftbegrenzung und Lichtschranke geprüft und dokumentiert. Für Privat, Hausverwaltung und Gewerbe.",
    h1: "Wartung & Sicherheitsprüfung in Wien",
    category: "Wartung & Sicherheitsprüfung",
    short:
      "Jährliche Prüfung von Federn, Seilen, Kraftbegrenzung und Lichtschranke, dokumentiert.",
    intro:
      "Ein Garagentor bewegt bei jedem Öffnen mehrere hundert Kilogramm. Eine jährliche Wartung hält Federn, Seile und Sicherheitsfunktionen zuverlässig — und verhindert, dass aus einem Verschleißteil ein Ausfall mit Folgeschaden wird. Für Privathaushalte, Hausverwaltungen und gewerbliche Anlagen in Wien und Niederösterreich.",
    sections: [
      {
        title: "Was wir bei der Wartung prüfen",
        body:
          "Federpaket und Federspannung, Tragseile und Seiltrommeln, Laufrollen, Scharniere und Lager, Schienenausrichtung, Verschraubungen, Antrieb mit Endlagen und Kraftbegrenzung, Lichtschranke, Notentriegelung sowie Dichtungen und Torblatt."
      },
      {
        title: "Sicherheitsfunktionen im Detail",
        body:
          "Kraftbegrenzung und Lichtschranke müssen ein Tor zuverlässig stoppen, bevor Personen oder Fahrzeuge eingeklemmt werden. Wir testen die Abschaltung mit einer Prüflast und stellen sie nach, wenn die Werte nicht mehr passen."
      },
      {
        title: "Pflicht bei gewerblichen Toren",
        body:
          "Kraftbetätigte Tore im gewerblichen Umfeld unterliegen einer regelmäßigen Prüfpflicht durch eine sachkundige Person. Wir dokumentieren die Prüfung nachvollziehbar, sodass Hausverwaltung oder Betrieb einen belastbaren Nachweis in der Hand hat."
      },
      {
        title: "Sinnvolle Intervalle",
        body:
          "Für private Garagen reicht in der Regel eine jährliche Wartung. Bei Mehrparteienhäusern, Sammelgaragen oder Betrieben mit vielen Torfahrten pro Tag empfehlen wir halbjährliche Kontrollen — dort ist der Verschleiß entsprechend höher."
      }
    ],
    checklist: [
      "Anzahl der Tore angeben",
      "Letzte Wartung notieren",
      "Nutzung beschreiben (privat/gewerblich)",
      "Antriebsmarke bereithalten",
      "Wartungstermin anfragen"
    ],
    faq: [
      {
        question: "Ist die Wartung eines Garagentors vorgeschrieben?",
        answer:
          "Für kraftbetätigte Tore im gewerblichen Umfeld und in Mehrparteienhäusern gilt eine regelmäßige Prüfung durch eine sachkundige Person. Bei privaten Garagen ist sie nicht vorgeschrieben, aber sinnvoll — der Großteil der Ausfälle, die wir sehen, hat eine erkennbare Vorgeschichte."
      },
      {
        question: "Was bekomme ich nach der Prüfung in die Hand?",
        answer:
          "Eine nachvollziehbare Dokumentation der geprüften Punkte mit Befund und durchgeführten Einstellungen. Für Hausverwaltungen und Betriebe ist das der Nachweis, dass die Sicherheitsfunktionen geprüft wurden; auffällige Verschleißpunkte vermerken wir mit einer Empfehlung."
      },
      {
        question: "Wie oft ist eine Wartung sinnvoll?",
        answer:
          "Bei privater Nutzung jährlich. Bei Sammelgaragen, Mehrparteienhäusern und Betrieben mit vielen Torfahrten pro Tag empfehlen wir halbjährlich, weil dort Federn, Seile und Laufrollen entsprechend schneller verschleißen."
      }
    ],
    relatedSlugs: ["federwechsel", "laufrollen-schienen", "torantrieb-motor"]
  }
];

export const garageProblemPages: GaragePage[] = [
  {
    slug: "oeffnet-nicht",
    title: "Garagentor öffnet nicht Wien",
    metaTitle: "Garagentor öffnet nicht in Wien | MONTER",
    description:
      "Garagentor öffnet nicht in Wien: Handsender, Lichtschranke, Feder oder Motor. Wir prüfen in dieser Reihenfolge, markenoffen in Wien und näherem NÖ.",
    h1: "Garagentor öffnet nicht in Wien",
    category: "Öffnet nicht",
    short: "Still, ein Summen, oder auch von Hand nicht zu heben.",
    intro:
      "Ein Antrieb ohne Reaktion ist selten der Motor. Strom, Handsender, Endlage und Lichtschranke kommen vor Platine und Kondensator. Hebt sich das Tor auch von Hand nicht, trägt die Feder das Gewicht nicht mehr. Wir prüfen das in Wien und im näheren Niederösterreich, markenoffen.",
    sections: [
      {
        title: "Zuerst nicht der Motor",
        body:
          "Kein Summen, kein Licht, Handsender ohne Reaktion: oft Strom, Sicherung oder eine Funkstörung. Summt der Antrieb und bewegt sich nichts, sitzt die Ursache häufiger am Anlaufkondensator, im Getriebe oder an einer schwergängigen Mechanik. Die Platine tauschen wir, wenn sie die Ursache ist. Bei Antrieben ab etwa 15 Jahren sind Platinen und Funkteile oft nicht mehr lieferbar; dann ist ein neuer Antrieb die wirtschaftliche Lösung."
      },
      {
        title: "Die Feder hebt das Tor",
        body:
          "Ein lauter Knall und ein Tor, das plötzlich bleischwer ist, sind der Federbruch. Torsionsfedern stehen auch gebrochen unter Spannung. Bitte nicht selbst nachspannen und das Tor nicht weiter mit dem Antrieb fahren lassen. Der Antrieb ist nicht für das volle Torgewicht gebaut. Ohne funktionierende Feder das Tor geschlossen und den Antrieb entriegelt lassen."
      },
      {
        title: "Handsender und Funk",
        body:
          "Zuerst die Batterie, dann ob der Handsender noch eingelernt ist. Nach einem Stromausfall oder einem Tausch der Steuerung muss er oft neu angelernt werden. Reichweite und ein defekter Empfänger lassen sich meist ohne Antriebstausch lösen. Wir lesen den Fehlerspeicher aus, soweit die Steuerung das hergibt."
      },
      {
        title: "Was wir vorher wissen wollen",
        body:
          "Torart, Hersteller von Tor und Antrieb, ob es summt oder still bleibt, und ob sich das Tor von Hand entriegeln und heben lässt. Ein Foto der Typenschilder reicht. Häufige Marken wie Hörmann, Sommer, Marantec, Novoferm und Chamberlain sind Alltag. Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird."
      }
    ],
    checklist: [
      "Torart und Antrieb",
      "Summt er oder bleibt er still?",
      "Geht die Notentriegelung?",
      "Foto der Typenschilder"
    ],
    faq: [
      {
        question: "Reagiert der Antrieb nicht, ist dann der Motor kaputt?",
        answer:
          "Meist nicht. In vielen Fällen liegt die Ursache bei Handsender, Funkempfänger, Endlagen, Lichtschranke oder Steuerplatine. Wir prüfen in dieser Reihenfolge, damit kein intakter Motor unnötig getauscht wird."
      },
      {
        question: "Der Antrieb brummt, das Tor bewegt sich nicht. Ist das der Motor?",
        answer:
          "Meist nicht. Brummen ohne Bewegung deutet häufig auf den Anlaufkondensator, ein blockiertes Getriebe oder eine schwergängige Mechanik hin. Wir prüfen in dieser Reihenfolge, weil ein Kondensator der kleinere Eingriff ist."
      },
      {
        question: "Das Tor ist auch von Hand bleischwer. Ist das die Feder?",
        answer:
          "Ja, das ist das typische Bild eines Federbruchs. Torsionsfedern stehen auch gebrochen unter Spannung. Bitte nicht selbst tauschen, das Tor nicht weiter benutzen und den Antrieb nicht gegen das volle Torgewicht arbeiten lassen."
      }
    ],
    relatedSlugs: ["torantrieb-motor", "federwechsel", "sektionaltor"]
  },
  {
    slug: "schliesst-nicht",
    title: "Garagentor schließt nicht Wien",
    metaTitle: "Garagentor schließt nicht in Wien | MONTER",
    description:
      "Garagentor schließt nicht in Wien: Es fährt wieder auf, die Lichtschranke oder die Kraftbegrenzung greift. Markenoffen in Wien und näherem NÖ.",
    h1: "Garagentor schließt nicht in Wien",
    category: "Schließt nicht",
    short: "Kurz vor dem Boden fährt es wieder auf.",
    intro:
      "Fährt das Tor kurz vor dem Boden wieder auf, arbeitet meist die Kraftbegrenzung. Sie soll das. Schwergängige Mechanik, eine Feder, eine verschmutzte Lichtschranke oder eine falsch gesetzte Endlage sind die häufigen Gründe. Wir prüfen das in Wien und im näheren Niederösterreich.",
    sections: [
      {
        title: "Fährt wieder auf",
        body:
          "Die Kraftbegrenzung stoppt und fährt zurück, wenn das Tor zu viel Widerstand meldet. Das ist die Schutzfunktion, nicht ein defekter Motor. Ursache ist oft eine schwergängige Mechanik, eine Feder, die das Gewicht nicht mehr trägt, eine verschmutzte Lichtschranke oder eine falsch gesetzte Endlage. Wir beheben die Ursache und stellen die Kraft danach ein."
      },
      {
        title: "Lichtschranke",
        body:
          "Die Lichtschranke sitzt im Schließweg. Staub, ein verschobener Sender oder ein Hindernis halten das Tor offen. Wir prüfen, ob sie frei ist und ob sie dem Sicherheitsstand der Anlage entspricht, bevor eine Platine getauscht wird."
      },
      {
        title: "Feder und Laufwerk",
        body:
          "Trägt die Feder das Gewicht nicht mehr, wird der Schließweg schwer und die Kraftbegrenzung greift früher. Dieselbe Folge haben ausgeschlagene Laufrollen und verschmutzte Schienen. Schienen werden gereinigt, nicht gefettet, weil Fett den Staub bindet. Rollenlager, Scharniere und Federwellenlager werden geschmiert."
      },
      {
        title: "Endlage",
        body:
          "Eine falsch gesetzte Endlage lässt das Tor zu früh stoppen oder zu weit in den Anschlag fahren. Wir stellen sie nach der Prüfung von Feder und Laufwerk neu ein, nicht davor. Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird."
      }
    ],
    checklist: [
      "Wo stoppt das Tor?",
      "Lichtschranke frei?",
      "Fährt es von allein zurück?",
      "Torart und Antrieb"
    ],
    faq: [
      {
        question: "Warum fährt das Tor kurz vor Schluss wieder auf?",
        answer:
          "Das ist die Kraftbegrenzung, und sie arbeitet richtig: Sie erkennt einen Widerstand. Ursache ist meist schwergängige Mechanik, ein nachlassendes Federpaket, eine verschmutzte Lichtschranke oder eine verstellte Endlage. Wir beheben die Ursache und stellen die Kraft danach korrekt ein."
      },
      {
        question: "Soll ich die Kraftbegrenzung höher stellen?",
        answer:
          "Bitte nicht. Höher stellen überfährt die Ursache und schwächt den Schutz vor Quetschen. Wir suchen zuerst, was schwer geht, und stellen die Kraft danach ein."
      },
      {
        question: "Die Lichtschranke ist frei und das Tor fährt trotzdem zurück. Was dann?",
        answer:
          "Dann liegt der Widerstand meist in der Mechanik, an der Feder oder an der Endlage. Eine freie Lichtschranke schließt diese drei Punkte nicht aus. Wir prüfen sie, bevor eine Steuerung getauscht wird."
      }
    ],
    relatedSlugs: ["fehlercodes", "torantrieb-motor", "federwechsel"]
  },
  {
    slug: "klemmt",
    title: "Garagentor klemmt Wien",
    metaTitle: "Garagentor klemmt in Wien | MONTER",
    description:
      "Garagentor klemmt in Wien: Schleifen, Ruckeln und eine verkantete Führung. Laufrollen, Schienen und Paneele, markenoffen in Wien und näherem NÖ.",
    h1: "Garagentor klemmt in Wien",
    category: "Klemmt",
    short: "Schleift, ruckelt oder hängt in der Führung.",
    intro:
      "Schleifen, Ruckeln und ein Tor, das in der Führung hängt, kommen von Laufrollen, Schienen oder einem Paneel. Der Antrieb ist dann oft nur laut, weil er gegen den Widerstand arbeitet. Wir prüfen das in Wien und im näheren Niederösterreich.",
    sections: [
      {
        title: "In der Führung",
        body:
          "Ausgeschlagene Rollen und verbogene oder verschmutzte Schienen lassen das Tor schleifen. Wir tauschen den ganzen Satz Rollen, nicht eine einzelne, weil die restlichen sonst ungleich tragen. Schienen werden gereinigt, nicht gefettet. Fett in der Schiene bindet Staub und macht das Tor mittelfristig schwerer."
      },
      {
        title: "Paneel und Seil",
        body:
          "Ein einzelnes Paneel lässt sich oft tauschen, wenn es in Farbe und Sicke noch gefertigt wird. Steht das Tor schief, sind Seil oder Sicherheit betroffen: Im Extremfall kann das Torblatt unkontrolliert absinken. Bitte nicht weiterfahren und den Antrieb entriegeln, bis es geprüft ist."
      },
      {
        title: "Schwingtor und Rolltor",
        body:
          "Ein Schwingtor, das in den Anschlag schleift oder von selbst zufällt, hat oft Federn, die das Gewicht nicht mehr tragen. Es nicht weiter benutzen. Ein Rolltor mit aus der Führung gesprungenem Panzer nicht selbst einhängen: die Feder steht unter Spannung, die Wickelrichtung zählt."
      },
      {
        title: "Früher ist der kleinere Eingriff",
        body:
          "Neue Rollen und gereinigte Schienen sind der kleinere Eingriff. Läuft das Tor weiter gegen den Widerstand, leiden Antrieb und Federn. Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird."
      }
    ],
    checklist: [
      "Schleift es oder steht es schief?",
      "Seit wann ist es laut?",
      "Torart",
      "Foto der Schadstelle"
    ],
    faq: [
      {
        question: "Reicht es, eine einzelne Laufrolle zu tauschen?",
        answer:
          "Nein. Eine neue Rolle zwischen abgenutzten läuft wieder ungleichmäßig und das Tor schwankt weiter. Ein kompletter Satz hält den Lauf gleichmäßig und schont Antrieb und Federn."
      },
      {
        question: "Soll ich die Schienen fetten, wenn das Tor laut ist?",
        answer:
          "Nein. Rollenlager, Scharniere und Federwellenlager werden geschmiert, die Laufschienen nur gereinigt. Fett in der Schiene bindet Staub und verschlimmert das Problem."
      },
      {
        question: "Das Tor steht schief. Kann ich es noch benutzen?",
        answer:
          "Bitte nicht. Ein schief laufendes Tor deutet auf ein ausgehängtes oder gelängtes Tragseil hin. Im Extremfall kann das Torblatt unkontrolliert absinken. Antrieb entriegeln und das Tor bis zur Prüfung nicht weiter benutzen."
      }
    ],
    relatedSlugs: ["laufrollen-schienen", "sektionaltor", "schwingtor-rolltor"]
  },
  {
    slug: "fehlercodes",
    title: "Garagentor Fehlercode Wien",
    metaTitle: "Garagentor Fehlercode in Wien | MONTER",
    description:
      "Garagentor Fehlercode in Wien: Hörmann, Marantec und Sommer. Die Zahl gilt nur in einer Baureihe. Anzeige notieren, bevor der Strom aus ist.",
    h1: "Garagentor Fehlercode in Wien",
    category: "Fehlercodes",
    short: "Anzeige oder Blinkzahl notieren. Dieselbe Zahl gilt nur innerhalb einer Baureihe.",
    intro:
      "Ein Garagentor-Antrieb meldet Störungen als Ziffer, als Blinkzahl der Diagnose-LED oder als Lichtfolge der Antriebsbeleuchtung. Dieselbe Zahl bedeutet bei der nächsten Baureihe etwas anderes. Notieren Sie die Anzeige, die Marke und das Modell, bevor der Strom aus ist. Wir ordnen das in Wien und im näheren Niederösterreich zu, markenoffen.",
    sections: [
      {
        title: "Zuerst die Baureihe",
        body:
          "Hörmann SupraMatic E/P zeigt eine Ziffer im Display. Die RollMatic-Steuerung blinkt an der roten Diagnose-LED im Taster. ProMatic meldet den Zustand über die Antriebsbeleuchtung. Marantec Comfort 260, 270 und 280 zeigt eine Fehlernummer, die Taste P holt die letzte. Sommer base und base+ der Serie S3 arbeiten mit Lichtfolgen, nicht mit einer gemeinsamen Ziffernliste. Novoferm und Chamberlain haben eigene Anzeigen. Wir veröffentlichen keine zweite Liste dafür. Code und Typenschild reichen zur Einordnung."
      },
      {
        title: "Hörmann",
        body:
          "SupraMatic E/P, Anzeige im Display: 5 ist die Kraftbegrenzung, das Tor läuft schwer oder ein Hindernis liegt im Weg. 6 ist der Ruhestromkreis, offen. 7 ist die Drehzahl. Die Unterlage nennt dafür die Federspannung oder eine gebrochene Feder. Bitte nicht selbst nachspannen. 8 ist die Lichtschranke, 9 die Schließkantensicherung. RollMatic, Diagnose-LED: 2× Lichtschranke, 3× Kraftbegrenzung zu, 4× Ruhestromkreis, 5× Kraftbegrenzung auf, 6× Antriebsfehler, 7× noch nicht eingelernt, 8× Referenzfahrt nach Stromausfall oder Entriegelung, 13× Not-Akku, 14× Verbindung zur Motorplatine. Beim ProMatic blinkt die Beleuchtung nach dem Einstecken zweimal, wenn keine Tordaten vorliegen, dreimal, wenn eine Referenzfahrt auf fehlt, und viermal, wenn die Position bekannt ist."
      },
      {
        title: "Marantec Comfort 260, 270 und 280",
        body:
          "7 heißt, der Programmiermodus ist nach 120 Sekunden ohne Taste abgelaufen. 9: keine Impulse vom Drehzahlsensor, der Antrieb ist blockiert. 10, 28 und 48: das Tor läuft schwer, unregelmäßig oder ist blockiert. Bei 10 kann die eingestellte Kraft zu gering sein, bei 48 die Endlage zu. 11 ist die Laufzeitbegrenzung, 15 die Lichtschranke, 16 der Stromsensor der Abschaltung, 26 Unterspannung, 30 der Bus, 33 Überhitzung, 35 die Elektronik. 36 erwartet eine Halt-Taste, die nicht angeschlossen ist. 38 ist die Aufschubsicherung, 44 der Schlupftürkreis. Die Kraft stellen wir nicht höher, nur um die Zahl zu löschen."
      },
      {
        title: "Sommer base+ S3, und was die Anzeige nicht ersetzt",
        body:
          "Bei S 9050 bis S 9110 base und base+ unterscheidet die Beleuchtung Normalbetrieb, Anforderung, Alarm, Service und Fehler. Alarm vor der Fahrt ist oft die Lichtschranke oder eine andere Sicherheitseinrichtung. Service nennt das Wartungsintervall oder eine zu hohe Motortemperatur. Fehler nennt den Selbsttest, Hallsensor oder Getriebe, den Endschalter, die Laufzeit und den Schlupftürkontakt. Blinken alle vier Funk-LEDs etwa drei Sekunden zyklisch, ist der Speicher voll. Die Anzeige grenzt ein, die Prüfung entscheidet. Die Anfrage mit Zahl, Marke und Modell ist noch kein Auftrag."
      }
    ],
    checklist: ["Zahl oder Blinkgruppen", "Marke und Modell", "Was das Tor dabei tut", "Foto der Anzeige"],
    faq: [
      {
        question: "Bedeutet die 5 bei jedem Hörmann dasselbe?",
        answer:
          "Nein. Am Display des SupraMatic E/P ist 5 die Kraftbegrenzung. An der Diagnose-LED der RollMatic-Steuerung ist 5× die Kraftbegrenzung in Richtung auf, 3× die in Richtung zu. ProMatic meldet den Zustand über die Antriebsbeleuchtung, nicht über dieselbe Ziffer."
      },
      {
        question: "Wie sehe ich die letzte Zahl bei Marantec?",
        answer:
          "Bei Comfort 260, 270 und 280 zeigt die Steuerung die Fehlernummer im Meldungsmodus. Im Betrieb holt die Taste P die letzte Zahl. Notieren Sie sie, bevor ein Neustart die Anzeige löscht."
      },
      {
        question: "Soll ich die Kraft höher stellen, damit der Code weg ist?",
        answer:
          "Bitte nicht. Eine Kraftbegrenzung oder eine Fehlernummer für schwergängigen Lauf schützt vor Quetschen. Höher stellen überfährt die Ursache. Wir prüfen zuerst Lichtschranke, Laufwerk und Feder."
      }
    ],
    relatedSlugs: ["torantrieb-motor", "schliesst-nicht", "oeffnet-nicht"]
  }
];

export const allGaragePages: GaragePage[] = [...garageProblemPages, ...garagePages];

export function getGaragePage(slug: string) {
  return allGaragePages.find((page) => page.slug === slug);
}

export const garageProblemNavLinks = [
  { label: "Feder gebrochen", href: "/garagentore/federwechsel" },
  { label: "Öffnet nicht", href: "/garagentore/oeffnet-nicht" },
  { label: "Schließt nicht", href: "/garagentore/schliesst-nicht" },
  { label: "Klemmt", href: "/garagentore/klemmt" },
  { label: "Fehlercode", href: "/garagentore/fehlercodes" }
];

export const garageDoorNavLinks = garagePages.slice(0, 2).map((page) => ({
  label: page.category,
  href: `/garagentore/${page.slug}`
}));

export const garageRepairNavLinks = garagePages.slice(2).map((page) => ({
  label: page.category,
  href: `/garagentore/${page.slug}`
}));

export const garageHubLinks = garagePages.map((page) => ({
  label: page.category,
  href: `/garagentore/${page.slug}`,
  text: page.short
}));
