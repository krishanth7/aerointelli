import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Automation Systems",
  alternates: { canonical: "/products/automation-systems" },
};

export default function Page() {
  return <PagePlaceholder title="Automation Systems" kicker="Products" />;
}
