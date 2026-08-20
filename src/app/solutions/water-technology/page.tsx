import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Water Technology",
  alternates: { canonical: "/solutions/water-technology" },
};

export default function Page() {
  return <PagePlaceholder title="Water Technology" kicker="Solutions" />;
}
