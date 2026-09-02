export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-02';
export const editorialFreshnessValidatedAt='02/09/2026 · 17h59 · revisão intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO: PF publicou às 07h35 a segunda fase da Operação Forlands, com três buscas em Itapema/SC e Curitiba/PR e bloqueio judicial de até R$ 5 milhões; responsabilidade dos investigados não é presumida.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 02/09 com fonte adequada para Zona Leste nesta revisão; card omitido corretamente.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · ATUALIZAÇÃO: comissão mista aprovou em 02/09 o relatório da MP 1.357/2026; texto segue à Câmara e ainda depende dos plenários. PESQUISA: Quaest divulgada em 02/09 mostra Lula 42% e Flávio Bolsonaro 41% em eventual 2º turno, empate técnico com margem de erro de 2 p.p.; levantamento ouviu 2.004 pessoas de 30/08 a 01/09.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 02/09: nova onda de ataques dos EUA contra alvos do IRGC e retaliação iraniana contra instalações americanas na região.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não é tratado como notícia de hoje.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen revisado; não é tratado como notícia de hoje.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO: INMET indica deslocamento da chuva para leste/nordeste do Sudeste e avanço de alta pressão nesta quarta (02); previsão não é ocorrência garantida em cada bairro.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita de 02/09: velocidade do som na água, piloereção e correção de erros em QR Code; sem repetir 01/09.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência renovada de 02/09: comparar versão de estúdio com apresentação ao vivo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material de 02/09 confirmado nesta revisão; card jornalístico omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'DUM 05/07/2026 resulta em 8 semanas + 3 dias em 02/09/2026.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada para 02/09: registrar mudanças, melhoras e dúvidas para o pré-natal.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/REPORTAGEM: fechamento das principais janelas europeias ocorreu em 01/09 e negociação de André não foi concluída; AGENDA oficial indicava venda geral para Corinthians x Chapecoense em 02/09 às 15h, mas nesta revisão não há confirmação independente suficiente para transformar a agenda em fato consumado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado e teto de R$70 mil preservado explicitamente.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado para sinais de queda em moto usada.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado sobre diagnóstico contextual de ruídos antes da troca de peças.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia de bate-volta em raio de aproximadamente 90 minutos renovada para 02/09.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · FECHAMENTO Reuters 02/09: Brent encerrou a US$95,63 (+1%) e WTI a US$91,01 (+0,9%); o fechamento substitui as cotações intradiárias anteriores e mantém o risco de Hormuz como contexto, não como previsão de preço.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 02/09 20h31 UTC: Microsoft passará a divulgar vendas trimestrais do Azure e reduzirá de três para dois segmentos financeiros reportáveis, com Agents and Infra e Devices and Consumer.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · GUIDANCE: CISA, FBI e parceiros do Reino Unido, Austrália, Canadá e Nova Zelândia publicaram em 02/09 o guia Communicating Under Pressure para comunicação durante indisponibilidades de TI/OT. O card não classifica o item como CVE, KEV ou exploração ativa.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'SonicWall confirmou em advisory de 01/09 exploração ativa de CVE-2026-83548/83549; reportagens de 02/09 sobre esse mesmo fato não foram convertidas em notícia nova de hoje. Card Cyber permanece omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado em 02/09; sem CVE/advisory novo desta data com confirmação oficial suficiente para um card separado. Nenhum item antigo foi reciclado.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
