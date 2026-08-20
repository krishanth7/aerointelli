import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Research",
  alternates: { canonical: "/research" },
};

export default function Page() {
  return <PagePlaceholder title="Research" kicker="Engineering" />;
}
