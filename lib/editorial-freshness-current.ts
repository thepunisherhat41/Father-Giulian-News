export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-14';
export const editorialFreshnessValidatedAt='14/09/2026 · 00h · abertura do dia';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Na abertura de 14/09 não há fato Brasil material ocorrido e confirmado hoje; notícias de 13/09 não foram recicladas como fato novo.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Na abertura de 14/09 não há fato Mundo material ocorrido e confirmado hoje; o corte noturno de 13/09 não foi carregado para o novo dia.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 14/09: calendário oficial do TSE concentra hoje prazos de candidaturas e a data-limite para conclusão da assinatura digital e lacração dos sistemas eleitorais; nenhum ato é presumido concluído.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como jornalismo; rotação de curiosidades foi renovada para 14/09.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Curiosidade nova 14/09: três corações e hemocianina em polvos.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 14/09: previsão atualizada para São Paulo mantém segunda chuvosa e fria, com pouca variação de temperatura e máxima perto de 19°C.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste ocorrido em 14/09 foi confirmado neste corte; atualizações de 13/09 foram corretamente omitidas.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo do Corinthians ocorrido em 14/09 foi confirmado neste corte; resultado de 13/09 não foi reciclado.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 14/09: polvos, velocidade do som no oceano, duração do dia em Vênus, temperatura do ar em raios e correção de erros em QR Codes.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas + 1 dia em 14/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 14/09: preparar hoje itens que simplificam a manhã seguinte.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09: manter mapa, reservas e contatos essenciais acessíveis offline.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 14/09: perceber como o arranjo constrói sensação de crescendo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum lançamento ou fato material de Games ocorrido em 14/09 confirmado neste corte; seção omitida.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato de Tecnologia ocorrido em 14/09 foi confirmado na abertura do dia; declarações de 13/09 não foram recicladas.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato financeiro material ocorrido em 14/09 foi confirmado na abertura do dia; seção omitida.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory ou exploração material datada de 14/09 confirmada neste corte; nenhum CVE antigo foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem incidente Cyber material datado de 14/09 confirmado neste corte; seção omitida.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 14/09 confirmado; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 14/09 respeita teto de R$70 mil e orienta testar o ar-condicionado durante a avaliação do usado.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09 sobre comportamento do motor em partida realmente a frio.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09 sobre leitura correta do nível de óleo pela vareta.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
