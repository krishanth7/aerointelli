import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Controlled Environment Farming",
  alternates: { canonical: "/solutions/controlled-environment-farming" },
};

export default function Page() {
  return <PagePlaceholder title="Controlled Environment Farming" kicker="Solutions" />;
}