import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Hydroponic Systems",
  alternates: { canonical: "/products/hydroponic-systems" },
};

export default function Page() {
  return <PagePlaceholder title="Hydroponic Systems" kicker="Products" />;
}
