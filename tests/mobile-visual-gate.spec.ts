import { test, expect } from '@playwright/test';
import { writeFileSync } from 'node:fs';

test.use({ viewport: { width: 390, height: 844 } });
test.setTimeout(120000);

test('current edition is healthy on mobile card by card', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000',{waitUntil:'domcontentloaded',timeout:20000});
  const articles=page.locator('article');
  await expect(articles.first()).toBeVisible({timeout:10000});
  const articleCount=await articles.count();
  expect(articleCount).toBe(22);
  const dimensions=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,bodyScrollWidth:document.body.scrollWidth,innerWidth:window.innerWidth}));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth+1);
  expect(dimensions.bodyScrollWidth).toBeLessThanOrEqual(dimensions.innerWidth+1);
  await expect(articles.nth(0)).toContainText('Papo de hoje');
  await expect(articles.nth(1)).toContainText('Desafio do casal');
  await expect(articles.nth(2)).toContainText('Curiosidade · Ciência');
  await expect(articles.nth(3)).toContainText('Curiosidade · Corpo Humano');
  await expect(articles.nth(4)).toContainText('Curiosidade · Tecnologia');
  const pageText=(await page.locator('body').innerText()).toLowerCase();
  const mediaSources=await page.locator('img, iframe').evaluateAll(nodes=>nodes.map(node=>({tag:node.tagName,src:(node as HTMLImageElement|HTMLIFrameElement).src||''})));
  const labels=await articles.evaluateAll(nodes=>nodes.map(node=>node.textContent?.slice(0,800)||''));
  writeFileSync('artifacts/mobile-diagnostics.json',JSON.stringify({articleCount,dimensions,labels,mediaCount:mediaSources.length,mediaSources},null,2));
  for(const required of ['31 ago 2026','lua se afasta da terra','córnea é transparente','ssds usam wear leveling','8 semanas + 1 dia','grupo refit','bloqueio','taxa das blusinhas','terça-feira (1º)','percepção do eleitorado','btg/nexus','22,2°c','chance de chuva','kharg','terminal segue operacional','cate móvel atende hoje','itaquera','vic decide','1 a 0','50 minutos da etapa final','jhonson','lumi-ai','fsb coloca risco cibernético','último dia do novo desenrola','carro usado até r$70 mil','bateria fraca pode parecer']) expect(pageText).toContain(required.toLowerCase());
  for(const omitted of ['30 ago 2026','caixa conclui hoje o bolsa família','nis final 0','corinthians repudia agressões contra criança','brabas jogam às 19h15','cruzeiro x corinthians abre hoje as quartas','náutica']) expect(pageText).not.toContain(omitted.toLowerCase());
  const forbidden=mediaSources.map(item=>item.src).filter(src=>/sprite(?:-news)?\.jpg|clean-covers\.jpg|transparent\.gif|data:image\/gif/i.test(src));
  expect(forbidden).toEqual([]);
  expect(mediaSources.some(item=>item.src.includes('/generated/brasil-refit-falencia-20260831.svg'))).toBe(true);
  expect(mediaSources.some(item=>item.src.includes('/generated/politica-mp-tse-20260831.svg'))).toBe(true);
  expect(mediaSources.some(item=>item.src.includes('/generated/corinthians-cruzeiro-final-20260831.svg'))).toBe(true);
  expect(mediaSources.some(item=>item.src.includes('/generated/weather-sp-cloudy-humid-20260831.svg'))).toBe(true);
  for(let i=0;i<articleCount;i+=1){
    const article=articles.nth(i);await article.scrollIntoViewIfNeeded();const visual=article.locator('img, iframe').first();await expect(visual).toBeVisible({timeout:10000});const src=await visual.getAttribute('src')??'';expect(src.length).toBeGreaterThan(3);expect(src).not.toMatch(/sprite(?:-news)?\.jpg|clean-covers\.jpg|transparent\.gif|data:image\/gif/i);if(await visual.evaluate(node=>node.tagName==='IMG')){await expect.poll(async()=>visual.evaluate(node=>{const img=node as HTMLImageElement;return img.complete&&img.naturalWidth>0;}),{timeout:12000}).toBe(true);}await article.screenshot({path:`artifacts/mobile-card-${String(i+1).padStart(2,'0')}.png`});
  }
  await expect(page.getByText(/25 AGO 2026|Daily Intelligence · 25 de agosto|Náutica/i)).toHaveCount(0);
  await page.screenshot({path:'artifacts/mobile-390x844-full.png',fullPage:true});
});
