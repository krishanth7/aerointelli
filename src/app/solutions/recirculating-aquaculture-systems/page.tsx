import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Recirculating Aquaculture Systems",
  alternates: { canonical: "/solutions/recirculating-aquaculture-systems" },
};

export default function Page() {
  return <PagePlaceholder title="Recirculating Aquaculture Systems" kicker="Solutions" />;
}
