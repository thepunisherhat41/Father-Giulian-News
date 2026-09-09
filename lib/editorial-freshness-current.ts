export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-09';
export const editorialFreshnessValidatedAt='09/09/2026 · 02h47 · nova edição';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato material novo da data local 09/09 confirmado neste corte; Reel omitido.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste publicado e datado em 09/09 confirmado neste corte; Reel omitido.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma agenda, pesquisa, decisão ou declaração política material de 09/09 confirmada neste corte; fatos de 08/09 não foram reciclados.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 09/09: Irã lançou mísseis contra base dos EUA na Jordânia e atacou embarcações perto de Hormuz; autoridades não reportaram vítimas na base neste corte.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 09/09: CGE prevê sol entre nuvens, 13°C a 22°C e pancadas isoladas entre tarde e início da noite.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 09/09: gelo e densidade, pulsares, cores da aurora, céu azul e sistema elétrico do coração; conceitos distintos dos 7 dias anteriores.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 09/09: escuta focada nos silêncios, pausas e espaços do arranjo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum lançamento ou anúncio material da data local 09/09 confirmado em fonte oficial neste corte; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 3 dias em 09/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 09/09: resolver hoje uma pequena decisão de amanhã para reduzir carga mental.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 09/09: Estudiantes x Corinthians às 21h30 em La Plata, ida das quartas da Libertadores; nenhuma ocorrência futura foi presumida.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 09/09 mantém teto de R$70 mil e orienta testar o ar-condicionado também com o carro parado.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 09/09 sobre alinhamento visual de guidão, bengalas e roda dianteira.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 09/09 sobre estalo ao esterçar e necessidade de avaliar o contexto antes do diagnóstico.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 09/09: definir antes um horário-limite para iniciar o retorno.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/MERCADOS 09/09: Brent se aproxima de US$100 em cotação intradiária com nova escalada regional; card não trata a cotação como fechamento.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 09/09: CFO da OpenAI relata expansão de IA para desenho de chips e setores especializados; resultados apresentados como afirmação da executiva, não auditoria independente.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory ou exploração material distinta datada de 09/09 confirmada neste corte; Patch Tuesday de 08/09 não foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem incidente ou advisory Cyber material da data local 09/09 confirmado neste corte; Reel omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material da data local 09/09 confirmado neste corte; SAP Security Patch Day de 08/09 não foi reciclado.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}