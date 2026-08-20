import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Solutions",
  alternates: { canonical: "/solutions" },
};

export default function Page() {
  return <PagePlaceholder title="Solutions" kicker="Capabilities" />;
}
