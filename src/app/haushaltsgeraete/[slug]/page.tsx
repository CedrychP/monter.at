import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../DetailPageLayout";
import { HubFaq } from "../../HubBlocks";
import { isBrandDeviceEnriched } from "../../marken/brandDeviceContent";
import { brandDeviceCategories } from "../../marken/devices";
import { buildMetadata } from "../../pageMetadata";
import { applianceHref, brandDeviceHref, brandHref } from "../../serviceHrefs";
import {
  appliancePages,
  getAppliancePage,
  relatedApplianceSlugs,
  type AppliancePage
} from "../appliancePages";
import { ApplianceFrame } from "../ApplianceFrame";
import { applianceProblemPages, getApplianceProblem } from "../applianceProblems";

type AppliancePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function brandsForAppliance(slug: string) {
  if (slug === "geschirrspueler") {
    return [
      { brand: "AEG", slug: "aeg" },
      { brand: "Bauknecht", slug: "bauknecht" },
      { brand: "Bosch", slug: "bosch" }
    ];
  }
  if (
    slug === "waschmaschine" ||
    slug === "kuehlschrank" ||
    slug === "trockner"
  ) {
    return [
      { brand: "AEG", slug: "aeg" },
      { brand: "Bosch", slug: "bosch" },
      { brand: "Miele", slug: "miele" }
    ];
  }
  return [
    { brand: "Bosch", slug: "bosch" },
    { brand: "Miele", slug: "miele" },
    { brand: "Siemens", slug: "siemens" }
  ];
}

const problemForDevice: Record<string, { category: string; title: string; href: string }> = {
  waschmaschine: { category: "Problem", title: "Pumpt nicht ab", href: "/haushaltsgeraete/pumpt-nicht-ab" },
  geschirrspueler: { category: "Problem", title: "Pumpt nicht ab", href: "/haushaltsgeraete/pumpt-nicht-ab" },
  "backofen-herd": { category: "Problem", title: "Heizt nicht", href: "/haushaltsgeraete/heizt-nicht" },
  trockner: { category: "Problem", title: "Trocknet nicht", href: "/haushaltsgeraete/trocknet-nicht" },
  waschtrockner: { category: "Problem", title: "Trocknet nicht", href: "/haushaltsgeraete/trocknet-nicht" },
  kuehlschrank: { category: "Problem", title: "Kühlt nicht", href: "/haushaltsgeraete/kuehlt-nicht" },
  tiefkuehl: { category: "Problem", title: "Kühlt nicht", href: "/haushaltsgeraete/kuehlt-nicht" },
  dunstabzug: { category: "Fehlercodes", title: "Fehlercodes nach Marke", href: "/haushaltsgeraete/fehlercodes" },
  fernseher: { category: "Fehlercodes", title: "Fehlercodes nach Marke", href: "/haushaltsgeraete/fehlercodes" }
};

function relatedEntries(page: AppliancePage) {
  const hub = {
    category: "Übersicht",
    title: "Haushaltsgeräte Reparatur Wien",
    href: "/haushaltsgeraete"
  };
  const problemLink = problemForDevice[page.slug] ? [problemForDevice[page.slug]] : [];

  const preferred = relatedApplianceSlugs[page.slug] ?? [];
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
      href: applianceHref(item.slug)
    }));

  const device = brandDeviceCategories.find((item) => item.serviceSlug === page.slug);
  const extras =
    page.slug === "trockner"
      ? [
          {
            category: "Service",
            title: "Lieferung, Anschluss und Altgeräte-Mitnahme",
            href: "/lieferung-montage"
          }
        ]
      : [];

  const relatedBrands = brandsForAppliance(page.slug)
    .slice(0, extras.length ? 2 : 3)
    .map((brand) => {
      const comboReady = Boolean(device && isBrandDeviceEnriched(brand.slug, device.slug));
      return comboReady && device
        ? {
            category: brand.brand,
            title: `${brand.brand} ${device.label} Reparatur`,
            href: brandDeviceHref(brand.slug, device.slug)
          }
        : {
            category: brand.brand,
            title: `${brand.brand} Reparatur Wien`,
            href: brandHref(brand.slug)
          };
    });

  return [hub, ...problemLink, ...relatedAppliances, ...extras, ...relatedBrands];
}

export function generateStaticParams() {
  return [...applianceProblemPages, ...appliancePages].map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: AppliancePageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = getApplianceProblem(slug);
  if (problem) {
    return buildMetadata({
      title: problem.metaTitle,
      description: problem.description,
      path: `/haushaltsgeraete/${problem.slug}`
    });
  }
  const page = getAppliancePage(slug);

  if (!page) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.description,
    path: applianceHref(page.slug)
  });
}

export default async function ApplianceDetailPage({ params }: AppliancePageProps) {
  const { slug } = await params;
  const problem = getApplianceProblem(slug);
  if (problem) {
    return <ApplianceFrame page={problem} />;
  }
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
        path: applianceHref(page.slug)
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
