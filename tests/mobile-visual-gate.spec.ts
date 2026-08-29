import { test, expect } from '@playwright/test';
import { writeFileSync } from 'node:fs';

test.use({ viewport: { width: 390, height: 844 } });

test('first reel and curiosities are healthy on mobile', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });

  const articles = page.locator('article');
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    bodyScrollWidth: document.body.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  const mediaSources = await page.locator('img, iframe').evaluateAll(nodes => nodes.map(node => ({
    tag: node.tagName,
    src: (node as HTMLImageElement | HTMLIFrameElement).src || '',
  })));
  const labels = await articles.evaluateAll(nodes => nodes.slice(0, 5).map(node => node.textContent?.slice(0, 220) || ''));

  writeFileSync('artifacts/mobile-diagnostics.json', JSON.stringify({
    articleCount: await articles.count(),
    dimensions,
    labels,
    mediaCount: mediaSources.length,
    mediaSources,
  }, null, 2));
  await page.screenshot({ path: 'artifacts/mobile-390x844.png', fullPage: true });

  expect(await articles.count()).toBeGreaterThanOrEqual(5);
  await expect(articles.nth(0).getByText('Papo de hoje', { exact: true }).first()).toBeVisible();
  await expect(articles.nth(1).getByText('Desafio do casal', { exact: true }).first()).toBeVisible();
  await expect(articles.nth(2).getByText(/Curiosidade/i).first()).toBeVisible();
  await expect(articles.nth(3).getByText(/Curiosidade/i).first()).toBeVisible();
  await expect(articles.nth(4).getByText(/Curiosidade/i).first()).toBeVisible();

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);

  const forbidden = mediaSources
    .map(item => item.src)
    .filter(src => /sprite(?:-news)?\.jpg|clean-covers\.jpg|transparent\.gif|data:image\/gif/i.test(src));
  expect(forbidden).toEqual([]);

  // Exact visual QA scope: first Reel, Desafio and the three Curiosidades.
  // Each card is brought into the 390x844 viewport before validating lazy media.
  for (let i = 0; i < 5; i += 1) {
    const article = articles.nth(i);
    await article.scrollIntoViewIfNeeded();
    const visual = article.locator('img, iframe').first();
    await expect(visual).toBeVisible();

    if (await visual.evaluate(node => node.tagName === 'IMG')) {
      await expect.poll(async () => visual.evaluate(node => {
        const img = node as HTMLImageElement;
        return img.complete && img.naturalWidth > 0;
      }), { timeout: 10000 }).toBe(true);
    }

    await article.screenshot({ path: `artifacts/mobile-card-${i + 1}.png` });
  }

  await expect(page.getByText(/25 AGO 2026|Daily Intelligence · 25 de agosto|Náutica/i)).toHaveCount(0);
});
