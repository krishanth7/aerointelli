import { contactConfig } from "@/config/contact";
import { defaultLocale, legalName, siteName, siteUrl } from "@/config/site";

/**
 * Organization structured data, emitted once from the root layout.
 *
 * Claims here have to be as defensible as claims in the copy — arguably more
 * so, because structured data is a direct assertion to a search engine and a
 * wrong one is a trust penalty rather than a typo. So this carries only what is
 * already stated publicly elsewhere on the site: legal name, site, contact
 * address and country. No founding date, no employee count, no ratings, no
 * awards.
 *
 * Rendered as a plain `<script>` rather than `next/script`, which is correct
 * for JSON-LD: it is not executable, there is nothing to defer, and the crawler
 * should find it in the served HTML.
 */
export function OrganizationSchema() {
  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName,
    url: siteUrl,
    email: contactConfig.generalEmail,
    address: {
      "@type": "PostalAddress",
      addressCountry: contactConfig.country,
    },
    ...(contactConfig.socialLinks.length > 0
      ? { sameAs: contactConfig.socialLinks.map((social) => social.href) }
      : {}),
  };

  /**
   * The site itself, tied back to the organization by `@id` rather than by
   * repeating its fields. Deliberately no `potentialAction`/`SearchAction`:
   * that declares a site search endpoint, and this site has none — declaring
   * one that 404s is a broken promise to a crawler.
   */
  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: defaultLocale.tag,
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      // The payload is built from our own constants, never from user input, so
      // there is nothing here that could close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
