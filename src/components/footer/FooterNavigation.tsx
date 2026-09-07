"use client";

import Link from "next/link";
import { useState } from "react";
import { footerNavigation } from "@/config/footer";

export function FooterNavigation() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav aria-label="Footer" className="hidden md:block">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-footer-muted">
        Explore
      </p>
      <div
        className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-5"
        onMouseLeave={() => setHovered(null)}
      >
        {footerNavigation.map((section) => (
          <div
            key={section.title}
            onMouseEnter={() => setHovered(section.title)}
            className={`transition-opacity duration-200 ${
              hovered && hovered !== section.title ? "opacity-75" : "opacity-100"
            }`}
          >
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-footer-text">
              {section.title}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {section.links.map((link) => (
                <li key={`${section.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="inline-block rounded-[6px] text-[13.5px] leading-snug text-footer-secondary outline-none transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
