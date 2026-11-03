# Father News 6 — production domain HTTP/DOM observation

**Draft-only read-only diagnostic, not a release approval.**

`node scripts/v6-domain-observation.mjs` performs a single GET of the known official Vercel domain and checks HTTP 200, HTML content type, a bounded response, the UI theme, the edition date and exactly 25 advertised cards. It does **not** update the site, the editorial edition, or any publication pointer. The default mode is `v5`, and a successful result is explicitly marked `releaseVerified:false`.

After a v6 candidate has been deployed under a controlled release process, the stricter `v6` mode requires the exact expected `releaseId`, `manifestSha256` and `generation`, verifies DOM binding and fetches the read-only `/api/edition/current` endpoint with `Cache-Control: no-store`. The CLI accepts `FATHER_OBSERVE_MODE=v6`, `FATHER_OBSERVE_RELEASE_ID`, `FATHER_OBSERVE_MANIFEST_SHA256` and `FATHER_OBSERVE_GENERATION`. It will not infer release identity or treat a successful v5 probe as a v6 release.

The isolated GitHub Actions job exercises mock HTTP responses only. It makes **zero production requests**, no media downloads, and no Wikimedia requests. This keeps v5 and the editorial updater independent. The live observation must be run deliberately after deploy, not on every PR or on a schedule.

**Limitations:** HTTP and SSR/DOM-attribute checks are not real Chromium rendering, media byte verification, editorial source validation, GitHub attestation, or rollback evidence. Even a green v6 observation is insufficient to promote a release. The required 25-card Chromium 390×844 QA, immutable manifest/app SHA binding, dedicated database and durable storage, trusted CI attestation and rollback drill remain mandatory.
