import { dailyContent } from './daily-content';

const world = dailyContent.mundo;
if (world?.sources?.length) {
  world.sources[0] = {
    label: 'Reuters · Oil / Hormuz · 19/08/2026',
    url: 'https://www.reuters.com/business/energy/oil-edges-up-uncertainty-over-exports-through-hormuz-2026-08-19/',
  };
}
