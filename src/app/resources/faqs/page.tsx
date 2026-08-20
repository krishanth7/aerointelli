import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "FAQs",
  alternates: { canonical: "/resources/faqs" },
};

export default function Page() {
  return <PagePlaceholder title="FAQs" kicker="Resources" />;
}
