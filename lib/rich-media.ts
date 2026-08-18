export type RichMediaEntry = {
  label: string;
  icon: string;
  tag: string;
  title: string;
  caption: string;
  videoLabel: string;
  videoHref: string;
  youtubeId?: string;
};

export const richMediaByLabel: Record<string, RichMediaEntry> = {
  Brasil: { label:'Brasil',icon:'🇧🇷',tag:'VISUAL BRIEF / BRASIL',title:'Do fato para a vida real',caption:'O visual do dia destaca a cadeia de impacto: decisão, serviço público, economia e cotidiano.',videoLabel:'CanalGov / conteúdo oficial',videoHref:'https://www.youtube.com/@canalgov' },
  Política: { label:'Política',icon:'🏛️',tag:'CIVIC VISUAL',title:'Fato, proposta e decisão não são a mesma coisa',caption:'Use o visual como mapa: quem propôs, quem decide, quem executa e quem é afetado.',videoLabel:'Justiça Eleitoral / vídeos',videoHref:'https://www.youtube.com/@justicaeleitoral' },
  Mundo: { label:'Mundo',icon:'🌍',tag:'GLOBAL MAP',title:'Conecte evento, energia, comércio e pessoas',caption:'Geopolítica fica mais útil quando o caminho entre evento global e efeito econômico aparece de forma visual.',videoLabel:'United Nations / vídeo',videoHref:'https://www.youtube.com/@unitednations' },
  Planeta: { label:'Planeta',icon:'🌎',tag:'EARTH SYSTEM',title:'A Terra funciona como sistemas conectados',caption:'Atmosfera, oceanos, gelo, rochas e vida trocam energia e matéria continuamente.',videoLabel:'NASA / Earth',videoHref:'https://www.youtube.com/@NASA' },
  'Mundo Animal': { label:'Mundo Animal',icon:'🐾',tag:'WILDLIFE VISUAL',title:'Comportamento nasce da relação entre corpo e ambiente',caption:'Cada história animal ganha uma lente de adaptação, sentidos, energia e ecossistema.',videoLabel:'Smithsonian / vídeo',videoHref:'https://www.youtube.com/@Smithsonian' },
  'Tempo e Clima': { label:'Tempo e Clima',icon:'🌦️',tag:'ATMOSPHERE HUD',title:'Tempo de hoje ≠ clima',caption:'O card visual separa condição local, sistema atmosférico e tendência climática.',videoLabel:'NOAA / vídeo',videoHref:'https://www.youtube.com/@NOAA' },
  Curiosidades: { label:'Curiosidades',icon:'🧠',tag:'DISCOVERY VISUAL',title:'Uma pergunta simples pode abrir uma ciência inteira',caption:'O visual conecta fenômeno, explicação e uma aplicação inesperada.',videoLabel:'NASA / ciência',videoHref:'https://www.youtube.com/@NASA' },
  Gravidez: { label:'Gravidez',icon:'🤰',tag:'DEVELOPMENT VISUAL',title:'Semana gestacional como uma linha de desenvolvimento',caption:'O visual complementa o Baby Discovery Lab sem substituir avaliação clínica ou ultrassom.',videoLabel:'NHS / pregnancy',videoHref:'https://www.nhs.uk/pregnancy/' },
  'Ser Pai': { label:'Ser Pai',icon:'👨‍👧',tag:'FATHER MISSION',title:'Presença é uma sequência de pequenas ações',caption:'O card transforma apoio, vínculo e segurança em missão prática do dia.',videoLabel:'UNICEF Parenting',videoHref:'https://www.unicef.org/parenting/' },
  Carros: { label:'Carros',icon:'🚗',tag:'GARAGE VISUAL',title:'Preço é só uma camada da compra',caption:'Modelo, uso, manutenção, histórico, km e custo de correção precisam aparecer juntos.',videoLabel:'Latin NCAP / vídeos',videoHref:'https://www.youtube.com/@latinncap' },
  Motos: { label:'Motos',icon:'🏍️',tag:'RIDE VISUAL',title:'A moto certa depende do uso real',caption:'Ciclística, ergonomia, manutenção, segurança e histórico pesam mais do que ficha isolada.',videoLabel:'Abraciclo / conteúdo',videoHref:'https://www.abraciclo.com.br/' },
  Mecânica: { label:'Mecânica',icon:'🔧',tag:'DIAGNOSTIC VISUAL',title:'Diagnóstico é hipótese + medição + contexto',caption:'O visual do dia mostra causa, sintoma, teste e decisão antes da troca de peça.',videoLabel:'Bosch Mobility / vídeo',videoHref:'https://www.youtube.com/@BoschGlobal' },
  Náutica: { label:'Náutica',icon:'⚓',tag:'NAVIGATION VISUAL',title:'Segurança náutica começa antes de sair',caption:'Meteorologia, equipamento, manutenção, comunicação e plano de navegação formam um sistema.',videoLabel:'Marinha do Brasil',videoHref:'https://www.marinha.mil.br/' },
  Viagens: { label:'Viagens',icon:'✈️',tag:'TRAVEL MAP',title:'Destino bom é destino bem planejado',caption:'Tempo, custo, deslocamento, entrada, segurança e experiência aparecem na mesma leitura.',videoLabel:'Ministério do Turismo',videoHref:'https://www.gov.br/turismo/' },
  Finanças: { label:'Finanças',icon:'💰',tag:'MONEY FLOW',title:'Mercado só importa quando chega à decisão pessoal',caption:'Juros, inflação, crédito, câmbio e orçamento são conectados visualmente ao cotidiano.',videoLabel:'Banco Central do Brasil',videoHref:'https://www.youtube.com/@BancoCentraldoBrasil' },
  Tecnologia: { label:'Tecnologia',icon:'💻',tag:'TECH RADAR',title:'Produto, infraestrutura e negócio na mesma pilha',caption:'O visual conecta tecnologia emergente ao custo, capacidade, dependências e uso real.',videoLabel:'IEEE Spectrum / vídeo',videoHref:'https://www.youtube.com/@IEEESpectrum' },
  'Cyber Security': { label:'Cyber Security',icon:'🛡️',tag:'THREAT VISUAL',title:'Ataque, identidade, exposição e impacto',caption:'A imagem organiza o caminho entre sinal técnico, risco operacional e resposta defensiva.',videoLabel:'CISA / Cybersecurity',videoHref:'https://www.youtube.com/@CISAgov',youtubeId:'tfiUSSnVq9o' },
};

export const genericMediaFallback: RichMediaEntry = {
  label:'Daily Intel',icon:'◎',tag:'VISUAL INTEL',title:'Contexto em uma tela',caption:'Imagem editorial, conexão prática e fonte audiovisual para complementar a leitura.',videoLabel:'Abrir fonte audiovisual',videoHref:'https://www.youtube.com/'
};
