import EditionShell from '@/components/EditionShell';
import edition from '@/data/current-edition.json';
import '@/components/father-v6-shell.css';
export const dynamic='force-dynamic';
export const revalidate=0;
export default function HomePage(){return <EditionShell legacy={edition} v6Enabled={process.env.FATHER_V6_ENABLED==='true'}/>;}

