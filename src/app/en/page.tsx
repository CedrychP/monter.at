import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../pageMetadata";
import { localBusinessId, siteConfig } from "../siteConfig";
import { EnglishFrame, EnglishProse } from "./EnglishFrame";

export const metadata: Metadata = buildEnglishMetadata({
  title: "Appliance Repair in Vienna | MONTER Service",
  description:
    "Washing machine, dishwasher, dryer, fridge or cooker repair in Vienna. Published flat rates, a clear diagnosis. Request a visit.",
  path: "/en",
  keywords: [
    "appliance repair Vienna",
    "washing machine repair Vienna",
    "dishwasher repair Vienna",
    "fridge repair Vienna",
    "oven repair Vienna",
    "garage door repair Vienna",
    "air conditioning repair Vienna"
  ]
});

export default function EnglishHomePage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Appliance Repair in Vienna | MONTER Service",
    description:
      "Washing machine, dishwasher, dryer, fridge or cooker repair in Vienna. Published flat rates, a clear diagnosis. Request a visit.",
    url: `${siteConfig.siteUrl}/en`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: siteConfig.serviceName, url: siteConfig.siteUrl },
    about: { "@id": localBusinessId }
  };

  return (
    <EnglishFrame
      eyebrow="Vienna"
      title="Appliance repair in Vienna."
      lede="MONTER repairs household appliances, garage doors and air conditioners on site. The rates below are gross and include 20% VAT. A request is not yet an order."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <EnglishProse>
        <p>
          We work across all 23 districts of Vienna, in Lower Austria, and in Linz. Outside those three areas we do not take jobs. In Linz the work is household appliances. Garage doors and air conditioners are part of the work in Vienna and Lower Austria. Whether a door or an air conditioner can be booked in Linz is decided on the call.
        </p>
        <p>
          The service address is {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}. The phone is {siteConfig.phoneDisplay}. Email is {siteConfig.email}. The desk is open Monday to Friday, 07:00–18:00. Saturday and Sunday the desk is closed. Out-of-hours rates are on the{" "}
          <Link href="/en/prices" className="border-b border-current">prices page</Link>.
        </p>
        <p>
          Household-appliance travel is 96 € in Vienna and 120 € in Lower Austria. A Gaggenau visit is 200 € instead of those two rates. Diagnosis of a freestanding appliance is 144 €. The full price list, including built-in appliances and garage doors, is published in English.
        </p>
      </EnglishProse>
      <ul className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["Appliances", "Washing machines, dishwashers, dryers, fridges, ovens and more.", "/en/appliance-repair"],
          ["Garage doors", "Springs, openers, rollers and service in Vienna and Lower Austria.", "/en/garage-door-repair"],
          ["Air conditioning", "Split, multi-split and monoblock units. Repair, service and installation.", "/en/air-conditioning"],
          ["Prices", "Travel, diagnosis and labour. Gross, including 20% VAT.", "/en/prices"],
          ["Service area", "Vienna, Lower Austria and Linz. Nowhere else.", "/en/service-area"],
          ["Contact", "Call, or write. The visit is confirmed by us, not by the form.", "/en/contact"]
        ].map(([label, text, href]) => (
          <li key={href} className="bg-white p-6">
            <Link href={href} className="font-display text-2xl font-light tracking-tight hover:text-[color:var(--accent)]">
              {label}
            </Link>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm font-light text-[color:var(--muted)]">
        District pages and brand pages are published in German.{" "}
        <Link href="/" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
          Open the German site
        </Link>
        .
      </p>
    </EnglishFrame>
  );
}
