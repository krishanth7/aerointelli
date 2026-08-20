"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { HeaderCTA } from "./HeaderCTA";
import { Logo } from "./Logo";
import { MenuButton } from "./MenuButton";
import { MobileNav } from "./MobileNav";

const MOBILE_PANEL_ID = "aero-mobile-navigation";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-[100] animate-[fade-in_400ms_ease-out_both]"
      data-scrolled={scrolled || undefined}
    >
      {menuOpen && (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 -z-10 cursor-default bg-black/8 xl:hidden"
        />
      )}

      <div
        className={`relative px-3 md:px-7 xl:px-10 ${
          scrolled ? "pt-3 md:pt-4" : "pt-3 md:pt-5 xl:pt-6"
        } transition-[padding] duration-300 ease-out`}
      >
        <div
          className={`relative mx-auto flex w-full max-w-[1480px] items-center gap-4 rounded-[20px] border border-hairline bg-surface/95 px-3 backdrop-blur-md transition-[height,box-shadow,background-color] duration-300 ease-out md:px-4 xl:rounded-[24px] xl:px-5 2xl:px-6 ${
            scrolled
              ? "h-[58px] shadow-float-scrolled xl:h-[68px]"
              : "h-[62px] shadow-float xl:h-[78px]"
          }`}
        >
          <Logo />
          <DesktopNav pathname={pathname} />

          <div className="ml-auto hidden shrink-0 items-center xl:flex">
            <HeaderCTA />
          </div>

          <div className="ml-auto flex shrink-0 items-center xl:hidden">
            <MenuButton
              open={menuOpen}
              controls={MOBILE_PANEL_ID}
              onClick={() => setMenuOpen((value) => !value)}
            />
          </div>
        </div>

        <MobileNav
          id={MOBILE_PANEL_ID}
          open={menuOpen}
          pathname={pathname}
          onNavigate={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
}
