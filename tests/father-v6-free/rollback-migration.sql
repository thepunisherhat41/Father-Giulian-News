-- CANDIDATE ONLY: tested with synthetic fixture; not applied to production.
\set ON_ERROR_STOP on
BEGIN;
LOCK TABLE public.father_news_publication,public.father_news_publication_audit IN SHARE ROW EXCLUSIVE MODE;
DO $pre$ DECLARE g bigint; p text; a bigint;
BEGIN
 SELECT generation,release_id INTO g,p FROM public.father_news_publication WHERE channel='production';
 SELECT count(*) INTO a FROM public.father_news_publication_audit;
 IF g IS DISTINCT FROM 0 OR p IS NOT NULL OR a<>0 THEN
   RAISE EXCEPTION 'initial-pointer precondition failed';
 END IF;
END; $pre$;
ALTER TABLE public.father_news_publication_audit ALTER COLUMN target_release_id DROP NOT NULL;
ALTER TABLE public.father_news_publication_audit
 ADD CONSTRAINT father_news_audit_promote_nonnull CHECK(action<>'PROMOTE' OR target_release_id IS NOT NULL);
ALTER TABLE public.father_news_publication_audit
 ADD CONSTRAINT father_news_audit_generation_unique UNIQUE(channel,next_generation);
CREATE OR REPLACE FUNCTION public.father_news_promote(
 p_expected_generation bigint,p_release_id text,p_actor text,
 p_action text DEFAULT 'PROMOTE',p_reason text DEFAULT NULL)
RETURNS bigint LANGUAGE plpgsql SECURITY DEFINER SET search_path=pg_catalog,public AS $fn$
DECLARE g bigint; prior text; nxt bigint; rollback_prior text; audit_target text;
BEGIN
 IF p_action IS NULL OR p_action NOT IN ('PROMOTE','ROLLBACK')
    OR p_actor IS NULL OR length(trim(p_actor))<3 THEN
   RAISE EXCEPTION 'invalid administrative release request';
 END IF;
 IF p_expected_generation IS NULL OR p_expected_generation<0 THEN
   RAISE EXCEPTION 'invalid expected generation';
 END IF;
 IF p_action='PROMOTE' AND p_release_id IS NULL THEN
   RAISE EXCEPTION 'promotion requires validated release';
 END IF;
 IF p_action='ROLLBACK' AND (p_reason IS NULL OR length(trim(p_reason))<8) THEN
   RAISE EXCEPTION 'rollback requires documented reason';
 END IF;
 SELECT generation,release_id INTO g,prior FROM public.father_news_publication
  WHERE channel='production' FOR UPDATE;
 IF NOT FOUND THEN RAISE EXCEPTION 'publication channel missing'; END IF;
 IF g<>p_expected_generation THEN
   RAISE EXCEPTION 'stale generation: expected %, actual %',p_expected_generation,g;
 END IF;
 IF p_action='ROLLBACK' THEN
   IF prior IS NULL THEN RAISE EXCEPTION 'no active v6 release to roll back'; END IF;
   SELECT prior_release_id,target_release_id INTO rollback_prior,audit_target
   FROM public.father_news_publication_audit
   WHERE channel='production' AND next_generation=g AND prior_generation=g-1
   ORDER BY id DESC LIMIT 1;
   IF NOT FOUND THEN RAISE EXCEPTION 'rollback audit chain missing'; END IF;
   IF audit_target IS DISTINCT FROM prior THEN
     RAISE EXCEPTION 'rollback audit chain does not match active pointer';
   END IF;
   IF p_release_id IS DISTINCT FROM rollback_prior THEN
     RAISE EXCEPTION 'rollback target differs from previous audited pointer';
   END IF;
 ELSE
   IF prior IS NOT DISTINCT FROM p_release_id THEN RETURN g; END IF;
 END IF;
 IF p_release_id IS NOT NULL AND NOT EXISTS(
   SELECT 1 FROM public.father_news_releases
   WHERE release_id=p_release_id AND status='VALIDATED'
    AND qa_manifest_sha256=manifest_sha256 AND qa_verified_at IS NOT NULL
 ) THEN RAISE EXCEPTION 'release not independently validated'; END IF;
 UPDATE public.father_news_publication
  SET release_id=p_release_id,generation=generation+1,updated_at=clock_timestamp()
  WHERE channel='production' AND generation=p_expected_generation
  RETURNING generation INTO nxt;
 IF NOT FOUND THEN RAISE EXCEPTION 'CAS conflict'; END IF;
 INSERT INTO public.father_news_publication_audit
  (channel,action,prior_release_id,target_release_id,prior_generation,next_generation,actor,reason)
 VALUES('production',p_action,prior,p_release_id,g,nxt,p_actor,p_reason);
 RETURN nxt;
END; $fn$;
REVOKE ALL ON FUNCTION public.father_news_promote(bigint,text,text,text,text)
 FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.father_news_promote(bigint,text,text,text,text) TO service_role;
REVOKE ALL ON TABLE public.father_news_publication,public.father_news_publication_audit FROM service_role;
GRANT SELECT ON TABLE public.father_news_publication,public.father_news_publication_audit TO service_role;
REVOKE UPDATE,DELETE,TRUNCATE,TRIGGER ON TABLE public.father_news_releases FROM service_role;
DO $acl$ DECLARE t text; priv text;
BEGIN
 FOREACH t IN ARRAY ARRAY['father_news_publication','father_news_publication_audit','father_news_releases'] LOOP
   FOREACH priv IN ARRAY ARRAY['UPDATE','DELETE','TRUNCATE','TRIGGER'] LOOP
     IF has_table_privilege('service_role',format('public.%I',t),priv) THEN
       RAISE EXCEPTION 'service_role retains % on %',priv,t;
     END IF;
   END LOOP;
 END LOOP;
 FOREACH t IN ARRAY ARRAY['father_news_publication','father_news_publication_audit'] LOOP
   IF has_table_privilege('service_role',format('public.%I',t),'INSERT') THEN
     RAISE EXCEPTION 'direct INSERT retained on %',t;
   END IF;
 END LOOP;
 IF NOT has_table_privilege('service_role','public.father_news_releases','INSERT')
   OR NOT has_table_privilege('service_role','public.father_news_releases','SELECT')
   OR NOT has_function_privilege('service_role','public.father_news_promote(bigint,text,text,text,text)','EXECUTE')
   OR has_function_privilege('anon','public.father_news_promote(bigint,text,text,text,text)','EXECUTE')
   OR has_function_privilege('authenticated','public.father_news_promote(bigint,text,text,text,text)','EXECUTE')
 THEN RAISE EXCEPTION 'ACL verification failed'; END IF;
END; $acl$;
COMMIT;
