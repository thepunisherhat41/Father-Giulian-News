import { dailyContent, todayDrops } from './daily-content';

const drop = (slug: string) => todayDrops.find((item) => item.slug === slug);

const carDrop = drop('carros');
if (carDrop) {
  carDrop.title = 'Comparativo de usados até R$ 70 mil: Spin, Duster, EcoSport e March';
  carDrop.detail = 'Quatro opções com motor acima de 1.0, preço de referência, perfil de uso, manutenção e pontos de atenção antes da compra.';
}

const motoDrop = drop('motos');
if (motoDrop) {
  motoDrop.title = 'Comparativo de motos: CB 300R, MT-03, V-Strom 650 e Interceptor 650';
  motoDrop.detail = 'Quatro propostas diferentes de uso, com preço de referência, ciclística, manutenção e checklist de compra.';
}

const gamesDrop = drop('games');
if (gamesDrop) {
  gamesDrop.title = 'Gamescom 2026: Opening Night Live será em 25 de agosto';
  gamesDrop.detail = 'A abertura será em 25/08 e a feira principal ocorre de 26 a 30/08 em Colônia; a cobertura separa anúncios confirmados de rumores.';
}

const fatherDrop = drop('pai');
if (fatherDrop) {
  fatherDrop.title = 'Ser Pai hoje: deixe pronto o kit para consultas';
  fatherDrop.detail = 'Documentos, água, lanche tolerável, exames e lista de dúvidas prontos reduzem a carga mental antes de sair.';
}

const financeDrop = drop('financas');
if (financeDrop) {
  financeDrop.title = 'Juros de longo prazo sobem: petróleo e dívida pressionam títulos públicos globais';
  financeDrop.detail = 'Taxas de títulos da Alemanha e França atingiram níveis de muitos anos; inflação de energia e emissão de dívida aumentam o prêmio exigido por investidores.';
}

const techDrop = drop('tecnologia');
if (techDrop) {
  techDrop.title = 'Unitree estreia com forte alta e coloca a robótica humanoide à prova no mercado';
  techDrop.detail = 'A estreia reforça o interesse por IA e robótica, mas também mostra por que produto, escala, receita e avaliação de mercado precisam ser analisados separadamente.';
}

const securityBriefingDrop = drop('security-briefing');
if (securityBriefingDrop) {
  securityBriefingDrop.title = 'Security Briefing: 10 sinais priorizados e decisões para discutir com o time';
  securityBriefingDrop.detail = 'Threat intelligence, AppSec, IAM, cloud, supply chain e IA traduzidos em prioridade, evidência, exposição, controles e decisão.';
}

const localSecurityDrop = drop('seguranca-zl');
if (localSecurityDrop) {
  localSecurityDrop.title = 'Segurança ZL: sem nova ocorrência criminal confirmada nesta atualização';
  localSecurityDrop.detail = 'Notícias de hoje, ontem e dos últimos 7 dias vêm primeiro; dados antigos aparecem apenas como contexto, sempre com data, área e fonte.';
}

const musicDrop = drop('musica');
if (musicDrop) {
  musicDrop.detail = 'Black abre a seleção de Rock e Rei do Gado conduz o sertanejo de época; as duas trilhas permanecem independentes e sem duplicação.';
}

const appSecDrop = drop('appsec-ssdlc');
if (appSecDrop) {
  appSecDrop.title = 'Serverless RCE: o impacto real depende também da identidade e das permissões da workload';
  appSecDrop.detail = 'O finding não termina no código ou no container: permissões da service account e acesso a secrets determinam o alcance real de uma exploração.';
}

if (dailyContent.carros) {
  dailyContent.carros.title = 'Comparativo de usados até R$ 70 mil: quatro opções com motor acima de 1.0';
  dailyContent.carros.shareSummary = 'Carros: quatro usados com motor acima de 1.0 e preço de referência até R$ 70 mil, comparados por uso, manutenção, risco do exemplar e custo-benefício.';
}

if (dailyContent.motos) {
  dailyContent.motos.title = 'Comparativo de motos: quatro propostas para usos diferentes';
  dailyContent.motos.shareSummary = 'Motos: quatro opções comparadas por perfil de uso, preço, ciclística, manutenção e pontos de inspeção antes da compra.';
}
