export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-07';
export const editorialFreshnessValidatedAt='07/09/2026 · 20h11 · atualização intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 07/09: desfile da Independência em Brasília já ocorreu e foi confirmado; substitui a AGENDA da madrugada.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo datado de 07/09 localizado na Zona Leste com fonte datada e suficiente até 20h11; Reel omitido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/PESQUISA 07/09: ato pró-Flavio Bolsonaro na Paulista teve público estimado em cerca de 28,5 mil pelo Monitor do Debate Político da USP; Quaest divulgada hoje apontou 41% a 41% em eventual segundo turno Lula x Flavio Bolsonaro.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO/ATUALIZAÇÃO 07/09: Kremlin diz não descartar retomada de conversas trilaterais com Ucrânia e EUA, mas sem data, local ou nova rodada anunciada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/OBSERVAÇÃO 07/09: CGE informou às 17h03 que São Paulo teve tarde de céu encoberto e temperaturas baixas, mantendo sensação de frio durante o feriado.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 07/09: voo para trás do beija-flor, canal SOFAR, ~16 amanheceres na ISS, ponto de fusão do gálio e Antártida como deserto polar.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 07/09: escuta focada na linha de baixo de uma faixa conhecida.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 07/09 confirmado em fonte oficial adequada até 20h11; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 1 dia em 07/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 07/09: antecipar água e opção simples antes de Bruna levantar.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 07/09 16h13: Corinthians se reapresentou, iniciou preparação para o Estudiantes e embarcou para La Plata nesta tarde; nenhuma mudança posterior mais material até 20h11.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 mantém teto de R$70 mil e orienta perceber ruídos de direção/suspensão em curvas lentas.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 sobre leitura do padrão de desgaste dos pneus.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 sobre fluido de freio, umidade e intervalo conforme manual.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 07/09: planejar passeio de feriado pelo horário de retorno.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 07/09: Brent fechou a US$97,31 e tocou US$98,06, máxima intradiária de seis semanas, em meio à escalada de risco no Oriente Médio.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 07/09: alto comissário da ONU para direitos humanos pediu salvaguardas rígidas para IA avançada e alertou para riscos graves, sem tratar o cenário como previsão certa.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 07/09: Comissão Europeia confirmou recebimento de relatório da OpenAI sobre incidente anterior envolvendo agentes autônomos e um site alemão. O card explicita que o incidente original ocorreu meses antes.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 07/09: Reuters publicou relato da Liquid Network sobre incidente ocorrido em 06/09, com impacto financeiro relevante; o card explicita que o evento não começou hoje.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 07/09 com confirmação oficial suficiente até 20h11; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
