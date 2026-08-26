export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: revisão editorial completa das 17h de 26/08 em America/Sao_Paulo.
// Exatamente 21 áreas; Náutica permanece removida.
export const editorialFreshnessDate = '2026-08-26';
export const editorialFreshnessValidatedAt = '26/08/2026 · 17h02';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 26/08 análise nova sobre o desafio fiscal que qualquer governo eleito enfrentará: dívida bruta em 81,9% do PIB, déficit nominal próximo de 10% do PIB e necessidade de medidas politicamente difíceis para estabilizar a trajetória. A matéria é tratada como análise econômica, não como previsão eleitoral.' },
  { slug:'seguranca-zl', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Prefeitura de São Paulo publicou hoje ação de vacinação contra sarampo no Shopping Metrô Itaquera para 27 e 28/08, das 10h às 20h. É serviço local novo da data corrente, com fonte oficial e mídia específica do local.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar de 26/08 mantém entrevista anunciada para 21h05 e marcos operacionais do TSE; regras, agenda anunciada, pesquisa e presença confirmada permanecem separadas. Publicações do TSE de hoje foram rechecadas antes desta validação.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Irã e Omã avançaram em conversas sobre gestão do Estreito de Hormuz, enquanto o tráfego de navios segue muito abaixo da média pré-conflito. Negociação não é tratada como reabertura efetiva.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen reavaliado e mantido; não foi inventada novidade para forçar Reel jornalístico.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico/animal continua correto e útil; sem rotação artificial.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE atualizou às 15h46: Penha registrava 23°C, Parelheiros 21°C, média das máximas na capital em 23°C e havia possibilidade de chuviscos nas horas seguintes. A tendência é de queda de temperatura no fim do dia.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'A rotação de 26/08 permanece válida: tensão superficial, Müller-Lyer e reflexão interna total em fibra óptica, sem repetir os conceitos de 25/08.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo musical cultural segue válido no feed e não é apresentado como breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'A gamescom está oficialmente aberta em 26/08; o Reel usa mídia oficial e só trata anúncio, trailer, data e plataforma como confirmados quando publicados pela organização ou pelo publisher/estúdio.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Módulos médicos e de desenvolvimento permanecem preservados e válidos; conteúdo não é tratado como diagnóstico.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação prática diária de apoio e conteúdo de paternidade permanecem adequados e não dependem de notícia.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Permanece limitado a usados até R$70 mil, com FIPE/preço, manutenção, confiabilidade, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico de compra/manutenção continua válido e permanece no fim do feed.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen segue útil e mantém mídia específica.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino permanece válido; programação/preço só mudam quando houver confirmação atual.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Inflação dos EUA divulgada em 26/08 veio acima do esperado e alterou a leitura sobre juros; Wall Street operou cautelosa antes do balanço da Nvidia. Valores intradiários são identificados como fotografia do momento, não fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nvidia divulga resultados após o fechamento de 26/08; até a publicação oficial, consenso de receita/margens e leitura sobre Blackwell→Rubin são expectativas, não números reportados.' },
  { slug:'security-briefing', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Ubiquiti publicou em 26/08 o Security Advisory Bulletin 067 com falhas críticas em UniFi Protect, UniFi OS e UniFi Talk. O briefing diferencia explorável de exploração confirmada e prioriza inventário, exposição, versão e patch.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Relato profissional de 26/08 aponta exploração ativa da CVE-2026-60004 no Gitea. Cyber trata detecção, exposição e risco operacional da plataforma self-hosted.' },
  { slug:'appsec-ssdlc', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'A CVE-2026-60004 no Gitea entra pelo ângulo AppSec/SSDLC: write access pode alcançar execução no contexto do serviço, tornando identidade, permissões, runners, secrets, reachability e blast radius parte da priorização.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
