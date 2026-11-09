import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { buildMetadata } from "../app/pageMetadata";
import { sitemapGroups } from "../app/sitemapTree";
import { englishIndex, englishPairs, pairedLanguages } from "./englishPages";

test("every English page has one German counterpart and hreflang both ways", () => {
  const german = new Set(englishPairs.map((pair) => pair.de));
  const english = new Set(englishPairs.map((pair) => pair.en));
  assert.equal(german.size, englishPairs.length);
  assert.equal(english.size, englishPairs.length);

  const home = pairedLanguages("/");
  assert.deepEqual(home, { "de-AT": "/", en: "/en", "x-default": "/" });
  assert.equal(pairedLanguages("/en/prices")?.["de-AT"], "/preise");
  assert.equal(pairedLanguages("/blog"), undefined);

  const metadata = buildMetadata({
    title: "Titel",
    description: "Beschreibung",
    path: "/"
  });
  assert.equal(metadata.alternates && "languages" in metadata.alternates && metadata.alternates.languages?.en, "/en");
});

test("the sitemap lists every English page", () => {
  const hrefs = new Set<string>();
  for (const group of sitemapGroups) {
    const walk = (links: { href: string; children?: { href: string }[] }[]) => {
      for (const link of links) {
        hrefs.add(link.href);
        if ("children" in link && link.children) walk(link.children);
      }
    };
    hrefs.add(group.href);
    walk(group.links);
  }
  for (const item of englishIndex) {
    assert.equal(hrefs.has(item.href), true, item.href);
  }
});

test("the English price page keeps the published gross amounts", () => {
  const english = readFileSync(new URL("../app/en/prices/page.tsx", import.meta.url), "utf8");
  const german = readFileSync(new URL("../app/preise/page.tsx", import.meta.url), "utf8");
  for (const amount of ["96 €", "120 €", "144 €", "158 €", "180 €", "198 €", "132 €", "200 €", "240 €", "90 €", "60 €"]) {
    assert.equal(english.includes(amount), true, amount);
    assert.equal(german.includes(amount), true, `${amount} missing on the German price page`);
  }
  assert.match(english, /15 minutes/);
  assert.match(german, /15 Minuten/);
});
