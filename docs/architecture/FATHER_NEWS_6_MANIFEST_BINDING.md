# Father News 6 — immutable media binding: isolated draft gate

The v6 candidate must bind 25 visible cards to 25 distinct immutable objects under one dedicated media origin. Each canonical object path includes the exact release ID and full SHA-256, with no mutable query parameters, cross-origin substitution, or MIME/extension disagreement.

The 20 October frozen media inventory contains 13 SVG artworks and 12 JPEG photographs. The v6 schema intentionally does not allow SVG. All 13 SVG artworks need offline rasterization to WebP/PNG, re-hashing, and new immutable object URLs before promotion. Do not weaken the schema or silently substitute legacy media.

The pure validator and negative tests do not constitute deployment, storage persistence, actual object byte checks, app SHA + manifest attestation, 25-card Chromium QA, or rollback evidence. Keep production v5 untouched.