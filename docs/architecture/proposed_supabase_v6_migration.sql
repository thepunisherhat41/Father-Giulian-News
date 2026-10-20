-- PROPOSED / NOT APPLIED. Database must be dedicated to Father News.
-- Supabase/PostgreSQL. Administrative writes ONLY by trusted backend/CI.
BEGIN;

CREATE TABLE IF NOT EXISTS public.father_news_releases (
  release_id text PRIMARY KEY,
  edition_date date NOT NULL,
  revision integer NOT NULL CHECK (revision > 0),
  schema_version smallint NOT NULL DEFAULT 6 CHECK (schema_version = 6),
  manifest_url text NOT NULL CHECK (manifest_url LIKE 'https://%'),
  manifest_sha256 text NOT NULL CHECK (manifest_sha256 ~ '^[a-f0-9]{64}$'),
  qa_manifest_sha256 text NOT NULL CHECK (qa_manifest_sha256 ~ '^[a-f0-9]{64}$'),
  app_commit_sha text NOT NULL CHECK (app_commit_sha ~ '^[a-f0-9]{40}$'),
  qa_run_url text NOT NULL CHECK (qa_run_url LIKE 'https://github.com/%'),
  card_count integer NOT NULL CHECK (card_count > 0),
  qa_verified_at timestamptz NOT NULL,
  status text NOT NULL CHECK (status = 'VALIDATED'),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (edition_date, revision),
  CHECK (qa_manifest_sha256 = manifest_sha256)
);

CREATE TABLE IF NOT EXISTS public.father_news_publication (
  channel text PRIMARY KEY CHECK (channel = 'production'),
  release_id text REFERENCES public.father_news_releases(release_id),
  generation bigint NOT NULL DEFAULT 0 CHECK (generation >= 0),
  updated_at timestamptz NOT NULL DEFAULT now()
);
INSERT INTO public.father_news_publication(channel, release_id, generation)
VALUES ('production', NULL, 0)
ON CONFLICT (channel) DO NOTHING;

CREATE TABLE IF NOT EXISTS public.father_news_publication_audit (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  channel text NOT NULL DEFAULT 'production',
  action text NOT NULL CHECK (action IN ('PROMOTE','ROLLBACK')),
  prior_release_id text,
  target_release_id text NOT NULL REFERENCES public.father_news_releases(release_id),
  prior_generation bigint NOT NULL,
  next_generation bigint NOT NULL,
  actor text NOT NULL,
  reason text,
  created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
  CHECK (next_generation = prior_generation + 1)
);

ALTER TABLE public.father_news_releases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.father_news_publication ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.father_news_publication_audit ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.father_news_releases,
 public.father_news_publication, public.father_news_publication_audit
 FROM PUBLIC, anon, authenticated;

-- Server-only SQL function; caller must authenticate with a secret key
-- and verify the external GitHub QA attestation before invoking.
CREATE OR REPLACE FUNCTION public.father_news_promote(
  p_expected_generation bigint,
  p_release_id text,
  p_actor text,
  p_action text DEFAULT 'PROMOTE',
  p_reason text DEFAULT NULL
) RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_generation bigint;
  v_prior_release text;
  v_next_generation bigint;
BEGIN
  IF p_action NOT IN ('PROMOTE','ROLLBACK') OR length(trim(p_actor)) < 3 THEN
    RAISE EXCEPTION 'invalid administrative release request';
  END IF;
  SELECT publication.generation, publication.release_id
    INTO v_generation, v_prior_release
    FROM public.father_news_publication publication
    WHERE channel = 'production'
    FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'publication channel missing'; END IF;
  IF v_generation <> p_expected_generation THEN
    RAISE EXCEPTION 'stale generation: expected %, actual %',p_expected_generation,v_generation;
  END IF;
  IF v_prior_release = p_release_id THEN RETURN v_generation; END IF;
  IF NOT EXISTS (
    SELECT 1 FROM public.father_news_releases rel
    WHERE rel.release_id = p_release_id AND rel.status = 'VALIDATED'
      AND rel.qa_manifest_sha256 = rel.manifest_sha256
      AND rel.qa_verified_at IS NOT NULL
  ) THEN RAISE EXCEPTION 'release not independently validated'; END IF;

  UPDATE public.father_news_publication publication
     SET release_id = p_release_id, generation = generation + 1,
         updated_at = clock_timestamp()
   WHERE channel = 'production' AND generation = p_expected_generation
   RETURNING generation INTO v_next_generation;
  IF NOT FOUND THEN RAISE EXCEPTION 'publication CAS conflict'; END IF;
  INSERT INTO public.father_news_publication_audit(
    channel, action, prior_release_id, target_release_id,
    prior_generation, next_generation, actor, reason
  ) VALUES (
    'production',p_action,v_prior_release,p_release_id,
    v_generation,v_next_generation,p_actor,p_reason
  );
  RETURN v_next_generation;
END;
$$;

REVOKE ALL ON FUNCTION public.father_news_promote(bigint,text,text,text,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.father_news_promote(bigint,text,text,text,text) TO service_role;


-- Public read-only projection. Never grant direct table SELECT to anonymous callers.
CREATE OR REPLACE FUNCTION public.father_news_current()
RETURNS TABLE (
  release_id text, generation bigint, manifest_url text,
  manifest_sha256 text, app_commit_sha text, card_count integer
)
LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = pg_catalog, public
AS $
  SELECT r.release_id, p.generation, r.manifest_url,
         r.manifest_sha256, r.app_commit_sha, r.card_count
    FROM public.father_news_publication p
    JOIN public.father_news_releases r ON r.release_id = p.release_id
   WHERE p.channel = 'production' AND r.status = 'VALIDATED'
     AND r.qa_manifest_sha256 = r.manifest_sha256
   LIMIT 1;
$;
REVOKE ALL ON FUNCTION public.father_news_current() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.father_news_current() TO anon, authenticated, service_role;

COMMIT;

-- Follow-up hardening before activation:
-- 1. grant minimal table SELECT/INSERT to service_role where required;
-- 2. configure trusted admin endpoint and external attestation verification;
-- 3. enforce immutable release rows with UPDATE/DELETE privileges revoked;
-- 4. test parallel CAS, idempotence, rollback, RLS and failover in an isolated DB.
