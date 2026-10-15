import Link from "next/link";
import { appliancePages, type AppliancePage } from "../haushaltsgeraete/appliancePages";
import { applianceHref } from "../serviceHrefs";
import { siteConfig } from "../siteConfig";

const sanitaerOrder = ["waschmaschine", "geschirrspueler", "trockner", "waschtrockner"];
const kuecheOrder = ["kuehlschrank", "tiefkuehl", "backofen", "herd", "dunstabzug", "fernseher"];

function pagesInOrder(order: string[]) {
  return order
    .map((slug) => appliancePages.find((page) => page.slug === slug))
    .filter((page): page is AppliancePage => Boolean(page));
}

function DeviceGroup({
  title,
  pages,
  columns
}: {
  title: string;
  pages: AppliancePage[];
  columns: string;
}) {
  return (
    <div>
      <h3 className="font-display text-2xl font-light tracking-tight">{title}</h3>
      <ul className={`mt-4 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] ${columns}`}>
        {pages.map((page) => (
          <li key={page.slug} className="bg-white">
            <Link href={applianceHref(page.slug)} className="block h-full px-6 py-8">
              <span className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{page.category}</span>
              <span className="mt-3 block text-sm font-light leading-relaxed text-[color:var(--muted)]">{page.short}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AreaServiceLinks({ area }: { area: "kern" | "linz" }) {
  return (
    <section
      className="border-t border-[color:var(--border)] bg-white py-16 sm:py-20"
      aria-label={area === "linz" ? "Haushaltsgeräte in Linz" : "Leistungen"}
    >
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Nach dem Gerät</p>
        <h2 className="font-display mt-6 max-w-3xl text-3xl font-light tracking-tight sm:text-4xl">
          {area === "linz" ? "Dieselben Geräteseiten, Reparatur vor Ort." : "Sanitärgeräte, Küche und Wohnen."}
        </h2>
        <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
          {area === "linz"
            ? "Backofen und Herd sind getrennte Seiten. Garagentore und Klimageräte sind in Linz nicht das reguläre Spektrum."
            : "Backofen und Herd sind getrennte Seiten. Garagentore und Klimageräte gehören in Wien und Niederösterreich dazu."}
        </p>
        <div className="mt-12 space-y-12">
          <DeviceGroup title="Sanitärgeräte" pages={pagesInOrder(sanitaerOrder)} columns="sm:grid-cols-2 lg:grid-cols-4" />
          <DeviceGroup title="Küche & Wohnen" pages={pagesInOrder(kuecheOrder)} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
        {area === "kern" ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/garagentore" className="btn-ghost">
              Garagentore
            </Link>
            <Link href="/klimageraete" className="btn-ghost">
              Klimageräte
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function AreaSectionRows({ sections }: { sections: { title: string; body: string }[] }) {
  if (sections.length === 0) return null;

  return (
    <section className="border-t border-[color:var(--border)] bg-white">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
        <ul className="border-t border-[color:var(--border)]">
          {sections.map((section) => (
            <li
              key={section.title}
              className="grid items-start gap-4 border-b border-[color:var(--border)] py-10 lg:grid-cols-[18rem_1fr] lg:gap-16"
            >
              <h2 className="font-display text-2xl font-light tracking-tight sm:text-3xl">{section.title}</h2>
              <p className="text-base font-light leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">{section.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AreaClose({ linz = false }: { linz?: boolean }) {
  const ready = ["Adresse und Stockwerk", "Marke und Modellnummer", "Fehlercode", "Was das Gerät gerade tut"];

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
        <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Adresse, Gerät, was es gerade tut.</h2>
        <ul className="mt-8 max-w-xl border-t border-[color:var(--border)]">
          {ready.map((item) => (
            <li key={item} className="border-b border-[color:var(--border)] py-3 text-base font-light text-[color:var(--ink)]">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-[color:var(--muted)]">
          {linz ? (
            <>
              Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird. Für Linz nennen wir die Anfahrt am Telefon, bevor ein Termin steht. Die Anfrage ist noch kein Auftrag.
            </>
          ) : (
            <>
              Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird. Die festen Sätze stehen bei den{" "}
              <Link href="/preise">
                <span className="text-[color:var(--accent)]">Preisen und Pauschalen</span>
              </Link>. Die Anfrage ist noch kein Auftrag.
            </>
          )}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-primary" href={`tel:${siteConfig.phoneHref}`}>
            <span data-phone-number>{siteConfig.phoneDisplay}</span>
          </a>
          <Link className="btn-ghost" href="/reparatur-buchen">
            Termin anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
