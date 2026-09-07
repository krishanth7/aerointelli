import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Calculators",
  alternates: { canonical: "/knowledge/calculators" },
};

export default function Page() {
  return <PagePlaceholder title="Calculators" kicker="Knowledge" />;
}