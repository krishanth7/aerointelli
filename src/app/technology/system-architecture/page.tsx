import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "System Architecture",
  alternates: { canonical: "/technology/system-architecture" },
};

export default function Page() {
  return <PagePlaceholder title="System Architecture" kicker="Technology" />;
}
