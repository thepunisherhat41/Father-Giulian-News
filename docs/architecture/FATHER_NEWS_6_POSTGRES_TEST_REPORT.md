# Father News 6 — PostgreSQL atomicity integration

**Isolated proof, not a production activation.**

## Local verified run, 2026-10-20
- PostgreSQL 18 was installed only inside a temporary Vercel sandbox.
- PostgreSQL listened exclusively on a UNIX socket with no remote access.
- Migration \`docs/architecture/proposed_supabase_v6_migration.sql\` applied without errors.
- \`python3 tests/v6-postgres-integration.py\` passed all checks:
  1. Two candidate release records are created in the test DB.
  2. Anonymous role cannot read internal release table.
  3. Service role cannot directly UPDATE the publication pointer.
  4. Missing release cannot be promoted.
  5. **Two independent PostgreSQL connections, same generation**: one succeeds, the other fails with stale generation.
  6. Retrying the same already-published edition does not increment generation or audit.
  7. A stale client cannot overwrite the selected edition.
  8. A validated second revision promotes with the correct generation.
  9. Rollback switches a single pointer, retains both immutable releases and three audit entries.

## GitHub Actions
A separate \`postgres-isolation\` job starts a disposable **PostgreSQL 17** service, installs \`psql\`, loads the proposed migration and runs the same integration suite. This establishes compatibility with the PG major version of the available Supabase account, while **never writing to any user's Supabase project**.

## Blockers before any 6.0 production release
- Existing account Supabase project \`oyuibmstzhifmtjkspdn\` has generic name and no proven ownership/association with Father News. **Do not run the migration there**.
- SQL role/permission checks and transactional CAS passing **do not prove external GitHub QA authenticity**. Trusted backend must confirm workflow run, repo, exact app SHA, manifest byte hash, card count and real Chromium success.
- Object storage must be scoped exclusively to Father News, immutable, verified and available for all **25** Reels. The legacy edition uses 12 remote images and 13 dynamically generated artworks.
- A feature-flagged dynamic reader API must be tested against a pinned candidate snapshot before UI migration.
- Production deployment requires controlled Git SHA, live DOM, http 200 and rollback readiness. No schedule promise without these gates.
