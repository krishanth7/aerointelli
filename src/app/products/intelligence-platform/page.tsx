import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Intelligence Platform",
  alternates: { canonical: "/products/intelligence-platform" },
};

export default function Page() {
  return <PagePlaceholder title="Intelligence Platform" kicker="Products" />;
}
