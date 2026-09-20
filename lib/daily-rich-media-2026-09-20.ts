import type {RichMediaEntry} from './rich-media';
const img=(label:string,matches:string[],url:string,alt:string,credit:string):RichMediaEntry=>({label,matches,tag:'MÍDIA · 20/09',title:alt,caption:credit,images:[{url,alt,caption:credit,credit,sourceUrl:url,kind:'REFERENCE'}]});
export const dailyRichMedia20260920:RichMediaEntry[]=[
img('Papo de hoje',['qual história da sua infância'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pregnancy.jpg','Casal durante a gestação conversando e construindo memórias','Wikimedia Commons'),
img('Desafio do casal',['gravem um áudio de 1 minuto'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pregnancy.jpg','Casal durante a gestação registrando esta fase juntos','Wikimedia Commons'),
img('Papo com o Bebê',['domingo da nossa casa'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pregnancy.jpg','Gestação em contexto familiar','Wikimedia Commons'),
img('Curiosidades',['lontras-marinhas'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sea_otter_cropped.jpg','Lontra-marinha','Wikimedia Commons'),
img('Curiosidades',['fígado humano'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Human_liver.jpg','Fígado humano em referência anatômica','Wikimedia Commons'),
img('Curiosidades',['saturno tem densidade'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Saturn_during_Equinox.jpg','Saturno observado pela Cassini','NASA/Wikimedia Commons'),
img('Curiosidades',['antártida é o maior deserto'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Antarctica_6400px_from_Blue_Marble.jpg','Antártida vista do espaço','NASA/Wikimedia Commons'),
img('Curiosidades',['gps precisa considerar'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/GPS-IIR.jpg','Constelação de satélites GPS','Wikimedia Commons'),
img('Gravidez',['11 semanas','11s0d'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pregnancy.jpg','Gestação em contexto familiar','Wikimedia Commons'),
img('Ser Pai',['ritual de voz'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pregnancy.jpg','Casal durante a gestação','Wikimedia Commons'),
img('Tempo e Clima',['domingo pode chegar a 27'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cumulus_clouds_in_fair_weather.jpeg','Nuvens e aberturas de sol','Wikimedia Commons'),
img('Zona Leste em Foco',['parque do carmo celebra 50 anos'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Parque_do_Carmo_Sao_Paulo.JPG','Parque do Carmo, São Paulo','Wikimedia Commons'),
img('Corinthians',['corinthians x fluminense'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/NeoQuimicaArena_(1).jpg','Neo Química Arena','Wikimedia Commons'),
img('Viagens',['bate-voltas'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Road_map.jpg','Mapa rodoviário','Wikimedia Commons'),
img('Música',['escolha um álbum'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vinyl_Record.png','Disco de vinil','Wikimedia Commons'),
img('Carros',['confira histórico'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lono_Avenue_Value_Center_Used_Car_Lot.JPG','Carros usados em pátio de venda','Wikimedia Commons'),
img('Motos',['folga e lubrificação da corrente'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Motorcycle_chain.jpg','Corrente de motocicleta','Wikimedia Commons'),
img('Mecânica',['apagar um código de falha'],'https://commons.wikimedia.org/wiki/Special:Redirect/file/Check-Engine-Light.jpg','Luz de falha no painel','Wikimedia Commons')
];