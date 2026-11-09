import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../../pageMetadata";
import { EnglishFrame } from "../EnglishFrame";

export const metadata: Metadata = buildEnglishMetadata({
  title: "Repair Prices Vienna | Appliances & Garage Doors | MONTER",
  description:
    "Gross repair prices in Vienna and Lower Austria, including 20% VAT. Travel, diagnosis and labour for appliances and garage doors.",
  path: "/en/prices",
  keywords: ["appliance repair cost Vienna", "washing machine repair price Vienna", "garage door repair cost Vienna"]
});

const rows: { group: string; items: { service: string; price: string; note: string }[] }[] = [
  {
    group: "Household appliances, travel",
    items: [
      { service: "Travel, Vienna", price: "96 €", note: "Every brand except Gaggenau. Per visit inside Vienna." },
      { service: "Travel, Lower Austria", price: "120 €", note: "Every brand except Gaggenau. Per visit in Lower Austria." },
      { service: "Travel, Gaggenau", price: "200 €", note: "Instead of 96 € in Vienna or 120 € in Lower Austria." },
      { service: "Travel, Linz", price: "On request", note: "Quoted from the address before an appointment is set." },
      { service: "More than one hour of driving", price: "240 €", note: "There and back together. This replaces the ordinary travel fee." }
    ]
  },
  {
    group: "Household appliances, on site",
    items: [
      { service: "Diagnosis only, freestanding", price: "144 €", note: "First 30 minutes included." },
      { service: "Diagnosis only, built-in", price: "158 €", note: "First 30 minutes included." },
      { service: "Repair and diagnosis, freestanding", price: "180 €", note: "First labour unit is 15 minutes." },
      { service: "Repair and diagnosis, built-in", price: "198 €", note: "First 30 minutes included." },
      { service: "Further labour unit", price: "+60 €", note: "On the first visit, one unit is 30 minutes." },
      { service: "Return visit to fit a part", price: "60 € + the part", note: "Not a second diagnosis fee. Travel is charged again, per visit." }
    ]
  },
  {
    group: "Garage doors",
    items: [
      { service: "Travel, Vienna", price: "132 €", note: "Per visit." },
      { service: "Travel, Lower Austria", price: "180 €", note: "Per visit." },
      { service: "Labour unit", price: "90 €", note: "30 minutes. Each further unit is 90 €." },
      { service: "Return visit to fit a part", price: "90 € + the part", note: "Not a second diagnosis fee. Travel is charged again." },
      { service: "Spring replacement", price: "180–300 €", note: "Depends on the door, the spring and the installation." },
      { service: "Rollers", price: "60–120 €", note: "Depends on the number and the type." },
      { service: "Opener repair", price: "240–600 €", note: "Depends on the fault and the opener." },
      { service: "Lubrication and function check", price: "120 €", note: "Rails, rollers and moving parts." },
      { service: "Opener adjustment", price: "96–180 €", note: "End positions and force." },
      { service: "Safety inspection", price: "120–240 €", note: "Springs, fixings and the safety devices." }
    ]
  },
  {
    group: "Out of hours, travel and diagnosis",
    items: [
      { service: "Evening, Monday–Friday", price: "180 €", note: "18:00–22:00." },
      { service: "Weekend", price: "216 €", note: "Saturday and Sunday, 18:00–22:00." },
      { service: "Night", price: "240 €", note: "22:00–08:00." }
    ]
  }
];

export default function EnglishPricesPage() {
  return (
    <EnglishFrame
      eyebrow="Prices"
      title="Published rates, including VAT."
      lede="Every figure on this page is gross and includes 20% VAT. A range is not a quote. The price for your appliance or door is named before the work, and before a part is ordered."
    >
      <div className="space-y-14">
        {rows.map((group) => (
          <section key={group.group}>
            <h2 className="font-display text-2xl font-light tracking-tight">{group.group}</h2>
            <dl className="mt-6 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
              {group.items.map((item) => (
                <div key={item.service} className="grid gap-2 py-4 sm:grid-cols-[1.2fr_8rem_1.4fr] sm:items-baseline">
                  <dt className="font-medium">{item.service}</dt>
                  <dd className="font-display text-xl font-light">{item.price}</dd>
                  <dd className="text-sm font-light text-[color:var(--muted)]">{item.note}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
      <p className="mt-10 max-w-3xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
        Parts, refrigerant-circuit work and garage labour beyond the unit above are extra and are named first. The German price page also lists delivery and the individual out-of-hours jobs.{" "}
        <Link href="/preise" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
          Preise
        </Link>
        {" · "}
        <Link href="/notdienst" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
          Notdienst
        </Link>
      </p>
    </EnglishFrame>
  );
}
