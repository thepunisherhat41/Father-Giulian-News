export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-08';
export const editorialFreshnessValidatedAt='08/09/2026 · 00h · nova edição';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato material novo da data local 08/09 confirmado no corte inicial; Reel omitido em vez de reciclar 07/09.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo datado de 08/09 localizado na Zona Leste com fonte suficiente no corte inicial; Reel omitido.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem agenda, pesquisa, declaração ou fato político material confirmado para a data local 08/09 no corte inicial; Reel omitido.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'As atualizações internacionais encontradas no primeiro corte foram publicadas ainda em 07/09 no horário de São Paulo; não foram recicladas como fato novo de 08/09.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 08/09: INMET indica muitas nuvens, pancadas de chuva e trovoadas em São Paulo; o card não presume chuva em todos os bairros.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 08/09: pelagem da lontra-marinha, pressão oceânica, afastamento da Lua, diamante/grafite e fungos bioluminescentes; conceitos distintos da janela recente.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 08/09: escuta focada em bateria e percussão.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem lançamento/anúncio material da data local 08/09 confirmado em fonte oficial no corte inicial; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 2 dias em 08/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 08/09: deixar água e uma opção neutra acessíveis para momentos de enjoo.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 08/09: Corinthians está em La Plata e tem hoje sua única sessão completa antes do Estudiantes; o card não presume que o treino já ocorreu.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 mantém teto de R$70 mil e orienta avaliar a primeira partida com motor frio.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 sobre corrente, folga, elos e relação final.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 sobre chiado de correia como sintoma que exige inspeção da causa.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 08/09: comparar rotas também pela estrutura e segurança das paradas.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato financeiro material publicado após a virada local para 08/09 foi confirmado no corte inicial; Reel omitido.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo da data local 08/09 confirmado no corte inicial; Reel omitido.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory/fato novo da data local 08/09 confirmado no corte inicial; não reciclados incidentes de 07/09.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem incidente/advisory Cyber novo da data local 08/09 confirmado no corte inicial; Reel omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 08/09 com confirmação oficial suficiente no corte inicial; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}