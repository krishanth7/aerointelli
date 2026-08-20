import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Data Platform",
  alternates: { canonical: "/technology/data-platform" },
};

export default function Page() {
  return <PagePlaceholder title="Data Platform" kicker="Technology" />;
}
