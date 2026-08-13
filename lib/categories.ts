import './daily-overrides-2026-08-13';
import './daily-overrides-2026-08-13-10h';

export type Category = {
  slug: string;
  label: string;
  emoji: string;
  description: string;
  subcategories?: string[];
};

export const categories: Category[] = [
  { slug: 'hoje', label: 'Hoje', emoji: '☀️', description: 'Seleção diária dos melhores conteúdos.' },
  { slug: 'brasil', label: 'Brasil', emoji: '🇧🇷', description: 'Política, economia, sociedade, infraestrutura e decisões que afetam a vida real.' },
  { slug: 'politica', label: 'Política', emoji: '🏛️', description: 'Fatos, contexto, posições e impacto, com separação entre informação e interpretação.' },
  { slug: 'mundo', label: 'Mundo', emoji: '🌍', description: 'Geopolítica, ciência, conflitos, energia, sociedade e acontecimentos internacionais.' },
  { slug: 'planeta', label: 'Planeta', emoji: '🌎', description: 'Oceanos, geologia, atmosfera, fenômenos naturais, rios, lagos e a Terra.' },
  { slug: 'animais', label: 'Mundo Animal', emoji: '🐾', description: 'Comportamento, evolução, inteligência, espécies e ecossistemas.' },
  { slug: 'tempo', label: 'Tempo e Clima', emoji: '🌦️', description: 'Meteorologia, clima, tempestades e fenômenos extremos.' },
  { slug: 'curiosidades', label: 'Curiosidades', emoji: '🧠', description: 'Ciência, história, psicologia, linguagem, vocabulário e conexões inesperadas.', subcategories: ['Palavra do dia', 'Ciência', 'História', 'Psicologia', 'Linguagem', 'Cultura'] },
  { slug: 'gravidez', label: 'Gravidez', emoji: '🤰', description: 'Acompanhamento semanal até a DPP, com foco em informação segura e baseada em fontes confiáveis.' },
  { slug: 'pai', label: 'Ser Pai', emoji: '👨‍👧', description: 'Presença, vínculo, segurança, apoio à mãe e desenvolvimento infantil sem fórmulas mágicas.', subcategories: ['Vínculo', 'Apoio à mãe', 'Segurança', 'Desenvolvimento', 'Rotina', 'Autocuidado'] },
  { slug: 'carros', label: 'Carros', emoji: '🚗', description: 'Novos, usados e clássicos, com preço, ano, km, manutenção e custo-benefício.' },
  { slug: 'motos', label: 'Motos', emoji: '🏍️', description: 'Novas e usadas, com preço, ano, km, uso e manutenção.' },
  { slug: 'mecanica', label: 'Mecânica', emoji: '🔧', description: 'Fundamentos, diagnóstico, manutenção preventiva e compra de usados.' },
  { slug: 'nautica', label: 'Náutica', emoji: '⚓', description: 'Barcos, marinas, custos, navegação, cartas náuticas e vida no mar.' },
  { slug: 'viagens', label: 'Viagens', emoji: '✈️', description: 'Perto de SP, Brasil, exterior, lugares históricos, vistos, custos e cuidados.' },
  { slug: 'financas', label: 'Finanças', emoji: '💰', description: 'Mercado, educação financeira, orçamento, crédito, investimentos e decisões práticas.' },
  { slug: 'tecnologia', label: 'Tecnologia', emoji: '💻', description: 'IA, computação, robótica, espaço, ciência, energia e produtos.' },
  { slug: 'seguranca', label: 'Cyber Security', emoji: '🛡️', description: 'Ataques, identidade, cloud, malware, phishing, ransomware, threat intelligence e defesa.' },
  { slug: 'appsec-ssdlc', label: 'AppSec / SSDLC', emoji: '🧬', description: 'Segurança de aplicações e ciclo seguro de desenvolvimento, do código ao deploy.', subcategories: ['SAST', 'SCA', 'DAST', 'Secrets', 'SBOM', 'Supply Chain', 'CI/CD', 'Threat Modeling', 'APIs', 'Containers', 'Kubernetes', 'Security Gates'] },
];
