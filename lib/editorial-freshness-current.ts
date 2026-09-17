export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-16';
export const editorialFreshnessValidatedAt='16/09/2026 · 05h18 · corte da manhã';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Brasil material ocorrido e confirmado em 16/09 no corte inicial; notícias de dias anteriores não foram recicladas.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 16/09: China reagiu ao reconhecimento de capacidades militares espaciais dos EUA e alertou para corrida armamentista.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem pesquisa, decisão ou agenda política material de 16/09 confirmada no corte inicial; pesquisas de 14–15/09 não foram recicladas.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen; rotação diária automática.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen; rotação diária automática.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem previsão local pontual validada neste corte; Reel omitido.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste ocorrido e datado de 16/09 confirmado no corte; Reel omitido.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 16/09: Corinthians recebe o Estudiantes às 21h30 pela Libertadores; no corte a partida ainda não ocorreu.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação diária automática; conceitos precisam permanecer distintos da janela anterior.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas + 3 dias em 16/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 16/09: antecipar uma refeição simples para reduzir carga mental.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 16/09: salvar endereço e mapa da hospedagem offline.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 16/09: comparar versão de estúdio e apresentação ao vivo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum lançamento ou fato material de Games ocorrido em 16/09 confirmado no corte; Reel omitido.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 16/09: Comissão Europeia anunciou intenção de reunir laboratórios de IA de fronteira para discutir riscos.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fechamento ou fato financeiro material de 16/09 suficientemente consolidado no corte inicial; Reel anterior omitido.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 16/09 confirmado por fonte primária no corte; Reel omitido.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem novo advisory/KEV/exploração datado de 16/09 confirmado por fonte oficial no corte; Reel omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 16/09 confirmado; Reel omitido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 16/09 mantém teto de R$70 mil e orienta conferir autoteste das luzes do painel.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 16/09 sobre inspeção de bengalas e vazamentos.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 16/09 sobre vibração durante frenagem.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
