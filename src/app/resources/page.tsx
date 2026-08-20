import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Resources",
  alternates: { canonical: "/resources" },
};

export default function Page() {
  return <PagePlaceholder title="Resources" kicker="Knowledge" />;
}
