export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-31';
export const editorialFreshnessValidatedAt='31/08/2026 · 02h30 · primeira edição do dia';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Busca de madrugada ainda sem fato nacional material novo de 31/08 com confirmação suficiente; não reciclar 30/08.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Zona Leste rechecada na virada do dia; nenhum fato de 31/08 com fonte datada e confirmação suficiente foi promovido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'TSE iniciou à meia-noite de 31/08 o julgamento virtual dos registros das candidaturas à Presidência; sessão segue até 02/09.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 31/08: EUA e Irã retomam ataques; alegação de Trump sobre destruição em Kharg não tinha confirmação independente e vídeo associado aparentava ser gerado por IA.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não entra como notícia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen revisado; não tratado como notícia.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'CGE ainda não tinha boletim novo de 31/08 indexado na checagem de madrugada; card de 30/08 não é reciclado.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova de 31/08: afastamento lunar medido por laser, córnea sem vasos sanguíneos e wear leveling de SSD.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Proposta musical renovada para 31/08.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 31/08 confirmado na revisão de madrugada; gamescom de 30/08 expirou.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'DUM 05/07/2026 resulta em 8 semanas + 1 dia em 31/08/2026.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada para 31/08.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ge 31/08 00h05: Cruzeiro x Corinthians feminino às 19h15, no Independência, ida das quartas do Brasileiro Feminino.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist novo de 31/08 mantém teto explícito de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist técnico renovado para 31/08.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Diagnóstico técnico renovado para 31/08.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Proposta leve de planejamento de passeio renovada para 31/08.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'31/08 é o prazo final para formalização de acordos do Novo Desenrola Brasil; Agência Brasil informa que não há nova extensão prevista.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Busca de madrugada sem fato tecnológico primário suficientemente confirmado para Reel; apurações não independentes foram mantidas fora.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem briefing novo de 31/08 com fonte primária suficiente na checagem de madrugada; itens de dias anteriores não foram reciclados.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cyber rechecado na virada do dia; sem incidente novo de 31/08 confirmado o suficiente para Reel.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado na virada do dia; nenhum CVE/advisory novo de 31/08 foi promovido sem evidência de data e fonte suficiente.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
