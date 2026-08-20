export function LegalContactBlock({ email }: { email: string }) {
  return (
    <section data-contact-block className="mt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-legal-muted">
        Policy complete
      </p>

      <span
        aria-hidden="true"
        data-contact-rule
        className="mt-4 block h-px w-full bg-legal-border"
      />

      <div data-contact-content className="py-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-legal-muted">
          Privacy &amp; data
        </p>
        <p className="mt-3 text-[17px] leading-[1.7] text-legal-ink md:text-[19px]">
          Questions regarding this Privacy Policy? Contact Aero Intelli Private Limited.
        </p>
        <a
          href={`mailto:${email}`}
          className="group mt-4 inline-flex min-h-[44px] items-center gap-2 text-[15.5px] font-medium text-legal-link outline-none transition-colors duration-200 hover:text-legal-link-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-legal-focus"
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

      <span aria-hidden="true" className="block h-px w-full bg-legal-border" />
    </section>
  );
}
