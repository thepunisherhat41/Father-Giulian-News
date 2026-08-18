import { dailyContent, todayDrops } from './daily-content';

const slug = 'seguranca-zl';

dailyContent[slug] = {
  title: 'Segurança na Zona Leste: crime, roubos, furtos e o que os dados realmente dizem',
  summary: 'Um radar local para acompanhar segurança pública na Zona Leste de São Paulo sem sensacionalismo: dados oficiais, tendências, ações recentes, serviços e contexto por região. Os números sempre mostram período e fonte para não transformar um dado antigo em alerta em tempo real.',
  shareSummary: 'Segurança ZL: radar de roubos, furtos, veículos, celular e ações de segurança na Zona Leste, com dados oficiais da SSP/Prefeitura, período explícito e orientação prática para registrar ocorrências.',
  readTime: '7 MIN READ',
  badge: 'ZONA LESTE / PUBLIC SAFETY',
  stats: [
    { label: 'ROUBO VEÍCULO · CAPITAL', value: '-32,08%', note: 'jun/26 vs jun/25' },
    { label: 'ROUBOS · CAPITAL', value: '-12,78%', note: 'jun/26 vs jun/25' },
    { label: 'CÂMERAS · COP LESTE', value: '~4 MIL', note: 'acesso operacional informado em jun/26' },
  ],
  sections: [
    {
      title: 'Leitura rápida do momento',
      paragraphs: ['Os dados consolidados mais recentes publicados para a capital apontam queda em roubos e roubos de veículos, enquanto recortes anteriores da Zona Leste também mostraram redução em áreas como Itaquera, São Mateus, Cidade Tiradentes e Guaianases. Isso é tendência estatística — não significa que toda rua ou horário esteja igualmente seguro.'],
      bullets: ['Sempre compare o mesmo período do ano anterior.', 'Dados da capital não devem ser usados como se fossem dados de um bairro específico.', 'Ocorrência isolada não define tendência; tendência também não elimina risco individual.'],
    },
    {
      title: 'O que entra neste radar',
      bullets: ['Roubo e furto de pessoas, celulares e veículos.', 'Roubo de carga e ocorrências que afetem mobilidade/localidade.', 'Dados oficiais da SSP por mês, área e unidade policial quando disponíveis.', 'Ações de PM, Polícia Civil, GCM, Smart Sampa e Muralha Paulista.', 'Golpes ou padrões de crime com impacto local relevante.', 'Serviços úteis: Delegacia Eletrônica, Disque-Denúncia e canais oficiais.'],
    },
    {
      title: 'O que não entra',
      bullets: ['Nome/endereço de vítimas particulares.', 'Localização residencial precisa de pessoas envolvidas.', 'Boatos de grupos de bairro sem confirmação.', '“Mapa de ladrão” baseado em posts anônimos.', 'Previsão de onde haverá crime ou onde a polícia não estará.'],
    },
  ],
  sources: [
    { label: 'SSP-SP · Estatísticas criminais', url: 'https://www.ssp.sp.gov.br/estatistica/consultas' },
    { label: 'Prefeitura de São Paulo · Segurança Urbana', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana' },
  ],
  disclaimer: 'Os dados são registros administrativos e podem sofrer atualização. O radar não é monitoramento policial em tempo real e não substitui os canais oficiais de emergência.',
};

if (!todayDrops.some((drop) => drop.slug === slug)) {
  todayDrops.push({
    slug,
    label: 'Segurança ZL',
    emoji: '🚨',
    title: 'Zona Leste ganha radar próprio de roubos, furtos e segurança local',
    detail: 'Dados oficiais, tendências por período, ações recentes e serviços úteis — sem expor vítimas ou transformar ocorrência isolada em “mapa de risco”.',
  });
}

if (dailyContent.hoje) {
  dailyContent.hoje.readTime = `${todayDrops.length} MISSÕES`;
}
