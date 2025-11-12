export interface Criatura {
  id: string;
  nome: string;
  tipo: "Sangue" | "Morte" | "Energia" | "Conhecimento";
  hp: number;
  armor: number;
  ataques: {
    nome: string;
    dados: string; // Ex: "3d10", "2d6", "1d12"
    descricao: string;
  }[];
  defesa: number;
  fraquezas: string[];
  descricao: string;
  comportamento: string;
  raridade: "Comum" | "Raro" | "Épico" | "Mítico";
}

export const criaturas: Criatura[] = [
  // ===== CRIATURAS ORIGINAIS =====
  {
    id: "lodo-vivo",
    nome: "O Lodo Vivo",
    tipo: "Sangue",
    hp: 250,
    armor: 10,
    ataques: [
      {
        nome: "Engolfamento",
        dados: "4d10",
        descricao: "O lodo se expande rapidamente tentando engolir o alvo inteiro"
      },
      {
        nome: "Corrosão",
        dados: "2d8",
        descricao: "Gotículas ácidas são lançadas em direção ao inimigo"
      }
    ],
    defesa: 12,
    fraquezas: ["Fogo acima de 800°C", "Ácido sulfúrico concentrado", "Luz ultravioleta extrema"],
    descricao: `Uma massa viscosa de cor acinzentada-marrom que se move como se possuísse vida própria. 
Seu corpo é formado por uma substância orgânica desconhecida, com textura de lama grossa mas que consegue 
se expandir e contrair. Ocasionalmente formam-se o que parecem ser olhos ou bocas na sua superfície, 
piscando antes de desaparecerem. Um cheiro de podridão e fungos decompostos emana constantemente.
Tem aproximadamente 3 metros de diâmetro quando repousa.`,
    comportamento: "Lento mas implacável. Tenta absorver tudo que toca. Se ferido, divide-se em múltiplas entidades menores.",
    raridade: "Épico"
  },

  {
    id: "sussurros-escuridao",
    nome: "Sussurros na Escuridão",
    tipo: "Conhecimento",
    hp: 150,
    armor: 0,
    ataques: [
      {
        nome: "Ataque Psíquico",
        dados: "3d8",
        descricao: "Vozes penetrantes invadem a mente causando dano mental e desorientação"
      },
      {
        nome: "Dreno de Sanidade",
        dados: "1d6",
        descricao: "Extrai gradualmente memórias e sanidade do alvo"
      }
    ],
    defesa: 20,
    fraquezas: ["Luz intensa", "Ruído branco de alta frequência", "Sons de instrumento metálico"],
    descricao: `Uma entidade quase invisível que existe principalmente como uma presença percebida. 
Quando parcialmente visível, manifesta-se como sombras que sussurram e se movem contra a lógica da luz. 
Tons de cinza e preto fluem ao seu redor como água. Ocasionalmente formam-se formas quase-humanoides 
que dissolvem-se rapidamente. O som que emite é inumano - múltiplas vozes sobrepostas sussurrando em tons que 
causa incômodo físico.`,
    comportamento: "Invisível a maior parte do tempo. Ataca mentalmente. Foge de luz forte e sons agudos.",
    raridade: "Épico"
  },

  {
    id: "boneco-vidro",
    nome: "O Boneco de Vidro",
    tipo: "Morte",
    hp: 180,
    armor: 15,
    ataques: [
      {
        nome: "Estocada de Vidro",
        dados: "3d12",
        descricao: "Estende partes afiadas do seu corpo em um ataque perfurante rápido"
      },
      {
        nome: "Fragmentação",
        dados: "2d6",
        descricao: "Fragmentos cortantes do corpo são disparados em todas as direções"
      }
    ],
    defesa: 14,
    fraquezas: ["Altas temperaturas (acima de 500°C)", "Explosivos", "Sons muito altos (acima de 140dB)"],
    descricao: `Uma forma humanóide construída inteiramente de vidro translúcido de cor âmbar. 
Seu corpo é feito de múltiplas camadas de vidro que refletem luz de forma hipnotizante. 
No interior, pode-se ver mecanismos de metal oxidado que se movem ritmicamente, pulsando como um coração. 
Seu "rosto" é liso sem feições, mas ocasionalmente forma-se uma boca no vidro através da qual sai um som 
de vidro quebrando. Altura aproximada: 2 metros. Seus movimentos são rígidos e mecânicos.`,
    comportamento: "Patrulha repetitivamente seu território. Ataca com velocidade quando ameaçado.",
    raridade: "Épico"
  },

  {
    id: "deus-morte",
    nome: "O Deus da Morte",
    tipo: "Morte",
    hp: 999,
    armor: 25,
    ataques: [
      {
        nome: "Toque da Morte",
        dados: "10d10",
        descricao: "Qualquer coisa que toca instantaneamente envelhece séculos em segundos"
      },
      {
        nome: "Visão Mortal",
        dados: "5d12",
        descricao: "Aqueles que encontram os olhos dessa entidade veem sua própria morte"
      }
    ],
    defesa: 99,
    fraquezas: ["DESCONHECIDO"],
    descricao: `Uma silhueta humanóide de aproximadamente 2.5 metros feita completamente de escuridão. 
Não reflete luz - absorve. Onde quer que esteja, a luz próxima diminui gradualmente. Dois olhos brilham 
como brasas mortas dentro da escuridão. Ao seu redor, o próprio ar parece envelhecer e se decompor. 
Plantas murcham, alimentos apodrecem, metal enferruja tudo na presença dela. Um aroma de tumba e morte permeia tudo.`,
    comportamento: "Não ataca sem razão. Existe em múltiplos planos simultaneamente. Comunicação possível mas perigosa.",
    raridade: "Mítico"
  },

  {
    id: "copiadores",
    nome: "Os Copiadores",
    tipo: "Conhecimento",
    hp: 120,
    armor: 5,
    ataques: [
      {
        nome: "Absorção de Forma",
        dados: "2d10",
        descricao: "Copia um aspecto físico ou mental do alvo, ganhando suas habilidades temporariamente"
      },
      {
        nome: "Ataque Coordenado",
        dados: "3d8",
        descricao: "Múltiplos copiadores atacam simultaneamente em perfeita sincronia"
      }
    ],
    defesa: 18,
    fraquezas: ["Espelhos antigos", "Luz ultravioleta", "Separação física (evita cópias se isolado)"],
    descricao: `Entidades que se parecem perfeitamente com seus alvos - até demais. Copiam não apenas 
aparência mas maneirismos, sotaque, até memórias. Seus corpos têm uma qualidade ligeiramente "errada" 
- as proporções estão sempre 0.5% fora, criando um incômodo inefável ao observá-los. Seus olhos não 
piscam. Suas sombras se movem independentemente do corpo. Aparecem sempre em grupos sincronizados.`,
    comportamento: "Inteligentes e manipuladoras. Cercam o alvo antes de atacar. Podem ser separadas para enfraquecê-las.",
    raridade: "Épico"
  },

  {
    id: "nevoa-cinzenta",
    nome: "Névoa Cinzenta",
    tipo: "Energia",
    hp: 200,
    armor: 0,
    ataques: [
      {
        nome: "Sufocamento",
        dados: "2d12",
        descricao: "Enche os pulmões da vítima, causando asfixia gradual"
      },
      {
        nome: "Dreno de Memória",
        dados: "3d6",
        descricao: "Dissolve lentamente as recordações de quem está dentro dela"
      }
    ],
    defesa: 11,
    fraquezas: ["Ventilação forte", "Calor acima de 60°C", "Rituais de dispersão"],
    descricao: `Uma nuvem densa de cor cinzenta uniforme que se move com inteligência aparente. 
Não é exatamente um gás - tem uma consistência leitosa que é quase tangível. Dentro da névoa, 
podem-se ver formas vagas que se dissolvem quando observadas diretamente. Um frio penetrante 
irradia de seu corpo. Onde quer que passe, objetos ganham uma pátina de orvalho anormal e 
plantas morrem em minutos.`,
    comportamento: "Expansiva e lenta. Busca ambientes fechados para expandir-se. Inteligência limitada mas adaptável.",
    raridade: "Épico"
  },

  // ===== CRIATURAS NOVAS =====
  {
    id: "pescador-almas",
    nome: "Pescador de Almas",
    tipo: "Morte",
    hp: 220,
    armor: 8,
    ataques: [
      {
        nome: "Anzol Espiritual",
        dados: "4d8",
        descricao: "Um anzol incandescente é lançado em direção ao peito do alvo para 'pescar' sua alma"
      },
      {
        nome: "Corrente de Grilhões",
        dados: "2d10",
        descricao: "Correntes espectrais tentam paralisar e puxar o alvo para o interior de sua dimensão"
      }
    ],
    defesa: 13,
    fraquezas: ["Água benta", "Símbolos religiosos", "Fogo sagrado"],
    descricao: `Uma criatura humanóide coberta por uma túnica esfarrapada feita de espinhos incandescentes. 
Seu corpo está permanentemente em chamas frias de cor azul. Onde deveria estar o rosto há apenas um vazio 
escuro com dois olhos como brasas. Suas mãos terminam em dedos longos com garras de osso. À sua volta pairam 
correntes espectrais que se retorcem como cobras. Altura: 1.8 metros. Emite um som constante como de água fervendo.`,
    comportamento: "Patrulha as ruas a noite. Busca alvos solitários. Inteligente e metódico.",
    raridade: "Raro"
  },

  {
    id: "incubo-noturno",
    nome: "Incubo Noturno",
    tipo: "Conhecimento",
    hp: 140,
    armor: 6,
    ataques: [
      {
        nome: "Garras Sobrenaturais",
        dados: "3d10",
        descricao: "Garras que deixam feridas que não cicatrizam normalmente"
      },
      {
        nome: "Sussurro Hipnótico",
        dados: "1d12 + dreno permanente de sanidade",
        descricao: "Induz pesadelos e delírios até o alvo adormecer"
      }
    ],
    defesa: 16,
    fraquezas: ["Sal em círculos", "Sons de sinos de prata", "Nomes verdadeiros"],
    descricao: `Uma criatura com forma vaguamente humanóide coberta em pele negra brilhante. Seu corpo 
é musculoso e contorcido, com pernas traseiras como de uma cabra. Tem alas membranosas que parecem feitas 
de fumaça congelada. Seus olhos são completamente brancos sem pupilas. A criatura exala um perfume doce 
e cáustico que induz torpor. Possui cascos de metal negro nos pés.`,
    comportamento: "Noturno. Ataca enquanto vítimas dormem. Foge durante o dia.",
    raridade: "Raro"
  },

  {
    id: "golem-osso",
    nome: "Golem de Osso",
    tipo: "Morte",
    hp: 280,
    armor: 18,
    ataques: [
      {
        nome: "Socos Ósseos",
        dados: "2d12",
        descricao: "Punhos feitos de osso comprimido quebram tudo que acertam"
      },
      {
        nome: "Estraçalhamento",
        dados: "3d6 x 2",
        descricao: "Tenta separar o alvo em pedaços com força bruta"
      }
    ],
    defesa: 10,
    fraquezas: ["Fogo intenso", "Ácido", "Desintegração mágica"],
    descricao: `Uma construção impossível de um esqueleto humanóide de 3 metros de altura. Os ossos parecem 
ser de múltiplas criaturas diferentes, costurados e amarrados com fios de ouro negro que brilham fracamente. 
Não tem pele - apenas estrutura óssea exposta. Onde há articulações há símbolos paranormais entalhados que 
pulsam com luz verde. A criatura se move com sons de ossos rangendo e correntes.`,
    comportamento: "Sentinela. Patrulha uma área fixa. Ataca qualquer um que atravesse seu domínio.",
    raridade: "Épico"
  },

  {
    id: "Sanguissuga-Temporal",
    nome: "Sanguissuga Temporal",
    tipo: "Sangue",
    hp: 160,
    armor: 4,
    ataques: [
      {
        nome: "Perfuração Temporal",
        dados: "4d6",
        descricao: "Perfura a vítima fazendo-a envelhecer 1-5 anos por acerto"
      },
      {
        nome: "Sucção de Anos",
        dados: "2d8 + envelhecimento",
        descricao: "Suga anos da vida do alvo para recarregar sua própria vitalidade"
      }
    ],
    defesa: 14,
    fraquezas: ["Âmbar com insetos pré-históricos dentro", "Água de fósseis", "Cristais de tempo congelado"],
    descricao: `Uma criatura semelhante a uma sanguessuga gigante de aproximadamente 1.5 metros. 
Sua pele é translúcida permitindo ver o que parece ser sangue de cores diferentes ao longo de suas veias - 
alguns partes parecem jovens (sangue vermelho vivo), outras antigas (sangue marrom e espesso). 
Tem múltiplas bocas ao longo de seu corpo, cada uma com dentes de cristal. Onde ela passa, plantas envelhecem 
e morrem. Emite um aroma de ar seco e vento antigo.`,
    comportamento: "Alimenta-se de tempo/vida. Lenta mas persistente. Prioriza alvos mais jovens.",
    raridade: "Raro"
  },

  {
    id: "minotauro-sombra",
    nome: "Minotauro da Sombra",
    tipo: "Sangue",
    hp: 350,
    armor: 12,
    ataques: [
      {
        nome: "Investida com Chifres",
        dados: "3d12",
        descricao: "Carga frontal devastadora com chifres que atravessam armaduras"
      },
      {
        nome: "Machado Paranormal",
        dados: "2d10 + 1d10",
        descricao: "Ataque com machado que existem em múltiplos planos"
      },
      {
        nome: "Pisotear",
        dados: "2d8 x múltiplos alvos",
        descricao: "Salta e pisoteia todos ao seu redor"
      }
    ],
    defesa: 13,
    fraquezas: ["Fogo sagrado", "Som de buzina de ouro", "Marcas de Áriadne"],
    descricao: `Uma criatura humanóide com aproximadamente 2.5 metros cuja cabeça é a de um touro preto com 
chifres contorcidos. Seu corpo é musculoso e coberto em pele vermelha escura. Possui cascos fendidos e 
uma cauda de corda. Seus olhos são completamente negros sem brilho. Carrega um machado negro paranormal que 
existe em múltiplos planos simultaneamente. Emana calor abrasador.`,
    comportamento: "Protetor territorial agressivo. Persegue intrusos até o morte ou até sair de seu domínio.",
    raridade: "Épico"
  },

  {
    id: "aracnideo-cerebro",
    nome: "Aracnídeo Cérebro",
    tipo: "Conhecimento",
    hp: 180,
    armor: 11,
    ataques: [
      {
        nome: "Presas Psíquicas",
        dados: "3d8",
        descricao: "Injeção de toxina que causa alucinações e distúrbios neurológicos"
      },
      {
        nome: "Colheita de Sinapses",
        dados: "2d10",
        descricao: "Extrai redes neurais do alvo para consumo"
      },
      {
        nome: "Teias Mentais",
        dados: "1d12 x 3 alvos",
        descricao: "Lança teias invisíveis que conectam as mentes de múltiplas vítimas"
      }
    ],
    defesa: 15,
    fraquezas: ["Pesticida de prata", "Fogo", "Ruído desconexo"],
    descricao: `Uma aranha gigante do tamanho de um cavalo com a cabeça de um cérebro humano exposto 
brilhando através de um crânio de vidro transparente. Suas oito patas são articuladas e terminam em estruturas 
semelhantes a dedos. Sua carapaça é de cor púrpura brilhante. De sua boca sai uma teia feita de neurônios vivos 
que brilham enquanto se tecem. Os olhos irradiam inteligência inquietante.`,
    comportamento: "Inteligência sobrenatural. Observa e aprende. Tenta capturar vivos para experiência neurológica.",
    raridade: "Épico"
  },

  {
    id: "leviata-fome",
    nome: "Leviatã da Fome",
    tipo: "Sangue",
    hp: 420,
    armor: 16,
    ataques: [
      {
        nome: "Mandíbula Abismal",
        dados: "4d12",
        descricao: "Mandíbula que pode engolir vítimas inteiras ou rasgar em pedaços"
      },
      {
        nome: "Espinhos de Barbatana",
        dados: "3d10 x 2",
        descricao: "Lança múltiplos espinhos afiados em rápida sucessão"
      },
      {
        nome: "Sugação de Vácuo",
        dados: "2d8 + aprisionamento",
        descricao: "Cria vácuo puxando tudo em sua direção"
      }
    ],
    defesa: 11,
    fraquezas: ["Âncoras de ferro", "Arpões de ouro sagrado", "Água benta em alta concentração"],
    descricao: `Uma criatura aquática de proporções bíblicas. Seu corpo é semelhante a um crocodilo, 
mas com aproximadamente 8 metros de comprimento. Sua pele é uma mistura de escamas pretas e cinzentas 
com marcas que parecem feridas antigas. Seus olhos são amarelos sulfurosos e semiavermelhados. A boca é 
uma fenda impossível repleta de dentes como garfos. Nadadeiras traseiras parecem terminar em garras. 
Onde ela passa, a água ferve.`,
    comportamento: "Predador apex. Fome constante. Inteligência básica mas foco absoluto em presas.",
    raridade: "Épico"
  },

  {
    id: "fantasma-remorso",
    nome: "Fantasma do Remorso",
    tipo: "Morte",
    hp: 110,
    armor: 2,
    ataques: [
      {
        nome: "Toque de Culpa",
        dados: "2d8",
        descricao: "Força psicológica que manifesta culpa do alvo em forma de dano físico"
      },
      {
        nome: "Manifestação de Pecados",
        dados: "1d10 x número de vítimas que o alvo prejudicou",
        descricao: "Invoca espectros das vítimas anteriores do alvo para atacarem"
      }
    ],
    defesa: 17,
    fraquezas: ["Absolvição sincera", "Redação de seus crimes", "Confronto com vítima verdadeira"],
    descricao: `Uma forma humanóide feita inteiramente de fumaça escura que toma a forma vaga da pessoa 
que era em vida. Sua expressão é de sofrimento eterno. Dentro de seu corpo pulsam símbolos que representam 
seus crimes. Ocasionalmente sua forma se desfaz revelando brevemente cenas de seus delitos. Um som de choro 
e sussurros acusadores emana constantemente.`,
    comportamento: "Persegue específicos. Conhece detalhes íntimos da vítima. Pode ser apaziguado com arrependimento real.",
    raridade: "Raro"
  },

  {
    id: "mutante-experimental",
    nome: "Mutante Experimental",
    tipo: "Sangue",
    hp: 190,
    armor: 7,
    ataques: [
      {
        nome: "Transformação Adaptativa",
        dados: "2d10 + adapta defesa por turno",
        descricao: "A criatura muta para resistir ao dano anterior"
      },
      {
        nome: "Projeção de Pus Corrosivo",
        dados: "3d6",
        descricao: "Lança material corrosivo que dissolve matéria orgânica"
      },
      {
        nome: "Regeneração Acelerada",
        dados: "Cura 1d8 a cada turno",
        descricao: "Regenera ferimentos rapidamente"
      }
    ],
    defesa: 12,
    fraquezas: ["Congelamento extremo", "Radiação gama", "Agentes antimutação"],
    descricao: `Uma criatura humanóide de forma inconsistente feita de carne viva que constantemente se reconstrói. 
Múltiplos olhos brotam e desaparecem de seu corpo. Seus membros são longos e articulados de formas impossíveis. 
A pele parece estar simultaneamente em decomposição e crescimento. Ocasionalmente bactérias vivas podem ser vistas 
se movendo sob a pele. Emite um cheiro de laboratório químico e carne apodrecida.`,
    comportamento: "Primitivo mas adaptável. Evolui em combate. Mais forte quanto mais tempo persiste.",
    raridade: "Raro"
  },

  {
    id: "obelisco-vivo",
    nome: "Obelisco Vivo",
    tipo: "Energia",
    hp: 300,
    armor: 20,
    ataques: [
      {
        nome: "Descarga Paranormal",
        dados: "3d12",
        descricao: "Lança ondas de energia paranormal em padrões geométricos"
      },
      {
        nome: "Tração de Símbolos",
        dados: "2d10 + aprisionamento em símbolos",
        descricao: "Símbolos antigos saem do obelisco tentando prender o alvo"
      }
    ],
    defesa: 9,
    fraquezas: ["Destruição mágica do fundamento", "Queima de símbolos contidos", "Inversão de polaridade"],
    descricao: `Uma estrutura de pedra negra com aproximadamente 4 metros de altura em forma de obelisco. 
Sua superfície está coberta em símbolos paranormais que brilham em cores que não existem. O obelisco flutua 
ligeiramente acima do chão. Ocasionalmente a pedra transparece revelando estruturas internas pulsantes de energia. 
Ao seu redor o espaço parece distorcido como se a realidade tivesse dificuldade em manter consistência.`,
    comportamento: "Guardião de locais sagrados. Não se move. Ataca qualquer um que se aproxime além da distância de segurança.",
    raridade: "Épico"
  },

  {
    id: "principe-bruxaria",
    nome: "Príncipe da Bruxaria",
    tipo: "Conhecimento",
    hp: 240,
    armor: 9,
    ataques: [
      {
        nome: "Maldição Tripla",
        dados: "4d8",
        descricao: "Lança três maldições simultâneas que afetam corpo, mente e espírito"
      },
      {
        nome: "Transmutação Rápida",
        dados: "2d12",
        descricao: "Transforma partes do corpo do alvo em matéria inorgânica"
      },
      {
        nome: "Invocação de Servos",
        dados: "1d10 x número de servos",
        descricao: "Convoca criaturas menores para lutar no lugar dele"
      }
    ],
    defesa: 15,
    fraquezas: ["Inversão de feitiços", "Símbolo de proteção maior", "Nome verdadeiro revelado"],
    descricao: `Uma figura humanóide feita aparentemente de fumaça violeta que flutua alguns palmos do chão. 
Seu rosto é formado por dois olhos brilhantes como estrelas negras. Veste uma capa de teia de aranha viva. 
Seus dedos são alongados com unhas que brilham como cristais afiados. Ao seu redor orbitam pequenos símbolos 
que giram lentamente. Emana um aroma de plantas queimadas e enxofre.`,
    comportamento: "Controlador. Prefere deixar servos fazerem o trabalho. Derrota estratégica e planejada.",
    raridade: "Épico"
  }
];
