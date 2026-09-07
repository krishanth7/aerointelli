import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Hydroponics",
  alternates: { canonical: "/knowledge/hydroponics" },
};

export default function Page() {
  return <PagePlaceholder title="Hydroponics" kicker="Knowledge" />;
}