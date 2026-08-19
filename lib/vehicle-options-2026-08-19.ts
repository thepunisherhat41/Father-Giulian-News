import { carOptions, motorcycleOptions, type VehicleOption } from './vehicle-options';

const cars: VehicleOption[] = [
  {
    id:'spin-lt-auto-2017',name:'Chevrolet Spin',year:'2017',version:'1.8 LT automático',category:'MPV / 1.8 / AUTOMÁTICO',
    priceFipe:'R$ 52.238',priceMarket:'R$ 54.263,33',priceRange:'R$ 47,9 mil–65,9 mil',reference:'AGO/2026',
    profile:'Para família que prioriza espaço, porta-malas e mecânica conhecida, aceitando consumo maior que hatch compacto.',
    kmContext:'Em carro familiar, observe uso urbano severo, suspensão, arrefecimento e histórico do câmbio; bancos e acabamento ajudam a conferir coerência do hodômetro.',
    strengths:['Muito espaço por preço de hatch usado.','Automático convencional de 6 marchas.','FIPE e média nacional bem abaixo do teto de R$ 70 mil.'],
    attention:['Consumo é parte do custo total.','Cheque arrefecimento, coxins e suspensão dianteira.','Teste todos os engates e trocas do câmbio com o conjunto quente.'],
    inspection:['Partida fria','Arrefecimento','Câmbio frio/quente','Suspensão e coxins','Ar-condicionado','Cautelar + scanner'],
    verdict:'Boa compra para espaço e praticidade se histórico estiver documentado; não compre só pela quantidade de lugares.',
    sourceLabel:'Webmotors · FIPE / média nacional · ago/2026',sourceUrl:'https://www.webmotors.com.br/tabela-fipe/carros/chevrolet/spin/2017/18-lt-8v-flex-4p-automatico'
  },
  {
    id:'duster-dynamique-2017',name:'Renault Duster',year:'2017',version:'1.6 Dynamique manual',category:'SUV / 1.6 / MANUAL',
    priceFipe:'R$ 60.995',priceMarket:'R$ 63.577,60',priceRange:'R$ 52 mil–74,9 mil',reference:'AGO/2026',
    profile:'Para quem quer altura, espaço e robustez simples, priorizando exemplar abaixo de R$70 mil mesmo que anúncios mais caros existam.',
    kmContext:'SUV usado pode ter encarado piso ruim; pneus, alinhamento, bandejas, amortecedores e assoalho contam mais que baixa km isolada.',
    strengths:['Boa altura livre.','Conjunto manual simples de avaliar.','FIPE e média nacional abaixo do teto.'],
    attention:['Há anúncios acima do teto: filtre pelo exemplar, não pela média do modelo.','Suspensão e direção merecem inspeção cuidadosa.','Confirme manutenção do arrefecimento e embreagem.'],
    inspection:['Embreagem','Suspensão/direção','Pneus/alinhamento','Arrefecimento','Assoalho/estrutura','Scanner + cautelar'],
    verdict:'Faz sentido para piso ruim e uso familiar; o melhor negócio é a unidade íntegra, não a Duster mais barata.',
    sourceLabel:'Webmotors · FIPE / média nacional · ago/2026',sourceUrl:'https://www.webmotors.com.br/tabela-fipe/carros/renault/duster/2017/16-dynamique-4x2-16v-flex-4p-manual'
  },
  {
    id:'ecosport-se-manual-2017',name:'Ford EcoSport',year:'2017',version:'1.6 SE manual',category:'SUV COMPACTO / 1.6 / MANUAL',
    priceFipe:'R$ 56.095',priceMarket:'R$ 60.030,43',priceRange:'R$ 49,99 mil–67,9 mil',reference:'AGO/2026',
    profile:'Para uso urbano que quer posição alta sem entrar no risco das versões Powershift.',
    kmContext:'Em EcoSport manual, foque em embreagem, suspensão, coxins, arrefecimento e histórico estrutural; idade e manutenção vencem km de painel.',
    strengths:['Versão manual evita o principal ponto de atenção do Powershift.','Faixa observada cabe abaixo de R$70 mil.','Tamanho amigável para cidade.'],
    attention:['Confirme pelo VIN e documentos que é a versão manual.','Cheque tampa traseira/estepe e sinais de colisão.','Suspensão e coxins podem gerar ruídos em uso urbano.'],
    inspection:['Embreagem','Arrefecimento','Suspensão','Pneus','Estrutura traseira','Cautelar + scanner'],
    verdict:'É a escolha urbana elevada do radar; prefira manual documentada e não aceite histórico nebuloso.',
    sourceLabel:'Webmotors · FIPE / média nacional · ago/2026',sourceUrl:'https://www.webmotors.com.br/tabela-fipe/carros/ford/ecosport/2017/16-se-16v-flex-4p-manual'
  },
  {
    id:'march-sv-manual-2019',name:'Nissan March',year:'2019',version:'1.6 SV manual',category:'HATCH / 1.6 / MANUAL',
    priceFipe:'R$ 56.285',priceMarket:'R$ 57.904,29',priceRange:'R$ 48 mil–66,9 mil',reference:'AGO/2026',
    profile:'Para quem quer hatch leve, motor 1.6 e custo de entrada ainda dentro do teto, sem priorizar luxo ou isolamento acústico.',
    kmContext:'Hatch urbano exige leitura de embreagem, pneus, suspensão, rodas e acabamento; desgaste coerente é mais importante que número baixo isolado.',
    strengths:['Motor 1.6 em carro leve.','Câmbio manual simples.','FIPE e média nacional abaixo de R$58 mil.'],
    attention:['Cheque embreagem e engates.','Inspecione suspensão por ruídos e folgas.','Avalie estado de pneus, rodas e alinhamento.'],
    inspection:['Partida fria','Embreagem','Suspensão/direção','Pneus/rodas','Ar-condicionado','Cautelar + scanner'],
    verdict:'É o hatch simples e ágil do grupo; bom custo-benefício quando o exemplar tem histórico claro e consumíveis em ordem.',
    sourceLabel:'Webmotors · FIPE / média nacional · ago/2026',sourceUrl:'https://www.webmotors.com.br/tabela-fipe/carros/nissan/march/2019/16-sv-16v-flexstart-4p-manual'
  }
];

const motos: VehicleOption[] = [
  {
    id:'cb300r-abs-2015',name:'Honda CB 300R ABS',year:'2015',version:'CB 300R ABS',category:'STREET / 300 / ABS',
    priceFipe:'R$ 14.904',priceMarket:'R$ 15.400',priceRange:'R$ 14,7 mil–15,5 mil',reference:'AGO/2026',
    profile:'Street acessível para uso urbano e deslocamentos curtos, com ABS e rede ampla de peças.',
    kmContext:'Procure sinais de uso intenso, quedas e manutenção negligenciada; idade torna mangueiras, pneus e rolamentos tão importantes quanto km.',
    strengths:['ABS.','Preço de entrada baixo.','Peças e mão de obra amplamente disponíveis.'],
    attention:['Verifique histórico do cabeçote/motor e manutenção correta.','Marcas de queda em guidão, pedaleiras e tampas.','Relação, pneus e retentores podem virar gasto imediato.'],
    inspection:['Motor frio','Mesa/batentes','Pneus/relação','Freios/ABS','Bengalas','Histórico'],
    verdict:'Compra racional só com motor saudável e ciclística alinhada; exemplar barato com ruído ou histórico incerto não compensa.',
    sourceLabel:'Webmotors · FIPE / média nacional · ago/2026',sourceUrl:'https://www.webmotors.com.br/tabela-fipe/motos/honda/cb-300r-abs/2015'
  },
  {
    id:'mt03-abs-2018',name:'Yamaha MT-03 ABS',year:'2018',version:'MT-03 ABS',category:'NAKED / 321 / ABS',
    priceFipe:'R$ 20.667',priceMarket:'R$ 22.143,75',priceRange:'R$ 18 mil–24,99 mil',reference:'AGO/2026',
    profile:'Naked bicilíndrica para quem quer desempenho acima das 250/300 urbanas, aceitando seguro e pneus mais caros.',
    kmContext:'Uso esportivo aparece em pneus, pastilhas, relação, mesa e marcas de queda; km baixa não apaga sinais de abuso.',
    strengths:['Motor bicilíndrico.','ABS.','Boa relação desempenho/preço.'],
    attention:['Pesquise seguro antes.','Cheque radiador/arrefecimento e sistema de carga.','Procure sinais de stunt/queda e acessórios mal instalados.'],
    inspection:['Motor frio','Radiador','Mesa/batentes','Pneus/relação','ABS','Sistema de carga'],
    verdict:'Boa para quem quer subir de categoria; custo total deve incluir seguro e consumíveis, não só preço de compra.',
    sourceLabel:'Webmotors · FIPE / média nacional · ago/2026',sourceUrl:'https://www.webmotors.com.br/tabela-fipe/motos/yamaha/mt-03-abs/2018'
  },
  {
    id:'vstrom650-abs-2015',name:'Suzuki V-Strom 650 ABS',year:'2015',version:'V-Strom 650 ABS',category:'TOURING / 645 / ABS',
    priceFipe:'R$ 33.763',priceMarket:'R$ 33.500',priceRange:'R$ 33 mil–34,5 mil',reference:'AGO/2026',
    profile:'Touring para estrada e viagem, valorizando conforto, autonomia e robustez acima de leveza urbana.',
    kmContext:'Moto de viagem pode ter km alta e ótimo estado; procure histórico, rolamentos, suspensão, relação, sistema de carga e marcas de tombos com bagagem.',
    strengths:['Conforto rodoviário.','ABS.','Preço médio muito próximo da FIPE.'],
    attention:['Consumíveis grandes custam mais.','Cheque sistema de carga e arrefecimento.','Inspecione acessórios e estrutura por quedas/parafusos alterados.'],
    inspection:['Carga/bateria','Arrefecimento','Rolamentos','Suspensão','Pneus/relação','Freios/ABS'],
    verdict:'Excelente ferramenta de estrada quando bem mantida; histórico vale mais que perseguir unidade de baixa quilometragem.',
    sourceLabel:'Webmotors · FIPE / média nacional · ago/2026',sourceUrl:'https://www.webmotors.com.br/tabela-fipe/motos/suzuki/v-strom-650-abs/2015/'
  },
  {
    id:'interceptor650-2021',name:'Royal Enfield Interceptor 650',year:'2021',version:'Interceptor 650',category:'CLÁSSICA / 648 / ABS',
    priceFipe:'R$ 23.150',priceMarket:'R$ 24.030',priceRange:'R$ 20 mil–30,99 mil',reference:'AGO/2026',
    profile:'Para quem quer bicilíndrica de estilo clássico e uso misto urbano/rodoviário, aceitando ergonomia e peso próprios da proposta.',
    kmContext:'Confira revisões, pneus por idade, relação, rolamentos, oxidação e qualidade de customizações; acessórios podem esconder ou criar problemas.',
    strengths:['Motor bicilíndrico 650.','ABS.','Preço de mercado próximo da FIPE.'],
    attention:['Customização elétrica mal feita é red flag.','Cheque oxidação e acabamento.','Seguro, pneus e peças devem entrar no custo total.'],
    inspection:['Chicote/acessórios','Motor frio','Pneus/relação','Rolamentos','Freios/ABS','Histórico de revisões'],
    verdict:'Boa escolha emocional e funcional se estiver original ou bem modificada; fuja de elétrica improvisada e histórico incompleto.',
    sourceLabel:'Webmotors · FIPE / média nacional · ago/2026',sourceUrl:'https://www.webmotors.com.br/tabela-fipe/motos/royal-enfield/interceptor/2021'
  }
];

carOptions.splice(0,carOptions.length,...cars);
motorcycleOptions.splice(0,motorcycleOptions.length,...motos);
