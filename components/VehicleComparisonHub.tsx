'use client';

import { useMemo, useState } from 'react';
import { carOptions, motorcycleOptions, type VehicleOption } from '@/lib/vehicle-options';
import { vehicleMediaById } from '@/lib/vehicle-media';

function VehicleCard({ option, active, onSelect }: { option: VehicleOption; active: boolean; onSelect: () => void }) {
  const media = vehicleMediaById[option.id];
  return (
    <button className={`vehicleOptionCard ${active ? 'active' : ''}`} onClick={onSelect}>
      {media && <span className="vehicleOptionMedia"><img src={media.url} alt={media.alt} loading="lazy" referrerPolicy="no-referrer" /></span>}
      <span className="vehicleOptionContent">
        <span className="vehicleOptionTopline"><span>{option.category}</span><small>{option.reference}</small></span>
        <h4>{option.name}</h4>
        <p>{option.year} · {option.version}</p>
        <span className="vehiclePricePair">
          <span><small>FIPE</small><strong>{option.priceFipe}</strong></span>
          <span><small>MERCADO</small><strong>{option.priceMarket}</strong></span>
        </span>
        <em>VER ANÁLISE →</em>
      </span>
    </button>
  );
}

function VehicleDetail({ option }: { option: VehicleOption }) {
  const media = vehicleMediaById[option.id];
  return (
    <article className="vehicleDetailPanel">
      {media && (
        <figure className="vehicleDetailMediaV7">
          <a href={media.sourceUrl} target="_blank" rel="noreferrer"><img src={media.url} alt={media.alt} loading="lazy" referrerPolicy="no-referrer" /></a>
          <figcaption><span>IMAGEM DO MODELO / GERAÇÃO</span><p>{media.caption}</p><a href={media.sourceUrl} target="_blank" rel="noreferrer">{media.credit} ↗</a></figcaption>
        </figure>
      )}
      <div className="vehicleDetailHero">
        <div><span>ANÁLISE COMPLETA</span><h4>{option.name} {option.year}</h4><p>{option.version}</p></div>
        <b>{option.category}</b>
      </div>

      <div className="vehicleDetailStats">
        <div><small>FIPE</small><strong>{option.priceFipe}</strong><span>{option.reference}</span></div>
        <div><small>MÉDIA DE MERCADO</small><strong>{option.priceMarket}</strong><span>referência nacional</span></div>
        {option.priceRange && <div><small>ANÚNCIOS OBSERVADOS</small><strong>{option.priceRange}</strong><span>faixa indicativa</span></div>}
      </div>

      <div className="vehicleNarrative">
        <section><small>PARA QUEM FAZ SENTIDO</small><p>{option.profile}</p></section>
        <section><small>COMO LER A QUILOMETRAGEM</small><p>{option.kmContext}</p></section>
      </div>

      <div className="vehicleTradeoffs">
        <section className="good"><small>PONTOS FORTES</small><ul>{option.strengths.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="watch"><small>PONTOS DE ATENÇÃO</small><ul>{option.attention.map((item) => <li key={item}>{item}</li>)}</ul></section>
      </div>

      <section className="vehicleInspection"><small>CHECKLIST ANTES DE COMPRAR</small><div>{option.inspection.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</p>)}</div></section>
      <aside className="vehicleVerdict"><small>VEREDITO PARA USO REAL</small><strong>{option.verdict}</strong></aside>
      <a className="vehicleSource" href={option.sourceUrl} target="_blank" rel="noreferrer">{option.sourceLabel} · conferir referência ↗</a>
    </article>
  );
}

export default function VehicleComparisonHub({ type }: { type: 'carros' | 'motos' }) {
  const options = type === 'carros' ? carOptions : motorcycleOptions;
  const [selectedId, setSelectedId] = useState(options[0].id);
  const selected = useMemo(() => options.find((item) => item.id === selectedId) ?? options[0], [options, selectedId]);

  return (
    <section className={`vehicleComparisonHub ${type}`}>
      <div className="vehicleComparisonHeader">
        <div>
          <span>{type === 'carros' ? 'COMPARATIVO DE CARROS · 4 OPÇÕES' : 'COMPARATIVO DE MOTOS · 4 OPÇÕES'}</span>
          <h3>{type === 'carros' ? 'Até R$ 70 mil, motor acima de 1.0 e quatro alternativas reais' : 'Quatro motos para perfis de uso diferentes'}</h3>
          <p>{type === 'carros' ? 'A curadoria ignora carros 1.0 e mantém FIPE e média nacional até R$ 70 mil. Compare preço, motor, perfil de uso, manutenção, histórico e risco do exemplar — o modelo é só o começo da decisão.' : 'Cidade, estrada, trail ou uso mais esportivo: preços próximos podem esconder custos, ergonomia e manutenção muito diferentes.'}</p>
        </div>
        <b>{type === 'carros' ? 'MOTOR ACIMA DE 1.0 · ATÉ R$ 70 MIL' : '4 PERFIS DE USO'}</b>
      </div>

      <div className="vehicleOptionGrid">{options.map((option) => <VehicleCard key={option.id} option={option} active={selected.id === option.id} onSelect={() => setSelectedId(option.id)} />)}</div>
      <VehicleDetail option={selected} />
    </section>
  );
}
