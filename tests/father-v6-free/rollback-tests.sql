-- Exact candidate behavioural contract. SQL data is synthetic, all changes rollback.
\set ON_ERROR_STOP on
BEGIN;
DO $test$ DECLARE g bigint; p text; a int; rejected boolean; msg text;
BEGIN
 IF (SELECT generation FROM public.father_news_publication WHERE channel='production')<>0
   OR (SELECT release_id FROM public.father_news_publication WHERE channel='production') IS NOT NULL
   OR (SELECT count(*) FROM public.father_news_publication_audit)<>0 THEN
   RAISE EXCEPTION 'fixture did not start with zero pointer';
 END IF;
 IF (SELECT attnotnull FROM pg_attribute WHERE attrelid='public.father_news_publication_audit'::regclass
   AND attname='target_release_id') THEN RAISE EXCEPTION 'migration not applied'; END IF;
 g:=public.father_news_promote(0,'2026-10-23-r01','ci-test','PROMOTE',NULL);
 IF g<>1 THEN RAISE EXCEPTION 'first CAS promotion failed'; END IF;
 g:=public.father_news_promote(1,'2026-10-23-r01','ci-test','PROMOTE',NULL);
 IF g<>1 THEN RAISE EXCEPTION 'idempotent promotion advanced generation'; END IF;
 rejected:=false;
 BEGIN PERFORM public.father_news_promote(0,'2026-10-23-r01','ci-test','PROMOTE',NULL);
 EXCEPTION WHEN raise_exception THEN
   GET STACKED DIAGNOSTICS msg=MESSAGE_TEXT;
   rejected:=(msg='stale generation: expected 0, actual 1');
 END;
 IF NOT rejected THEN RAISE EXCEPTION 'stale generation accepted'; END IF;
 rejected:=false;
 BEGIN PERFORM public.father_news_promote(1,NULL,'ci-test','ROLLBACK','short');
 EXCEPTION WHEN raise_exception THEN
   GET STACKED DIAGNOSTICS msg=MESSAGE_TEXT;
   rejected:=(msg='rollback requires documented reason');
 END;
 IF NOT rejected THEN RAISE EXCEPTION 'undocumented rollback accepted'; END IF;
 rejected:=false;
 BEGIN PERFORM public.father_news_promote(1,'2026-10-23-r01','ci-test','ROLLBACK','wrong target attempt');
 EXCEPTION WHEN raise_exception THEN
   GET STACKED DIAGNOSTICS msg=MESSAGE_TEXT;
   rejected:=(msg='rollback target differs from previous audited pointer');
 END;
 IF NOT rejected THEN RAISE EXCEPTION 'wrong rollback target accepted'; END IF;
 g:=public.father_news_promote(1,NULL,'ci-test','ROLLBACK','restore initial v5 state');
 IF g<>2 THEN RAISE EXCEPTION 'rollback to NULL failed'; END IF;
 SELECT generation,release_id INTO g,p FROM public.father_news_publication WHERE channel='production';
 IF g<>2 OR p IS NOT NULL THEN RAISE EXCEPTION 'NULL pointer not restored'; END IF;
 IF NOT EXISTS(SELECT 1 FROM public.father_news_publication_audit WHERE action='ROLLBACK'
   AND prior_generation=1 AND next_generation=2 AND target_release_id IS NULL)
 THEN RAISE EXCEPTION 'rollback audit missing'; END IF;
 rejected:=false;
 BEGIN PERFORM public.father_news_promote(2,NULL,'ci-test','PROMOTE',NULL);
 EXCEPTION WHEN raise_exception THEN
   GET STACKED DIAGNOSTICS msg=MESSAGE_TEXT;
   rejected:=(msg='promotion requires validated release');
 END;
 IF NOT rejected THEN RAISE EXCEPTION 'NULL promoted'; END IF;
 rejected:=false;
 BEGIN PERFORM public.father_news_promote(2,NULL,'ci-test','ROLLBACK','unnecessary rollback');
 EXCEPTION WHEN raise_exception THEN
   GET STACKED DIAGNOSTICS msg=MESSAGE_TEXT;
   rejected:=(msg='no active v6 release to roll back');
 END;
 IF NOT rejected THEN RAISE EXCEPTION 'rollback of NULL accepted'; END IF;
 g:=public.father_news_promote(2,'2026-10-23-r01','ci-test','PROMOTE','republish after recovery');
 IF g<>3 THEN RAISE EXCEPTION 're-promotion failed'; END IF;
 g:=public.father_news_promote(3,NULL,'ci-test','ROLLBACK','restore initial v5 again');
 IF g<>4 THEN RAISE EXCEPTION 'repeat rollback failed'; END IF;
 SELECT count(*) INTO a FROM public.father_news_publication_audit;
 IF a<>4 THEN RAISE EXCEPTION 'audit count unexpected %',a; END IF;
 IF (SELECT generation FROM public.father_news_publication WHERE channel='production')<>4
   OR (SELECT release_id FROM public.father_news_publication WHERE channel='production') IS NOT NULL
 THEN RAISE EXCEPTION 'repeat rollback pointer incorrect'; END IF;
 RAISE NOTICE 'PASS: isolated CAS, stale replay, NULL rollback, audit, idempotency, re-promotion';
END; $test$;
ROLLBACK;
DO $clean$ BEGIN
 IF (SELECT generation FROM public.father_news_publication WHERE channel='production')<>0
   OR (SELECT release_id FROM public.father_news_publication WHERE channel='production') IS NOT NULL
   OR (SELECT count(*) FROM public.father_news_publication_audit)<>0 THEN
   RAISE EXCEPTION 'transaction did not clean up';
 END IF;
 RAISE NOTICE 'PASS: tests left zero publication mutations';
END; $clean$;
BEGIN;
SET LOCAL ROLE service_role;
DO $acl_smoke$ BEGIN
 BEGIN
   UPDATE public.father_news_publication SET generation=88 WHERE channel='production';
   RAISE EXCEPTION 'ACL_BYPASS';
 EXCEPTION WHEN insufficient_privilege THEN
   RAISE NOTICE 'PASS: direct service_role CAS bypass denied';
 END;
END; $acl_smoke$;
ROLLBACK;
