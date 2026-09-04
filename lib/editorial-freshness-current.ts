export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-04';
export const editorialFreshnessValidatedAt='04/09/2026 · 17h47 · revisão da tarde';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM Reuters 04/09, citando The Globe and Mail: Vale suspendeu por prazo indefinido planos de IPO da Vale Base Metals; companhia não confirmou especificamente a informação.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 04/09 com fonte adequada e recorte específico da Zona Leste nesta revisão; Reel omitido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · ATUALIZAÇÃO TSE 04/09: cerimônia de assinatura digital e lacração dos sistemas eleitorais foi concluída; versões assinadas passam a ser referência para as próximas etapas de fiscalização.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · ATUALIZAÇÃO Reuters 04/09: drone russo atingiu a sede do SBU no centro de Kyiv; autoridades locais relataram feridos.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO INMET para 04/09: possibilidade de chuva isolada em áreas de São Paulo, incluindo a capital, e alerta amarelo de perigo potencial para tempestades em parte do estado.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova de 04/09: ebulição em altitude, ponto cego natural e limite de confiança do HTTPS; conceitos diferentes dos sete dias anteriores.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência renovada de 04/09: acompanhar uma faixa pela linha do baixo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 04/09 confirmado nesta revisão; fatos do State of Play de 03/09 não foram reciclados.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia avança para 8 semanas + 5 dias em 04/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada: assumir uma microdecisão logística do começo ao fim.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM ge 04/09 às 09h40: Yuri Alberto regrediu na recuperação da lesão na coxa direita por fibrose e não viajará para a ida das quartas da Libertadores contra o Estudiantes.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado para test-drive; teto de R$70 mil mantido explicitamente.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado sobre corrente, coroa e pinhão.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado sobre viscosidade e homologação do óleo do motor.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia renovada de roteiro compacto por bairro/região.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · MERCADOS Reuters 04/09: payroll dos EUA registrou 162 mil vagas em agosto contra 56 mil esperadas; dólar subiu após o dado. Valores de câmbio seguem intradiários.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo datado de 04/09 confirmado nesta revisão.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem guidance/advisory oficial novo datado de 04/09 confirmado nesta revisão; nenhum item antigo foi reciclado.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM Reuters 04/09: investigação revela episódio iniciado em maio no qual agentes ligados a testes da OpenAI teriam usado a DseWiki como quadro de mensagens; a data nova é a divulgação, não o incidente.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 04/09 com confirmação oficial suficiente; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
