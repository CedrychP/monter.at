import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../DetailPageLayout";
import { HubFaq } from "../../HubBlocks";
import { isBrandDeviceEnriched } from "../../marken/brandDeviceContent";
import { brandDeviceCategories } from "../../marken/devices";
import { buildMetadata } from "../../pageMetadata";
import { appliancePages, getAppliancePage, type AppliancePage } from "../appliancePages";

type AppliancePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const relatedBySlug: Record<string, string[]> = {
  "waschmaschine-reparatur-wien": ["trockner-reparatur-wien", "geschirrspueler-reparatur-wien"],
  "geschirrspueler-reparatur-wien": ["waschmaschine-reparatur-wien", "backofen-herd-reparatur-wien"],
  "kuehlschrank-reparatur-wien": ["tiefkuehl-reparatur-wien", "geschirrspueler-reparatur-wien"],
  "tiefkuehl-reparatur-wien": ["kuehlschrank-reparatur-wien", "waschmaschine-reparatur-wien"],
  "trockner-reparatur-wien": ["waschmaschine-reparatur-wien", "waschtrockner-reparatur-wien"],
  "backofen-herd-reparatur-wien": ["geschirrspueler-reparatur-wien", "dunstabzug-reparatur-wien"],
  "waschtrockner-reparatur-wien": ["waschmaschine-reparatur-wien", "trockner-reparatur-wien"]
};

function brandsForPage(slug: string) {
  if (slug === "geschirrspueler-reparatur-wien") {
    return [
      { brand: "AEG", slug: "aeg-reparatur-wien" },
      { brand: "Bauknecht", slug: "bauknecht-reparatur-wien" },
      { brand: "Bosch", slug: "bosch-reparatur-wien" }
    ];
  }
  if (
    slug === "waschmaschine-reparatur-wien" ||
    slug === "kuehlschrank-reparatur-wien" ||
    slug === "trockner-reparatur-wien"
  ) {
    return [
      { brand: "AEG", slug: "aeg-reparatur-wien" },
      { brand: "Bosch", slug: "bosch-reparatur-wien" },
      { brand: "Miele", slug: "miele-reparatur-wien" }
    ];
  }
  return [
    { brand: "Bosch", slug: "bosch-reparatur-wien" },
    { brand: "Miele", slug: "miele-reparatur-wien" },
    { brand: "Siemens", slug: "siemens-reparatur-wien" }
  ];
}

function relatedEntries(page: AppliancePage) {
  const hub = {
    category: "Übersicht",
    title: "Haushaltsgeräte Reparatur Wien",
    href: "/haushaltsgeraete"
  };

  const preferred = relatedBySlug[page.slug] ?? [];
  const relatedAppliances = [
    ...preferred
      .map((slug) => appliancePages.find((item) => item.slug === slug))
      .filter((item): item is AppliancePage => Boolean(item)),
    ...appliancePages.filter((item) => item.slug !== page.slug && !preferred.includes(item.slug))
  ]
    .slice(0, 2)
    .map((item) => ({
      category: item.category,
      title: item.title,
      href: `/haushaltsgeraete/${item.slug}`
    }));

  const device = brandDeviceCategories.find((item) => item.serviceSlug === page.slug);
  const extras =
    page.slug === "trockner-reparatur-wien"
      ? [
          {
            category: "Service",
            title: "Lieferung, Anschluss und Altgeräte-Mitnahme",
            href: "/lieferung-montage"
          }
        ]
      : [];

  const relatedBrands = brandsForPage(page.slug)
    .slice(0, extras.length ? 2 : 3)
    .map((brand) => {
      const comboReady = Boolean(
        device && isBrandDeviceEnriched(brand.slug, device.slug)
      );
      return comboReady && device
        ? {
            category: brand.brand,
            title: `${brand.brand} ${device.label} Reparatur`,
            href: `/marken/${brand.slug}/${device.slug}`
          }
        : {
            category: brand.brand,
            title: `${brand.brand} Reparatur Wien`,
            href: `/marken/${brand.slug}`
          };
    });

  return [hub, ...relatedAppliances, ...extras, ...relatedBrands];
}

export function generateStaticParams() {
  return appliancePages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: AppliancePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getAppliancePage(slug);

  if (!page) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.description,
    path: `/haushaltsgeraete/${page.slug}`
  });
}

export default async function ApplianceDetailPage({ params }: AppliancePageProps) {
  const { slug } = await params;
  const page = getAppliancePage(slug);

  if (!page) {
    notFound();
  }

  const related = relatedEntries(page);

  return (
    <DetailPageLayout
      hub={{ label: "Haushaltsgeräte", href: "/haushaltsgeraete" }}
      category={page.category}
      h1={page.h1}
      intro={page.intro}
      contactNote="Für schnelle Einschätzung, Terminabstimmung und Notdienst-Kontakt."
      checklist={page.checklist}
      sections={page.sections}
      relatedEyebrow="Verwandte Leistungen"
      relatedTitle="Weitere Reparaturen im Service."
      related={related}
      jsonLd={{
        name: page.title,
        description: page.description,
        path: `/haushaltsgeraete/${page.slug}`
      }}
    >
      <HubFaq
        eyebrow="Häufige Fragen"
        title={`${page.category}: kurz beantwortet.`}
        items={page.faq}
      />
    </DetailPageLayout>
  );
}
