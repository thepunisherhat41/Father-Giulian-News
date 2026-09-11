export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-11';
export const editorialFreshnessValidatedAt='11/09/2026 · 11h23 · atualização';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 11/09: STF determinou a retirada do sigilo de milhares de páginas da investigação sobre o Banco Master; suspeitas e citações não são tratadas como culpa comprovada.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 11/09: ataques entre Rússia e Ucrânia deixaram vítimas e atingiram infraestrutura em Kyiv e Tula; mantido por continuar correto e atual.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato político eleitoral adicional de 11/09 foi incluído neste corte; reportagem sobre investigação envolvendo Flávio Bolsonaro não foi duplicada em Política para evitar redundância com Brasil/Banco Master.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como Reel jornalístico; a rotação atual usa curiosidades específicas de 11/09.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como Reel jornalístico; a rotação atual usa curiosidades específicas de 11/09.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/PREVISÃO 11/09: CGE prevê 18–27°C, rajadas fortes e pancadas isoladas; avisos são tratados como risco, não evento garantido.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste publicado e datado em 11/09 confirmado neste corte; Reel omitido.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo material de 11/09 confirmado neste corte; resultado de 09/09 não foi reciclado.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 11/09: rã-da-floresta e congelamento, dia solar de Mercúrio, fulguritos, córnea avascular e correção de erros em QR Codes.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 5 dias em 11/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 11/09: preparar um kit simples de saída antes de precisar.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 11/09: manter localizadores, endereço e contatos essenciais acessíveis offline.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 11/09: escuta em camadas focando bateria e depois baixo.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 11/09: janela oficial da Xbox Wire para 7–11/09 encerra nesta sexta; disponibilidade regional não é presumida.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 11/09: Reuters relata revisão do projeto de data centers de IA de 5 GW dos Emirados após ataques no Golfo; medidas ainda em estudo são identificadas como tal.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/MERCADOS 11/09: Brent perto de US$104,35, alta semanal acima de 8% e diesel dos EUA em recorde; números intradiários, não fechamento.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory ou exploração material datada de 11/09 confirmada neste corte; nenhum CVE antigo foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber material datado de 11/09 confirmado neste corte; reportagem de 10/09 não foi reciclada.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 11/09 confirmado neste corte; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 11/09 mantém teto de R$70 mil e orienta conferir identificação, documentação e histórico do usado.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 11/09 sobre folga, travamento e sinais na caixa de direção.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 11/09: tampa pressurizada faz parte do diagnóstico do sistema de arrefecimento.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
