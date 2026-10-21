/** Bind every v6 card to a release-scoped, full-digest immutable media object. */
const SHA=/^[a-f0-9]{64}$/;
const RELEASE=/^\d{4}-\d{2}-\d{2}-r\d{2,}$/;
const EXTENSIONS={'image/jpeg':'jpg','image/png':'png','image/webp':'webp','image/avif':'avif','video/mp4':'mp4','video/webm':'webm'};
const deny=(reason)=>{throw new Error('V6_MEDIA_BINDING_FAILED:'+reason)};
export function verifyEditionMediaBinding(edition,{releaseId,mediaOrigin,cardCount=25}={}){
 if(!RELEASE.test(releaseId||'')||edition?.editionId!==releaseId)deny('release ID mismatch');
 if(!Number.isSafeInteger(cardCount)||cardCount<1)deny('invalid expected card count');
 let origin;
 try{
  const u=new URL(mediaOrigin);
  if(u.protocol!=='https:'||u.username||u.password||u.port||u.pathname!=='/'||u.search||u.hash)deny('invalid media origin');
  origin=u.origin;
 }catch{deny('invalid media origin')}
 if(!Array.isArray(edition.cards)||edition.cards.length!==cardCount)deny('card count mismatch');
 const catalog=edition.mediaCatalog;
 if(!catalog||typeof catalog!=='object'||Array.isArray(catalog))deny('invalid media catalog');
 const ids=edition.cards.map(c=>c?.mediaId);
 if(ids.some(id=>typeof id!=='string'||!id)||new Set(ids).size!==cardCount)deny('one distinct media ID per card required');
 const keys=Object.keys(catalog);
 if(keys.length!==cardCount||keys.some(k=>!ids.includes(k)))deny('catalog must match visible cards exactly');
 const digests=new Set();
 for(const id of ids){
  const media=catalog[id];
  if(!media||!SHA.test(media.sha256||''))deny('invalid media digest: '+id);
  const ext=EXTENSIONS[media.mimeType];
  if(!ext)deny('unapproved MIME (SVG requires offline rasterization): '+id);
  let url;
  try{url=new URL(media.url)}catch{deny('invalid media URL: '+id)}
  if(url.origin!==origin||url.username||url.password||url.search||url.hash||url.port)deny('untrusted media URL: '+id);
  const path='/editions/'+releaseId+'/objects/'+media.sha256+'.'+ext;
  const alt='/editions/'+releaseId+'/assets/'+media.sha256+'.'+ext;
  if(url.pathname!==path&&url.pathname!==alt)deny('noncanonical immutable media path: '+id);
  if(digests.has(media.sha256))deny('duplicate media bytes across visible cards: '+id);
  digests.add(media.sha256);
 }
 return Object.freeze({releaseId,mediaOrigin:origin,cardCount,distinctObjects:digests.size});
}
