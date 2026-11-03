# Father News 6 — source precision and provenance gate

Status: draft PR only; no production change.

A publisher date is not an exact publication timestamp. V6 sources must provide exactly one of:
- `publishedAt`: an actual offset-aware ISO timestamp copied from the publisher.
- `publishedOn`: a verified calendar date, when no clock time is evidenced.
- `undatedReason`: a human-readable explanation for undated background/guide material. Undated material cannot establish news freshness.

For historic reports, `reportedOn` permits date-only evidence. `reportedAt` requires a verified offset-aware timestamp. Neither may be inferred from the edition date, and both must not coexist.

Both the schema and runtime validator must enforce these rules. Missing or future-dated news source evidence blocks a candidate. The existing 5.x edition and domain remain unchanged.

CI integration: `tests/v6-engine.test.mjs` covers the engine's real validation path. `tests/v6-source-provenance.test.mjs` covers the isolated precision rules. Neither test is evidence of a verified 25-card v6 edition or durable storage.
