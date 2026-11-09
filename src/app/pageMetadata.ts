import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Interner Pfad mit führendem Slash, z. B. "/preise". Für die Startseite "/". */
  path: string;
  /** Nur setzen, wenn eine Seite bewusst aus dem Index bleiben soll. */
  robots?: Metadata["robots"];
  /** Eigenes Vorschaubild. Ohne Angabe greift das gebrandete Standardbild. */
  images?: string[];
  type?: "website" | "article";
  keywords?: string[];
  /** Nur für type "article": ISO-Daten für og:article. */
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Erzeugt Titel, Description, Canonical, Open Graph und Twitter Card in einem Zug.
 * Ohne diesen Helper erben Unterseiten ohne eigenes openGraph-Objekt den
 * Vorschautext der Startseite — genau der Fehler, der auf /kontakt und /preise auftrat.
 */
export function buildMetadata({
  title,
  description,
  path,
  robots,
  images,
  type = "website",
  keywords,
  publishedTime,
  modifiedTime
}: BuildMetadataInput): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  const url = `${siteConfig.siteUrl}${canonical === "/" ? "" : canonical}`;
  // Das opengraph-image im App-Root wird nur an die Startseite vererbt, deshalb
  // referenzieren alle anderen Seiten es hier ausdruecklich.
  const previewImages = images ?? [`${siteConfig.siteUrl}/opengraph-image`];
  const shared = {
    title,
    description,
    url,
    siteName: siteConfig.serviceName,
    locale: "de_AT",
    images: previewImages
  };

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical
    },
    openGraph:
      type === "article"
        ? { ...shared, type: "article", publishedTime, modifiedTime }
        : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: previewImages
    },
    ...(robots ? { robots } : {})
  };
}

/** Platzhalterseiten: sichtbar und verlinkt, aber nicht im Index. */
export const comingSoonRobots: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true
  }
};

/** Kürzt Fließtext auf eine Meta-Description ohne mitten im Wort zu schneiden. */
export function clipMetaDescription(text: string, max = 158): string {
  const compact = text.replace(/\s+/g, " ").trim();
  if (compact.length <= max) return compact;

  const slice = compact.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 80 ? slice.slice(0, lastSpace) : slice;
  return `${cut.replace(/[.,;:–—-]\s*$/, "")}…`;
}
