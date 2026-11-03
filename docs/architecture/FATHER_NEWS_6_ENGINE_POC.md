# Father News 6.0 — Iteration 1: Atomic Edition Engine (OFFLINE POC)
**Status: NOT ACTIVATED · NO DATABASE / STORAGE / VERCEL WRITES.**

This working prototype extends the architecture in draft PR #255. It does not yet replace the v5 user-facing feed. Main and the production domain must remain unchanged until a dedicated backend and full Chromium preview gates exist.

## Implemented
- \`lib/father-v6/engine.mjs\`: explicit editorial order, release date, source/event classification, missing-media and forbidden-fallback checks, required media credit, 9:16 art, SHA-256 over **exact manifest bytes**, seven-day creative repetition detection, private-network URL rejection.
- \`lib/father-v6/registry.mjs\`: synchronous **in-memory modeling only** of release staging, immutable snapshots, compare-and-swap, generation, idempotency and audited rollback. This is **not** a substitute for PostgreSQL transactions, not safe for multi-instance Vercel deployments, and not durable.
- \`tests/v6-engine.test.mjs\`: deterministic unit tests with pinned fixtures, covering expected release failure modes.
- \`scripts/v6-readiness.mjs\`: readonly audit of legacy v5 media and migration blockers. Prints \`MIGRATION_NOT_READY\`.
- \`.github/workflows/father-news-v6-engine.yml\`: isolated CI tests. Existing v5 production build/editorial/browser gates remain unchanged.

## Safety invariant
A candidate must have a valid schema, all cards and media, verifiable content hashes, real byte checks for each image/video, and positive evidence that the CI attestation is genuine. The prototype requires callers to inject both \`verifyExternalQa\` and \`readMediaBytes\`: neither defaults to permissive behavior.

This **does not yet verify GitHub externally**, as that would require a connected trusted API service. Test fixtures inject explicit fakes and never deploy. The production publisher must verify the GitHub run conclusion, expected repo/branch, exact app SHA and manifest SHA independently, and prove that the exact snapshot passed Chromium.

## Technical debt intentionally refused
- No dynamic \`/api/edition/current\` route until its transactional database and object storage exist.
- No migration against the user's existing Supabase project: it is not proven dedicated to Father News.
- No mutable \`current.json\` uploads with eventual consistency.
- No claim that a mocked CAS proves real PostgreSQL isolation or concurrency.
- No production deploy, no direct push to main, and no fabricated media availability.

## Acceptance criteria before activation
1. Dedicated DB and Storage resource owner and access permissions established.
2. SQL migrations run in isolated environment, concurrency-tested using two independent connections; rollback and RLS verified.
3. Publisher integrates non-spoofable GitHub Actions attestation lookup; credential only on server.
4. Object storage upload uses immutable keys and verifies real media bytes; classify historical sources and copyright.
5. \`/api/edition/current\` reads a **single committed generation** with \`Cache-Control: no-store\`, immutable release snapshot and verified digest; never merges release A text with release B media.
6. v5 UI migrated to per-release \`mediaCatalog\` and \`reader-insights\` instead of date-bound imports.
7. Chromium pre-release QA (390x844, every rendered Reel, screenshot, interactions and strict media) against pinned \`appSha+releaseId+manifestSha256\`.
8. Controlled publish and production HTTP/DOM post-release probe; preserve previous healthy revision and rollback proof.

