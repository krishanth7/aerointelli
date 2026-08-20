import Link from "next/link";
import { footerLegalLinks } from "@/config/footer";

export function FooterLegal() {
  return (
    <div className="text-[12px] tracking-[0.04em] text-footer-muted">
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
        {footerLegalLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-[6px] outline-none transition-colors duration-200 hover:text-footer-text focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
