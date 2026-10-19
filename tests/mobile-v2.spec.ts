import{test,expect}from'@playwright/test';
import{mkdirSync,writeFileSync}from'node:fs';
test.use({viewport:{width:390,height:844},deviceScaleFactor:1});
test.setTimeout(240000);
test('full Chromium QA of all current Reels',async({page})=>{
 mkdirSync('artifacts',{recursive:true});
 const errors:string[]=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:3000/',{waitUntil:'domcontentloaded',timeout:30000});
 const shell=page.locator('[data-ui-theme="gamer-boy-v2"]');
 await expect(shell).toBeVisible();
 expect(await shell.getAttribute('data-edition-date')).toBe('2026-10-19');
 const reels=page.locator('article[data-reel]'),n=await reels.count();
 expect(n).toBe(25);
 const audit=[];
 for(let i=0;i<n;i++){
  const reel=reels.nth(i);
  await reel.scrollIntoViewIfNeeded();
  await expect(reel).toBeInViewport({ratio:.5});
  const img=reel.locator('img');
  await expect(img).toHaveCount(1);
  await expect.poll(()=>img.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0&&el.naturalHeight>0),{timeout:16000}).toBe(true);
  expect(await img.getAttribute('src')).toContain('/api/art?id=');
  expect((await img.getAttribute('alt'))?.length).toBeGreaterThan(10);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth);
  expect(overflow,'overflow on reel '+(i+1)).toBe(false);
  const screenshot='artifacts/reel-'+String(i+1).padStart(2,'0')+'.png';
  await reel.screenshot({path:screenshot,animations:'disabled'});
  audit.push({reel:i+1,title:await reel.locator('h1').innerText(),screenshot});
 }
 expect(errors).toEqual([]);
 writeFileSync('artifacts/mobile-qa.json',JSON.stringify({edition:'2026-10-19',count:n,audit},null,2));
 await page.getByRole('button',{name:'Abrir índice de assuntos'}).click();
 await expect(page.getByRole('dialog',{name:'Índice editorial'})).toBeVisible();
 await page.getByRole('button',{name:'Fechar índice'}).click();
 await reels.last().getByRole('button',{name:/Ler detalhes de/}).click();
 await expect(page.getByRole('dialog',{name:'Detalhes e fontes'})).toBeVisible();
 await page.getByRole('button',{name:'Fechar detalhes'}).click();
});
