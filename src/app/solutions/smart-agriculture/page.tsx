import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Smart Agriculture",
  alternates: { canonical: "/solutions/smart-agriculture" },
};

export default function Page() {
  return <PagePlaceholder title="Smart Agriculture" kicker="Solutions" />;
}