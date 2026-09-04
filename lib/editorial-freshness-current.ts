export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-04';
export const editorialFreshnessValidatedAt='04/09/2026 · 00h10 · edição da madrugada';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM Reuters 04/09, citando The Globe and Mail: Vale suspendeu por prazo indefinido planos de IPO da Vale Base Metals; companhia não confirmou especificamente a informação.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 04/09 com fonte adequada e recorte específico da Zona Leste nesta revisão; Reel omitido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA TSE para 04/09: conclusão prevista da assinatura digital e lacração dos sistemas eleitorais; nesta edição da madrugada não é tratada como já concluída.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO Reuters 04/09: autoridade sul-coreana diz que Seul avalia medidas práticas para apoiar liberdade de navegação em Hormuz; nenhuma operação é tratada como decidida ou iniciada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO INMET para 04/09: possibilidade de chuva isolada em áreas de São Paulo, incluindo a capital, e alerta amarelo de perigo potencial para tempestades em parte do estado.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova de 04/09: ebulição em altitude, ponto cego natural e limite de confiança do HTTPS; conceitos diferentes dos sete dias anteriores.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência renovada de 04/09: acompanhar uma faixa pela linha do baixo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 04/09 confirmado nesta revisão; fatos do State of Play de 03/09 não foram reciclados.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia avança para 8 semanas + 5 dias em 04/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada: assumir uma microdecisão logística do começo ao fim.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo de 04/09 suficientemente confirmado nesta revisão da madrugada; Reel omitido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado para test-drive; teto de R$70 mil mantido explicitamente.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado sobre corrente, coroa e pinhão.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado sobre viscosidade e homologação do óleo do motor.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia renovada de roteiro compacto por bairro/região.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · MERCADOS Reuters 04/09: iene acumulava cerca de 2,5% de valorização semanal frente ao dólar antes do payroll dos EUA; movimento intradiário, não fechamento semanal.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo datado de 04/09 confirmado nesta revisão; Nvidia/Hugging Face de 03/09 não foi reciclado.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem guidance/advisory oficial novo datado de 04/09 confirmado nesta revisão; nenhum item antigo foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber novo de 04/09 suficientemente confirmado nesta revisão; Daybreak/OpenAI de 03/09 não foi reciclado.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 04/09 com confirmação oficial suficiente; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
