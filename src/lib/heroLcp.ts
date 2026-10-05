const HERO_LCP_BASE = "https://images.unsplash.com/photo-1580253249119-e953161ee30d";

export const heroLcpImage = `${HERO_LCP_BASE}?auto=format&fit=crop&w=1280&q=60`;

const HERO_WIDTHS = [480, 768, 1080, 1440];

export function heroCdnUrl(url: string, width: number) {
  const base = url.split("?")[0];
  return `${base}?auto=format&fit=crop&w=${width}&q=45`;
}

export function heroSrcSet(url: string) {
  return HERO_WIDTHS.map((width) => `${heroCdnUrl(url, width)} ${width}w`).join(", ");
}
