export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-07';
export const editorialFreshnessValidatedAt='07/09/2026 · 00h03 · nova edição';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 07/09: Brasil celebra 204 anos da Independência; Prefeitura de São Paulo informou desfile cívico-militar e operação especial de trânsito/transporte. Não tratado como evento já realizado.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo datado de 07/09 localizado na Subprefeitura de São Miguel Paulista até o corte; Reel omitido.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato político brasileiro iniciado em 07/09 e confirmado em fonte adequada até 00h03; pronunciamentos e fatos de 06/09 não foram reciclados.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato internacional iniciado em 07/09 no horário local de São Paulo foi confirmado até o corte; matérias com data UTC 07/09 mas ocorrência/publicação ainda em 06/09 local não foram tratadas como fato novo.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 07/09: São Paulo inicia o feriado com frio, muitas nuvens e possibilidade de chuva isolada; tendência de melhora gradual a partir de 08/09.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 07/09: voo para trás do beija-flor, canal SOFAR, ~16 amanheceres na ISS, ponto de fusão do gálio e Antártida como deserto polar.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 07/09: escuta focada na linha de baixo de uma faixa conhecida.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 07/09 confirmado em fonte oficial adequada até o corte; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 1 dia em 07/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 07/09: antecipar água e opção simples antes de Bruna levantar.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Resultado de 2 a 1 para a Chapecoense ocorreu em 06/09 e já foi publicado na edição anterior; sem fato novo do Corinthians iniciado em 07/09 até o corte, Reel omitido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 mantém teto de R$70 mil e orienta perceber ruídos de direção/suspensão em curvas lentas.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 sobre leitura do padrão de desgaste dos pneus.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 07/09 sobre fluido de freio, umidade e intervalo conforme manual.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 07/09: planejar passeio de feriado pelo horário de retorno.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA oficial 07/09: B3 sem negociação no feriado e agências bancárias sem expediente presencial; canais digitais/Pix permanecem disponíveis.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato de tecnologia iniciado em 07/09 e confirmado até o corte; Reel omitido.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory ou nova entrada CISA KEV datada de 07/09 confirmada até o corte; última atualização relevante encontrada é de 02/09 e não foi reciclada.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber novo de 07/09 confirmado em fonte primária adequada até o corte; Reel omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 07/09 com confirmação oficial suficiente até o corte; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
