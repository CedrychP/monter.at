import type { LocationPage } from "../locationPages";

/**
 * Die 23 Wiener Bezirke. Jeder Eintrag trägt eigenen Inhalt zu Baubestand,
 * Zugangssituation und typischen Einsätzen — genau die Punkte, die sich zwischen
 * Innerer Stadt, Ottakring und Donaustadt real unterscheiden.
 */
export const wienDistricts: LocationPage[] = [
  {
    regionSlug: "wien",
    slug: "innere-stadt",
    name: "Innere Stadt",
    postalCodes: ["1010"],
    metaTitle: "Gerätereparatur 1010 Wien: Innere Stadt | MONTER",
    description:
      "Reparatur von Haushaltsgeräten, Garagentoren und Klimageräten in der Inneren Stadt (1010). Termine mit Ladezonen-Planung, Erfahrung mit Altbau und Einbaugeräten.",
    h1: "Reparatur in der Inneren Stadt (1010).",
    short: "Altbau, enge Stiegenhäuser und Zufahrt nur mit Ladezonen-Planung.",
    intro:
      "Im ersten Bezirk entscheidet oft nicht das Gerät über die Termindauer, sondern der Weg dorthin. Fußgängerzonen, Einfahrtsbeschränkungen und knappe Ladezonen planen wir vorab ein, damit der Techniker mit Werkzeug und Ersatzteilen direkt zur Wohnung kommt.",
    character:
      "Der Baubestand ist überwiegend historisch bis gründerzeitlich, viele Häuser stehen unter Denkmalschutz. Stiegenhäuser sind eng, Lastenaufzüge selten, und Küchen sind häufig als hochwertige Einbaulösung ausgeführt. Dazu kommt ein hoher Anteil an gewerblicher Nutzung: Kanzleien, Ordinationen und Büros mit Teeküchen und Geschirrspülern im Dauereinsatz.",
    focus: [
      "Einbaugeräte in Designküchen — Ausbau ohne Beschädigung der Front",
      "Geschirrspüler in Büros und Ordinationen mit hoher Laufleistung",
      "Waschmaschinen in Altbauwohnungen mit alten Zulauf- und Abflussleitungen",
      "Klimageräte, bei denen ein Außengerät an der Fassade nicht zulässig ist"
    ],
    sections: [
      {
        title: "Zufahrt, Ladezone und Termin",
        body:
          "Sagen Sie bei der Anfrage, ob eine Ladezone vor dem Haus liegt und ob eine Einfahrtsgenehmigung nötig ist. In der Kernzone sind Halteplätze knapp, und ein Techniker, der 300 Meter mit Werkzeugkoffer und Ersatzteil laufen muss, verliert Zeit, die Ihnen verrechnet wird. Mit dieser Information legen wir den Termin in ein passendes Zeitfenster."
      },
      {
        title: "Klimageräte im denkmalgeschützten Bestand",
        body:
          "An geschützten Fassaden ist ein sichtbares Außengerät oft nicht genehmigungsfähig. Sinnvoll sind dann Monoblock-Geräte oder Lösungen mit Durchführung an einer nicht einsehbaren Seite oder zum Innenhof. Wir sagen Ihnen vorab, was technisch machbar ist — die Abklärung mit Hausverwaltung und Behörde bleibt bei Ihnen."
      }
    ],
    faq: [
      {
        question: "Was kostet die Anfahrt in den 1. Bezirk?",
        answer:
          "Wie in ganz Wien 80 € für Haushaltsgeräte und 110 € für Garagentor-Arbeiten, jeweils exklusive USt. und pro Einsatz. Für die Innere Stadt gibt es keinen Zuschlag, auch wenn die Zufahrt aufwendiger ist."
      },
      {
        question: "Können Einbaugeräte ausgebaut werden, ohne die Küche zu beschädigen?",
        answer:
          "In der Regel ja. Einbaugeräte sind an Blenden oder Seitenwänden verschraubt und lassen sich lösen. Bei sehr eng verbauten Nischen oder Steinarbeitsplatten sehen wir uns die Situation vor dem Ausbau an und sagen offen, wenn ein Tischler dazukommen sollte."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "leopoldstadt",
    name: "Leopoldstadt",
    postalCodes: ["1020"],
    metaTitle: "Gerätereparatur 1020 Wien: Leopoldstadt | MONTER",
    description:
      "Reparatur in der Leopoldstadt (1020): Karmeliterviertel, Nordbahnviertel und Stuwerviertel. Erfahrung mit Altbau und Neubau-Einbaugeräten, Termine für Vermieter.",
    h1: "Reparatur in der Leopoldstadt (1020).",
    short: "Gründerzeit im Karmeliterviertel, Neubau am Nordbahnhof.",
    intro:
      "Die Leopoldstadt zerfällt technisch in zwei Welten: Gründerzeithäuser rund um Karmeliter- und Stuwerviertel und die Neubauquartiere am Nordbahnhof und beim Viertel Zwei. Für die Reparatur macht das einen Unterschied, den wir schon am Telefon einordnen.",
    character:
      "Im Altbau sind Wasseranschluss und Abfluss oft älter als das Gerät — eine auslaufende Waschmaschine ist dort nicht zwangsläufig ein Gerätefehler. Im Neubau finden wir meist voll integrierte Einbaugeräte gleicher Baureihen, weil ganze Anlagen gemeinsam ausgestattet wurden. Der Bezirk hat außerdem einen hohen Anteil vermieteter Wohnungen, oft mit Kontaktperson statt Eigentümer vor Ort.",
    focus: [
      "Waschmaschinen im Altbau mit alten Zuläufen und Bodenabläufen",
      "Voll integrierte Einbaugeräte in Neubauanlagen",
      "Kühl- und Gefrierkombinationen, bei denen es dringend ist",
      "Termine für Vermieter und Hausverwaltungen mit Zugang über Dritte"
    ],
    sections: [
      {
        title: "Altbau und Neubau brauchen unterschiedliche Vorbereitung",
        body:
          "Im Gründerzeitbestand prüfen wir Zulauf, Abfluss und Aquastop mit, bevor Bauteile getauscht werden — sonst tritt der Fehler nach dem Teiletausch erneut auf. Im Neubau ist die Teileversorgung meist unkompliziert, dafür ist der Ausbau aus der Nische wegen der Möbelfront aufwendiger. Nennen Sie deshalb, ob das Gerät frei steht oder integriert ist."
      },
      {
        title: "Wenn Sie die Wohnung vermieten",
        body:
          "Wir brauchen eine Person vor Ort, die aufschließt und das Gerät zeigen kann, sowie eine Freigabe bis zu welchem Betrag reparieren dürfen, ohne erneut Rückfrage zu halten. Damit vermeiden Sie einen zweiten Termin, nur weil während des Einsatzes niemand entscheiden konnte."
      }
    ],
    faq: [
      {
        question: "Meine Waschmaschine im Altbau läuft aus. Ist das ein Gerätefehler?",
        answer:
          "Nicht immer. Häufig sind der Abfluss verlegt, die Zulaufdichtung porös oder der Wasserdruck zu hoch. Wir prüfen die Anschlusssituation mit, statt gleich die Pumpe zu tauschen — das wäre in solchen Fällen bezahlte Arbeit ohne Wirkung."
      },
      {
        question: "Kommen Sie auch in die Seestadt-nahen Neubauten am Nordbahnhof?",
        answer:
          "Ja, das gesamte 1020 ist Standardeinsatzgebiet. Bei Anlagen mit Tiefgarage und Schrankensystem sagen Sie bitte, wie die Zufahrt funktioniert oder wo oberirdisch gehalten werden kann."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "landstrasse",
    name: "Landstraße",
    postalCodes: ["1030"],
    metaTitle: "Gerätereparatur 1030 Wien: Landstraße | MONTER",
    description:
      "Reparatur auf der Landstraße (1030): Gründerzeit, Quartier Belvedere und die Neubauanlagen um den Hauptbahnhof. Termine auch über Hausverwaltungen.",
    h1: "Reparatur auf der Landstraße (1030).",
    short: "Gründerzeit neben großen Neubauanlagen rund um den Hauptbahnhof.",
    intro:
      "Der dritte Bezirk mischt gewachsenen Gründerzeitbestand mit den großen Neubauquartieren um Hauptbahnhof und Aspanggründe. Beides fahren wir regelmäßig an — die Vorbereitung unterscheidet sich aber deutlich.",
    character:
      "In den Neubauanlagen sind Geräte häufig in Serie verbaut: gleiche Marke, gleiche Baureihe, oft in mehreren hundert Wohnungen. Bei einem bekannten Serienfehler wissen wir dadurch schnell, welches Bauteil betroffen ist. Der Altbaubestand entlang der Landstraßer Hauptstraße bringt dagegen die klassischen Themen mit: enge Küchen, alte Anschlüsse, Stiegenhäuser ohne Lift.",
    focus: [
      "Einbaugeräte in Neubauanlagen mit einheitlicher Ausstattung",
      "Geschirrspüler und Waschmaschinen mit wiederkehrenden Fehlercodes",
      "Kühlgeräte in Wohnungen mit Fernwärme und dichter Bauweise",
      "Zugang über Hausverwaltung, Concierge oder Schlüsselsafe"
    ],
    sections: [
      {
        title: "Serienausstattung hat einen Vorteil",
        body:
          "Wenn in einer Anlage hundert gleiche Geschirrspüler stehen, kennen wir die typischen Schwachstellen dieser Baureihe. Nennen Sie bei der Anfrage die vollständige Modellnummer vom Typenschild — damit bringt der Techniker das wahrscheinlich benötigte Teil gleich mit, statt es nach der Diagnose zu bestellen."
      },
      {
        title: "Zugang in großen Wohnanlagen",
        body:
          "Bei Anlagen mit Tiefgarage, Schranken oder Concierge kostet ein unklarer Zugang leicht zwanzig Minuten. Sagen Sie uns, über welchen Stiegenaufgang die Wohnung erreichbar ist und ob jemand am Eingang öffnet. Bei Aufträgen über eine Hausverwaltung klären wir das direkt mit ihr."
      }
    ],
    faq: [
      {
        question: "Arbeiten Sie mit Hausverwaltungen zusammen?",
        answer:
          "Ja, das ist im dritten Bezirk Alltag. Wir nehmen den Auftrag von der Verwaltung an, stimmen den Termin mit dem Mieter ab und rechnen nach vereinbarter Freigabegrenze ab."
      },
      {
        question: "Mehrere Wohnungen im Haus haben denselben Gerätefehler. Bringt ein Sammeltermin was?",
        answer:
          "Ja, deutlich. Wenn wir mehrere Geräte im selben Haus an einem Termin abarbeiten, fällt die Anfahrt nur einmal an. Melden Sie das bitte gesammelt über die Hausverwaltung oder als Sammelanfrage."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "wieden",
    name: "Wieden",
    postalCodes: ["1040"],
    metaTitle: "Gerätereparatur 1040 Wien: Wieden | MONTER",
    description:
      "Reparatur auf der Wieden (1040): dichter Altbau, kleine Küchen und Waschmaschinen im Bad. Erfahrung mit Waschtrocknern und Geräten auf engem Raum.",
    h1: "Reparatur auf der Wieden (1040).",
    short: "Kleine Altbauwohnungen, Waschmaschine oft im Bad statt in der Küche.",
    intro:
      "Auf der Wieden ist Platz das bestimmende Thema. Viele Wohnungen im Freihausviertel und rund um die TU sind klein geschnitten, die Waschmaschine steht im Bad und die Küche ist eine schmale Einbauzeile.",
    character:
      "Waschmaschinen und Waschtrockner stehen hier oft unter dem Waschbecken oder in einer Nische, die kaum größer ist als das Gerät. Für die Reparatur bedeutet das: Zum Öffnen muss das Gerät meist herausgezogen werden, was mit Wasseranschluss und kurzem Schlauch heikel ist. Kombigeräte, die waschen und trocknen, sind hier überdurchschnittlich verbreitet — und wartungsanfälliger als getrennte Geräte.",
    focus: [
      "Waschtrockner mit Trocknungsproblemen und verstopftem Kondensatweg",
      "Geräte in Nischen, die zum Öffnen ausgebaut werden müssen",
      "Schmale Einbau-Geschirrspüler mit 45 cm Breite",
      "Kühlgeräte unter der Arbeitsplatte mit Belüftungsproblemen"
    ],
    sections: [
      {
        title: "Warum Waschtrockner häufiger Probleme machen",
        body:
          "Ein Kombigerät erledigt zwei Aufgaben in einer Trommel, und der Trocknungsteil arbeitet mit Kondensation über den Wasserkreislauf. Setzt sich dort Flusenschlamm ab, trocknet das Gerät schlechter, ohne einen Fehlercode zu zeigen. Wenn Wäsche feucht bleibt und die Laufzeit steigt, ist das oft kein Defekt, sondern eine Reinigung — das sagen wir Ihnen offen, statt ein Bauteil zu tauschen."
      },
      {
        title: "Platz für den Techniker",
        body:
          "Wenn das Gerät in einer engen Nische steht, hilft es, den Bereich davor freizuräumen und Handtuchhalter oder Wäschekörbe wegzunehmen. Bei sehr kurzen Anschlussschläuchen lässt sich ein Gerät manchmal nicht weit genug herausziehen — sagen Sie das vorab, dann bringen wir passendes Material mit."
      }
    ],
    faq: [
      {
        question: "Mein Waschtrockner trocknet schlecht, zeigt aber keinen Fehler. Lohnt ein Termin?",
        answer:
          "Meist ja, weil sich das oft mit einer Reinigung des Kondensatwegs und einer Prüfung des Flusensiebs beheben lässt. Wir sagen Ihnen am Telefon, was Sie selbst prüfen können — wenn das reicht, brauchen Sie keinen Termin."
      },
      {
        question: "Der Geschirrspüler ist nur 45 cm breit. Gibt es dafür Ersatzteile?",
        answer:
          "In der Regel ja. Schmale Geschirrspüler sind bei allen großen Marken verbreitet, die Teileversorgung ist mit der Modellnummer vom Typenschild gut abzudecken."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "margareten",
    name: "Margareten",
    postalCodes: ["1050"],
    metaTitle: "Gerätereparatur 1050 Wien: Margareten | MONTER",
    description:
      "Reparatur in Margareten (1050): dichter Gründerzeitbestand mit alten Anschlüssen, enge Innenhöfe. Wir prüfen Zulauf und Abfluss mit, bevor Teile getauscht werden.",
    h1: "Reparatur in Margareten (1050).",
    short: "Dichter Gründerzeitbestand, alte Anschlüsse, enge Innenhöfe.",
    intro:
      "Margareten ist ein Altbaubezirk mit hoher Dichte. Rund um die Reinprechtsdorfer Straße und den Margaretenplatz stehen überwiegend Gründerzeithäuser, in denen die Wasserinstallation oft mehrere Gerätegenerationen älter ist als das Gerät selbst.",
    character:
      "Viele Wohnungen sind nachträglich mit Bad und Küche ausgestattet worden. Zuläufe wurden dabei angestückelt, Abflüsse teilweise mit zu geringem Gefälle geführt. Wenn eine Waschmaschine nicht abpumpt oder Wasser am Boden steht, liegt die Ursache hier häufiger in der Installation als im Gerät.",
    focus: [
      "Waschmaschinen, die nicht abpumpen — Abfluss statt Pumpe als Ursache",
      "Geschirrspüler mit Wasseraustritt bei angestückeltem Zulauf",
      "Geräteanschluss nach einer Bad- oder Küchensanierung",
      "Kühlgeräte in Wohnungen ohne Belüftung hinter dem Möbel"
    ],
    sections: [
      {
        title: "Erst die Installation prüfen, dann das Gerät",
        body:
          "Ein Fehlercode für die Ablaufpumpe heißt nicht automatisch, dass die Pumpe defekt ist — er heißt, dass das Wasser nicht wegkommt. Wir prüfen deshalb Siphon, Ablaufschlauch und Höhe des Ablaufs mit. Wenn die Ursache in der Installation liegt, sagen wir das und tauschen kein funktionierendes Bauteil."
      },
      {
        title: "Zugang über Innenhof und Stiegenhaus",
        body:
          "In vielen Häusern liegt der Wohnungszugang über einen Innenhof oder ein Nebenstiegenhaus ohne Lift. Wenn ein Gerät getauscht oder ausgebaut werden muss, ist die Stockwerksangabe deshalb wichtig — mit ihr planen wir den Einsatz passend und kalkulieren die Zeit realistisch."
      }
    ],
    faq: [
      {
        question: "Der Fehlercode zeigt die Pumpe an. Muss die getauscht werden?",
        answer:
          "Nicht zwingend. Der Code bedeutet, dass das Gerät kein Wasser abpumpen konnte. Häufig sind Flusensieb, Ablaufschlauch oder Siphon verlegt. Erst wenn die Pumpe wirklich elektrisch oder mechanisch defekt ist, tauschen wir sie."
      },
      {
        question: "Nach der Badsanierung läuft die Maschine aus. Zahlt das jemand anderer?",
        answer:
          "Wenn die Ursache im Anschluss liegt, ist das eine Installationsfrage und keine Gerätereparatur. Wir dokumentieren, was wir vorgefunden haben — damit haben Sie eine Grundlage gegenüber dem ausführenden Betrieb."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "mariahilf",
    name: "Mariahilf",
    postalCodes: ["1060"],
    metaTitle: "Gerätereparatur 1060 Wien: Mariahilf | MONTER",
    description:
      "Reparatur in Mariahilf (1060): Altbau rund um die Mariahilfer Straße, knappe Ladezonen, Wohnungen über Geschäftslokalen. Termine mit Zufahrtsplanung.",
    h1: "Reparatur in Mariahilf (1060).",
    short: "Altbau rund um die Mariahilfer Straße, Zufahrt braucht Planung.",
    intro:
      "In Mariahilf liegt die größte Hürde häufig auf der Straße. Die Mariahilfer Straße ist Fußgängerzone, die Seitengassen sind schmal und Ladezonen sind knapp — das planen wir beim Termin mit ein.",
    character:
      "Der Bestand ist überwiegend gründerzeitlich, viele Wohnungen liegen über Geschäftslokalen und Gastronomie. Das bringt zwei Besonderheiten mit: Zum einen sind Lärm- und Zeitfenster begrenzt, zum anderen sind Steigleitungen und Abflüsse mit gewerblicher Nutzung im Haus stärker belastet. Wohnungsgrößen sind klein, Küchen meist als Einbauzeile ausgeführt.",
    focus: [
      "Einbaugeräte in schmalen Küchenzeilen",
      "Waschmaschinen und Geschirrspüler in Häusern mit Gastronomie im Erdgeschoss",
      "Kühlgeräte in Wohnungen mit wenig Luft hinter dem Möbel",
      "Termine mit begrenztem Zeitfenster wegen Zufahrt oder Hausordnung"
    ],
    sections: [
      {
        title: "Zufahrt und Terminfenster",
        body:
          "Sagen Sie bei der Anfrage die Gasse und ob dort eine Ladezone existiert. In der Umgebung der Mariahilfer Straße ist Halten tagsüber schwierig, weshalb wir Einsätze dort bevorzugt in ruhigere Zeitfenster legen. Das kostet Sie nichts extra, verhindert aber verlorene Zeit vor Ort."
      },
      {
        title: "Belastete Abflüsse in Mischnutzung",
        body:
          "Wo im Haus ein Gastronomiebetrieb sitzt, sind Abflussstränge stärker beansprucht und neigen zu Rückstau. Wenn Ihre Waschmaschine oder der Geschirrspüler Wasser zurückdrückt, prüfen wir deshalb auch die Ablaufsituation und nicht nur das Gerät."
      }
    ],
    faq: [
      {
        question: "Gibt es einen Zuschlag, weil die Zufahrt schwierig ist?",
        answer:
          "Nein. In Wien gelten 80 € Anfahrt für Haushaltsgeräte und 110 € für Garagentor-Arbeiten, exklusive USt., unabhängig vom Bezirk. Nur die tatsächliche Arbeitszeit vor Ort wird verrechnet."
      },
      {
        question: "Können Sie am Abend oder samstags kommen?",
        answer:
          "Termine außerhalb der Kernzeit sind nach Absprache möglich. Fragen Sie das gleich bei der Anfrage mit, dann sagen wir Ihnen, was frei ist und ob ein Aufschlag anfällt."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "neubau",
    name: "Neubau",
    postalCodes: ["1070"],
    metaTitle: "Gerätereparatur 1070 Wien: Neubau | MONTER",
    description:
      "Reparatur in Neubau (1070): kleine Altbauwohnungen am Spittelberg, Geräte in Nischen und Innenhofzugänge. Erfahrung mit Waschtrocknern auf engem Raum.",
    h1: "Reparatur in Neubau (1070).",
    short: "Kleine Altbauwohnungen, Geräte in Nischen, Zugang über Innenhöfe.",
    intro:
      "Der siebte Bezirk besteht fast vollständig aus Altbau, und die Wohnungen sind im Wiener Vergleich klein. Rund um Spittelberg und Neubaugasse heißt das: Geräte stehen dicht verbaut, und der Zugang führt oft über Innenhöfe und Stiegenhäuser ohne Lift.",
    character:
      "Viele Haushalte sind Ein- oder Zweipersonenhaushalte mit kompakten Geräten: 45 cm breite Geschirrspüler, Waschtrockner statt zweier Geräte, Kühlschränke unter der Arbeitsplatte. Diese Bauformen sind platzsparend, aber thermisch und mechanisch stärker belastet als Standardgeräte — Wartungsthemen treten deshalb früher auf.",
    focus: [
      "Kompaktgeräte und Waschtrockner mit hoher Auslastung",
      "Unterbau-Kühlgeräte mit zu wenig Belüftung",
      "Geräte, die zum Öffnen aus der Nische gezogen werden müssen",
      "Zugang über Innenhof, Nebenstiegenhaus oder Dachgeschoss"
    ],
    sections: [
      {
        title: "Kompaktgeräte halten weniger aus",
        body:
          "Ein Unterbau-Kühlschrank mit knapper Luftführung läuft heißer, ein Waschtrockner erledigt zwei Aufgaben in einer Trommel. Beides führt dazu, dass Verschleiß früher sichtbar wird. Bei der Diagnose schauen wir deshalb auch auf die Einbausituation und sagen Ihnen, ob ein Belüftungsproblem die eigentliche Ursache ist."
      },
      {
        title: "Dachgeschoss und Stiegenhaus",
        body:
          "Bei Dachgeschosswohnungen ohne Lift ist ein Gerätetausch aufwendig, und im Sommer kommt Hitze unter dem Dach dazu, die Kühlgeräte zusätzlich belastet. Nennen Sie Stockwerk und Liftsituation bei der Anfrage — damit planen wir den Einsatz mit realistischer Zeit."
      }
    ],
    faq: [
      {
        question: "Mein Kühlschrank unter der Arbeitsplatte wird nicht kalt genug. Ist er defekt?",
        answer:
          "Nicht unbedingt. Unterbaugeräte brauchen Luftzufuhr und -abfuhr; ist der Sockel verschlossen oder das Lüftungsgitter verstaubt, steigt die Temperatur. Das prüfen wir zuerst, bevor über Kältetechnik gesprochen wird."
      },
      {
        question: "Ich wohne im Dachgeschoss ohne Lift. Ist das ein Problem?",
        answer:
          "Für eine Reparatur nicht. Wenn ein Gerät getauscht oder abtransportiert werden muss, planen wir mehr Zeit und gegebenenfalls einen zweiten Mann ein — das sagen wir Ihnen vorher, damit es keine Überraschung auf der Rechnung gibt."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "josefstadt",
    name: "Josefstadt",
    postalCodes: ["1080"],
    metaTitle: "Gerätereparatur 1080 Wien: Josefstadt | MONTER",
    description:
      "Reparatur in der Josefstadt (1080): dichter Altbau, viele Ordinationen und Kanzleien, kaum Parkplatz. Termine für Wohnungen und gewerbliche Nutzung.",
    h1: "Reparatur in der Josefstadt (1080).",
    short: "Kleinster Bezirk, dichter Altbau, viele Ordinationen und Kanzleien.",
    intro:
      "Die Josefstadt ist der flächenmäßig kleinste Bezirk Wiens und durchgehend dicht bebaut. Neben Wohnungen betreuen wir hier viele Ordinationen, Kanzleien und Büros, in denen Geschirrspüler und Kühlgeräte im Dauerbetrieb laufen.",
    character:
      "Der Bestand ist überwiegend gründerzeitlich mit hohen Räumen und schmalen Stiegenhäusern. Parkplätze sind knapp, Ladezonen selten. In gewerblich genutzten Einheiten zählt vor allem, dass der Termin in einen Zeitraum fällt, der den Betrieb nicht blockiert — bei einer Ordination heißt das meist außerhalb der Öffnungszeiten.",
    focus: [
      "Geschirrspüler in Ordinationen und Kanzleien mit hoher Laufleistung",
      "Kühlgeräte, in denen temperaturkritische Waren lagern",
      "Waschmaschinen in Altbauwohnungen mit älteren Anschlüssen",
      "Termine in Zeitfenstern außerhalb von Öffnungszeiten"
    ],
    sections: [
      {
        title: "Gewerbliche Nutzung heißt andere Prioritäten",
        body:
          "In einer Ordination ist ein ausgefallenes Kühlgerät kein Komfortthema, sondern ein Betriebsrisiko. Solche Fälle behandeln wir vorrangig — sagen Sie am Telefon klar, dass temperaturkritische Waren betroffen sind. Bei planbaren Reparaturen legen wir den Termin in Ihre Randzeiten."
      },
      {
        title: "Anfahrt und Halten",
        body:
          "Im achten Bezirk ist Halten tagsüber schwierig. Wenn Sie wissen, wo eine Ladezone liegt oder ob eine Einfahrt genutzt werden kann, sagen Sie es bitte gleich mit. Das kürzt den Weg vom Fahrzeug zur Wohnung oder Ordination, und genau dieser Weg kostet sonst Arbeitszeit."
      }
    ],
    faq: [
      {
        question: "Betreuen Sie auch Geräte in Ordinationen und Büros?",
        answer:
          "Ja. Geschirrspüler, Kühlgeräte, Waschmaschinen und Klimageräte in gewerblich genutzten Einheiten sind Standard bei uns. Wir stellen auf Firma aus, wenn Sie die Daten bei der Anfrage angeben."
      },
      {
        question: "Wie schnell ist ein Termin in der Josefstadt möglich?",
        answer:
          "In Wien meist binnen ein bis zwei Werktagen. Dringende Fälle wie ein ausgefallenes Kühlgerät oder ein Wasseraustritt ziehen wir vor — rufen Sie dann direkt an, statt das Formular zu nutzen."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "alsergrund",
    name: "Alsergrund",
    postalCodes: ["1090"],
    metaTitle: "Gerätereparatur 1090 Wien: Alsergrund | MONTER",
    description:
      "Reparatur am Alsergrund (1090): Gründerzeitbestand, viele Wohngemeinschaften und Geräte mit hoher Auslastung. Termine für Mieter, Vermieter und Verwaltungen.",
    h1: "Reparatur am Alsergrund (1090).",
    short: "Gründerzeit rund um AKH und Universität, Geräte mit hoher Auslastung.",
    intro:
      "Rund um AKH, Universitätsinstitute und Studentenheime gibt es am Alsergrund einen hohen Anteil an Wohngemeinschaften und vermieteten Wohnungen. Geräte laufen dort deutlich mehr als im Durchschnittshaushalt — mit entsprechendem Verschleiß.",
    character:
      "Typisch sind ältere Waschmaschinen und Geschirrspüler, die von mehreren Personen genutzt werden, oft in Küchen, die nachträglich eingebaut wurden. Der Bestand ist überwiegend gründerzeitlich, viele Häuser ohne Lift. Weil oft nicht der Eigentümer vor Ort ist, hängt ein reibungsloser Termin an klaren Angaben zu Zugang und Kostenfreigabe.",
    focus: [
      "Waschmaschinen mit Lagerschaden durch hohe Laufleistung",
      "Geschirrspüler mit verkalkter Umwälzpumpe und Siebverstopfung",
      "Geräte in Wohngemeinschaften mit unklarer Zuständigkeit",
      "Aufträge über Vermieter und Hausverwaltungen"
    ],
    sections: [
      {
        title: "Hohe Nutzung verschiebt die Wirtschaftlichkeit",
        body:
          "Eine Maschine, die täglich zweimal läuft, erreicht ihre Lebensdauer in wenigen Jahren. Bei einem Lagerschaden ist die Reparatur oft teurer als sinnvoll, weil dabei die Trommeleinheit zerlegt werden muss. Wir sagen offen, wenn ein Austausch die vernünftigere Lösung ist — auch wenn wir daran nichts verdienen."
      },
      {
        title: "Zugang und Freigabe klären",
        body:
          "Wenn Sie als Vermieter beauftragen, brauchen wir eine Kontaktperson vor Ort und eine Obergrenze, bis zu der ohne Rückfrage reparieren dürfen. In Wohngemeinschaften ist zusätzlich hilfreich, wer den Techniker empfängt und das Gerät zeigen kann."
      }
    ],
    faq: [
      {
        question: "Wann lohnt eine Reparatur bei einem stark genutzten Gerät nicht mehr?",
        answer:
          "Als Faustregel: wenn die Reparaturkosten die Hälfte eines vergleichbaren Neugeräts erreichen und das Gerät älter als acht bis zehn Jahre ist. Bei Lager- oder Elektronikschäden sind wir schnell in diesem Bereich. Wir schätzen das möglichst schon am Telefon ein."
      },
      {
        question: "Ich bin Mieter. Wer beauftragt die Reparatur?",
        answer:
          "Bei mitvermieteten Geräten ist üblicherweise der Vermieter zuständig, bei eigenen Geräten Sie selbst. Wir können in beiden Konstellationen arbeiten — sagen Sie einfach, an wen die Rechnung geht."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "favoriten",
    name: "Favoriten",
    postalCodes: ["1100"],
    metaTitle: "Gerätereparatur 1100 Wien: Favoriten | MONTER",
    description:
      "Reparatur in Favoriten (1100): Gründerzeit, Gemeindebau und Neubau im Sonnwendviertel. Waschmaschinen, Geschirrspüler und Kühlgeräte für Familien und Verwaltungen.",
    h1: "Reparatur in Favoriten (1100).",
    short: "Gründerzeit, Gemeindebau und Neubau im Sonnwendviertel.",
    intro:
      "Favoriten ist der bevölkerungsreichste Bezirk Wiens und einer unserer häufigsten Einsatzorte. Der Bezirk deckt fast alle Bauformen ab: Gründerzeit rund um den Reumannplatz, große Gemeindebauanlagen und Neubau im Sonnwendviertel.",
    character:
      "Der Familienanteil ist hoch, entsprechend laufen Waschmaschinen und Geschirrspüler stärker als im Durchschnitt — bei Vollwaschmaschinen mit acht oder neun Kilo Ladung sind mehrere Durchgänge pro Tag üblich. In den Gemeindebauanlagen finden wir häufig Geräte, die frei stehen statt eingebaut sind, was Reparaturen einfacher macht. Im Sonnwendviertel dominieren integrierte Neubaugeräte.",
    focus: [
      "Vollwaschmaschinen mit hoher Beladung und Verschleiß an Lager und Stoßdämpfern",
      "Geschirrspüler mit Verkalkung durch Dauerbetrieb",
      "Kühl- und Gefriergeräte, bei denen Vorräte gefährdet sind",
      "Aufträge über Hausverwaltungen großer Anlagen"
    ],
    sections: [
      {
        title: "Familienhaushalte belasten Geräte anders",
        body:
          "Wo täglich mehrmals gewaschen wird, treten Lagerschäden, ausgeschlagene Stoßdämpfer und Heizstabdefekte früher auf. Ein laut werdendes Gerät beim Schleudern ist dafür das typische Frühzeichen. Melden Sie sich dann früher als später — ein beginnender Lagerschaden ist noch reparabel, ein abgerissenes Lager beschädigt oft die Trommeleinheit."
      },
      {
        title: "Große Anlagen, mehrere Geräte",
        body:
          "In den größeren Wohnhausanlagen des Bezirks stehen häufig gleiche Gerätetypen. Wenn mehrere Wohnungen betroffen sind, bündeln wir Termine im selben Haus, wodurch die Anfahrt nur einmal anfällt. Für Hausverwaltungen ist das der übliche Weg."
      }
    ],
    faq: [
      {
        question: "Meine Waschmaschine ist beim Schleudern laut. Kann man das noch reparieren?",
        answer:
          "Oft ja, wenn Sie früh reagieren. Laute Geräusche beim Schleudern deuten auf Lager oder Stoßdämpfer hin. Solange die Trommel noch nicht beschädigt ist, ist der Tausch der Verschleißteile machbar. Wird weitergewaschen, bis das Lager ausschlägt, wird es meist unwirtschaftlich."
      },
      {
        question: "Mein Tiefkühlgerät ist ausgefallen. Wie schnell kommen Sie?",
        answer:
          "Solche Fälle ziehen wir vor, weil dabei Lebensmittel im Wert von einigen hundert Euro auf dem Spiel stehen. Rufen Sie direkt an, statt das Formular zu nutzen, und sagen Sie, dass es dringend ist."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "simmering",
    name: "Simmering",
    postalCodes: ["1110"],
    metaTitle: "Gerätereparatur 1110 Wien: Simmering | MONTER",
    description:
      "Reparatur in Simmering (1110): Gemeindebauanlagen, Neubau um die Gasometer und Einfamilienhäuser in Kaiserebersdorf. Auch Garagentore und Klimageräte.",
    h1: "Reparatur in Simmering (1110).",
    short: "Gemeindebau, Neubau bei den Gasometern, Häuser in Kaiserebersdorf.",
    intro:
      "Simmering mischt große Wohnhausanlagen mit Einfamilienhausgebieten in Kaiserebersdorf und Neubau rund um die Gasometer. Dadurch reicht das Spektrum von der freistehenden Waschmaschine im Gemeindebau bis zum Garagentor am eigenen Haus.",
    character:
      "In den Anlagen sind Geräte meist frei aufgestellt, was Reparaturen unkompliziert macht. In den Hausgebieten kommen Garagentore, Antriebe und gelegentlich Klimaanlagen dazu. Ein Simmering-Thema ist außerdem die Kellernutzung: Waschmaschinen und Gefriergeräte stehen häufig im Keller, wo Feuchtigkeit und Temperatur die Geräte anders beanspruchen.",
    focus: [
      "Waschmaschinen und Gefriergeräte in Kellerräumen",
      "Garagentorantriebe an Einfamilienhäusern",
      "Geräte in Wohnhausanlagen mit Auftrag über die Verwaltung",
      "Klimageräte in Neubauwohnungen und Reihenhäusern"
    ],
    sections: [
      {
        title: "Geräte im Keller",
        body:
          "Im Keller sind Luftfeuchtigkeit und Temperatur oft ungünstig. Bei Waschmaschinen führt das zu Korrosion an Kontakten und Elektronik, bei Gefriergeräten arbeitet der Kompressor bei Kälte teils schlechter, weil die Regelung für Wohnraumtemperatur ausgelegt ist. Wenn ein Gerät im Keller steht, sagen Sie es bei der Anfrage — das ändert die Verdachtsdiagnose."
      },
      {
        title: "Garagentore in den Hausgebieten",
        body:
          "Bei Toren prüfen wir zuerst, ob sich das Tor von Hand bewegen lässt. Lässt es sich leicht bewegen, liegt der Fehler meist am Antrieb, an der Elektronik oder an den Endlagen. Ist es schwer, sind Federn, Laufrollen oder Seile die Ursache — das ist eine Sicherheitsfrage, weil gespannte Federn erhebliche Kräfte halten."
      }
    ],
    faq: [
      {
        question: "Betreuen Sie Garagentore auch an Einfamilienhäusern in Simmering?",
        answer:
          "Ja. Sektionaltore, Schwing- und Kipptore sowie die üblichen Antriebe sind Standard bei uns. Die Anfahrt für Torarbeiten beträgt in Wien 110 € exklusive USt."
      },
      {
        question: "Meine Waschmaschine im Keller zeigt wechselnde Fehler. Woran liegt das?",
        answer:
          "Wechselnde, nicht reproduzierbare Fehler deuten oft auf Feuchtigkeit an Steckkontakten oder der Steuerung hin. Notieren Sie die Codes, die auftreten — mit dieser Liste lässt sich das Muster deutlich schneller einordnen."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "meidling",
    name: "Meidling",
    postalCodes: ["1120"],
    metaTitle: "Gerätereparatur 1120 Wien: Meidling | MONTER",
    description:
      "Reparatur in Meidling (1120): Gründerzeit an der Meidlinger Hauptstraße, Gemeindebau und Hetzendorfer Hausgebiete. Haushaltsgeräte, Tore und Klimageräte.",
    h1: "Reparatur in Meidling (1120).",
    short: "Gründerzeit, Gemeindebau und die Hausgebiete um Hetzendorf.",
    intro:
      "Meidling reicht vom dichten Gründerzeitgürtel rund um die Meidlinger Hauptstraße bis zu den ruhigen Hausgebieten in Hetzendorf und Altmannsdorf. Beides bedienen wir regelmäßig, mit unterschiedlichem Schwerpunkt.",
    character:
      "Im nördlichen Bezirksteil dominieren Altbauwohnungen mit nachgerüsteten Küchen und Bädern — dort sind Anschlussthemen häufig. Im Süden stehen Einfamilien- und Reihenhäuser mit eigenen Garagen, Waschküchen und teils Klimaanlagen. Wegen der Hanglage Richtung Wienerberg sind manche Grundstückszufahrten steil, was Torantriebe stärker belastet.",
    focus: [
      "Waschmaschinen und Geschirrspüler im Altbau mit nachgerüstetem Anschluss",
      "Torantriebe an steilen Einfahrten mit hoher Belastung",
      "Waschküchen im Haus mit älteren Geräten",
      "Klimageräte in Reihenhäusern und Dachgeschossen"
    ],
    sections: [
      {
        title: "Steile Einfahrten belasten Torantriebe",
        body:
          "Wo die Einfahrt abschüssig ist, arbeitet der Antrieb gegen mehr Gewicht und die Endlagen verstellen sich schneller. Typische Zeichen sind ein Tor, das kurz vor dem Schließen wieder auffährt, oder eines, das nicht mehr ganz dicht schließt. Meist sind Endlagen, Kraftregelung oder verschlissene Laufrollen die Ursache — nicht der ganze Antrieb."
      },
      {
        title: "Altbau im nördlichen Meidling",
        body:
          "In den Gründerzeithäusern entlang der Hauptstraße wurden Küchen und Bäder oft nachträglich installiert. Wenn ein Gerät Wasser verliert oder nicht abpumpt, prüfen wir deshalb zuerst Zulauf, Siphon und Ablaufhöhe. Ein Bauteiltausch ohne diese Prüfung behebt den Fehler in solchen Fällen nicht dauerhaft."
      }
    ],
    faq: [
      {
        question: "Mein Garagentor fährt kurz vor dem Schließen wieder auf. Was ist das?",
        answer:
          "Meist eine verstellte Endlage oder eine zu empfindliche Kraftabschaltung, manchmal ein verschmutzter Lichtschranke-Sensor. Das ist in der Regel eine Einstellungs- und Wartungsarbeit und kein Antriebstausch."
      },
      {
        question: "Kommen Sie auch nach Hetzendorf und Altmannsdorf?",
        answer:
          "Ja, ganz 1120 ist Standardeinsatzgebiet mit 80 € Anfahrt für Haushaltsgeräte und 110 € für Torarbeiten, jeweils exklusive USt."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "hietzing",
    name: "Hietzing",
    postalCodes: ["1130"],
    metaTitle: "Gerätereparatur 1130 Wien: Hietzing | MONTER",
    description:
      "Reparatur in Hietzing (1130): Villen und Einfamilienhäuser, hochwertige Einbaugeräte, eigene Garagen. Service für Miele, Gaggenau, Liebherr und Garagentore.",
    h1: "Reparatur in Hietzing (1130).",
    short: "Villen und Häuser mit hochwertigen Einbaugeräten und eigenen Garagen.",
    intro:
      "Hietzing ist ein Bezirk der Einfamilienhäuser und Villen, von Ober-St.-Veit über Speising bis Lainz. Für uns heißt das: hochwertige Einbaugeräte, eigene Garagen mit Torantrieben und häufiger auch Klimaanlagen.",
    character:
      "In den Küchen finden wir überwiegend fest integrierte Geräte, oft von Miele, Gaggenau, Liebherr, Neff oder Siemens, teils in Kombination mit Steinarbeitsplatten und maßgefertigten Fronten. Der Ausbau will hier sorgfältig gemacht sein. Bei den Häusern kommen Garagentore samt Antrieb, Waschküchen im Keller und Gartenbewässerung als Umfeld dazu.",
    focus: [
      "Hochwertige Einbaugeräte mit aufwendigem Ausbau",
      "Garagentore und Antriebe an privaten Einfahrten",
      "Kühl- und Weinklimageräte mit Temperaturthemen",
      "Split-Klimaanlagen mit Wartung und Kältemittelprüfung"
    ],
    sections: [
      {
        title: "Hochwertige Einbaugeräte lohnen die Reparatur länger",
        body:
          "Bei Geräten dieser Preisklasse verschiebt sich die Wirtschaftlichkeitsrechnung: Ein Miele-Geschirrspüler oder ein Liebherr-Kühlgerät ist auch nach zehn Jahren häufig noch reparaturwürdig, weil Ersatzteile lange verfügbar bleiben und der Wiederbeschaffungswert hoch ist. Wir sagen Ihnen konkret, wie die Rechnung in Ihrem Fall aussieht."
      },
      {
        title: "Tor, Antrieb und Sicherheit",
        body:
          "Bei Garagentoren an Privathäusern sind Federbruch, verschlissene Seile und ausgelaufene Laufrollen die häufigsten mechanischen Themen. Wichtig ist die Sicherheitsfrage: Ein Tor mit gebrochener Feder kann beim Öffnen abstürzen. Wenn sich Ihr Tor von Hand nur noch schwer bewegen lässt, benutzen Sie den Antrieb bitte nicht weiter und melden sich."
      }
    ],
    faq: [
      {
        question: "Reparieren Sie auch Gaggenau- und Miele-Einbaugeräte?",
        answer:
          "Ja. Bei hochwertigen Einbaugeräten ist die Teileversorgung meist über viele Jahre gegeben. Nennen Sie Marke und vollständige Modellnummer vom Typenschild, dann klären wir vorab, ob das benötigte Teil verfügbar ist."
      },
      {
        question: "Meine Split-Klimaanlage kühlt schwächer als früher. Was ist zu tun?",
        answer:
          "Meist ist eine Wartung fällig: Filter und Verdampfer reinigen, Kondensatablauf prüfen, Kältemittelfüllung kontrollieren. Nachlassende Leistung ist selten ein Defekt, sondern die Folge ausgebliebener Wartung."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "penzing",
    name: "Penzing",
    postalCodes: ["1140"],
    metaTitle: "Gerätereparatur 1140 Wien: Penzing | MONTER",
    description:
      "Reparatur in Penzing (1140): Gründerzeit an der Linzer Straße, Häuser in Hütteldorf und Hadersdorf. Haushaltsgeräte, Garagentore und Klimageräte.",
    h1: "Reparatur in Penzing (1140).",
    short: "Gründerzeit an der Linzer Straße, Häuser in Hütteldorf und Hadersdorf.",
    intro:
      "Penzing ist ein langgezogener Bezirk: dicht bebaut entlang der Linzer Straße, mit Hausgebieten in Hütteldorf, Hadersdorf und Weidlingau am westlichen Ende. Innerhalb des Bezirks liegen dadurch längere Wege als in den Innenbezirken.",
    character:
      "Der Ostteil bringt die typischen Altbauthemen mit — nachgerüstete Küchen, alte Zuläufe, Stiegenhäuser ohne Lift. Im Westen dominieren Einfamilienhäuser mit Garagen, Waschküchen und Gefriergeräten im Keller. Wegen der Randlage am Wienerwald sind Grundstückszufahrten oft steiler und länger, was bei Torantrieben und der Zufahrt mit dem Servicefahrzeug relevant ist.",
    focus: [
      "Haushaltsgeräte im Gründerzeitbestand entlang der Linzer Straße",
      "Garagentore und Antriebe an längeren, teils steilen Einfahrten",
      "Gefrier- und Waschgeräte in Kellerräumen",
      "Klimageräte in Dachgeschossen und Häusern am Waldrand"
    ],
    sections: [
      {
        title: "Adresse genau nennen",
        body:
          "Zwischen Penzing und Weidlingau liegen mehrere Kilometer. Für die Terminplanung ist die genaue Adresse deshalb wichtiger als in einem kleinen Innenbezirk — wir bündeln Einsätze in derselben Richtung und können Ihnen so ein realistisches Zeitfenster nennen statt eines vagen Halbtags."
      },
      {
        title: "Häuser am Waldrand",
        body:
          "In den westlichen Gebieten sind Laub und Feuchtigkeit ein Faktor: Torlaufschienen setzen sich zu, Kondensatabläufe von Klimaanlagen verlegen sich, und Außeneinheiten stehen näher an Bewuchs. Eine regelmäßige Reinigung verhindert dort mehr Störungen als jede Reparatur."
      }
    ],
    faq: [
      {
        question: "Kommen Sie auch nach Hadersdorf und Weidlingau?",
        answer:
          "Ja, der gesamte 14. Bezirk zählt zum Wiener Einsatzgebiet mit den Wiener Anfahrtssätzen. Nennen Sie die genaue Adresse, damit wir den Termin passend zur Fahrtrichtung legen."
      },
      {
        question: "Mein Tor läuft rau und quietscht. Reicht eine Wartung?",
        answer:
          "Häufig ja. Verschmutzte Laufschienen, trockene Rollen und verstellte Endlagen sind die üblichen Ursachen. Eine Wartung ist deutlich günstiger als das Auswechseln von Bauteilen, die durch die Reibung sonst tatsächlich kaputtgehen."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "rudolfsheim-fuenfhaus",
    name: "Rudolfsheim-Fünfhaus",
    postalCodes: ["1150"],
    metaTitle: "Gerätereparatur 1150 Wien: Rudolfsheim-Fünfhaus | MONTER",
    description:
      "Reparatur in Rudolfsheim-Fünfhaus (1150): dichter Altbau rund um den Westbahnhof, hoher Mietanteil, alte Anschlüsse. Termine auch über Vermieter.",
    h1: "Reparatur in Rudolfsheim-Fünfhaus (1150).",
    short: "Dichter Altbau am Westbahnhof, hoher Mietanteil, alte Anschlüsse.",
    intro:
      "Der fünfzehnte Bezirk ist dicht bebaut und hat einen der höchsten Mietwohnungsanteile Wiens. Ein großer Teil des Bestands ist gründerzeitlich, mit Küchen und Bädern, die nachträglich eingebaut wurden.",
    character:
      "Wasserinstallationen sind hier häufig älter und teils angestückelt, Elektroinstallationen manchmal knapp abgesichert. Bei Waschmaschinen und Geschirrspülern liegt die Ursache eines Fehlers deshalb überdurchschnittlich oft nicht im Gerät. Weil viele Wohnungen vermietet sind, laufen Aufträge häufig über Eigentümer oder Verwaltungen, während der Mieter vor Ort ist.",
    focus: [
      "Wasseraustritt und Ablaufprobleme durch alte Installationen",
      "Geräte, die die Sicherung auslösen — Absicherung statt Gerätedefekt",
      "Ältere Waschmaschinen mit Verschleiß an Lager und Heizstab",
      "Aufträge von Vermietern mit Mieter als Kontaktperson"
    ],
    sections: [
      {
        title: "Wenn die Sicherung fällt",
        body:
          "Löst beim Waschen oder Spülen der Fehlerstromschutzschalter aus, ist das oft ein Hinweis auf einen defekten Heizstab — kann aber auch an einer knapp bemessenen Absicherung liegen, wenn mehrere Geräte am gleichen Stromkreis hängen. Wir messen das Gerät durch und sagen Ihnen, ob die Ursache im Gerät oder in der Installation liegt."
      },
      {
        title: "Aufträge über Vermieter",
        body:
          "Wir brauchen drei Dinge, damit ein Termin in einer vermieteten Wohnung glatt läuft: eine Kontaktperson vor Ort, eine Kostenfreigabe bis zu einer Obergrenze und die Rechnungsadresse. Ohne Freigabe müssen wir während des Einsatzes rückfragen, und im schlechtesten Fall braucht es einen zweiten Termin."
      }
    ],
    faq: [
      {
        question: "Beim Waschen fliegt die Sicherung. Ist das Gerät kaputt?",
        answer:
          "Häufig ist es der Heizstab, der einen Kriechstrom entwickelt. Es kann aber auch die Installation sein. Das lässt sich vor Ort messen — deshalb steht bei uns die Diagnose vor jedem Teiletausch."
      },
      {
        question: "Ich bin Vermieter und wohne nicht in Wien. Geht das trotzdem?",
        answer:
          "Ja. Wir stimmen den Termin mit Ihrem Mieter ab, halten Sie über Diagnose und Kosten auf dem Laufenden und stellen die Rechnung an Sie. Nennen Sie uns dafür eine Freigabegrenze."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "ottakring",
    name: "Ottakring",
    postalCodes: ["1160"],
    metaTitle: "Gerätereparatur 1160 Wien: Ottakring | MONTER",
    description:
      "Reparatur in Ottakring (1160): Gründerzeit am Gürtel, Hanglage Richtung Wilhelminenberg, alte Steigleitungen. Haushaltsgeräte, Tore und Klimageräte.",
    h1: "Reparatur in Ottakring (1160).",
    short: "Gründerzeit am Gürtel, Hanglage Richtung Wilhelminenberg.",
    intro:
      "Ottakring steigt vom dicht bebauten Gürtelbereich bis zum Wilhelminenberg an. Unten dominiert Gründerzeitbestand mit hoher Dichte, oben werden die Häuser größer und es kommen Garagen und Gärten dazu.",
    character:
      "Im unteren Bezirksteil sind Steigleitungen und Abflüsse oft alt, und der Wasserdruck schwankt je nach Stockwerk. Das wirkt sich auf Waschmaschinen und Geschirrspüler aus: Zulaufventile und Drucksensoren melden Fehler, obwohl das Gerät intakt ist. In den höheren Lagen sind eigene Garagen, Waschküchen und gelegentlich Klimaanlagen die häufigeren Themen.",
    focus: [
      "Zulauffehler durch schwankenden Wasserdruck in oberen Stockwerken",
      "Waschmaschinen und Geschirrspüler in älteren Altbauküchen",
      "Garagentore in den Hausgebieten am Hang",
      "Kühlgeräte in Dachgeschosswohnungen mit Sommerhitze"
    ],
    sections: [
      {
        title: "Wasserdruck als unterschätzte Fehlerquelle",
        body:
          "Wenn Ihr Gerät einen Zulauffehler meldet, ist das Ventil nicht automatisch defekt. In Altbauten mit alten Steigleitungen kommt in höheren Stockwerken teilweise zu wenig Druck an, besonders zu Zeiten hoher Entnahme im Haus. Wir prüfen den Druck und das Sieb im Zulauf, bevor ein Ventil getauscht wird."
      },
      {
        title: "Dachgeschoss im Sommer",
        body:
          "Unter dem Dach werden im Sommer schnell über 30 Grad erreicht. Kühl- und Gefriergeräte laufen dann dauerhaft an ihrer Leistungsgrenze, was wie ein Defekt wirkt. Wir prüfen in solchen Fällen Aufstellort, Belüftung und Dichtungen — oft ist das die Lösung, nicht die Kältetechnik."
      }
    ],
    faq: [
      {
        question: "Das Gerät meldet, dass kein Wasser kommt. Muss das Ventil getauscht werden?",
        answer:
          "Nicht unbedingt. Prüfen Sie zuerst, ob der Absperrhahn ganz offen ist und ob das Sieb im Zulaufschlauch verkalkt ist. Bleibt der Fehler, messen wir den Druck am Anschluss, bevor wir ein Bauteil tauschen."
      },
      {
        question: "Mein Kühlschrank läuft im Sommer dauernd. Ist er defekt?",
        answer:
          "Bei hoher Raumtemperatur, besonders im Dachgeschoss, ist Dauerlauf oft normal. Wir prüfen Türdichtung, Belüftung hinter dem Gerät und die Temperatureinstellung. Erst wenn das passt und die Kühlleistung trotzdem fehlt, geht es um Kältetechnik."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "hernals",
    name: "Hernals",
    postalCodes: ["1170"],
    metaTitle: "Gerätereparatur 1170 Wien: Hernals | MONTER",
    description:
      "Reparatur in Hernals (1170): Altbau an der Hernalser Hauptstraße, Hanglagen in Dornbach und Neuwaldegg. Haushaltsgeräte, Garagentore und Klimageräte.",
    h1: "Reparatur in Hernals (1170).",
    short: "Altbau an der Hauptstraße, Hanglagen in Dornbach und Neuwaldegg.",
    intro:
      "Hernals zieht sich von der dicht bebauten Hernalser Hauptstraße hinauf nach Dornbach und Neuwaldegg. Mit der Höhe ändern sich die Bauform und damit auch die typischen Einsätze.",
    character:
      "Im unteren Bereich stehen Gründerzeithäuser mit nachträglich eingebauten Küchen. Weiter oben gibt es Einfamilienhäuser und Villen mit eigenen Einfahrten, die wegen der Hanglage oft steil ausfallen. Für Garagentore heißt das mehr Last auf Antrieb und Federn; für Servicefahrzeuge heißt es, dass die Zufahrt vorab geklärt sein sollte.",
    focus: [
      "Haushaltsgeräte im Altbau mit älteren Anschlüssen",
      "Torantriebe an steilen Hangeinfahrten",
      "Waschküchen und Gefriergeräte in Hauskellern",
      "Klimageräte in Dachgeschossen und Wintergärten"
    ],
    sections: [
      {
        title: "Hanglage und Torantrieb",
        body:
          "An abschüssigen Einfahrten muss ein Antrieb mehr Gewicht halten, und Federn arbeiten unter höherer Spannung. Typische Folgen sind nachlassende Endlagen, ein Tor das nicht ganz schließt, oder gebrochene Federn. Bewegen Sie ein Tor, das sich von Hand schwer anhebt, nicht mit dem Antrieb weiter — das ist der Punkt, an dem aus einem Wartungsfall ein Sicherheitsproblem wird."
      },
      {
        title: "Zufahrt für den Servicewagen",
        body:
          "In den Hanglagen sind manche Straßen eng und Wendemöglichkeiten selten. Wenn Sie sagen können, wo gehalten werden kann, ist der Termin für alle einfacher — insbesondere dann, wenn ein Gerät getauscht oder abtransportiert wird."
      }
    ],
    faq: [
      {
        question: "Mein Tor schließt nicht mehr ganz. Was ist die Ursache?",
        answer:
          "Meist eine verstellte untere Endlage oder eine Kraftabschaltung, die zu früh greift, häufig nach Temperaturwechseln. Das ist eine Einstellarbeit. Wenn zusätzlich das Tor schwer von Hand läuft, sehen wir uns Federn und Rollen an."
      },
      {
        question: "Gilt der Wiener Anfahrtssatz auch in Neuwaldegg?",
        answer:
          "Ja. Ganz 1170 zählt zum Wiener Einsatzgebiet: 80 € Anfahrt für Haushaltsgeräte, 110 € für Torarbeiten, jeweils exklusive USt."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "waehring",
    name: "Währing",
    postalCodes: ["1180"],
    metaTitle: "Gerätereparatur 1180 Wien: Währing | MONTER",
    description:
      "Reparatur in Währing (1180): Cottageviertel mit Villen, Gründerzeit rund um die Gentzgasse. Hochwertige Einbaugeräte, Garagentore und Klimageräte.",
    h1: "Reparatur in Währing (1180).",
    short: "Cottageviertel mit Villen, Gründerzeit rund um die Gentzgasse.",
    intro:
      "Währing verbindet gründerzeitliche Wohnstraßen rund um Gentzgasse und Kutschkermarkt mit dem Cottageviertel, in dem Villen und große Einzelhäuser stehen. Das Spektrum reicht entsprechend von der Altbauküche bis zur voll ausgestatteten Hausküche mit Garage.",
    character:
      "In den Villen und Cottagehäusern finden wir häufig hochwertige Einbaugeräte, teils mit Sonderformaten wie Weinklimaschränken, Dampfgarern und großen Side-by-Side-Kühlgeräten. Der Ausbau erfordert Sorgfalt, weil Fronten und Arbeitsplatten maßgefertigt sind. Dazu kommen Garagentore an privaten Einfahrten und Klimaanlagen, teils mit mehreren Innengeräten.",
    focus: [
      "Sondergeräte wie Weinklimaschränke, Dampfgarer und Side-by-Side-Kühlgeräte",
      "Hochwertige Einbaugeräte mit maßgefertigten Fronten",
      "Multisplit-Klimaanlagen mit mehreren Innengeräten",
      "Garagentore und Antriebe an Privateinfahrten"
    ],
    sections: [
      {
        title: "Sondergeräte brauchen genaue Angaben",
        body:
          "Bei Weinklimaschränken, Dampfgarern oder Side-by-Side-Geräten hängt fast alles an der genauen Modellbezeichnung, weil sich Baureihen technisch stark unterscheiden. Fotografieren Sie das Typenschild und schicken Sie es mit der Anfrage — damit klären wir vorab, ob das benötigte Teil verfügbar ist, bevor jemand anfährt."
      },
      {
        title: "Klimaanlagen mit mehreren Innengeräten",
        body:
          "Bei Multisplit-Anlagen hängen mehrere Innengeräte an einer Außeneinheit. Fällt die Kühlleistung an nur einem Innengerät ab, liegt der Fehler meist dort oder an dessen Kältemittelleitung; sind alle betroffen, geht es um die Außeneinheit oder die Füllmenge. Sagen Sie deshalb bei der Anfrage, welche Räume betroffen sind."
      }
    ],
    faq: [
      {
        question: "Reparieren Sie auch Weinklimaschränke und Dampfgarer?",
        answer:
          "Ja, sofern Ersatzteile verfügbar sind. Das klären wir mit der Modellnummer vorab, weil bei Sondergeräten die Teilelage stärker variiert als bei Standardgeräten."
      },
      {
        question: "Nur ein Raum wird nicht mehr kühl. Muss die ganze Anlage getauscht werden?",
        answer:
          "In der Regel nicht. Wenn nur ein Innengerät betroffen ist, liegt der Fehler meist an diesem Gerät, an seinem Kondensatablauf oder an der zugehörigen Leitung. Die Außeneinheit bleibt davon unberührt."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "doebling",
    name: "Döbling",
    postalCodes: ["1190"],
    metaTitle: "Gerätereparatur 1190 Wien: Döbling | MONTER",
    description:
      "Reparatur in Döbling (1190): Villen in Grinzing, Sievering und Nussdorf, steile Einfahrten, hochwertige Einbaugeräte. Auch Garagentore und Klimaanlagen.",
    h1: "Reparatur in Döbling (1190).",
    short: "Villen in Grinzing, Sievering und Nussdorf, steile Einfahrten.",
    intro:
      "Döbling reicht von den dichter bebauten Teilen um Nussdorfer Straße und Heiligenstadt bis in die Weinbaulagen von Grinzing, Sievering und Neustift. Der Hausanteil ist hoch, und mit ihm der Anteil an Garagentoren und Klimaanlagen.",
    character:
      "In den Hanglagen sind Einfahrten oft steil und lang, was Torantriebe stärker belastet und Wartung wichtiger macht. In den Häusern stehen häufig hochwertige Einbaugeräte, dazu Gefriertruhen und Waschküchen im Keller. Klimaanlagen sind hier überdurchschnittlich verbreitet, oft als Multisplit-Anlage mit Außeneinheit im Garten.",
    focus: [
      "Garagentore und Antriebe an langen, steilen Einfahrten",
      "Split- und Multisplit-Klimaanlagen mit Wartungsbedarf",
      "Hochwertige Einbaugeräte in Hausküchen",
      "Gefriertruhen und Waschmaschinen in Kellerräumen"
    ],
    sections: [
      {
        title: "Wartung schlägt Reparatur",
        body:
          "Bei Torantrieben an steilen Einfahrten und bei Klimaanlagen mit Außeneinheit im Grünen entsteht der meiste Ärger nicht durch Defekte, sondern durch ausgebliebene Wartung: trockene Laufrollen, verstellte Endlagen, verstaubte Verdampfer, verlegte Kondensatabläufe. Ein Wartungstermin ist deutlich günstiger als das Bauteil, das durch Vernachlässigung tatsächlich kaputtgeht."
      },
      {
        title: "Kellerräume in Hanglagen",
        body:
          "In Hanglagen sind Kellerräume häufiger feucht. Für Waschmaschinen und Gefriergeräte heißt das Korrosion an Kontakten und Steuerungen und wechselnde, schlecht reproduzierbare Fehler. Notieren Sie die Fehlercodes über einige Tage — dieses Muster hilft bei der Diagnose mehr als eine einzelne Momentaufnahme."
      }
    ],
    faq: [
      {
        question: "Wie oft sollte ein Garagentorantrieb gewartet werden?",
        answer:
          "Bei normaler Nutzung etwa jährlich, bei steilen Einfahrten und hoher Nutzung häufiger. Geprüft werden Federspannung, Seile, Laufrollen, Endlagen und die Sicherheitsabschaltung — letztere ist der Punkt, der im Ernstfall zählt."
      },
      {
        question: "Meine Klimaanlage tropft ins Zimmer. Ist das gefährlich?",
        answer:
          "Gefährlich nicht, aber es sollte rasch behoben werden, weil Feuchtigkeit in Wand und Boden zieht. Ursache ist fast immer ein verlegter oder falsch verlegter Kondensatablauf. Das ist eine Wartungsarbeit und kein Anlagentausch."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "brigittenau",
    name: "Brigittenau",
    postalCodes: ["1200"],
    metaTitle: "Gerätereparatur 1200 Wien: Brigittenau | MONTER",
    description:
      "Reparatur in der Brigittenau (1200): dichter Altbau, Gemeindebauanlagen und Neubau an der Donau. Haushaltsgeräte-Service für Mieter, Vermieter und Verwaltungen.",
    h1: "Reparatur in der Brigittenau (1200).",
    short: "Dichter Altbau, Gemeindebau und Neubau entlang der Donau.",
    intro:
      "Die Brigittenau ist dicht bebaut und liegt für uns günstig, weil unser Standort in Floridsdorf direkt gegenüber der Donau ist. Kurzfristige Termine lassen sich hier deshalb besonders gut einplanen.",
    character:
      "Der Bestand mischt Gründerzeithäuser mit großen Gemeindebauanlagen und Neubauten entlang der Donau. In den Anlagen stehen Geräte meist frei, was Reparaturen unkompliziert macht; im Altbau kommen die üblichen Anschlussthemen dazu. Der Mietwohnungsanteil ist hoch, entsprechend häufig laufen Aufträge über Eigentümer oder Verwaltungen.",
    focus: [
      "Freistehende Waschmaschinen und Geschirrspüler in Wohnanlagen",
      "Altbaugeräte mit Ablauf- und Zulaufthemen",
      "Kühl- und Gefriergeräte mit dringendem Handlungsbedarf",
      "Aufträge über Vermieter und Hausverwaltungen"
    ],
    sections: [
      {
        title: "Kurze Anfahrt von Floridsdorf",
        body:
          "Unser Standort liegt in der Rappgasse in 1210 Wien, wenige Minuten über die Brücke. Für die Brigittenau heißt das in der Praxis, dass wir dringende Fälle wie einen Wasseraustritt oder ein ausgefallenes Tiefkühlgerät oft am selben oder am nächsten Tag unterbringen. Rufen Sie in solchen Fällen an, statt das Formular zu nutzen."
      },
      {
        title: "Freistehend oder eingebaut",
        body:
          "Bei freistehenden Geräten ist der Zugang zu Pumpe, Heizstab und Elektronik direkt möglich, was die Arbeitszeit senkt. Bei integrierten Geräten muss zuerst die Möbelfront gelöst werden. Sagen Sie bei der Anfrage, welche Bauform vorliegt — damit planen wir die Termindauer realistisch."
      }
    ],
    faq: [
      {
        question: "Wie schnell können Sie in der Brigittenau sein?",
        answer:
          "Weil unser Standort direkt gegenüber in Floridsdorf liegt, meist binnen ein bis zwei Werktagen, bei dringenden Fällen oft schneller. Ein Wasseraustritt oder ein ausgefallenes Tiefkühlgerät wird vorgezogen."
      },
      {
        question: "Können mehrere Geräte im selben Haus gemeinsam erledigt werden?",
        answer:
          "Ja, und das ist günstiger, weil die Anfahrt nur einmal anfällt. Melden Sie solche Fälle gesammelt, idealerweise über die Hausverwaltung."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "floridsdorf",
    name: "Floridsdorf",
    postalCodes: ["1210"],
    metaTitle: "Gerätereparatur 1210 Wien: Floridsdorf | MONTER",
    description:
      "Reparatur in Floridsdorf (1210): unser Standort liegt hier. Kürzeste Anfahrt, Häuser in Strebersdorf und Stammersdorf, Anlagen in der Großfeldsiedlung.",
    h1: "Reparatur in Floridsdorf (1210).",
    short: "Unser Standort — kürzeste Wege und die schnellsten Termine.",
    intro:
      "Floridsdorf ist unser Heimbezirk: Unser Standort liegt in der Rappgasse 1/6. Kein anderer Bezirk ist für uns schneller erreichbar, was sich bei dringenden Fällen direkt auf den Termin auswirkt.",
    character:
      "Der Bezirk ist sehr gemischt: Einfamilienhäuser in Strebersdorf, Stammersdorf und Jedlesee mit eigenen Garagen und Waschküchen, große Wohnhausanlagen wie die Großfeldsiedlung und Neubau rund um Floridsdorfer Zentrum und Neu Leopoldau. Entsprechend deckt das Spektrum Haushaltsgeräte, Garagentore und Klimageräte gleichermaßen ab.",
    focus: [
      "Garagentore und Antriebe in den Hausgebieten",
      "Haushaltsgeräte in großen Wohnhausanlagen",
      "Klimageräte in Neubauwohnungen und Reihenhäusern",
      "Kurzfristige Termine bei Wasseraustritt oder Kühlgeräteausfall"
    ],
    sections: [
      {
        title: "Warum Termine hier am schnellsten sind",
        body:
          "Wir starten und beenden unsere Touren in Floridsdorf. Dadurch lassen sich Einsätze im Bezirk auch dann noch einschieben, wenn der Tag schon verplant ist. Bei einem laufenden Wasseraustritt oder einem ausgefallenen Tiefkühlgerät ist das der Unterschied zwischen heute und übermorgen — rufen Sie in solchen Fällen direkt an."
      },
      {
        title: "Haus, Anlage oder Neubau",
        body:
          "In den Hausgebieten sind Tore, Antriebe und Kellergeräte die häufigsten Themen, in den großen Anlagen freistehende Waschmaschinen und Geschirrspüler, im Neubau integrierte Geräte und Klimaanlagen. Nennen Sie bei der Anfrage die Bauform — damit kommt der Techniker mit dem passenden Werkzeug und den wahrscheinlichen Teilen."
      }
    ],
    faq: [
      {
        question: "Kann ich das Gerät bei Ihnen in der Rappgasse vorbeibringen?",
        answer:
          "Kleingeräte nach Absprache. Bei Groß- und Einbaugeräten ist der Einsatz vor Ort sinnvoller, weil Transport, Anschluss und Einbausituation Teil der Diagnose sind. Rufen Sie kurz an, dann klären wir, was in Ihrem Fall besser ist."
      },
      {
        question: "Gibt es für Floridsdorf einen günstigeren Anfahrtssatz?",
        answer:
          "Die Anfahrt beträgt wie in ganz Wien 80 € für Haushaltsgeräte und 110 € für Torarbeiten, exklusive USt. Der Vorteil liegt nicht im Preis, sondern in der Geschwindigkeit."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "donaustadt",
    name: "Donaustadt",
    postalCodes: ["1220"],
    metaTitle: "Gerätereparatur 1220 Wien: Donaustadt | MONTER",
    description:
      "Reparatur in der Donaustadt (1220): Seestadt Aspern, Kagran, Essling und Hausgebiete. Neubau-Einbaugeräte, Klimaanlagen und Garagentore.",
    h1: "Reparatur in der Donaustadt (1220).",
    short: "Seestadt und Neubau neben Hausgebieten in Essling und Breitenlee.",
    intro:
      "Die Donaustadt ist der flächengrößte Bezirk Wiens und liegt für uns günstig, weil unser Standort in Floridsdorf gleich daneben ist. Innerhalb des Bezirks sind die Wege allerdings lang — von Kagran nach Essling ist es weiter als quer durch die Innenbezirke.",
    character:
      "In Seestadt Aspern und den Neubaugebieten rund um Kagran stehen überwiegend integrierte Geräte, oft in Anlagen mit einheitlicher Ausstattung, dazu häufig Klimaanlagen und kontrollierte Wohnraumlüftung. In den älteren Hausgebieten in Essling, Breitenlee und Aspern dominieren Einfamilienhäuser mit Garagen, Waschküchen und Gefriergeräten.",
    focus: [
      "Integrierte Einbaugeräte in Neubauanlagen und der Seestadt",
      "Klimageräte in Neubauwohnungen mit großen Glasflächen",
      "Garagentore und Antriebe in den Hausgebieten",
      "Gefriergeräte und Waschmaschinen in Kellern und Nebenräumen"
    ],
    sections: [
      {
        title: "Neubau heißt gute Dämmung und mehr Kühlbedarf",
        body:
          "Moderne Wohnungen mit großen Fensterflächen heizen sich im Sommer schnell auf und geben die Wärme wegen der Dämmung nur langsam ab. Deshalb sind Klimageräte hier verbreiteter als im Altbau. Bei nachlassender Kühlleistung ist meist Wartung fällig, nicht ein Defekt: Filter, Verdampfer, Kondensatablauf und Füllmenge sind die üblichen Punkte."
      },
      {
        title: "Genaue Adresse hilft beim Termin",
        body:
          "Weil der Bezirk so groß ist, planen wir Einsätze nach Fahrtrichtung. Mit der genauen Adresse können wir Ihnen ein engeres Zeitfenster nennen, statt einen halben Tag zu blocken. In Anlagen mit Tiefgarage und Schranke sagen Sie bitte auch, wie der Zugang funktioniert."
      }
    ],
    faq: [
      {
        question: "Betreuen Sie die Seestadt Aspern?",
        answer:
          "Ja. Die Seestadt ist Standardeinsatzgebiet. Bei den dortigen Anlagen ist die Angabe von Stiege und Zugang hilfreich, weil die Adressen für Ortsunkundige nicht immer selbsterklärend sind."
      },
      {
        question: "Meine Klimaanlage kühlt schlechter als im Vorjahr. Was steht an?",
        answer:
          "Meist eine Wartung: Filter und Verdampfer reinigen, Kondensatablauf prüfen, Kältemittelfüllung kontrollieren. Wenn dabei ein tatsächlicher Defekt oder Kältemittelverlust auffällt, sagen wir Ihnen, was es kostet, bevor wir weitermachen."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "wien",
    slug: "liesing",
    name: "Liesing",
    postalCodes: ["1230"],
    metaTitle: "Gerätereparatur 1230 Wien: Liesing | MONTER",
    description:
      "Reparatur in Liesing (1230): Häuser in Mauer, Rodaun und Siebenhirten, Wohnanlagen in Alterlaa. Haushaltsgeräte, Garagentore und Klimageräte.",
    h1: "Reparatur in Liesing (1230).",
    short: "Häuser in Mauer und Rodaun, große Wohnanlagen in Alterlaa.",
    intro:
      "Liesing verbindet Einfamilienhausgebiete in Mauer, Rodaun, Siebenhirten und Atzgersdorf mit großen Wohnanlagen wie den Wohnparks in Alterlaa. Beide Welten fahren wir regelmäßig an.",
    character:
      "In den Hausgebieten sind Garagentore, Waschküchen und Kellergefriergeräte die häufigsten Themen, teils an Hanglagen Richtung Wienerwald mit steileren Einfahrten. In den großen Wohnanlagen finden wir standardisierte Ausstattungen und oft mehrere gleichartige Geräte pro Haus, was Sammeltermine sinnvoll macht. Dazu kommt ein Gewerbegebiet im Süden mit Büro- und Betriebsküchen.",
    focus: [
      "Garagentore und Antriebe an Privateinfahrten",
      "Haushaltsgeräte in großen Wohnanlagen mit Verwaltungsauftrag",
      "Kellergeräte in Häusern mit Feuchtigkeitsthemen",
      "Geräte in Büro- und Betriebsküchen im Gewerbegebiet"
    ],
    sections: [
      {
        title: "Sammeltermine in großen Anlagen",
        body:
          "Wenn in einem Haus mehrere gleiche Geräte betroffen sind, arbeiten wir sie an einem Termin ab. Die Anfahrt fällt dann nur einmal an, und wir haben die passenden Teile für diesen Gerätetyp mit. Für Hausverwaltungen ist das die übliche und günstigste Variante."
      },
      {
        title: "Gewerbliche Küchen",
        body:
          "In Büro- und Betriebsküchen laufen Geschirrspüler und Kühlgeräte in einer Intensität, die Haushaltsgeräte an ihre Grenze bringt. Wenn ein Gerät regelmäßig ausfällt, ist die ehrliche Antwort manchmal, dass ein Haushaltsgerät für diese Nutzung nicht ausgelegt ist. Das sagen wir Ihnen, statt alle paar Monate dasselbe Bauteil zu tauschen."
      }
    ],
    faq: [
      {
        question: "Kommen Sie in die Wohnparks nach Alterlaa?",
        answer:
          "Ja, regelmäßig. Nennen Sie bitte Stiege und Stockwerk sowie den Zugangsweg, weil die Anlagen weitläufig sind und der Weg vom Fahrzeug zur Wohnung sonst Zeit kostet."
      },
      {
        question: "Mein Geschirrspüler im Büro fällt immer wieder aus. Was raten Sie?",
        answer:
          "Wir prüfen zuerst, ob Wasserhärte, Reinigerdosierung und Nutzungsintensität die Ursache sind. Wenn ein Haushaltsgerät dauerhaft im Dauerbetrieb läuft, ist ein Gerät für gewerbliche Nutzung langfristig günstiger als die Kette an Reparaturen."
      }
    ],
    enriched: true
  }
];
