import Link from "next/link";
import { footerLegalLinks } from "@/config/footer";

export function LegalNavigation({ currentHref }: { currentHref: string }) {
  return (
    <nav aria-label="Legal documents" className="print-hidden mt-10">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13.5px]">
        {footerLegalLinks.map((link) => {
          const active = link.href === currentHref;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-[44px] items-center outline-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-legal-focus ${
                  active
                    ? "font-medium text-legal-heading"
                    : "text-legal-secondary hover:text-legal-heading"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
