import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Intelligence RAS",
  alternates: { canonical: "/technology/intelligence-ras" },
};

export default function Page() {
  return <PagePlaceholder title="Intelligence RAS" kicker="Technology" />;
}