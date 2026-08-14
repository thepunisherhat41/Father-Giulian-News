import { dailyContent, todayDrops } from './daily-content';
import { editorialDossiers } from './editorial-dossiers';

function patchDrop(slug: string, title: string, detail: string) {
  const item = todayDrops.find((drop) => drop.slug === slug);
  if (item) Object.assign(item, { title, detail });
}

Object.assign(dailyContent.hoje, {
  title: '14 de agosto · atualização das 17h',
  summary: 'A revisão do fim da tarde incorporou o fechamento dos mercados, a nova escalada no petróleo, um derramamento de óleo de grande escala no Golfo e uma leitura mais operacional das vulnerabilidades exploradas em Catalyst SD-WAN. As demais áreas preservam o conteúdo novo da edição-base quando não surgiu fato melhor para substituí-lo.',
  readTime: '17H UPDATE',
  badge: '17H INTELLIGENCE UPDATE',
});

patchDrop('politica', 'Registro eleitoral entra na reta final de sábado', 'O prazo legal termina amanhã, 15/08, às 19h. Pedido transmitido não equivale a candidatura deferida: a Justiça Eleitoral ainda analisa documentação e elegibilidade.');
Object.assign(dailyContent.politica, {
  title: 'Eleições 2026: o registro fecha amanhã às 19h — e protocolo ainda não é deferimento',
  summary: 'A janela de registro entra na reta final. Partidos, federações e coligações têm até 19h de sábado, 15 de agosto, para transmitir DRAP e RRC pela internet. Depois do protocolo, a Justiça Eleitoral ainda precisa analisar documentação, requisitos e condições de elegibilidade.',
  shareSummary: 'Política 17h: o prazo de registro termina amanhã, 15/08, às 19h. O ponto importante é separar três estados: escolhido em convenção, pedido de registro transmitido e registro efetivamente deferido pela Justiça Eleitoral.',
  readTime: '6 MIN READ',
  badge: '17H / ELEIÇÕES 2026',
  stats: [
    { label: 'PRAZO FINAL', value: '15 AGO · 19H' },
    { label: 'TRANSMISSÃO', value: 'INTERNET' },
    { label: 'DEFERIMENTO', value: 'POSTERIOR' },
  ],
  sections: [
    { title: 'O que acontece nas próximas horas', paragraphs: ['Os pedidos devem ser transmitidos até as 19h de sábado. O CANDex 2026 opera integralmente on-line e registra o horário da transmissão.'] },
    { title: 'A diferença que evita confusão', bullets: ['Convenção partidária escolhe nomes.', 'Transmissão do pedido formaliza o registro.', 'A Justiça Eleitoral analisa documentação e elegibilidade.', 'Só depois vem o julgamento do pedido.'] },
    { title: 'Como acompanhar', paragraphs: ['Para acompanhar a situação real, prefira o TSE e os TREs e observe o status jurídico do pedido em vez de tratar anúncio partidário ou protocolo como resultado definitivo.'] },
  ],
  sources: [
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
    { label: 'TSE · Resolução 23.609/2019 atualizada', url: 'https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-609-de-18-de-dezembro-de-2019' },
  ],
});

patchDrop('mundo', 'Petróleo fecha a semana pressionado por Hormuz e ataques a navios', 'Brent terminou a sexta perto de US$ 87,7, com ganho semanal superior a 5%; risco de oferta voltou a pesar mais que os sinais de demanda fraca.');
Object.assign(dailyContent.mundo, {
  title: 'Hormuz encerra a semana como o maior risco físico do petróleo',
  summary: 'O Brent terminou a sexta perto de US$ 87,7 por barril, com ganho semanal acima de 5%, enquanto ataques a navios e ameaças de bloqueio prolongado mantiveram o Estreito de Hormuz no centro do risco energético. Ao mesmo tempo, estoques elevados e previsões de demanda mais fraca continuam limitando a alta.',
  shareSummary: 'Mundo 17h: Brent fechou perto de US$ 87,7 e acumulou ganho semanal superior a 5%. Hormuz e ataques a navios sustentam prêmio de risco, mas estoques e demanda mais fraca continuam funcionando como contrapeso.',
  readTime: '8 MIN READ',
  badge: '17H / GEOPOLÍTICA',
  stats: [
    { label: 'BRENT', value: '~US$ 87,7' },
    { label: 'SEMANA', value: '+5,1%', note: 'aprox.' },
    { label: 'RISCO CENTRAL', value: 'HORMUZ' },
  ],
  sections: [
    { title: 'O que mudou desde a manhã', paragraphs: ['A combinação de novos ataques a petroleiros, suspensão de fluxos em outras rotas e retórica sobre bloqueio prolongado elevou o prêmio de risco. O mercado terminou a sessão com uma leitura mais preocupada com oferta do que no começo do dia.'] },
    { title: 'Por que o preço ainda não dispara sem limite', paragraphs: ['A EIA mostrou estoques americanos elevados, enquanto OPEP e IEA reduziram expectativas de demanda. Isso cria um freio econômico para uma alta puramente geopolítica.'] },
    { title: 'O que observar no fim de semana', bullets: ['Fluxo efetivo de navios por Hormuz.', 'Novos ataques ou interrupções em terminais e refinarias.', 'Prêmios de seguro marítimo.', 'Sinais de retomada ou ruptura diplomática entre EUA e Irã.'] },
  ],
  sources: [{ label: 'Reuters · Oil climbs on tanker attacks · 14/08/2026', url: 'https://www.reuters.com/business/energy/oil-set-weekly-gains-after-us-threatens-indefinite-blockade-iran-2026-08-14/' }],
});

patchDrop('planeta', 'Derramamentos de óleo no Golfo viram nova crise ambiental', 'Imagens de satélite apontam grandes manchas no Golfo, incluindo um vazamento separado próximo a Omã que ameaça uma área marinha protegida.');
Object.assign(dailyContent.planeta, {
  title: 'Geopolítica virou crise ambiental: grandes manchas de óleo aparecem no Golfo',
  summary: 'A Reuters relatou duas manchas de óleo em águas iranianas e um grande derramamento separado próximo a Omã. O caso mostra como conflitos marítimos podem rapidamente se transformar em dano ecológico, com impacto sobre praias, habitats costeiros e áreas protegidas.',
  shareSummary: 'Planeta 17h: imagens de satélite identificaram grandes manchas de óleo no Golfo. Um dos vazamentos, próximo a Omã, ameaça uma área marinha protegida. Guerra marítima também gera custo ecológico, não apenas energético e econômico.',
  readTime: '8 MIN READ',
  badge: '17H / ENVIRONMENT WATCH',
  stats: [
    { label: 'REGIÃO', value: 'GOLFO / OMÃ' },
    { label: 'EVIDÊNCIA', value: 'SATÉLITE + VÍDEO' },
    { label: 'RISCO', value: 'ECOSSISTEMAS COSTEIROS' },
  ],
  sections: [
    { title: 'O que foi observado', paragraphs: ['Imagens de satélite e registros em vídeo mostram manchas associadas a embarcações atingidas no contexto do conflito e um vazamento distinto de um petroleiro encalhado próximo a Omã.'] },
    { title: 'Por que óleo no mar é tão difícil de conter', paragraphs: ['Correntes, vento, ondas e tipo de petróleo alteram rapidamente a forma da mancha. Parte evapora, parte emulsifica e parte pode alcançar sedimentos, manguezais, recifes e praias, tornando a recuperação muito mais longa que a limpeza superficial.'] },
    { title: 'A conexão menos óbvia', paragraphs: ['O mesmo gargalo geopolítico que altera combustível, frete e inflação também concentra risco ambiental: quando muitas rotas energéticas passam por uma região estreita, ataques e acidentes têm consequências ecológicas desproporcionais.'] },
  ],
  sources: [{ label: 'Reuters · Oil spills in Gulf and off Oman · 14/08/2026', url: 'https://www.reuters.com/business/environment/two-slicks-appear-gulf-huge-oil-spill-off-oman-threatens-disaster-2026-08-14/' }],
});

patchDrop('financas', 'Wall Street fecha em baixa e mercado reduz novamente aposta de alta do Fed', 'Vendas no varejo e confiança do consumidor vieram fracas; petróleo subiu, dólar e Treasuries recuaram e ações de tecnologia perderam força.');
Object.assign(dailyContent.financas, {
  title: 'Fechamento: dados fracos aliviam juros, mas petróleo impede uma leitura simples de “risk-on”',
  summary: 'Wall Street terminou a sexta em baixa após dados de varejo e confiança do consumidor abaixo do esperado, enquanto petróleo subiu. A combinação reduziu ainda mais as apostas em alta do Fed no curto prazo, mas manteve a energia como risco inflacionário.',
  shareSummary: 'Finanças 17h: Wall Street fechou em baixa; varejo e confiança do consumidor vieram fracos, reduzindo apostas de alta do Fed. Ao mesmo tempo, petróleo subiu. Crescimento mais fraco e energia mais cara podem coexistir — e puxar o mercado em direções diferentes.',
  readTime: '8 MIN READ',
  badge: '17H / MARKET CLOSE',
  stats: [
    { label: 'AÇÕES EUA', value: 'FECHARAM EM BAIXA' },
    { label: 'PETRÓLEO', value: 'SUBIU' },
    { label: 'FED', value: 'MENOS APERTO PRECIFICADO' },
  ],
  sections: [
    { title: 'A leitura do fechamento', paragraphs: ['Dados mais fracos de consumo sugerem menor pressão de demanda e reduzem a necessidade percebida de aperto monetário. Mas a alta do petróleo adiciona um choque de custo potencialmente inflacionário.'] },
    { title: 'Por que isso é útil no dia a dia', paragraphs: ['Mercado não reage a uma única variável. Juros, dólar, petróleo, ações e ouro podem contar histórias parcialmente contraditórias porque cada ativo precifica riscos diferentes.'] },
    { title: 'Próximos catalisadores', bullets: ['Dados de atividade e inflação dos EUA.', 'Jackson Hole no fim de agosto.', 'Evolução do conflito no Oriente Médio.', 'Resultados de empresas ligadas à infraestrutura de IA.'] },
  ],
  sources: [{ label: 'Reuters · Global Markets close · 14/08/2026', url: 'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-14/' }],
  disclaimer: 'Conteúdo educacional, não recomendação individual de investimento.',
});

patchDrop('tecnologia', 'Tech fecha dividida: semicondutores caem, storage sobe', 'Broadcom e Applied Materials recuaram enquanto SanDisk e Western Digital avançaram, reforçando que “infraestrutura de IA” já não se comporta como uma única cesta.');
Object.assign(dailyContent.tecnologia, {
  title: 'A infraestrutura de IA está se fragmentando em vencedores e perdedores',
  summary: 'No fechamento de sexta, o setor de tecnologia caiu, com Broadcom e Applied Materials pressionando semicondutores, enquanto empresas de armazenamento como SanDisk e Western Digital avançaram. O movimento reforça uma tese útil: exposição à IA não garante o mesmo ciclo de receita, margem ou valuation em todos os elos.',
  shareSummary: 'Tecnologia 17h: semicondutores recuaram enquanto storage avançou. A infraestrutura de IA é uma cadeia — compute, memória, rede, óptica, storage, energia e cooling têm gargalos e margens diferentes. “Ter IA” no discurso já não basta.',
  readTime: '8 MIN READ',
  badge: '17H / AI INFRA',
  sections: [
    { title: 'O que o mercado mostrou hoje', paragraphs: ['Broadcom e Applied Materials recuaram, o índice de semicondutores caiu e empresas de storage avançaram. O contraste é um lembrete de que a demanda por IA se distribui de maneira desigual entre componentes.'] },
    { title: 'Como pensar tecnicamente', bullets: ['GPU/accelerator: compute bruto.', 'HBM e memória: alimentar o processamento.', 'Rede/óptica: mover dados entre nós.', 'Storage: manter datasets, checkpoints e resultados.', 'Energia e cooling: permitir densidade física do cluster.'] },
    { title: 'A pergunta certa', paragraphs: ['Em vez de perguntar se uma empresa “está em IA”, pergunte se ela fornece um gargalo real, se possui pricing power, qual é a concentração de clientes e quanto capex precisa gastar para manter o crescimento.'] },
  ],
  sources: [{ label: 'Reuters · Tech stocks pull Wall Street lower · 14/08/2026', url: 'https://www.reuters.com/business/wall-st-futures-muted-higher-oil-prices-temper-risk-appetite-after-sp-record-2026-08-14/' }],
});

patchDrop('seguranca', 'Cyber 17h: SD-WAN explorado exige preservar evidência antes do upgrade', 'Cisco orienta coletar admin-tech dos componentes de controle antes de atualizar quando há suspeita de comprometimento; patch sozinho não resolve um incidente já ocorrido.');
Object.assign(dailyContent.seguranca, {
  title: 'Quando patch não basta: Catalyst SD-WAN mostra por que resposta a incidente vem antes da limpeza',
  summary: 'A Cisco documenta exploração limitada de vulnerabilidades em componentes Catalyst SD-WAN e recomenda preservar artefatos de admin-tech antes da atualização. A lição operacional é importante: corrigir a vulnerabilidade fecha a porta, mas não remove automaticamente persistência, alterações de configuração ou credenciais já comprometidas.',
  shareSummary: 'Cyber 17h: em Catalyst SD-WAN, Cisco recomenda coletar admin-tech antes do upgrade quando há risco de comprometimento. Patch fecha a vulnerabilidade; investigação confirma se o atacante já entrou e o que alterou.',
  readTime: '10 MIN READ',
  badge: '17H / INCIDENT RESPONSE',
  stats: [
    { label: 'CVE-2026-20245', value: 'EXPLOIT OBSERVADO' },
    { label: 'CVE-2026-20262', value: 'EXPLOITAÇÃO LIMITADA' },
    { label: 'AÇÃO', value: 'PRESERVAR EVIDÊNCIA' },
  ],
  sections: [
    { title: 'A diferença entre remediar e responder', paragraphs: ['Upgrade corrige a versão vulnerável. Resposta a incidente procura sinais de que a exploração ocorreu antes da correção, verifica alterações e define se credenciais, configurações ou dispositivos downstream precisam de tratamento adicional.'] },
    { title: 'O que a Cisco pede', bullets: ['Coletar Admin-Tech nos componentes de controle.', 'Abrir caso com TAC para avaliação de IoCs.', 'Atualizar para releases corrigidas.', 'Verificar configuração de dispositivos de edge quando aplicável.'] },
    { title: 'Lição de arquitetura', paragraphs: ['Control planes de rede são Tier 0 operacional: comprometê-los pode permitir mudança de políticas e configuração em muitos dispositivos. A telemetria, o backup de configuração e a segregação administrativa precisam refletir esse blast radius.'] },
  ],
  sources: [{ label: 'Cisco · Remediate Catalyst SD-WAN Security Advisory · June 2026', url: 'https://www.cisco.com/c/en/us/support/docs/routers/sd-wan/226014-remediate-catalyst-sd-wan-security.html' }],
});

patchDrop('appsec-ssdlc', 'AppSec 17h: modelar caminhos de exploração evita gate cego por CVSS', 'No Catalyst SD-WAN, falhas autenticadas podem ser encadeadas com bypasses anteriores. O gate precisa representar pré-condições, exploit chains e impacto do ativo.');
Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'Exploit chain muda prioridade: uma falha autenticada pode virar caminho remoto completo',
  summary: 'A documentação da Cisco mostra um caso didático para AppSec: CVE-2026-20245 e CVE-2026-20262 exigem privilégios, mas caminhos conhecidos para obter esses privilégios incluem a exploração de falhas anteriores. Avaliar cada CVE isoladamente pode subestimar o risco do encadeamento.',
  shareSummary: 'AppSec 17h: não avalie vulnerabilidades como ilhas. Uma falha “autenticada” pode se tornar parte de um caminho remoto quando há auth bypass ou credential compromise no mesmo produto. Gate maduro representa pré-condições e exploit chains.',
  readTime: '11 MIN READ',
  badge: '17H / EXPLOIT CHAIN',
  stats: [
    { label: 'MODELO', value: 'CHAIN > CVE ISOLADA' },
    { label: 'CONTEXTO', value: 'PRECONDIÇÕES' },
    { label: 'DECISÃO', value: 'RISCO COMPOSTO' },
  ],
  sections: [
    { title: 'O erro comum', paragraphs: ['Tratar “requires authentication” como redutor automático de prioridade. Isso só é válido se as credenciais necessárias forem realmente difíceis de obter e se não houver falhas encadeáveis no mesmo trust boundary.'] },
    { title: 'Como enriquecer o gate', bullets: ['Mapeie pré-condições de exploração.', 'Procure auth bypass e privilege escalation no mesmo componente.', 'Considere credenciais expostas e secrets reutilizados.', 'Inclua reachability entre etapas do exploit chain.', 'Calcule impacto do ativo final, não apenas da primeira CVE.'] },
    { title: 'Exemplo prático de SSDLC', paragraphs: ['Um finding autenticado em um control plane pode receber prioridade maior quando existe uma vulnerabilidade pré-auth no mesmo produto, quando o ativo está internet-facing ou quando a identidade necessária pode ser obtida por outro caminho da cadeia.'] },
  ],
  sources: [
    { label: 'Cisco · Catalyst SD-WAN remediation workflow', url: 'https://www.cisco.com/c/en/us/support/docs/routers/sd-wan/226014-remediate-catalyst-sd-wan-security.html' },
    { label: 'Cisco PSIRT · CVE-2026-20245', url: 'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-sdwan-privesc-4uxFrdzx' },
  ],
});

Object.assign(editorialDossiers.mundo, {
  readingTime: '12 MIN READ',
  title: 'Hormuz no fim de semana: como transformar manchete em sinais observáveis',
  deck: 'Em vez de tentar prever a geopolítica, acompanhe variáveis que realmente mudam oferta, frete e preço: fluxo de navios, seguro, terminais, exportações alternativas e estoques.',
  opening: ['O fechamento de sexta mostra por que petróleo não pode ser lido apenas pelo barril. O preço incorpora uma mistura de risco físico, expectativas de demanda, estoques e probabilidade de interrupção futura.'],
  sections: [
    { kicker: 'SINAL 01', title: 'Fluxo físico vale mais que retórica', paragraphs: ['Declarações políticas importam, mas o dado operacional é quantos navios atravessam o estreito, quanto tempo esperam e se rotas alternativas conseguem absorver volume.'] },
    { kicker: 'SINAL 02', title: 'Seguro é um termômetro rápido', paragraphs: ['Prêmios de guerra e cobertura marítima podem subir antes mesmo de a oferta física desaparecer, elevando custo de transporte e tornando algumas viagens economicamente inviáveis.'] },
    { kicker: 'SINAL 03', title: 'Demanda e estoques continuam no jogo', paragraphs: ['Estoques elevados e projeções mais fracas de consumo limitam a capacidade de o risco geopolítico sustentar alta indefinida.'] },
  ],
  takeaways: ['Hormuz é risco físico de oferta, não apenas manchete.', 'Seguro e fluxo de navios ajudam a medir o choque.', 'Demanda e estoques podem conter o prêmio geopolítico.'],
  sources: [{ label: 'Reuters · 14/08/2026', url: 'https://www.reuters.com/business/energy/oil-set-weekly-gains-after-us-threatens-indefinite-blockade-iran-2026-08-14/' }],
});

Object.assign(editorialDossiers.planeta, {
  readingTime: '11 MIN READ',
  title: 'Derramamento no mar: por que a mancha visível é só parte do problema',
  deck: 'Óleo muda de forma com vento, ondas, evaporação, emulsificação e sedimentação. O impacto ecológico pode continuar muito depois de a superfície parecer limpa.',
  opening: ['O caso do Golfo é uma oportunidade para entender um ponto pouco intuitivo: remover óleo visível não significa restaurar o ecossistema.'],
  sections: [
    { kicker: 'FÍSICA', title: 'A mancha não fica parada', paragraphs: ['Vento e corrente espalham o óleo; frações leves evaporam; outras formam emulsões persistentes.'] },
    { kicker: 'ECOLOGIA', title: 'Costa é onde o dano pode durar mais', paragraphs: ['Manguezais, praias, recifes e sedimentos podem reter hidrocarbonetos e expor organismos por longos períodos.'] },
    { kicker: 'RESPOSTA', title: 'Contenção depende do contexto', paragraphs: ['Barreiras, recolhimento mecânico, dispersantes e limpeza costeira têm benefícios e limitações diferentes; a escolha depende do tipo de óleo, mar, distância da costa e sensibilidade ambiental.'] },
  ],
  takeaways: ['A extensão superficial não mede sozinha o dano.', 'Correntes e tipo de óleo mudam a resposta.', 'Conflito pode impedir acesso de equipes e ampliar o impacto.'],
  sources: [{ label: 'Reuters · 14/08/2026', url: 'https://www.reuters.com/business/environment/two-slicks-appear-gulf-huge-oil-spill-off-oman-threatens-disaster-2026-08-14/' }],
});

Object.assign(editorialDossiers.seguranca, {
  readingTime: '13 MIN READ',
  title: 'Patch versus incidente: a ordem das operações quando há exploração real',
  deck: 'Quando existe evidência de exploração, atualizar é necessário, mas preservar evidência, procurar IoCs e verificar mudanças downstream passa a fazer parte da remediação.',
  opening: ['O caso Catalyst SD-WAN é um bom modelo mental para ambientes críticos: vulnerabilidade explorada deixa de ser apenas vulnerability management e passa a ser incident response.'],
  sections: [
    { kicker: 'ANTES', title: 'Preserve evidência', paragraphs: ['Colete logs, bundles de suporte e estado de configuração antes que a atualização altere artefatos relevantes.'] },
    { kicker: 'DURANTE', title: 'Feche a vulnerabilidade', paragraphs: ['Atualize para versão corrigida e remova caminhos conhecidos de exploração, mas não encerre o caso automaticamente.'] },
    { kicker: 'DEPOIS', title: 'Procure impacto residual', paragraphs: ['Revise contas, tokens, configurações, políticas e dispositivos administrados pelo control plane.'] },
  ],
  takeaways: ['Patch não apaga comprometimento passado.', 'Control plane exige investigação de blast radius.', 'Preservar evidência antes da mudança pode ser decisivo.'],
  sources: [{ label: 'Cisco · Remediation workflow', url: 'https://www.cisco.com/c/en/us/support/docs/routers/sd-wan/226014-remediate-catalyst-sd-wan-security.html' }],
});

Object.assign(editorialDossiers['appsec-ssdlc'], {
  readingTime: '14 MIN READ',
  title: 'De CVEs isoladas para attack paths: como enriquecer a decisão de gate',
  deck: 'Exploit chains mostram por que severity, autenticação e CVSS não podem ser avaliados fora do contexto de identidade, exposição e trust boundaries.',
  opening: ['Um programa AppSec maduro precisa responder “como o atacante chega aqui?” e “o que consegue depois?”, não apenas “qual é a nota desta CVE?”.'],
  sections: [
    { kicker: 'MODELAGEM', title: 'Pré-condições são dados', paragraphs: ['Autenticação, privilégio, posição de rede e interação do usuário devem ser representados como pré-condições verificáveis do finding.'] },
    { kicker: 'CORRELAÇÃO', title: 'Encontre peças que se conectam', paragraphs: ['Auth bypass, credential exposure, privilege escalation e command injection podem formar um caminho mais grave que qualquer item visto sozinho.'] },
    { kicker: 'GATE', title: 'Bloqueie pelo caminho de risco', paragraphs: ['A decisão pode combinar exploração conhecida, exposição, reachability, criticidade, blast radius, mitigação e existência de uma cadeia plausível.'] },
  ],
  takeaways: ['“Authenticated” não significa automaticamente baixo risco.', 'Correlacionar findings muda a prioridade.', 'Gate deve registrar por que o caminho é bloqueante ou aceitável.'],
  sources: [{ label: 'Cisco · Catalyst SD-WAN remediation workflow', url: 'https://www.cisco.com/c/en/us/support/docs/routers/sd-wan/226014-remediate-catalyst-sd-wan-security.html' }],
});
