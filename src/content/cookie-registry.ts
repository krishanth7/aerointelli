/**
 * Single source of truth for the Aero Intelli cookie documentation.
 *
 * RULE: nothing may be listed here that is not actually deployed on the
 * website. The Cookie Policy page, the category summary and any future
 * preference centre all read from this file, so an entry added here is a
 * public legal statement.
 *
 * Verified against the codebase on 10 August 2026: the website is a static
 * Next.js marketing/legal site with no analytics SDK, no tag manager, no
 * advertising pixel, no authentication, no payment gateway, no third-party
 * embed (map, video or social widget) and no use of document.cookie,
 * localStorage, sessionStorage or IndexedDB. The registry is therefore empty.
 */

export type CookieCategoryId = "essential" | "preferences" | "analytics" | "marketing";

export type CookieCategory = {
  id: CookieCategoryId;
  name: string;
  /** Short line used in the summary strip. */
  summary: string;
  description: string;
  /** True where the category cannot be switched off without breaking the site. */
  required: boolean;
  /** False where the category is documented but not currently deployed. */
  inUse: boolean;
};

export type CookieDefinition = {
  name: string;
  provider: string;
  purpose: string;
  categoryId: CookieCategoryId;
  duration: string;
  technologyType: "cookie" | "localStorage" | "sessionStorage" | "pixel" | "sdk";
  required: boolean;
};

export const cookieCategories: CookieCategory[] = [
  {
    id: "essential",
    name: "Essential",
    summary: "Required for core website functionality.",
    description:
      "Technologies that are necessary for the website to load, remain secure and function correctly. These cannot be switched off through a preference control without affecting the operation of the site.",
    required: true,
    inUse: false,
  },
  {
    id: "preferences",
    name: "Preferences",
    summary: "Remember settings you have chosen.",
    description:
      "Technologies that remember choices you make, such as an interface setting or a previously selected option, so that they persist between visits.",
    required: false,
    inUse: false,
  },
  {
    id: "analytics",
    name: "Analytics",
    summary: "Help us understand website usage.",
    description:
      "Technologies that help us understand how the website is used in aggregate, including which pages are visited, how visitors navigate and where errors occur.",
    required: false,
    inUse: false,
  },
  {
    id: "marketing",
    name: "Marketing",
    summary: "Used for advertising measurement.",
    description:
      "Technologies used to measure campaigns, attribute advertising or deliver marketing communications relevant to you.",
    required: false,
    inUse: false,
  },
];

/**
 * Deliberately empty. Populate only after technically verifying what a
 * technology actually sets — see the note at the top of this file.
 */
export const cookieRegistry: CookieDefinition[] = [];

export const cookiesInUse = cookieRegistry.length > 0;

export function cookiesByCategory(categoryId: CookieCategoryId) {
  return cookieRegistry.filter((entry) => entry.categoryId === categoryId);
}
