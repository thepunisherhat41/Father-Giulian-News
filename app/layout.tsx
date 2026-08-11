import './globals.css';
import './vocabulary.css';
import './expansion.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Father Giulian News',
  description: 'Seu hub diário de conhecimento, família, atualidades e tecnologia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
