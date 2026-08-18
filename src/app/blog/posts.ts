export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  /** Erstveröffentlichung, ISO-Datum */
  date: string;
  /** Letzte inhaltliche Überarbeitung, ISO-Datum */
  dateModified: string;
  image: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
  checklist: string[];
};

/**
 * Themennähe zwischen den Kategorien für die Auswahl verwandter Beiträge.
 * Gleiche Kategorie zählt immer zuerst, danach greift diese Reihenfolge.
 */
const categoryAffinity: Record<string, string[]> = {
  Waschmaschine: ["Trockner", "Ratgeber", "Geschirrspüler"],
  Trockner: ["Waschmaschine", "Ratgeber", "Geschirrspüler"],
  Geschirrspüler: ["Waschmaschine", "Backofen & Herd", "Ratgeber"],
  "Backofen & Herd": ["Geschirrspüler", "Ratgeber", "Kühlen"],
  Kühlen: ["Klimageräte", "Ratgeber", "Trockner"],
  Klimageräte: ["Kühlen", "Ratgeber", "Garagentore"],
  Garagentore: ["Ratgeber", "Klimageräte", "Waschmaschine"],
  Ratgeber: ["Waschmaschine", "Kühlen", "Geschirrspüler"]
};

const washingMachineImage =
  "https://images.unsplash.com/photo-1632923565835-6582b54f2105?auto=format&fit=crop&w=1600&q=85";
const dishwasherImage =
  "https://images.unsplash.com/photo-1620568400263-6f1cf95b9e30?auto=format&fit=crop&w=1600&q=85";
const ovenImage =
  "https://images.unsplash.com/photo-1677727852911-74e9d5269003?auto=format&fit=crop&w=1600&q=85";
const fridgeImage =
  "https://images.unsplash.com/photo-1667404202905-4335b5370d96?auto=format&fit=crop&w=1600&q=85";
const dryerImage =
  "https://images.unsplash.com/photo-1775210727386-4c798dfae209?auto=format&fit=crop&w=1600&q=85";
const workshopImage =
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1600&q=85";
const garageImage =
  "https://images.unsplash.com/photo-1696992812596-3c0d4d2d1299?auto=format&fit=crop&w=1600&q=85";

export const blogPosts: BlogPost[] = [
  {
    slug: "waschmaschine-pumpt-nicht-ab",
    title: "Waschmaschine pumpt nicht ab: Ursachen und erste Schritte",
    description:
      "Was tun, wenn die Waschmaschine nicht abpumpt? Die wichtigsten Ursachen, sichere Sofortmaßnahmen und wann ein Reparaturservice sinnvoll ist.",
    category: "Waschmaschine",
    readingTime: "4 Min.",
    date: "2025-09-16",
    dateModified: "2026-05-12",
    image: washingMachineImage,
    intro:
      "Wenn Wasser in der Trommel stehen bleibt, ist der Ärger sofort da: Die Wäsche ist nass, die Tür bleibt verriegelt und im schlimmsten Fall steht Wasser auf dem Boden. Die gute Nachricht ist, dass dieses Fehlerbild in den meisten Fällen keine teure Ursache hat. Wir zeigen, was Sie selbst gefahrlos prüfen können, wo Sie besser aufhören und was wir bei einem Einsatz in Wien der Reihe nach kontrollieren.",
    sections: [
      {
        title: "Zuerst: Strom weg und Wasser sichern",
        body:
          "Bevor Sie irgendetwas öffnen, schalten Sie das Gerät aus und ziehen Sie den Netzstecker. In der Trommel können mehrere Liter Wasser stehen, und die kommen beim Öffnen des Flusensiebs vollständig heraus. Stellen Sie eine flache Wanne und alte Handtücher bereit, bevor Sie den Verschluss lösen. Viele Geräte haben neben dem Sieb einen kurzen Notablaufschlauch mit Stopfen — damit lässt sich das Wasser kontrolliert und ohne Sauerei ablassen. Wer das Sieb ohne Vorbereitung aufdreht, hat schnell einen Wasserschaden, der teurer ist als die eigentliche Reparatur. Das gilt besonders in Altbauwohnungen mit Parkett oder in Bädern ohne Bodenablauf."
      },
      {
        title: "Flusensieb, Schlauch und Siphon",
        body:
          "Das Flusensieb ist die häufigste Ursache und die einzige Stelle, die wirklich für die Selbstprüfung gedacht ist. Münzen, Haarklammern, Büstenhalterbügel und verfilzte Flusen sammeln sich dort und blockieren den Weg zur Pumpe. Prüfen Sie danach den Ablaufschlauch auf Knicke und darauf, ob er hinter dem Gerät eingeklemmt ist. Der dritte Punkt wird oft übersehen: der Siphon oder Wandanschluss, in den der Schlauch mündet. Ist der zugesetzt — bei einem geteilten Anschluss mit dem Waschbecken passiert das regelmäßig —, arbeitet die Pumpe einwandfrei, das Wasser kommt aber nicht weg. Das Gerät ist dann völlig in Ordnung und die Installation der Grund."
      },
      {
        title: "Laugenpumpe und Fremdkörper",
        body:
          "Bleibt es nach diesen Schritten beim Fehler, kommt die Laugenpumpe in Betracht. Ein typisches Anzeichen ist ein Brummen oder Surren, ohne dass Wasser abläuft: Der Motor läuft, das Pumpenrad ist blockiert. Häufig steckt ein harter Fremdkörper im Rad oder im Zulaufstutzen. Manchmal ist der Wicklungsschaden aber echt und die Pumpe muss getauscht werden. Sie ist bei allen gängigen Marken ein günstiges Verschleißteil und in der Regel lagernd, weshalb sich diese Reparatur praktisch immer rechnet — auch bei älteren Geräten. Wir prüfen zusätzlich das Pumpengehäuse auf Risse, denn eine undichte Pumpe ist ein Wasserschadenrisiko, das man nicht übersehen sollte."
      },
      {
        title: "Niveauschalter, Druckdose und Elektronik",
        body:
          "Ein Fehlerbild, das gerne für einen Pumpenschaden gehalten wird: Das Gerät pumpt gar nicht erst an, weil es glaubt, es sei kein Wasser im Bottich. Verantwortlich ist dann die Druckdose oder ihr Schlauch — verkalkt, verrutscht oder mit Waschmittelrückständen zugesetzt. Auch ein verstopfter Druckschlauch am Bottichstutzen kommt regelmäßig vor. Erst wenn Pumpe, Ablaufweg und Niveauerfassung geprüft sind, ist die Steuerung ein sinnvoller Verdacht. In dieser Reihenfolge zu arbeiten ist wichtig, weil ein Elektronikmodul das mit Abstand teuerste Teil ist und ein Tausch auf Verdacht schnell den Wert des Geräts erreicht."
      },
      {
        title: "Fehlercode notieren, nicht interpretieren",
        body:
          "Wenn Ihr Gerät einen Code anzeigt, fotografieren Sie ihn samt Programmleuchten. Die Codes sind herstellerspezifisch und teils sogar innerhalb einer Marke je Gerätegattung unterschiedlich vergeben: Bosch und Siemens melden Ablaufprobleme als E18 oder F18, Miele als F11, AEG als C2 oder E20, Beko als E03, Gorenje als F6. Bei Beko bedeutet E01 an der Waschmaschine die Türverriegelung, am Geschirrspüler dagegen den Heizkreis. Wer einen Code aus einem allgemeinen Suchergebnis übernimmt, landet deshalb leicht beim falschen Bauteil. Nennen Sie uns am Telefon Code und Modellnummer vom Typenschild — damit können wir die passenden Teile schon zum ersten Termin mitbringen."
      },
      {
        title: "Wann sich der Anruf lohnt",
        body:
          "Rufen Sie an, wenn nach der Siebreinigung weiter Wasser steht, die Pumpe brummt, das Gerät wiederholt denselben Code zeigt oder Wasser austritt. Pumpe, Türschloss, Druckdose und Schläuche sind Verschleißteile im überschaubaren Preisrahmen — die Reparatur lohnt sich fast immer, unabhängig vom Gerätealter. Klar gegen eine Reparatur sprechen ein Lagerschaden plus Elektronikfehler an einem alten Gerät oder Wasser, das aus dem Bottich selbst kommt. Diese Einschätzung geben wir vor der Teilebestellung ab, nicht danach. In Wien und Umgebung sind wir meist am selben oder nächsten Werktag vor Ort."
      }
    ],
    checklist: [
      "Netzstecker ziehen",
      "Wasser sicher auffangen",
      "Flusensieb vorsichtig prüfen",
      "Ablaufschlauch und Siphon prüfen",
      "Fehlercode fotografieren",
      "Modellnummer vom Typenschild notieren"
    ]
  },
  {
    slug: "geschirrspueler-reinigt-nicht-richtig",
    title: "Geschirrspüler reinigt nicht richtig: Das kann dahinterstecken",
    description:
      "Wenn Geschirr schmutzig bleibt, liegen die Ursachen oft bei Sprüharmen, Wasserzufuhr, Sieben oder Dosierung. Ein Überblick für schnelle Orientierung.",
    category: "Geschirrspüler",
    readingTime: "4 Min.",
    date: "2025-10-21",
    dateModified: "2026-04-08",
    image: dishwasherImage,
    intro:
      "Ein Geschirrspüler soll Arbeit abnehmen. Bleiben Gläser milchig, Teller sandig oder Töpfe fettig, muss man nicht sofort an einen Defekt denken: Ein großer Teil dieser Fälle ist eine Frage von Wasserführung, Dosierung und Wasserhärte. Diese Anleitung folgt der Reihenfolge, in der wir bei einem Einsatz vorgehen — von den Punkten, die Sie selbst erledigen können, bis zu den technischen Ursachen.",
    sections: [
      {
        title: "Siebe und Sprüharme zuerst",
        body:
          "Nehmen Sie das Sieb im Boden heraus und spülen Sie beide Teile unter warmem Wasser ab. Danach die Sprüharme abnehmen und die Düsen gegen das Licht prüfen: Kalk, Etikettenreste und Speiseteile setzen einzelne Düsen zu, und schon fehlt einer Korbzone der Wasserdruck. Prüfen Sie auch, ob sich beide Arme frei drehen — ein zu hoher Teller oder ein Pfannenstiel bremst den oberen Arm regelmäßig aus. Diese beiden Handgriffe erklären erfahrungsgemäß den größten Teil aller Reinigungsprobleme und kosten nichts außer zehn Minuten."
      },
      {
        title: "Wasserhärte richtig einstellen",
        body:
          "Wien wird aus dem Hochquellwasser versorgt und liegt je Bezirk zwischen weich und mittelhart, in Teilen Niederösterreichs mit eigener Brunnenversorgung deutlich härter. Wichtig ist, dass die Härte im Gerät zur tatsächlichen Versorgung passt: Zu niedrig eingestellt, verkalken Heizstab, Düsen und Gläser; zu hoch eingestellt, verbraucht das Gerät unnötig Salz und die Gläser werden trüb-matt. Prüfen Sie außerdem den Salzstand, auch bei Multitabs. Der Enthärter braucht Regeneriersalz, und die Warnleuchte kommt bei vielen Geräten spät. Ein blindes Nachfüllen von Klarspüler löst dieses Problem nicht."
      },
      {
        title: "Reiniger, Beladung und Programmwahl",
        body:
          "Sparprogramme arbeiten mit langer Laufzeit bei niedriger Temperatur — für normal verschmutztes Geschirr in Ordnung, für Fett und Eingetrocknetes zu schwach. Testen Sie einmal ein Programm mit 60 Grad und frischem Pulver statt Tabs: Pulver dosiert man variabel und es ist bei kurzen Programmen im Vorteil, weil sich Tabs nicht immer vollständig auflösen. Achten Sie darauf, dass die Klappe des Dosierfachs nicht von einem Teller blockiert wird, und stellen Sie Schüsseln nicht so, dass sie den Wasserstrahl abschirmen. Überladung ist eine der häufigsten Ursachen für ein schlechtes Ergebnis ohne jeden technischen Defekt."
      },
      {
        title: "Heizt das Gerät überhaupt?",
        body:
          "Ohne Wärme löst kein Reiniger Fett — das Ergebnis wirkt dann wie ein Druck- oder Pumpenproblem. Öffnen Sie das Gerät zehn Minuten nach Programmstart kurz: Kommt kein warmer Dampf, prüfen wir Heizung, Temperaturfühler und Ansteuerung. Bei vielen Geräten sitzt die Heizung in der Umwälzpumpe als gemeinsame Baugruppe, was den Teilepreis erhöht, die Diagnose aber eindeutig macht. Ein zweites Indiz ist nasses Geschirr am Programmende: Ohne Endtemperatur trocknet auch die Restwärme nicht. Diese Kombination — kalt und nass — ist ein klarer Hinweis auf den Heizkreis und kein Dosierungsthema."
      },
      {
        title: "Wasserzulauf, Ablauf und Fehlercodes",
        body:
          "Zieht das Gerät zu wenig Wasser, kommt der Sprühdruck nicht zustande. Prüfen Sie Eckventil, Zulaufsieb und den Aquastop am Schlauchende; in Altbauten ist ein halb geschlossener oder verkalkter Hahn ein regelmäßiger Befund. Bleibt Wasser im Boden stehen, sind Feinsieb, Pumpenrad und der oft mit der Spüle geteilte Siphon die ersten Stellen. Fehlercodes helfen bei der Eingrenzung, sind aber markenabhängig: Bosch und Siemens melden Zulaufprobleme als E15 oder E22, Miele als F14, AEG als i30, Beko als E05, Gorenje als F2. Fotografieren Sie den Code samt Typenschild, statt ihn zu deuten."
      },
      {
        title: "Wirtschaftlich entscheiden",
        body:
          "Umwälz- und Ablaufpumpe, Heizung, Zulaufventil, Sprüharme, Türscharniere, Seilzüge und Dichtungen sind bei allen gängigen Marken gut beschaffbar, und die Reparatur lohnt sich meist deutlich. Die Grenze ist das Elektronikmodul: Bei einem günstigen Einstiegsgerät kann ein Modul samt Arbeitszeit die Hälfte des Neupreises erreichen. Bei Einbaugeräten prüfen wir zusätzlich vorab, ob sich das Gerät ohne Beschädigung der Möbelfront aus der Nische ziehen lässt — bei engen Wiener Küchenzeilen ist das ein echter Faktor für die Terminplanung. Die Einschätzung bekommen Sie vor der Teilebestellung."
      }
    ],
    checklist: [
      "Siebe reinigen",
      "Sprüharme abnehmen und Düsen ausspülen",
      "Salz, Klarspüler und Wasserhärte prüfen",
      "Programm mit 60 Grad testen",
      "Beladung reduzieren",
      "Fehlercode und Typenschild fotografieren"
    ]
  },
  {
    slug: "backofen-heizt-nicht-mehr",
    title: "Backofen heizt nicht mehr: Mögliche Ursachen",
    description:
      "Der Backofen bleibt kalt oder erreicht die Temperatur nicht? Lesen Sie, welche Bauteile betroffen sein können und wann Vorsicht geboten ist.",
    category: "Backofen & Herd",
    readingTime: "4 Min.",
    date: "2025-11-18",
    dateModified: "2026-03-24",
    image: ovenImage,
    intro:
      "Ein Backofen, der kalt bleibt, ist selten ein Rätsel: Meist ist es ein Heizkörper, ein Temperaturfühler oder die Ansteuerung. Anders als bei Waschmaschine und Geschirrspüler gibt es hier aber wenig, das man selbst prüfen sollte — im Gerät liegen 230 Volt an heißen, gut zugänglichen Bauteilen. Dieser Beitrag hilft Ihnen, das Fehlerbild sauber zu beschreiben und einzuschätzen, wie eilig es ist.",
    sections: [
      {
        title: "Fällt alles aus oder nur eine Heizart?",
        body:
          "Das ist die wichtigste Beobachtung, und Sie können sie gefahrlos selbst machen. Probieren Sie Oberhitze, Unterhitze, Heißluft und Grill einzeln aus. Bleibt nur eine Betriebsart kalt, ist mit hoher Wahrscheinlichkeit der zugehörige Heizkörper defekt — der günstige Fall, denn die Heizkörper sind einzeln tauschbar. Bleibt der Ofen in jeder Betriebsart kalt, obwohl Display und Beleuchtung funktionieren, deutet das auf Fühler, Sicherheitsthermostat oder Steuerung hin. Notieren Sie sich, welche Betriebsarten Sie getestet haben; damit lässt sich der Einsatz gezielt vorbereiten."
      },
      {
        title: "Temperatur weicht ab statt auszufallen",
        body:
          "Ein zweites, sehr häufiges Bild: Der Ofen heizt, aber Kuchen verbrennt oben oder bleibt in der Mitte roh. Weicht die Temperatur in allen Betriebsarten gleichmäßig ab, ist meistens der Temperaturfühler gealtert. Wir messen mit einem eigenen Fühler nach, weil die Anzeige des Geräts bei diesem Fehlerbild keine Referenz ist. Backt der Ofen dagegen einseitig, prüfen wir Heißluftgebläse, Türdichtung und Scharniere: Eine verhärtete Dichtung oder ein ausgeschlagenes Scharnier lässt Hitze an einer Seite entweichen. Beide Teile sind günstig und bei allen gängigen Marken verfügbar."
      },
      {
        title: "Die Tür ist häufiger schuld als gedacht",
        body:
          "Wenn der Ofen deutlich länger braucht, die Front heiß wird oder die Küche beim Backen beschlägt, prüfen Sie die Dichtung mit der Hand: verhärtet, eingerissen oder platt gedrückt? Und heben Sie die geöffnete Tür leicht an — spürbares Spiel deutet auf ausgeschlagene Scharniere. In Wiener Altbauküchen mit hoher Nutzungsfrequenz sehen wir das oft. Der Effekt ist doppelt unangenehm: schlechte Backergebnisse und deutlich höherer Stromverbrauch. Beschlag zwischen den Scheiben einer Vollglastür wird übrigens häufig für einen Defekt gehalten, ist aber in der Regel Fettfilm und reinigungsfähig."
      },
      {
        title: "Sicherung, Geruch, Funken: hier bitte aufhören",
        body:
          "Löst der FI oder die Sicherung aus, riecht es verschmort, sind Klemmen sichtbar erhitzt oder gibt es Funken, betreiben Sie das Gerät nicht weiter und setzen Sie die Sicherung nicht wiederholt zurück. Ursache ist meist ein Masseschluss am Heizkörper oder ein Problem an der Anschlussdose. Genau diese Fälle nehmen wir vorrangig, weil dahinter ein echtes Sicherheitsrisiko steht. Im Altbau prüfen wir den Anschluss mit: Dort hängen Herde häufig noch an alten Klemmdosen, teils an Provisorien aus früheren Küchenumbauten. Ein Backofen ist außerdem kein Gerät, das man mit einem Verlängerungskabel betreibt."
      },
      {
        title: "Codes, Sperren und Fehlbedienung",
        body:
          "Nicht jeder stille Backofen ist defekt. Nach einem Stromausfall startet mancher Ofen nicht, solange die Uhr blinkt oder eine Zeitvorwahl aktiv ist. Auch eine aktive Kindersicherung oder ein laufendes Reinigungsprogramm sperrt das Gerät. Zeigt das Display einen Code, fotografieren Sie ihn: Bosch und Siemens melden Fühlerfehler als E011 oder F oder ähnlich baureihenabhängig, Miele als F-Nummern, AEG mit F-Codes, und bei Beko und Gorenje ist die Zuordnung je Baureihe eigen vergeben. Die Nummer allein ersetzt die Messung nicht, sie verkürzt aber die Suche erheblich."
      },
      {
        title: "Reparatur, Kochfeld und Wirtschaftlichkeit",
        body:
          "Heizkörper, Fühler, Thermostat, Türdichtung, Scharniere, Lampen und Lüftermotor sind Verschleißteile im überschaubaren Preisrahmen — bei einem gepflegten Gerät lohnt sich die Reparatur klar. Die Grenze ist das Bedienmodul: An einem günstigen Einbaugerät kann es die Hälfte des Neupreises erreichen, und bei sehr alten Modellen ist es teils nicht mehr lieferbar. Beim Kochfeld sind Kochzonen, Schalter und Anschlussleitungen tauschbar; ein gesprungenes Glaskeramikfeld dagegen selten wirtschaftlich, weil es als komplette Baugruppe kommt. Wir nennen die Zahlen vor der Bestellung, damit Sie entscheiden können."
      }
    ],
    checklist: [
      "Alle Betriebsarten einzeln testen",
      "Sicherung und FI prüfen",
      "Türdichtung und Scharnierspiel prüfen",
      "Temperaturverhalten notieren",
      "Fehlercode und Typenschild fotografieren",
      "Bei Geruch oder Funken: Gerät ausschalten"
    ]
  },
  {
    slug: "kuehlschrank-kuehlt-nicht",
    title: "Kühlschrank kühlt nicht richtig: Was jetzt wichtig ist",
    description:
      "Wenn der Kühlschrank zu warm wird, zählt schnelle Einschätzung. Ursachen, Sofortmaßnahmen und Hinweise zur Reparaturentscheidung.",
    category: "Kühlen",
    readingTime: "4 Min.",
    date: "2026-01-13",
    dateModified: "2026-06-02",
    image: fridgeImage,
    intro:
      "Bei einem zu warmen Kühlschrank geht es um zwei Dinge gleichzeitig: die Ursache und die Lebensmittel. Deshalb lohnt sich zuerst eine schnelle Einschätzung, wie kritisch die Lage ist, und erst danach die Fehlersuche. Ein großer Teil der Fälle, die wir sehen, ist überraschend günstig zu beheben — und einige sind gar kein Defekt, sondern eine Frage der Aufstellung.",
    sections: [
      {
        title: "Erst messen, dann urteilen",
        body:
          "Legen Sie ein Thermometer in ein Glas Wasser in die Mitte des Kühlraums und lesen Sie nach zwei Stunden ab. Der Kühlteil sollte bei etwa fünf Grad liegen, das Gefrierfach bei minus achtzehn. Diese Messung ist wichtiger, als sie klingt: Die Anzeige des Geräts zeigt oft nur den Sollwert oder die Temperatur am Fühler, nicht die im Fach. Notieren Sie außerdem, ob es überall gleich warm ist oder nur in einer Zone, und ob der Kompressor durchläuft oder gar nicht anspringt. Mit diesen drei Angaben lässt sich am Telefon schon gut einschätzen, wie eilig der Termin ist."
      },
      {
        title: "Die Aufstellung als häufigste Ursache",
        body:
          "Bevor Sie an Technik denken: Ein Kühlgerät muss seine Wärme abgeben können. Wir finden regelmäßig verstaubte Verflüssiger an der Rückseite, fehlende Lüftungsgitter im Küchensockel, zu geringen Wandabstand oder ein Gerät direkt neben Backofen oder Heizkörper. Dann läuft der Kompressor durch und die Temperatur wird trotzdem nicht gehalten. Das kostet keinen Ersatzteileuro, senkt aber Verbrauch und Geräusch messbar. Bei Einbaugeräten in Wiener Küchen ist die Nischenbelüftung der Klassiker — beim Umbau wird oben oder im Sockel gerne zugemacht, was optisch schöner ist und thermisch nicht funktioniert."
      },
      {
        title: "Türdichtung und Luftzirkulation",
        body:
          "Ein einfacher Test: Klemmen Sie ein Blatt Papier in die geschlossene Tür. Lässt es sich ohne Widerstand herausziehen, dichtet die Tür an dieser Stelle nicht mehr. Feuchte Raumluft strömt dann dauerhaft ein, die Rückwand vereist und das Gerät arbeitet ohne Pause. Prüfen Sie auch, ob die Luftkanäle im Inneren frei sind: Ein hoch gestapelter Einkauf direkt vor dem Luftauslass erzeugt warme Zonen bei völlig intakter Technik. Dichtungen sind günstige Verschleißteile und bei allen gängigen Marken verfügbar — eine der Reparaturen mit dem besten Verhältnis von Kosten zu Wirkung."
      },
      {
        title: "Wasser im Gemüsefach und Vereisung",
        body:
          "Stehendes Wasser unter dem Gemüsefach und eine vereiste Rückwand haben meist dieselbe Ursache: einen blockierten Tauwasserablauf. Ablaufloch und Rinne setzen sich mit Krümeln und Bioschlamm zu, das Tauwasser läuft nicht ab und friert an. Das lässt sich oft ohne Ersatzteil beheben. Bei NoFrost-Geräten ist Vereisung dagegen kein normaler Zustand: Dort prüfen wir Abtauheizung, Abtaufühler, Steuerung und den Umluftlüfter. Fällt der Lüfter aus, entstehen warme Zonen, während der Kompressor durchläuft — ein Bild, das häufig für einen Kältemittelschaden gehalten wird und tatsächlich ein günstiger Bauteiltausch ist."
      },
      {
        title: "Kompressor und Kältekreis",
        body:
          "Springt der Kompressor nicht an, klickt er nur alle paar Minuten oder wird er sehr heiß, kommt die Anlaufelektronik in Betracht — häufig ein Startrelais oder Schutzschalter und damit kein Drama. Ein echter Schaden im geschlossenen Kältekreis ist dagegen die wirtschaftliche Grenze: Er verlangt Arbeit am Kältemittel, ist bei Haushaltsgeräten nur mit erheblichem Aufwand zu beheben und erreicht bei Einstiegsgeräten fast immer den Neupreis. In diesem Fall sagen wir das offen und rechnen den Stromverbrauch eines dauerlaufenden Altgeräts in die Entscheidung ein, statt eine Reparatur zu beginnen, die sich nicht mehr rechnet."
      },
      {
        title: "Lebensmittel und Zeitfenster",
        body:
          "Bis zum Termin gilt: Tür geschlossen halten, nicht zur Kontrolle öffnen, nichts Warmes einstellen. Ein gut gefülltes Gerät hält die Temperatur mehrere Stunden, ein halb leeres deutlich kürzer. Leicht verderbliche Ware — Fisch, Faschiertes, geöffnete Milchprodukte — würden wir bei über zehn Grad im Fach nicht mehr riskieren. Viele Geräte speichern die höchste erreichte Temperatur; diese Anzeige sagt Ihnen, ob Gefriergut angetaut war. Bringen Sie diese Info mit ins Telefonat, dann können wir Dringlichkeit und wahrscheinliche Ursache in einem Zug einschätzen."
      }
    ],
    checklist: [
      "Temperatur mit Thermometer messen",
      "Türdichtung mit Papiertest prüfen",
      "Lüftung und Verflüssiger freihalten",
      "Tauwasserablauf kontrollieren",
      "Vereisung fotografieren",
      "Verderbliche Lebensmittel sichern"
    ]
  },
  {
    slug: "trockner-trocknet-nicht",
    title: "Trockner trocknet nicht: Filter, Sensorik oder Technik?",
    description:
      "Der Trockner läuft, aber die Wäsche bleibt feucht? Ursachen reichen von Filtern bis Sensorik. So grenzen Sie das Problem ein.",
    category: "Trockner",
    readingTime: "4 Min.",
    date: "2026-02-10",
    dateModified: "2026-05-26",
    image: dryerImage,
    intro:
      "Wenn ein Trockner deutlich länger braucht oder die Wäsche feucht aus der Trommel kommt, ist das meist kein Defekt im klassischen Sinn, sondern ein Luftweg, der nicht mehr frei ist. Das ist eine gute Nachricht: Die häufigste Ursache lässt sich ohne Ersatzteil beheben. Gleichzeitig lohnt es sich, früh zu handeln, weil ein Wärmepumpentrockner mit belegtem Verdampfer spürbar mehr Strom zieht.",
    sections: [
      {
        title: "Drei Filter statt einem",
        body:
          "Fast jeder kennt den Flusenfilter in der Türöffnung. Bei Wärmepumpentrocknern gibt es aber mindestens zwei weitere Stellen: das feinere Filtervlies darunter und das Lamellenpaket des Verdampfers hinter der Sockelklappe. Genau dort sammelt sich der Belag, der die Luftmenge reduziert. Reinigen Sie den Türfilter nach jeder Ladung, das Sockelfilterpaket monatlich. Ein Teil des Lamellenpakets liegt konstruktiv so tief, dass er ohne Demontage nicht erreichbar ist — das ist regelmäßig der Grund, warum ein Gerät trotz gründlicher Eigenreinigung nicht mehr trocken wird. Diesen Bereich machen wir bei einem Serviceeinsatz mit."
      },
      {
        title: "Feuchtesensoren und Programmwahl",
        body:
          "Sensorgesteuerte Programme beenden den Lauf, wenn der gemessene Trocknungsgrad erreicht ist. Sind die Sensorflächen in der Trommel mit Weichspüler- oder Waschmittelfilm belegt, misst das Gerät zu trocken und schaltet zu früh ab. Die Flächen lassen sich mit einem feuchten Tuch und etwas Essigwasser reinigen. Achten Sie außerdem auf die Programmwahl: Ein Programm für schranktrockene Baumwolle liefert ein anderes Ergebnis als eines für bügelfeuchte Wäsche, und Mischgewebe brauchen einen eigenen Ablauf. Auch eine zu geringe Beladung führt bei Sensorprogrammen zu ungleichmäßigen Ergebnissen, weil die Wäsche nicht gleichmäßig am Sensor vorbeikommt."
      },
      {
        title: "Wäsche zu nass in der Trommel",
        body:
          "Ein oft übersehener Punkt liegt vor dem Trockner: die Schleuderleistung der Waschmaschine. Kommt die Wäsche mit 800 statt 1400 Touren aus der Maschine, muss der Trockner ein Vielfaches an Wasser verdampfen — die Laufzeit steigt entsprechend, ohne dass am Trockner etwas defekt ist. Prüfen Sie also, ob die Waschmaschine sauber ausschleudert und ob nicht dauerhaft ein Schonprogramm läuft. Wenn Sie schwere Textilien wie Handtücher und Bademäntel gemischt mit leichten Sachen trocknen, verlängert das die Zeit ebenfalls deutlich."
      },
      {
        title: "Kondensat, Behälter und Ablauf",
        body:
          "Eine dauerhafte Behältermeldung, obwohl der Behälter leer ist, geht meist auf einen verschmutzten Schwimmerschalter oder ein blockiertes Pumpenrad zurück. Beides sind günstige Positionen. Bei Geräten mit fester Ableitung sind geknickte oder zu hoch geführte Schläuche die häufigste Ursache. Steht der Trockner im Turm über der Waschmaschine — in Wiener Altbaubädern die Regel —, prüfen wir Ablaufhöhe und gemeinsamen Siphon mit. Und noch ein praktischer Punkt: In einem kleinen, geschlossenen Bad ohne Frischluft arbeitet auch ein intaktes Gerät schlechter, weil die Raumluft die Wärme nicht abführen kann."
      },
      {
        title: "Geräusche richtig deuten",
        body:
          "Quietschen und Schleifen deuten auf Antriebsriemen, Filzringe oder Lagerböcke hin, ein rhythmisches Schlagen häufig auf ein unwuchtiges Lüfterrad oder einen Fremdkörper zwischen Trommel und Gehäuse — Münzen und BH-Bügel sind hier die Dauergäste. Alle diese Teile sind Verschleißteile im überschaubaren Preisrahmen. Wichtig ist, sie früh zu beheben: Ein gelängter Riemen oder ein trockenes Lager belastet Motor und Trommelaufhängung mit, und aus einer kleinen Reparatur wird eine größere. Notieren Sie, in welcher Phase des Programms das Geräusch auftritt; das hilft bei der Eingrenzung."
      },
      {
        title: "Wo die Wirtschaftlichkeit endet",
        body:
          "Reinigung, Kondensatpumpe, Türschalter, Riemen, Lager, Feuchtesensoren und Heizregister lohnen sich bei allen gängigen Marken. Die klare Grenze ist der geschlossene Kältekreis eines Wärmepumpentrockners: Ist das Aggregat selbst defekt, wird es nur komplett geliefert, und der Aufwand liegt bei den meisten Geräten über dem Neupreis. Wir sagen das offen, bevor Teile bestellt werden. Vorher messen wir nach der Reinigung die Trockenleistung — in den meisten Fällen erreicht das Gerät damit wieder normale Laufzeiten, und der Kältekreis ist gar kein Thema."
      }
    ],
    checklist: [
      "Flusenfilter und Sockelfilter reinigen",
      "Lamellenpaket des Verdampfers prüfen",
      "Sensorflächen in der Trommel reinigen",
      "Schleuderdrehzahl der Waschmaschine prüfen",
      "Kondensatbehälter und Ablauf kontrollieren",
      "Geräusch und Programmphase notieren"
    ]
  },
  {
    slug: "reparatur-oder-neukauf",
    title: "Reparatur oder Neukauf: Wann lohnt sich eine Haushaltsgeräte-Reparatur?",
    description:
      "Nicht jede Reparatur lohnt sich, aber viele Geräte müssen nicht sofort ersetzt werden. Kriterien für eine wirtschaftliche Entscheidung.",
    category: "Ratgeber",
    readingTime: "4 Min.",
    date: "2026-03-17",
    dateModified: "2026-06-15",
    image: workshopImage,
    intro:
      "Die Frage ist selten, ob ein Gerät reparierbar ist — technisch geht fast immer etwas. Die Frage ist, ob es sich rechnet. Diese Entscheidung hängt an vier Größen: Reparaturkosten, Restlebensdauer, Energieverbrauch und Ihrem Nutzungsverhalten. Hier ist die Rechnung, die wir bei jedem Einsatz mit unseren Kund:innen aufmachen — bewusst mit den Fällen, in denen wir von einer Reparatur abraten.",
    sections: [
      {
        title: "Die Faustregel und ihre Grenzen",
        body:
          "Verbreitet ist die Regel, dass eine Reparatur bis etwa der Hälfte des Neupreises eines vergleichbaren Geräts sinnvoll ist. Als erste Orientierung taugt sie, sie unterschlägt aber zwei Dinge. Erstens die erwartete Restlebensdauer: Ein zehn Jahre alter Einstiegs-Geschirrspüler ist näher am Ende seiner Lebenszeit als eine gleich alte Maschine aus der oberen Preisklasse, die auf 5.000 Betriebsstunden gebaut ist. Zweitens den Vergleichspreis: Verglichen werden muss mit einem Gerät derselben Qualitätsklasse, nicht mit dem billigsten Aktionsangebot. Wer ein langlebiges Gerät gegen ein Einstiegsmodell tauscht, macht die Rechnung nur scheinbar besser."
      },
      {
        title: "Welche Teile fast immer lohnen",
        body:
          "Ein großer Teil unserer Einsätze betrifft Verschleißteile im überschaubaren Preisrahmen: Laugen- und Ablaufpumpen, Türschlösser und Türschalter, Heizstäbe, Antriebsriemen, Stoßdämpfer, Kohlebürsten bei älteren Motoren, Türdichtungen, Scharniere, Temperaturfühler, Thermostate, Abtauheizungen, Sprüharme und Zulaufventile. Diese Teile sind bei allen gängigen Marken beschaffbar, der Tausch ist kalkulierbar, und ein gepflegtes Gerät läuft danach oft Jahre weiter. Hier lohnt sich die Reparatur praktisch unabhängig vom Alter — auch weil sie eine Neuanschaffung um Jahre verschiebt und der ökologische Vorteil eindeutig ist."
      },
      {
        title: "Wo es teuer wird",
        body:
          "Drei Positionen kippen die Rechnung regelmäßig. Erstens Elektronikmodule und Displays: Bei einem günstigen Gerät erreicht ein Modul samt Arbeitszeit schnell die Hälfte des Neupreises, bei sehr alten Modellen ist es teils nicht mehr lieferbar. Zweitens Lagerschäden an Waschmaschinen, weil dafür der Bottich demontiert und je Bauart teils komplett getauscht werden muss. Drittens der geschlossene Kältekreis bei Kühl-, Gefrier- und Wärmepumpengeräten: Das Aggregat kommt nur komplett, und bei Einstiegsgeräten liegt der Aufwand fast immer über dem Neupreis. Bei diesen drei Befunden rechnen wir offen gegen ein Neugerät."
      },
      {
        title: "Energieverbrauch mitrechnen",
        body:
          "Bei einem Gerät, das dauerhaft schlecht arbeitet, gehört der Strom in die Rechnung. Ein Kühlgerät mit undichter Dichtung oder verstaubtem Verflüssiger läuft praktisch ohne Pause, ein Wärmepumpentrockner mit belegtem Verdampfer verlängert jede Ladung deutlich. Wichtig ist die Unterscheidung: Wenn dieser Zustand durch eine günstige Reparatur oder eine Reinigung behoben ist, sinkt der Verbrauch wieder — dann spricht das für die Reparatur, nicht dagegen. Nur wenn ein altes Gerät auch im intakten Zustand konstruktiv viel verbraucht, ist der Austausch das stärkere Argument, und zwar unabhängig vom aktuellen Defekt."
      },
      {
        title: "Was wir vor der Anfahrt klären",
        body:
          "Am wichtigsten ist die Modellnummer vom Typenschild, dazu Fehlercode und Fehlerbild. Damit prüfen wir Teilelage und Preisrahmen, bevor jemand fährt. Bei Geräten aus Aktionsserien oder aus der Zeit vor einem Markenwechsel sagen wir offen, wenn die Beschaffung länger dauert oder sich die Reparatur nicht rechnet — dann entsteht auch keine Anfahrt für ein Gerät, das wirtschaftlich aussichtslos ist. Diese Vorabklärung ist der Grund, warum ein kurzer Anruf mit Foto vom Typenschild oft mehr bringt als eine lange Beschreibung des Geräusches."
      },
      {
        title: "Und wenn Sie sich für ein neues Gerät entscheiden?",
        body:
          "Dann ist die Reparaturfähigkeit ein Kaufkriterium. Fragen Sie nach der Ersatzteilverfügbarkeit über die Nutzungsdauer, achten Sie auf zugängliche Verschleißteile und darauf, dass Heizung und Umwälzpumpe nicht in einer teuren gemeinsamen Baugruppe sitzen. Bei Einbaugeräten lohnt der Blick auf die Nische: Lässt sich das Gerät später ohne Beschädigung der Möbelfront herausziehen, und ist die Belüftung gegeben? Das entscheidet mit darüber, was eine Reparatur in fünf Jahren kostet. Wir beraten dazu auch dann, wenn wir am Neugerät nichts verdienen — eine ehrliche Empfehlung ist die günstigere Werbung."
      }
    ],
    checklist: [
      "Alter und Qualitätsklasse des Geräts",
      "Vergleichspreis eines gleichwertigen Neugeräts",
      "Ersatzteilkosten und Verfügbarkeit",
      "Häufigkeit früherer Fehler",
      "Energieverbrauch im intakten Zustand",
      "Sicherheitszustand von Anschluss und Gerät"
    ]
  },
  {
    slug: "garagentor-oeffnet-nicht",
    title: "Garagentor öffnet nicht: Ursachen von Handsender bis Antrieb",
    description:
      "Das Garagentor reagiert nicht, bleibt auf halber Höhe stehen oder läuft schwer? Die häufigsten Ursachen, sichere Sofortmaßnahmen und wann Fachhilfe nötig ist.",
    category: "Garagentore",
    readingTime: "4 Min.",
    date: "2026-04-14",
    dateModified: "2026-06-15",
    image: garageImage,
    intro:
      "Ein Garagentor fällt selten ohne Vorwarnung aus: Meist wird es vorher lauter, ruckelt oder braucht zwei Versuche. Wenn es dann gar nicht mehr reagiert, ist die Ursache oft harmlos — ein leerer Handsender, eine verschmutzte Lichtschranke, eine ausgelöste Sicherung. Bei Federn und Seilen hört die Selbsthilfe allerdings auf, und zwar aus einem guten Grund.",
    sections: [
      {
        title: "Handsender, Empfänger und Stromversorgung",
        body:
          "Tauschen Sie zuerst die Batterie des Handsenders und probieren Sie einen zweiten Sender oder den Wandtaster. Reagiert das Tor auf den Taster, aber nicht auf den Sender, ist es ein Funkthema: leere Batterie, verlorene Programmierung oder eine Funkstörung. Reagiert es auf nichts, prüfen Sie Sicherung und FI im Verteiler und ob die Steckdose an der Decke Spannung hat. Nach einem Stromausfall haben manche Antriebe ihre Endlagen verloren und brauchen einen Referenzlauf — das erklärt einen Teil der Fälle, in denen der Antrieb brummt, aber nichts passiert."
      },
      {
        title: "Lichtschranke und Sicherheitseinrichtungen",
        body:
          "Ein Tor, das aufgeht, aber nicht mehr zufährt oder kurz vor dem Boden wieder hochläuft, ist der klassische Lichtschrankenfall. Die beiden Linsen im unteren Bereich der Zargen brauchen Sichtkontakt: Spinnweben, Streusalzstaub, Laub, ein verrutschter Karton oder ein leicht verdrehter Halter reichen. Wischen Sie die Linsen sauber und prüfen Sie die Kontrollleuchten am Antrieb. Wichtig: Diese Einrichtungen sind Personenschutz. Sie zu überbrücken oder dauerhaft im Totmannbetrieb zu fahren, ist keine Lösung — bei einem Tor mit mehreren hundert Kilogramm Masse ist das ein echtes Risiko."
      },
      {
        title: "Kraftbegrenzung und Laufwerk",
        body:
          "Bleibt das Tor auf halber Höhe stehen und läuft ein Stück zurück, hat die Kraftbegrenzung angesprochen. Sie ist eine Sicherheitsfunktion und meldet, dass der Lauf schwerer geworden ist. Ursache sind meist trockene oder verschlissene Laufrollen, verschmutzte oder verbogene Laufschienen, ausgeschlagene Scharniere oder ein verzogenes Torblatt. Prüfen Sie die Schienen auf Verschmutzung und Beulen. Die Kraft am Antrieb einfach hochzudrehen, um das Symptom zu übergehen, ist der falsche Weg: Damit fährt das Tor gegen einen echten Widerstand, und aus einer Rollenreparatur wird ein Antriebsschaden."
      },
      {
        title: "Federn und Seile: Hände weg",
        body:
          "Torsions- und Zugfedern speichern die Energie, die das Torgewicht ausgleicht. Eine gebrochene Feder erkennt man an einem lauten Knall im Vorfeld, an einer sichtbaren Lücke in der Federwindung, an einem plötzlich sehr schweren Torblatt oder daran, dass das Tor in der Handentriegelung nicht mehr in Position bleibt. Genauso kritisch sind ausgefranste oder abgesprungene Tragseile. Diese Bauteile stehen unter hoher Spannung und haben schon schwere Verletzungen verursacht. Fahren Sie das Tor nicht weiter, benutzen Sie es nicht in Handbetrieb und sichern Sie den Bereich — solche Fälle nehmen wir vorrangig."
      },
      {
        title: "Handentriegelung richtig nutzen",
        body:
          "Fast jeder Antrieb hat eine Notentriegelung, oft ein rotes Zugseil am Laufwagen. Damit trennen Sie das Torblatt vom Antrieb und können es von Hand bewegen — hilfreich, wenn das Auto in der Garage steht. Zwei Punkte dazu: Erstens nur ziehen, wenn das Tor geschlossen oder sicher abgestützt ist, sonst kann es bei defekter Feder herunterfahren. Zweitens lässt sich ein Tor mit intakter Federspannung leicht mit einer Hand bewegen. Braucht es Kraft, ist das ein Federproblem und kein Antriebsproblem — dann bitte nicht weiter versuchen, sondern anrufen."
      },
      {
        title: "Wartung zahlt sich hier besonders aus",
        body:
          "Garagentore sind Verschleißmechanik mit vielen Lastwechseln. Eine Sichtprüfung mit Schmierung der Rollen und Lager, Kontrolle von Seilen, Federspannung, Kraftbegrenzung und Lichtschranke verhindert die meisten Ausfälle, und die Teile sind günstig, solange nichts Sekundäres beschädigt ist. Bei Gemeinschaftsgaragen in Wien kommt ein praktischer Punkt dazu: Ein defektes Tor betrifft alle Parteien, und die Abstimmung über Hausverwaltung oder Eigentümergemeinschaft braucht Zeit. Wer den Zustand dokumentiert, bekommt Reparaturen schneller freigegeben — wir liefern die Unterlagen dafür mit."
      }
    ],
    checklist: [
      "Batterie im Handsender tauschen",
      "Wandtaster gegenprobe",
      "Sicherung und FI prüfen",
      "Lichtschrankenlinsen reinigen",
      "Laufschienen und Rollen ansehen",
      "Bei Federbruch: Tor nicht bewegen"
    ]
  },
  {
    slug: "klimaanlage-kuehlt-nicht",
    title: "Klimaanlage kühlt nicht: Ursachen, Wartung und rechtliche Pflichten",
    description:
      "Wenn die Klimaanlage nicht kühlt, sind Filter, Verschmutzung oder Kältemittel im Spiel. Was Sie selbst prüfen können und welche Arbeiten Fachbetrieben vorbehalten sind.",
    category: "Klimageräte",
    readingTime: "4 Min.",
    date: "2026-05-19",
    dateModified: "2026-06-15",
    image: workshopImage,
    intro:
      "Klimaanlagen fallen fast immer im ungünstigsten Moment aus: in der ersten heißen Woche, wenn alle gleichzeitig anrufen. Dabei ist ein großer Teil der Fälle keine Störung, sondern die Folge einer ausgelassenen Wartung. Was Sie selbst tun können, ist überschaubar aber wirksam — und beim Kältemittel gibt es klare rechtliche Grenzen, die viele nicht kennen.",
    sections: [
      {
        title: "Filter und Luftweg zuerst",
        body:
          "Die häufigste Ursache für nachlassende Kühlleistung sind zugesetzte Filter im Innengerät. Sie sind bei Split-Anlagen hinter der Frontklappe zugänglich, lassen sich herausnehmen, absaugen und lauwarm abwaschen — trocken wieder einsetzen. Kontrollieren Sie zusätzlich, ob die Lamellen des Wärmetauschers verstaubt sind und ob das Außengerät frei steht: Laub, Pollen, eine zugewachsene Hecke oder ein zu enger Balkonkasten reduzieren den Luftdurchsatz massiv. Nach zwei Sommern in Wiener Innenstadtlage ist die Verschmutzung erfahrungsgemäß deutlich sichtbar. Diese Reinigung bringt in vielen Fällen die volle Leistung zurück, ohne dass ein Bauteil getauscht werden muss."
      },
      {
        title: "Wenn Kältemittel fehlt, ist etwas undicht",
        body:
          "Ein wichtiger Punkt, der oft falsch dargestellt wird: Eine korrekt installierte Klimaanlage verbraucht kein Kältemittel. Der Kreis ist geschlossen. Fehlt Kältemittel, gibt es eine Undichtheit — meist an Verschraubungen, Bördelverbindungen oder durch Vibrationsschäden an den Leitungen. Reines Nachfüllen ohne Lecksuche behebt das Symptom für eine Saison und ist fachlich falsch. Anzeichen für zu wenig Kältemittel sind Eisbildung an der Leitung des Innengeräts, deutlich schwächere Kühlleistung bei normal laufendem Gebläse und ein Außengerät, das ohne Pause arbeitet."
      },
      {
        title: "Arbeiten am Kältekreis sind Fachbetrieben vorbehalten",
        body:
          "Alles, was den Kältemittelkreis öffnet — Lecksuche, Befüllen, Absaugen, Entsorgen —, darf in Österreich nur zertifiziertes Personal ausführen. Grundlage sind die EU-F-Gase-Verordnung und ihre nationale Umsetzung, die Sachkundenachweise, Dichtheitsprüfungen und die Dokumentation der Kältemittelmengen vorschreiben. Für Anlagen ab bestimmten Füllmengen kommen wiederkehrende Prüfpflichten und Aufzeichnungen dazu. Praktisch heißt das: Filter reinigen und Außengerät freihalten können Sie selbst, alles am Kreis nicht. Aus dem Baumarktkanister nachzufüllen ist keine graue Zone, sondern rechtlich unzulässig und schadet der Anlage in der Regel."
      },
      {
        title: "Kondensat, Wasserflecken und Geruch",
        body:
          "Tropft Wasser aus dem Innengerät oder zeigt sich ein Fleck an der Wand darunter, ist meist die Kondensatableitung verstopft oder die Kondensatpumpe blockiert. Die Ablaufwanne setzt sich mit Staub und biologischem Belag zu, das Wasser läuft über. Muffiger Geruch beim Einschalten hat dieselbe Wurzel: feuchter Belag auf Wärmetauscher und Wanne. Beides ist ein klassischer Wartungsfall und günstig zu beheben, kann aber unbehandelt einen Wasserschaden verursachen. Bei Wandmontage über einem Fenster oder Möbelstück behandeln wir diese Meldungen deshalb mit Vorrang."
      },
      {
        title: "Fehlercodes und Elektrik",
        body:
          "Split-Anlagen melden Störungen als Blinkmuster an der Innengeräteanzeige oder als Code im Display der Fernbedienung; die Zuordnung ist herstellerspezifisch. Fotografieren Sie Anzeige und Typenschild von Innen- und Außengerät. Häufig sind Kommunikationsfehler zwischen den Geräten — Ursache ist dann oft die Verbindungsleitung oder eine korrodierte Klemmstelle im Außenbereich, nicht die Elektronik. Prüfen Sie vorab nur, ob Sicherung und FI eingeschaltet sind und ob eine Zeitschaltung oder ein falscher Betriebsmodus aktiv ist: Im Modus Lüften oder Entfeuchten kühlt die Anlage nicht, und genau das erklärt einen Teil der Anrufe."
      },
      {
        title: "Wartungsintervalle, die sich rechnen",
        body:
          "Für Wohnungs-Splitgeräte hat sich eine jährliche Wartung vor der Saison bewährt: Filter und Wärmetauscher reinigen, Kondensatweg prüfen, Dichtheit kontrollieren, Drücke und Temperaturen messen, elektrische Anschlüsse nachsehen. Das hält den Verbrauch niedrig, verlängert die Lebensdauer des Kompressors und findet eine Undichtheit, bevor die Anlage im Hochsommer stehen bleibt. Wer die Wartung im Frühjahr einplant, bekommt außerdem leichter einen Termin als im ersten Hitzeblock. Für gewerbliche Anlagen und größere Füllmengen kommen die vorgeschriebenen Dichtheitsprüfungen dazu, die wir mit Protokoll dokumentieren."
      }
    ],
    checklist: [
      "Filter im Innengerät reinigen",
      "Außengerät freistellen und Lamellen prüfen",
      "Betriebsmodus und Zeitschaltung kontrollieren",
      "Sicherung und FI prüfen",
      "Kondensatablauf auf Verstopfung ansehen",
      "Blinkmuster und Typenschild fotografieren"
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Verwandte Beiträge: gleiche Kategorie zuerst, dann die themennahen Kategorien,
 * zuletzt die aktuellsten übrigen Beiträge.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const candidates = blogPosts.filter((item) => item.slug !== post.slug);
  const priority = (item: BlogPost) => {
    if (item.category === post.category) return 0;
    const affinityIndex = categoryAffinity[post.category]?.indexOf(item.category) ?? -1;
    return affinityIndex >= 0 ? affinityIndex + 1 : Number.MAX_SAFE_INTEGER;
  };

  return candidates
    .sort((a, b) => {
      const byPriority = priority(a) - priority(b);
      if (byPriority !== 0) return byPriority;
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);
}
