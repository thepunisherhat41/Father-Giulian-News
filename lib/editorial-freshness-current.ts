export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-08';
export const editorialFreshnessValidatedAt='08/09/2026 · 02h46 · atualização intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato material novo da data local 08/09 confirmado neste corte; Reel omitido.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo datado de 08/09 localizado na Zona Leste com fonte suficiente neste corte; Reel omitido.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem agenda, pesquisa, declaração ou fato político material confirmado para a data local 08/09 neste corte; Reel omitido.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 08/09: mísseis balísticos russos atingiram Kyiv após a saída dos enviados dos EUA; autoridades locais reportaram seis feridos e danos residenciais.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 08/09: INMET indica muitas nuvens, pancadas de chuva e trovoadas em São Paulo; o card não presume chuva em todos os bairros.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 08/09: pelagem da lontra-marinha, pressão oceânica, afastamento da Lua, diamante/grafite e fungos bioluminescentes; conceitos distintos da janela recente.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 08/09: escuta focada em bateria e percussão.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem lançamento/anúncio material da data local 08/09 confirmado em fonte oficial neste corte; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 2 dias em 08/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 08/09: deixar água e uma opção neutra acessíveis para momentos de enjoo.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 08/09: Corinthians está em La Plata e tem hoje sua única sessão completa antes do Estudiantes; o card não presume que o treino já ocorreu.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 mantém teto de R$70 mil e orienta avaliar a primeira partida com motor frio.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 sobre corrente, folga, elos e relação final.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 sobre chiado de correia como sintoma que exige inspeção da causa.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 08/09: comparar rotas também pela estrutura e segurança das paradas.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato financeiro adicional necessário neste corte; Reel omitido.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 08/09: Mistral AI anunciou rodada de €3 bilhões, com avaliação de aproximadamente US$24 bilhões.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory/fato novo da data local 08/09 confirmado neste corte; não reciclados incidentes anteriores.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem incidente/advisory Cyber novo da data local 08/09 confirmado neste corte; Reel omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 08/09 com confirmação oficial suficiente neste corte; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}