import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "./siteConfig";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | MONTER Reparatur & Service",
  description:
    "Diese Seite gibt es nicht. Zur Startseite, den Leistungen oder direkt anrufen.",
  robots: {
    index: false,
    follow: false
  }
};

const hubLinks = [
  { label: "Haushaltsgeräte", href: "/haushaltsgeraete" },
  { label: "Garagentore", href: "/garagentore" },
  { label: "Marken", href: "/marken" },
  { label: "Einsatzgebiete", href: "/einsatzgebiete" }
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">404</p>
          <h1 className="font-display mt-8 max-w-3xl text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
            Diese Seite gibt es nicht.
          </h1>
          <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
            Der Link ist veraltet oder die Adresse stimmt nicht. Rufen Sie uns an, buchen Sie
            eine Reparatur oder wechseln Sie zu einer der Hauptseiten.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
              {siteConfig.phoneDisplay}
            </a>
            <Link href="/reparatur-buchen" className="btn-ghost">
              Reparatur buchen
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow">Weiterlesen</p>
          <h2 className="font-display mt-6 text-2xl font-light tracking-tight sm:text-3xl">
            Zu den Leistungen
          </h2>
          <div className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {hubLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white p-6 transition hover:bg-[color:var(--bg-muted)]"
              >
                <p className="font-display text-lg font-normal tracking-tight">{link.label}</p>
                <span className="mt-4 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)] transition group-hover:text-[color:var(--accent)]">
                  Ansehen
                  <span className="ml-1 transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10">
            <Link
              href="/"
              className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
            >
              Zur Startseite
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
