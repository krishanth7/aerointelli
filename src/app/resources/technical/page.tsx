import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Technical Resources",
  alternates: { canonical: "/resources/technical" },
};

export default function Page() {
  return <PagePlaceholder title="Technical Resources" kicker="Resources" />;
}
