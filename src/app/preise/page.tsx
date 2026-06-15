const phoneDisplay = "+43 1 4171346";
const phoneHref = "+4314171346";

type PriceItem = {
  number: string;
  service: string;
  price: string;
  note: string;
  highlight?: boolean;
};

const householdPriceItems: PriceItem[] = [
  {
    number: "01",
    service: "Anfahrt Wien",
    price: "80 €",
    note: "Anfahrt innerhalb von Wien zu Ihrer Adresse. Pauschale für die Fahrt zum Einsatzort."
  },
  {
    number: "02",
    service: "Anfahrt Niederösterreich",
    price: "100 €",
    note: "Anfahrt nach Niederösterreich. Pauschale für An- und Abfahrt zum Einsatzort."
  },
  {
    number: "03",
    service: "Nur Diagnose",
    price: "100 €",
    note: "Prüfung des Geräts vor Ort mit Fehlerdiagnose und transparenter Einschätzung der nächsten Schritte."
  },
  {
    number: "04",
    service: "Arbeitspauschale & Diagnose",
    price: "120 €",
    note: "Diagnose und Arbeitsleistung vor Ort als Pauschale, wenn die Reparatur direkt durchgeführt wird.",
    highlight: true
  }
];

const garageTravelPriceItems: PriceItem[] = [
  {
    number: "01",
    service: "Anfahrt Wien",
    price: "110 €",
    note: "Anfahrt innerhalb von Wien für Garagen- und Torreparaturen."
  },
  {
    number: "02",
    service: "Anfahrt Niederösterreich",
    price: "150 €",
    note: "Anfahrt nach Niederösterreich für Garagen- und Torreparaturen."
  },
  {
    number: "03",
    service: "Mehr als 1 Std. Fahrt",
    price: "200 €",
    note: "Anfahrtspauschale bei einer Fahrzeit von mehr als einer Stunde (An- und Abfahrt)."
  }
];

const garageRepairPriceItems: PriceItem[] = [
  {
    number: "04",
    service: "Federwechsel",
    price: "150–250 €",
    note: "Austausch von Garagentorfedern je nach Torgröße, Federart und Einbausituation."
  },
  {
    number: "05",
    service: "Austausch der Rollen",
    price: "50–100 €",
    note: "Erneuerung von Führungs- und Laufrollen am Garagentor — abhängig von Anzahl und Typ."
  },
  {
    number: "06",
    service: "Reparatur des Antriebs",
    price: "200–500 €",
    note: "Fehlersuche und Reparatur des Torantriebs, abhängig von Defekt und Antriebsmodell.",
    highlight: true
  },
  {
    number: "07",
    service: "Wartung: Schmierung der Schienen und Rollen",
    price: "100 €",
    note: "Reinigung, Schmierung und Funktionsprüfung von Schienen, Rollen und beweglichen Teilen."
  },
  {
    number: "08",
    service: "Justieren des Torantriebs",
    price: "80–150 €",
    note: "Einstellen von Endlagen, Kraft und Laufeigenschaften des Garagentorantriebs."
  },
  {
    number: "09",
    service: "Sicherheitsüberprüfung und Inspektion",
    price: "100–200 €",
    note: "Prüfung von Sicherheitskomponenten, Federzustand, Befestigungen und Gesamtfunktion des Tors."
  }
];

const priceFactors = [
  "Gerätetyp und Fehlerbild",
  "Torgröße und Antriebsmodell",
  "Anfahrt und Fahrzeit",
  "Ersatzteilverfügbarkeit",
  "Sicherheitszustand",
  "Alter und Wirtschaftlichkeit",
  "Privat- oder Objektservice"
];

function PriceGrid({ items }: { items: PriceItem[] }) {
  return (
    <div className="stagger grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.service}
          className={`flex flex-col justify-between p-8 lg:p-10 ${
            item.highlight ? "bg-[color:var(--ink)] text-white" : "bg-white"
          }`}
        >
          <div>
            <span
              className={`numeral ${
                item.highlight ? "text-white/80" : "text-[color:var(--accent)]"
              }`}
            >
              {item.number}
            </span>
            <h2 className="font-display mt-6 text-2xl font-normal leading-tight tracking-tight">
              {item.service}
            </h2>
            <p
              className={`mt-4 text-sm font-light leading-relaxed ${
                item.highlight ? "text-white/75" : "text-[color:var(--muted)]"
              }`}
            >
              {item.note}
            </p>
          </div>
          <p
            className={`font-display mt-12 text-4xl font-light tracking-tight sm:text-5xl ${
              item.highlight ? "text-white" : "text-[color:var(--ink)]"
            }`}
          >
            {item.price}
          </p>
        </article>
      ))}
    </div>
  );
}

export const metadata = {
  title: "Preise Reparatur Wien | Haushaltsgeräte & Garagentor | MONTER",
  description:
    "Preise für Haushaltsgeräte- und Garagentor-Reparatur in Wien und Niederösterreich: Anfahrt, Diagnose, Reparatur, Federwechsel, Antrieb, Wartung und Inspektion — transparent und nachvollziehbar.",
  alternates: {
    canonical: "/preise"
  }
};

export default function PreisePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Preise</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
                Klare Preisorientierung.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Transparente Pauschalen für Haushaltsgeräte und Garagentor-Reparaturen in Wien und
                Niederösterreich. Material wird nur dann verrechnet, wenn es tatsächlich benötigt wird.
              </p>
            </div>
            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Schnellster Weg</p>
              <a
                href={`tel:${phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phoneDisplay}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Rufen Sie an, damit wir Gerät, Fehlerbild und mögliche Reparatur realistisch einschätzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Haushaltsgeräte</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Anfahrt &amp; Diagnose
            </h2>
          </div>
          <div className="mt-10">
            <PriceGrid items={householdPriceItems} />
          </div>

          <div className="reveal mt-20 border-t border-[color:var(--border)] pt-16">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Garagenreparatur</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Anfahrt
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Anfahrtspauschalen für Garagentor-Reparaturen und Wartung in Wien, Niederösterreich
              und bei längerer Anfahrt.
            </p>
          </div>
          <div className="mt-10">
            <PriceGrid items={garageTravelPriceItems} />
          </div>

          <div className="reveal mt-20">
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
              Reparaturen &amp; Wartung
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Orientierungspreise für häufige Garagentor-Leistungen. Der endgültige Preis hängt von
              Torgröße, Antriebsmodell und Einbausituation ab.
            </p>
          </div>
          <div className="mt-10">
            <PriceGrid items={garageRepairPriceItems} />
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Wichtig zu wissen</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                Keine versteckten Posten.
              </h2>
              <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Haushaltsgeräte: Anfahrt Wien 80 €, Niederösterreich 100 €. Nur Diagnose 100 €,
                Arbeitspauschale &amp; Diagnose 120 €. Garagenreparatur: Anfahrt Wien 110 €,
                Niederösterreich 150 €, mehr als 1 Std. Fahrt 200 €.
              </p>
              <p className="mt-4 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Material und Ersatzteile werden nur dann verrechnet, wenn sie tatsächlich
                benötigt werden. Kosten werden vor dem Einbau transparent abgestimmt.
              </p>
              <a href={`tel:${phoneHref}`} className="btn-primary mt-10">
                Jetzt Preis einschätzen lassen
              </a>
            </div>

            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Preisfaktoren</p>
              <div className="mt-8 grid gap-0">
                {priceFactors.map((factor, index) => (
                  <div
                    key={factor}
                    className="flex items-center justify-between border-b border-[color:var(--border)] py-5"
                  >
                    <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                    <p className="font-light text-[color:var(--ink)]">{factor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
