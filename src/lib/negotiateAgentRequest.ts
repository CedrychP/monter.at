import { homepageMarkdown, notFoundMarkdown } from "./agentDocuments";
import { preferredType } from "./contentNegotiation";
import { shouldServeHtml } from "./publicPaths";

export type AgentNegotiation =
  | { action: "next" }
  | { action: "markdown"; status: 200 | 404; body: string };

export function negotiateAgentRequest(input: {
  pathname: string;
  method: string;
  accept: string | null;
}): AgentNegotiation {
  if (input.method !== "GET" && input.method !== "HEAD") return { action: "next" };
  if (preferredType(input.accept) !== "text/markdown") return { action: "next" };

  if (input.pathname === "/") {
    return { action: "markdown", status: 200, body: homepageMarkdown() };
  }

  if (shouldServeHtml(input.pathname)) return { action: "next" };

  return { action: "markdown", status: 404, body: notFoundMarkdown() };
}
