# Father News 6.0 — Reader Bridge

**Status: PR preview and synthetic QA only. NOT A PRODUCTION RELEASE.**

The v5 mobile UI has a new feature-flagged bridge to the immutable-edition API.

- \`FATHER_V6_ENABLED=false\` (the configured production default): v5 output with no extra API calls.
- \`true\` in an isolated preview: client starts with a loading state, fetches \`/api/edition/current\` with \`no-store\` and an 8.5-second timeout. API server checks the database pointer, SHA-256 manifest integrity, exact app commit, card count and media scope.
- On a valid 25-card v6 edition: the adapter translates structured data into the existing native mobile Reels, replaces images with that edition's unique immutable media URLs, preserves the reading interactions and rechecks on page reactivation or every five minutes.
- On any error or unpublished pointer: the old edition remains available, with **"Edição anterior [DATA] · atualização indisponível"** displayed. No silent claim of freshness.
- v6 failed media must not fall back to another day's legacy illustration. Video reels are deliberately rejected until a dedicated and tested video player is implemented. Photos and PNG/JPEG art are supported.
- Browser QA includes a fully **synthetic** 25-card API response, synthetic image intercepts, per-Reel loaded media and ordered categories at 390×844, and an API 503 fallback. It does **not** prove source authenticity, production media availability, current news or remote Supabase connectivity.

**Blockers remain**: 0 immutable media objects and 0 releases in dedicated Supabase; editorial date for static site remains 20/10; the mandatory main editorial gate rejects it on a later day. A final release needs real current dated sources, production object storage and immutable manifest, trusted external CI attestation, full Chromium QA on the exact production snapshot, DB generation CAS and safe rollback before enabling the flag or merging.

