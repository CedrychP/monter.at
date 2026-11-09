import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../../pageMetadata";
import { siteConfig } from "../../siteConfig";
import { EnglishFrame, EnglishProse } from "../EnglishFrame";

export const metadata: Metadata = buildEnglishMetadata({
  title: "About MONTER Repair Vienna",
  description:
    "MONTER Reparatur & Service repairs household appliances, garage doors and air conditioners in Vienna, Lower Austria and Linz. The workshop address is Rappgasse 1/6.",
  path: "/en/about"
});

export default function EnglishAboutPage() {
  return (
    <EnglishFrame
      eyebrow="About"
      title="A repair business in Vienna."
      lede="The public name is MONTER Reparatur & Service. We repair the appliance, the door or the air conditioner that is already installed. We are not a partner of the brands we work on."
    >
      <EnglishProse>
        <p>
          The service address is {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}. The legal entity behind the brand is named in the{" "}
          <Link href="/impressum" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            German imprint
          </Link>
          . VAT number {siteConfig.vatId}.
        </p>
        <p>
          The work is household appliances, garage doors and air conditioners. Household appliances are repaired in Vienna, Lower Austria and Linz. Garage doors are Vienna and Lower Austria. We do not take jobs outside those areas. If a repair is not worth the money, we say so before a part is ordered.
        </p>
        <p>
          Prices are published gross, including 20% VAT. The appointment is confirmed by phone. Sending a request does not create an order. Water leaks and a freezer that has stopped are treated as urgent for everyone who calls, not only for customers we already know.
        </p>
        <p>
          The longer account of the business, and the pages for companies and jobs, are in German.{" "}
          <Link href="/ueber-uns" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            Über uns
          </Link>
        </p>
      </EnglishProse>
    </EnglishFrame>
  );
}
