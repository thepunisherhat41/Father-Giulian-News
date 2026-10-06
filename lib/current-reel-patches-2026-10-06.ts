export function applyCurrentReelPatches20261006(dailyContent:Record<string,any>){
const patch=(slug:string,value:any)=>Object.assign(dailyContent[slug],value);

patch('papo',{
  title:'Papo de hoje: que parte da rotina vocês querem deixar mais leve antes do bebê chegar?',
  summary:'PAPO DE HOJE · 06/10 · Escolham uma parte pequena da rotina que hoje consome energia demais e conversem sobre como simplificá-la nos próximos 30 dias.',
  shareSummary:'Papo de hoje · 06/10: uma pequena mudança para deixar a rotina mais leve.',
  badge:'PAPO DE HOJE · 06/10',
  sections:[
    {title:'Pergunta de hoje',paragraphs:['Se vocês pudessem simplificar uma única coisa da rotina agora — casa, refeições, agenda, compras, descanso ou organização — qual faria mais diferença?']},
    {title:'Transformem em algo concreto',paragraphs:['Cada um sugere uma mudança pequena e possível. O objetivo não é montar uma lista enorme: é escolher uma melhoria que reduza atrito de verdade.']}
  ],
  sources:[]
});

patch('desafio',{
  title:'Desafio do casal: 15 minutos para resolver juntos uma pequena pendência da casa',
  summary:'DESAFIO DO CASAL · 06/10 · Escolham uma única pendência simples, coloquem um cronômetro de 15 minutos e façam juntos sem transformar a noite em mutirão.',
  shareSummary:'Desafio do casal · 06/10: 15 minutos para tirar uma pequena pendência do caminho.',
  badge:'DESAFIO DO CASAL · 06/10',
  sections:[
    {title:'Como fazer',bullets:['Escolham só uma coisa: uma gaveta, uma compra, uma pequena organização ou algo do bebê.','Cronômetro de 15 minutos.','Quando o tempo acabar, encerrem — mesmo que não esteja perfeito.','A vitória é reduzir uma pendência, não criar outra obrigação.']}
  ],
  sources:[]
});

patch('gravidez',{
  title:'13 semanas + 2 dias: ossos endurecem e os movimentos ficam mais coordenados',
  summary:'GRAVIDEZ · 13+2 · Entre 13 e 16 semanas, os ossos começam a endurecer — especialmente os longos — e o bebê já se movimenta, embora ainda seja comum a mãe não sentir esses movimentos.',
  shareSummary:'Gravidez · 06/10: 13 semanas + 2 dias, com crescimento e amadurecimento acelerados.',
  badge:'GRAVIDEZ · 13 SEMANAS + 2 DIAS · 06/10',
  sections:[
    {title:'O que está acontecendo',bullets:['A ACOG descreve endurecimento progressivo dos ossos entre as semanas 13 e 16.','Pescoço e membros inferiores ficam mais definidos nessa fase.','O NHS informa que, na semana 13, o bebê mede por volta de 7,4 cm da cabeça ao bumbum e já se movimenta.','É comum ainda não sentir os movimentos; o NHS cita percepção mais adiante, por volta da semana 17 para muitas gestantes.']},
    {title:'Para a Bruna hoje',paragraphs:['Sintomas e ritmo variam de pessoa para pessoa. Hidratação, alimentação tolerável, descanso e acompanhamento pré-natal continuam sendo os pontos centrais; sangramento ou sintomas intensos devem ser discutidos com a equipe de saúde.']}
  ],
  sources:[
    {label:'ACOG · How Your Fetus Grows During Pregnancy',url:'https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy'},
    {label:'NHS · Week 13',url:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-13/'}
  ]
});

patch('pai',{
  title:'Ser Pai: hoje, tire uma tarefa inteira da cabeça da Bruna',
  summary:'SER PAI · 06/10 · Escolha uma tarefa concreta da casa ou da rotina e assuma do início ao fim — sem pedir que ela organize o passo a passo.',
  shareSummary:'Ser Pai · 06/10: uma tarefa inteira assumida, sem transferir a gestão.',
  badge:'SER PAI · MISSÃO DO DIA · 06/10',
  sections:[
    {title:'Missão',bullets:['Escolha uma tarefa que realmente precise ser feita hoje.','Resolva planejamento, execução e finalização.','Depois pergunte como ela está, sem transformar a conversa em checklist.']},
    {title:'Por que vale',paragraphs:['Apoio prático reduz carga mental. O objetivo de hoje é presença útil e previsível, não fazer um gesto grande e isolado.']}
  ],
  sources:[]
});

patch('brasil',{
  title:'Resultados do 1º turno já estão disponíveis para consulta e auditoria no TSE',
  summary:'ATUALIZAÇÃO · 06/10 · O TSE disponibilizou a página oficial com a totalização do primeiro turno. É possível consultar resultados por cargo, candidato, estado, município e zona eleitoral, além de acessar Boletins de Urna e registros de auditoria.',
  shareSummary:'Brasil · 06/10: TSE disponibiliza resultados e dados auditáveis do primeiro turno.',
  badge:'BRASIL · ATUALIZAÇÃO · 06/10',
  sections:[
    {title:'O que já está disponível',bullets:['Resultados por abrangência nacional, estadual, municipal e por zona eleitoral.','Percentuais, votos por cargo e candidato, comparecimento e seções totalizadas.','Boletins de Urna, registro digital do voto e logs de funcionamento das urnas.']},
    {title:'Leitura correta',paragraphs:['Para números eleitorais, a referência primária deve ser a Justiça Eleitoral. Recortes de redes sociais ou prints sem origem não substituem os dados oficiais.']}
  ],
  sources:[{label:'TSE · Resultados do 1º turno das Eleições 2026',url:'https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/resultados-do-1o-turno-das-eleicoes-2026-estao-disponiveis-em-pagina-do-tse'}]
});

patch('mundo',{
  title:'Europa eleva alerta para ataques híbridos russos após novos episódios com drones e sabotagem',
  summary:'ATUALIZAÇÃO · 06/10 · Autoridades europeias aumentaram o tom sobre ameaças híbridas atribuídas à Rússia, citando drones, cyberataques, sabotagem e violações de espaço aéreo. Moscou nega as acusações.',
  shareSummary:'Mundo · 06/10: autoridades europeias elevam alerta para ameaças híbridas atribuídas à Rússia.',
  badge:'MUNDO · ATUALIZAÇÃO · 06/10',
  sections:[
    {title:'O que mudou',bullets:['Kaja Kallas afirmou que ataques híbridos estão colocando vidas em risco na Europa.','Autoridades citaram violações recentes do espaço aéreo da Moldávia por drones e mísseis russos.','A Alemanha também vem alertando para ameaças envolvendo drones e operações cibernéticas.']},
    {title:'Contexto',paragraphs:['A Reuters registra também a negativa de Moscou às acusações ocidentais. O ponto central desta atualização é o aumento do nível de alerta e da resposta política europeia, não a atribuição técnica definitiva de cada incidente.']}
  ],
  sources:[{label:'Reuters · Europe hybrid threats · 05/10/2026',url:'https://www.reuters.com/world/russia-puts-lives-risk-across-europe-with-hybrid-attacks-kallas-says-2026-10-05/'}]
});

patch('politica',{
  title:'Segundo turno será em 25 de outubro; disputa presidencial entra em nova fase',
  summary:'ATUALIZAÇÃO · 06/10 · Flávio Bolsonaro terminou o primeiro turno com 47% dos votos e Lula com 45%, segundo a Reuters, levando a eleição presidencial ao segundo turno em 25/10. O TSE mantém a base oficial de resultados disponível para consulta.',
  shareSummary:'Política · 06/10: segundo turno entre Flávio Bolsonaro e Lula será em 25/10.',
  badge:'POLÍTICA · ATUALIZAÇÃO · 06/10',
  sections:[
    {title:'Cenário pós-1º turno',bullets:['Flávio Bolsonaro: 47% no primeiro turno, segundo a Reuters.','Lula: 45% no primeiro turno, segundo a Reuters.','Segundo turno presidencial: 25 de outubro.','O resultado oficial detalhado deve ser conferido na plataforma do TSE.']},
    {title:'O que observar agora',bullets:['Apoios de candidatos derrotados e rearranjos partidários.','Composição do Congresso eleito e impacto na governabilidade.','Propostas econômicas e fiscais apresentadas na reta final.']}
  ],
  sources:[
    {label:'Reuters · Brazil presidential runoff',url:'https://www.reuters.com/world/americas/brazilians-head-polls-high-stakes-polarized-election-2026-10-04/'},
    {label:'TSE · resultados oficiais do 1º turno',url:'https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/resultados-do-1o-turno-das-eleicoes-2026-estao-disponiveis-em-pagina-do-tse'}
  ]
});

patch('tempo',{
  title:'São Paulo terá terça chuvosa, com risco maior de alagamentos e queda de árvores à tarde',
  summary:'PREVISÃO · 06/10 · O CGE prevê mínima de 17°C e máxima de 24°C, muita nebulosidade e chuva. À tarde, as pancadas podem variar de moderadas a fortes, com solo já encharcado elevando o risco de alagamentos e quedas de árvores.',
  shareSummary:'Tempo · 06/10: 17°C a 24°C e risco maior de chuva forte à tarde em São Paulo.',
  badge:'TEMPO · PREVISÃO · 06/10',
  sections:[
    {title:'Para hoje',bullets:['Mínima prevista: 17°C.','Máxima prevista: 24°C.','Umidade acima de 80% em parte das projeções do CGE.','Chuva ganha força à tarde, com risco elevado de alagamentos e queda de árvores.']},
    {title:'No deslocamento',paragraphs:['Evite atravessar vias alagadas e acompanhe os alertas oficiais. A previsão descreve risco meteorológico; ocorrência e intensidade variam ao longo da cidade.']}
  ],
  sources:[{label:'CGE São Paulo · previsão para 06/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-05'}]
});

patch('seguranca-zl',{
  title:'Itaquera ganha nova ligação viária entre Cristóvão de Salamanca e Agrimensor Sugaya',
  summary:'SERVIÇO LOCAL · 06/10 · A nova via entregue em Itaquera tem 200 metros, duas faixas por sentido, calçadas acessíveis e nova drenagem. A ligação melhora o acesso em direção à Avenida Jacu-Pêssego e a bairros da Zona Leste.',
  shareSummary:'Zona Leste · 06/10: nova ligação viária em Itaquera já está aberta.',
  badge:'ZONA LESTE · SERVIÇO LOCAL · 06/10',
  sections:[
    {title:'O que mudou',bullets:['Ligação entre as ruas Cristóvão de Salamanca e Agrimensor Sugaya.','200 metros de extensão e duas faixas por sentido.','290 metros de rede de drenagem, além de bocas de lobo e novos ramais.','Conexão favorece deslocamentos em direção a Guaianases, São Mateus, Barro Branco, Cidade Tiradentes e Jacu-Pêssego.']},
    {title:'Atenção hoje',paragraphs:['Com previsão de chuva forte em São Paulo nesta terça, vale acompanhar as condições de trânsito antes de sair, especialmente em áreas historicamente sensíveis a alagamentos.']}
  ],
  sources:[
    {label:'Prefeitura de São Paulo · nova via em Itaquera',url:'https://prefeitura.sp.gov.br/web/prefeitura-de-sao-paulo/w/prefeitura-entrega-nova-via-em-itaquera-e-amplia-a-mobilidade-entre-bairros-da-zona-leste'},
    {label:'CGE São Paulo · previsão 06/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-05'}
  ]
});

patch('corinthians',{
  title:'Bidu volta ao treino e Corinthians prepara confronto com o Internacional amanhã',
  summary:'ATUALIZAÇÃO · 06/10 · Matheus Bidu voltou aos trabalhos após incômodo no púbis e deve ser opção para o jogo de quarta-feira, 07/10, às 19h30, no Beira-Rio. O elenco fez trabalho tático de preparação para a 31ª rodada.',
  shareSummary:'Corinthians · 06/10: Bidu volta ao treino; Inter x Corinthians é amanhã, às 19h30.',
  badge:'CORINTHIANS · ATUALIZAÇÃO · 06/10',
  sections:[
    {title:'Preparação para o Inter',bullets:['Matheus Bidu voltou ao campo e participou do treino.','Fernando Diniz trabalhou situações táticas de dez contra dez.','Internacional x Corinthians: quarta-feira, 07/10, às 19h30, no Beira-Rio.']},
    {title:'Ponto de atenção',paragraphs:['A escalação ainda depende do fechamento da preparação. “Deve ser titular” é projeção jornalística; a confirmação vem com a equipe divulgada para o jogo.']}
  ],
  sources:[{label:'ge · treino do Corinthians · 05/10/2026',url:'https://ge.globo.com/futebol/times/corinthians/noticia/2026/10/05/treino-do-corinthians-bidu-volta-ao-campo-e-deve-ser-titular-contra-o-internacional.ghtml'}]
});

patch('viagens',{
  title:'12 de outubro cai na segunda: o próximo fim de semana já entra no radar de viagem',
  summary:'PLANEJAMENTO · 06/10 · O feriado nacional de Nossa Senhora Aparecida será na próxima segunda-feira. São Paulo já divulgou funcionamento especial de equipamentos, e Aparecida prepara operação para o período de maior fluxo de romeiros e visitantes.',
  shareSummary:'Viagens · 06/10: 12/10 cai na segunda e abre espaço para fim de semana prolongado.',
  badge:'VIAGENS · PLANEJAMENTO · 06/10',
  sections:[
    {title:'Para planejar agora',bullets:['12/10 é feriado nacional e, em 2026, cai numa segunda-feira.','Aparecida prepara operação integrada de segurança e trânsito para o período de maior fluxo.','Na capital, parques municipais terão funcionamento normal no dia 12; outros equipamentos terão horários próprios.']},
    {title:'Antes de sair',paragraphs:['Se a viagem for de carro, compare horários de saída, chuva prevista, pedágios e condições da rota. Para Aparecida, espere aumento de movimento por causa do Dia da Padroeira.']}
  ],
  sources:[
    {label:'Prefeitura de São Paulo · calendário 2026',url:'https://prefeitura.sp.gov.br/web/gestao/w/calendario_2026'},
    {label:'Prefeitura de Aparecida · planejamento para outubro',url:'https://www.aparecida.sp.gov.br/portal/noticias/0/3/5127/prefeitura-inicia-planejamento-integrado-para-outubro'},
    {label:'Prefeitura de São Paulo · parques no feriado de 12/10',url:'https://prefeitura.sp.gov.br/web/prefeitura-de-sao-paulo/w/parques-municipais-ter%C3%A3o-funcionamento-normal-no-feriado-de-12-de-outubro-1'}
  ]
});

patch('musica',{
  title:'Playlist de hoje: Alok + NAYEON, Pabllo Vittar e Victoria Monét no radar',
  summary:'RECOMENDAÇÃO · 06/10 · A curadoria de hoje parte dos lançamentos da última sexta: Alok e NAYEON lançaram “Bye Bye Inhibitions”, Pabllo Vittar apresentou “LOST IN LUST” e Victoria Monét colocou no ar o álbum “Frequency of Love”.',
  shareSummary:'Música · 06/10: três lançamentos recentes para ouvir hoje.',
  badge:'MÚSICA · RECOMENDAÇÃO · 06/10',
  sections:[
    {title:'Três caminhos diferentes',bullets:['Alok + NAYEON — “Bye Bye Inhibitions”: encontro entre eletrônica brasileira e K-pop.','Pabllo Vittar — “LOST IN LUST”: álbum de 12 faixas em inglês e espanhol.','Victoria Monét — “Frequency of Love”: álbum com 22 faixas.']},
    {title:'Leitura editorial',paragraphs:['São lançamentos da semana, não músicas “lançadas hoje”. A data de 06/10 marca a recomendação desta edição.']}
  ],
  sources:[
    {label:'Billboard Brasil · lançamentos nacionais · 02/10',url:'https://billboard.com.br/lancamentos-nacionais-semana-2-outubro-2026/'},
    {label:'Billboard Brasil · lançamentos internacionais · 02/10',url:'https://billboard.com.br/lancamentos-internacionais-semana-2-outubro-2026/'}
  ]
});

patch('games',{
  title:'Gears of War: E-Day e STAR WARS: Galactic Racer chegam ao Steam hoje',
  summary:'LANÇAMENTOS · 06/10 · A página de próximos lançamentos do Steam lista Gears of War: E-Day e STAR WARS: Galactic Racer entre os jogos com estreia em 6 de outubro.',
  shareSummary:'Games · 06/10: Gears of War: E-Day e STAR WARS: Galactic Racer entram no radar de hoje.',
  badge:'GAMES · LANÇAMENTOS · 06/10',
  sections:[
    {title:'No radar de hoje',bullets:['Gears of War: E-Day aparece listado para 06/10.','STAR WARS: Galactic Racer também aparece com lançamento em 06/10.','A disponibilidade pode variar por região, plataforma e horário de liberação da loja.']},
    {title:'Antes de comprar',paragraphs:['Confira requisitos, avaliações iniciais, idioma e preço na sua região diretamente na loja.']}
  ],
  sources:[{label:'Steam · Upcoming Releases',url:'https://store.steampowered.com/explore/upcoming'}]
});

patch('tecnologia',{
  title:'Direitos autorais de IA voltam ao centro do debate na Austrália',
  summary:'REPORTAGEM · 06/10 · A emissora pública ABC rejeitou uma proposta de exceção ampla de copyright para treinamento de IA e defendeu modelos de licenciamento. O debate expõe uma das grandes disputas regulatórias da tecnologia generativa: quem pode usar conteúdo protegido e em quais condições.',
  shareSummary:'Tecnologia · 06/10: Austrália debate copyright e treinamento de IA; ABC rejeita exceção ampla.',
  badge:'TECNOLOGIA · REPORTAGEM · 06/10',
  sections:[
    {title:'O que está em discussão',bullets:['Uso de obras protegidas no treinamento de modelos de IA.','Diferença entre licenciamento negociado e exceção legal ampla.','Impacto sobre empresas de mídia, criadores e desenvolvedores de IA.']},
    {title:'Por que importa',paragraphs:['O resultado desse tipo de discussão pode moldar custos de treinamento, origem dos datasets, governança de dados e obrigações de transparência para modelos generativos.']}
  ],
  sources:[{label:'Reuters · ABC rejects AI copyright carveout · 06/10/2026',url:'https://www.reuters.com/legal/litigation/australias-abc-rejects-ai-copyright-carveout-believes-already-been-scraped-2026-10-06/'}]
});

patch('financas',{
  title:'Ibovespa dispara 7,7% e fecha em recorde após o primeiro turno',
  summary:'FECHAMENTO · 06/10 · Na segunda-feira, o Ibovespa subiu 7,7% e fechou em 206.911,89 pontos, recorde segundo a Reuters. O real também teve sua maior valorização diária em quatro anos, em reação ao resultado eleitoral e à nova composição política esperada.',
  shareSummary:'Finanças · 06/10: Ibovespa +7,7% e recorde de 206.911,89 pontos após o primeiro turno.',
  badge:'FINANÇAS · FECHAMENTO · 06/10',
  sections:[
    {title:'O movimento de segunda',bullets:['Ibovespa: +7,7%, a 206.911,89 pontos, segundo a Reuters.','A moeda brasileira teve a maior valorização em um único dia em quatro anos.','O mercado reagiu ao desempenho eleitoral de Flávio Bolsonaro e ao avanço do PL no Congresso.']},
    {title:'Cuidado com a leitura',paragraphs:['Uma sessão forte não garante tendência futura. Segundo turno, juros, inflação, fiscal e cenário externo continuam capazes de mudar rapidamente os preços.']}
  ],
  sources:[{label:'Reuters · Brazil markets rally · 05/10/2026',url:'https://www.reuters.com/world/americas/brazil-markets-set-rally-bolsonaro-leads-first-round-vote-2026-10-05/'}]
});

patch('security-briefing',{
  title:'FBI remove contratada após breach ligado a patch crítico não aplicado em PeopleSoft',
  summary:'FATO · 06/10 · Segundo a Reuters, um sistema Oracle PeopleSoft administrado por contratada foi explorado após falha na aplicação de um patch crítico, expondo dados pessoais de milhares de funcionários do FBI. O caso é um alerta direto de third-party risk e patch governance.',
  shareSummary:'Security Briefing · 06/10: falha de patching em PeopleSoft vira incidente de alto impacto no FBI.',
  badge:'SECURITY BRIEFING · FATO · 06/10',
  sections:[
    {title:'Leitura executiva',bullets:['A Reuters relata exposição de dados pessoais de milhares de funcionários do FBI.','O sistema envolvido era Oracle PeopleSoft e estava sob operação de uma contratada.','A apuração aponta falha em aplicar um patch crítico previamente recomendado.','O incidente inclui risco operacional, privacidade, inteligência e cadeia de terceiros.']},
    {title:'Controle que teria reduzido o risco',bullets:['SLA de patch crítico com evidência técnica de aplicação.','Inventário claro de ativos e ownership entre cliente e fornecedor.','Validação independente do patch, não apenas confirmação administrativa.','Monitoramento de exposição externa e resposta coordenada com terceiros.']}
  ],
  sources:[{label:'Reuters · FBI/Accenture PeopleSoft breach · 06/10/2026',url:'https://www.reuters.com/technology/accenture-contractor-removed-fbi-following-damaging-data-breach-sources-say-2026-10-06/'}]
});

patch('seguranca',{
  title:'Coreia do Sul diz que IA pode ter sido usada em ataques recentes a bancos',
  summary:'ATUALIZAÇÃO · 06/10 · O presidente sul-coreano Lee Jae Myung afirmou que modelos de IA parecem ter sido usados em ataques recentes contra bancos e pediu estratégias de defesa mais avançadas. Os detalhes técnicos dos ataques não foram divulgados no relato consultado.',
  shareSummary:'Cyber · 06/10: Coreia do Sul aponta possível uso de IA em ataques bancários recentes.',
  badge:'CYBER · ATUALIZAÇÃO · 06/10',
  sections:[
    {title:'O que é confirmado',bullets:['A declaração foi feita pelo presidente sul-coreano em 06/10.','O governo relaciona os incidentes recentes à necessidade de defesas adaptadas a ataques apoiados por IA.','A reportagem não fornece, neste corte, cadeia técnica suficiente para afirmar qual modelo, técnica ou vetor específico foi usado.']},
    {title:'Implicação defensiva',paragraphs:['O ponto operacional é acelerar detecção e resposta sem transformar “IA” em explicação genérica: IOC, TTP, telemetria e causa-raiz continuam necessários para atribuição e correção.']}
  ],
  sources:[{label:'Reuters · AI appears to have been used in bank hacks · 06/10/2026',url:'https://www.reuters.com/world/south-koreas-lee-says-ai-appears-have-been-used-bank-hacks-2026-10-06/'}]
});

patch('appsec-ssdlc',{
  title:'AppSec urgente: CVE-2026-21589 atinge Bitbucket, Jira e Confluence Data Center',
  summary:'CRITICAL · 06/10 · A Atlassian publicou em 05/10 a CVE-2026-21589, falha crítica de acesso arbitrário a arquivos que afeta múltiplos produtos Data Center, incluindo Bitbucket, Confluence, Jira, Bamboo e Crowd. Atlassian Cloud já foi corrigido e não exige ação do cliente.',
  shareSummary:'AppSec · 06/10: CVE-2026-21589 crítica afeta múltiplos produtos Atlassian Data Center.',
  badge:'APPSEC / SSDLC · CRITICAL · 06/10',
  sections:[
    {title:'Escopo',bullets:['Bitbucket Data Center, Confluence Data Center, Jira Service Management/Data Center e Jira Software Data Center estão entre os produtos afetados.','Bamboo, Crowd, Crucible e Fisheye também aparecem no advisory.','A falha permite acesso arbitrário a arquivos dentro do web root quando o caminho e o nome são conhecidos.','Atlassian classifica a vulnerabilidade como Critical, CVSS v4 9.3.']},
    {title:'Ação',bullets:['Aplicar imediatamente as versões corrigidas indicadas no advisory oficial.','Se patch imediato não for possível, reduzir exposição à internet e avaliar mitigação temporária com WAF conforme orientação do fabricante.','Confirmar versão efetivamente em execução depois da mudança e registrar evidência do patch.','Mapear dependências de CI/CD e plugins antes da janela para reduzir risco operacional da atualização.']},
    {title:'No contexto de SSDLC',paragraphs:['Como Bitbucket pode estar no caminho crítico de desenvolvimento e release, esta CVE precisa de ownership explícito, prazo, validação pós-patch e rastreabilidade — não apenas abertura de chamado.']}
  ],
  sources:[{label:'Atlassian · CVE-2026-21589 Security Advisory · 05/10/2026',url:'https://confluence.atlassian.com/security/cve-2026-21589-arbitrary-file-access-vulnerability-impacts-multiple-products-1870495748.html'}]
});

patch('carros',{
  title:'Carros até R$70 mil: use o teto como filtro e compare o anúncio com histórico e FIPE',
  summary:'RADAR · 06/10 · A busca nacional da Webmotors mantém uma grande oferta de usados com preço máximo de R$70 mil. O melhor uso do radar de hoje é filtrar ano, quilometragem e vendedor e só então comparar preço, histórico e custo provável de manutenção.',
  shareSummary:'Carros · 06/10: radar até R$70 mil com foco em filtro, histórico e custo real.',
  badge:'CARROS ATÉ R$70 MIL · RADAR · 06/10',
  sections:[
    {title:'Filtro de hoje',bullets:['Teto absoluto: R$70 mil.','Defina ano mínimo e quilometragem antes de comparar modelos muito diferentes.','Compare anúncio com FIPE e outros veículos equivalentes da mesma região.','Priorize histórico de manutenção, laudo cautelar e procedência sobre “preço imperdível”.']},
    {title:'Não confunda',paragraphs:['Preço anunciado não é preço final de compra nem prova de oportunidade. Documentação, pneus, revisão, seguro, tributos e manutenção inicial podem mudar bastante o custo real.']}
  ],
  sources:[{label:'Webmotors · carros até R$70 mil',url:'https://www.webmotors.com.br/carros/precoate.70000'}]
});

patch('motos',{
  title:'Motos: chuva forte em São Paulo pede pilotagem suave e mais distância',
  summary:'CHECKLIST · 06/10 · Com previsão de pancadas moderadas a fortes à tarde, a prioridade é aderência: reduzir velocidade, evitar aceleração e frenagem bruscas e manter distância maior do veículo à frente.',
  shareSummary:'Motos · 06/10: chuva forte pede velocidade menor, movimentos suaves e mais distância.',
  badge:'MOTOS · CHECKLIST · 06/10',
  sections:[
    {title:'Na chuva',bullets:['Reduza a velocidade antes de entrar em trechos com muita água.','Acelere, freie e mude de direção de forma progressiva.','Evite poças quando puder fazê-lo com segurança.','Cheque pneus, viseira e iluminação antes de sair.']},
    {title:'Contexto de hoje',paragraphs:['O CGE prevê chuva moderada a forte na tarde desta terça em São Paulo, com risco elevado de alagamentos.']}
  ],
  sources:[
    {label:'Honda Motos · cuidados para andar na chuva',url:'https://www.honda.com.br/motos/blog/cuidados-para-andar-de-moto-em-dias-chuvosos'},
    {label:'CGE São Paulo · previsão 06/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-05'}
  ]
});

patch('mecanica',{
  title:'Mecânica: antes da chuva de hoje, confira palhetas, pneus, luzes e desembaçador',
  summary:'CHECKLIST · 06/10 · Visibilidade e aderência viram prioridade com chuva forte. Palhetas que deixam faixas no vidro, pneus em mau estado ou iluminação deficiente merecem atenção antes do deslocamento.',
  shareSummary:'Mecânica · 06/10: chuva forte coloca palhetas, pneus e visibilidade no topo do checklist.',
  badge:'MECÂNICA · CHECKLIST · 06/10',
  sections:[
    {title:'Checagem rápida',bullets:['Palhetas: não devem estar ressecadas nem deixar áreas sem limpeza.','Pneus: confira condição e pressão conforme o manual do veículo.','Luzes e desembaçador: teste antes de enfrentar chuva.','Se houver luz de advertência no painel, investigue antes de uma viagem mais longa.']},
    {title:'Por que hoje',paragraphs:['O CGE prevê pancadas moderadas a fortes em São Paulo durante a tarde, com risco de alagamentos e queda de árvores.']}
  ],
  sources:[
    {label:'Bosch Car Service · revisão e checklist',url:'https://am.boschcarservice.com/br/pt/nossos-servicos/inspecao-e-checagem/revisao-de-ferias/'},
    {label:'CGE São Paulo · previsão 06/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-05'}
  ]
});
}
