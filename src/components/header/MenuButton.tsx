"use client";

type MenuButtonProps = {
  open: boolean;
  controls: string;
  onClick: () => void;
  dark?: boolean;
};

export function MenuButton({ open, controls, onClick, dark = false }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
      aria-controls={controls}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border outline-none transition-colors duration-200 ${
        dark
          ? "border-white/20 bg-white/10 text-white hover:border-white/40"
          : "border-hairline bg-surface-muted text-ink hover:border-hairline-strong"
      }`}
    >
      <span aria-hidden="true" className="relative block h-[10px] w-[18px]">
        <span
          className={`absolute left-0 block h-[1.5px] w-full rounded-full transition-transform duration-[250ms] ${
            dark ? "bg-white" : "bg-ink"
          } ${open ? "top-[4px] rotate-45" : "top-0"}`}
        />
        <span
          className={`absolute left-0 block h-[1.5px] w-full rounded-full transition-transform duration-[250ms] ${
            dark ? "bg-white" : "bg-ink"
          } ${open ? "top-[4px] -rotate-45" : "top-[8px]"}`}
        />
      </span>
    </button>
  );
}
