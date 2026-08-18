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
};

export const garagePages: GaragePage[] = [
  {
    slug: "sektionaltor-reparatur-wien",
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
    ]
  },
  {
    slug: "schwingtor-rolltor-reparatur-wien",
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
    ]
  },
  {
    slug: "torantrieb-motor-reparatur-wien",
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
    ]
  },
  {
    slug: "federwechsel-wien",
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
    ]
  },
  {
    slug: "laufrollen-schienen-wien",
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
    ]
  },
  {
    slug: "wartung-sicherheitspruefung-wien",
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
    ]
  }
];

export function getGaragePage(slug: string) {
  return garagePages.find((page) => page.slug === slug);
}

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
