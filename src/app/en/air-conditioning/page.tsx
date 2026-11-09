import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../../pageMetadata";
import { EnglishFrame, EnglishProse } from "../EnglishFrame";

export const metadata: Metadata = buildEnglishMetadata({
  title: "Air Conditioning Repair Vienna | MONTER",
  description:
    "Split, multi-split and monoblock air-conditioning repair, service and installation in Vienna and Lower Austria. Not a manufacturer partnership.",
  path: "/en/air-conditioning",
  keywords: ["air conditioning repair Vienna", "split air conditioner service Vienna", "Klimaanlage repair Vienna"]
});

export default function EnglishClimatePage() {
  return (
    <EnglishFrame
      eyebrow="Air conditioning"
      title="Air-conditioning repair in Vienna."
      lede="Split systems, multi-split systems and monoblock units. Repair, servicing and installation, on site in Vienna and Lower Austria."
    >
      <EnglishProse>
        <p>
          A fixed installation is done by a specialist, not as a DIY job. Before anyone drills, the landlord or the other owners may have to agree, and the outdoor unit needs a place that is allowed. In a protection zone a permit can be required. We say what applies to the address before the work is booked.
        </p>
        <p>
          Weak cooling is often a blocked filter or a dirty heat exchanger, indoors or on the outdoor unit. A closed refrigerant circuit does not use up its charge. If charge is missing, the circuit is leaking. We do not top up a leaking circuit and call it repaired.
        </p>
        <p>
          This is not a partnership with Daikin, Mitsubishi or any other manufacturer. We repair the unit that is installed. Parts, and any work on the refrigerant circuit, are named and priced before they are ordered.
        </p>
        <p>
          Linz is a household-appliance area. Whether an air conditioner there can be booked is decided on the call, not on this page. Travel for household appliances is 96 € in Vienna and 120 € in Lower Austria. Linz travel is quoted first.
        </p>
        <p>
          <Link href="/klimageraete" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            The German air-conditioning pages
          </Link>{" "}
          cover faults, error codes and the individual system types.
        </p>
      </EnglishProse>
    </EnglishFrame>
  );
}
