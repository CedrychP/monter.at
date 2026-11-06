import assert from "node:assert/strict";
import test from "node:test";
import { markdownHeaders, preferredType } from "./contentNegotiation";

const chromeAccept =
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";

test("text/markdown is preferred when it is the only type", () => {
  assert.equal(preferredType("text/markdown"), "text/markdown");
});

test("text/html stays HTML", () => {
  assert.equal(preferredType("text/html"), "text/html");
});

test("a higher q-value wins", () => {
  assert.equal(preferredType("text/markdown, text/html;q=0.8"), "text/markdown");
  assert.equal(preferredType("text/html, text/markdown;q=0.1"), "text/html");
});

test("an explicit q=0 rejection is not served", () => {
  assert.equal(preferredType("text/markdown;q=0, text/html"), "text/html");
});

test("a browser Accept header stays HTML", () => {
  assert.equal(preferredType(chromeAccept), "text/html");
});

test("a missing Accept header stays HTML", () => {
  assert.equal(preferredType(null), "text/html");
  assert.equal(preferredType(""), "text/html");
});

test("a type this site does not produce is left to the caller", () => {
  assert.equal(preferredType("application/pdf"), null);
});

test("markdown responses name the media type and vary on Accept", () => {
  const headers = markdownHeaders(200);
  assert.equal(headers.get("Content-Type"), "text/markdown; charset=utf-8");
  assert.match(headers.get("Vary") ?? "", /Accept/);

  const missing = markdownHeaders(404);
  assert.equal(missing.get("X-Robots-Tag"), "noindex");
});
