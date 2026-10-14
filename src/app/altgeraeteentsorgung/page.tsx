import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const slips = [
  {
    kicker: "Bei der Lieferung",
    title: "Ein Termin.",
    text: "Das neue Gerät kommt, das alte geht im selben Zug mit.",
    surface: "border border-[color:var(--border)] bg-white text-[color:var(--ink)]",
    kickerClass: "text-[color:var(--accent)]",
    bodyClass: "text-[color:var(--muted)]",
    shift: "lg:mr-16"
  },
  {
    kicker: "Am Aufstellort",
    title: "Abbau.",
    text: "Auf Wunsch demontiert, dann sicher abtransportiert.",
    surface: "bg-[color:var(--ink)] text-white",
    kickerClass: "text-[color:var(--gold-on-dark)]",
    bodyClass: "text-white/70",
    shift: "lg:mx-8"
  },
  {
    kicker: "Danach",
    title: "Verwertung.",
    text: "Wertstoffe recycelt, Schadstoffe fachgerecht behandelt.",
    surface: "bg-[color:var(--accent)] text-white",
    kickerClass: "text-white/80",
    bodyClass: "text-white/80",
    shift: "lg:ml-16"
  }
];

const steps = [
  {
    number: "01",
    title: "Mitnahme",
    text: "Liefern wir Ihr neues Gerät, nehmen wir das Altgerät auf Wunsch direkt mit. Sagen Sie uns vorher Bescheid — dann bleibt es ein Termin."
  },
  {
    number: "02",
    title: "Abbau",
    text: "Auf Wunsch demontieren wir das Altgerät am Aufstellort und transportieren es sicher ab."
  },
  {
    number: "03",
    title: "Verwertung",
    text: "Elektroaltgeräte gehören nicht in den Restmüll. Wir führen sie der ordnungsgemäßen Entsorgung und Verwertung zu."
  }
];

const devices = [
  { label: "Waschmaschine", href: "/haushaltsgeraete/waschmaschine" },
  { label: "Trockner", href: "/haushaltsgeraete/trockner" },
  { label: "Geschirrspüler", href: "/haushaltsgeraete/geschirrspueler" },
  { label: "Kühlschrank", href: "/haushaltsgeraete/kuehlschrank" }
];

const faqs: HubFaqItem[] = [
  {
    question: "Gehören Elektroaltgeräte in den Restmüll?",
    answer:
      "Nein. Elektro- und Elektronikgeräte enthalten Wertstoffe und teils Schadstoffe. Wir führen sie der ordnungsgemäßen Entsorgung und Verwertung zu: Wertstoffe werden recycelt, Schadstoffe fachgerecht behandelt. Das schützt die Umwelt und entspricht den gesetzlichen Vorgaben für Elektroaltgeräte."
  },
  {
    question: "Nehmen Sie das Altgerät bei der Lieferung mit?",
    answer:
      "Ja, auf Wunsch im selben Termin. Allein kostet die Altgerätmitnahme 42 € brutto. Im Komfortplus-Paket für 180 € ist sie zusammen mit Lieferung, Montage und Auspacken enthalten. Sagen Sie uns vorher Bescheid. Auf Wunsch bauen wir das Altgerät am Aufstellort ab und transportieren es ab."
  },
  {
    question: "Was kostet die Altgerätmitnahme?",
    answer:
      "42 € brutto, wenn nur das Altgerät abgeholt wird. Liefern wir ein neues Gerät im Komfortplus-Paket, ist die Mitnahme im Paketpreis von 180 € enthalten."
  },
  {
    question: "Prüfen Sie vorher, ob sich die Reparatur noch lohnt?",
    answer:
      "Ja. Bevor ein Gerät entsorgt wird, lohnt oft ein kurzer Blick. Manchmal ist eine wirtschaftliche Reparatur möglich. Dann sagen wir das offen, statt das Gerät einfach mitzunehmen."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Altgeräteentsorgung Wien | Elektrogeräte entsorgen | MONTER",
  description:
    "Altgeräteentsorgung in Wien: Mitnahme allein 42 € brutto, im Komfortplus-Paket enthalten. Abbau, Abtransport und fachgerechte Verwertung von Elektroaltgeräten.",
  path: "/altgeraeteentsorgung"
});

export default function AltgeraeteentsorgungPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Altgeräteentsorgung in Wien</p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Nicht in den
              <span className="mt-1 block italic text-[color:var(--accent)]">Restmüll.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Altes Gerät muss weg? Wir nehmen Elektroaltgeräte mit, bauen sie bei Bedarf ab und führen sie der
              umweltgerechten Entsorgung und Verwertung zu — am einfachsten direkt im Zuge der Lieferung.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#anfrage" className="btn-primary">
                <span>Zur Abholung</span>
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <ol className="flex flex-col gap-3">
            {slips.map((slip) => (
              <li key={slip.title} className={slip.shift}>
                <div className={`px-7 py-7 sm:px-8 sm:py-8 ${slip.surface}`}>
                  <p className={`text-[0.72rem] font-medium uppercase tracking-[0.22em] ${slip.kickerClass}`}>
                    {slip.kicker}
                  </p>
                  <p className="font-display mt-3 text-4xl font-light tracking-tight">{slip.title}</p>
                  <p className={`mt-2 text-sm font-light leading-relaxed ${slip.bodyClass}`}>{slip.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Was im Gerät steckt.
          </h2>
          <div className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
            <div className="bg-white p-8 sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Wertstoffe</p>
              <p className="font-display mt-4 text-4xl font-light tracking-tight">Werden recycelt.</p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Was sich wiederverwenden lässt, geht in die Verwertung — nicht in die Tonne.
              </p>
            </div>
            <div className="bg-[color:var(--ink)] p-8 text-white sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
                Schadstoffe
              </p>
              <p className="font-display mt-4 text-4xl font-light tracking-tight">Werden behandelt.</p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70">
                Was nicht in den Kreislauf gehört, wird fachgerecht aus dem Gerät genommen.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Elektro- und Elektronikgeräte enthalten beides. Eine fachgerechte Entsorgung schützt die Umwelt und
            entspricht den gesetzlichen Vorgaben für Elektroaltgeräte.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Der Weg</p>
          <h2 className="font-display mt-6 max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Von der Wohnung in die Verwertung.
          </h2>
          <ol className="mt-12 border-t border-[color:var(--border)]">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-3 border-b border-[color:var(--border)] py-8 sm:grid-cols-[5rem_14rem_1fr] sm:items-baseline sm:gap-8"
              >
                <p className="font-display text-sm tracking-[0.16em] text-[color:var(--accent)]">{step.number}</p>
                <h3 className="font-display text-3xl font-light tracking-tight">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-[color:var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Die Altgerätmitnahme allein kostet 42 € brutto. Im Komfortplus-Paket für 180 € ist sie zusammen
            mit Lieferung, Montage und Auspacken enthalten. Die Sätze stehen bei den{" "}
            <Link href="/lieferpreise" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Lieferpreisen</span>
            </Link>.
          </p>
          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {"Bei "}
            {devices.map((device, index) => (
              <span key={device.href}>
                <Link href={device.href} className="border-b border-current">
                  <span className="text-[color:var(--ink)]">{device.label}</span>
                </Link>{index < devices.length - 2 ? ", " : index === devices.length - 2 ? " und " : ""}
              </span>
            ))}{" ist die Mitnahme am einfachsten mit der "}
            <Link href="/lieferung-montage" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Lieferung &amp; Montage</span>
            </Link>.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--ink)] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
              Bevor es weg ist
            </p>
            <h2 className="font-display mt-5 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Manchmal bleibt das Gerät.
            </h2>
          </div>
          <div>
            <p className="text-[1.02rem] font-light leading-relaxed text-white/75">
              Bevor ein Gerät entsorgt wird, lohnt oft ein kurzer Blick. Manchmal ist eine wirtschaftliche Reparatur
              möglich. Wir geben eine ehrliche Einschätzung — und nehmen es erst mit, wenn der Tausch klarer ist.
            </p>
            <Link href="/kaufberatung" className="btn-on-dark mt-8">
              <span>Reparieren oder ersetzen</span>
            </Link>
          </div>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt, bevor das Gerät die Wohnung verlässt." items={faqs} />

      <section id="anfrage" className="scroll-mt-28 bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Gerät und Standort nennen.
          </h2>
          <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            Welches Gerät, wo es steht, und ob die Lieferung dazukommt. Wir koordinieren die Mitnahme. Noch kein
            Auftrag.
          </p>
          <div className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-[1.15fr_0.85fr]">
            <Link href="/kontakt" className="group bg-[color:var(--ink)] p-8 text-white sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
                Abholung
              </p>
              <p className="font-display mt-5 text-4xl font-light tracking-tight sm:text-5xl">
                <span className="text-white">Entsorgung anfragen.</span>
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70">
                Gerät und Standort reichen für den ersten Schritt. Wir melden uns.
              </p>
            </Link>
            <Link href="/lieferung-montage" className="group bg-[color:var(--bg-muted)] p-8 sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Zusammen mit dem Neugerät
              </p>
              <p className="font-display mt-5 text-4xl font-light tracking-tight">
                <span className="text-[color:var(--ink)]">Mit der Lieferung.</span>
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Im Komfortplus für 180 € ist die Mitnahme enthalten. Allein kostet sie 42 €.
              </p>
            </Link>
          </div>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="mt-8 inline-flex items-baseline gap-3 border-b border-[color:var(--ink)] pb-1"
          >
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">Oder direkt</span>
            <span className="font-display text-2xl font-light tracking-tight" data-phone-number>
              {siteConfig.phoneDisplay}
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
