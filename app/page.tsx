import EditionShell from '@/components/EditionShell';
import edition from '@/data/current-edition.json';
import '@/components/father-v6-shell.css';
export const dynamic='force-dynamic';
export const revalidate=0;
export default function HomePage(){
 const staging=process.env.VERCEL_ENV==='preview'&&process.env.FATHER_V6_STAGING_ENABLED==='true';
 return <EditionShell legacy={edition} v6Enabled={staging||process.env.FATHER_V6_ENABLED==='true'}
  apiEndpoint={staging?'/api/edition/staging':'/api/edition/current'} staging={staging}/>;
}

