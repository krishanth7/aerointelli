import { FooterBrand } from "./FooterBrand";
import { FooterLegal } from "./FooterLegal";
import { FooterMobileAccordion } from "./FooterMobileAccordion";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSocials } from "./FooterSocials";

export function Footer() {
  return (
    <footer className="relative isolate mt-24 overflow-hidden border-t border-hairline bg-footer text-footer-text md:mt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden motion-reduce:hidden"
      >
        <div className="footer-signal h-px w-[18%] bg-accent/20" />
      </div>

      <div className="relative mx-auto w-full max-w-[1480px] px-6 pt-8 md:px-10">
        <FooterBrand />

        <div className="mt-6 border-t border-footer-border pt-6">
          <FooterNavigation />
          <FooterMobileAccordion />
        </div>

        <div className="mt-7 flex flex-col gap-5 border-t border-footer-border pt-5 md:flex-row md:items-center md:justify-between">
          <FooterSocials />
          <FooterLegal />
        </div>

        <p className="py-3 text-center text-[12px] tracking-[0.04em] text-footer-muted">
          © {new Date().getFullYear()} Aero Intelli Private Limited
        </p>
      </div>
    </footer>
  );
}
