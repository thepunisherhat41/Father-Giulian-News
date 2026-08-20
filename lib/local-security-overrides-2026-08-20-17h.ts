import { dailyContent, todayDrops } from './daily-content';
import { localSecurityTodayStatus, localSecurityCases, localSecuritySignals } from './local-security-content';

Object.assign(localSecurityTodayStatus, {
  date: '20 AGO 2026 · 18H30',
  status: 'NOTÍCIAS RECENTES CONFIRMADAS · ARICANDUVA E ZONA LESTE',
  note: 'A varredura do início da noite localizou cobertura publicada hoje pelo UOL sobre um homicídio ocorrido na tarde de 19/08 em Aricanduva e cobertura da Band, de 19/08, sobre um desmanche clandestino descoberto pela Polícia Civil na Zona Leste. Os fatos entram como ocorrências recentes separadas, sem serem apresentados como tendência de bairro. A checagem segue também Itaquera, Artur Alvim, Penha, Vila Matilde, Vila Prudente, Sapopemba, São Mateus, Cidade Tiradentes, Guaianases, Itaim Paulista, São Miguel, Ermelino Matarazzo, Aricanduva/Vila Formosa, Tatuapé e Heliópolis.',
  nextCheck: 'próxima janela editorial ou nova atualização pública confiável',
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

if(!localSecuritySignals.some((item)=>item.id==='zl-desmanche-clandestino-19ago-band')){
  localSecuritySignals.unshift({
    id:'zl-desmanche-clandestino-19ago-band',
    type:'ALERTA',
    area:'Zona Leste · investigação da 1ª Divecar',
    date:'19 AGO 2026 · 16H53',
    freshness:'RECENTE',
    ageLabel:'ONTEM',
    title:'Polícia Civil encontrou desmanche clandestino; quatro suspeitos foram presos em flagrante',
    summary:'A Band informou que a Polícia Civil localizou um galpão usado para desmontar veículos roubados e furtados na Zona Leste. Quatro suspeitos foram presos em flagrante. Segundo a reportagem, o local tinha barreiras para enfraquecer rastreadores, bloqueadores de sinal e câmeras para acompanhar a aproximação de viaturas. Um Jeep Renegade furtado na noite anterior estava sendo desmontado quando os policiais chegaram.',
    whyItMatters:'Além da prisão em flagrante, o caso ajuda a entender a cadeia de receptação e desmanche: roubo/furto, neutralização de rastreamento, desmontagem rápida e possível revenda de peças. É um caso investigado pela polícia, não uma estimativa da incidência desse crime em toda a Zona Leste.',
    source:{label:'Band / Brasil Urgente · 19/08/2026 · 16h53',url:'https://www.band.com.br/noticias/brasil-urgente/ultimas/policia-descobre-desmanche-clandestino-na-zona-leste-de-sp-202608191653'}
  });
}

const artur=localSecurityCases.find((item)=>item.id==='artur-alvim-sequestro-procurado-14ago');
if(artur) Object.assign(artur,{
  lastVerified:'Revalidado em 20/08/2026 · nenhuma confirmação pública posterior de prisão/captura localizada na varredura das 18h30',
  legalStatus:'Investigado, com prisão decretada. A última confirmação pública localizada continua sendo a de 14/08, quando era informado como foragido. Isso não equivale a condenação pelo caso investigado.'
});

Object.assign(dailyContent['seguranca-zl'], {
  title:'Zona Leste em Foco · 20/08 18h30',
  summary:'A área regional foi atualizada com notícias de Itaquera e da Zona Leste, serviços, cultura, esporte e fatos policiais recentes. A pauta de segurança agora reúne a ocorrência de Aricanduva publicada hoje e um desmanche clandestino noticiado ontem, sempre separando caso confirmado de tendência estatística.',
  shareSummary:'Zona Leste em Foco 20/08 18h30: Itaquera tem decisão de Libertadores hoje, vacinação programada para amanhã e obras do Parque do Carmo; São Miguel/Vila Formosa tiveram agendas políticas com protestos; segurança inclui ocorrências recentes em Aricanduva e investigação de desmanche clandestino, sem extrapolar casos isolados.',
  readTime:'ATUALIZADO ÀS 18H30',
  badge:'ZONA LESTE EM FOCO · AO VIVO',
});

const drop=todayDrops.find((item)=>item.slug==='seguranca-zl');
if(drop) Object.assign(drop,{
  label:'Zona Leste em Foco',
  title:'Zona Leste agora: jogo em Itaquera, serviços e novas ocorrências confirmadas',
  detail:'Notícias de hoje e ontem entram com fonte, contexto e próximos passos; segurança mantém ocorrência, status jurídico e tendência como coisas diferentes.'
});
