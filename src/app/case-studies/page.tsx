import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Case Studies",
  alternates: { canonical: "/case-studies" },
};

export default function Page() {
  return <PagePlaceholder title="Case Studies" kicker="Work" />;
}
