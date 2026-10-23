import {test,expect} from '@playwright/test';
import {mkdirSync,readFileSync} from 'node:fs';
const currentEditionDate=JSON.parse(readFileSync('data/current-edition.json','utf8')).editionDate;
const currentDayLabel=currentEditionDate.slice(8,10)+'/'+currentEditionDate.slice(5,7)+'/'+currentEditionDate.slice(0,4);
test.use({viewport:{width:390,height:844},deviceScaleFactor:1});
test.setTimeout(120000);
const release='2026-10-22-r01';
const secs=['Papo de hoje','Desafio do casal','Curiosidades · Ciência','Curiosidades · Espaço','Curiosidades · Natureza','Curiosidades · História','Gravidez','Ser Pai','Brasil','Mundo','Política','Tempo','Corinthians','Viagens','Música','Sertanejo da Roça','Games','Tecnologia','Finanças','Security Briefing','Cyber','AppSec','Carros até R$70 mil','Motos','Mecânica'];
const pixel=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO5HtwsAAAAASUVORK5CYII=','base64');
function editionFixture(){
 const cards=secs.map((section,i)=>({id:'test-'+i,section,order:i+1,kind:i===8?'FATO':'GUIA',title:'Edição dinâmica validada — matéria '+i,
 summary:'Resumo sintético de integração do aplicativo e navegação mobile para o item '+i,
 details:['Explicação da pauta e suas fontes.','Contexto da informação.'],eventDate:'2026-10-22',reportedAt:null,
 sources:i===8?[{title:'Fonte fictícia do teste',url:'https://example.org/',publishedAt:'2026-10-22T01:00:00-03:00'}]:[],
 mediaId:'m-'+i}));
 const mediaCatalog=Object.fromEntries(cards.map((c,i)=>{
  const hash=i.toString(16).padStart(64,'0');
  return [c.mediaId,{kind:i%2===0?'art':'image',url:'https://media.example.org/editions/'+release+'/objects/'+hash+'.png',
  sha256:hash,mimeType:'image/png',alt:'Arte sintética exclusiva da matéria '+i,credit:'QA do Father News'}];
 }));
 return {releaseId:release,generation:1,manifestSha256:'a'.repeat(64),edition:{
  schemaVersion:6,editionId:release,editionDate:'2026-10-22',timezone:'America/Sao_Paulo',
  generatedAt:'2026-10-22T01:20:00-03:00',cards,mediaCatalog}};
}
test('25 reels use the same v6 edition and mobile native navigation',async({page})=>{
 mkdirSync('artifacts',{recursive:true});
 const errors:string[]=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/api/edition/current',r=>r.fulfill({status:200,contentType:'application/json',body:JSON.stringify(editionFixture())}));
 await page.route('https://media.example.org/**',r=>r.fulfill({status:200,contentType:'image/png',body:pixel}));
 await page.goto('http://127.0.0.1:3000/',{waitUntil:'domcontentloaded'});
 await expect(page.locator('[data-edition-engine="v6"]')).toBeVisible({timeout:12000});
 await expect(page.locator('[data-edition-date="2026-10-22"]')).toBeVisible();
 const reels=page.locator('article[data-reel]');await expect(reels).toHaveCount(25);
 for(let i=0;i<25;i++){
  const el=reels.nth(i);await el.scrollIntoViewIfNeeded();
  const photo=el.locator('img');
  await photo.evaluate((img:HTMLImageElement)=>img.decode());
  expect(await photo.evaluate((img:HTMLImageElement)=>img.naturalWidth),'media card '+i).toBeGreaterThan(0);
  expect(await el.getAttribute('data-category')).toBe(secs[i]);
  expect(await el.getAttribute('data-media-kind')).toBe(i%2===0?'illustration':'photo');
 }
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
 expect(overflow).toBeLessThanOrEqual(0);
 await page.screenshot({path:'artifacts/father-v6-synthetic-mobile.png',animations:'disabled'});
 await page.getByRole('button',{name:'Explorar assuntos'}).click();
 await expect(page.getByRole('dialog',{name:'Índice editorial'})).toBeVisible();
 expect(errors).toEqual([]);
});
test('503 or no publication retains dated v5 edition instead of blank screen',async({page})=>{
 await page.route('**/api/edition/current',r=>r.fulfill({status:503,contentType:'application/json',body:'{"status":"NOT_READY"}'}));
 await page.goto('http://127.0.0.1:3000/',{waitUntil:'domcontentloaded'});
 await expect(page.locator('[data-edition-engine="legacy"]')).toBeVisible({timeout:12000});
 await expect(page.getByText('Edição anterior: '+currentDayLabel)).toBeVisible();
 await expect(page.locator('article[data-reel]')).toHaveCount(25);
});

