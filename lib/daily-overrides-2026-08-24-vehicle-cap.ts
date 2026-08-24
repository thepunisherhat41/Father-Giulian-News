import { dailyContent, todayDrops } from './daily-content';

const set = (slug: string, data: any) => {
  if (!dailyContent[slug]) return;
  Object.assign(dailyContent[slug], data);
};

set('carros', {
  title: 'Carros até R$ 70 mil: cinco usados que valem entrar no radar',
  summary: 'O foco deixa de ser lançamento caro e volta para compra realista. Nesta edição entram opções encontradas no mercado de usados dentro do teto de R$ 70 mil, priorizando manutenção conhecida, peças disponíveis e custo-benefício.',
  shareSummary: 'Carros até R$ 70 mil: radar de usados com opções que fazem sentido para comprar e manter, não apenas lançamentos caros.',
  badge: 'CARROS · ATÉ R$ 70 MIL · 24/08',
  readTime: '6 MIN',
  sections: [
    {
      title: 'Cinco para pesquisar primeiro',
      bullets: [
        'Renault Duster 1.6 — espaço, robustez e oferta ampla no mercado de usados.',
        'Nissan Kicks 1.6 — economia, bom espaço e conjunto mecânico conhecido.',
        'Ford EcoSport 1.5 2020/21 — procure versões já sem o antigo Powershift.',
        'Jeep Renegade 1.8 a partir de 2017 — ampla oferta, mas compare consumo e histórico.',
        'VW Polo 1.0 MPI usado — opção racional para quem prefere hatch e manutenção previsível.',
      ],
    },
    {
      title: 'Regra do radar',
      paragraphs: ['Preço de anúncio varia por região, versão, quilometragem e estado. O Reel usa R$ 70 mil como teto de pesquisa, não como promessa de preço para qualquer unidade. Histórico, laudo cautelar e manutenção pesam mais que escolher apenas pelo ano.'],
    },
  ],
  sources: [
    { label: 'Quatro Rodas · SUVs usados até R$ 70 mil · 2026', url: 'https://quatrorodas.abril.com.br/carros-usados/confira-10-suvs-seminovos-que-sao-boas-opcoes-e-custam-ate-r-70-000/' },
    { label: 'Quatro Rodas · usados econômicos · atualização 2026', url: 'https://quatrorodas.abril.com.br/carros-usados/23-carros-usados-completos-e-economicos-por-menos-de-r-60-000/' },
  ],
});

for (let index = todayDrops.length - 1; index >= 0; index -= 1) {
  if (todayDrops[index]?.slug === 'nautica') todayDrops.splice(index, 1);
}
