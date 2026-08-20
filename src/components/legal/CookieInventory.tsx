import { cookieRegistry } from "@/content/cookie-registry";

const COLUMNS = ["Cookie / Technology", "Provider", "Purpose", "Category", "Duration", "Required"];

export function CookieInventory() {
  if (cookieRegistry.length === 0) {
    return (
      <div className="mt-6 rounded-[10px] border border-dashed border-legal-border bg-legal-surface p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-heading">
          No entries
        </p>
        <p className="mt-3 text-[15.5px] leading-[1.8] text-legal-secondary md:text-[16.5px]">
          The cookie inventory is currently empty because this website does not set cookies or use
          browser storage. If a technology is added in future, it will be recorded in the cookie
          registry and will appear in this table automatically.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* Desktop: conventional table. */}
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr className="border-b border-legal-border">
            {COLUMNS.map((column) => (
              <th
                key={column}
                scope="col"
                className="py-3 pr-4 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-legal-muted"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cookieRegistry.map((entry) => (
            <tr key={`${entry.provider}-${entry.name}`} className="border-b border-legal-border">
              <td className="py-4 pr-4 align-top text-[14.5px] font-medium text-legal-heading">
                {entry.name}
                <span className="mt-1 block text-[12px] font-normal text-legal-muted">
                  {entry.technologyType}
                </span>
              </td>
              <td className="py-4 pr-4 align-top text-[14.5px] text-legal-secondary">
                {entry.provider}
              </td>
              <td className="py-4 pr-4 align-top text-[14.5px] leading-[1.65] text-legal-secondary">
                {entry.purpose}
              </td>
              <td className="py-4 pr-4 align-top text-[14.5px] capitalize text-legal-secondary">
                {entry.categoryId}
              </td>
              <td className="py-4 pr-4 align-top text-[14.5px] text-legal-secondary">
                {entry.duration}
              </td>
              <td className="py-4 align-top text-[14.5px] text-legal-secondary">
                {entry.required ? "Required" : "Optional"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile: each row becomes a labelled block, so the table never scrolls sideways. */}
      <ul className="space-y-4 md:hidden">
        {cookieRegistry.map((entry) => (
          <li
            key={`${entry.provider}-${entry.name}`}
            className="rounded-[10px] border border-legal-border p-4"
          >
            <p className="text-[15px] font-medium text-legal-heading">{entry.name}</p>
            <dl className="mt-3 space-y-2 text-[13.5px]">
              {[
                ["Provider", entry.provider],
                ["Purpose", entry.purpose],
                ["Category", entry.categoryId],
                ["Duration", entry.duration],
                ["Type", entry.technologyType],
                ["Required", entry.required ? "Required" : "Optional"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <dt className="w-[74px] shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-legal-muted">
                    {label}
                  </dt>
                  <dd className="min-w-0 leading-[1.65] text-legal-secondary">{value}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
