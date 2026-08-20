import { dailyContent, todayDrops } from './daily-content';
import { localSecurityTodayStatus, localSecurityCases } from './local-security-content';

Object.assign(localSecurityTodayStatus, {
  date: '20 AGO 2026',
  status: 'SEM NOVA OCORRÊNCIA CRIMINAL CONFIRMADA ATÉ 17H',
  note: 'A varredura das 17h pesquisou fontes oficiais e jornalismo profissional para Itaquera, Artur Alvim, Penha, Vila Matilde, Vila Prudente, Sapopemba, São Mateus, Cidade Tiradentes, Guaianases, Itaim Paulista, São Miguel, Ermelino Matarazzo, Aricanduva/Vila Formosa, Tatuapé e Heliópolis. Não foi localizada publicação criminal nova de 20/08 com confirmação suficiente para entrar como notícia do dia. Casos anteriores permanecem com data e status explícitos.',
  nextCheck: 'próxima janela editorial ou nova confirmação pública relevante',
});

const artur=localSecurityCases.find((item)=>item.id==='artur-alvim-sequestro-procurado-14ago');
if(artur) Object.assign(artur,{
  lastVerified:'Revalidado em 20/08/2026 · nenhuma confirmação pública posterior de prisão/captura localizada na varredura das 17h',
  legalStatus:'Investigado, com prisão decretada. A última confirmação pública localizada continua sendo a de 14/08, quando era informado como foragido. Isso não equivale a condenação pelo caso investigado.'
});

Object.assign(dailyContent['seguranca-zl'], {
  title:'Zona Leste em Foco · 20/08 17h',
  summary:'A área regional foi atualizada com serviços e atividades de Itaquera e Zona Leste; na pauta policial, nenhuma nova ocorrência de hoje foi localizada com confirmação suficiente. Casos anteriores continuam separados por status jurídico e data.',
  shareSummary:'Zona Leste em Foco 20/08 17h: notícias gerais de Itaquera e ZL atualizadas; segurança sem nova ocorrência criminal confirmada hoje; casos antigos seguem com status jurídico revalidado.',
  readTime:'ATUALIZADO ÀS 17H',
  badge:'ZONA LESTE EM FOCO',
});

const drop=todayDrops.find((item)=>item.slug==='seguranca-zl');
if(drop) Object.assign(drop,{
  label:'Zona Leste em Foco',
  title:'Itaquera e Zona Leste: serviços de hoje; segurança sem novo fato confirmado',
  detail:'Região e segurança ficam separadas: atividades e serviços entram como notícia local; casos policiais mantêm data, fonte e status jurídico.'
});
