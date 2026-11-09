import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../../pageMetadata";
import { EnglishFrame, EnglishProse } from "../EnglishFrame";

export const metadata: Metadata = buildEnglishMetadata({
  title: "Washing Machine & Appliance Repair Vienna | MONTER",
  description:
    "On-site repair for washing machines, dishwashers, dryers, fridges, freezers, ovens and hobs in Vienna. Published diagnosis rates, including VAT.",
  path: "/en/appliance-repair",
  keywords: [
    "washing machine repair Vienna",
    "dishwasher repair Vienna",
    "dryer repair Vienna",
    "fridge repair Vienna",
    "oven repair Vienna"
  ]
});

const devices = [
  "Washing machine",
  "Dishwasher",
  "Dryer",
  "Washer-dryer",
  "Fridge",
  "Freezer",
  "Oven",
  "Hob",
  "Cooker hood",
  "Television"
];

export default function EnglishAppliancePage() {
  return (
    <EnglishFrame
      eyebrow="Household appliances"
      title="Appliance repair in Vienna."
      lede="We repair the appliance where it stands. The visit covers one fault on one appliance. Tell us the brand, what it is doing, and the address."
    >
      <EnglishProse>
        <p>
          The work is brand-independent. Bosch, Siemens, Miele, AEG, Bauknecht, Beko and Gorenje are among the brands we repair. That is not a partnership with those manufacturers. A Gaggenau visit uses the Gaggenau travel fee of 200 €, not the ordinary Vienna or Lower Austria fee.
        </p>
        <p>
          Diagnosis of a freestanding appliance is 144 € and includes the first 30 minutes. Diagnosis of a built-in appliance is 158 €, also with the first 30 minutes included. Repair and diagnosis together are 180 € for a freestanding appliance, and that rate includes the first 15 minutes. The built-in repair rate is 198 € and includes the first 30 minutes. A further 30 minutes on the first visit is 60 €. Travel is separate: 96 € in Vienna, 120 € in Lower Austria. Linz travel is quoted before the appointment.
        </p>
        <p>
          Have the model and, if there is one, the error code ready. The same number does not mean the same fault on every brand. We do not publish a code unless it is already on the matching brand page or in the manufacturer’s manual.
        </p>
        <p>
          Every rate on this page is gross and includes 20% VAT. The full list is on the{" "}
          <Link href="/en/prices" className="border-b border-current">prices page</Link>.
          A return visit to fit a part is one labour unit of 60 € plus the part, not a second diagnosis fee. Travel is charged for each visit.
        </p>
      </EnglishProse>
      <ul className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
        {devices.map((device) => (
          <li key={device} className="bg-white px-6 py-5 font-display text-xl font-light">
            {device}
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm font-light text-[color:var(--muted)]">
        The German appliance pages list faults and brands one by one.{" "}
        <Link href="/haushaltsgeraete" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
          Haushaltsgeräte
        </Link>
      </p>
    </EnglishFrame>
  );
}
