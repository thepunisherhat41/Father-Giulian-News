import { richMediaByStory } from './rich-media';

const technologyEntry = {
  label: 'Tecnologia',
  matches: ['Google e Marvell reforçam a corrida por chips próprios para IA', 'Marvell', 'custom silicon', 'custom ASIC'],
  tag: 'MÍDIA DA MATÉRIA · CUSTOM SILICON',
  title: 'Custom ASICs na própria infraestrutura da Marvell',
  caption: 'Imagem oficial da página de Custom ASICs da Marvell. Ela representa a tecnologia discutida na matéria; não é uma fotografia específica do acordo com o Google.',
  images: [
    {
      url: 'https://www.marvell.com/content/dam/marvell/en/products/assets/custom-asic/images/heroes/bnr-hero-1900x1266-asic.jpg',
      alt: 'Imagem oficial da Marvell para sua plataforma de custom ASICs',
      caption: 'Plataforma visual de custom ASICs da Marvell usada como contexto técnico da matéria.',
      credit: 'Marvell Technology',
      sourceUrl: 'https://www.marvell.com/products/custom-asic.html',
      kind: 'PHOTO' as const,
    },
  ],
  relatedLabel: 'Marvell · Custom ASICs',
  relatedHref: 'https://www.marvell.com/products/custom-asic.html',
};

const existingIndex = richMediaByStory.findIndex((entry) => entry.label === 'Tecnologia' && entry.matches.some((match) => match.toLowerCase().includes('marvell')));
if (existingIndex >= 0) richMediaByStory[existingIndex] = technologyEntry;
else richMediaByStory.push(technologyEntry);
