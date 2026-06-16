import { Suspense } from "react";
import SearchPage from "./SearchPage";

export const metadata = {
  title: "Suche | MONTER Reparatur & Service",
  description:
    "Leistungen, Marken und Ratgeber durchsuchen — MONTER Reparatur & Service in Wien.",
  alternates: {
    canonical: "/suche"
  }
};

export default function SuchePage() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}
