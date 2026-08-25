import { dailyContent, todayDrops } from './daily-content';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);
const updateDrop = (slug: string, patch: Record<string, string>) => {
  const drop = todayDrops.find((item) => item.slug === slug);
  if (drop) Object.assign(drop, patch);
};

set('musica', {
  title: 'Rock do dia: “Seasons” mostra como Chris Cornell transformava voz e violão em paisagem',
  summary: 'A faixa solo de Chris Cornell é uma boa escuta para perceber dinâmica: afinação aberta, dedilhado contínuo e uma voz que cresce sem precisar de uma banda inteira. O Reel de hoje é descoberta musical, não notícia reciclada.',
  shareSummary: 'Música 25/08: “Seasons”, de Chris Cornell — uma escuta focada em voz, violão, dinâmica e atmosfera.',
  readTime: '5 MIN',
  badge: 'MÚSICA · ESCUTA DO DIA · 25/08',
  sections: [
    { title: 'O que ouvir', bullets: ['O violão funciona quase como uma camada contínua de textura.', 'A voz alterna contenção e força sem depender de um refrão explosivo.', 'A sensação de movimento vem mais da dinâmica do que de mudanças bruscas de arranjo.'] },
    { title: 'Para comparar', paragraphs: ['Depois, vale ouvir uma faixa mais pesada do Soundgarden e perceber como a identidade vocal continua reconhecível mesmo com outra densidade de arranjo.'] },
  ],
  sources: [{ label: 'Chris Cornell · Seasons · catálogo oficial', url: 'https://www.chriscornell.com/' }],
});

set('motos', {
  title: 'Moto usada do dia: antes de olhar acessórios, procure sinais de queda e alinhamento',
  summary: 'Em uma usada, manete, ponta do guidão, pedaleiras, escapamento, tampas do motor e alinhamento da frente contam uma história. Acessório novo pode ser bônus — ou pode estar escondendo peça marcada por queda.',
  shareSummary: 'Motos 25/08: checklist rápido de sinais de queda e desalinhamento antes de se empolgar com acessórios.',
  readTime: '5 MIN',
  badge: 'MOTOS · USADAS · 25/08',
  sections: [
    { title: 'Olhe antes de ligar', bullets: ['Compare marcas nos dois lados do guidão e manetes.', 'Veja pedaleiras, ponta do escapamento e tampas laterais do motor.', 'Com a roda reta, observe se mesa, guidão e roda parecem alinhados.', 'Procure diferenças de tonalidade, adesivo novo isolado ou parafuso muito mexido.'] },
    { title: 'Depois do visual', paragraphs: ['Se houver indício de queda, a próxima etapa é checar suspensão, rolamentos, rodas e quadro com alguém que saiba medir, porque aparência sozinha não fecha diagnóstico.'] },
  ],
});

updateDrop('musica', { title: 'Rock do dia: Chris Cornell · Seasons', detail: 'Uma escuta focada em voz, violão, dinâmica e atmosfera — sem reciclar notícia de ontem.' });
updateDrop('motos', { title: 'Moto usada: sinais de queda e alinhamento', detail: 'Manetes, guidão, pedaleiras, escapamento e mesa contam mais que acessório novo.' });
