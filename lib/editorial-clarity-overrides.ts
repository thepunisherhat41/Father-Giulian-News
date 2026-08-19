import { dailyContent, todayDrops } from './daily-content';

const drop = (slug: string) => todayDrops.find((item) => item.slug === slug);

const carDrop = drop('carros');
if (carDrop) {
  carDrop.title = 'Comparativo de usados até R$ 70 mil: Spin, Duster, EcoSport e March';
  carDrop.detail = 'Quatro opções com motor acima de 1.0, preço de referência, perfil de uso, manutenção e pontos de atenção antes da compra.';
}

const motoDrop = drop('motos');
if (motoDrop) {
  motoDrop.title = 'Comparativo de motos: CB 300R, MT-03, V-Strom 650 e Interceptor 650';
  motoDrop.detail = 'Quatro propostas diferentes de uso, com preço de referência, ciclística, manutenção e checklist de compra.';
}

if (dailyContent.carros) {
  dailyContent.carros.title = 'Comparativo de usados até R$ 70 mil: quatro opções com motor acima de 1.0';
  dailyContent.carros.shareSummary = 'Carros: quatro usados com motor acima de 1.0 e preço de referência até R$ 70 mil, comparados por uso, manutenção, risco do exemplar e custo-benefício.';
}

if (dailyContent.motos) {
  dailyContent.motos.title = 'Comparativo de motos: quatro propostas para usos diferentes';
  dailyContent.motos.shareSummary = 'Motos: quatro opções comparadas por perfil de uso, preço, ciclística, manutenção e pontos de inspeção antes da compra.';
}
