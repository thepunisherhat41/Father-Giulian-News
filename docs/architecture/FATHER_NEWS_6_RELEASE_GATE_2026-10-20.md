# Father News 6 — Gate report (20 October 2026)

**Production blocked.** PR #255 stays draft; main and v5 are unchanged.

PG17 CI run 39461732025 passed the proposed SQL, CAS, RLS and rollback tests. A read-only current-edition RPC is proposed but not deployed.

Media snapshot: 25/25 hashed assets, 12 Wikimedia photos and 13 original SVGs, 1,963,475 bytes. Run 39461231776 passed after temporary HTTP 429 failures. QA archive is temporary and expires; it is not production storage. The cur-historia photo is 448x358.

The read-only API is disabled by default. Negative-path tests passed (run 39461599298). No dynamic reader is live.

Remaining: dedicated database and media storage, source metadata, manifest-pinned Chromium QA, verified publisher, domain checks and rollback drill. No production ETA.
