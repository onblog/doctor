/**
 * `GET /api/site` — deployment metadata the static page needs at runtime.
 *
 * The commercial-licence mailbox is deployment configuration, not source: the
 * repository must stay free of a real address so nobody inherits it by building
 * the project. The page therefore asks the Worker, which reads `CONTACT_EMAIL`
 * from the dashboard variable (or `.dev.vars` locally). An empty value is a valid
 * answer — the page then keeps its contact blocks hidden.
 */

import { json } from "../http";

export function site(_request: Request, env: Env): Response {
  return json({
    ok: true,
    data: { contactEmail: (env.CONTACT_EMAIL ?? "").trim() },
  });
}
