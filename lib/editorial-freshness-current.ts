export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-03';
export const editorialFreshnessValidatedAt='03/09/2026 · 02h45 · edição da madrugada';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 03/09: Nestlé anuncia plano de R$2 bilhões de investimentos no Brasil até 2028, incluindo cerca de R$600 milhões para nova fábrica de fórmulas infantis em Minas Gerais.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 03/09 com fonte adequada e recorte específico de Zona Leste nesta revisão; Reel omitido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA oficial TSE: sessão plenária prevista para 03/09 às 10h, com oito processos. Como a edição é anterior ao horário, nenhum julgamento ou resultado é presumido.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/REPORTAGEM Reuters 03/09: nova apuração destaca preocupação com vítimas civis da escalada EUA-Irã; números de mortos e feridos são atribuídos às autoridades iranianas e tratados como sujeitos a atualização.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen não é tratado como notícia e permanece fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen não é tratado como notícia e permanece fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO INMET válida para 03/09: névoa úmida no leste paulista, incluindo a capital; mínima prevista de 9°C e máxima de 25°C em São Paulo.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova de 03/09: condução térmica metal×madeira, variação diária de altura e correções relativísticas do GPS; conceitos não repetem a rotação de 02/09.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência renovada de 03/09: escuta em camadas para identificar instrumentos antes dos créditos.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA PlayStation: State of Play e State of Play Japan previstos para 03/09 a partir das 10h no horário de Brasília; nenhum anúncio é antecipado.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia da edição avança para 8 semanas + 4 dias em 03/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada: antecipar uma pequena responsabilidade da manhã anterior.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo de 03/09 suficientemente confirmado nesta revisão da madrugada; conteúdo de janela e ingressos de 02/09 não foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado; teto de R$70 mil mantido explicitamente.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado sobre primeira partida com motor frio.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado sobre especificação do fluido de arrefecimento versus cor.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia renovada de plano A/plano B para o mesmo passeio.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · MERCADOS INTRADIÁRIOS Reuters 03/09: Brent a US$95,04 e WTI a US$90,63 na madrugada; números não são apresentados como fechamento.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo datado de 03/09 confirmado nesta revisão; Microsoft/Azure de 02/09 não foi reciclado.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem guidance/advisory oficial novo datado de 03/09 confirmado nesta revisão; conteúdo CISA de 02/09 não foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber novo de 03/09 suficientemente confirmado nesta revisão; reportagem OpenAI de 02/09 não foi reciclada.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado em 03/09; sem CVE/advisory novo desta data com confirmação oficial suficiente para card separado.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
