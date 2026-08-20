import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Insights",
  alternates: { canonical: "/resources/insights" },
};

export default function Page() {
  return <PagePlaceholder title="Insights" kicker="Resources" />;
}
