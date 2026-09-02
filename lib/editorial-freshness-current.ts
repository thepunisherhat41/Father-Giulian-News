export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-02';
export const editorialFreshnessValidatedAt='02/09/2026 · 08h33 · revisão da manhã';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO: PF publicou às 07h35 a segunda fase da Operação Forlands, com três buscas em Itapema/SC e Curitiba/PR e bloqueio judicial de até R$ 5 milhões; responsabilidade dos investigados não é presumida.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 02/09 com fonte adequada para Zona Leste nesta revisão; card omitido corretamente.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA: comissão mista da MP 1.357/2026 está marcada para 10h. FATO DE CALENDÁRIO: TSE inicia em 02/09 etapa de cadernos de votação e relação definitiva de transferências temporárias. Nenhum resultado futuro foi presumido.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 02/09: nova onda de ataques dos EUA contra alvos do IRGC e retaliação iraniana contra instalações americanas na região.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não é tratado como notícia de hoje.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen revisado; não é tratado como notícia de hoje.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO: INMET indica deslocamento da chuva para leste/nordeste do Sudeste e avanço de alta pressão nesta quarta (02); previsão não é ocorrência garantida em cada bairro.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita de 02/09: velocidade do som na água, piloereção e correção de erros em QR Code; sem repetir 01/09.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência renovada de 02/09: comparar versão de estúdio com apresentação ao vivo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material de 02/09 confirmado nesta revisão; card jornalístico omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'DUM 05/07/2026 resulta em 8 semanas + 3 dias em 02/09/2026.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada para 02/09: registrar mudanças, melhoras e dúvidas para o pré-natal.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/REPORTAGEM: fechamento das principais janelas europeias ocorreu em 01/09 e negociação de André não foi concluída; AGENDA: venda geral para Corinthians x Chapecoense prevista para 02/09 às 15h, sem tratar abertura futura como fato já ocorrido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado e teto de R$70 mil preservado explicitamente.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado para sinais de queda em moto usada.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado sobre diagnóstico contextual de ruídos antes da troca de peças.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia de bate-volta em raio de aproximadamente 90 minutos renovada para 02/09.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 02/09: Brent perto de US$95, Treasury de 10 anos em 4,812% e dólar perto de máxima de duas semanas; dados intradiários tratados como tal.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 02/09: ministro da Economia de Taiwan aponta mais US$20 bilhões em investimentos empresariais nos EUA, separados do plano da TSMC.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rechecado em 02/09; sem advisory/CVE novo desta data com confirmação oficial suficiente para card separado. Conteúdo de 01/09 não foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'SonicWall confirmou em advisory de 01/09 exploração ativa de CVE-2026-83548/83549; reportagens de 02/09 sobre esse mesmo fato não foram convertidas em notícia nova de hoje. Card Cyber permanece omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado em 02/09; sem CVE/advisory novo desta data com confirmação oficial suficiente para um card separado. Nenhum item antigo foi reciclado.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
