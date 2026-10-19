import type {Metadata} from 'next';
export const metadata:Metadata={title:'Father Giulian News · Edição diária',description:'Notícias verificadas, família e curiosidades em Reels'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
