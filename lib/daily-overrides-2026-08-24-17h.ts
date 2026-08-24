import { dailyContent, edition } from './daily-content';

const set = (slug: string, data: any) => {
  if (!dailyContent[slug]) return;
  Object.assign(dailyContent[slug], data);
};

Object.assign(edition, {
  date: '24/08/2026',
  dateLabel: '24 AGO 2026',
  title: 'Daily Intelligence · 24 de agosto · 17h',
});

set('brasil', {
  title: 'IR 2026: Receita abriu hoje a consulta ao último lote regular de restituição',
  summary: 'A Receita liberou em 24/08 a consulta ao quarto e último lote regular: 521.935 contribuintes receberão cerca de R$ 1,24 bilhão em 31 de agosto. A prioridade inclui idosos, professores, pessoas com deficiência/doença grave e quem combinou pré-preenchida com Pix.',
  shareSummary: 'Brasil 24/08: Receita abriu a consulta ao último lote regular do IR 2026. São 521.935 contribuintes e cerca de R$ 1,24 bi, com pagamento em 31/08.',
  badge: 'BRASIL · SERVIÇO HOJE · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'O que mudou hoje', bullets: ['Consulta liberada nesta segunda-feira (24).', 'Pagamento previsto para 31/08.', 'O lote soma cerca de R$ 1,24 bilhão para 521.935 contribuintes.'] },
    { title: 'Como conferir', paragraphs: ['A consulta é feita pelos canais oficiais da Receita Federal, em Meu Imposto de Renda / Consultar Restituição ou pelo aplicativo oficial.'] },
  ],
  sources: [{ label: 'Agência Brasil · 24/08/2026', url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/receita-libera-consulta-ao-ultimo-lote-de-restituicao-do-ir-2026' }],
});

set('seguranca-zl', {
  title: 'Zona Leste hoje: prisão após homicídio em Aricanduva atualiza caso acompanhado desde a semana passada',
  summary: 'A pauta local mudou de fato nesta segunda (24): a PM prendeu o suspeito de matar um vizinho em Aricanduva. O caso havia ocorrido em 19/08 e a novidade de hoje é a prisão, identificada após rastreamento do veículo.',
  shareSummary: 'Zona Leste 24/08: suspeito de homicídio em Aricanduva foi preso hoje. O Reel só entra porque houve atualização material do caso nesta segunda.',
  badge: 'ZONA LESTE · OSINT LOCAL · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'Atualização confirmada hoje', paragraphs: ['Segundo o UOL, o suspeito foi localizado pela Polícia Militar após identificação de um veículo relacionado ao caso. A ocorrência foi registrada em Aricanduva.'] },
    { title: 'Por que esta pauta entrou', bullets: ['O fato novo é de 24/08.', 'A matéria anterior era de 20/08 e não seria republicada sozinha.', 'O feed local deve priorizar mudança de status: prisão, serviço, interdição, operação, obra, decisão ou alerta novo.'] },
  ],
  sources: [
    { label: 'UOL · prisão em 24/08/2026', url: 'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/24/prisao-homem-suspeito-matar-vizinho-sao-paulo.ghtm' },
    { label: 'UOL · caso original em 20/08/2026', url: 'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/20/briga-entre-vizinhos-deixa-um-morto-na-zona-leste-de-sao-paulo.ghtm' },
  ],
});

set('politica', {
  title: 'Nexus aponta empate técnico entre Lula e Flávio Bolsonaro em eventual segundo turno',
  summary: 'Pesquisa divulgada nesta segunda-feira (24) coloca Lula e Flávio Bolsonaro em empate técnico num cenário de segundo turno. O dado é fotografia do período de coleta e não previsão do resultado de outubro.',
  shareSummary: 'Política 24/08: Nexus/BTG Pactual mostra empate técnico em cenário de segundo turno. Margem de erro e metodologia precisam acompanhar o número.',
  badge: 'POLÍTICA · PESQUISA DE HOJE · 24/08',
  readTime: '5 MIN',
  sections: [
    { title: 'Leitura correta', bullets: ['Empate técnico significa que a diferença observada não permite afirmar vantagem estatística com segurança dentro da margem informada.', 'Pesquisa mede intenção no período de coleta.', 'Debates, campanha, economia e rejeição ainda podem alterar o quadro.'] },
  ],
  sources: [{ label: 'Reuters · 24/08/2026', url: 'https://www.reuters.com/world/americas/lula-flavio-bolsonaro-neck-neck-ahead-brazil-election-nexus-poll-shows-2026-08-24/' }],
});

set('mundo', {
  title: 'Indonésia: número de mortos no terremoto de 15 de agosto chegou a 100 nesta segunda',
  summary: 'A agência de desastres da Indonésia informou hoje que o terremoto de magnitude 7,7 em Nusa Tenggara Oriental já deixou 100 mortos, mais de 1.600 feridos e cerca de 180 mil deslocados. As operações de ajuda entraram no décimo dia.',
  shareSummary: 'Mundo 24/08: Indonésia atualizou para 100 o número de mortos no terremoto de magnitude 7,7; cerca de 180 mil pessoas foram deslocadas.',
  badge: 'MUNDO · ATUALIZAÇÃO DE HOJE · 24/08',
  readTime: '5 MIN',
  sections: [
    { title: 'O que mudou hoje', bullets: ['Mortes confirmadas chegaram a 100.', 'Mais de 1.600 pessoas ficaram feridas.', 'Mais de 73 mil casas foram danificadas e cerca de 180 mil pessoas tiveram de sair de casa.'] },
    { title: 'Contexto', paragraphs: ['A Indonésia está sobre o Anel de Fogo do Pacífico, uma das regiões tectonicamente mais ativas do planeta.'] },
  ],
  sources: [{ label: 'Reuters · 24/08/2026', url: 'https://www.reuters.com/business/environment/indonesia-says-death-toll-august-15-earthquake-reaches-100-2026-08-24/' }],
});

set('planeta', {
  title: 'Planeta hoje: a NASA revisita o gigantesco Lago Bonneville e o que restou dele',
  summary: 'A NASA publicou hoje uma nova história sobre o antigo Lago Bonneville, que cobriu grande parte do atual Utah. Quando o lago secou, deixou salinas e paisagens que hoje ajudam a reconstruir mudanças climáticas e geológicas do passado.',
  shareSummary: 'Planeta 24/08: NASA relembra o Lago Bonneville, um enorme lago pré-histórico cujo desaparecimento deixou salinas e pistas sobre o clima antigo.',
  badge: 'PLANETA · DESCOBERTA DO DIA · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'Por que é curioso', paragraphs: ['Uma paisagem desértica pode ser o fundo de um antigo lago gigantesco. Marcas de margem, sedimentos e sal ajudam cientistas a reconstruir como água e clima mudaram ao longo de milhares de anos.'] },
    { title: 'Papo para vocês', bullets: ['Qual lugar atual parece impossível de ter sido coberto por água no passado?', 'Que paisagem vocês gostariam de ver pessoalmente: salinas, vulcões, geleiras ou cânions?'] },
  ],
  sources: [{ label: 'NASA Science · 24/08/2026', url: 'https://earthobservatory.nasa.gov/' }],
});

set('animais', {
  title: 'Mundo Animal: drones estão ajudando a “medir” cachalotes sem encostar neles',
  summary: 'A NOAA publicou hoje como pesquisadores usam drones para registrar cachalotes ameaçados no Golfo e estimar tamanho e condição corporal a partir de imagens aéreas de alta resolução.',
  shareSummary: 'Mundo Animal 24/08: NOAA usa drones para medir tamanho e condição corporal de cachalotes sem capturar os animais.',
  badge: 'MUNDO ANIMAL · PESQUISA DE HOJE · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'Como funciona', paragraphs: ['O drone registra o animal de cima; com escala, ângulo e fotogrametria, a equipe consegue estimar medidas corporais e acompanhar saúde ao longo do tempo.'] },
    { title: 'Curiosidade', bullets: ['Cachalotes são os maiores odontocetos — baleias com dentes.', 'A técnica reduz a necessidade de aproximação física e gera uma série visual comparável entre levantamentos.'] },
  ],
  sources: [{ label: 'NOAA Fisheries · 24/08/2026', url: 'https://www.fisheries.noaa.gov/science-blog/navigating-skies-and-seas-drone-pilots-perspective-sperm-whales' }],
});

set('tempo', {
  title: 'São Paulo segue fria e encoberta hoje; máxima fica perto de 19°C',
  summary: 'O CGE registrou segunda-feira com muitas nuvens, baixa amplitude térmica e possibilidade de garoa. A cidade segue em atenção para baixas temperaturas; terça ainda começa encoberta e tende a chegar perto de 21°C.',
  shareSummary: 'Tempo SP 24/08: céu encoberto, frio e máxima perto de 19°C, com possibilidade de garoa. Terça começa parecida e esquenta lentamente.',
  badge: 'TEMPO · SÃO PAULO HOJE · 24/08',
  readTime: '3 MIN',
  sections: [
    { title: 'Hoje', bullets: ['Mínima perto de 14°C.', 'Máxima por volta de 19°C.', 'Garoa pode ocorrer principalmente no começo e fim do dia.'] },
    { title: 'Amanhã', paragraphs: ['Terça ainda começa encoberta, com garoa entre madrugada e manhã e máxima prevista perto de 21°C.'] },
  ],
  sources: [{ label: 'CGE Prefeitura de São Paulo · 24/08/2026', url: 'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-08-24' }],
});

set('curiosidades', {
  title: 'Curiosidade: o novo telescópio Roman deve enxergar uma área do céu muito maior que o Hubble de uma vez',
  summary: 'A NASA informou hoje que o Nancy Grace Roman Space Telescope está a poucos dias do lançamento, previsto a partir de 30 de agosto. Seu campo de visão amplo permitirá mapear enormes regiões do céu com resolução comparável à do Hubble.',
  shareSummary: 'Curiosidade 24/08: o Roman combina visão detalhada com campo muito mais amplo e deve acelerar mapas de galáxias, matéria escura e exoplanetas.',
  badge: 'CURIOSIDADE · ESPAÇO · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'Por que isso muda o jogo', paragraphs: ['Hubble é excelente em observar regiões relativamente pequenas com muito detalhe. Roman foi desenhado para combinar boa resolução com um campo de visão muito mais amplo, tornando levantamentos do céu muito mais rápidos.'] },
    { title: 'Pergunta de hoje', bullets: ['Se vocês pudessem ver uma descoberta primeiro: um planeta parecido com a Terra ou uma imagem inédita do universo distante?'] },
  ],
  sources: [{ label: 'NASA SVS · 24/08/2026', url: 'https://svs.gsfc.nasa.gov/15073' }],
});

set('musica', {
  title: 'Música hoje: Big Thief apresentou de surpresa um álbum triplo inteiro ao vivo',
  summary: 'O Big Thief tocou as 29 faixas do futuro álbum “Horsepower” no Ryman Auditorium; a cobertura publicada hoje descreve uma guinada ainda mais forte para Americana, country, fiddle, pedal steel e banjo.',
  shareSummary: 'Música 24/08: Big Thief apresentou ao vivo as 29 faixas do futuro álbum triplo Horsepower, com forte influência de Americana e country.',
  badge: 'MÚSICA · DESCOBERTA DE HOJE · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'O que chama atenção', bullets: ['29 músicas apresentadas numa única noite.', 'Arranjos com fiddle, banjo e pedal steel.', 'O registro da apresentação deve virar lançamento especial em 2027.'] },
    { title: 'Papo para vocês', paragraphs: ['Qual artista vocês topariam assistir tocando um álbum inteiro — do começo ao fim — sem saber o repertório antes?'] },
  ],
  sources: [{ label: 'Pitchfork · 24/08/2026', url: 'https://pitchfork.com/story/big-thief-horsepower-live-country-album-probably' }],
});

set('games', {
  title: 'Gamescom dev começa hoje; Opening Night Live é amanhã',
  summary: 'A programação oficial da gamescom 2026 entrou em andamento nesta segunda com a conferência para desenvolvedores. A Opening Night Live acontece em 25/08 e a feira principal abre de 26 a 30/08.',
  shareSummary: 'Games 24/08: gamescom dev começou hoje; Opening Night Live é 25/08 e a feira principal acontece de 26 a 30/08.',
  badge: 'GAMES · AGENDA OFICIAL · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'Agenda', bullets: ['24/08: gamescom dev.', '25/08: Opening Night Live.', '26–30/08: feira principal em Colônia.'] },
  ],
  sources: [{ label: 'gamescom · agenda oficial 2026', url: 'https://www.gamescom.global/en/info/press-and-creator/participation-for-media-representatives' }],
});

set('gravidez', {
  title: 'Gravidez hoje: 7 semanas + 1 dia — o foco é reduzir esforço e manter líquidos',
  summary: 'Na 7ª semana o desenvolvimento é rápido e náuseas podem ficar mais marcantes. A rotina de hoje deve privilegiar pequenos goles, alimentos toleráveis em porções menores e descanso; incapacidade de manter líquidos, sinais de desidratação ou sangramento importante precisam de avaliação médica.',
  shareSummary: 'Gravidez 24/08: 7 semanas + 1 dia. Pequenos goles e porções menores podem ser mais toleráveis; sinais de desidratação ou sangramento importante exigem avaliação.',
  badge: 'GRAVIDEZ · SEMANA 7 · 24/08',
  readTime: '5 MIN',
});

set('pai', {
  title: 'Ser Pai hoje: deixe duas opções simples prontas e pergunte qual ajuda mais',
  summary: 'Em vez de tentar adivinhar ou insistir, deixe água e duas opções de alimento que costumam ser toleradas acessíveis e pergunte qual parece melhor naquele momento. Cuidado prático funciona melhor quando reduz decisões, não quando cria pressão.',
  shareSummary: 'Ser Pai 24/08: reduza decisões — deixe opções simples prontas e pergunte o que ajuda mais, sem insistir.',
  badge: 'SER PAI · MISSÃO DO DIA · 24/08',
  readTime: '3 MIN',
});

set('carros', {
  title: 'Carros hoje: BAIC estreia no Brasil com os elétricos Arcfox T1 e T5',
  summary: 'A BAIC apresentou sua entrada no mercado brasileiro nesta segunda (24) com os Arcfox T1 e T5. O T1 mira o segmento do BYD Dolphin; o T5 chega como SUV elétrico mais potente e será mostrado no Festival Interlagos.',
  shareSummary: 'Carros 24/08: BAIC estreia no Brasil com Arcfox T1 e T5, ampliando a disputa entre elétricos chineses no mercado nacional.',
  badge: 'CARROS · LANÇAMENTO DE HOJE · 24/08',
  readTime: '5 MIN',
  sections: [
    { title: 'Por que vale acompanhar', bullets: ['Mais uma marca chinesa entra no Brasil.', 'Arcfox T1 mira hatch elétrico compacto.', 'Arcfox T5 chega como SUV elétrico e será exibido em Interlagos.'] },
  ],
  sources: [{ label: 'Motor1 Brasil · 24/08/2026', url: 'https://motor1.uol.com.br/news/category/oficial/' }],
});

set('motos', {
  title: 'Motos hoje: Dainese e AGV ganham nova distribuição oficial no Brasil',
  summary: 'A Laquila anunciou nesta segunda (24) que assumiu a distribuição oficial das marcas italianas Dainese e AGV no Brasil. Para quem anda de moto, isso interessa menos pelo “branding” e mais por disponibilidade, rede, reposição e pós-venda de equipamentos de proteção.',
  shareSummary: 'Motos 24/08: Laquila assume distribuição oficial de Dainese e AGV no Brasil — mudança que pode afetar disponibilidade e pós-venda de equipamentos.',
  badge: 'MOTOS · MERCADO HOJE · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'O impacto prático', bullets: ['Capacetes e equipamentos dependem de distribuição consistente para estoque, peças e garantia.', 'AGV atua em capacetes; Dainese em vestuário e proteção.', 'O que vale observar agora é preço, disponibilidade e rede de atendimento.'] },
  ],
  sources: [{ label: 'Motociclismo Online · 24/08/2026', url: 'https://motociclismoonline.com.br/noticias/' }],
});

set('mecanica', {
  title: 'Mecânica do dia: pressão do pneu muda com a temperatura — e o frio pode “acender” um problema que não surgiu hoje',
  summary: 'Ar frio contrai e reduz a pressão medida no pneu. Por isso uma manhã fria pode revelar calibragem já marginal. A leitura correta é feita com pneus frios e seguindo a pressão recomendada pelo fabricante do veículo, não o número máximo escrito na lateral do pneu.',
  shareSummary: 'Mecânica 24/08: frio pode reduzir a pressão medida nos pneus. Calibre a frio conforme a etiqueta/manual do veículo, não pelo máximo da lateral do pneu.',
  badge: 'MECÂNICA · DICA DO DIA · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'Erro comum', paragraphs: ['O valor máximo da lateral do pneu não é a calibragem padrão do carro. A referência correta é a especificação do fabricante do veículo para carga e uso.'] },
    { title: 'Gancho para observar hoje', bullets: ['Compare a pressão a frio antes e depois de uma mudança forte de temperatura.', 'Se um pneu perde pressão muito mais rápido que os outros, procure vazamento em vez de só recalibrar repetidamente.'] },
  ],
  sources: [{ label: 'NHTSA · Tire Safety', url: 'https://www.nhtsa.gov/vehicle-safety/tires' }],
});

set('nautica', {
  title: 'Náutica + ciência: um navio da NOAA começa hoje mergulhos com ROV a quase 2.400 metros',
  summary: 'O Okeanos Explorer inicia hoje a primeira descida da expedição em Samoa Americana. O ROV vai explorar um monte submarino a quase 2,4 km de profundidade, com transmissão por telepresença e novos mergulhos previstos diariamente.',
  shareSummary: 'Náutica 24/08: NOAA inicia hoje mergulhos com ROV em Samoa Americana, descendo a quase 2.400 m para mapear geologia e vida marinha.',
  badge: 'NÁUTICA · EXPEDIÇÃO AO VIVO · 24/08',
  readTime: '5 MIN',
  sections: [
    { title: 'Por que é legal acompanhar', bullets: ['ROV operado a partir do navio.', 'Primeiro mergulho previsto para um monte submarino.', 'Objetivos incluem habitats profundos e minerais críticos marinhos.'] },
  ],
  sources: [{ label: 'NOAA Ocean Exploration · 24/08/2026', url: 'https://oceanexplorer.noaa.gov/expedition-feature/updates-from-the-field-ex2606/' }],
});

set('viagens', {
  title: 'Viagem do dia: Holambra entra no radar com a Expoflora e rende bate-volta saindo de São Paulo',
  summary: 'Em vez de repetir destino genérico, o radar de hoje privilegia agenda: a Expoflora 2026 está próxima e Holambra é um bate-volta viável a partir da capital. Vale acompanhar ingressos, horários e fluxo antes de sair.',
  shareSummary: 'Viagens 24/08: Holambra entra no radar por causa da Expoflora 2026; é opção de bate-volta, mas vale checar agenda oficial e ingressos antes.',
  badge: 'VIAGENS · AGENDA DA SEMANA · 24/08',
  readTime: '4 MIN',
  sections: [
    { title: 'Como deixar a viagem melhor', bullets: ['Saia cedo para reduzir trânsito.', 'Confira horários e ingressos na fonte oficial.', 'Planeje alimentação e pausas — especialmente durante a gestação.'] },
  ],
  sources: [{ label: 'Expoflora · site oficial 2026', url: 'https://expoflora.com.br/' }],
});

set('financas', {
  title: 'Finanças hoje: Focus mantém inflação em 5,02% e reduz projeção de crescimento do PIB',
  summary: 'O relatório divulgado nesta segunda manteve a projeção de IPCA de 2026 em 5,02% e a Selic no fim do ano em 13,75%, enquanto a estimativa de crescimento do PIB recuou em relação à semana anterior.',
  shareSummary: 'Finanças 24/08: Focus mantém IPCA em 5,02% e Selic esperada em 13,75% no fim de 2026, enquanto projeção do PIB recua.',
  badge: 'FINANÇAS · FOCUS DE HOJE · 24/08',
  readTime: '5 MIN',
  sections: [
    { title: 'O que isso significa', bullets: ['Inflação esperada segue acima do centro e do teto da meta.', 'Juros esperados continuam altos.', 'Menor crescimento projetado sugere atividade mais fraca que o mercado esperava antes.'] },
  ],
  sources: [{ label: 'UOL Economia · Focus 24/08/2026', url: 'https://economia.uol.com.br/noticias/redacao/2026/08/24/relatorio-focus---24-de-agosto-de-2026.ghtm' }],
});

set('tecnologia', {
  title: 'Tecnologia hoje: NASA entra na contagem regressiva para lançar o telescópio Roman',
  summary: 'A NASA publicou hoje que o Nancy Grace Roman Space Telescope pode ser lançado a partir de 30 de agosto em um Falcon Heavy. O observatório foi projetado para mapear grandes áreas do céu e atacar perguntas sobre matéria escura, energia escura e exoplanetas.',
  shareSummary: 'Tecnologia 24/08: NASA prepara o lançamento do Roman a partir de 30/08; telescópio terá campo amplo para mapear o céu em grande escala.',
  badge: 'TECNOLOGIA · NASA HOJE · 24/08',
  readTime: '5 MIN',
  sections: [
    { title: 'O que acompanhar', bullets: ['Janela de lançamento a partir de 30/08.', 'Falcon Heavy como veículo de lançamento.', 'Primeiros levantamentos científicos depois do comissionamento.'] },
  ],
  sources: [{ label: 'NASA SVS · 24/08/2026', url: 'https://svs.gsfc.nasa.gov/15073' }],
});

set('security-briefing', {
  title: 'Security Briefing: Zimbra com RCE via SMTP entra no radar operacional',
  summary: 'Feeds de advisories publicados hoje destacam vulnerabilidade no Zimbra Collaboration Suite anterior à 10.1.20, com possibilidade de execução de comandos via requisições SMTP especialmente preparadas em determinadas condições. O ponto executivo é simples: serviço exposto + RCE + e-mail corporativo merece triagem imediata.',
  shareSummary: 'Security Briefing 24/08: nova rodada de advisories destaca Zimbra com risco de execução de comandos. Inventário e exposição devem ser checados antes de discutir severidade abstrata.',
  badge: 'SECURITY BRIEFING · 24/08',
  readTime: '6 MIN',
  sections: [
    { title: 'Ação primeiro', bullets: ['Identificar versões de Zimbra em uso.', 'Verificar exposição SMTP/serviços relacionados.', 'Confirmar patch e mitigação do fornecedor.', 'Priorizar ativos externos e com identidade crítica.'] },
    { title: 'Governança', paragraphs: ['Não trate presença de CVE como incidente confirmado. A triagem deve separar vulnerável, exposto, explorável e efetivamente comprometido.'] },
  ],
  sources: [{ label: 'CSIRTS advisory fusion · 24/08/2026', url: 'https://www.csirts.com/' }],
});

set('seguranca', {
  title: 'Cyber hoje: Zimbra, Edge e Sakura Editor aparecem em advisories publicados nesta segunda',
  summary: 'O feed consolidado de advisories registra nesta segunda novas entradas envolvendo Zimbra Collaboration Suite, Microsoft Edge e Sakura Editor. A leitura útil não é “quantos CVEs saíram”, mas quais produtos existem no ambiente, estão expostos e têm exploração conhecida ou plausível.',
  shareSummary: 'Cyber 24/08: advisories do dia incluem Zimbra, Edge e Sakura Editor. Prioridade deve ser definida por inventário, exposição e exploração — não só CVSS.',
  badge: 'CYBER · ADVISORIES DE HOJE · 24/08',
  readTime: '6 MIN',
  sections: [
    { title: 'Triagem prática', bullets: ['Cruzar produto/versão com CMDB ou inventário.', 'Checar se o ativo é externo ou acessível por usuários não confiáveis.', 'Verificar KEV/exploit público e telemetria.', 'Aplicar patch/mitigação e procurar sinais de abuso quando necessário.'] },
  ],
  sources: [{ label: 'CSIRTS · feed consolidado · 24/08/2026', url: 'https://www.csirts.com/' }],
});

set('appsec-ssdlc', {
  title: 'AppSec hoje: “Mitigated” no code scanning exige evidência — não pode virar botão para esconder finding',
  summary: 'O GitHub adicionou recentemente o motivo “Mitigated” para encerrar alertas de code scanning quando a falha continua no código, mas existe controle compensatório. O tema segue relevante no radar de hoje porque muda a governança: mitigação precisa ter evidência, owner e validade.',
  shareSummary: 'AppSec 24/08: use “Mitigated” apenas quando houver controle compensatório comprovado, owner e revalidação. A causa continua no código.',
  badge: 'APPSEC · GOVERNANÇA DO DIA · 24/08',
  readTime: '6 MIN',
  sections: [
    { title: 'Regra que evita maquiagem de risco', bullets: ['Fixed = causa removida.', 'Mitigated = causa permanece, risco reduzido por controle externo.', 'Accepted = risco conscientemente aceito.', 'False Positive = finding não representa vulnerabilidade real.'] },
    { title: 'No pipeline', paragraphs: ['O status Mitigated deve carregar justificativa, evidência técnica, owner e data de expiração/revisão para não virar dívida invisível.'] },
  ],
  sources: [{ label: 'GitHub Changelog · 20/08/2026', url: 'https://github.blog/changelog/2026-08-20-code-scanning-adds-a-mitigated-alert-dismissal-reason/' }],
});
