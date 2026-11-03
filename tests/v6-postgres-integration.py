#!/usr/bin/env python3
"""Run against a disposable local PG service. NO remote credentials or production writes.
PostgreSQL RLS, compare-and-swap, actual two-connection contention and rollback.
"""
import os
import subprocess
from concurrent.futures import ThreadPoolExecutor
from threading import Barrier
from pathlib import Path

ENV=os.environ.copy()
ENV.setdefault("PGHOST","/tmp/fnpgsocket")
ENV.setdefault("PGPORT","55433")
ENV.setdefault("PGUSER","ubuntu")
ENV.setdefault("PGDATABASE","postgres")
def psql(sql,ok=True):
 p=subprocess.run(["psql","-X","-q","-v","ON_ERROR_STOP=1","-A","-t","-c",sql],env=ENV,text=True,capture_output=True,timeout=20)
 if ok and p.returncode:raise AssertionError(f"unexpected PG error: {p.stderr[:1300]}")
 if not ok and not p.returncode:raise AssertionError("unsafe SQL unexpectedly succeeded")
 return p
def pass_(text):print("PASS",text,flush=True)
a,b="2026-10-21-r01","2026-10-21-r02"
for i,name in enumerate([a,b],1):
 sha=str(i)*64
 psql(f"""INSERT INTO public.father_news_releases(release_id,edition_date,revision,
  manifest_url,manifest_sha256,qa_manifest_sha256,app_commit_sha,
  qa_run_url,card_count,qa_verified_at,status)
 VALUES('{name}','2026-10-21',{i},
 'https://assets.example.org/editions/{name}/{sha}/edition.json','{sha}','{sha}','{'a'*40}',
 'https://github.com/thepunisherhat41/Father-Giulian-News/actions/runs/999',
 25,now(),'VALIDATED') ON CONFLICT (release_id) DO NOTHING;""")
pass_("two validated release records inserted in isolated PostgreSQL")
anon=psql("SET ROLE anon; SELECT release_id FROM public.father_news_releases LIMIT 1;",False)
assert "permission denied" in anon.stderr.lower()
pass_("RLS/privileges: unauthenticated public read refused")
write=psql("SET ROLE service_role; UPDATE public.father_news_publication SET generation=99 WHERE channel='production';",False)
assert "permission denied" in write.stderr.lower()
pass_("service_role cannot bypass release function via direct UPDATE")
bad=psql("SET ROLE service_role; SELECT public.father_news_promote(0,'nonexistent-release','qa-admin');",False)
assert "not independently validated" in bad.stderr.lower()
pass_("missing or unvalidated release denied")
barrier=Barrier(2)
def attempt(target):
 barrier.wait()
 return target,psql(f"SET ROLE service_role; SELECT public.father_news_promote(0,'{target}','trusted-publisher');",ok=False) # override below
# execute raw so losing process not preemptively exception
def race(target):
 barrier.wait()
 p=subprocess.run(["psql","-X","-q","-v","ON_ERROR_STOP=1","-A","-t",
  "-c",f"SET ROLE service_role; SELECT public.father_news_promote(0,'{target}','trusted-publisher');"],
  env=ENV,text=True,capture_output=True,timeout=20)
 return target,p
with ThreadPoolExecutor(max_workers=2) as e:
 results=list(e.map(race,[a,b]))
success=[name for name,p in results if p.returncode==0]
failure=[name for name,p in results if p.returncode!=0]
assert len(success)==1 and len(failure)==1,[(n,p.returncode,p.stderr) for n,p in results]
assert "stale generation" in next(p.stderr for n,p in results if p.returncode!=0).lower()
current=psql("SELECT release_id||':'||generation FROM public.father_news_publication WHERE channel='production'").stdout.strip()
assert current==success[0]+":1",current
pass_("two independent PostgreSQL connections: one CAS success, one generation conflict")
winner=success[0];loser=failure[0]
idem=psql(f"SET ROLE service_role; SELECT public.father_news_promote(1,'{winner}','trusted-publisher');").stdout.strip()
assert idem.splitlines()[-1]=="1",idem
assert psql("SELECT count(*) FROM public.father_news_publication_audit;").stdout.strip()=="1"
pass_("idempotent same-release promotion does not increase generation or audit")
stale=psql(f"SET ROLE service_role; SELECT public.father_news_promote(0,'{loser}','trusted-publisher');",False)
assert "stale generation" in stale.stderr.lower()
pass_("stale clients cannot overwrite current release")
psql(f"SET ROLE service_role; SELECT public.father_news_promote(1,'{loser}','trusted-publisher');")
assert psql("SELECT generation FROM public.father_news_publication WHERE channel='production'").stdout.strip()=="2"
pass_("validated second revision promoted with expected generation")
psql(f"SET ROLE service_role; SELECT public.father_news_promote(2,'{winner}','trusted-publisher','ROLLBACK','postdeploy_failed');")
val=psql("SELECT release_id||':'||generation FROM public.father_news_publication WHERE channel='production'").stdout.strip()
assert val==winner+":3"
history=psql("SELECT action FROM public.father_news_publication_audit ORDER BY id").stdout.strip().splitlines()
assert history==["PROMOTE","PROMOTE","ROLLBACK"],history
assert psql("SELECT count(*) FROM public.father_news_releases;").stdout.strip()=="2"
pass_("rollback switches pointer atomically and keeps 2 immutable releases / 3 audit records")
print("ALL POSTGRES INTEGRATION TESTS PASSED",flush=True)

