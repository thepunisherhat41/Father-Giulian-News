# Father News 6 — Release readiness (2026-10-20)

Status: NOT READY. PR #255 remains draft. Production v5 and main unchanged.

PostgreSQL: SQL migration and CAS/RLS/rollback passed in isolated PG18 sandbox and PG17 CI (run 39458543149). No shared Supabase project modified.

Media: CI run 39460056753 produced 25/25 hashed assets: 12 licensed Wikimedia photos and 13 generated 720x1280 SVGs. Independently verified 1,963,475 bytes against 25 hashes. Artifact 12282371473 expires 2026-10-27; this is QA staging, not durable storage. Photo cur-historia is only 448x358.

Later media CI reruns failed closed on Wikimedia HTTP 429. Do not bypass this red gate. The lockfile now pins source Git blobs, credits, license, native dimensions and SHA-256.

Pending: dedicated database/storage, v6 edition source metadata, dynamic API, pinned app+manifest Chromium QA, trusted publisher, domain smoke test, rollback drill.

Release rule: no merge or production deployment until all gates pass.
