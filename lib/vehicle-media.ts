export type VehicleMedia = { url:string; alt:string; caption:string; credit:string; sourceUrl:string };

export const vehicleMediaById: Record<string, VehicleMedia> = {
  'cruze-lt-auto-2014': {
    url:'https://static.cargurus.com/images/site/2017/12/12/13/00/2014_chevrolet_cruze_2lt-pic-3747308311327765241-1600x1200.jpeg',
    alt:'Chevrolet Cruze sedã da primeira geração, ano-modelo 2014, em vista dianteira lateral',
    caption:'Imagem de referência do Chevrolet Cruze 2014 da mesma geração analisada. Acabamentos podem variar conforme mercado e versão.',
    credit:'CarGurus · 2014 Chevrolet Cruze',
    sourceUrl:'https://www.cargurus.com/research/2014-Chevrolet-Cruze-c23887',
  },
  'sentra-sv-2015': {
    url:'https://cdn.carspecs.us/car-photos/b35fa96b7c6ac20957adaeacf2024361d751d1bd-2000.jpg',
    alt:'Nissan Sentra 2015 em circulação, mesma geração do modelo analisado',
    caption:'Imagem de referência da geração 2015 do Nissan Sentra. Rodas e acabamento podem não corresponder à versão SV brasileira.',
    credit:'CarSpecs · Nissan Sentra 2015',
    sourceUrl:'https://www.carspecs.us/cars/2015/nissan/sentra/67538',
  },
  'peugeot-2008-allure-2018': {
    url:'https://www.carkeys.co.uk/media/22215/large-13347-new2008compactsuvalluremodel.jpg?format=webp&mode=max&width=1020',
    alt:'Peugeot 2008 vermelho da geração comercializada em 2018',
    caption:'Imagem de referência do Peugeot 2008 da mesma fase visual do modelo analisado. Configuração pode variar por mercado.',
    credit:'Car Keys · Peugeot 2008 review',
    sourceUrl:'https://www.carkeys.co.uk/car-reviews/2018-peugeot-2008-review',
  },
  'fiesta-se-2018': {
    url:'https://i.gaw.to/content/photos/33/53/335387_2018_Ford_Fiesta.jpg',
    alt:'Ford Fiesta hatch 2018 vermelho em vista dianteira lateral',
    caption:'Imagem de referência do Ford Fiesta hatch 2018. Equipamentos e rodas podem variar em relação ao SE brasileiro.',
    credit:'Guide de l’Auto · Ford Fiesta 2018',
    sourceUrl:'https://www.guideautoweb.com/articles/46545/ford-fiesta-2018-souvent-ignoree-mais-surprenante-a-conduire/',
  },
  'cb-twister-abs-2020': {
    url:'https://www.planetcarsz.com/assets/uploads/2021/01/c08a054f8b23f375fc1a7475013d6242.jpg',
    alt:'Honda CB 250F Twister da mesma geração da moto 2020 analisada',
    caption:'Imagem de referência da CB 250F Twister da mesma geração; grafismos e ano-modelo da foto podem variar.',
    credit:'Honda divulgação / PlanetCarsZ',
    sourceUrl:'https://www.planetcarsz.com/noticias-de-carros/honda-cb-250f-twister-2021-cores-e-grafismos-ineditos-marcam-o-modelo-com-a-melhor-relacao-custo-beneficio-da-categoria',
  },
  'himalayan-2021': {
    url:'https://cdni.autocarindia.com/ExtraImages/20210211124840_2021_Royal_Enflied_Himalayan_1.jpg',
    alt:'Royal Enfield Himalayan 2021 verde em ambiente de trilha',
    caption:'Imagem de referência da Royal Enfield Himalayan 2021, mesmo ano-base da análise.',
    credit:'Autocar India · Himalayan 2021',
    sourceUrl:'https://www.autocarindia.com/bike-news/updated-royal-enfield-himalayan-launched-at-rs-201-lakh-419910',
  },
  'bmw-g310r-2018': {
    url:'https://cdn.motor1.com/images/mgl/QVrm1/s3/prueba-bmw-g-310-r-2018.jpg',
    alt:'BMW G 310 R 2018 azul em vista dianteira lateral',
    caption:'Imagem de referência da BMW G 310 R 2018, mesmo ano-base da análise.',
    credit:'Motor1 · BMW G 310 R 2018',
    sourceUrl:'https://es.motor1.com/reviews/184215/bmw-g310r-moto-prueba-carneta2/',
  },
  'nc750x-2016': {
    url:'https://images5.1000ps.net/images_bikekat/2016/2-Honda/7568-nc750x/23.jpg',
    alt:'Honda NC750X 2016 vermelha e prata em fundo claro',
    caption:'Imagem de referência da Honda NC750X 2016. A análise deve confirmar versão/transmissão do exemplar antes da compra.',
    credit:'Honda / 1000PS · NC750X 2016',
    sourceUrl:'https://hondanews.eu/pt/pt/media/pressreleases/67275/honda-nc750x-2016',
  },
};
