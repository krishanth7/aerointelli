export function LegalDarkContact({
  label,
  heading,
  email,
  body,
}: {
  label: string;
  heading: string;
  email: string;
  body?: string;
}) {
  return (
    <section data-contact-block className="mt-20">
      <span
        aria-hidden="true"
        data-contact-rule
        className="block h-px w-full bg-legal-border"
      />

      <div
        data-contact-content
        className="mt-8 rounded-[16px] border border-white/10 bg-legal-dark p-6 md:p-10"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-legal-dark-muted md:text-[11px]">
          {label}
        </p>
        <p className="mt-4 max-w-[560px] text-[26px] font-medium leading-[1.15] tracking-[-0.02em] text-legal-bg md:text-[30px]">
          {heading}
        </p>
        {body ? (
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.75] text-legal-dark-muted md:text-[16px]">
            {body}
          </p>
        ) : null}
        <a
          href={`mailto:${email}`}
          className="group mt-5 inline-flex min-h-[44px] items-center gap-2 text-[15.5px] font-medium text-legal-bg outline-none transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-legal-focus"
        >
          <span className="legal-underline">{email}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 12 12"
            className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
          >
            <path
              d="M4 2h6v6M10 2 3 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
