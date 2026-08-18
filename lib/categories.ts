import './daily-overrides-2026-08-13';
import './daily-overrides-2026-08-13-10h';
import './daily-overrides-2026-08-13-17h';
import './daily-overrides-2026-08-14';
import './daily-overrides-2026-08-14-10h';
import './daily-overrides-2026-08-14-17h';
import './music-overrides';
import './daily-overrides-2026-08-15';
import './daily-overrides-2026-08-15-fixes';
import './vehicle-overrides';
import './daily-overrides-2026-08-15-10h';
import './daily-overrides-2026-08-15-17h';
import './daily-overrides-2026-08-16';
import './daily-overrides-2026-08-16-weather-fix';
import './daily-overrides-2026-08-16-budget-fix';
import './daily-overrides-2026-08-16-car-engine-filter';
import './daily-overrides-2026-08-16-10h';
import './daily-overrides-2026-08-16-17h';
import './daily-overrides-2026-08-17';
import './daily-overrides-2026-08-17-security-fix';
import './daily-overrides-2026-08-17-10h';
import './daily-overrides-2026-08-17-17h';
import './daily-overrides-2026-08-17-games';
import './daily-overrides-2026-08-18';
import './daily-overrides-2026-08-18-10h';
import './daily-overrides-2026-08-18-17h';
import './appsec-feed-overrides-2026-08-18-17h';
import './security-briefing-2026-08-18-17h';
import './music-top10-overrides';
import './security-briefing-overrides';
import './local-security-overrides';

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
  { slug: 'seguranca-zl', label: 'Segurança ZL', emoji: '🚨', description: 'Crime, roubos, furtos, tendências e segurança pública na Zona Leste de São Paulo, com dados oficiais e contexto.', subcategories: ['Roubos', 'Furtos', 'Celulares', 'Veículos', 'Dados SSP', 'Ações policiais', 'Smart Sampa', 'Serviços'] },
  { slug: 'politica', label: 'Política', emoji: '🏛️', description: 'Fatos, contexto, posições e impacto, com separação entre informação e interpretação.' },
  { slug: 'mundo', label: 'Mundo', emoji: '🌍', description: 'Geopolítica, ciência, conflitos, energia, sociedade e acontecimentos internacionais.' },
  { slug: 'planeta', label: 'Planeta', emoji: '🌎', description: 'Oceanos, geologia, atmosfera, fenômenos naturais, rios, lagos e a Terra.' },
  { slug: 'animais', label: 'Mundo Animal', emoji: '🐾', description: 'Comportamento, evolução, inteligência, espécies e ecossistemas.' },
  { slug: 'tempo', label: 'Tempo e Clima', emoji: '🌦️', description: 'Meteorologia, clima, tempestades e fenômenos extremos.' },
  { slug: 'curiosidades', label: 'Curiosidades', emoji: '🧠', description: 'Ciência, história, psicologia, linguagem, vocabulário e conexões inesperadas.', subcategories: ['Palavra do dia', 'Mineirês', 'Português de Portugal', 'Ciência', 'História', 'Psicologia', 'Linguagem', 'Cultura'] },
  { slug: 'musica', label: 'Música', emoji: '🎵', description: 'Rock e música caipira de época, com contexto, histórias, artistas e filas Top 10 sem duplicidade.', subcategories: ['Top 10 Rock', 'Top 10 Sertanejo de Época', 'Moda de Viola', 'Música Caipira', 'História da Música'] },
  { slug: 'games', label: 'Games', emoji: '🎮', description: 'Lançamentos, retrô, gameplay, indústria, hardware, e-sports e histórias de jogos que merecem contexto.', subcategories: ['Lançamentos', 'PS5 Radar', 'Nintendo Switch 2', 'Retrô', 'Game Design', 'Indies', 'Hardware', 'E-sports', 'Trilhas', 'Vale acompanhar?'] },
  { slug: 'gravidez', label: 'Gravidez', emoji: '🤰', description: 'Acompanhamento semanal até a DPP, com foco em informação segura e baseada em fontes confiáveis.' },
  { slug: 'pai', label: 'Ser Pai', emoji: '👨‍👧', description: 'Presença, vínculo, segurança, apoio à mãe e desenvolvimento infantil sem fórmulas mágicas.', subcategories: ['Vínculo', 'Apoio à mãe', 'Segurança', 'Desenvolvimento', 'Rotina', 'Autocuidado'] },
  { slug: 'carros', label: 'Carros', emoji: '🚗', description: 'Novos, usados e clássicos, com preço, ano, km, manutenção e custo-benefício.' },
  { slug: 'motos', label: 'Motos', emoji: '🏍️', description: 'Novas e usadas, com preço, ano, km, uso e manutenção.' },
  { slug: 'mecanica', label: 'Mecânica', emoji: '🔧', description: 'Fundamentos, diagnóstico, manutenção preventiva e compra de usados.' },
  { slug: 'nautica', label: 'Náutica', emoji: '⚓', description: 'Barcos, marinas, custos, navegação, cartas náuticas e vida no mar.' },
  { slug: 'viagens', label: 'Viagens', emoji: '✈️', description: 'Perto de SP, Brasil, exterior, lugares históricos, vistos, custos e cuidados.' },
  { slug: 'financas', label: 'Finanças', emoji: '💰', description: 'Mercado, educação financeira, orçamento, crédito, investimentos e decisões práticas.' },
  { slug: 'tecnologia', label: 'Tecnologia', emoji: '💻', description: 'IA, computação, robótica, espaço, ciência, energia e produtos.' },
  { slug: 'security-briefing', label: 'Security Briefing', emoji: '📰', description: 'Notícias e sinais de segurança, tecnologia e negócio prontos para compartilhar com o time.', subcategories: ['Executive View', 'Technical View', 'AI Security', 'IAM', 'Cloud', 'Threat Intel', 'Supply Chain', 'Data / Privacy', 'GRC', 'Business Impact'] },
  { slug: 'seguranca', label: 'Cyber Security', emoji: '🛡️', description: 'Ataques, identidade, cloud, malware, phishing, ransomware, threat intelligence e defesa.' },
  { slug: 'appsec-ssdlc', label: 'AppSec / SSDLC', emoji: '🧬', description: 'Segurança de aplicações e ciclo seguro de desenvolvimento, do código ao deploy.', subcategories: ['AppSec Feed', 'AI Pentest', 'AI Red Teaming', 'Agentic Security', 'AI no SSDLC', 'SAST', 'SCA', 'DAST', 'Secrets', 'SBOM', 'Supply Chain', 'CI/CD', 'Threat Modeling', 'APIs', 'Containers', 'Kubernetes', 'Security Gates'] },
];
