import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../../pageMetadata";
import { EnglishFrame, EnglishProse } from "../EnglishFrame";

export const metadata: Metadata = buildEnglishMetadata({
  title: "Repair Service Area Vienna, Lower Austria and Linz | MONTER",
  description:
    "MONTER repairs appliances in Vienna, Lower Austria and Linz. No jobs outside those three areas. Linz travel is quoted before the visit.",
  path: "/en/service-area",
  keywords: ["appliance repair Vienna", "appliance repair Lower Austria", "appliance repair Linz"]
});

export default function EnglishAreaPage() {
  return (
    <EnglishFrame
      eyebrow="Where we work"
      title="Vienna, Lower Austria and Linz."
      lede="Those are the three areas. Outside them we do not take jobs. Vienna and Lower Austria are served from Floridsdorf. In Linz the technicians are already there."
    >
      <EnglishProse>
        <p>
          Vienna is all 23 districts. The household travel fee is 96 € everywhere in the city, and the garage-door travel fee is 132 €. The district pages, with the postcode and what is typical for that building stock, are in German.
        </p>
        <p>
          Lower Austria is served from the same Floridsdorf base. Household travel is 120 €. Garage-door travel is 180 €. If the drive there and back takes more than one hour, the travel fee is 240 € instead of the ordinary rate. We say that before the appointment. A town that has no page of its own can still be in range. Call, and we say whether the visit makes sense.
        </p>
        <p>
          Linz has technicians on site. There is no fixed Linz travel amount. The fee is quoted from the address before a time is set. The Linz work is household appliances. Garage doors are not a Linz service area. An air conditioner in Linz is only booked if the call confirms it.
        </p>
        <p>
          Burgenland, Styria, Salzburg and the rest of Upper Austria are not service areas. A page that used to point there now sends you back to this map.
        </p>
        <p>
          <Link href="/einsatzgebiete" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            The German area pages
          </Link>{" "}
          list the districts and the towns we drive to regularly.
        </p>
      </EnglishProse>
    </EnglishFrame>
  );
}
