import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Publications",
  alternates: { canonical: "/research/publications" },
};

export default function Page() {
  return <PagePlaceholder title="Publications" kicker="Research" />;
}