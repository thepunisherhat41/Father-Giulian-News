import { dailyContent, todayDrops } from './daily-content';
import { localSecurityTodayStatus, localSecurityCases, localSecuritySignals } from './local-security-content';

Object.assign(localSecurityTodayStatus, {
  date: '20 AGO 2026 · 18H30',
  status: 'NOVA OCORRÊNCIA CONFIRMADA · ARICANDUVA',
  note: 'A varredura do início da noite localizou cobertura publicada hoje pelo UOL sobre um homicídio ocorrido na tarde de 19/08 em Aricanduva. A Polícia Civil registrou o caso e, segundo a reportagem, o suspeito ainda não havia sido localizado. O fato entra como ocorrência confirmada recente, sem ser apresentado como tendência do bairro. A checagem segue também Itaquera, Artur Alvim, Penha, Vila Matilde, Vila Prudente, Sapopemba, São Mateus, Cidade Tiradentes, Guaianases, Itaim Paulista, São Miguel, Ermelino Matarazzo, Aricanduva/Vila Formosa, Tatuapé e Heliópolis.',
  nextCheck: 'próxima janela editorial ou atualização pública sobre o caso',
});

if(!localSecuritySignals.some((item)=>item.id==='aricanduva-homicidio-19ago-uol')){
  localSecuritySignals.unshift({
    id:'aricanduva-homicidio-19ago-uol',
    type:'ALERTA',
    area:'Aricanduva · Zona Leste',
    date:'19 AGO 2026 · PUBLICADO 20 AGO',
    freshness:'RECENTE',
    ageLabel:'ONTEM / NOTÍCIA DE HOJE',
    title:'Briga entre vizinhos terminou em morte em Aricanduva; suspeito não havia sido localizado na publicação',
    summary:'Segundo o UOL, uma discussão entre vizinhos na tarde de 19 de agosto terminou com um homem de 57 anos atingido por disparos ao tentar defender o filho. A vítima foi socorrida e morreu no hospital. A reportagem informa que o suspeito fugiu e ainda não havia sido localizado pela Polícia Civil no momento da publicação de 20 de agosto. Um revólver calibre .38 foi apreendido nas proximidades durante a perícia.',
    whyItMatters:'É uma ocorrência grave e recente, mas isolada: ela informa um caso concreto em Aricanduva e não autoriza concluir que homicídios aumentaram no bairro. O status do suspeito pode mudar e precisa ser revalidado nas próximas janelas.',
    source:{label:'UOL Notícias · 20/08/2026 · 15h56',url:'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/20/briga-entre-vizinhos-deixa-um-morto-na-zona-leste-de-sao-paulo.ghtm'}
  });
}

const artur=localSecurityCases.find((item)=>item.id==='artur-alvim-sequestro-procurado-14ago');
if(artur) Object.assign(artur,{
  lastVerified:'Revalidado em 20/08/2026 · nenhuma confirmação pública posterior de prisão/captura localizada na varredura das 18h30',
  legalStatus:'Investigado, com prisão decretada. A última confirmação pública localizada continua sendo a de 14/08, quando era informado como foragido. Isso não equivale a condenação pelo caso investigado.'
});

Object.assign(dailyContent['seguranca-zl'], {
  title:'Zona Leste em Foco · 20/08 18h30',
  summary:'A área regional foi atualizada com notícias de Itaquera e da Zona Leste, serviços, cultura e esporte. Na pauta policial, entrou uma ocorrência grave de Aricanduva publicada hoje pelo UOL, com data do fato, fonte e status separados de qualquer leitura de tendência.',
  shareSummary:'Zona Leste em Foco 20/08 18h30: Itaquera tem decisão de Libertadores hoje, vacinação programada para amanhã e obras do Parque do Carmo; São Miguel/Vila Formosa tiveram agendas políticas com protestos; segurança inclui ocorrência recente em Aricanduva, sem transformar caso isolado em tendência.',
  readTime:'ATUALIZADO ÀS 18H30',
  badge:'ZONA LESTE EM FOCO · AO VIVO',
});

const drop=todayDrops.find((item)=>item.slug==='seguranca-zl');
if(drop) Object.assign(drop,{
  label:'Zona Leste em Foco',
  title:'Zona Leste agora: jogo em Itaquera, serviços e nova ocorrência confirmada em Aricanduva',
  detail:'A seção regional foi ampliada com notícias de hoje, mídia, contexto e próximos passos; segurança mantém ocorrência, status jurídico e tendência como coisas diferentes.'
});
