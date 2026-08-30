export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-30';
export const editorialFreshnessValidatedAt='30/08/2026 · 11h33 · revisão completa da manhã';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 09h07: participação brasileira em estudo internacional sobre novos tratamentos e possível cura da hepatite B.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'SP Mais Cultura: Sarau do Binho, edição de 20 anos, hoje das 14h às 15h no Tatuapé.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'TSE: migração de serviços em nuvem ocorre hoje das 8h às 18h; Resolução 23.771 marca 30/08 como prazo de homologação de programas de verificação para auditoria.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 30/08: facções rivais da Líbia assinam roteiro conduzido pela ONU para eleições nacionais em até 24 meses.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem Reel jornalístico próprio nesta edição; conteúdo científico aparece nas Curiosidades.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo do dia promovido a Reel.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CGE 06h30: máxima de 32°C, umidade perto de 30% nas horas quentes e sem chuva prevista na Grande SP.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova de 30/08: rotação de Vênus maior que seu ano; otocônias e gravidade; wear leveling em SSD. Conceitos de 29/08 e dias anteriores bloqueados.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Agenda nova: Galo Fest Show hoje às 19h na Vila Silva Teles, segundo SP Mais Cultura.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'gamescom: último dia oficial do evento em 30/08, com programação dominical ativa.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Atualizado para 8 semanas exatas pela DUM 05/07/2026; desenvolvimento baseado em NHS/ACOG.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão nova de 30/08: antecipar duas tarefas da segunda-feira para reduzir carga mental.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ge 30/08 04h01: Corinthians x Santos hoje 16h; 10º com 32 pontos; Bidon suspenso, Yuri fora e Memphis esperado como titular.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação técnica nova: teste de câmbio frio e quente em carro usado até R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação técnica nova: inspeção dos rolamentos/caixa de direção em moto usada.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação técnica nova: bateria e sistema de carga antes de condenar módulos eletrônicos.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Roteiro novo de bate-volta em Paranapiacaba com referências oficiais de Turismo de Santo André.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 30/08: G20 financeiro sob pressão de tarifas, guerra no Irã, energia e mercado de títulos.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'OpenAI: 30/08 é a data anunciada para retirada do GPT oficial do DALL·E; anúncio original foi 31/07 e isso é explicitamente distinguido.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Revisado até 11h33. Nenhum briefing primário distinto e material de 30/08 foi promovido para evitar reciclagem.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cyber revisado até 11h33. Sem incidente novo de 30/08 com confirmação suficiente para Reel próprio; não reciclado.'},
{slug:'appsec-ssdlc',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Metasploit issue #21847 aberta hoje propõe módulo para CVE-2026-18729/Langflow; sinal novo de tooling, issue ainda aberta e não tratada como módulo aprovado.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
