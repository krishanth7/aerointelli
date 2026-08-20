import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Sensors & Monitoring",
  alternates: { canonical: "/technology/sensors-monitoring" },
};

export default function Page() {
  return <PagePlaceholder title="Sensors & Monitoring" kicker="Technology" />;
}
