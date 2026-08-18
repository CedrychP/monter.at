import type { Metadata } from "next";
import { Suspense } from "react";
import SearchPage from "./SearchPage";
import { buildMetadata } from "../pageMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Suche | MONTER Reparatur & Service",
  description:
    "Leistungen, Marken und Ratgeber durchsuchen — MONTER Reparatur & Service in Wien.",
  path: "/suche",
  robots: {
    index: false,
    follow: true
  }
});

export default function SuchePage() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}
