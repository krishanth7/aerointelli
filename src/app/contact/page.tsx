import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactExperience } from "@/components/contact/ContactExperience";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactScaffold } from "@/components/contact/ContactScaffold";
import { NetworkDepth } from "@/components/contact/NetworkDepth";
import { SHELL } from "@/components/shared/shell";
import { contactConfig, generalProcess, projectProcess } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aero Intelli about recirculating aquaculture systems, hydroponics, aeroponics, products and orders, partnerships, supply and corporate enquiries.",
  alternates: { canonical: "/contact" },
};

function SectionHeader({
  index,
  title,
  intro,
  tone = "light",
}: {
  index: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <header data-reveal-group className="max-w-[760px]">
      <div className="flex items-center gap-3">
        {/* Deliberately not `data-editorial-number`: that behaviour scrubs
            opacity down to 0.28 for oversized display numerals, which would
            leave this 11px label barely legible. */}
        <span
          className={`text-[11px] font-semibold tabular-nums tracking-[0.14em] ${
            dark ? "text-legal-dark-muted" : "text-ink-soft"
          }`}
        >
          {index}
        </span>
        {/* `data-rule` draws this hairline out from its left edge as the header
            arrives, so the eye is led into the title rather than finding the
            whole block already assembled. */}
        <span
          aria-hidden="true"
          data-rule
          className={`h-px w-8 origin-left ${dark ? "bg-white/20" : "bg-hairline-strong"}`}
        />
      </div>

      <h2
        data-reveal-item
        className={`mt-4 text-[24px] font-medium leading-[1.15] tracking-[-0.025em] md:text-[32px] ${
          dark ? "text-legal-bg" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {intro ? (
        <p
          data-reveal-item
          className={`mt-4 text-[15px] leading-[1.75] md:text-[16.5px] md:leading-[1.8] ${
            dark ? "text-legal-dark-muted" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}

function Steps({
  steps,
  columns = "lg:grid-cols-4",
}: {
  steps: { title: string; body: string }[];
  /** Desktop column count, so a five-stage process stays on one row. */
  columns?: string;
}) {
  return (
    /* The perspective lives on a wrapper rather than on the list, because the
       list is also the `preserve-3d` plane the scroll system rotates — an
       element cannot host the perspective it is being viewed through. */
    <div className="mt-8 [perspective:1300px] [perspective-origin:50%_40%] md:mt-10">
      <ol
        data-scene-3d
        data-depth-group
        className={`grid gap-2.5 sm:grid-cols-2 ${columns} [transform-style:preserve-3d]`}
      >
        {steps.map((step, index) => (
          <li
            key={step.title}
            data-depth-card
            /* No per-card `translateZ` here, deliberately. A Z ladder along the
               index reads well in a row but not in the single column these
               become on a phone: measured at 375px it left the stack ragged by
               19px between the first and last card, which looks like a layout
               fault rather than depth. The plane's own rotation supplies the
               dimension instead, and it applies evenly at every width. */
            className="flex flex-col rounded-[16px] border border-hairline bg-surface p-5 md:p-6"
          >
            <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden="true"
              data-rule
              className="mt-4 block h-px w-6 origin-left bg-accent-deep"
            />
            <p className="mt-4 text-[15.5px] font-medium leading-[1.35]">{step.title}</p>
            <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Page() {
  return (
    <ContactScaffold>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden bg-legal-dark">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full text-accent-deep opacity-[0.28] [mask-image:linear-gradient(to_right,transparent,black_55%)] md:w-[68%] md:opacity-40"
        >
          <NetworkDepth />
        </div>

        <div
          className={`${SHELL} relative pb-14 pt-[104px] md:pb-20 md:pt-[150px] lg:pb-24 lg:pt-[180px]`}
        >
          <div data-reveal-group className="max-w-[820px]">
            <div data-reveal-item className="flex items-center gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-legal-dark-muted md:text-[11px]">
                Contact Aero Intelli
              </p>
            </div>

            <h1 data-reveal-item className="mt-6 text-[34px] font-medium leading-[1.05] tracking-[-0.03em] text-legal-bg min-[414px]:text-[38px] md:mt-8 md:text-[56px] xl:text-[66px]">
              Let&rsquo;s Build What Comes Next.
            </h1>

            <p data-reveal-item className="mt-6 max-w-[600px] border-l-2 border-accent pl-5 text-[15.5px] leading-[1.75] text-legal-dark-muted md:mt-8 md:pl-6 md:text-[17px] md:leading-[1.8]">
              Tell us about your site, your production goals or your order. Enquiries are routed to
              the team that handles that subject, so the reply comes from people who work on it.
            </p>

            {/* Stacked and full-width on phones so every target clears 48px. */}
            <div data-reveal-item className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3 md:mt-11">
              <Link
                href="/contact?type=ras#enquiry-form"
                className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] bg-accent px-6 text-[14.5px] font-semibold text-ink transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-accent-deep sm:justify-start"
              >
                Start a project enquiry
              </Link>
              <Link
                href="/contact?type=products#enquiry-form"
                className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] border border-white/20 px-6 text-[14.5px] font-medium text-legal-bg transition-colors duration-200 hover:bg-white/10 sm:justify-start"
              >
                Product or order question
              </Link>
              <a
                href={`mailto:${contactConfig.generalEmail}`}
                className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] px-6 text-[14.5px] font-medium text-legal-dark-muted transition-colors duration-200 hover:text-legal-bg sm:justify-start sm:px-4"
              >
                {contactConfig.generalEmail}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------- categories and form */}
      <Suspense fallback={null}>
        <ContactExperience shell={SHELL} />
      </Suspense>

      {/* ------------------------------------------------------------- process */}
      <section className="border-t border-hairline bg-surface">
        <div className={`${SHELL} py-16 md:py-24`}>
          <SectionHeader
            index="03"
            title="What happens next"
            intro="Every enquiry follows the same four stages, whatever it is about."
          />
          <Steps steps={generalProcess} />

          <div className="mt-16 border-t border-hairline pt-14 md:mt-24 md:pt-20">
            <SectionHeader
              index="04"
              title="Project and engineering enquiries"
              intro="Engineered systems follow a longer route, because feasibility and cost depend on site conditions that have to be established first."
            />
            <Steps steps={projectProcess} columns="lg:grid-cols-5" />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- RAS panel */}
      <section className="bg-legal-dark">
        <div className={`${SHELL} py-16 md:py-24`}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-16">
            <div>
              <SectionHeader
                tone="dark"
                index="05"
                title="Planning a recirculating aquaculture facility?"
                intro="Site readiness, water source and target capacity determine the system design. Share what you know and the engineering team will work from there."
              />
              <Link
                href="/contact?type=ras#enquiry-form"
                className="mt-8 inline-flex min-h-[50px] w-full items-center justify-center rounded-[14px] bg-accent px-6 text-[14.5px] font-semibold text-ink transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-accent-deep sm:w-auto md:mt-10"
              >
                Discuss a RAS project
              </Link>
            </div>

            {/* Two nodes on purpose: the outer one supplies the perspective the
                card is viewed through, and an element cannot host the
                perspective applied to itself. */}
            <div data-depth-group className="[perspective:1000px]">
              <div
                data-depth-card
                className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6 md:p-7"
              >
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-legal-dark-muted">
                Direct contact
              </p>

              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-[12px] text-legal-dark-muted/70">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${contactConfig.generalEmail}`}
                      className="text-[15.5px] font-medium text-legal-bg transition-colors duration-200 hover:text-accent"
                    >
                      {contactConfig.generalEmail}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[12px] text-legal-dark-muted/70">Based in</dt>
                  <dd className="mt-1.5 text-[15.5px] text-legal-bg">{contactConfig.country}</dd>
                </div>
              </dl>

              {contactConfig.socialLinks.length > 0 ? (
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-[12px] text-legal-dark-muted/70">Follow</p>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {contactConfig.socialLinks.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[32px] items-center text-[13.5px] text-legal-dark-muted transition-colors duration-200 hover:text-legal-bg"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- faq */}
      <section className="bg-surface-muted">
        <div className={`${SHELL} py-16 md:py-24`}>
          <SectionHeader index="06" title="Common questions" />
          <ContactFaq />
        </div>
      </section>
    </ContactScaffold>
  );
}
