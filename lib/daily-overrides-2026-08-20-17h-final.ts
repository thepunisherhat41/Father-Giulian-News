import { dailyContent, todayDrops } from './daily-content';

Object.assign(dailyContent.hoje,{
  title:'22 missões · edição completa de 20 de agosto',
  summary:'A revisão das 17h recompôs a edição inteira de 20/08 com atualidades verificadas, conhecimento novo e Zona Leste em Foco atualizada, mantendo 22 áreas no Share Pack.',
  shareSummary:'20/08: edição completa com 22 áreas, incluindo Zona Leste em Foco, Política, gravidez, finanças, tecnologia, Cyber e AppSec.',
  readTime:'22 MISSÕES',
  badge:'17H · EDIÇÃO COMPLETA'
});

const updates:Record<string,{label?:string;title:string;detail:string}>={
  'seguranca-zl':{label:'Zona Leste em Foco',title:'Zona Leste agora: jogo em Itaquera, serviços e nova ocorrência confirmada em Aricanduva',detail:'A seção regional foi ampliada com notícias de hoje, mídia, contexto e próximos passos; segurança mantém ocorrência, status jurídico e tendência como coisas diferentes.'},
  musica:{title:'Música: Rock e sertanejo de época seguem em trilhas independentes',detail:'Curadoria preserva repertório, contexto e players separados, sem letras protegidas e sem duplicar artista+título.'},
  games:{title:'Gamescom 2026 se aproxima: agenda oficial vale mais que rumor',detail:'A cobertura separa datas e anúncios confirmados de expectativas ainda sem confirmação.'},
  gravidez:{title:'6 semanas + 4 dias: enjoo, vômito e recuperação entre episódios',detail:'A aba mantém orientação prática sobre hidratação, proteção dos dentes, alimentação gradual e sinais de alerta.'},
  pai:{title:'Ser Pai hoje: prepare uma zona segura pós-enjoo',detail:'Água, recipiente, toalha, enxágue bucal e lanche tolerável prontos reduzem esforço quando o enjoo vier.'},
  carros:{title:'Carros: usado bom é histórico verificável, não só km baixa',detail:'Laudo, manutenção, pneus, arrefecimento e desgaste coerente valem mais do que confiar apenas no hodômetro.'},
  motos:{title:'Motos: marcas de queda ajudam a reconstruir o passado',detail:'Batentes, guidão, manetes, pedaleiras, rodas e bengalas ajudam a separar tombos simples de impactos estruturais.'},
  'security-briefing':{title:'Security Briefing V2: decisões e evidências continuam no centro',detail:'P0/P1, Decision Queue, exposure path, evidência, owner e decision gate permanecem como estrutura principal.'},
  seguranca:{title:'Cyber: vulnerabilidade explorada vale mais que CVSS isolado',detail:'Exploração real, exposição, privilégio e blast radius devem orientar hunting, mitigação e patch.'},
  'appsec-ssdlc':{title:'AppSec: severity + reachability + exposure + exploit evidence',detail:'A fila de findings ganha contexto de caminho explorável, exposição, criticidade e evidência real de abuso.'}
};
for(const item of todayDrops){const u=updates[item.slug];if(u) Object.assign(item,u);}
