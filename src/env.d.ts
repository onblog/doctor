/**
 * Deployment-only variables.
 *
 * These are set in the Cloudflare dashboard (Worker → Settings → Variables) or in
 * a local `.dev.vars`, never in `wrangler.jsonc` — that file is committed, and a
 * live domain or mailbox must not sit in the repository. Declared here so `Env`
 * stays typed after `wrangler types` regenerates `worker-configuration.d.ts`.
 */
interface Env {
  /** Commercial-licence mailbox served through `GET /api/site`. Empty when unset. */
  CONTACT_EMAIL?: string;
}
