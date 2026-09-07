export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-07';
export const editorialFreshnessValidatedAt='07/09/2026 · 11h35 · atualização intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 07/09: desfile da Independência em Brasília já ocorreu e foi confirmado; substitui a AGENDA da madrugada.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo datado de 07/09 localizado na Subprefeitura de São Miguel Paulista até 11h35; Reel omitido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 07/09: Lula, Edson Fachin, Davi Alcolumbre e Hugo Motta compareceram ao desfile em Brasília; presença conjunta confirmada por cobertura independente.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 07/09: Reuters publicou a abertura da primeira ponte rodoviária entre Rússia e Coreia do Norte, sobre o rio Tumen.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 07/09 segue válida: São Paulo inicia o feriado com frio, muitas nuvens e possibilidade de chuva isolada; sem mudança material desde o corte anterior.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 07/09: voo para trás do beija-flor, canal SOFAR, ~16 amanheceres na ISS, ponto de fusão do gálio e Antártida como deserto polar.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 07/09: escuta focada na linha de baixo de uma faixa conhecida.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 07/09 confirmado em fonte oficial adequada até 11h35; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 1 dia em 07/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 07/09: antecipar água e opção simples antes de Bruna levantar.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Resultado de 2 a 1 para a Chapecoense ocorreu em 06/09 e já foi publicado na edição anterior; sem fato novo do Corinthians iniciado em 07/09 até 11h35. Reel omitido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 mantém teto de R$70 mil e orienta perceber ruídos de direção/suspensão em curvas lentas.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 sobre leitura do padrão de desgaste dos pneus.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 sobre fluido de freio, umidade e intervalo conforme manual.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 07/09: planejar passeio de feriado pelo horário de retorno.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA oficial 07/09 segue válida: B3 sem negociação no feriado e agências bancárias sem expediente presencial; canais digitais/Pix permanecem disponíveis.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 07/09: Cathay Pacific e Google anunciaram expansão de testes de IA para previsão e redução de contrails.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 07/09: Comissão Europeia confirmou recebimento de relatório da OpenAI sobre incidente anterior envolvendo agentes autônomos e um site alemão. O card explicita que o incidente original ocorreu meses antes.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 07/09: Reuters publicou relato da Liquid Network sobre incidente ocorrido em 06/09, com impacto financeiro relevante; o card explicita que o evento não começou hoje.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 07/09 com confirmação oficial suficiente até 11h35; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
