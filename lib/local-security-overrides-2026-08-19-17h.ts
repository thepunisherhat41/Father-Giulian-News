import { dailyContent, todayDrops } from './daily-content';
import { localSecurityTodayStatus } from './local-security-content';

Object.assign(localSecurityTodayStatus, {
  status: 'SEM NOVA OCORRÊNCIA CONFIRMADA',
  note: 'Na varredura das 17h foram pesquisadas fontes oficiais e confiáveis para Itaquera, Artur Alvim, Penha, Vila Matilde, Vila Prudente, Sapopemba, São Mateus, Cidade Tiradentes, Guaianases, Itaim Paulista, São Miguel, Ermelino Matarazzo e Aricanduva/Vila Formosa. Não apareceu publicação criminal nova, suficientemente confirmada e diretamente atribuível à Zona Leste nesta tarde. Conteúdo antigo permanece como contexto.',
  nextCheck: 'próxima revisão editorial',
});

Object.assign(dailyContent['seguranca-zl'], {
  title: 'Segurança pública · Zona Leste: sem nova ocorrência confirmada até 17h',
  summary: 'A revisão da tarde não encontrou publicação nova e suficientemente confirmada sobre roubo, furto, operação policial ou outro fato criminal diretamente atribuível à Zona Leste. A aba mantém a notícia recente já validada e separa dados antigos como contexto.',
  shareSummary: 'Segurança ZL 19/08 17h: nenhuma nova ocorrência confirmada foi encontrada nas fontes monitoradas. Notícias antigas continuam separadas como contexto, sem serem recicladas como atuais.',
  readTime: 'ATUALIZADO ÀS 17H',
  badge: 'SEGURANÇA PÚBLICA · ZONA LESTE',
});

const item=todayDrops.find((drop)=>drop.slug==='seguranca-zl');
if(item) Object.assign(item, {
  title:'Segurança ZL 17h: sem nova ocorrência confirmada',
  detail:'Nova checagem da tarde não encontrou fato criminal novo com confirmação suficiente; dados anteriores seguem claramente separados como contexto.'
});
