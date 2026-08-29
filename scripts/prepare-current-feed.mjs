import {readFileSync,writeFileSync} from 'node:fs';
const reelPath='components/ReelsExperienceV26.tsx';
let s=readFileSync(reelPath,'utf8');
const old="const news=['brasil','mundo','politica','tempo','seguranca-zl'].map(journalisticReel)";
const current="const news=['brasil','mundo','politica','tempo','seguranca-zl','corinthians'].map(journalisticReel)";
if(s.includes(old)){s=s.replace(old,current);writeFileSync(reelPath,s);console.log('CURRENT FEED PREP: Corinthians 29/08 enabled');}
else if(!s.includes(current)){throw new Error('CURRENT FEED PREP: expected news array not found');}

const categoryPath='lib/categories.ts';
let c=readFileSync(categoryPath,'utf8');
if(!c.includes("slug: 'corinthians'")){
  const anchor="  { slug: 'seguranca-zl', label: 'Zona Leste em Foco', emoji: '🚨', description: 'Notícias gerais da Zona Leste e Itaquera, segurança pública, casos, dados, ações e serviços, sempre com fato novo e fonte atual.', subcategories: ['Região', 'Segurança', 'Casos', 'Matérias', 'Dados', 'Ações', 'Serviços'] },";
  const addition="\n  { slug: 'corinthians', label: 'Corinthians', emoji: '⚽', description: 'Notícias, elenco, resultados e próximos jogos oficiais do Corinthians.' },";
  if(!c.includes(anchor)) throw new Error('CURRENT FEED PREP: category anchor not found');
  c=c.replace(anchor,anchor+addition);writeFileSync(categoryPath,c);console.log('CURRENT FEED PREP: Corinthians category enabled');
}
