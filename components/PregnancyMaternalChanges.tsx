'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { getPregnancyStatus } from '@/lib/pregnancy';

type WeekGuide = {
  physical: string;
  emotional: string;
};

const WEEK_GUIDES: Record<number, WeekGuide> = {
  4: {
    physical: 'O corpo pode ainda parecer igual por fora. A menstruação costuma atrasar e podem surgir seios sensíveis, cansaço, cólicas leves, inchaço, maior vontade de urinar ou nenhum sintoma perceptível.',
    emotional: 'A descoberta pode trazer alegria, incredulidade, medo e preocupação ao mesmo tempo. Oscilações emocionais podem acontecer, mas também é normal se sentir praticamente igual.',
  },
  5: {
    physical: 'Cansaço, seios doloridos ou mais cheios, inchaço, maior frequência urinária e sensibilidade a cheiros podem aparecer. Náusea pode começar agora, mas não ter enjoo também pode ser totalmente normal.',
    emotional: 'A gravidez começa a ficar mais concreta. É comum alternar entusiasmo com ansiedade sobre saúde, exames e futuro; irritabilidade ou maior sensibilidade emocional também podem aparecer.',
  },
  6: {
    physical: 'Náusea e vômitos ficam mais comuns nesta fase, junto com cansaço, alterações de apetite, sensibilidade a cheiros, seios doloridos, salivação maior e vontade de urinar com frequência.',
    emotional: 'Sintomas físicos podem reduzir a energia e a tolerância ao estresse. Humor mais instável, preocupação e necessidade maior de descanso e acolhimento são possíveis.',
  },
  7: {
    physical: 'Náusea, distensão abdominal, gases, constipação, cansaço e mudanças nas mamas podem continuar. O volume de sangue começa a aumentar gradualmente, mesmo sem uma barriga visível.',
    emotional: 'A adaptação à nova rotina pode gerar sensação de vulnerabilidade ou preocupação. Algumas gestantes se sentem muito conectadas à gravidez; outras ainda não, e ambas as experiências são possíveis.',
  },
  8: {
    physical: 'O útero cresce, embora ainda fique dentro da pelve. Náusea, cansaço, seios sensíveis, urina frequente e corrimento vaginal claro ou esbranquiçado podem persistir.',
    emotional: 'Oscilações de humor podem ficar perceptíveis nesta fase. Alterações no sono, náusea e fadiga também podem afetar paciência, concentração e disposição.',
  },
  9: {
    physical: 'A cintura pode começar a parecer diferente por inchaço, mesmo sem uma barriga típica de gestação. Náusea, azia, constipação, cansaço e veias mais aparentes nas mamas podem ocorrer.',
    emotional: 'É comum pensar mais sobre mudanças no corpo, exames e segurança da gestação. Ansiedade ocasional pode coexistir com entusiasmo e expectativa.',
  },
  10: {
    physical: 'Inchaço, gases, constipação, azia, náusea, cansaço e maior corrimento vaginal podem continuar. Algumas pessoas começam a perceber roupas mais apertadas.',
    emotional: 'A rotina de sintomas pode cansar emocionalmente. É possível sentir alívio após exames, mas também surgir novas preocupações conforme a gestação avança.',
  },
  11: {
    physical: 'Náusea e fadiga ainda podem estar fortes, embora em algumas gestantes comecem a melhorar. Dor de cabeça, tontura leve, constipação e sensibilidade mamária podem ocorrer.',
    emotional: 'O fim do primeiro trimestre se aproxima e isso pode trazer alívio. Ainda assim, preocupações sobre exames, desenvolvimento do bebê e mudanças na vida são comuns.',
  },
  12: {
    physical: 'O útero começa a subir para fora da pelve. Para muitas gestantes, náusea e exaustão começam a aliviar nas próximas semanas; para outras, persistem por mais tempo.',
    emotional: 'Algumas pessoas sentem mais segurança ao chegar ao fim do primeiro trimestre. O humor pode estabilizar, mas não existe obrigação de se sentir mais tranquila nesta semana.',
  },
  13: {
    physical: 'Energia e apetite podem melhorar e a náusea pode diminuir. Alterações nas gengivas, congestão nasal, tontura ao levantar e crescimento gradual da barriga podem aparecer.',
    emotional: 'Com menos sintomas em algumas gestantes, o bem-estar emocional pode melhorar. Também é comum começar a pensar mais em enxoval, rotina, trabalho e mudanças familiares.',
  },
  14: {
    physical: 'A barriga pode começar a ficar mais evidente. O apetite pode aumentar e podem surgir pontadas leves nas laterais do abdome pelo estiramento dos ligamentos que sustentam o útero.',
    emotional: 'Para algumas pessoas começa uma fase emocionalmente mais estável. Mudanças corporais podem trazer orgulho, curiosidade ou insegurança com a imagem corporal.',
  },
  15: {
    physical: 'O crescimento uterino fica mais perceptível. Congestão nasal, sensibilidade gengival, aumento do apetite e pequenas mudanças de pele podem ocorrer.',
    emotional: 'A gestação pode parecer mais real conforme o corpo muda. É comum alternar empolgação com preocupação sobre exames do segundo trimestre.',
  },
  16: {
    physical: 'A barriga cresce e podem surgir dores leves de ligamento, desconforto lombar e tontura ocasional. Algumas gestantes começam a notar movimentos muito sutis do bebê.',
    emotional: 'Perceber os primeiros movimentos pode fortalecer o vínculo, mas não senti-los ainda também é comum. Expectativa e ansiedade podem aumentar antes de ultrassons importantes.',
  },
  17: {
    physical: 'A pele do abdome começa a esticar mais e estrias podem surgir ou não. Dor lombar, aumento do apetite e sensação de peso abdominal podem ficar mais perceptíveis.',
    emotional: 'Mudanças rápidas no corpo podem mexer com autoestima e imagem corporal. Conversas acolhedoras e sem julgamento costumam ajudar bastante nesta fase.',
  },
  18: {
    physical: 'Dor nas costas, sensação de desequilíbrio, tontura ao levantar rápido e aumento progressivo da barriga podem ocorrer. Movimentos fetais podem ficar mais fáceis de reconhecer.',
    emotional: 'Sentir o bebê pode tornar a experiência mais concreta e emocionante. Ao mesmo tempo, exames e decisões do pré-natal podem elevar a ansiedade temporariamente.',
  },
  19: {
    physical: 'Azia, cãibras, dor lombar e dor de ligamento redondo podem aparecer. A barriga cresce e a postura começa a mudar para compensar o novo centro de gravidade.',
    emotional: 'Pode haver maior conexão com o bebê, mas também preocupações com parto, trabalho e organização da vida. Essas emoções podem coexistir.',
  },
  20: {
    physical: 'Na metade da gestação, os movimentos podem ficar mais reconhecíveis. Dor lombar, cãibras, azia e alterações de pele são frequentes em muitas gestantes.',
    emotional: 'Os movimentos costumam tornar a gravidez mais concreta. Algumas pessoas ficam mais tranquilas; outras passam a observar o corpo e o bebê com mais atenção e preocupação.',
  },
  21: {
    physical: 'A barriga cresce de forma mais evidente. Azia, dor nas costas, cãibras e contrações de treinamento ocasionais podem começar em algumas gestantes.',
    emotional: 'A percepção dos movimentos pode fortalecer vínculo e confiança, mas mudanças corporais e expectativas externas também podem aumentar a pressão emocional.',
  },
  22: {
    physical: 'Estrias, coceira leve na pele esticada, desconforto pélvico, dor lombar e hemorroidas podem aparecer. A intensidade varia bastante entre gestantes.',
    emotional: 'O corpo em transformação pode afetar autoestima e sexualidade de maneiras diferentes. Comunicação aberta com o parceiro ajuda a reduzir cobranças e mal-entendidos.',
  },
  23: {
    physical: 'Pode surgir inchaço discreto em pés e tornozelos, especialmente ao fim do dia. Dor lombar, azia e sensação de peso abdominal podem ficar mais presentes.',
    emotional: 'A gestação pode entrar numa fase de maior planejamento. É comum pensar em finanças, rotina, parto, casa e cuidados com o bebê com mais frequência.',
  },
  24: {
    physical: 'Azia, cãibras, dor nas costas, alterações de pele e aumento gradual do inchaço podem ocorrer. O crescimento uterino começa a pressionar mais o sistema digestivo.',
    emotional: 'O aumento dos movimentos pode ser reconfortante, mas também despertar atenção constante ao bebê. Ansiedade leve antes de consultas e exames é comum.',
  },
  25: {
    physical: 'Refluxo, desconforto lombar ou pélvico, dificuldade para encontrar posição para dormir e cãibras podem ficar mais frequentes.',
    emotional: 'Sono pior pode afetar humor e paciência. É comum começar a pensar mais no parto e em como será a adaptação depois do nascimento.',
  },
  26: {
    physical: 'A expansão do útero pode causar falta de ar leve aos esforços, pressão nas costelas, dor lombar, refluxo e sono menos confortável.',
    emotional: 'A proximidade do terceiro trimestre pode trazer entusiasmo e uma sensação de que o tempo está acelerando. Também podem surgir preocupações mais concretas com parto e cuidados.',
  },
  27: {
    physical: 'Cãibras, inchaço discreto, dor nas costas, azia e dificuldade para dormir podem persistir. Os movimentos do bebê costumam ficar mais fortes.',
    emotional: 'A passagem para o terceiro trimestre pode aumentar a antecipação. Sono e desconforto físico podem deixar emoções mais intensas em alguns dias.',
  },
  28: {
    physical: 'Falta de ar leve, refluxo, dor lombar, cansaço e contrações de treinamento podem ficar mais perceptíveis. Os movimentos do bebê tendem a ser fortes e regulares para a própria gestante.',
    emotional: 'O parto começa a parecer mais próximo. É comum sentir mistura de empolgação, ansiedade, necessidade de organização e preocupação com a saúde do bebê.',
  },
  29: {
    physical: 'O cansaço pode voltar com mais força. Dor lombar, pressão abdominal, urina frequente e desconforto para dormir podem aumentar.',
    emotional: 'Menos sono e mais limitações físicas podem reduzir tolerância ao estresse. Apoio prático no dia a dia passa a ter ainda mais impacto no bem-estar.',
  },
  30: {
    physical: 'Azia, falta de ar leve, inchaço, cansaço e dificuldade para dormir são queixas comuns. A barriga maior altera postura e mobilidade.',
    emotional: 'Pode surgir maior urgência para preparar casa, documentos e rotina. Algumas gestantes experimentam o chamado comportamento de “ninho”, outras não.',
  },
  31: {
    physical: 'Pressão pélvica, dor nas costas, contrações de treinamento e vazamento de pequenas quantidades de colostro podem acontecer em algumas gestantes.',
    emotional: 'A aproximação do nascimento pode intensificar pensamentos sobre parto, maternidade e recuperação. Falar sobre medos concretos costuma ser mais útil do que minimizar preocupações.',
  },
  32: {
    physical: 'Falta de ar, refluxo, cansaço, inchaço e dificuldade para dormir podem continuar. O espaço abdominal fica cada vez mais disputado pelo útero em crescimento.',
    emotional: 'A expectativa pode aumentar junto com a fadiga. Algumas pessoas ficam mais introspectivas ou focadas em organização e segurança.',
  },
  33: {
    physical: 'Pressão pélvica, vontade de urinar, dor lombar e formigamento nas mãos por síndrome do túnel do carpo podem ocorrer em algumas gestantes.',
    emotional: 'A proximidade do parto pode trazer preocupações com dor, hospital, amamentação e adaptação. Informação confiável e plano flexível ajudam a reduzir incerteza.',
  },
  34: {
    physical: 'Cansaço, sono interrompido, pressão pélvica, dor lombar e contrações de treinamento podem ficar mais frequentes conforme o corpo se prepara para o fim da gestação.',
    emotional: 'Pode haver impaciência, ansiedade e vontade de deixar tudo pronto. Também é comum precisar de mais pausas e menos compromissos.',
  },
  35: {
    physical: 'Falta de ar, azia, urina frequente, inchaço e pressão nas costelas podem estar fortes. O bebê ocupa grande parte do espaço abdominal.',
    emotional: 'A reta final pode alternar entusiasmo com cansaço e receio do parto. Apoio emocional e divisão real das tarefas tornam-se especialmente importantes.',
  },
  36: {
    physical: 'Se o bebê descer mais para a pelve, respirar pode ficar um pouco mais fácil, enquanto pressão pélvica e vontade de urinar podem aumentar. Isso não acontece no mesmo momento para todas.',
    emotional: 'A expectativa pelo nascimento cresce. É comum revisar planos, sentir ansiedade por sinais de trabalho de parto e querer maior previsibilidade.',
  },
  37: {
    physical: 'Pressão pélvica, dor lombar, contrações de treinamento e aumento de corrimento podem ocorrer. Mudanças no colo do útero geralmente não são percebidas sem avaliação.',
    emotional: 'A sensação de “pode acontecer a qualquer momento” pode aumentar a vigilância e atrapalhar o sono. Alternar ansiedade e empolgação é comum.',
  },
  38: {
    physical: 'Desconforto pélvico, dificuldade para dormir, urina frequente e contrações irregulares podem ficar mais evidentes. O corpo segue se preparando para o trabalho de parto.',
    emotional: 'A espera pode gerar impaciência e cansaço mental. Planos flexíveis ajudam, porque o momento exato do parto não é previsível.',
  },
  39: {
    physical: 'A gestação entra no período de termo completo. Pressão pélvica, contrações, dor lombar e mudanças no corrimento podem anteceder o trabalho de parto, mas os sinais variam.',
    emotional: 'Expectativa, ansiedade e desejo de conhecer o bebê podem ficar intensos. Sono fragmentado e desconforto físico também podem afetar o humor.',
  },
  40: {
    physical: 'Contrações de treinamento ou de trabalho de parto, dor lombar, pressão pélvica e alterações no corrimento podem ocorrer. O pré-natal acompanha de perto bem-estar materno e fetal nesta fase.',
    emotional: 'A espera pode ser emocionalmente desgastante. Alívio, ansiedade, impaciência e empolgação podem aparecer juntos enquanto o nascimento se aproxima.',
  },
};

function hormonalGuide(week: number) {
  if (week <= 5) {
    return 'O hCG começa a subir após a implantação e ajuda a manter a produção de progesterona. Progesterona e estrogênio também aumentam e contribuem para mudanças nas mamas, cansaço, digestão mais lenta e outros sintomas iniciais.';
  }
  if (week <= 8) {
    return 'O hCG costuma subir rapidamente nesta fase, enquanto progesterona e estrogênio permanecem elevados. Essa combinação está associada a muitos sintomas do primeiro trimestre, como náusea, fadiga e sensibilidade mamária.';
  }
  if (week <= 10) {
    return 'O hCG se aproxima do pico típico do primeiro trimestre. A placenta está amadurecendo e a produção hormonal da gestação passa por uma transição progressiva; sintomas podem continuar fortes ou variar bastante.';
  }
  if (week <= 12) {
    return 'Depois do pico do primeiro trimestre, o hCG tende a estabilizar ou cair gradualmente. A placenta assume cada vez mais a produção hormonal, e algumas gestantes começam a perceber melhora de náusea e fadiga.';
  }
  if (week <= 20) {
    return 'Estrogênio e progesterona continuam altos para sustentar a gestação. Relaxina e outras adaptações hormonais ajudam ligamentos e tecidos a se acomodarem, enquanto o volume de sangue e o metabolismo materno aumentam.';
  }
  if (week <= 27) {
    return 'Os hormônios produzidos pela placenta continuam sustentando o crescimento fetal e alterando o metabolismo materno. A resistência à insulina aumenta de forma fisiológica nesta fase, por isso o rastreio de diabetes gestacional costuma ocorrer no segundo trimestre.';
  }
  if (week <= 34) {
    return 'Progesterona e estrogênio permanecem elevados. Prolactina aumenta progressivamente preparando as mamas para a lactação, e a relaxina continua contribuindo para maior frouxidão ligamentar e adaptações da pelve.';
  }
  if (week <= 37) {
    return 'O organismo entra na preparação final: estrogênio, progesterona, relaxina e prolactina seguem atuando, enquanto o útero e o colo ficam progressivamente mais responsivos aos sinais que participarão do trabalho de parto.';
  }
  return 'Na reta final, a preparação para o parto envolve mudanças na sensibilidade do útero e do colo e participação de prostaglandinas e ocitocina. Não existe uma “virada hormonal” previsível em um dia específico; o processo varia entre gestantes.';
}

function trimesterLabel(week: number) {
  if (week <= 13) return '1º TRIMESTRE';
  if (week <= 27) return '2º TRIMESTRE';
  return '3º TRIMESTRE';
}

function guideForWeek(week: number) {
  const normalized = Math.min(40, Math.max(4, week));
  return WEEK_GUIDES[normalized] ?? WEEK_GUIDES[40];
}

export default function PregnancyMaternalChanges() {
  const pregnancy = useMemo(() => getPregnancyStatus(), []);
  const week = Math.max(4, pregnancy.gestationalWeek);
  const guide = useMemo(() => guideForWeek(week), [week]);
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hostId = 'pregnancy-maternal-changes-host';

    const syncHost = () => {
      const hud = document.querySelector('.pregnancyHUD');
      const existing = document.getElementById(hostId);

      if (!hud) {
        existing?.remove();
        setHost(null);
        return;
      }

      if (existing && existing.previousElementSibling === hud) {
        setHost(existing);
        return;
      }

      existing?.remove();
      const nextHost = document.createElement('div');
      nextHost.id = hostId;
      hud.insertAdjacentElement('afterend', nextHost);
      setHost(nextHost);
    };

    syncHost();
    const observer = new MutationObserver(syncHost);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.getElementById(hostId)?.remove();
    };
  }, []);

  if (!host) return null;

  return createPortal(
    <section className="maternalChangesPanel" aria-label={`Mudanças maternas da semana ${week}`}>
      <div className="maternalChangesHeader">
        <div>
          <span>MATERNAL STATUS</span>
          <h3>Mudanças da Bruna · Semana {week}</h3>
        </div>
        <b>{trimesterLabel(week)}</b>
      </div>

      <p className="maternalIntro">
        O painel acompanha a semana gestacional automaticamente. São mudanças possíveis e comuns — não uma lista de sintomas que precisam acontecer.
      </p>

      <div className="maternalChangesGrid">
        <article>
          <div className="maternalIcon">🫶</div>
          <small>MUDANÇAS FÍSICAS</small>
          <h4>O corpo nesta semana</h4>
          <p>{guide.physical}</p>
        </article>

        <article>
          <div className="maternalIcon">🧬</div>
          <small>MUDANÇAS HORMONAIS</small>
          <h4>Hormônios em ação</h4>
          <p>{hormonalGuide(week)}</p>
        </article>

        <article>
          <div className="maternalIcon">🧠</div>
          <small>EMOCIONAL / PSICOLÓGICO</small>
          <h4>O que ela pode sentir</h4>
          <p>{guide.emotional}</p>
        </article>
      </div>

      <div className="maternalRealityCheck">
        <strong>VARIAÇÃO É NORMAL</strong>
        <p>
          Duas gestações na mesma semana podem ser completamente diferentes. Ter poucos sintomas, não ter enjoo ou não apresentar mudança de humor não significa, por si só, que exista algo errado. Sintomas intensos, sangramento, dor forte, desmaio, febre ou qualquer piora preocupante devem ser avaliados pela equipe de pré-natal.
        </p>
      </div>

      <div className="maternalSources">
        <span>REFERÊNCIAS</span>
        <a href="https://www.acog.org/womens-health/infographics/changes-during-pregnancy" target="_blank" rel="noreferrer">ACOG ↗</a>
        <a href="https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/" target="_blank" rel="noreferrer">NHS ↗</a>
        <a href="https://womenshealth.gov/pregnancy/youre-pregnant-now-what/stages-pregnancy" target="_blank" rel="noreferrer">Office on Women&apos;s Health ↗</a>
      </div>
    </section>,
    host,
  );
}
