import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Products",
  alternates: { canonical: "/products" },
};

export default function Page() {
  return <PagePlaceholder title="Products" kicker="Systems" />;
}
