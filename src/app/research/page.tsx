import type { Metadata } from "next";
import { ResearchPageClient } from "@/components/research/ResearchPageClient";

export const metadata: Metadata = {
  title: "Research & Development | Aero Intelli",
  description:
    "Explore Aero Intelli's research interests in aquaculture, controlled cultivation, water engineering, artificial intelligence, automation, and sustainable production technologies.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research & Development | Aero Intelli",
    description:
      "Explore Aero Intelli's research interests in aquaculture, controlled cultivation, water engineering, artificial intelligence, automation, and sustainable production technologies.",
    type: "website",
  },
};

export default function ResearchOverviewPage() {
  return <ResearchPageClient />;
}
