export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-31';
export const editorialFreshnessValidatedAt='31/08/2026 · 14h27 · revisão da tarde';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 31/08 07h02: Caixa conclui o calendário regular do Bolsa Família de agosto para beneficiários com NIS final 0; 19,3 milhões de famílias são atendidas no mês.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Prefeitura de São Paulo confirma ações de empregabilidade do Cate Móvel em 31/08 na Casa da Mulher – Itaquera e no Parque Jardim Sapopemba.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'TSE 31/08 09h00: começou a compilação dos sistemas eleitorais; assinatura digital e lacração serão concluídas em 04/09. O julgamento virtual dos registros presidenciais segue em paralelo até 02/09. Publicações posteriores rechecadas até 14h27 não alteraram materialmente o card.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 31/08: autoridades iranianas negam ataque a Kharg e afirmam que o terminal segue operacional; alegação de Trump permanece sem confirmação independente e vídeo associado era gerado por IA. Novos desdobramentos regionais foram rechecados até 14h27 sem invalidar este fato.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não entra como notícia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen revisado; não tratado como notícia.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CGE 31/08 12h10: São Paulo registrava 22,2°C em média, umidade em torno de 89%, máxima prevista perto de 28°C e chance de pancadas isoladas à tarde/noite. Este boletim oficial substitui a previsão anterior de calor e baixa umidade.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova de 31/08 mantida: afastamento lunar medido por laser, córnea sem vasos sanguíneos e wear leveling de SSD.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Proposta musical renovada para 31/08.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 31/08 confirmado nesta revisão; gamescom de 30/08 expirou.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'DUM 05/07/2026 resulta em 8 semanas + 1 dia em 31/08/2026.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada para 31/08.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ge 31/08 12h15: Corinthians publicou nota repudiando agressividade contra criança após o clássico de 30/08. O episódio ocorreu ontem; a declaração oficial é o fato novo de hoje. Cruzeiro x Corinthians feminino segue confirmado às 19h15.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist novo de 31/08 mantém teto explícito de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist técnico renovado para 31/08.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Diagnóstico técnico renovado para 31/08.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Proposta leve de planejamento de passeio renovada para 31/08.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'31/08 é o prazo final para formalização de acordos do Novo Desenrola Brasil; Agência Brasil informa que não há nova extensão prevista.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 31/08: EuroHPC contratou a Bull por €387,8 milhões para o supercomputador LUMI-AI na Finlândia, com operação prevista para o segundo semestre de 2027. Outras notícias de tecnologia do dia foram rechecadas e não exigem substituir este card nesta revisão.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FSB 31/08: carta ao G20 classifica o impacto de IA de fronteira sobre risco cibernético como preocupação imediata para o sistema financeiro e pede reforço de resiliência.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cyber rechecado até 14h27; sem incidente novo de 31/08 confirmado o suficiente para Reel separado.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado até 14h27; sem CVE/advisory publicado em 31/08 com confirmação suficiente. Itens de 27–29/08 continuam bloqueados para não serem reciclados como notícia de hoje.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
