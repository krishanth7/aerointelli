import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "AI & Intelligence",
  alternates: { canonical: "/technology/ai-intelligence" },
};

export default function Page() {
  return <PagePlaceholder title="AI & Intelligence" kicker="Technology" />;
}
