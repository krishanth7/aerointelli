import type { Metadata } from "next";
import Link from "next/link";
import { SHELL } from "@/components/shared/shell";

/**
 * The 404 page.
 *
 * Served with a real 404 status by Next, which matters more than how it looks:
 * a "not found" page that returns 200 is a soft 404, and search engines index
 * it as though it were a real page.
 *
 * `noindex` for the same reason, and `follow` rather than `nofollow` — the
 * links out of here are to real pages and are worth crawling.
 *
 * The content is a route back rather than an apology. Somebody who lands here
 * mistyped a URL or followed a stale link; what they need is the shortest path
 * to the thing they were looking for.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const destinations = [
  { href: "/", label: "Home", note: "What Aero Intelli builds." },
  { href: "/about", label: "About", note: "The company, its focus and its approach." },
  { href: "/contact", label: "Contact", note: "Reach the team that handles your subject." },
];

export default function NotFound() {
  return (
    <div className="bg-surface-muted">
      <div className={`${SHELL} flex min-h-[70vh] flex-col justify-center py-20 md:py-28`}>
        <div className="max-w-[720px]">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-soft md:text-[11px]">
              404 — Page not found
            </p>
          </div>

          <h1 className="mt-6 text-[32px] font-medium leading-[1.08] tracking-[-0.03em] md:mt-8 md:text-[52px]">
            This page isn&rsquo;t here.
          </h1>

          <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.75] text-ink-soft md:mt-6 md:text-[17px] md:leading-[1.8]">
            The address may have changed, or it may never have existed. Nothing is broken on your
            end — here is where to go instead.
          </p>
        </div>

        <ul className="mt-10 grid gap-2.5 md:mt-12 md:max-w-[860px] md:grid-cols-3">
          {destinations.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="flex h-full flex-col rounded-[16px] border border-hairline bg-surface p-5 transition-[transform,border-color] duration-200 hover:-translate-y-px hover:border-hairline-strong md:p-6"
              >
                <span className="text-[15.5px] font-medium tracking-[-0.01em]">
                  {destination.label}
                </span>
                <span className="mt-2 text-[13.5px] leading-[1.6] text-ink-soft">
                  {destination.note}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
