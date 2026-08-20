import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Aeroponic Systems",
  alternates: { canonical: "/products/aeroponic-systems" },
};

export default function Page() {
  return <PagePlaceholder title="Aeroponic Systems" kicker="Products" />;
}
