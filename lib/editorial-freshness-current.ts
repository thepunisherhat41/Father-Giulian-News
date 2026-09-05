export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-05';
export const editorialFreshnessValidatedAt='05/09/2026 · 00h02 · abertura da edição';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Na abertura de 05/09, nenhuma informação material nova da data foi confirmada em fonte adequada; Reel omitido em vez de reciclar 04/09.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 05/09 com fonte adequada e recorte específico da Zona Leste; Reel omitido.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato político brasileiro novo de 05/09 confirmado em fonte primária ou jornalismo reconhecido nesta abertura; Reel omitido.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM Reuters 05/09: Casa Branca avalia nomes para possível substituição do vice-secretário de Defesa Steve Feinberg; nenhuma troca foi anunciada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Há previsão do INMET para sábado (05) publicada em 03/09, mas nenhum boletim novo datado de 05/09 foi confirmado nesta abertura; Reel omitido para respeitar freshness jornalística.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova: wombats e cubos, migração vertical oceânica, densidade de Saturno, temperatura do ar em raios, dorsal meso-oceânica e conexão a dois baseada em gratidão.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência renovada de 05/09: trocar uma música marcante da adolescência e contar a memória ligada a ela.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 05/09 confirmado nesta abertura; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia avança para 8 semanas + 6 dias em 05/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada: identificar tarefa que pesa e assumir uma parte concreta.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 05/09 confirmado em fonte adequada nesta abertura; Reel omitido, sem reciclar a atualização de Yuri Alberto de 04/09.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado de compra de usado; teto de R$70 mil mantido explicitamente.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado sobre condição e idade dos pneus.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado sobre especificação do fluido de arrefecimento.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia renovada: shortlist de três destinos para futuro bate-volta.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fechamento ou fato financeiro material novo de 05/09 confirmado nesta abertura; Reel omitido, sem reapresentar fechamento de 04/09.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato tecnológico material novo de 05/09 confirmado nesta abertura; Reel omitido.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory/KEV oficial novo datado de 05/09 confirmado nesta abertura; Reel omitido.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber novo de 05/09 confirmado nesta abertura; Reel omitido, sem reciclar reportagem de 04/09.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 05/09 com confirmação oficial suficiente nesta abertura; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}