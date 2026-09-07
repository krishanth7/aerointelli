import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Future Technologies",
  alternates: { canonical: "/research/future-technologies" },
};

export default function Page() {
  return <PagePlaceholder title="Future Technologies" kicker="Research" />;
}