export function PagePlaceholder({ title, kicker }: { title: string; kicker: string }) {
  return (
    <section className="mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">{kicker}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
        Content for this section is in preparation.
      </p>
    </section>
  );
}
