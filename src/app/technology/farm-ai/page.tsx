import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Farm AI",
  alternates: { canonical: "/technology/farm-ai" },
};

export default function Page() {
  return <PagePlaceholder title="Farm AI" kicker="Technology" />;
}