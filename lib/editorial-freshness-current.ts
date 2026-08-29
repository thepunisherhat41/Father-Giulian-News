export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-29';
export const editorialFreshnessValidatedAt='29/08/2026 · 12h02 · revisão de meio-dia';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 09h26: levantamento DataSUS/Projeto Criança Segura sobre quedas, queimaduras e internações infantis.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Zona Leste reavaliada até o meio-dia. Sem pauta material nova de 29/08 confirmada; ações de 27–28/08 permanecem expiradas e não são recicladas.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 10h22: agenda informada pelos presidenciáveis para sábado; compromissos tratados como agenda, não como eventos concluídos. TSE: manutenção do e-Título separada como serviço.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 29/08: inflação iraniana em torno de 66%, forte retração comercial e sanções; Hormuz segue sem normalização plena confirmada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não entra como notícia porque não houve fato material novo do dia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não tratado como notícia.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Revisão de meio-dia: São Paulo ensolarada perto de 29°C, máxima em torno de 33°C e atenção à baixa umidade durante a tarde; CGE permanece como fonte oficial.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação refeita ao meio-dia: ebulição em baixa pressão, enrugamento dos dedos pelo sistema nervoso e correções relativísticas do GPS. Moiré, olfato e DNS removidos da edição.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação cultural refeita: Maçambique de Osório, com apresentação de hoje às 20h em Brasília segundo Agência Brasil 10h46.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Programação oficial da gamescom revalidada ao meio-dia; final do concurso de cosplay permanece na agenda de 29/08.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card educativo reescrito para a revisão de meio-dia, mantendo a fase de 7 semanas + 6 dias e foco prático em hidratação, descanso e sinais de alerta.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão refeita ao meio-dia: assumir uma tarefa completa e reduzir carga mental sem esperar instruções.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'UOL 29/08: Hugo Souza e Matheus Bidu disponíveis para o clássico; Yuri Alberto teve recuperação atrasada após nova dor na coxa direita.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card renovado com checklist de compra realista e teto explícito de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card técnico renovado: inspeção de corrente, coroa e pinhão em moto usada.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card técnico renovado: segurança ao abrir sistema de arrefecimento pressurizado.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Agenda nova de 29/08: Museu do Pontal celebra 50 anos com festival gratuito e abertura de exposição neste sábado.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 08h01: prazo do Novo Desenrola Brasil termina em 31/08; regras e condições de renegociação publicadas hoje.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 29/08: OpenAI anuncia encerramento futuro do fornecimento de modelos ao Cursor; conversas ainda continuam.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Fontes revistas até o meio-dia. Sínteses publicadas hoje recapitulam fatos anteriores; nenhum briefing novo foi promovido a Reel para não reciclar 28/08.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'SecurityWeek 29/08 07h55 ET: Hasbro começa a notificar atuais e ex-funcionários sobre possível exposição de dados pessoais.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec revisado. O artigo relevante localizado é de 24/08 e PaperCut é de 28/08; ambos bloqueados como notícia nova de 29/08.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
