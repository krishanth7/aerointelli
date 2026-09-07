import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Commercial Farm",
  alternates: { canonical: "/solutions/commercial-farm" },
};

export default function Page() {
  return <PagePlaceholder title="Commercial Farm" kicker="Solutions" />;
}