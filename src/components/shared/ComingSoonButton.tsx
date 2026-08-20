"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, type ReactNode } from "react";

/**
 * A control that looks like a link but announces that its destination is not
 * open yet.
 *
 * A button rather than a link, deliberately. Navigating somebody to a section
 * that is not ready is worse than saying plainly that it is not ready — and a
 * real `<a>` would also be crawled and followed.
 *
 * Built on the native `<dialog>` element opened with `showModal()`, which gets
 * the accessibility work for free and correctly: focus is trapped while it is
 * open, Escape closes it, the rest of the page is inert to assistive
 * technology, and it renders in the browser's top layer so it cannot be buried
 * by a stacking context — which is what a hand-rolled absolutely-positioned
 * popover would get wrong inside the mobile menu.
 *
 * The notice itself is always light-toned even when the trigger sits on a dark
 * band. It floats above its own backdrop rather than within the section, so it
 * belongs to the page rather than to the band it was opened from.
 */
export function ComingSoonButton({
  label,
  title,
  body,
  className,
  action,
}: {
  label: ReactNode;
  title: string;
  body: string;
  /** Applied to the trigger, so it is visually identical to the link it replaces. */
  className: string;
  /** The one useful thing left to do. Omit for a notice with only a close. */
  action?: { href: string; label: string };
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Clicking the backdrop closes it. The backdrop is the dialog element
    // itself outside its own box, so a click whose target is the dialog rather
    // than anything inside it means the backdrop was hit.
    function handleClick(event: MouseEvent) {
      if (event.target === dialog) dialog!.close();
    }

    dialog.addEventListener("click", handleClick);
    return () => dialog.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={className}
      >
        {label}
      </button>

      {/* Named with `aria-label` rather than `aria-labelledby`: several of these
          can sit on one page, and pointing at an id would mean minting a unique
          one per instance for no gain — the heading text is the name either
          way. */}
      <dialog
        ref={dialogRef}
        aria-label={title}
        className="m-auto w-[calc(100vw-32px)] max-w-[420px] rounded-[20px] border border-hairline bg-surface p-0 text-ink backdrop:bg-ink/45 backdrop:backdrop-blur-[2px]"
      >
        <div className="p-6 md:p-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Launching soon
            </p>
          </div>

          <h2 className="mt-4 text-[22px] font-medium leading-[1.2] tracking-[-0.025em] md:text-[24px]">
            {title}
          </h2>

          <p className="mt-3.5 text-[14.5px] leading-[1.7] text-ink-soft">{body}</p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            {action ? (
              <Link
                href={action.href}
                onClick={close}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-[14px] bg-ink px-5 text-[14.5px] font-semibold text-surface-muted transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-[#0f1214]"
              >
                {action.label}
              </Link>
            ) : null}
            <button
              type="button"
              onClick={close}
              className={`inline-flex min-h-[48px] items-center justify-center rounded-[14px] border border-hairline-strong px-5 text-[14.5px] font-medium transition-colors duration-200 hover:bg-surface-muted ${
                action ? "" : "flex-1"
              }`}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
