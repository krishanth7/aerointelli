import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Aero Intelli — home"
      className="group flex shrink-0 items-center gap-2.5 rounded-[10px] outline-none transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
    >
      <Image
        src="/Logo.png"
        alt=""
        width={64}
        height={64}
        priority
        className={`rounded-full ${compact ? "h-7 w-7" : "h-8 w-8 xl:h-9 xl:w-9"}`}
      />
      <span
        className={`font-semibold tracking-[-0.01em] text-ink ${
          compact ? "text-[15px]" : "text-[16px] xl:text-[17px]"
        }`}
      >
        Aero Intelli
      </span>
    </Link>
  );
}
