import {readFileSync,writeFileSync} from 'node:fs';
const reelPath='components/ReelsExperienceV26.tsx';
let s=readFileSync(reelPath,'utf8');
const oldNews="const news=['brasil','mundo','politica','tempo','seguranca-zl'].map(journalisticReel)";
const currentNews="const news=['brasil','mundo','politica','tempo','seguranca-zl','corinthians'].map(journalisticReel)";
if(s.includes(oldNews))s=s.replace(oldNews,currentNews);else if(!s.includes(currentNews))throw new Error('CURRENT FEED PREP: expected news array not found');

// A rotação de Papo/Desafio é determinada pela data em America/Sao_Paulo no próprio componente.
// Para 31/08, os índices são diferentes dos sete dias anteriores. Sertanejo usa uma peça nova para a data corrente.
const replacements=[
['Clássico da roça do dia: Cabocla Tereza','Clássico da roça do dia: Pagode em Brasília'],
['Tonico e Tinoco interpretam “Cabocla Tereza” em registro de 1993 na TV Cultura. Hoje o foco é a tradição narrativa do sertanejo raiz e a força das modas que contam histórias completas — sem reproduzir a letra.','Tião Carreiro e Pardinho interpretam “Pagode em Brasília”. Hoje o foco é o pagode de viola, a batida sincopada e a resposta entre viola e voz — sem reproduzir a letra.'],
['Qual moda de viola antiga você conhece que parece contar um filme inteiro em poucos minutos?','Qual música de viola você reconhece só pelos primeiros segundos do instrumento?'],
['https://www.youtube.com/embed/kv2jknSIBGc?playsinline=1&rel=0','https://www.youtube.com/embed/lpGGNA6_920?playsinline=1&rel=0'],
["title:'Cabocla Tereza'","title:'Pagode em Brasília'"],
["summary:'Clássico caipira diferente da edição anterior, com vídeo legítimo e contexto histórico.'","summary:'Clássico de Tião Carreiro e Pardinho com vídeo legítimo e foco na linguagem do pagode de viola.'"],
['YouTube · Tonico e Tinoco · Cabocla Tereza na TV Cultura (1993)','YouTube · Tião Carreiro e Pardinho · Pagode em Brasília'],
['https://www.youtube.com/watch?v=kv2jknSIBGc','https://www.youtube.com/watch?v=lpGGNA6_920']
];
for(const [from,to] of replacements){if(s.includes(from))s=s.replace(from,to);else if(!s.includes(to))throw new Error(`CURRENT FEED PREP: expected rotation text not found: ${from}`);}
writeFileSync(reelPath,s);console.log('CURRENT FEED PREP: 31/08 rotation applied');

const categoryPath='lib/categories.ts';
let c=readFileSync(categoryPath,'utf8');
if(!c.includes("slug: 'corinthians'")){
  const anchor="  { slug: 'seguranca-zl', label: 'Zona Leste em Foco', emoji: '🚨', description: 'Notícias gerais da Zona Leste e Itaquera, segurança pública, casos, dados, ações e serviços, sempre com fato novo e fonte atual.', subcategories: ['Região', 'Segurança', 'Casos', 'Matérias', 'Dados', 'Ações', 'Serviços'] },";
  const addition="\n  { slug: 'corinthians', label: 'Corinthians', emoji: '⚽', description: 'Notícias, elenco, resultados e próximos jogos oficiais do Corinthians.' },";
  if(!c.includes(anchor))throw new Error('CURRENT FEED PREP: category anchor not found');
  c=c.replace(anchor,anchor+addition);writeFileSync(categoryPath,c);console.log('CURRENT FEED PREP: Corinthians category enabled');
}
