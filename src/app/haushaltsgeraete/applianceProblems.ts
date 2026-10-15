import type { HubFaqItem } from "../HubBlocks";

export type ApplianceProblemPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  category: string;
  short: string;
  intro: string;
  sections: { title: string; body: string }[];
  faq: HubFaqItem[];
  related: { category: string; title: string; href: string }[];
};

export const applianceProblemPages: ApplianceProblemPage[] = [
  {
    slug: "pumpt-nicht-ab",
    title: "Haushaltsgerät pumpt nicht ab",
    metaTitle: "Pumpt nicht ab | Haushaltsgeräte | MONTER",
    description:
      "Waschmaschine oder Geschirrspüler pumpt nicht ab. E18, E24, F11 und E20 gelten nur in ihrer Marke. Anzeige notieren, bevor der Strom aus ist.",
    h1: "Pumpt nicht ab.",
    category: "Pumpt nicht ab",
    short: "Wasser bleibt in der Trommel oder im Geschirrspüler stehen.",
    intro:
      "Bleibt Wasser stehen, ist fast immer der Ablaufweg betroffen, nicht automatisch die Elektronik. Dieselbe Zahl im Display bedeutet bei der nächsten Marke etwas anderes. Notieren Sie Code, Marke und Modell, bevor der Strom aus ist. Wir prüfen das in Wien, im näheren Niederösterreich und in Linz, markenoffen.",
    sections: [
      {
        title: "Waschmaschine: Sieb, Pumpe, Schlauch",
        body:
          "Bleibt Wasser in der Trommel, prüfen wir Flusensieb, Laugenpumpe, Ablaufschlauch und den Drucksensor, der den Wasserstand meldet. Bosch und Siemens zeigen dann oft E18 oder E23, Miele meldet F11, AEG und Zanussi geben E20 aus. Schleudert die Maschine nicht, obwohl sie abpumpt, kommen Drehzahlgeber, Kohlebürsten älterer Motoren und die Unwuchterkennung dazu. Eine falsch beladene Trommel bricht den Schleudergang genauso ab wie ein technischer Fehler."
      },
      {
        title: "Geschirrspüler: E24 und E25 sind nicht E15",
        body:
          "Steht Wasser im Bodenblech, melden Bosch und Siemens das mit E24 oder E25, Miele mit F11. Häufig blockiert ein Etikett oder Glasbruch das Pumpenrad. In Küchen mit hoch geführtem Ablauf oder gemeinsamem Siphon mit der Spüle kann Abwasser zurücklaufen. E15 ist ein anderes Bild: Der Leckschutz hat Wasser in der Bodenwanne erkannt. Drehen Sie den Hahn zu und nutzen Sie das Gerät nicht weiter, bis die Quelle gefunden ist."
      },
      {
        title: "Der Code nennt den Bereich, nicht das Teil",
        body:
          "Eine Ablaufmeldung heißt, dass das Wasser nicht wegkommt. Sie heißt nicht, dass die Pumpe defekt ist. Siphon, Schlauch und Ablaufhöhe gehören zur Prüfung. Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird. Die Anfrage ist noch kein Auftrag."
      }
    ],
    faq: [
      {
        question: "Bedeutet E18 bei jeder Marke dasselbe?",
        answer:
          "Nein. Bei Bosch- und Siemens-Waschmaschinen steht E18 für Abpumpen, das zu lange dauert. Bei AEG ist der Ablauf oft E20, bei Miele F11. Am Geschirrspüler derselben Marken sind E24 und E25 die Ablaufmeldungen, E15 der Leckschutz."
      },
      {
        question: "Mein Geschirrspüler zeigt E15. Kann ich das selbst zurücksetzen?",
        answer:
          "Zurücksetzen lässt sich der Code, aber er kommt wieder, solange die Undichtigkeit besteht. E15 heißt, dass der Leckschutz Wasser in der Bodenwanne erkannt hat. Bitte drehen Sie den Wasserhahn zu und nutzen Sie das Gerät nicht weiter, bis die Quelle gefunden ist."
      },
      {
        question: "Soll ich die Maschine weiterlaufen lassen, wenn Wasser austritt?",
        answer:
          "Bitte nicht. Hahn zudrehen, Gerät nicht weiter starten. Bei Wasser am Boden oder in der Bodenwanne behandeln wir die Anfrage vorrangig, damit Möbel und Boden keinen Folgeschaden nehmen."
      }
    ],
    related: [
      { category: "Waschmaschine", title: "Waschmaschine Reparatur", href: "/haushaltsgeraete/waschmaschine" },
      { category: "Geschirrspüler", title: "Geschirrspüler Reparatur", href: "/haushaltsgeraete/geschirrspueler" },
      { category: "Fehlercodes", title: "Fehlercodes nach Marke", href: "/haushaltsgeraete/fehlercodes" }
    ]
  },
  {
    slug: "kuehlt-nicht",
    title: "Kühlschrank kühlt nicht",
    metaTitle: "Kühlt nicht | Haushaltsgeräte | MONTER",
    description:
      "Kühlschrank oder Gefriergerät kühlt nicht. Tür geschlossen lassen und Temperatur notieren. Abtauung und Dichtung prüfen wir vor dem Kältekreis.",
    h1: "Kühlt nicht.",
    category: "Kühlt nicht",
    short: "Temperatur steigt, die Rückwand vereist oder der Alarm geht an.",
    intro:
      "Wenn ein Kühl- oder Gefriergerät nicht mehr kühlt, geht es zuerst um die Lebensmittel. Tür zu lassen und die angezeigte Temperatur notieren sagt mehr als ein Blick ins Fach. Wir kommen in Wien, im näheren Niederösterreich und in Linz, Ausfälle mit Verderbrisiko behandeln wir vorrangig.",
    sections: [
      {
        title: "Kühlschrank: Ablauf, Dichtung, Luft",
        body:
          "Eine vereiste Rückwand im Kühlteil deutet auf einen blockierten Tauwasserablauf oder eine gestörte Abtauung hin. Wir prüfen Ablaufloch, Türdichtung, Türschließung und die Luftführung. Bei NoFrost- und MultiAirflow-Geräten reicht schon eine zu dichte Beladung direkt vor dem Luftauslass, damit einzelne Zonen zu warm werden. Stehendes Wasser im Gemüsefach kommt fast immer aus dem Tauwasserablauf."
      },
      {
        title: "Gefriergerät: Tür zu, Alarm notieren",
        body:
          "Halten Sie die Tür geschlossen. Ein gut gefülltes Gefriergerät hält die Temperatur mehrere Stunden, ein halb leeres deutlich kürzer. Notieren Sie die angezeigte Temperatur und wann der Alarm begonnen hat. Viele Geräte speichern die höchste erreichte Temperatur. Öffnen Sie das Gerät nicht zur Kontrolle. Ein NoFrost-Gerät sollte nicht vereisen. Passiert es doch, liegen Abtauheizung, Abtaufühler, Steuerung oder eine verhärtete Dichtung näher als ein spontaner Kältemittelverlust."
      },
      {
        title: "Anzeige und Messung sind zweierlei",
        body:
          "Ein Temperaturalarm ohne erkennbare Ursache geht häufig auf einen gealterten Fühler zurück. Umgekehrt zeigt das Gerät korrekte Werte und kühlt trotzdem nicht richtig. Wir messen die Innentemperatur unabhängig von der Anzeige. Läuft der Kompressor nicht mehr ab, prüfen wir zuerst Dichtung, Abtauung, Fühler und den verstaubten Verflüssiger, bevor der Kältekreis in Frage kommt. Die Anfrage ist noch kein Auftrag."
      }
    ],
    faq: [
      {
        question: "Soll ich das Gefriergerät öffnen, um nachzusehen?",
        answer:
          "Bitte nicht. Tür geschlossen lassen, angezeigte Temperatur und den Zeitpunkt des Alarms notieren, dann anrufen. Ein geöffnetes Fach verliert die Kälte, die das Gefriergut noch hält."
      },
      {
        question: "Vereist ein NoFrost-Gerät, fehlt dann Kältemittel?",
        answer:
          "Meist nicht. Ein NoFrost-Gerät sollte nicht vereisen. Näher liegen Abtauheizung, Abtaufühler, Steuerung oder eine Tür, die wegen der Dichtung nicht mehr dicht schließt. Den Kältekreis rechnen wir erst danach und vorher ehrlich."
      },
      {
        question: "Wie dringend ist ein Kühlschrank, der nicht mehr kühlt?",
        answer:
          "Ausfälle mit Verderbrisiko behandeln wir vorrangig. Rufen Sie an, statt das Formular zu nutzen. Mit Temperatur und Geräteart sagen wir, wie dringend der Termin ist."
      }
    ],
    related: [
      { category: "Kühlschrank", title: "Kühlschrank Reparatur", href: "/haushaltsgeraete/kuehlschrank" },
      { category: "Gefrierschrank", title: "Gefrierschrank und Tiefkühl", href: "/haushaltsgeraete/tiefkuehl" },
      { category: "Fehlercodes", title: "Fehlercodes nach Marke", href: "/haushaltsgeraete/fehlercodes" }
    ]
  },
  {
    slug: "heizt-nicht",
    title: "Backofen heizt nicht",
    metaTitle: "Heizt nicht | Haushaltsgeräte | MONTER",
    description:
      "Backofen oder Herd heizt nicht, oder die Sicherung fällt. Gerät nicht weiter einschalten. Fühler und Heizkörper messen wir vor dem Teiletausch.",
    h1: "Heizt nicht.",
    category: "Heizt nicht",
    short: "Oberhitze fehlt, die Temperatur stimmt nicht, oder die Sicherung fällt.",
    intro:
      "Ein Backofen fällt selten komplett aus. Häufig fehlt eine Funktion: Oberhitze, eine Temperatur, die nicht stimmt, ein Bedienfeld, das nicht reagiert, oder eine Sicherung, die auslöst. Bei elektrischen Symptomen steht die Sicherheit vor dem Weiterbacken. Wir arbeiten in Wien, im näheren Niederösterreich und in Linz, das Einbaugerät bleibt in der Küche, solange der Zugang reicht.",
    sections: [
      {
        title: "Heizkörper, Fühler, Umluft",
        body:
          "Bäckt das Gerät oben oder unten nicht mehr, prüfen wir zuerst die Heizkörper auf Durchgang, dann Thermostat, Temperaturfühler und Ansteuerung. Heizt der Ofen, aber deutlich zu heiß oder zu kalt, ist meist der Fühler verstellt oder gealtert, nicht die Heizung. Nach einem Tausch messen wir die Temperatur mit einem eigenen Fühler, statt uns auf die Anzeige zu verlassen. Bei Heißluftgeräten kommt der Umluftmotor als eigene Ursache dazu."
      },
      {
        title: "Sicherung aus: bitte nicht weiter betreiben",
        body:
          "Ein Heizkörper mit Masseschluss, verschmorte Klemmen an der Anschlussdose oder Feuchtigkeit im Bedienmodul lösen den FI oder die Sicherung aus. Geruch, Funken, geschmolzene Isolierung oder eine wiederholt fallende Sicherung sind ein Stopp. Gerät vom Netz nehmen und nicht weiter einschalten. Die Sicherung nicht wiederholt zurücksetzen. Im Altbau prüfen wir den Anschluss mit, nicht nur das Gerät."
      },
      {
        title: "Bedienfeld und E011",
        body:
          "Reagieren Sensortasten nicht oder springt die Anzeige, ist häufig Feuchtigkeit oder Fett im Bedienfeld die Ursache. BSH-Geräte melden das teils als E011. Dieselbe Zeichenfolge gilt nicht für jede Marke. Eine spröde Pyrolyse-Dichtung oder ausgeschlagene Scharniere lassen Hitze austreten, das Reinigungsprogramm bricht ab oder das Gerät sperrt. Ein gesprungenes Glaskeramikfeld bleibt fast immer unwirtschaftlich. Den Aufwand nennen wir vor der Teilebestellung. Die Anfrage ist noch kein Auftrag."
      }
    ],
    faq: [
      {
        question: "Die Sicherung fällt. Soll ich sie wieder einschalten?",
        answer:
          "Bitte nicht wiederholt. Gerät nicht weiter einschalten. Meist liegt ein Masseschluss am Heizkörper oder ein Problem an der Anschlussdose vor. Beides gehört gemessen. Sagen Sie am Telefon, ob die Sicherung sofort oder erst im Betrieb fällt."
      },
      {
        question: "Bedeutet E011 bei jedem Herd dasselbe?",
        answer:
          "Nein. Bei BSH-Geräten, also Bosch, Siemens und den verwandten Plattformen, steht E011 oft für das Bedienfeld. Andere Marken nutzen eigene Anzeigen. Notieren Sie die Zeichenfolge mit Marke und Modell."
      },
      {
        question: "Reparieren Sie auch ein gesprungenes Kochfeld?",
        answer:
          "Elektronik, Sensortasten, Spulen und Lüfter oft ja. Ein gesprungenes oder gebrochenes Glaskeramikfeld ist dagegen fast immer unwirtschaftlich, weil das Glas als komplette Baugruppe geliefert wird."
      }
    ],
    related: [
      { category: "Backofen & Herd", title: "Backofen und Herd", href: "/haushaltsgeraete/backofen-herd" },
      { category: "Fehlercodes", title: "Fehlercodes nach Marke", href: "/haushaltsgeraete/fehlercodes" },
      { category: "Küche", title: "Dunstabzug", href: "/haushaltsgeraete/dunstabzug" }
    ]
  },
  {
    slug: "trocknet-nicht",
    title: "Trockner trocknet nicht",
    metaTitle: "Trocknet nicht | Haushaltsgeräte | MONTER",
    description:
      "Trockner trocknet nicht: oft der Luftweg, nicht die Elektronik. Filter, Wärmetauscher und Kondensat prüfen, bevor ein Teil getauscht wird, in Wien.",
    h1: "Trocknet nicht.",
    category: "Trocknet nicht",
    short: "Das Programm läuft durch, die Wäsche bleibt feucht.",
    intro:
      "Läuft der Trockner und die Wäsche bleibt feucht, steigt die Laufzeit, ohne dass ein Fehlercode erscheinen muss. Bei Wärmepumpengeräten ist der Luftweg die erste Ursache, nicht die Elektronik. Wir unterscheiden das von einem echten Bauteilschaden, in Wien, im näheren Niederösterreich und in Linz.",
    sections: [
      {
        title: "Zuerst Filter und Wärmetauscher",
        body:
          "Bei Wärmepumpentrocknern läuft die Luft im Kreis über den Verdampfer. Setzt sich dessen Lamellenpaket zu, sinkt die Luftmenge. Gleiches gilt für Flusenfilter, Sockelfilter und das Feinsieb. Bosch und Siemens weisen mit den Anzeigen für Filter und Wärmetauscher darauf hin, Miele meldet es im Klartext. Wir reinigen den Luftweg und messen danach die Trockenleistung. Ein Verdampfertausch ist nur selten nötig."
      },
      {
        title: "Behälter voll, obwohl er leer ist",
        body:
          "Meldet das Gerät dauerhaft einen vollen Behälter, ist entweder der Schwimmerschalter verschmutzt oder die Kondensatpumpe blockiert. Bei fest angeschlossenem Ablauf sind ein geknickter oder zu hoch geführter Schlauch die häufigste Ursache. Steht der Trockner als Turm über der Waschmaschine, prüfen wir Ablaufhöhe und den gemeinsamen Siphon, weil die Pumpe sonst gegen eine Wassersäule arbeitet."
      },
      {
        title: "Kalt und feucht, oder zu früh trocken",
        body:
          "Bleibt die Wäsche kalt und feucht, kommen bei Kondenstrocknern Heizregister und Sicherheitsthermostat in Frage, bei Wärmepumpengeräten der Kältekreis. Feuchtesensoren im Trommelbereich verkalken und melden dann zu früh trocken. Das ist oft günstiger zu beheben als ein Elektroniktausch. Die Anfrage ist noch kein Auftrag."
      }
    ],
    faq: [
      {
        question: "Warum zeigt der Trockner keinen Fehlercode?",
        answer:
          "Ein zugesetzter Luftweg verlängert die Laufzeit, ohne dass eine Störung gemeldet wird. Bosch und Siemens weisen auf Filter und Wärmetauscher hin, Miele im Klartext. Fehlt diese Anzeige, ist der Luftweg trotzdem der erste Prüfschritt."
      },
      {
        question: "Der Behälter ist leer, das Gerät sagt voll. Ist die Pumpe kaputt?",
        answer:
          "Nicht zwingend. Schwimmerschalter, Kondensatpumpe oder ein geknickter Ablaufschlauch erzeugen dasselbe Bild. Wir prüfen den Weg, bevor ein Teil bestellt wird."
      },
      {
        question: "Gilt das auch für einen Waschtrockner?",
        answer:
          "Der Trocknungsteil arbeitet dort mit Kondensation über den Wasserkreislauf. Setzt sich Flusenschlamm ab, trocknet das Gerät schlechter, oft ohne Fehlercode. Die Waschfunktion prüfen wir getrennt."
      }
    ],
    related: [
      { category: "Trockner", title: "Trockner Reparatur", href: "/haushaltsgeraete/trockner" },
      { category: "Waschtrockner", title: "Waschtrockner", href: "/haushaltsgeraete/waschtrockner" },
      { category: "Fehlercodes", title: "Fehlercodes nach Marke", href: "/haushaltsgeraete/fehlercodes" }
    ]
  },
  {
    slug: "fehlercodes",
    title: "Fehlercodes Haushaltsgeräte",
    metaTitle: "Fehlercodes Haushaltsgeräte | MONTER",
    description:
      "Fehlercodes für Waschmaschine, Geschirrspüler und Herd. Dieselbe Zahl gilt nur bei einer Marke und einem Gerät. Code notieren, bevor der Strom aus ist.",
    h1: "Fehlercodes nach Marke und Gerät.",
    category: "Fehlercodes",
    short: "Die Zahl gilt nur innerhalb einer Marke und eines Geräts.",
    intro:
      "Ein Fehlercode benennt einen Bereich: Zulauf, Ablauf, Tür, Heizung, Antrieb. Er benennt nicht das defekte Bauteil, und dieselbe Zahl bedeutet bei der nächsten Marke etwas anderes. Notieren Sie die Anzeige, die Marke und das Modell vom Typenschild, bevor der Strom aus ist. Unten stehen nur Codes, die wir einer Marke und einem Gerät zuordnen. Kühlschrank, Trockner und viele Herde zeigen oft ein Symbol statt einer Zahl. Die gibt es auf der jeweiligen Markenseite, nicht als zweite Liste hier.",
    sections: [
      {
        title: "Zuerst Marke und Gerät",
        body:
          "E18 an einer Bosch-Waschmaschine ist nicht E18 an einem anderen Hersteller, und am Geschirrspüler derselben Marke sind andere Zahlen der Ablauf. Die Liste ist nach Gerät und Marke getrennt. Jede Zeile führt auf die Markenseite, auf der der Code steht."
      },
      {
        title: "Was die Liste nicht ersetzt",
        body:
          "Ein Code grenzt die Diagnose ein. Er bestellt kein Teil. Siphon, Schlauch und Anschluss gehören dazu, wenn das Wasser nicht wegkommt. Den Aufwand nennen wir vor Ort, bevor etwas bestellt wird. Die Anfrage ist noch kein Auftrag."
      }
    ],
    faq: [
      {
        question: "Warum steht mein Code nicht in der Liste?",
        answer:
          "Entweder gehört er zu einer Baureihe, die wir hier nicht als Klartext-Code führen, oder das Gerät zeigt ein Symbol statt einer Zahl. Kühl- und Trockengeräte machen das oft. Notieren Sie die Anzeige trotzdem, mit Marke und Modell. Wir ordnen sie der Baureihe zu."
      },
      {
        question: "Soll ich das Gerät vom Strom nehmen, damit der Code weg ist?",
        answer:
          "Bitte erst notieren. Ein Neustart löscht die Meldung oft, und ohne die Zahl beginnt die Suche von vorn. Danach darf das Gerät aus bleiben, besonders wenn Wasser austritt oder eine Sicherung fällt."
      },
      {
        question: "Heißt der Code, dass dieses Teil getauscht werden muss?",
        answer:
          "Nein. Er nennt den Bereich. Eine Pumpenmeldung kann ein verstopftes Sieb, ein geknickter Schlauch oder die Pumpe selbst sein. Wir prüfen in dieser Reihenfolge."
      }
    ],
    related: [
      { category: "Problem", title: "Pumpt nicht ab", href: "/haushaltsgeraete/pumpt-nicht-ab" },
      { category: "Problem", title: "Heizt nicht", href: "/haushaltsgeraete/heizt-nicht" },
      { category: "Marken", title: "Alle Marken", href: "/marken" }
    ]
  }
];

export function getApplianceProblem(slug: string) {
  return applianceProblemPages.find((page) => page.slug === slug);
}

export const applianceProblemNavLinks = applianceProblemPages.map((page) => ({
  label: page.category,
  href: `/haushaltsgeraete/${page.slug}`
}));
