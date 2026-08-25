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
import './site-redesign-v3.css';
import './site-redesign-v3-hubs.css';
import './magazine-v4.css';
import './local-security-magazine.css';
import './local-east-news.css';
import './layout-fix-v5.css';
import './experience-v6.css';
import './local-east-media-v7.css';
import './editorial-inline-media-v7.css';
import './editorial-deep-read-v7.css';
import './pregnancy-postpartum-v7.css';
import './vehicle-media-v7.css';
import './editorial-freshness-v8.css';
import './dedicated-hub-freshness-v8.css';
import './dedicated-daily-pulse-v8.css';
import './policy-conversation-v11.css';
import './policy-conversation-dedupe-v11.css';
import './editorial-reflection-v12.css';
import './reels-v13.css';
import './reel-art-rescue-v15.css';
import './mobile-v10.css';
import type { Metadata } from 'next';
import PregnancyMaternalChanges from '@/components/PregnancyMaternalChanges';
import PregnancyVomitingCare from '@/components/PregnancyVomitingCare';
import PregnancyPostpartumGuide from '@/components/PregnancyPostpartumGuide';
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
import LocalEastMediaEnhancer from '@/components/LocalEastMediaEnhancer';
import EditorialDeepReadPortal from '@/components/EditorialDeepReadPortal';
import EditorialReflectionPortal from '@/components/EditorialReflectionPortal';
import EditorialFreshnessPortal from '@/components/EditorialFreshnessPortal';
import DedicatedHubFreshnessEnhancer from '@/components/DedicatedHubFreshnessEnhancer';
import DedicatedDailyPulsePortal from '@/components/DedicatedDailyPulsePortal';
import PolicyConversationPortal from '@/components/PolicyConversationPortal';
import GamifiedMissionLayerPortal from '@/components/GamifiedMissionLayer';
import EditorialPresentationGuard from '@/components/EditorialPresentationGuard';
import TopicShareEnhancer from '@/components/TopicShareEnhancer';
import EditorialQualityGuard from '@/components/EditorialQualityGuard';
import ReelsExperienceLive from '@/components/ReelsExperienceLive';
// ReelsExperienceV25 remains the render engine; ReelsExperienceLive only pins the current editorial override first.
import '@/lib/final-edition-2026-08-25';

export const metadata: Metadata = {
  title: 'Father Giulian News',
  description: 'Seu hub diário de conhecimento, família, atualidades e tecnologia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <ReelsExperienceLive />
        <PregnancyMaternalChanges />
        <BabyDiscoveryLabPortal />
        <PregnancyVomitingCare />
        <PregnancyPostpartumGuide />
        <MusicHubPortal />
        <PoliticalCandidateAnalysisPortal />
        <VehicleComparisonPortal />
        <GameHubPortal />
        <Switch2RadarPortal />
        <SecurityBriefingPortal />
        <SecurityBriefingAnalystLayer />
        <AppSecFeedPortal />
        <LocalSecurityPortal />
        <LocalEastMediaEnhancer />
        <RichMediaPortal />
        <PolicyConversationPortal />
        <EditorialDeepReadPortal />
        <EditorialReflectionPortal />
        <EditorialFreshnessPortal />
        <DedicatedHubFreshnessEnhancer />
        <DedicatedDailyPulsePortal />
        <GamifiedMissionLayerPortal />
        <EditorialPresentationGuard />
        <TopicShareEnhancer />
        <EditorialQualityGuard />
      </body>
    </html>
  );
}