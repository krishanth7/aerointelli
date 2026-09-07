import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "R&D",
  alternates: { canonical: "/research/r-and-d" },
};

export default function Page() {
  return <PagePlaceholder title="R&D" kicker="Research" />;
}