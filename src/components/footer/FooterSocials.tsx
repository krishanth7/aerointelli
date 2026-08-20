import { footerSocials, type SocialPlatform } from "@/config/footer";

const iconPaths: Record<SocialPlatform, string> = {
  instagram:
    "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.07 1.07 0 1 1-2.15 0 1.07 1.07 0 0 1 2.15 0ZM16.6 2.6H7.4A4.8 4.8 0 0 0 2.6 7.4v9.2a4.8 4.8 0 0 0 4.8 4.8h9.2a4.8 4.8 0 0 0 4.8-4.8V7.4a4.8 4.8 0 0 0-4.8-4.8Zm3.2 14a3.2 3.2 0 0 1-3.2 3.2H7.4a3.2 3.2 0 0 1-3.2-3.2V7.4a3.2 3.2 0 0 1 3.2-3.2h9.2a3.2 3.2 0 0 1 3.2 3.2v9.2Z",
  youtube:
    "M21.6 8.1a2.6 2.6 0 0 0-1.83-1.84C18.15 5.8 12 5.8 12 5.8s-6.15 0-7.77.46A2.6 2.6 0 0 0 2.4 8.1 27.3 27.3 0 0 0 1.95 12c0 1.32.15 2.63.45 3.9a2.6 2.6 0 0 0 1.83 1.84c1.62.46 7.77.46 7.77.46s6.15 0 7.77-.46a2.6 2.6 0 0 0 1.83-1.84c.3-1.27.45-2.58.45-3.9 0-1.32-.15-2.63-.45-3.9ZM10.05 15V9l5.2 3-5.2 3Z",
  x: "M17.2 3h3.3l-7.2 8.24L21.8 21h-6.6l-4.4-5.35L5.7 21H2.4l7.7-8.8L2.2 3h6.8l4 4.87L17.2 3Zm-1.16 16.05h1.83L8.05 4.86H6.1l9.94 14.19Z",
};

export function FooterSocials() {
  return (
    <div>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
        {footerSocials.map((social) => (
          <li key={social.platform}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} — Aero Intelli`}
              className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-[8px] text-[14px] text-footer-secondary outline-none transition-colors duration-200 hover:text-footer-text focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[21px] w-[21px] transition-transform duration-200 group-hover:-translate-y-0.5"
              >
                <path d={iconPaths[social.platform]} fill="currentColor" />
              </svg>
              <span className="relative py-1">
                {social.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
