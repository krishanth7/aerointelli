"use client";

type MenuButtonProps = {
  open: boolean;
  controls: string;
  onClick: () => void;
};

export function MenuButton({ open, controls, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
      aria-controls={controls}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-hairline bg-surface-muted outline-none transition-colors duration-200 hover:border-hairline-strong focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <span aria-hidden="true" className="relative block h-[10px] w-[18px]">
        <span
          className={`absolute left-0 block h-[1.5px] w-full rounded-full bg-ink transition-transform duration-[250ms] ${
            open ? "top-[4px] rotate-45" : "top-0"
          }`}
        />
        <span
          className={`absolute left-0 block h-[1.5px] w-full rounded-full bg-ink transition-transform duration-[250ms] ${
            open ? "top-[4px] -rotate-45" : "top-[8px]"
          }`}
        />
      </span>
    </button>
  );
}
