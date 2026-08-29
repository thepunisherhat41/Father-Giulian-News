import {readFileSync,writeFileSync} from 'node:fs';
const reelPath='components/ReelsExperienceV26.tsx';
let s=readFileSync(reelPath,'utf8');
const oldNews="const news=['brasil','mundo','politica','tempo','seguranca-zl'].map(journalisticReel)";
const currentNews="const news=['brasil','mundo','politica','tempo','seguranca-zl','corinthians'].map(journalisticReel)";
if(s.includes(oldNews))s=s.replace(oldNews,currentNews);else if(!s.includes(currentNews))throw new Error('CURRENT FEED PREP: expected news array not found');

const replacements=[
['Qual coisa boba sempre consegue fazer você rir?','Qual foi o melhor momento inesperado da sua semana?'],
['Vale meme, frase, situação, pessoa, vídeo antigo ou algum costume estranho de vocês.','Não vale escolher algo planejado: pense numa surpresa pequena, conversa, notícia boa ou situação que saiu melhor do que você esperava.'],
['A regra é contar a história completa, não só responder o nome.','Depois contem o que fez aquele momento ficar na memória.'],
['Desafio: cada um indica um vídeo de até 10 minutos para o outro','Desafio: tirem uma foto juntos que represente este sábado'],
['Pode ser curioso, engraçado, música, ciência, viagem ou qualquer coisa que você acha que o outro vai gostar.','Sem pose perfeita: escolham um momento comum do dia e façam uma única foto para guardar como registro de hoje.'],
['Clássico da roça do dia: Cabocla Tereza','Clássico da roça do dia: Tristeza do Jeca'],
['Tonico e Tinoco interpretam “Cabocla Tereza” em registro de 1993 na TV Cultura. Hoje o foco é a tradição narrativa do sertanejo raiz e a força das modas que contam histórias completas — sem reproduzir a letra.','Tonico e Tinoco interpretam “Tristeza do Jeca” em registro preservado pela TV Cultura. O foco de hoje é a toada caipira, a saudade e a forma como voz e viola transformam narrativa em memória — sem reproduzir a letra.'],
['Qual moda de viola antiga você conhece que parece contar um filme inteiro em poucos minutos?','Qual música caipira antiga te lembra uma pessoa, um lugar ou uma fase da vida?'],
['https://www.youtube.com/embed/kv2jknSIBGc?playsinline=1&rel=0','https://www.youtube.com/embed/Fxac2CJDo8A?playsinline=1&rel=0'],
["title:'Cabocla Tereza'","title:'Tristeza do Jeca'"],
["summary:'Clássico caipira diferente da edição anterior, com vídeo legítimo e contexto histórico.'","summary:'Toada clássica de Angelino de Oliveira em interpretação de Tonico e Tinoco, com vídeo legítimo da TV Cultura.'"],
['YouTube · Tonico e Tinoco · Cabocla Tereza na TV Cultura (1993)','YouTube · TV Cultura · Tristeza do Jeca · Tonico e Tinoco'],
['https://www.youtube.com/watch?v=kv2jknSIBGc','https://www.youtube.com/watch?v=Fxac2CJDo8A']
];
for(const [from,to] of replacements){if(s.includes(from))s=s.replace(from,to);else if(!s.includes(to))throw new Error(`CURRENT FEED PREP: expected rotation text not found: ${from}`);}
writeFileSync(reelPath,s);console.log('CURRENT FEED PREP: 29/08 noon rotation applied');

const categoryPath='lib/categories.ts';
let c=readFileSync(categoryPath,'utf8');
if(!c.includes("slug: 'corinthians'")){
  const anchor="  { slug: 'seguranca-zl', label: 'Zona Leste em Foco', emoji: '🚨', description: 'Notícias gerais da Zona Leste e Itaquera, segurança pública, casos, dados, ações e serviços, sempre com fato novo e fonte atual.', subcategories: ['Região', 'Segurança', 'Casos', 'Matérias', 'Dados', 'Ações', 'Serviços'] },";
  const addition="\n  { slug: 'corinthians', label: 'Corinthians', emoji: '⚽', description: 'Notícias, elenco, resultados e próximos jogos oficiais do Corinthians.' },";
  if(!c.includes(anchor))throw new Error('CURRENT FEED PREP: category anchor not found');
  c=c.replace(anchor,anchor+addition);writeFileSync(categoryPath,c);console.log('CURRENT FEED PREP: Corinthians category enabled');
}
