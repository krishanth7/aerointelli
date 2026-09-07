import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "RAS Knowledge",
  alternates: { canonical: "/knowledge/ras" },
};

export default function Page() {
  return <PagePlaceholder title="RAS Knowledge" kicker="Knowledge" />;
}