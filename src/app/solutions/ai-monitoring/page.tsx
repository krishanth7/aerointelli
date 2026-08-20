import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "AI & Monitoring",
  alternates: { canonical: "/solutions/ai-monitoring" },
};

export default function Page() {
  return <PagePlaceholder title="AI & Monitoring" kicker="Solutions" />;
}
