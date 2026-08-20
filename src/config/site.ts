/**
 * Site-level constants that search engines and social cards depend on.
 *
 * The origin has to be absolute and it has to be right. Canonical URLs,
 * `hreflang` alternates, the sitemap and Open Graph images are all resolved
 * against it, and a wrong value there does not fail loudly — it silently
 * publishes canonicals pointing at somewhere that is not this site, which is
 * worse than publishing none.
 *
 * Read from the environment so a preview deployment canonicalises to itself
 * rather than to production. Set `NEXT_PUBLIC_SITE_URL` in the hosting
 * environment; the fallback is the production origin, so a local build is
 * correct-by-default rather than broken-by-default.
 *
 * HTTPS is not optional here. The origin is written with the scheme included
 * and no plain-http variant is offered, so every absolute URL the site emits —
 * canonical, alternate, sitemap entry, OG image — is https. Redirecting http to
 * https is the host's job (Vercel, Cloudflare and Netlify all do it by
 * default); this constant makes sure the site never *advertises* an http URL
 * even if one is reachable.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aerointelli.com"
).replace(/\/$/, "");

export const siteName = "Aero Intelli";

export const legalName = "Aero Intelli Private Limited";

/**
 * The language this site is published in, as an IETF tag.
 *
 * One entry today. `hreflang` is only meaningful once the same page exists in
 * more than one language: a single-locale site that emits alternates is
 * describing translations that do not exist, which is a worse signal than
 * silence. The machinery is here and `buildAlternates` already reads this list,
 * so publishing Telugu is a matter of adding `{ tag: "te-IN", prefix: "/te" }`
 * below and serving that prefix — no call site changes.
 *
 * `x-default` is emitted automatically by `buildAlternates` once there is more
 * than one locale, pointing at the unprefixed English route.
 */
export type Locale = {
  /** IETF language tag, e.g. `en-IN`. Region matters: this site targets India. */
  tag: string;
  /** Path prefix this locale is served under. Empty string for the default. */
  prefix: string;
};

export const locales: Locale[] = [{ tag: "en-IN", prefix: "" }];

export const defaultLocale = locales[0];

/**
 * The `alternates` block for a page's metadata.
 *
 * Always emits a self-referencing canonical, which is the point: without one, a
 * URL reached with a tracking query string or a trailing slash is a second
 * indexable copy of the same page.
 *
 * `languages` is left undefined while there is only one locale, for the reason
 * given above.
 */
export function buildAlternates(path: string) {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}`;

  if (locales.length < 2) return { canonical: clean };

  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale.tag] = `${locale.prefix}${clean}`;
  }
  languages["x-default"] = clean;

  return { canonical: clean, languages };
}
