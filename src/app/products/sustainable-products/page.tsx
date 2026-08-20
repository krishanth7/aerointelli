import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Sustainable Products",
  alternates: { canonical: "/products/sustainable-products" },
};

export default function Page() {
  return <PagePlaceholder title="Sustainable Products" kicker="Products" />;
}
