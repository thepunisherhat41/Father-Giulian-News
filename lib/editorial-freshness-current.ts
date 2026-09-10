export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-10';
export const editorialFreshnessValidatedAt='10/09/2026 · 17h34 · corte de fechamento';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 10/09 confirmado neste corte; medidas sobre combustíveis anunciadas em 09/09 não foram recicladas como notícia nova.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste publicado e datado em 10/09 confirmado neste corte; Reel omitido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/REPORTAGEM 10/09: pronunciamento de Alexandre de Moraes anunciado para esta quinta foi cancelado; segundo a Folha, a assessoria do STF informou que será remarcado. Nenhuma nova data ou realização foi presumida.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 10/09: Reuters revelou hoje detalhes de operação russa frustrada na primavera de 2026 contra infraestrutura submarina perto de Svalbard. O card explicita que o evento é anterior e que a novidade de hoje é a apuração publicada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/PREVISÃO 10/09: alerta emitido para 9 e 10/09 segue abrangendo esta quinta; card deixa explícito que o aviso foi divulgado no dia anterior e descreve risco, não evento ocorrido. O conteúdo foi mantido por continuar correto no corte.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 10/09: três corações do polvo, rotação de Vênus, placas tectônicas, participação do olfato no sabor e micro-ondas não ionizantes; conceitos distintos dos sete dias anteriores.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 10/09: comparar a mesma faixa em versão de estúdio e apresentação ao vivo.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 10/09: Xbox Wire lista títulos previstos para lançamento nesta quinta; disponibilidade não é presumida antes da confirmação em cada região/loja.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 4 dias em 10/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 10/09: assumir uma tarefa logística inteira do começo ao fim.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 10/09: resultado da noite de 09/09 confirmado pela CONMEBOL — Estudiantes 1 x 1 Corinthians; card explicita que o fato ocorreu ontem e registra a situação atual da eliminatória.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 10/09 mantém teto de R$70 mil e orienta avaliar a primeira partida com motor frio.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 10/09 sobre conferir folga e desgaste da corrente em diferentes pontos.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 10/09: luz da injeção e código de falha como pistas, sem troca automática de peça.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 10/09: deixar endereço, rota e ponto de apoio utilizáveis sem depender totalmente de sinal.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/MERCADOS 10/09: Reuters confirmou o fechamento do Brent em US$107,63 por barril, alta de US$6,42 (+6,34%); o fechamento substitui a cotação intradiária anterior.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 10/09: Visa, Mastercard e Ant International anunciam iniciativa comum para identificar e verificar agentes de IA em pagamentos.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory ou exploração material distinta datada de 10/09 confirmado neste corte; nenhum CVE antigo foi reciclado.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 10/09: Reuters relata novas descobertas da Anthropic sobre campanhas maliciosas russas e chinesas envolvendo Claude entre janeiro e setembro de 2026; a novidade do dia é a divulgação das descobertas, sem reciclar os incidentes de avaliação de 09/09.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material da data local 10/09 confirmado neste corte; nenhum advisory de dias anteriores foi reciclado.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}