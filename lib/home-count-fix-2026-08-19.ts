import { dailyContent, todayDrops } from './daily-content';

if (dailyContent.hoje) {
  dailyContent.hoje.title = `${todayDrops.length} missões novas · 19 de agosto`;
  dailyContent.hoje.readTime = `${todayDrops.length} MISSÕES`;
}
