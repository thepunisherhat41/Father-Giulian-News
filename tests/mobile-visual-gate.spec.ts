import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

test('first reels and curiosities are healthy on mobile', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });

  await expect(page.getByText('Papo de hoje', { exact: true }).first()).toBeVisible();
  await expect(page.getByText('Desafio do casal', { exact: true }).first()).toBeVisible();
  await expect(page.getByText(/Curiosidade/i).first()).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);

  const media = page.locator('img, iframe');
  expect(await media.count()).toBeGreaterThanOrEqual(4);

  const forbidden = await page.locator('img, iframe').evaluateAll(nodes => nodes
    .map(node => (node as HTMLImageElement | HTMLIFrameElement).src || '')
    .filter(src => /sprite(?:-news)?\.jpg|clean-covers\.jpg|transparent\.gif|data:image\/gif/i.test(src)));
  expect(forbidden).toEqual([]);

  const brokenImages = await page.locator('img').evaluateAll(images => images
    .filter(img => !img.complete || img.naturalWidth === 0)
    .map(img => img.src));
  expect(brokenImages).toEqual([]);

  await expect(page.getByText(/25 AGO 2026|Daily Intelligence · 25 de agosto|Náutica/i)).toHaveCount(0);

  await page.screenshot({ path: 'artifacts/mobile-390x844.png', fullPage: true });
});
