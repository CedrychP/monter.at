import type { Metadata } from "next";
import { siteConfig } from "../siteConfig";
import RepairBookingForm from "../RepairBookingForm";

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;

const badges = [
  "Termin meist binnen 1–2 Tagen",
  "Privat & Gewerbe",
  "Transparente Anfahrt & Preise",
  "Markenoffen in Wien & NÖ"
];

export const metadata: Metadata = {
  title: "Reparaturtermin buchen Wien | MONTER Reparatur & Service",
  description:
    "Reparaturtermin online buchen: Haushaltsgeräte und Garagentore in Wien & NÖ. Gerät, Standort und Wunschtermin angeben — wir melden uns zur Abstimmung.",
  alternates: {
    canonical: "/reparatur-buchen"
  }
};

export default function ReparaturBuchenPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="relative isolate overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.06)" }}
          />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Terminbuchung</p>
              <h1 className="font-display mt-6 text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Reparaturtermin <span className="font-display-italic">buchen.</span>
              </h1>
              <p className="mt-7 max-w-md text-[1.05rem] font-normal leading-relaxed text-[color:var(--muted)]">
                Gerät, Fehlerbild und Wunschtermin angeben — wir melden uns zur Abstimmung. Bei
                dringenden Ausfällen ist der direkte Anruf der schnellste Weg.
              </p>

              <a
                href={`tel:${phoneHref}`}
                className="group mt-10 flex items-center gap-4 rounded-sm border border-[color:var(--border)] bg-white p-5 transition hover:border-[color:var(--ink)]"
              >
                <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A15 15 0 0 1 3 6.1 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-normal tracking-eyebrow text-[color:var(--muted)]">
                    Direkt anrufen
                  </span>
                  <span className="font-display block text-2xl font-normal tracking-tight text-[color:var(--ink)] sm:text-3xl">
                    {phoneDisplay}
                  </span>
                </span>
              </a>

              <div className="mt-8 grid gap-px overflow-hidden rounded-sm bg-[color:var(--border)] sm:grid-cols-2">
                {badges.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 bg-white px-4 py-4">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="flex-none text-[color:var(--accent)]" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm font-normal text-[color:var(--ink)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal rounded-sm border border-[color:var(--border)] bg-white p-6 sm:p-10">
              <RepairBookingForm phoneHref={phoneHref} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
