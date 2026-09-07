import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Intelligence Engine",
  alternates: { canonical: "/research/intelligence-engine" },
};

export default function Page() {
  return <PagePlaceholder title="Intelligence Engine" kicker="Research" />;
}