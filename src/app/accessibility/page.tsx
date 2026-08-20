import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Accessibility",
  alternates: { canonical: "/accessibility" },
};

export default function Page() {
  return <PagePlaceholder title="Accessibility" kicker="Legal" />;
}
