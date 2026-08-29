export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-29';
export const editorialFreshnessValidatedAt='29/08/2026 · 14h58 · revisão da tarde';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 11h49: Ministério da Saúde reforça vacinação contra sarampo; campanha nacional segue até 01/09. Este fato substitui o card das 09h26.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Zona Leste reavaliada até 14h58. Sem pauta material nova de 29/08 confirmada; ações de 27–28/08 permanecem expiradas e não são recicladas.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 10h22: agenda dos presidenciáveis. Na revisão das 14h58, horários já transcorridos continuam classificados como agenda quando não há confirmação independente de realização; e-Título permanece em manutenção programada até 18h.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 29/08: inflação iraniana em torno de 66%, retração comercial e sanções; Hormuz segue sem normalização plena. O acordo Venezuela–EUA foi rechecado, mas o anúncio ocorreu em 28/08 e não substitui o fato novo do dia.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não entra como notícia porque não houve fato material novo do dia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não tratado como notícia.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CGE 12h01: 30°C de temperatura média, umidade em torno de 47%, máxima de até 32°C e possibilidade de chuva curta e isolada no fim da tarde.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação mantida após nova checagem: ebulição em baixa pressão, enrugamento dos dedos pelo sistema nervoso e correções relativísticas do GPS. Moiré, olfato e DNS seguem removidos.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Maçambique de Osório revalidado para a programação cultural de hoje às 20h em Brasília; permanece como agenda cultural, não notícia concluída.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'gamescom revalidada às 14h58 BRT. A final do cosplay estava marcada para 17h em Colônia; o horário já passou, mas a página oficial consultada ainda não exibia vencedores, portanto nenhum resultado foi inventado.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card educativo mantido para 7 semanas + 6 dias, com foco prático em hidratação, descanso e sinais de alerta.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão do dia mantida: assumir uma tarefa completa e reduzir carga mental sem esperar instruções.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'UOL 05h30: Hugo Souza e Matheus Bidu disponíveis e Yuri Alberto com recuperação atrasada. UOL 12h: Corinthians cobra respostas financeiras, jurídicas e metodológicas da SAFiel antes de avançar.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card de compra de usado revalidado com checklist e teto explícito de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card técnico revalidado: inspeção de corrente, coroa e pinhão em moto usada.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card técnico revalidado: segurança ao abrir sistema de arrefecimento pressurizado.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Agenda de 29/08 mantida: Museu do Pontal celebra 50 anos com festival gratuito e abertura de exposição neste sábado.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil: Novo Desenrola Brasil termina em 31/08; regras e condições do serviço seguem válidas nesta revisão.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 29/08: OpenAI anuncia encerramento futuro do fornecimento de modelos ao Cursor; conversas ainda continuam.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Fontes rechecadas até 14h58. Nenhum briefing novo e primário de 29/08 foi promovido a Reel; fatos de 28/08 continuam bloqueados.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'SecurityWeek 29/08 07h55 ET: Hasbro notifica atuais e ex-funcionários sobre possível exposição de dados pessoais; escopo global não foi divulgado.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado até 14h58. Não foi localizado fato material novo de 29/08 com confirmação suficiente; PaperCut de 28/08 e itens anteriores seguem bloqueados.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
