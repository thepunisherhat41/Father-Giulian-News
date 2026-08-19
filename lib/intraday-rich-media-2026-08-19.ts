import type { RichMediaEntry } from './rich-media';

const commonsFile = (name: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g, '/')}`;

export const intradayRichMedia20260819: RichMediaEntry[] = [
  {
    label: 'Tecnologia',
    matches: ['Unitree estreia', 'Unitree', 'robótica humanoide', 'valuation de IA'],
    tag: 'STORY MEDIA / HUMANOID ROBOTICS',
    title: 'Unitree G1 em fotografia real',
    caption: 'Fotografia real de um robô humanoide Unitree G1. A imagem identifica o produto e a fabricante discutidos na matéria; não representa a sessão de negociação nem comprova desempenho financeiro.',
    images: [
      {
        url: commonsFile('Unitree G1.jpg'),
        alt: 'Robô humanoide Unitree G1 fotografado em exposição',
        caption: 'Unitree G1 em exposição em 2024.',
        credit: 'Sayanesy · Wikimedia Commons · CC0 1.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Unitree_G1.jpg',
        kind: 'PHOTO',
      },
    ],
    relatedLabel: 'Unitree Robotics · humanoid robots',
    relatedHref: 'https://www.unitree.com/',
  },
];
