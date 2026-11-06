/** Englische Vertrauenspfade, die Agents erwarten. Inhalt bleibt die bestehende deutsche Seite. */
export const trustAnchorRewrites = [
  { source: "/about", destination: "/ueber-uns" },
  { source: "/contact", destination: "/kontakt" },
  { source: "/privacy", destination: "/dsgvo" }
] as const;
