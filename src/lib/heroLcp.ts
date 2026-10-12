/** Erstes Hero-Bild, lokal als WebP. Die Datei ohne Suffix existiert nicht, nur die Breiten. */
export const heroLcpImage = "/assets/hero-haushaltsgeraete-kueche-wien.webp";

const HERO_WIDTHS = [480, 768, 1080, 1440] as const;

function variantPath(path: string, width: number) {
  const target = HERO_WIDTHS.find((candidate) => candidate >= width) ?? HERO_WIDTHS[HERO_WIDTHS.length - 1];
  return path.replace(/\.webp$/, `-${target}.webp`);
}

export function heroVariant(path: string, width: number) {
  return variantPath(path, width);
}

export function heroSrcSet(path: string) {
  return HERO_WIDTHS.map((width) => `${variantPath(path, width)} ${width}w`).join(", ");
}
