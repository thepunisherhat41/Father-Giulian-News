import {test,expect} from '@playwright/test';
import {createHash} from 'node:crypto';
import {mkdirSync,writeFileSync} from 'node:fs';
const release='2026-10-26-r01';
const expectedManifest=process.env.FATHER_V6_MANIFEST_SHA || '';
if(!/^[a-f0-9]{64}$/.test(expectedManifest))throw new Error('Missing exact verified manifest SHA for 26 October QA');
const origin='https://sqlywvoqktdebubjmskn.supabase.co';
const mediaRoot=origin+'/storage/v1/object/public/father-news-v6-media/editions/'+release+'/';
const sha=(bytes:Uint8Array)=>createHash('sha256').update(bytes).digest('hex');
test.use({viewport:{width:390,height:844},deviceScaleFactor:1});
test.setTimeout(240000);
test('REAL Supabase immutable bytes and mobile Chromium: 25/25 actual images',async({page,request})=>{
 mkdirSync('artifacts/v6-remote-26-oct',{recursive:true});
 const manifestURL=mediaRoot+'manifest-'+expectedManifest+'.json';
 const response=await request.get(manifestURL,{timeout:20000});
 expect(response.status(),'published manifest must be readable without credentials').toBe(200);
 const bytes=await response.body();
 expect(sha(bytes),'exact uploaded manifest digest').toBe(expectedManifest);
 const edition=JSON.parse(bytes.toString('utf8'));
 expect(edition.editionId).toBe(release);
 expect(edition.editionDate).toBe('2026-10-26');
 expect(edition.cards).toHaveLength(25);
 expect(Object.keys(edition.mediaCatalog)).toHaveLength(25);
 const errors:string[]=[];
 page.on('pageerror',e=>errors.push(e.message));
 // Stub ONLY the not-yet-promoted DB publication pointer, never the media URLs.
 await page.route('**/api/edition/current',r=>r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({
  releaseId:release,generation:1,manifestSha256:expectedManifest,edition
 })}));
 await page.goto('http://127.0.0.1:3000/',{waitUntil:'domcontentloaded',timeout:30000});
 await expect(page.locator('[data-edition-engine="v6"]')).toBeVisible({timeout:15000});
 await expect(page.locator('[data-edition-date="2026-10-26"]')).toBeVisible();
 const reels=page.locator('article[data-reel]');
 await expect(reels).toHaveCount(25);
 const proof:Record<string,unknown>[]=[], seen=new Set<string>();
 for(let i=0;i<25;i++){
  const c=edition.cards[i],media=edition.mediaCatalog[c.mediaId];
  expect(media).toBeTruthy();
  expect(media.sha256).toMatch(/^[a-f0-9]{64}$/);
  expect(media.url).toBe(mediaRoot+'objects/'+media.sha256+(media.mimeType==='image/png'?'.png':'.jpg'));
  expect(seen.has(media.sha256),'duplicate media at reel '+(i+1)).toBe(false);
  seen.add(media.sha256);
  const remote=await request.get(media.url,{timeout:20000});
  expect(remote.status(),'HTTP 200 for reel '+(i+1)).toBe(200);
  const imageBytes=await remote.body();
  expect(sha(imageBytes),'SHA-256 of real reel '+(i+1)).toBe(media.sha256);
  expect(imageBytes.length,'nonempty original bytes').toBeGreaterThan(1000);
  const el=reels.nth(i);
  await el.scrollIntoViewIfNeeded();
  await expect(el).toBeInViewport({ratio:.5});
  const img=el.locator('img');
  await expect(img).toHaveCount(1);
  await expect.poll(()=>img.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0&&el.naturalHeight>0),{timeout:16000}).toBe(true);
  expect(await img.getAttribute('src'),'browser used EXACT remote URL').toBe(media.url);
  expect(await el.getAttribute('data-category')).toBe(c.section);
  expect(await el.getAttribute('data-media-kind')).toBe(media.kind==='art'?'illustration':'photo');
  expect((await img.getAttribute('alt'))?.length).toBeGreaterThan(12);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
  const imagePath='artifacts/v6-remote-26-oct/reel-'+String(i+1).padStart(2,'0')+'.png';
  await el.screenshot({path:imagePath,animations:'disabled'});
  proof.push({reel:i+1,id:c.id,title:c.title,sha256:media.sha256,bytes:imageBytes.length,source:media.url,screenshot:imagePath});
 }
 expect(errors,'Chromium page errors').toEqual([]);
 await page.getByRole('button',{name:'Abrir índice de assuntos'}).click();
 await expect(page.getByRole('dialog',{name:'Índice editorial'})).toBeVisible();
 writeFileSync('artifacts/v6-remote-26-oct/qa-report.json',JSON.stringify({
  status:'PASS',mode:'real Supabase byte readback and Chromium image rendering',appSha:process.env.FATHER_V6_APP_SHA,
  releaseId:release,manifestSha256:expectedManifest,cards:25,images:25,results:proof
 },null,2));
});
