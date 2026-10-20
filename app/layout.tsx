import type {Metadata, Viewport} from 'next';
export const metadata:Metadata={
 title:'Father News · Edição diária',
 applicationName:'Father Giulian News',
 description:'Notícias, descobertas e histórias em uma experiência mobile.',
 manifest:'/manifest.webmanifest',
 icons:{icon:'/app-icon.svg',apple:'/app-icon.svg'},
 appleWebApp:{capable:true,statusBarStyle:'black-translucent',title:'Father News'},
};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#061421',colorScheme:'dark'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
