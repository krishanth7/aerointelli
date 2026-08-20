import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Automation",
  alternates: { canonical: "/technology/automation" },
};

export default function Page() {
  return <PagePlaceholder title="Automation" kicker="Technology" />;
}
