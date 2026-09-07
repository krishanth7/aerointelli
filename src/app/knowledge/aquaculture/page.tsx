import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Aquaculture",
  alternates: { canonical: "/knowledge/aquaculture" },
};

export default function Page() {
  return <PagePlaceholder title="Aquaculture" kicker="Knowledge" />;
}