import './daily-overrides-2026-08-25-05h';
import { edition } from './daily-content';

// Final render guard: some legacy portal modules still import dated overrides as
// side effects. Keep the visible/current edition pinned after every portal has
// been evaluated so Reels freshness is always compared against today's date.
Object.assign(edition, {
  date: '25/08/2026',
  dateLabel: '25 AGO 2026',
  title: 'Daily Intelligence · 25 de agosto',
});
