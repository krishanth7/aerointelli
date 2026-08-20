import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "RAS Systems",
  alternates: { canonical: "/products/ras-systems" },
};

export default function Page() {
  return <PagePlaceholder title="RAS Systems" kicker="Products" />;
}
