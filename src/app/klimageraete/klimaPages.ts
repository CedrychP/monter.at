import type { HubFaqItem } from "../HubBlocks";

export type KlimaPage = {
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

export const klimaPages: KlimaPage[] = [
  {
    slug: "split-klimaanlage-wien",
    title: "Split-Klimaanlage Reparatur Wien",
    metaTitle: "Split-Klimaanlage Reparatur Wien | MONTER Service",
    description:
      "Split-Klimaanlage Reparatur in Wien & NÖ: Kühlleistung, Entwässerung, Geräusche und Steuerung. Markenoffen, schnelle Einschätzung vor Ort.",
    h1: "Split-Klimaanlage Reparatur in Wien",
    category: "Split-Klimaanlage",
    short:
      "Innen- und Außengerät: Kühlleistung, Entwässerung, Geräusche und Steuerung.",
    intro:
      "Wenn die Split-Klimaanlage nicht mehr kühlt, Wasser aus dem Innengerät tropft, ungewöhnliche Geräusche auftreten oder die Fernbedienung nicht reagiert, braucht es eine gezielte Diagnose statt eines schnellen Nachfüllens. Wir prüfen Innen- und Außengerät als System — in Wien und Niederösterreich, markenoffen von Daikin und Mitsubishi über Panasonic und LG bis zu Baumarktgeräten.",
    sections: [
      {
        title: "Kühlt schlecht — die Reihenfolge der Prüfung",
        body:
          "Nachlassende Kühlleistung hat drei typische Ursachen, und sie werden in dieser Reihenfolge geprüft: verschmutzte Luftfilter und Verdampferlamellen am Innengerät, ein zugesetzter Verflüssiger am Außengerät und erst danach Kältemittelmangel. Wer zuerst nachfüllt, behandelt in den meisten Fällen das falsche Problem. Ein verstaubtes Außengerät auf einem Wiener Innenhofbalkon verliert messbar Leistung, weil die Wärme nicht abgeführt wird — Reinigung bringt dort mehr als jeder Bauteiltausch.",
      },
      {
        title: "Wasser tropft aus dem Innengerät",
        body:
          "Kondenswasser aus dem Innengerät ist die häufigste Störungsmeldung im Sommer. Ursache ist meist die Kondensatableitung: verstopfte Ablaufwanne, verkeimter Schlauch, ein Gegengefälle in der Leitung oder eine defekte Kondensatpumpe bei Geräten, die nach oben fördern müssen. In Altbauten mit langen Leitungswegen zum Innenhof kommt Verlegung mit zu geringem Gefälle als Bauursache dazu. Ist der Verdampfer vereist, tropft es ebenfalls — dann liegt die eigentliche Ursache bei Luftmenge oder Kältemittel.",
      },
      {
        title: "Geräusche, Vibration und Nachbarschaft",
        body:
          "Brummen und Vibrieren am Außengerät gehen häufig auf gealterte Schwingungsdämpfer, lose Konsolen oder ein unwuchtiges Lüfterrad zurück. Das ist in Wien nicht nur ein Komfortthema: Bei Geräten an Fassaden, Balkonen und in Innenhöfen sind Betriebsgeräusche regelmäßig Anlass für Beschwerden. Nachziehen, entkoppeln und das Lüfterrad reinigen senkt den Schallpegel oft deutlich. Pfeifen und Klackern am Innengerät kommt meist vom Querstromlüfter oder von der Klappenmechanik.",
      },
      {
        title: "Fehlercodes und Kommunikation der Geräte",
        body:
          "Split-Anlagen melden Fehler über blinkende LEDs am Innengerät oder Codes im Display — bei Daikin etwa als zweistelliger Code über die Fernbedienung. Die Codes benennen den Bereich: Fühler, Druck, Kommunikation zwischen Innen- und Außengerät, Verdichter. Ein häufiger und günstiger Fall ist ein Kommunikationsfehler durch korrodierte Klemmen in der Außeneinheit. Notieren Sie die Blinkfolge oder den Code — damit kommen wir mit hoher Wahrscheinlichkeit mit dem passenden Teil.",
      }
    ],
    checklist: [
      "Fehlercode notieren",
      "Filterzustand prüfen",
      "Außengerät zugänglich halten",
      "Marke & Modell bereithalten",
      "Telefonisch Termin klären"
    ],
    faq: [
      {
        question: "Meine Klimaanlage kühlt schlecht — fehlt Kältemittel?",
        answer:
          "Meist nicht. Ein Kältekreis ist ein geschlossenes System und verbraucht kein Kältemittel; sinkt der Füllstand, liegt eine Undichtheit vor. Deutlich häufiger sind verschmutzte Filter, ein belegter Verdampfer und ein zugesetztes Außengerät. Wir prüfen in dieser Reihenfolge und suchen bei echtem Mangel die Leckage, statt nur nachzufüllen."
      },
      {
        question: "Warum tropft Wasser aus dem Innengerät?",
        answer:
          "Fast immer wegen der Kondensatableitung: verstopfte Ablaufwanne, verkeimter oder falsch verlegter Schlauch oder eine defekte Kondensatpumpe. Zweite Möglichkeit ist ein vereister Verdampfer, der beim Abtauen mehr Wasser abgibt, als die Wanne fasst — dann behandeln wir die Ursache der Vereisung mit."
      },
      {
        question: "Wie oft sollte eine Split-Anlage gewartet werden?",
        answer:
          "Bei normaler Nutzung im Haushalt einmal jährlich, am besten im Frühjahr vor der Saison. Bei gewerblicher Nutzung, Dauerbetrieb oder staubiger Umgebung häufiger. Die Wartung hält die Kühlleistung hoch und den Stromverbrauch niedrig — und sie deckt Undichtheiten auf, bevor der Verdichter Schaden nimmt."
      }
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
    short:
      "Mehrere Innengeräte an einem Außengerät — Einzelausfall oder Systemfehler.",
    intro:
      "Multi-Split-Anlagen versorgen mehrere Räume über ein gemeinsames Außengerät. Fällt ein Innengerät aus oder sinkt die Leistung im ganzen System, entscheidet die richtige Eingrenzung über den Aufwand: lokaler Fehler am einzelnen Gerät oder ein Problem im gemeinsamen Kältekreis. Wir betreuen solche Anlagen in Wiener Wohnungen, Büros und Ordinationen.",
    sections: [
      {
        title: "Nur ein Raum betroffen",
        body:
          "Kühlt eine Zone nicht, während die anderen normal arbeiten, liegt der Fehler in der Regel lokal: Filter und Verdampfer des Innengeräts, das zugehörige Expansionsventil, ein Fühler oder die Datenleitung zum Außengerät. Auch die Kondensatableitung ist ein Einzelthema — ein tropfendes Innengerät im Schlafzimmer sagt nichts über den Rest der Anlage aus. Wir messen die Leistung raumweise, damit klar wird, ob das Gerät oder die Versorgung schwächelt.",
      },
      {
        title: "Alle Innengeräte schwach",
        body:
          "Sinkt die Leistung überall gleichmäßig, geht es um das Gemeinsame: Verflüssiger und Lüfter am Außengerät, Verdichterleistung, Kältemittelfüllung und die Verteilung. Multi-Split-Systeme sind hier empfindlicher als Einzelanlagen, weil die Füllmenge auf die gesamte Leitungslänge abgestimmt ist. Eine Undichtheit an einer einzigen Verschraubung senkt deshalb die Leistung in allen Räumen — und lässt sich nur mit Lecksuche, nicht mit Nachfüllen dauerhaft beheben.",
      },
      {
        title: "Gleichzeitiger Betrieb und Grenzen der Anlage",
        body:
          "Ein häufiger Befund ist gar kein Defekt: Multi-Split-Anlagen sind meist so ausgelegt, dass nicht alle Innengeräte gleichzeitig mit voller Leistung laufen können. Werden in einer Hitzeperiode alle Räume zugeschaltet, verteilt die Regelung die verfügbare Leistung — subjektiv fühlt sich das wie ein Defekt an. Wir prüfen die Auslegung gegen die tatsächliche Nutzung und sagen, ob Regelung, Bauteil oder Dimensionierung die Ursache ist.",
      },
      {
        title: "Adressierung, Verkabelung und Wartung",
        body:
          "Jedes Innengerät hat im System eine eigene Adresse. Nach Stromausfällen, Modultausch oder Arbeiten an der Elektrik kommt es vor, dass Zuordnungen verloren gehen und Räume auf die falsche Fernbedienung reagieren. Das ist eine Konfigurations-, keine Bauteilfrage. Bei der Wartung reinigen wir alle Innengeräte gemeinsam, weil ein einzelnes belastetes Gerät die Regelung der ganzen Anlage aus dem Tritt bringt.",
      }
    ],
    checklist: [
      "Betroffene Räume notieren",
      "Fehlercodes aller Geräte sammeln",
      "Außengerät freihalten",
      "Leitungsführung dokumentieren",
      "Anruf vorbereiten"
    ],
    faq: [
      {
        question: "Ein Innengerät kühlt nicht, die anderen schon. Woran liegt das?",
        answer:
          "Dann ist der Fehler mit hoher Wahrscheinlichkeit lokal: Filter und Verdampfer des Geräts, das zugehörige Expansionsventil, ein Fühler oder die Datenleitung. Am gemeinsamen Kältekreis liegt es selten, weil dessen Störungen alle Räume betreffen würden."
      },
      {
        question: "Können alle Innengeräte gleichzeitig auf voller Leistung laufen?",
        answer:
          "In der Regel nicht. Multi-Split-Anlagen werden mit einem Gleichzeitigkeitsfaktor ausgelegt: Das Außengerät liefert weniger als die Summe aller Innengeräte. Bei voller Zuschaltung verteilt die Regelung die Leistung — das ist gewolltes Verhalten, kein Defekt."
      },
      {
        question: "Lässt sich ein einzelnes Innengerät später ergänzen?",
        answer:
          "Nur, wenn das Außengerät einen freien Anschluss hat und die Leistungsreserve ausreicht. Wir prüfen Typenschild, vorhandene Anschlüsse und Leitungslängen und sagen, ob eine Ergänzung sinnvoll ist oder das Außengerät dabei überlastet würde."
      }
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
    short:
      "Mobile und fest installierte Geräte: Abluft, Kondensat und Elektronik.",
    intro:
      "Monoblock-Geräte sind kompakt und flexibel — und in Wien oft die einzige Möglichkeit, wenn im denkmalgeschützten Altbau oder im Mietverhältnis kein Außengerät montiert werden darf. Wenn die Kühlleistung nachlässt, das Gerät Wasser meldet oder ungewöhnlich laut wird, prüfen wir Luftführung, Entwässerung und Elektronik.",
    sections: [
      {
        title: "Abluftführung entscheidet über die Leistung",
        body:
          "Bei Monoblock-Geräten sitzt der komplette Kältekreis im Raum; nur die Abwärme geht über den Schlauch nach draußen. Ist der Schlauch lang, geknickt oder liegt er in Schlaufen, staut sich die Wärme und die Kühlleistung bricht ein. Genauso wichtig ist die Fensterabdichtung: Eine offene Kippfensterspalte zieht warme Luft nach, die das Gerät gerade herausgeschafft hat. Wir prüfen zuerst diesen Aufbau — er ist häufiger die Ursache als ein technischer Defekt.",
      },
      {
        title: "Kondensat und Fehlermeldungen",
        body:
          "Monoblock-Geräte müssen anfallendes Kondensat entweder verdunsten oder sammeln. Stehendes Wasser, eine dauerhafte Behälter-Meldung oder ein Gerät, das nach kurzer Zeit abschaltet, deuten auf Niveauschalter, Pumpe oder einen verkeimten Ablauf hin. Bei fest installierten Geräten prüfen wir zusätzlich die Kondensatleitung nach außen, weil dort Gegengefälle und Verstopfung die typischen Ursachen sind.",
      },
      {
        title: "Geräusche, Lüfter und Verdichter",
        body:
          "Weil der Verdichter im Raum steht, wirken Monoblock-Geräte grundsätzlich lauter als Split-Anlagen. Verändert sich das Geräusch aber deutlich, prüfen wir Lüfterlager, Auflagefüße und die Verdichteraufhängung. Ein rasselndes Geräusch beim Start kommt oft von einer gelösten Halterung; ein durchgehend brummender Betrieb ohne Kühlung deutet dagegen auf einen Verdichter hin, der gegen zu hohen Druck arbeitet — meist die Folge gestauter Abluft.",
      },
      {
        title: "Reparatur oder Neugerät",
        body:
          "Bei mobilen Geräten im unteren Preissegment ist die wirtschaftliche Grenze schnell erreicht: Pumpe, Niveauschalter, Lüfter, Sensorik und Reinigung lohnen sich, ein Verdichter- oder Kältekreisschaden praktisch nie. Bei fest installierten Monoblock-Anlagen und hochwertigen Geräten sieht die Rechnung anders aus, weil Montage und Wanddurchführung erhalten bleiben. Wir sagen die Einschätzung vorab, damit keine Anfahrt für ein Gerät entsteht, dessen Reparatur sich nicht rechnet.",
      }
    ],
    checklist: [
      "Gerätetyp notieren",
      "Abluftschlauch prüfen",
      "Entwässerung kontrollieren",
      "Fehlerbild beschreiben",
      "Telefonisch abklären"
    ],
    faq: [
      {
        question: "Warum kühlt mein mobiles Klimagerät so schwach?",
        answer:
          "Meist wegen der Abluft. Ein langer, geknickter oder in Schlaufen liegender Schlauch staut die Wärme, und eine offene Fensterspalte zieht warme Luft nach. Kurzer, gerader Schlauch und eine dichte Fensterabdichtung bringen mehr als jede Reparatur — erst danach prüfen wir das Gerät selbst."
      },
      {
        question: "Das Gerät schaltet nach kurzer Zeit ab und meldet Wasser.",
        answer:
          "Dann spricht der Niveauschalter an: Behälter voll, Schwimmer verschmutzt, Pumpe blockiert oder Ablauf verstopft. Das sind günstige Reparaturen. Bei Geräten mit fester Kondensatleitung prüfen wir zusätzlich das Gefälle der Leitung nach außen."
      },
      {
        question: "Lohnt sich die Reparatur eines mobilen Klimageräts?",
        answer:
          "Bei Pumpe, Niveauschalter, Lüfter, Sensorik und Reinigung ja. Bei einem Verdichter- oder Kältekreisschaden nicht — dort liegt der Aufwand bei günstigen Geräten über dem Neupreis. Diese Einschätzung geben wir vorab am Telefon."
      }
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
    short:
      "Filter, Wärmetauscher und Funktionsprüfung — hält Leistung hoch und Verbrauch niedrig.",
    intro:
      "Regelmäßige Wartung hält Klimageräte effizient, leise und zuverlässig — und sie ist der günstigste Weg, teure Verdichterschäden zu vermeiden. Wir reinigen Filter und Wärmetauscher, prüfen Kondensatableitung, Lüfter, Elektrik und Sicherheitsfunktionen, für Privathaushalte wie für Büros, Ordinationen und Gastronomie in Wien und Niederösterreich.",
    sections: [
      {
        title: "Was eine Wartung tatsächlich umfasst",
        body:
          "Reinigung der Luftfilter und des Verdampferlamellenpakets im Innengerät, Reinigung des Verflüssigers und Lüfterrads am Außengerät, Durchspülen und Desinfizieren der Kondensatwanne und -leitung, Kontrolle von Kondensatpumpe, Schwingungsdämpfern und Befestigungen. Dazu die messtechnische Seite: Zu- und Ablufttemperatur, Stromaufnahme, Betriebsdrücke und eine Sichtprüfung aller Verschraubungen auf Ölspuren — der erste sichtbare Hinweis auf eine Undichtheit.",
      },
      {
        title: "Warum sich der Termin rechnet",
        body:
          "Ein belegtes Lamellenpaket senkt den Luftdurchsatz, und der Verdichter arbeitet gegen schlechtere Wärmeübertragung — das kostet Strom und Lebensdauer. Der teuerste Schaden an einer Klimaanlage ist der Verdichter, und die häufigste Vorgeschichte dazu sind Monate Betrieb mit zu wenig Kältemittel oder verschmutzten Wärmetauschern. Wartung ist damit weniger Kosmetik als Vorsorge gegen genau den Fall, der wirtschaftlich weh tut.",
      },
      {
        title: "Hygiene: was im Innengerät passiert",
        body:
          "Am kalten Verdampfer schlägt sich Feuchtigkeit nieder, in der Wanne steht Wasser — zusammen mit Staub ist das ein Nährboden für Bakterien und Schimmel. Riecht die Anlage beim Einschalten muffig, ist das der Befund, nicht eine Geruchsquelle im Raum. Deshalb gehören Wanne, Ablauf und Lüfterrad zu jeder Wartung. Gerade in Schlafzimmern und Ordinationen ist dieser Punkt wichtiger als die letzten Prozent Kühlleistung.",
      },
      {
        title: "Intervalle und der richtige Zeitpunkt",
        body:
          "Für Haushaltsgeräte genügt in der Regel ein Termin pro Jahr, am besten im Frühjahr vor der Saison — dann ist die Anlage geprüft, bevor die erste Hitzewelle kommt, und Termine sind besser verfügbar als im Juli. Bei gewerblichem Dauerbetrieb, staubiger Umgebung oder Küchenluft empfehlen wir zwei Termine. Für Anlagen mit mehreren Innengeräten stimmen wir feste Intervalle ab, damit die Wartung planbar bleibt.",
      }
    ],
    checklist: [
      "Letzte Wartung notieren",
      "Geräteanzahl angeben",
      "Zugang zu Außengerät sichern",
      "Nutzungsintensität beschreiben",
      "Termin anfragen"
    ],
    faq: [
      {
        question: "Wie oft muss eine Klimaanlage gewartet werden?",
        answer:
          "Im Haushalt einmal jährlich, idealerweise im Frühjahr. Bei gewerblichem Dauerbetrieb, staubiger Umgebung oder Küchenluft zweimal. Anlagen mit mehreren Innengeräten warten wir gesammelt, weil ein einzelnes belastetes Gerät die Regelung der gesamten Anlage beeinflusst."
      },
      {
        question: "Meine Anlage riecht muffig. Hilft ein Filterwechsel?",
        answer:
          "Nur teilweise. Der Geruch entsteht meist im feuchten Bereich hinter dem Filter: am Verdampfer, in der Kondensatwanne und im Ablauf. Diese Bereiche werden bei der Wartung gereinigt und desinfiziert — der Filter allein löst das Problem selten."
      },
      {
        question: "Wird bei der Wartung Kältemittel nachgefüllt?",
        answer:
          "Nicht routinemäßig. Ein Kältekreis ist geschlossen und verbraucht kein Kältemittel. Sinkt der Füllstand, liegt eine Undichtheit vor — dann suchen wir die Leckage und beheben sie, bevor befüllt wird. Nachfüllen ohne Lecksuche verschiebt das Problem nur."
      }
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
    short:
      "Leckage suchen, fachgerecht dichten und den Kältekreis wieder in Betrieb nehmen.",
    intro:
      "Sinkt die Kühlleistung langsam über Wochen oder bildet sich Eis am Verdampfer, ist Kältemittelverlust eine naheliegende Ursache. Wichtig ist dabei ein Grundsatz: Ein Kältekreis ist ein geschlossenes System und verbraucht kein Kältemittel. Fehlt etwas, gibt es eine undichte Stelle — und die gehört gefunden, nicht nur aufgefüllt.",
    sections: [
      {
        title: "Anzeichen für Kältemittelverlust",
        body:
          "Typisch ist ein schleichender Verlauf: Die Anlage kühlt über Wochen immer schwächer, obwohl Filter und Wärmetauscher sauber sind. Dazu kommen Eisbildung an Verdampfer oder Leitungsanschluss, Ölspuren an Verschraubungen im Außengerät, ein Verdichter, der ungewöhnlich häufig abschaltet, und Fehlercodes zu Druck oder Überhitzung. Ölspuren sind der verlässlichste Hinweis, weil das Schmieröl im Kreislauf mit dem Kältemittel austritt.",
      },
      {
        title: "Leckage finden statt nachfüllen",
        body:
          "Wir suchen die Undichtheit mit elektronischem Lecksuchgerät, Formiergas oder Kontrastmittel, abhängig von Anlage und Schadensbild. Die häufigsten Stellen sind Bördelverschraubungen am Innen- und Außengerät, Schweißnähte am Wärmetauscher und Ventilanschlüsse. Danach wird die Stelle instand gesetzt, das System evakuiert und mit der auf dem Typenschild angegebenen Menge neu befüllt — nicht nach Gefühl, weil Über- und Unterfüllung beide die Leistung senken und den Verdichter belasten.",
      },
      {
        title: "Rechtlicher Rahmen und Dokumentation",
        body:
          "Arbeiten am Kältekreis sind in der EU geregelt: Fluorierte Treibhausgase dürfen nur von zertifiziertem Personal gehandhabt werden, Kältemittel darf nicht in die Atmosphäre abgelassen, sondern muss abgesaugt und ordnungsgemäß entsorgt werden. Für gewerbliche Anlagen ab bestimmten Füllmengen sind zusätzlich regelmäßige Dichtheitsprüfungen und Aufzeichnungen vorgeschrieben. Wir führen die Arbeiten entsprechend durch und dokumentieren Befund, Menge und Kältemitteltyp.",
      },
      {
        title: "R410A, R32 und ältere Anlagen",
        body:
          "Aktuelle Anlagen arbeiten meist mit R32, die Generation davor mit R410A. Beide sind nicht mischbar, und ältere Anlagen mit inzwischen ausgelaufenen Kältemitteln lassen sich nicht beliebig weiterbetreiben — beim Nachfüllen wird die Verfügbarkeit dann zur Kostenfrage. Bei solchen Geräten rechnen wir Instandsetzung offen gegen einen Neubau des Kreislaufs oder einen Anlagentausch, statt Geld in ein System zu stecken, dessen Betriebsstoff knapper und teurer wird.",
      }
    ],
    checklist: [
      "Kühlleistungsverlauf beschreiben",
      "Letzte Befüllung notieren",
      "Fehlercode mitteilen",
      "Gerät nicht öffnen",
      "Telefonisch abklären"
    ],
    faq: [
      {
        question: "Muss Kältemittel regelmäßig nachgefüllt werden?",
        answer:
          "Nein. Ein Kältekreis ist geschlossen und verbraucht im Normalbetrieb kein Kältemittel. Wer regelmäßig nachfüllen muss, hat eine Undichtheit. Nachfüllen ohne Lecksuche ist deshalb nur eine Verzögerung — und rechtlich problematisch, weil das Gas nicht entweichen darf."
      },
      {
        question: "Woran erkenne ich, dass Kältemittel fehlt?",
        answer:
          "An einem schleichenden Leistungsverlust über Wochen bei sauberen Filtern, an Eisbildung am Verdampfer oder Leitungsanschluss und an Ölspuren an den Verschraubungen des Außengeräts. Fehlercodes zu Druck oder Überhitzung passen ebenfalls ins Bild."
      },
      {
        question: "Dürfen Sie an meiner Anlage Kältemittel handhaben?",
        answer:
          "Arbeiten am Kältekreis erfolgen ausschließlich durch entsprechend zertifiziertes Personal, weil fluorierte Treibhausgase gesetzlich geregelt sind. Kältemittel wird abgesaugt und ordnungsgemäß entsorgt, nicht abgelassen. Befund, Menge und Kältemitteltyp dokumentieren wir für Sie."
      }
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
    short:
      "Startprobleme, Überhitzung und Leistungsverlust am Verdichter.",
    intro:
      "Der Verdichter ist das teuerste Bauteil jeder Klimaanlage — und fast nie die erste Ursache. Startet das Gerät nicht, schaltet es ständig ab oder liefert es dauerhaft zu wenig Kälte, prüfen wir zuerst Elektrik, Kondensator, Fühler und Wärmeabfuhr, bevor der Verdichter selbst in Frage kommt. Diese Reihenfolge entscheidet über die Rechnung.",
    sections: [
      {
        title: "Startet nicht oder schaltet ständig ab",
        body:
          "Ein Verdichter, der brummt und wieder abschaltet, hat meist ein elektrisches Problem: gealterter Anlaufkondensator, defektes Schütz, verschmorte Klemme oder eine ausgelöste Schutzschaltung. Häufiges Ein- und Ausschalten in kurzen Abständen deutet dagegen auf Druck- oder Temperaturprobleme hin, nicht auf einen mechanischen Defekt. Bei Inverter-Geräten kommt die Leistungselektronik dazu, die den Verdichter ansteuert — und die ist deutlich günstiger als der Verdichter selbst.",
      },
      {
        title: "Überhitzung und ihre Vorgeschichte",
        body:
          "Läuft der Verdichter heiß, liegt die Ursache fast immer außerhalb: verschmutzter Verflüssiger, stehender Lüfter am Außengerät, zu geringer Luftabstand in einer Nische oder Kältemittelmangel. Ein Verdichter überhitzt nicht von selbst. Genau deshalb ist die häufigste Vorgeschichte eines Verdichterschadens ein Monate langer Betrieb mit zu wenig Kältemittel — das Gas kühlt auch den Motor, und fehlt es, steigt die Wickeltemperatur.",
      },
      {
        title: "Wenn der Verdichter tatsächlich defekt ist",
        body:
          "Ein mechanisch oder elektrisch defekter Verdichter zeigt sich an Windungsschluss, Masseschluss oder blockierter Mechanik — messbar, nicht Auslegungssache. Der Tausch bedeutet Absaugen des Kältemittels, Öffnen des Kreislaufs, neuen Filtertrockner, Evakuieren und exaktes Neubefüllen. Bei Splitgeräten im Haushaltsbereich liegt der Aufwand damit häufig in der Nähe einer neuen Anlage, bei größeren gewerblichen Systemen dagegen klar darunter.",
      },
      {
        title: "Ehrliche Empfehlung statt Teiletausch",
        body:
          "Wir messen elektrische Werte, Betriebsdrücke und Temperaturen und legen offen, was wir sehen. Ist ein günstiges Bauteil im Umfeld die Ursache, tauschen wir das und dokumentieren, was zur Belastung geführt hat — sonst wiederholt sich der Schaden. Ist der Verdichter selbst hinüber, sagen wir das mit Zahlen: Reparaturaufwand, Alter der Anlage, Kältemitteltyp und Verfügbarkeit ergeben zusammen die Antwort, nicht das Bauchgefühl.",
      }
    ],
    checklist: [
      "Startverhalten beschreiben",
      "Geräusche notieren",
      "Fehlercode fotografieren",
      "Gerät nicht weiter belasten",
      "Anruf vorbereiten"
    ],
    faq: [
      {
        question: "Ist ein Verdichterschaden das Ende der Anlage?",
        answer:
          "Bei Split-Geräten im Haushaltsbereich meistens ja, weil Absaugen, Tausch, Filtertrockner, Evakuieren und Neubefüllen zusammen in die Nähe eines Neugeräts kommen. Bei größeren gewerblichen Anlagen lohnt sich der Tausch dagegen häufig klar."
      },
      {
        question: "Mein Außengerät brummt, kühlt aber nicht. Ist der Verdichter kaputt?",
        answer:
          "Nicht unbedingt. Brummen ohne Anlauf deutet häufig auf den Anlaufkondensator, ein Schütz oder eine verschmorte Klemme hin — alles deutlich günstiger als der Verdichter. Wir messen die elektrischen Werte, bevor wir über einen Tausch sprechen."
      },
      {
        question: "Wie vermeide ich einen Verdichterschaden?",
        answer:
          "Wärmetauscher sauber halten, dem Außengerät genügend Luft lassen und Leistungsverluste früh prüfen lassen. Monate Betrieb mit zu wenig Kältemittel ist die häufigste Vorgeschichte eines Verdichterschadens, weil das Gas auch die Motorwicklung kühlt."
      }
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
    short:
      "Platine, Sensoren, Fernbedienung und Smart-Module — Fehlercodes eingrenzen.",
    intro:
      "Reagiert die Klimaanlage nicht auf die Fernbedienung, zeigt sie Fehlercodes oder schaltet sie unregelmäßig, liegt die Ursache oft nicht im Kältekreis, sondern in Steuerplatine, Sensorik oder Verkabelung. Das ist die gute Nachricht: Diese Fehler sind meist günstiger zu beheben als alles, was mit Kältemittel zu tun hat.",
    sections: [
      {
        title: "Fernbedienung und Bedieneinheit",
        body:
          "Bevor Hardware getauscht wird, klären wir die einfachen Fälle: leere Batterien, ein verstellter Betriebsmodus, aktive Zeitschaltung oder ein defekter Infrarot-Empfänger im Innengerät. Ein Test mit der Handykamera zeigt, ob die Fernbedienung sendet. Bleibt die Anlage stumm, prüfen wir Empfänger, Bedienplatine und die Kommunikationsleitung zwischen Innen- und Außengerät — korrodierte Klemmen in der Außeneinheit sind dabei ein häufiger Befund.",
      },
      {
        title: "Sensoren: kleine Teile, große Wirkung",
        body:
          "Temperaturfühler am Raumluftansaug und am Verdampfer, Drucksensoren und Niveauschalter der Kondensatwanne steuern den gesamten Betrieb. Ein gealterter Fühler mit abweichendem Widerstandswert führt zu Verhalten, das wie ein schwerer Defekt wirkt: Die Anlage kühlt zu kurz, taut ständig ab oder schaltet grundlos aus. Solche Fühler sind einzeln lieferbar und gehören zu den günstigsten Reparaturen an einer Klimaanlage.",
      },
      {
        title: "Fehlercodes richtig lesen",
        body:
          "Split-Anlagen melden Fehler als Blinkmuster der LEDs am Innengerät oder als Code über die Fernbedienung; bei manchen Herstellern lässt sich der Speicher gezielt abfragen. Der Code benennt einen Bereich — Fühler, Druck, Kommunikation, Verdichter — und nicht das defekte Bauteil. Notieren Sie Code oder Blinkfolge, bevor Sie die Anlage stromlos machen: Ein Neustart löscht die Meldung oft und nimmt uns die wichtigste Information.",
      },
      {
        title: "WLAN-Module und Smart-Home",
        body:
          "Nach Updates, Routerwechsel oder Stromausfall verlieren WLAN-Module gelegentlich die Verbindung oder die Anlage reagiert nur noch auf die Fernbedienung. Das ist in der Regel Konfiguration, nicht Defekt. Wir trennen die Fälle: Läuft die Anlage über die Fernbedienung normal, liegt es an der Anbindung — und dann bringt ein Modultausch nichts, solange die Netzwerkseite nicht geklärt ist.",
      }
    ],
    checklist: [
      "Fehlercode notieren",
      "Fernbedienung testen",
      "Stromausfall-Historie nennen",
      "Marke & Modell bereithalten",
      "Telefonisch abklären"
    ],
    faq: [
      {
        question: "Die Anlage reagiert nicht auf die Fernbedienung. Was prüfen?",
        answer:
          "Batterien, Betriebsmodus und Zeitschaltung zuerst. Danach der Sendetest: Die Handykamera zeigt das Infrarotsignal als kurzes Aufleuchten der Diode. Sendet die Fernbedienung, liegt es am Empfänger oder der Bedienplatine im Innengerät — beides ist einzeln tauschbar."
      },
      {
        question: "Kann ich die Anlage stromlos machen, um den Fehler zu löschen?",
        answer:
          "Ein Neustart hilft manchmal, löscht aber auch die Fehlermeldung. Notieren Sie deshalb vorher Code oder Blinkfolge. Kommt der Fehler wiederholt zurück, ist der Reset nur ein Symptomwechsel und die Ursache bleibt."
      },
      {
        question: "Ist ein Elektronikfehler teurer als ein Kältekreisproblem?",
        answer:
          "In der Regel nicht. Fühler, Empfänger, Schütze und Kondensatoren sind günstige Einzelteile. Teuer wird es nur bei Leistungsplatinen von Inverter-Außengeräten — dort vergleichen wir den Preis vorab offen mit dem Wert der Anlage."
      }
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
    short:
      "Filter, Lamellen und Lüfter reinigen — für Luftqualität und volle Kühlleistung.",
    intro:
      "Verschmutzte Filter und Wärmetauscher kosten Kühlleistung, Strom und Luftqualität — in dieser Reihenfolge merkt man es meist auch. Wir reinigen Innen- und Außengerät fachgerecht, spülen die Kondensatwanne und prüfen anschließend, was die Maßnahme messbar gebracht hat. Für Wohnungen, Büros und Ordinationen in Wien und Niederösterreich.",
    sections: [
      {
        title: "Filter, Lamellen und Lüfterrad",
        body:
          "Die Luftfilter im Innengerät sind nur die erste Stufe: Dahinter setzt sich das Lamellenpaket des Verdampfers zu, und im Querstromlüfter bildet sich ein fester Belag aus Staub und Kondensat. Diesen Teil erreicht keine Haushaltsreinigung. Wir demontieren so weit nötig, reinigen die Lamellen schonend und das Lüfterrad gründlich — genau dort liegt der größte Teil des verlorenen Luftdurchsatzes und häufig auch die Geräuschursache.",
      },
      {
        title: "Kondensatwanne und Ablauf",
        body:
          "In der Kondensatwanne steht Wasser, und mit Staub entsteht dort ein Biofilm, der den Ablauf verengt und Geruch verursacht. Wir spülen Wanne und Leitung, desinfizieren und prüfen das Gefälle. Bei Geräten mit Kondensatpumpe kontrollieren wir Schwimmer und Förderleistung. Ein verstopfter Ablauf ist die häufigste Ursache für ein tropfendes Innengerät — und die günstigste Reparatur, wenn sie früh passiert.",
      },
      {
        title: "Außengerät: der unterschätzte Teil",
        body:
          "Am Verflüssiger des Außengeräts sammeln sich Pollen, Laub, Baustaub und in Wien häufig Taubenfedern. Weil dort die Wärme abgegeben wird, kostet ein belegter Verflüssiger direkt Kühlleistung und belastet den Verdichter. Wir reinigen das Lamellenpaket und das Lüfterrad, prüfen den Freiraum um das Gerät und die Schwingungsdämpfer — Letzteres ist bei Geräten an Fassaden und in Innenhöfen auch ein Nachbarschaftsthema.",
      },
      {
        title: "Was Reinigung nicht leisten kann",
        body:
          "Reinigung bringt Luftdurchsatz, Hygiene und Effizienz zurück. Sie ersetzt keine Lecksuche und keine Reparatur: Kühlt die Anlage nach der Reinigung weiterhin schwach, liegt es an Kältemittelfüllung, Verdichterleistung oder Elektronik. Wir messen deshalb vor und nach der Reinigung Zu- und Ablufttemperatur und sagen anhand der Werte, ob die Maßnahme genügt hat oder ein weiterer Schritt ansteht.",
      }
    ],
    checklist: [
      "Letzte Reinigung notieren",
      "Geruch / Staub beschreiben",
      "Gerätestandort nennen",
      "Zugang sichern",
      "Termin anfragen"
    ],
    faq: [
      {
        question: "Reicht es, die Filter selbst auszuwaschen?",
        answer:
          "Als Zwischenpflege ja, alle paar Wochen in der Saison. Der Belag, der Leistung kostet, sitzt aber dahinter: im Lamellenpaket des Verdampfers und im Querstromlüfter. Diese Teile sind ohne Demontage nicht erreichbar und gehören zur professionellen Reinigung."
      },
      {
        question: "Wie merke ich, dass eine Reinigung fällig ist?",
        answer:
          "An muffigem Geruch beim Einschalten, an sichtbarem Staub in den Lamellen, an einem lauteren Innengerät und an spürbar schwächerer Kühlung bei gleicher Einstellung. Spätestens nach einer Saison ohne Reinigung lohnt sich der Termin."
      },
      {
        question: "Bringt Reinigung auch messbar weniger Stromverbrauch?",
        answer:
          "Ja, weil der Verdichter bei besserer Wärmeübertragung kürzer läuft. Wie viel es genau ist, hängt vom Ausgangszustand ab — wir messen Zu- und Ablufttemperatur vor und nach der Reinigung, damit die Verbesserung nicht Behauptung bleibt."
      }
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
    short:
      "Neuanlage oder Ersatzgerät fachgerecht montiert, geprüft und in Betrieb genommen.",
    intro:
      "Ob Neuanlage oder Ersatzgerät — die Montage entscheidet über Kühlleistung, Laufzeit, Geräusch und Wartbarkeit. Wir installieren Split- und Monoblock-Systeme in Wien und Niederösterreich, klären vorab die baulichen und rechtlichen Rahmenbedingungen und nehmen die Anlage messtechnisch in Betrieb statt sie nur einzuschalten.",
    sections: [
      {
        title: "Vorab klären: Zustimmung und Fassade",
        body:
          "In Wien ist die Montage eines Außengeräts selten allein eine technische Frage. Bei Mietwohnungen braucht es die Zustimmung des Eigentümers, in Wohnungseigentum die der Eigentümergemeinschaft; Anlagen an der Straßenfassade und in Schutzzonen sind zusätzlich baurechtlich zu beurteilen. Wir sprechen das vor dem Angebot durch und schlagen Alternativen vor, wenn die Fassade nicht in Frage kommt — Innenhofseite, Balkonaufstellung oder ein Monoblock-Gerät mit Wanddurchführung.",
      },
      {
        title: "Standort, Leitungsführung, Geräusch",
        body:
          "Kurze Leitungswege, sinnvolle Höhenunterschiede, ein zugänglicher Wartungspunkt und eine dichte, korrekt abgedichtete Wanddurchführung sind die Basis. Das Innengerät soll die Luft frei verteilen können, ohne direkt auf Sitz- oder Schlafplätze zu blasen. Beim Außengerät planen wir Luftabstand, entkoppelte Befestigung und Kondensatableitung mit — und wir berücksichtigen, wohin der Schall geht: In Wiener Innenhöfen wird ein an sich leises Gerät durch Reflexion schnell zum Streitpunkt.",
      },
      {
        title: "Inbetriebnahme nach Regeln, nicht nach Gefühl",
        body:
          "Nach der Montage wird die Anlage auf Dichtheit geprüft, evakuiert und getrocknet — das Vakuum entfernt Feuchtigkeit, die den Kältekreis sonst über Jahre schädigt. Danach folgt das Freigeben oder exakte Befüllen mit der Menge laut Typenschild plus Zuschlag für die Leitungslänge, ein Probelauf mit Messung von Drücken, Temperaturen und Stromaufnahme und eine Übergabe mit Erklärung der Regelung. Diese Schritte sind der Unterschied zwischen einer Anlage, die zehn Jahre läuft, und einer, die im dritten Sommer schwächelt.",
      },
      {
        title: "Bestandsanlage ersetzen",
        body:
          "Beim Gerätetausch prüfen wir, was weiterverwendbar ist: Halterungen, Wanddurchführung, Kondensatleitung und Stromversorgung oft ja, die Kältemittelleitungen nur bedingt. Ein Wechsel von R410A auf R32 erfordert saubere, druckgeprüfte Leitungen ohne Ölreste des alten Kältemittels — sonst leidet der neue Verdichter. Wir sagen offen, wann sich das Spülen der Bestandsleitungen rechnet und wann neue Leitungen die vernünftigere Wahl sind.",
      }
    ],
    checklist: [
      "Raumgröße angeben",
      "Wanddurchbrüche klären",
      "Stromanschluss prüfen",
      "Außenstellfläche sichern",
      "Beratung anfragen"
    ],
    faq: [
      {
        question: "Brauche ich in Wien eine Genehmigung für ein Außengerät?",
        answer:
          "In Mietwohnungen die Zustimmung des Eigentümers, in Wohnungseigentum die der Eigentümergemeinschaft. Bei Montage an der Straßenfassade oder in Schutzzonen kommt eine baurechtliche Beurteilung dazu. Wir klären das vor dem Angebot und schlagen Alternativen vor, wenn die Fassade ausfällt."
      },
      {
        question: "Können die alten Kältemittelleitungen weiterverwendet werden?",
        answer:
          "Manchmal. Voraussetzung sind passender Querschnitt, unbeschädigte Leitungen und ein sauberer, druckgeprüfter Zustand ohne Ölreste des alten Kältemittels. Beim Wechsel von R410A auf R32 ist das entscheidend, sonst leidet der neue Verdichter. Wir prüfen und sagen, ob Spülen oder Neuverlegen sinnvoller ist."
      },
      {
        question: "Wie lange dauert eine Split-Montage?",
        answer:
          "Eine Single-Split-Anlage mit kurzer Leitungsführung und einem Wanddurchbruch schaffen wir üblicherweise an einem Arbeitstag. Mehr Innengeräte, längere Leitungswege, Gerüst- oder Hebebühnenbedarf verlängern das entsprechend — den Ablauf legen wir vorab mit Ihnen fest."
      }
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

export const klimaHubLinks = klimaPages.map((page) => ({
  label: page.category,
  href: `/klimageraete/${page.slug}`,
  text: page.short
}));
