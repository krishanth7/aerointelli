import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Precision Aquaculture",
  alternates: { canonical: "/solutions/precision-aquaculture" },
};

export default function Page() {
  return <PagePlaceholder title="Precision Aquaculture" kicker="Solutions" />;
}