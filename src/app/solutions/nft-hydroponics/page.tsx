import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "NFT Hydroponics",
  alternates: { canonical: "/solutions/nft-hydroponics" },
};

export default function Page() {
  return <PagePlaceholder title="NFT Hydroponics" kicker="Solutions" />;
}
