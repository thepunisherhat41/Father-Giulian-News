import './globals.css';
import './reels-v13.css';
import './reel-cover-direct-v16.css';
import './mobile-v10.css';
import type { Metadata } from 'next';
import ReelsExperienceLive from '@/components/ReelsExperienceLive';

export const metadata: Metadata = {
  title: 'Father Giulian News',
  description: 'Seu hub diário em formato Reels, com família, atualidades, cultura, tecnologia e segurança.',
};

export default function RootLayout({ children: _children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ReelsExperienceLive />
      </body>
    </html>
  );
}
