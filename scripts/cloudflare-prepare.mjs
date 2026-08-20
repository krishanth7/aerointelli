import { spawnSync } from "node:child_process";

/**
 * Builds the Worker bundle during dependency installation, but only on CI.
 *
 * The Cloudflare project is configured with a deploy command and no build
 * command. That worked by accident while the repository had no Cloudflare
 * config: `wrangler deploy` did not recognise the project, fell into its
 * first-run setup path, and that path happened to run a build. Once
 * `wrangler.jsonc` and `open-next.config.ts` were committed, wrangler correctly
 * identified an existing OpenNext project, skipped setup, went straight to
 * deploy, and found nothing built:
 *
 *   ERROR Could not find compiled Open Next config, did you run the build
 *   command?
 *
 * npm runs `prepare` after `npm ci` finishes, which is the last hook available
 * before the deploy command executes. So the build happens here.
 *
 * The environment guard matters. Without it this would run on every local
 * `npm install`, turning a dependency change into a multi-minute Worker build
 * for no reason. `WORKERS_CI` is set by Cloudflare Workers Builds; `CI` is the
 * fallback in case that name changes.
 *
 * This is a workaround for a missing dashboard setting, not the ideal shape.
 * Setting the project's build command to `npx opennextjs-cloudflare build` in
 * Workers & Pages > Settings > Build does the same job more directly, and this
 * file can be deleted the moment that is done — see the note in the commit.
 */
const onCI = process.env.WORKERS_CI === "1" || process.env.CI === "true";

if (!onCI) {
  process.exit(0);
}

console.log("[prepare] CI detected — building the Cloudflare Worker bundle.");

// `shell: true` on purpose: this resolves the locally installed
// `opennextjs-cloudflare` binary through npm's bin directory. The command is a
// fixed string with no interpolated input, so there is nothing to inject.
const result = spawnSync("npx", ["opennextjs-cloudflare", "build"], {
  stdio: "inherit",
  shell: true,
});

if (result.status !== 0) {
  console.error("[prepare] Worker build failed.");
  process.exit(result.status ?? 1);
}
