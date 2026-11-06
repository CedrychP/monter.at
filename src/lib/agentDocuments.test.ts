import assert from "node:assert/strict";
import test from "node:test";
import { homepageMarkdown, notFoundMarkdown } from "./agentDocuments";
import { homeDescription, homeTitle } from "./homeMeta";
import { siteConfig } from "../app/siteConfig";

test("homepage markdown is a nonempty text/markdown document", () => {
  const body = homepageMarkdown();
  assert.ok(body.startsWith(`# ${homeTitle}`));
  assert.ok(body.includes(homeDescription));
  assert.ok(body.length > 20);
  assert.equal(body.includes("<html"), false);
  assert.ok(body.includes(`${siteConfig.siteUrl}/llms.txt`));
});

test("markdown 404 explains the miss and links to a recovery document", () => {
  const body = notFoundMarkdown();
  assert.ok(body.length >= 20);
  assert.match(body, /nicht gefunden/i);
  assert.match(body, /https:\/\/www\.monter\.at\/llms\.txt/);
  assert.match(body, /https:\/\/www\.monter\.at\/sitemap\.xml/);
  assert.equal(body.includes("<html"), false);
});
