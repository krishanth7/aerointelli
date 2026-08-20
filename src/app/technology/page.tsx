import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Technology",
  alternates: { canonical: "/technology" },
};

export default function Page() {
  return <PagePlaceholder title="Technology" kicker="Platform" />;
}
