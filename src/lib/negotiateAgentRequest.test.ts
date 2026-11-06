import assert from "node:assert/strict";
import test from "node:test";
import { homepageMarkdown, notFoundMarkdown } from "./agentDocuments";
import { negotiateAgentRequest } from "./negotiateAgentRequest";
import { shouldServeHtml } from "./publicPaths";

test("the homepage returns markdown only when markdown is preferred", () => {
  const markdown = negotiateAgentRequest({
    pathname: "/",
    method: "GET",
    accept: "text/markdown"
  });
  assert.deepEqual(markdown, { action: "markdown", status: 200, body: homepageMarkdown() });

  const html = negotiateAgentRequest({
    pathname: "/",
    method: "GET",
    accept: "text/html"
  });
  assert.deepEqual(html, { action: "next" });
});

test("an unknown path returns a markdown 404 and a real page stays HTML", () => {
  const missing = negotiateAgentRequest({
    pathname: "/__ora-404-probe-zx82k3nv",
    method: "GET",
    accept: "text/markdown"
  });
  assert.equal(missing.action, "markdown");
  if (missing.action !== "markdown") return;
  assert.equal(missing.status, 404);
  assert.equal(missing.body, notFoundMarkdown());

  assert.equal(shouldServeHtml("/preise"), true);
  assert.equal(shouldServeHtml("/about"), true);
  assert.equal(shouldServeHtml("/leistungen"), true);
  assert.deepEqual(
    negotiateAgentRequest({ pathname: "/preise", method: "GET", accept: "text/markdown" }),
    { action: "next" }
  );
});

test("POST does not negotiate", () => {
  assert.deepEqual(
    negotiateAgentRequest({ pathname: "/fehlt", method: "POST", accept: "text/markdown" }),
    { action: "next" }
  );
});
