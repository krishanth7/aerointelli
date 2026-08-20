import Link from "next/link";
import { headerCta } from "@/config/navigation";
import { StoreNotice } from "./StoreNotice";

export function HeaderCTA({ variant = "desktop" }: { variant?: "desktop" | "panel" }) {
  const base =
    "inline-flex items-center justify-center rounded-[14px] bg-ink font-semibold text-surface-muted outline-none transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:bg-[#0f1214] hover:shadow-[0_8px_20px_-10px_rgba(16,24,28,0.55)] focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:translate-y-0";

  const sizing =
    variant === "panel"
      ? "h-[52px] w-full text-[15px]"
      : "h-[44px] shrink-0 px-5 text-[14px] 2xl:px-6";

  const className = `${base} ${sizing}`;

  // While the store is closed the CTA opens a notice instead of navigating.
  // Same button, same styling — only the behaviour differs, so nothing about
  // the header's layout changes on the day the flag flips.
  if (headerCta.comingSoon) return <StoreNotice className={className} />;

  return (
    <Link href={headerCta.href} className={className}>
      {headerCta.label}
    </Link>
  );
}
