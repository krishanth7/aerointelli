/**
 * The page gutter.
 *
 * Deliberately its own module with no `"use client"` directive. When this string
 * lived in `primitives.tsx` — a client module — a server component importing it
 * received a client-reference proxy rather than the string, and React stringified
 * that proxy straight into the `class` attribute. Every section on the page lost
 * its max-width and padding. A plain constant belongs in a plain module.
 */
export const SHELL =
  "mx-auto w-full max-w-[1280px] px-4 min-[360px]:px-5 min-[414px]:px-[22px] md:px-8 lg:px-10";
