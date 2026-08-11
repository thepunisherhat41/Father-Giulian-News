'use client';

import { categories } from '@/lib/categories';
import { getPregnancyStatus } from '@/lib/pregnancy';

const fatherTips = [
  'Esteja presente de verdade: atenção, constância e previsibilidade importam mais do que tentar ser perfeito.',
  'Apoie a mãe de forma prática: escute, divida tarefas, acompanhe consultas quando possível e respeite limites físicos e emocionais.',
  'Aprenda segurança infantil antes de precisar dela: sono seguro, transporte, engasgo, primeiros socorros e ambiente doméstico.',
  'Construa vínculo desde cedo com voz, toque adequado, rotina e participação nos cuidados.',
  'Evite comparar desenvolvimento com outras crianças; use marcos como referência, não como competição.',
  'Cuide também da própria saúde física e emocional para conseguir cuidar bem da família.'
];

export default function HomePage() {
  const pregnancy = getPregnancyStatus();

  return (
    <main className="shell">
      <header className="hero">
        <div>
          <p className="eyebrow">FATHER GIULIAN NEWS</p>
          <h1>Seu hub diário de conhecimento, família e mundo.</h1>
          <p className="subtitle">Leia o que importa, aprofunde o que interessar e compartilhe só os cards que realmente valem a pena.</p>
        </div>
        <div className="pregnancyCard">
          <span>🤰 Gravidez</span>
          <strong>{pregnancy.gestationalWeek} semanas + {pregnancy.gestationalDay} dias</strong>
          <small>DPP: 11/04/2027 · {pregnancy.daysRemaining} dias estimados</small>
        </div>
      </header>

      <section>
        <div className="sectionTitle">
          <h2>Explorar assuntos</h2>
          <span>{categories.length} áreas</span>
        </div>
        <div className="grid">
          {categories.map((category) => (
            <article className="card" key={category.slug}>
              <div className="cardTop">
                <span className="emoji">{category.emoji}</span>
                <span className="pill">{category.label}</span>
              </div>
              <h3>{category.label}</h3>
              <p>{category.description}</p>
              {category.subcategories && (
                <div className="tags">
                  {category.subcategories.map((item) => <span key={item}>{item}</span>)}
                </div>
              )}
              <div className="actions"><button>Ler</button><button>☆</button><button>Compartilhar</button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="fatherSection">
        <div className="sectionTitle">
          <div>
            <p className="eyebrow">👨‍👧 SER PAI</p>
            <h2>Construir um bom pai, um dia de cada vez</h2>
          </div>
        </div>
        <p className="careNote">Não existe fórmula para ser “o melhor pai do mundo”. Esta área vai priorizar recomendações de baixo risco, desenvolvimento infantil, segurança, vínculo e apoio familiar, deixando orientação clínica para profissionais de saúde.</p>
        <div className="tips">
          {fatherTips.map((tip, index) => <div className="tip" key={tip}><strong>{String(index + 1).padStart(2, '0')}</strong><p>{tip}</p></div>)}
        </div>
      </section>
    </main>
  );
}
