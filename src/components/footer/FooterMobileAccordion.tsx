"use client";

import Link from "next/link";
import { useState } from "react";
import { footerNavigation } from "@/config/footer";

export function FooterMobileAccordion() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <nav aria-label="Footer" className="md:hidden">
      {footerNavigation.map((section) => {
        const open = openSection === section.title;
        const panelId = `footer-${section.title.toLowerCase()}`;

        return (
          <div key={section.title} className="border-b border-footer-border">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenSection(open ? null : section.title)}
                className="flex min-h-[54px] w-full items-center justify-between gap-4 text-left text-[11.5px] font-medium uppercase tracking-[0.16em] text-footer-text outline-none transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {section.title}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className={`h-4 w-4 shrink-0 text-footer-muted transition-transform duration-[240ms] ${
                    open ? "rotate-90" : ""
                  }`}
                >
                  <path
                    d="M6 3.5 10.5 8 6 12.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h3>
            <ul id={panelId} hidden={!open} className="space-y-4 pb-6 pt-1">
              {section.links.map((link) => (
                <li key={`${section.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="inline-block rounded-[6px] py-1 text-[14px] text-footer-secondary outline-none transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
