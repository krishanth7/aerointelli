import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Clean URLs: no `.html`, no trailing slash. Next normalises `/about/` to
   * `/about` when this is false, which is one fewer duplicate URL shape for a
   * crawler to find.
   */
  trailingSlash: false,

  /**
   * Legacy paths, kept alive as permanent redirects.
   *
   * These were page files calling `permanentRedirect()` at render time. Moving
   * them here is both faster and more correct: the redirect is answered before
   * React is involved, so there is no page to render and no bundle to ship for
   * a URL whose only job is to point somewhere else.
   *
   * `statusCode: 301` rather than `permanent: true`. Next's `permanent` flag
   * emits 308, which additionally preserves the request method. 301 is what
   * every SEO tool expects to see on a moved page; both pass link equity, but
   * only one of them raises a question in an audit.
   */
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", statusCode: 301 },
      { source: "/cookies", destination: "/cookie-policy", statusCode: 301 },
      { source: "/terms", destination: "/terms-of-use", statusCode: 301 },
      {
        source: "/delivery-and-shipping-policy",
        destination: "/legal/shipping-policy",
        statusCode: 301,
      },
    ];
  },

  /**
   * Transport security.
   *
   * Terminating TLS is the host's job. Without HSTS, though, a visitor's first
   * request in each session can still leave over plain http and be intercepted
   * before the redirect to https lands; this closes that window.
   *
   * `preload` is declared but inert until the domain is submitted to the
   * preload list — worth doing once the apex and www behaviour is settled. Note
   * that this applies to the whole origin for two years once sent, which is the
   * intent, and also why it must not go on a domain that still needs to serve
   * anything over http.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
