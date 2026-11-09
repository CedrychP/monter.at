import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../../pageMetadata";
import { EnglishFrame, EnglishProse } from "../EnglishFrame";

export const metadata: Metadata = buildEnglishMetadata({
  title: "Garage Door Repair Vienna | MONTER",
  description:
    "Garage door repair in Vienna and Lower Austria. Travel 132 € in Vienna and 180 € in Lower Austria, including VAT. Springs are not a DIY job.",
  path: "/en/garage-door-repair",
  keywords: ["garage door repair Vienna", "garage door spring Vienna", "garage door opener repair Vienna"]
});

export default function EnglishGaragePage() {
  return (
    <EnglishFrame
      eyebrow="Garage doors"
      title="Garage door repair in Vienna."
      lede="Sectional doors, up-and-over doors, rollers and openers. The garage service area is Vienna and Lower Austria. Linz is not a garage-door area."
    >
      <EnglishProse>
        <p>
          Travel is 132 € in Vienna and 180 € in Lower Austria. If the drive there and back takes more than one hour, the travel fee is 240 € instead. A labour unit is 30 minutes at 90 €. A return visit to fit a part is 90 € plus the part, not a second diagnosis fee. Travel is charged for each visit.
        </p>
        <p>
          Published repair ranges, gross and including 20% VAT, depend on the door and the fault: spring replacement 180–300 €, rollers 60–120 €, opener repair 240–600 €, lubrication and a function check 120 €, opener adjustment 96–180 €, and a safety inspection 120–240 €. These are ranges, not a quote for your door. The figure for your door is named before the work.
        </p>
        <p>
          Do not tension, wind or release a torsion spring yourself. A broken spring stores enough force to injure you. Do not raise the force limit on the opener to make a door close, and do not bypass the safety sensors.
        </p>
        <p>
          In Linz we do not list garage-door repair as a service area. Household appliances are the Linz work. If you need a door looked at there, ask when you call. We say yes or no before a visit is booked.
        </p>
        <p>
          <Link href="/en/prices" className="border-b border-current">All published rates</Link>
          {" · "}
          <Link href="/garagentore" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            German garage-door pages
          </Link>
        </p>
      </EnglishProse>
    </EnglishFrame>
  );
}
