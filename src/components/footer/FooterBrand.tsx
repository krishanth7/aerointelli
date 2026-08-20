import Image from "next/image";
import Link from "next/link";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div>
        <Link
          href="/"
          aria-label="Aero Intelli — home"
          className="inline-flex items-center gap-3 rounded-[10px] outline-none transition-opacity duration-200 hover:opacity-75 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-4 focus-visible:ring-offset-footer"
        >
          <Image
            src="/Logo.png"
            alt=""
            width={64}
            height={64}
            loading="lazy"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-[17px] font-semibold tracking-[-0.01em] text-footer-text">
            Aero Intelli
          </span>
        </Link>

        <p className="mt-3 max-w-[380px] text-[15px] leading-[1.6] text-footer-secondary">
          Intelligent engineering for food, water and sustainable systems.
        </p>
      </div>

      <div className="flex flex-col items-start gap-5 md:items-end">
        <Link
          href="/contact"
          className="group inline-flex h-[46px] w-full items-center justify-between gap-6 rounded-[12px] border border-footer-border px-5 text-[14px] font-medium text-footer-text outline-none transition-colors duration-200 hover:border-accent/40 hover:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-footer sm:w-auto"
        >
          Contact Aero Intelli
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 text-footer-muted transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-accent">
            <path
              d="M3 8h9.5M9 4.5 12.5 8 9 11.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
