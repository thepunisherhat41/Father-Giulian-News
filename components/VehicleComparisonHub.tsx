'use client';

import { useMemo, useState } from 'react';
import { carOptions, motorcycleOptions, type VehicleOption } from '@/lib/vehicle-options';

function VehicleCard({ option, active, onSelect }: { option: VehicleOption; active: boolean; onSelect: () => void }) {
  return (
    <button className={`vehicleOptionCard ${active ? 'active' : ''}`} onClick={onSelect}>
      <div className="vehicleOptionTopline">
        <span>{option.category}</span>
        <small>{option.reference}</small>
      </div>
      <h4>{option.name}</h4>
      <p>{option.year} · {option.version}</p>
      <div className="vehiclePricePair">
        <div><small>FIPE</small><strong>{option.priceFipe}</strong></div>
        <div><small>MERCADO</small><strong>{option.priceMarket}</strong></div>
      </div>
      <em>ANALISAR →</em>
    </button>
  );
}

function VehicleDetail({ option }: { option: VehicleOption }) {
  return (
    <article className="vehicleDetailPanel">
      <div className="vehicleDetailHero">
        <div>
          <span>ANÁLISE COMPLETA</span>
          <h4>{option.name} {option.year}</h4>
          <p>{option.version}</p>
        </div>
        <b>{option.category}</b>
      </div>

      <div className="vehicleDetailStats">
        <div><small>FIPE</small><strong>{option.priceFipe}</strong><span>{option.reference}</span></div>
        <div><small>MÉDIA DE MERCADO</small><strong>{option.priceMarket}</strong><span>referência nacional</span></div>
        {option.priceRange && <div><small>ANÚNCIOS OBSERVADOS</small><strong>{option.priceRange}</strong><span>faixa indicativa</span></div>}
      </div>

      <div className="vehicleNarrative">
        <section>
          <small>PARA QUEM FAZ SENTIDO</small>
          <p>{option.profile}</p>
        </section>
        <section>
          <small>COMO LER A QUILOMETRAGEM</small>
          <p>{option.kmContext}</p>
        </section>
      </div>

      <div className="vehicleTradeoffs">
        <section className="good">
          <small>PONTOS FORTES</small>
          <ul>{option.strengths.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="watch">
          <small>PONTOS DE ATENÇÃO</small>
          <ul>{option.attention.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>

      <section className="vehicleInspection">
        <small>CHECKLIST ANTES DE COMPRAR</small>
        <div>
          {option.inspection.map((item, index) => (
            <p key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</p>
          ))}
        </div>
      </section>

      <aside className="vehicleVerdict">
        <small>VEREDITO / USO REAL</small>
        <strong>{option.verdict}</strong>
      </aside>

      <a className="vehicleSource" href={option.sourceUrl} target="_blank" rel="noreferrer">
        {option.sourceLabel} · conferir referência ↗
      </a>
    </article>
  );
}

export default function VehicleComparisonHub({ type }: { type: 'carros' | 'motos' }) {
  const options = type === 'carros' ? carOptions : motorcycleOptions;
  const [selectedId, setSelectedId] = useState(options[0].id);
  const selected = useMemo(
    () => options.find((item) => item.id === selectedId) ?? options[0],
    [options, selectedId],
  );

  return (
    <section className={`vehicleComparisonHub ${type}`}>
      <div className="vehicleComparisonHeader">
        <div>
          <span>{type === 'carros' ? 'GARAGE RADAR / 4 OPÇÕES' : 'MOTO RADAR / 4 OPÇÕES'}</span>
          <h3>{type === 'carros' ? 'Não escolha um usado olhando um carro só' : 'Quatro motos, quatro propostas diferentes'}</h3>
          <p>
            {type === 'carros'
              ? 'Compare preço, perfil de uso, manutenção, histórico e risco do exemplar. O modelo é só o começo da decisão.'
              : 'Cidade, trail, esportiva ou viagem: preço parecido pode esconder custos e usos completamente diferentes.'}
          </p>
        </div>
        <b>04 PICKS</b>
      </div>

      <div className="vehicleOptionGrid">
        {options.map((option) => (
          <VehicleCard
            key={option.id}
            option={option}
            active={selected.id === option.id}
            onSelect={() => setSelectedId(option.id)}
          />
        ))}
      </div>

      <VehicleDetail option={selected} />
    </section>
  );
}
