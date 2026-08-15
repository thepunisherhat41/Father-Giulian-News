import './globals.css';
import './vocabulary.css';
import './expansion.css';
import './share-improvements.css';
import './dossier.css';
import './curiosity-library.css';
import './pregnancy-maternal.css';
import './music.css';
import './caipira-top5.css';
import './music-player.css';
import './political-analysis.css';
import './vehicle-comparison.css';
import type { Metadata } from 'next';
import PregnancyMaternalChanges from '@/components/PregnancyMaternalChanges';
import MusicHubPortal from '@/components/MusicHubPortal';
import PoliticalCandidateAnalysisPortal from '@/components/PoliticalCandidateAnalysisPortal';
import VehicleComparisonPortal from '@/components/VehicleComparisonPortal';

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
        <MusicHubPortal />
        <PoliticalCandidateAnalysisPortal />
        <VehicleComparisonPortal />
      </body>
    </html>
  );
}
