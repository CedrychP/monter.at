import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { trustAnchorRewrites } from "./trustAnchors";

test("agents can open about, contact, and privacy on the existing pages", () => {
  assert.deepEqual(
    trustAnchorRewrites.map((rewrite) => rewrite.source),
    ["/about", "/contact", "/privacy"]
  );

  for (const rewrite of trustAnchorRewrites) {
    const source = readFileSync(new URL(`../app${rewrite.destination}/page.tsx`, import.meta.url), "utf8");
    const text = source.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    assert.ok(text.length >= 500, `${rewrite.destination} has ${text.length} characters`);
  }
});

test("llms.txt tells an agent when to use the site", () => {
  const file = readFileSync(new URL("../../public/llms.txt", import.meta.url), "utf8");
  assert.match(file, /## When to use this/);
  assert.match(file, /01 4171346/);
  assert.match(file, /https:\/\/www\.monter\.at\/preise/);
  assert.match(file, /https:\/\/www\.monter\.at\/reparatur-buchen/);
  assert.ok(file.length < 30000);
});

test("the LocalBusiness entity carries a description", () => {
  const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /"@type": \["LocalBusiness", "Organization"\]/);
  assert.match(layout, /description: homeDescription/);
});
