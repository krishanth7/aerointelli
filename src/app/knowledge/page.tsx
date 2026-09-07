import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Knowledge",
  alternates: { canonical: "/knowledge" },
};

export default function Page() {
  return <PagePlaceholder title="Knowledge" kicker="Resources" />;
}