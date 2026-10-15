import { brandDeviceContents } from "../marken/brandDeviceContent";
import { brandPages } from "../marken/brands";
import { brandDeviceCategories } from "../marken/devices";
import { brandDeviceHref } from "../serviceHrefs";

/** Nur Klartext-Codes, die auf den Markenseiten schon freigegeben sind. */
const codePattern = /^(?:[A-Za-z]{1,3}\d{1,4}|i\d{2})$/;

export type ApplianceErrorRow = {
  brand: string;
  device: string;
  deviceSlug: string;
  code: string;
  meaning: string;
  href: string;
};

export function applianceErrorIndex(): ApplianceErrorRow[] {
  const deviceOrder = new Map(brandDeviceCategories.map((device, index) => [device.slug, index]));

  return brandDeviceContents
    .filter((item) => item.enriched && item.errorCodesReviewed)
    .flatMap((item) => {
      const brand = brandPages.find((entry) => entry.slug === item.brandSlug);
      const device = brandDeviceCategories.find((entry) => entry.slug === item.deviceSlug);
      if (!brand || !device) return [];

      return item.errorCodes
        .filter((entry) => codePattern.test(entry.code.trim()))
        .map((entry) => ({
          brand: brand.brand,
          device: device.label,
          deviceSlug: device.slug,
          code: entry.code.trim(),
          meaning: entry.meaning,
          href: brandDeviceHref(brand.slug, device.slug)
        }));
    })
    .sort((a, b) => {
      const deviceDelta = (deviceOrder.get(a.deviceSlug) ?? 99) - (deviceOrder.get(b.deviceSlug) ?? 99);
      if (deviceDelta !== 0) return deviceDelta;
      const brandDelta = a.brand.localeCompare(b.brand, "de");
      if (brandDelta !== 0) return brandDelta;
      return a.code.localeCompare(b.code, "de", { numeric: true });
    });
}
