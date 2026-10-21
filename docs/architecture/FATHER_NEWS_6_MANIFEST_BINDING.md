# Father News 6 — immutable media binding: isolated draft gate

The v6 candidate must bind 25 visible cards to 25 distinct immutable objects under one dedicated media origin. Each canonical object path includes the exact release ID and full SHA-256, with no mutable query parameters, cross-origin substitution, or MIME/extension disagreement.

The 20 October frozen media inventory contains 13 SVG artworks and 12 JPEG photographs. The v6 schema intentionally does not allow SVG. All 13 SVG artworks need offline rasterization to WebP/PNG, re-hashing, and new immutable object URLs before promotion. Do not weaken the schema or silently substitute legacy media.

The pure validator and negative tests do not constitute deployment, storage persistence, actual object byte checks, app SHA + manifest attestation, 25-card Chromium QA, or rollback evidence. Keep production v5 untouched.

## Raster staging implementation (2026-10-20)

The offline script v6-rasterize-locked-media.py converts 13 pinned 720x1280 SVG pieces to PNG using rsvg-convert, while preserving the 12 licensed JPEGs without re-encoding. The 25 resulting objects are content-addressed with release-scoped storage paths, credit, license, alt text, dimensions and exact SHA-256. Staging output is **NOT** production storage or a new published edition.

The independent offline verifier checks all 25 exact image bytes, source lock fingerprint, card order, app SHA, MIME signatures and header dimensions, artwork 9:16, attribution, distinct media and immutable release-scoped paths. Eight tests exercise invalid/missing media, byte tampering, wrong app SHA, wrong release and duplicate card. GitHub Actions publishes a temporary 7-day staging archive for inspection, not a release.

**Unresolved:** Commit a durable media lock only after matching the exact renderer output bytes actually uploaded to a dedicated production bucket. Different librsvg versions can produce different PNG hashes; do not silently reuse earlier digests. The complete app 390x844 candidate-preview Chromium QA, remote storage access and final release attestation remain mandatory.
