/**
 * Read-only production-domain observation. It never publishes, changes a
 * pointer, deploys, or claims a v6 release passed based on v5 evidence.
 * This is one input to release QA, not a replacement for real Chromium.
 */
const ORIGIN='https://father-giulian-news-livid.vercel.app';
const SHA=/^[a-f0-9]{64}$/;
const RELEASE=/^\d{4}-\d{2}-\d{2}-r\d{2,}$/;
const DATE=/^\d{4}-\d{2}-\d{2}$/;
const MAX_HTML=4*1024*1024;
const deny=reason=>{throw Error('FATHER_DOMAIN_OBSERVATION_FAILED:'+reason)};
const attr=(html,name)=>{
  const m=html.match(/<[^>]+\bdata-ui-theme="[^"]+"[^>]*>/);
  if(!m)return null;
  return m[0].match(new RegExp('\\b'+name+'="([^"]*)"'))?.[1]??null;
};
async function boundedText(res,max){
  const n=res.headers.get('content-length');
  if(n!==null&&(!/^\d+$/.test(n)||Number(n)>max))deny('oversized response');
  const reader=res.body?.getReader();
  if(!reader)deny('missing response body');
  const chunks=[];let total=0;
  try{
    while(true){
      const {done,value}=await reader.read();
      if(done)break;
      total+=value.byteLength;
      if(total>max){await reader.cancel();deny('oversized response')}
      chunks.push(value);
    }
  }finally{reader.releaseLock()}
  const result=new Uint8Array(total);let offset=0;
  for(const chunk of chunks){result.set(chunk,offset);offset+=chunk.byteLength}
  return new TextDecoder('utf-8',{fatal:true}).decode(result);
}
async function get(fetchImpl,path){
  const res=await fetchImpl(ORIGIN+path,{method:'GET',redirect:'error',cache:'no-store',signal:AbortSignal.timeout(12000),headers:{'Accept':path==='/'?'text/html':'application/json'}});
  if(!res||res.status!==200||res.redirected||res.url&&new URL(res.url).origin!==ORIGIN)deny('HTTP 200 same-origin required for '+path);
  return res;
}
export async function observeFatherNewsDomain({fetchImpl=globalThis.fetch,mode='v5',expectedReleaseId,expectedManifestSha256,expectedGeneration}={}){
  if(!['v5','v6'].includes(mode)||typeof fetchImpl!=='function')deny('invalid observer configuration');
  if(mode==='v6'&&(!RELEASE.test(expectedReleaseId||'')||!SHA.test(expectedManifestSha256||'')||!Number.isSafeInteger(expectedGeneration)||expectedGeneration<1))deny('v6 requires pinned release, manifest and generation');
  const res=await get(fetchImpl,'/');
  if(!/^text\/html(?:;|$)/i.test(res.headers.get('content-type')||''))deny('unexpected HTML content type');
  const html=await boundedText(res,MAX_HTML);
  const theme=attr(html,'data-ui-theme'),cards=attr(html,'data-edition-cards'),date=attr(html,'data-edition-date');
  if(theme!==(mode==='v5'?'father-native-v5':'father-native-v6'))deny('unexpected DOM theme');
  if(cards!=='25')deny('DOM card count is not 25');
  if(!DATE.test(date||'')||new Date(date+'T00:00:00Z').toISOString().slice(0,10)!==date)deny('invalid DOM edition date');
  const result={mode,domain:ORIGIN,status:200,theme,cardCount:25,editionDate:date};
  if(mode==='v5')return Object.freeze({...result,releaseVerified:false});
  const api=await get(fetchImpl,'/api/edition/current');
  if(!/\bno-store\b/i.test(api.headers.get('cache-control')||''))deny('current-edition API must be no-store');
  if(!/^application\/json(?:;|$)/i.test(api.headers.get('content-type')||''))deny('unexpected API content type');
  const body=JSON.parse(await boundedText(api,MAX_HTML));
  if(body?.releaseId!==expectedReleaseId||body?.manifestSha256!==expectedManifestSha256||body?.generation!==expectedGeneration||
     body?.edition?.editionId!==expectedReleaseId||body?.edition?.editionDate!==date||body?.edition?.cards?.length!==25)deny('API release binding mismatch');
  if(attr(html,'data-release-id')!==expectedReleaseId||attr(html,'data-manifest-sha256')!==expectedManifestSha256)deny('DOM release binding mismatch');
  return Object.freeze({...result,releaseId:expectedReleaseId,manifestSha256:expectedManifestSha256,generation:expectedGeneration,releaseVerified:false});
}
if(process.argv[1]&&import.meta.url===new URL('file://'+process.argv[1]).href){
  const mode=process.env.FATHER_OBSERVE_MODE||'v5';
  observeFatherNewsDomain({mode,expectedReleaseId:process.env.FATHER_OBSERVE_RELEASE_ID,
    expectedManifestSha256:process.env.FATHER_OBSERVE_MANIFEST_SHA256,
    expectedGeneration:Number(process.env.FATHER_OBSERVE_GENERATION||0)})
    .then(result=>console.log(JSON.stringify(result,null,2)))
    .catch(error=>{console.error(error.message);process.exitCode=1});
}
