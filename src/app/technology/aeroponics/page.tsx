import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Aeroponics",
  alternates: { canonical: "/technology/aeroponics" },
};

export default function Page() {
  return <PagePlaceholder title="Aeroponics" kicker="Technology" />;
}