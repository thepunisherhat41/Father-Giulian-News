import{test,expect}from'@playwright/test';
import{mkdirSync,writeFileSync}from'node:fs';
import photoCatalog from '../data/media-2026-10-20.json';
test.use({viewport:{width:390,height:844},deviceScaleFactor:1});
test.setTimeout(240000);
test('full Chromium QA of all current Reels',async({page})=>{
 mkdirSync('artifacts',{recursive:true});
 const errors:string[]=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:3000/',{waitUntil:'domcontentloaded',timeout:30000});
 const shell=page.locator('[data-ui-theme="gamer-boy-v2"]');
 await expect(shell).toBeVisible();
 expect(await shell.getAttribute('data-edition-date')).toBe('2026-10-20');
 const reels=page.locator('article[data-reel]'),n=await reels.count();
 expect(n).toBe(25);
 const audit=[];let photoCount=0;
 for(let i=0;i<n;i++){
  const reel=reels.nth(i);
  await reel.scrollIntoViewIfNeeded();
  await expect(reel).toBeInViewport({ratio:.5});
  const img=reel.locator('img');
  await expect(img).toHaveCount(1);
  await expect.poll(()=>img.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0&&el.naturalHeight>0),{timeout:16000}).toBe(true);
  const src=await img.getAttribute('src');
  const kind=await reel.getAttribute('data-media-kind');
  if(kind==='photo'){expect(src).toMatch(/^https:\/\//);photoCount++;}
  else expect(src).toContain('/api/art?id=');
  expect((await img.getAttribute('alt'))?.length).toBeGreaterThan(10);
  const overflow=await page.evaluate(()=>document.documentEl¶»§q«^