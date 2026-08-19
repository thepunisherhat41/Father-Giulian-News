import './globals.css';
import './vocabulary.css';
import './expansion.css';
import './share-improvements.css';
import './dossier.css';
import './curiosity-library.css';
import './pregnancy-maternal.css';
import './pregnancy-vomiting-care.css';
import './baby-discovery.css';
import './music.css';
import './caipira-top5.css';
import './music-player.css';
import './political-analysis.css';
import './politics-compact.css';
import './vehicle-comparison.css';
import './games.css';
import './switch2-radar.css';
import './security-briefing.css';
import './security-briefing-deep-dive.css';
import './security-briefing-v2.css';
import './appsec-feed.css';
import './rich-media.css';
import './real-source-media.css';
import './local-security.css';
import './daily-game.css';
import './editorial-dedupe.css';
import './ui-polish-v2.css';
import './home-media.css';
import './editorial-quality.css';
import type { Metadata } from 'next';
import PregnancyMaternalChanges from '@/components/PregnancyMaternalChanges';
import PregnancyVomitingCare from '@/components/PregnancyVomitingCare';
import { BabyDiscoveryLabPortal } from '@/components/BabyDiscoveryLab';
import MusicHubPortal from '@/components/MusicHubPortal';
import PoliticalCandidateAnalysisPortal from '@/components/PoliticalCandidateAnalysisPortal';
import VehicleComparisonPortal from '@/components/VehicleComparisonPortal';
import GameHubPortal from '@/components/GameHubPortal';
import { Switch2RadarPortal } from '@/components/Switch2Radar';
import SecurityBriefingPortal from '@/components/SecurityBriefingPortal';
import SecurityBriefingAnalystLayer from '@/components/SecurityBriefingAnalystLayer';
import AppSecFeedPortal from '@/components/AppSecFeedPortal';
import RichMediaPortal from '@/components/RichMediaPortal';
import LocalSecurityPortal from '@/components/LocalSecurityPortal';
import DailyQuestHUDPortal from '@/components/DailyQuestHUD';
import EditorialPresentationGuard from '@/components/EditorialPresentationGuard';
import TopicShareEnhancer from '@/components/TopicShareEnhancer';
import HomeMediaEnhancer from '@/components/HomeMediaEnhancer';
import EditorialQualityGuard from '@/components/EditorialQualityGuard';

export const metadata: Metadata = {
  title: 'Father Giulian News',
  description: 'Seu hub diário de conhecimento, família, atualidades e tecnologia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <PregnancyMaternalChanges />
        <BabyDiscoveryLabPortal />
        <PregnancyVomitingCare />
        <MusicHubPortal />
        <PoliticalCandidateAnalysisPortal />
        <VehicleComparisonPortal />
        <GameHubPortal />
        <Switch2RadarPortal />
        <SecurityBriefingPortal />
        <SecurityBriefingAnalystLayer />
        <AppSecFeedPortal />
        <LocalSecurityPortal />
        <RichMediaPortal />
        <DailyQuestHUDPortal />
        <EditorialPresentationGuard />
        <TopicShareEnhancer />
        <HomeMediaEnhancer />
        <EditorialQualityGuard />
      </body>
    </html>
  );
}
