import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../../pageMetadata";
import { siteConfig } from "../../siteConfig";
import { EnglishFrame, EnglishProse } from "../EnglishFrame";

const address = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;

export const metadata: Metadata = buildEnglishMetadata({
  title: "Contact MONTER Appliance Repair Vienna",
  description:
    "Call 01 4171346 or email info@monter.at. MONTER repairs appliances in Vienna from Rappgasse 1/6, 1210. A request is not yet an order.",
  path: "/en/contact",
  keywords: ["MONTER phone", "appliance repair Vienna contact", "MONTER Vienna address"]
});

export default function EnglishContactPage() {
  return (
    <EnglishFrame
      eyebrow="Contact"
      title="Call, or write."
      lede="The fastest way to a clear answer is the phone. Have the appliance, the fault and the address ready. A request is not yet an order. The appointment stands when we confirm it."
    >
      <EnglishProse>
        <p>
          Phone{" "}
          <a href={`tel:${siteConfig.phoneHref}`} className="border-b border-current">
            <span data-phone-number>{siteConfig.phoneDisplay}</span>
          </a>
          . Email{" "}
          <a href={`mailto:${siteConfig.email}`} className="border-b border-current">
            {siteConfig.email}
          </a>
          . The service address is {address}, Austria.
        </p>
        <p>The desk is open Monday to Friday, 07:00–18:00. Saturday and Sunday it is closed. Evening, weekend and night visits use the out-of-hours rates on the prices page.</p>
        <p>
          The booking form is in German. It asks for the appliance, the fault and a way to reach you. We call back, usually within one working day, and the time is only fixed on that call.{" "}
          <Link href="/reparatur-buchen" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            Open the German booking form
          </Link>
          .
        </p>
        <p>
          Privacy requests go to{" "}
          <a href="mailto:datenschutz@monter.at" className="border-b border-current">
            datenschutz@monter.at
          </a>
          , not to the general inbox. The legal entity is named in the{" "}
          <Link href="/impressum" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            German imprint
          </Link>
          .
        </p>
      </EnglishProse>
    </EnglishFrame>
  );
}
