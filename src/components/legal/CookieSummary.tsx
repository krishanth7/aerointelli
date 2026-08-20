import { cookieCategories } from "@/content/cookie-registry";

export function CookieSummary() {
  return (
    <section aria-label="Cookie categories at a glance" className="mt-12 lg:mt-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-legal-muted">
        Categories at a glance
      </p>

      <ul className="mt-5 grid gap-px overflow-hidden rounded-[10px] border border-legal-border bg-legal-border sm:grid-cols-2 xl:grid-cols-4">
        {cookieCategories.map((category) => (
          <li key={category.id} className="bg-legal-bg p-5">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`h-[6px] w-[6px] rounded-full ${
                  category.inUse ? "bg-accent-deep" : "bg-legal-border"
                }`}
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-heading">
                {category.name}
              </p>
            </div>

            <p className="mt-3 text-[14px] leading-[1.65] text-legal-secondary">
              {category.summary}
            </p>

            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-legal-muted">
              {category.inUse
                ? category.required
                  ? "In use · Always active"
                  : "In use · Optional"
                : "Not currently used"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
