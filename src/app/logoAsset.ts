import fs from "fs";
import path from "path";

const LOGO_PATH = path.join(process.cwd(), "public/assets/logo.png");

/** Cache-busted logo URL — updates automatically when logo.png is replaced. */
export function getLogoSrc(): string {
  try {
    const { mtimeMs } = fs.statSync(LOGO_PATH);
    return `/assets/logo.png?v=${Math.floor(mtimeMs)}`;
  } catch {
    return "/assets/logo.png";
  }
}
