// Dados completos para o Painel do Mestre - Ordem Paranormal
// Tudo pronto para narração, download e compartilhamento

export const mastermindData = {
  creatures: [
    {
      id: "creature-lodo-vivo",
      name: "O Lodo Vivo",
      type: "Substância Orgânica Anômala",
      difficulty: "Extremo",
      shortDescription: "Massa viscosa predatória que consome matéria orgânica",
      habitat: "Zonas de alta contaminação paranormal",
      description: `O Lodo Vivo é uma substância anômala de cor preta com reflexos esverdeados. Comporta-se como organismo vivo com inteligência coletiva primitiva. Capaz de se dividir, infiltrar e consumir qualquer forma de vida.`,
      abilities: [
        "Movimento coordenado",
        "Reprodução por divisão",
        "Consumo de matéria orgânica",
        "Aprendizado através de encontros repetidos"
      ],
      weaknesses: ["Fogo extremo (800°C+)", "Ácido sulfúrico concentrado"],
      combatStats: {
        hp: 250,
        armor: 10,
        attackDamage: 35,
        dodge: 5
      },
      loot: ["Amostra de Lodo (investigação)", "Protoplasma Consumido"]
    },
    {
      id: "creature-sussurro",
      name: "Sussurros na Escuridão",
      type: "Entidade Incorpórea",
      difficulty: "Alto",
      shortDescription: "Ser telepático que ataca através de sussurros incompreensíveis",
      habitat: "Locais escuros e silenciosos",
      description: `Entidade incorpórea sem forma física. Manifesta-se primariamente através de fenômenos auditivos. Seu ataque é fundamentalmente psicológico, explorando medos e segredos da vítima.`,
      abilities: [
        "Telepatia",
        "Imitação de vozes",
        "Indução de loucura",
        "Invisibilidade auditiva"
      ],
      weaknesses: ["Iluminação intensa", "Ruído branco", "Treinamento mental"],
      combatStats: {
        hp: 150,
        armor: 0,
        attackDamage: 25,
        dodge: 20
      },
      loot: ["Fragmento de Escuridão", "Essência de Medo"]
    },
    {
      id: "creature-boneco-vidro",
      name: "O Boneco de Vidro",
      type: "Construto Paranormal",
      difficulty: "Alto",
      shortDescription: "Entidade humanóide feita de vidro e metal. Movimento errático e mortal.",
      habitat: "Estruturas abandonadas, celeiros, fábricas",
      description: `Construto de aproximadamente 1,80m feito de fragmentos de vidro e metal enferrujado. Sem rosto, apenas vidro negro liso. Braços desproporcionalmente longos terminando em lâminas de vidro afiadas. Move-se com violência constante.`,
      abilities: [
        "Lacerações de vidro",
        "Movimento acelerado em espaços confinados",
        "Regeneração parcial",
        "Sensibilidade a vibrações"
      ],
      weaknesses: ["Explosivos de alto calibre", "Sons de alta frequência", "Derretimento localizado"],
      combatStats: {
        hp: 180,
        armor: 15,
        attackDamage: 40,
        dodge: 15
      },
      loot: ["Vidro Paranormal", "Metal Antigo", "Núcleo de Energia"]
    },
    {
      id: "creature-deus-morte",
      name: "O Deus da Morte",
      type: "Entidade Dimensional",
      difficulty: "Mítico",
      shortDescription: "Entidade de poder incalculável. Envelhecimento por toque. Destruição garantida.",
      habitat: "Câmaras ancestrais, portais temporais",
      description: `Humanóide de 3 metros feito de sombras solidificadas. Rosto sem características humanas distinguíveis. Emana aura de decadência temporal. Seu toque causa envelhecimento acelerado e morte instantânea. Uma das ameaças paranormais de maior nível catalogadas.`,
      abilities: [
        "Envelhecimento por toque",
        "Indução de loucura",
        "Regeneração completa",
        "Invulnerabilidade aparente",
        "Falha de equipamentos eletrônicos"
      ],
      weaknesses: ["Desconhecidas (requer pesquisa adicional)"],
      combatStats: {
        hp: 999,
        armor: 25,
        attackDamage: 99,
        dodge: 10
      },
      loot: ["Não aplica - Entidade não pode ser morta"],
      notes: "NÃO RECOMENDADO PARA COMBATE DIRETO"
    },
    {
      id: "creature-copiadores",
      name: "Os Copiadores",
      type: "Entidade Cognitiva",
      difficulty: "Extremo",
      shortDescription: "Seres translúcidos que absorvem e replicam identidades completamente",
      habitat: "Áreas urbanas, instituições",
      description: `Humanóides translúcidos com características que variam constantemente. Sem feições fixas. Operam em grupos de 3-7. Replicam movimentos e fala com atraso de 2-3 segundos. Penetram gradualmente na mente da vítima.`,
      abilities: [
        "Replicação de identidade",
        "Absorção de essência",
        "Coordenação telepática",
        "Infiltração perfeita"
      ],
      weaknesses: ["Espelhos antigos", "Luz ultravioleta", "Separação física imediata"],
      combatStats: {
        hp: 120,
        armor: 5,
        attackDamage: 20,
        dodge: 25
      },
      loot: ["Essência Copiada", "Vidro Fosco"],
      notes: "Altamente perigosos em infiltrações"
    },
    {
      id: "creature-nevoa",
      name: "Névoa Cinzenta",
      type: "Entidade Ambiental",
      difficulty: "Extremo",
      shortDescription: "Nuvem que consome memórias permanentemente",
      habitat: "Locais de trauma coletivo",
      description: `Nuvem densa cinzenta-pérola com vontade própria. Expande-se lentamente. Emite odor de terra molhada e metal. Temperatura local cai 15-20°C. Consome memórias de forma irreversível.`,
      abilities: [
        "Consumo de memórias",
        "Expansão contínua",
        "Regeneração após dispersão",
        "Indução de catatonia"
      ],
      weaknesses: ["Correntes de ar forte", "Calor extremo (60°C+)", "Rituais de purificação"],
      combatStats: {
        hp: 200,
        armor: 0,
        attackDamage: 30,
        dodge: 10
      },
      loot: ["Essência de Trauma", "Pó de Nevoa"]
    }
  ],

  npcs: [
    {
      id: "npc-marine",
      name: "Marine Flamarion",
      role: "Agente Sobrevivente",
      description: `Jovem mulher de 30-31 anos com olhar gélido. Cabelo longo escuro com mechas avermelhadas. Porta-se com frieza profissional, mas há dor genuína em seus olhos. Única sobrevivente lúcida do Incidente Deus da Morte. Carrega culpa por múltiplas mortes.`,
      personality: ["Determinada", "Reservada", "Traumatizada", "Resiliente"],
      goals: [
        "Descobrir a verdade sobre a Maldição Flamarion",
        "Resgatar Santer e descobrir se há mais sobreviventes",
        "Investigar o retorno das anomalias"
      ],
      greetingDialogue: `"Investigadores. Veríssimo pediu que eu os recebesse. Sou Marine Flamarion. Sim, aquela Marine. Não vamos perder tempo com condolências - há trabalho a fazer. Tenho informações sobre as manifestações recentes, mas primeiro preciso saber em quem posso confiar."`,
      dialogues: [
        {
          trigger: "Sobre o Incidente",
          response: `"O que você quer saber? Que meu irmão virou pó? Que matei um dos nossos com minhas próprias mãos? Ou quer saber como o Deus da Morte nos viu como insetos?" (pausa) "Desculpe. É... difícil ainda. A imagem não sai da minha cabeça."`
        },
        {
          trigger: "Sobre a Maldição",
          response: `"Santer descobriu documentos históricos. Nossa família... os Flamarion... fizemos um pacto há 376 anos. Um pacto de sangue. Cada sétima geração precisa renovar o acordo ou a entidade se liberta. Nós somos a sétima. Firenze pagou com a vida dele. E eu..." (silêncio)`
        },
        {
          trigger: "Pedindo ajuda",
          response: `"Se você está aqui, é porque reconhece a gravidade disso. Certo. Preciso de você nessa. As anomalias estão voltando. Maior, mais fortes. E a Convergência Final não é mais teoria - está acontecendo. Você tem experiência paranormal?"`
        }
      ],
      quirks: ["Toca frequentemente um colar de prata", "Evita contato visual prolongado", "Prende a respiração antes de falar sobre Firenze"],
      alignment: "Chaotic Good",
      combatSkills: ["Manipulação de Energia", "Combate corpo-a-corpo", "Resistência Paranormal"],
      relationshipModifiers: {
        "agentes experientes": +20,
        "investigadores do coletivo": -50,
        "especialistas em rituais": +30
      }
    },
    {
      id: "npc-santer",
      name: "Santer",
      role: "Especialista em Ocultismo",
      description: `Homem de 30 anos que aparenta 40. Cabelo grisalho prematuro. Sempre usa luvas. Apresenta tremores ocasionais. Corpo marcado pelo trauma do envelhecimento acelerado. Fala com deliberação cuidadosa, escolhendo cada palavra com precisão. Hafefobia severa - medo de ser tocado.`,
      personality: ["Intelectual", "Cauteloso", "Traumatizado", "Obsessivo"],
      goals: [
        "Encontrar cura para seu envelhecimento",
        "Desvendar o mistério da Maldição Flamarion",
        "Catalogar todas as anomalias paranormais conhecidas"
      ],
      greetingDialogue: `"Bem-vindo. Eu sou Santer. Entendo que Veríssimo os enviou para investigar a escalação de anomalias. Sua decisão é sábia. Compilei relatórios detalhados sobre as manifestações. O que vemos agora é apenas o prólogo. A verdade é muito mais perturbadora. Posso oferecer chá? Não se preocupe - uso um jarro especial."`,
      dialogues: [
        {
          trigger: "Sobre o envelhecimento",
          response: `"Dez anos em um segundo. Meu corpo acelerou como um filme em fast-forward. Cabelo ficou branco. Pele enrugou. Artrite desenvolveu-se instantaneamente. Os médicos não sabem como reverter." (pausa enquanto ajusta as luvas) "Mas não é o corpo que dói mais. É a mente. Lembranças de viver esses dez anos em um instante. Como se experienciasse uma vida inteira de sofrimento concentrada em um único golpe."`
        },
        {
          trigger: "Análise Paranormal",
          response: `"Os símbolos encontrados nas cenas de manifestação correspondem a um grimório do século XVII. O Coletivo das Sombras parece estar executando um padrão ritualístico específico. Se meus cálculos estão corretos, eles estão preparando algo para 47 dias a partir de agora. Não sabemos o quê, mas a data aparece repetidamente."`
        },
        {
          trigger: "Oferecendo ajuda de pesquisa",
          response: `"Seus conhecimentos seriam valioso para meus estudos. Tenho acesso a textos que a maioria dos agentes não vê. Documentos antigos, tradições ocultistas perdidas. Se quiser aprender os verdadeiros segredos do paranormal, eu posso ensinar. Mas aviso: a verdade é pesada."`
        }
      ],
      quirks: ["Tira e coloca as luvas repetidamente", "Bate caneta em superfícies de forma rítmica", "Evita cronômetros e relógios"],
      alignment: "Lawful Neutral",
      skills: ["Tradução de antigos textos", "Análise de símbolos paranormais", "Ritualística", "Pesquisa histórica"],
      relationshipModifiers: {
        "intelectuais": +25,
        "pesquisadores": +30,
        "pessoas tocafonas": -40
      }
    },
    {
      id: "npc-verissimo",
      name: "Veríssimo",
      role: "Diretor de Operações",
      description: `Homem de aparência indefinida - parece ter 60+ anos, mas há algo fora de sincronia nele. Veste sempre ternos negros impecáveis. Fala em tom controlado e medido. Seus olhos parecem enxergar mais do que deviam. Raramente vista em campo, mas sua presença é sentida em todas as decisões.`,
      personality: ["Calculista", "Enigmático", "Impassível", "Manipulador"],
      goals: [
        "Manter a humanidade protegida do paranormal",
        "Descobrir a verdade sobre suas próprias origens",
        "Controlar ou destruir o Coletivo das Sombras"
      ],
      greetingDialogue: `"Bem-vindo. Sua chegada foi prevista. Tenho uma missão específica para você, e ela vai exigir coragem, inteligência e a capacidade de aceitar verdades que desafiam a realidade. Você está pronto? Porque em uma hora, você conhecerá coisas que mudarão tudo o que acredita."`,
      dialogues: [
        {
          trigger: "Sobre sua história",
          response: `"Há 40 anos eu ainda acreditava que a humanidade poderia viver em harmonia. Fui ingênuo." (pausa longa) "Agora? Agora sei que proteção exige sacrifício. Às vezes, o bem requer ações que os fracos chamam de maldade. Marine perdeu o irmão. Santer perdeu sua juventude. Esses preços são pequenos comparados ao que protegemos."`,
          condition: "Trust Level > 50"
        },
        {
          trigger: "Sobre o Deus da Morte",
          response: `"Aquela entidade... era apenas a abertura. Um aviso. Se você acredita que aquele foi o pior que o paranormal pode oferecer, sua inocência é admirável mas perigosa. Há coisas muito piores esperando. Coisas que exigem preparação que a maioria dos agentes não possui."`
        },
        {
          trigger: "Pedindo autorização para ações perigosas",
          response: `"Autorizado. Mas saiba que qualquer ação tomada em meu nome tem consequências. Se você falhar, e a informação vazar, haverá necessidade de... controle de danos. Espero que você entenda essa realidade."`
        }
      ],
      quirks: ["Pausa antes de falar como se consultando invisíveis", "Sempre sabe informações que ninguém lhe contou", "Nunca parece genuinamente surpreso"],
      alignment: "Lawful Evil",
      skills: ["Estratégia Global", "Manipulação de Agentes", "Conhecimento Paranormal Avançado"],
      relationshipModifiers: {
        "agentes leais": +40,
        "questionadores": -30,
        "investigadores do coletivo": -100
      }
    },
    {
      id: "npc-dante",
      name: "Dante",
      role: "Operador de Campo Sênior",
      description: `Homem que não parece ter idade fixa. Às vezes parece 30, às vezes 50. Múltiplas cicatrizes no corpo. Olhar vazio e profundo. Fala pouco, mas quando fala, todos ouvem. Sua simples presença acalma ou assusta - nunca há meio termo.`,
      personality: ["Pragmático", "Silencioso", "Leal", "Impiedoso"],
      goals: [
        "Completar missões com eficiência máxima",
        "Desvendar sua própria imortalidade/proteção paranormal",
        "Proteger agentes sob seu comando"
      ],
      greetingDialogue: `"Você foi escolhido para essa operação. Isso significa que em algum lugar, alguém acredita que você consegue. Eu vou trabalhar com essa premissa. Não vou te abandonar se você não me abandonar. Entendido? Bom. Vamos aos detalhes da operação."`,
      dialogues: [
        {
          trigger: "Sobre como ele sobrevive",
          response: `"Não sei. Ninguém sabe. Eu deveria estar morto 15 anos atrás. Depois 20. Depois 25. Mas continuo aqui. Alguns dizem que tenho marca de proteção. Outros que não sou totalmente humano. Eu só trabalho."`,
          condition: "High Trust"
        },
        {
          trigger: "Oferecendo estratégia de combate",
          response: `"Ouça bem: no campo, improviso é morte. Plano é vida. Aqui está como procederemos..." (explica tática em detalhes específicos"`
        },
        {
          trigger: "Após operação perigosa bem-sucedida",
          response: `"Bom trabalho. Você sobreviveu. Eso significa que você tem potencial. Na Ordem, sobrevivência é sucesso. Tudo mais é apenas propaganda." (breve sorriso)`
        }
      ],
      quirks: ["Carga armas constantemente mesmo em ambientes seguros", "Não dorme quando possível", "Escuta tudo ao seu redor"],
      alignment: "Neutral Good",
      skills: ["Combate Paranormal", "Extração de Agentes", "Tática Militar", "Sobrevivência Impossível"],
      relationshipModifiers: {
        "agentes competentes": +25,
        "incompetentes": -50,
        "insubordinados": -100
      }
    }
  ],

  artifacts: [
    {
      id: "artifact-lanterna",
      name: "Lanterna de Ferro Negro",
      type: "Fonte de Luz Paranormal",
      power: "Revelação",
      shortDescription: "Revela entidades invisíveis e símbolos paranormais",
      effect: "Emite luz azulada que permite visualizar entidades do Outro Lado. Símbolos paranormais brilham intensamente.",
      description: `Lanterna de ferro fundido com inscrições desconhecidas. Pesa 12kg apesar do tamanho compacto. Emite luz azulada constante sem fonte combustível visível. Criaturas do Outro Lado evitam ativamente a luz.`,
      history: "Recuperada em 2015 de antiquário em São Paulo. Proprietário desapareceu 3 dias antes.",
      effects: [
        "Revela entidades invisíveis",
        "Símbolos paranormais brilham",
        "Evita aproximação de criaturas"
      ],
      sideEffects: [
        "Ouvir vozes após 20 minutos",
        "Insônia severa",
        "Pesadelos de outro lugar"
      ],
      usageTime: "Máximo 15 minutos por operação",
      requiresApproval: true,
      currentLocation: "Cofre 7-B"
    },
    {
      id: "artifact-mascara",
      name: "Máscara da Concordância",
      type: "Artefato de Manipulação",
      power: "Persuasão",
      shortDescription: "Concede persuasão sobrenatural sobre pessoas",
      effect: "Usuário se torna extremamente persuasivo. Pessoas obedecem comandos sem questionar.",
      description: `Máscara de porcelana branca com sorriso fixo. Olhos vazios. Interior tem textura orgânica desconfortável. Gruda na face após 10 minutos.`,
      history: "Origem desconhecida. Uso anterior resultou em perda permanente de identidade.",
      effects: [
        "Persuasão absoluta",
        "Obediência sem questões",
        "Efeito persiste 1 hora após remoção"
      ],
      sideEffects: [
        "Perda de identidade própria",
        "Apego à máscara",
        "Perda permanente em caso de uso prolongado"
      ],
      usageTime: "Máximo 10 minutos",
      requiresApproval: true,
      status: "BLOQUEADO - Uso extremamente restrito",
      currentLocation: "Cofre Ultra-Secreto"
    },
    {
      id: "artifact-relogio",
      name: "Relógio de Bolso Parado",
      type: "Artefato Temporal",
      power: "Congelamento de Tempo",
      shortDescription: "Congela tempo localizado",
      effect: "Ao abrir, congela tempo em raio de 10-15 metros por até 23 minutos",
      description: `Relógio de bolso ouro tarnished. Algarismos romanos. Corrente de prata. Sempre marca 14:47. Quente ao toque.`,
      history: "Fabricado em 1823 por relojoeiro suíço desconhecido",
      effects: [
        "Congelamento temporal localizado",
        "Portador permanece consciente",
        "Mundo aparenta 'congelado'"
      ],
      sideEffects: [
        "Desassociação do portador",
        "Isolamento existencial",
        "Depressão prolongada"
      ],
      usageTime: "Até 23 minutos",
      requiresApproval: true,
      currentLocation: "Cofre 3-Alpha"
    },
    {
      id: "artifact-luvas",
      name: "Luvas de Couro Negro",
      type: "Artefato de Proteção",
      power: "Absorção de Magia",
      shortDescription: "Absorvem energia paranormal e magia",
      effect: "Neutraliza magia de contato. Oferece 70% resistência a influência mental. Protege contra possessão.",
      description: `Luvas de couro preto bem ajustadas. Textura morna. Costuras de fio dourado formam padrões geométricos. Couro é de origem não-terrestre.`,
      history: "Origem desconhecida. Composição sugere origem do Outro Lado.",
      effects: [
        "Neutralização de magia ofensiva",
        "Resistência a possessão",
        "Contato com entidades espectrais"
      ],
      sideEffects: [
        "Aquecimento gradual quando sobrecarregadas",
        "Possível decarregamento violento",
        "Limitadas ao braços até cotovelo"
      ],
      usageTime: "Tempo ilimitado com descarregamento mensal",
      requiresApproval: false,
      currentLocation: "Cofre de Equipamentos 2-B"
    },
    {
      id: "artifact-binoculos",
      name: "Binóculos de Obsidiana",
      type: "Artefato de Revelação",
      power: "Visão Paranormal",
      shortDescription: "Revela verdadeira forma de entidades",
      effect: "Remove disfarces mágicos. Alcance visual até 10km. Vê auras e maldições.",
      description: `Binóculos de obsidiana polida. Lentes de vidro negro que absorvem luz. Símbolos antigos gravados na moldura que parecem se mover.`,
      history: "Descoberto em escavação arqueológica no México em 1934",
      effects: [
        "Revelação de verdadeira forma",
        "Remoção de ilusões",
        "Visão de espectro ampliado",
        "Alcance estendido até 10km"
      ],
      sideEffects: [
        "Impureza visual permanente",
        "Dificuldade em aceitar aparência normal",
        "Pesadelos recorrentes",
        "Possível dependência"
      ],
      usageTime: "Máximo 30 minutos consecutivos",
      requiresApproval: true,
      currentLocation: "Cofre 5-Gamma"
    },
    {
      id: "artifact-colar",
      name: "Colar de Dentes Humanos",
      type: "Artefato Ritual",
      power: "Comunicação Espiritual",
      shortDescription: "Comunica com vítimas falecidas",
      effect: "Cada dente permite comunicação com pessoa original falecida. Útil para investigações.",
      description: `Colar com cordão de couro envelhecido. 13 dentes humanos em suportes de osso. Alguns com ouro antigo. 200-400 anos de idade.`,
      history: "Origem Europa Central ou América do Sul. Uso documentado em investigações paranormais.",
      effects: [
        "Comunicação com impressão espiritual",
        "Localização de desaparecidos",
        "Revelação de causa de morte",
        "Proteção contra aqueles que prejudicam os conectados"
      ],
      sideEffects: [
        "Comunicação incompleta e fragmentada",
        "Transmissão de trauma emocional",
        "Emoções de morte violenta"
      ],
      usageTime: "Tempo variável (rituals 5-15 minutos)",
      requiresApproval: true,
      currentLocation: "Cofre 7-Delta"
    },
    {
      id: "artifact-faca",
      name: "Faca Ritual de Prata",
      type: "Artefato de Banimento",
      power: "Banimento",
      shortDescription: "Corta barreiras paranormais e fere entidades imateriais",
      effect: "Lâmina corta barreiras mágicas. Capaz de ferir entidades. Ferimentos não cicatrizam normalmente.",
      description: `Faca de 30cm. Lâmina de prata pura com luz interna azulada. Cabo de osso entalhado com runas. Sempre 5-10°C mais fria que ambiente.`,
      history: "Origem desconhecida. Utilizada em múltiplas operações de banimento bem-sucedidas.",
      effects: [
        "Corte através de barreiras mágicas",
        "Ferimento a entidades imateriais",
        "Absorção de maldições",
        "Quebra de laços telepáticos"
      ],
      sideEffects: [
        "Rejeita tentativas de uso contra inocentes",
        "Requer recarga após 7 usos",
        "Sem proteção contra contraataques"
      ],
      usageTime: "Tempo ilimitado com manutenção mensal",
      requiresApproval: true,
      currentLocation: "Cofre 2-Alpha",
      accessLevel: "Agentes Combate Paranormal Classe-1+"
    }
  ],

  locations: [
    {
      id: "location-hotel-cascavel",
      name: "Hotel Cascavel",
      type: "Zona Vermelha",
      shortDescription: "Hotel abandonado onde 47 pessoas desapareceram simultaneamente em 1987",
      description: `Hotel de médio porte no interior de São Paulo. Construído sobre antigo cemitério. Estrutura permanece intacta mas vazia.`,
      history: "47 pessoas desapareceram na noite de 15 de agosto de 1987. Nenhum corpo encontrado. Nenhum rastro de violência.",
      anomalies: [
        "Todos os relógios pararam às 3:47 AM",
        "Temperatura anormalmente baixa (8°C mesmo no verão)",
        "Espelhos com reflexos 'atrasados' (3-5 segundos)",
        "Vozes sussurrantes em idioma desconhecido",
        "Portas 47, 147 e 247 não permanecem fechadas"
      ],
      phenomena: [
        "Aparições nas janelas sempre às 3:47",
        "Sons de festa em salão vazio",
        "Telefonemas de dentro do hotel (linha desconectada há 30 anos)",
        "Sensação de 'estar sendo seguido'",
        "Objetos pessoais dos hóspedes permanecem intocados"
      ],
      narrativeDescription: `Você chega ao Hotel Cascavel ao anoitecer. A estrutura colonial de três andares parece observá-lo. Nas janelas dos quartos, sombras se movem ocasionalmente. A porta de entrada está destrancada - ela sempre está, dizem os relatos antigos. Dentro, o ar é gelado apesar do verão. Poeira cobre tudo, intocada há anos. Mas há algo errado: os pratos ainda estão nas mesas do restaurante. Comida mofada e irreconhecível ainda repousa em louça antiga. É como se o tempo tivesse parado aqui naquela noite de 1987.`,
      dangerLevel: 9,
      recommendedTeamSize: "3+",
      timeLimit: "30 minutos",
      specialNotes: "NUNCA entrar após 3:30 PM"
    },
    {
      id: "location-metro-fantasma",
      name: "Metrô Linha Fantasma",
      type: "Zona Amarela",
      shortDescription: "Estação desativada onde trens paranormais aparecem às 2:13 AM",
      description: `Estação de metrô desativada na Linha 3-Vermelha. Construída em 1978, fechada oficialmente em 1998 devido a 'problemas estruturais'.`,
      history: "12 funcionários desapareceram entre 1995-1998. Última operadora: Ana Carvalho, que reportou 'trem chegando mas não está no cronograma. Passageiros sem rosto'",
      anomalies: [
        "Trem paranormal chega às 2:13 AM",
        "Trem não aparece em sistemas de rastreamento",
        "Sem número de identificação",
        "Silhuetas de passageiros nas janelas (sem rostos)",
        "Portas se abrem por exatos 47 segundos",
        "Trem desaparece nos túneis"
      ],
      phenomena: [
        "Vozes: 'Próxima estação... o fim da linha'",
        "Correntes de ar geladas",
        "Pegadas molhadas aparecem espontaneamente",
        "Anúncios de estações que nunca existiram",
        "Interferência grave em equipamentos eletrônicos"
      ],
      narrativeDescription: `As linhas de metrô são labirintos urbanos, mas esta estação é diferente. Você desce pela escada de emergência e o ar muda. Mais frio. Mais denso. As lâmpadas de emergência criam sombras que se movem contra a direção da luz. As plataformas estão vazias e limpas - como se não tivessem sido abandonadas, mas apenas... aguardando. Seus passos ecoam de forma não-natural. E quando você olha em direção aos túneis, jura ouvir o som distante de um trem se aproximando.`,
      dangerLevel: 7,
      recommendedTeamSize: "3+",
      timeLimit: "45 minutos",
      specialNotes: "Monitorar relógio: trem manifesta-se entre 2:05-2:20 AM"
    },
    {
      id: "location-cemiterio",
      name: "Cemitério dos Esquecidos",
      type: "Zona Vermelha",
      shortDescription: "Cemitério onde lápides aparecem e desaparecem. Nomes mudam. Mortos que não estão mortos.",
      description: `Cemitério no zona rural de Minas Gerais. Fundação desconhecida com registros contraditórios datando de 1673 a 2047.`,
      history: "Registros históricos são caóticos. Uma lápide tem data de 2047 (futuro). Pertence a agente viva da Ordem.",
      anomalies: [
        "Túmulos transitórios (aparecem e desaparecem)",
        "Nomes nas lápides mudam",
        "Datas impossíveis (morte antes do nascimento)",
        "Datas futuras",
        "Túmulos duplicados (mesma pessoa enterrada 5x com datas diferentes)",
        "Sepulturas vazias apesar de registros de enterro"
      ],
      phenomena: [
        "23 casos de pessoas encontrando suas próprias lápides",
        "Vítimas começam a 'lembrar' suas mortes",
        "Gradualmente esquecem que estão vivas",
        "Desaparecem",
        "Corpo encontrado no túmulo como se sempre tivesse estado lá"
      ],
      narrativeDescription: `O Cemitério dos Esquecidos é uma ferida aberta na realidade. Ao entrar pelo portão de ferro entalhado, você sente tempo se comportando de forma estranha. Uma lápide que você observou há 10 minutos não está mais lá. Outra, nova, apareceu entre duas que você reconhecia. Os nomes deslizam na pedra cinzenta como se estivessem vivos. Um vento frio sopra de lugar algum, carregando o aroma de terra molhada e flores morte. Você vê um coveiro distante, cavando um túmulo novo. Quando se aproxima, ele desaparece. Mas o buraco permanece.`,
      dangerLevel: 10,
      recommendedTeamSize: "3+",
      timeLimit: "30 minutos",
      specialNotes: "NÃO procure por seu próprio nome. Se encontrar, você tem 72 horas."
    },
    {
      id: "location-casa-invertida",
      name: "A Casa Invertida",
      type: "Zona Laranja",
      shortDescription: "Residência onde física não funciona. Gravidade opcional. Portas para lugares impossíveis.",
      description: `Residência colonial do século XVIII em Ouro Preto. Pertenceu a alquimista Baltazar Correia que conduziu experimentos proibidos.`,
      history: "Em 1789, vizinhos ouviram gritos. Baltazar foi encontrado morto no teto do porão - como se tivesse caído para cima.",
      anomalies: [
        "Gravidade varia por cômodo",
        "Geometria impossível",
        "Portas levam a lugares diferentes por hora",
        "Escadas paradoxais",
        "Tempo não-linear (entra às 15:00, sai às 14:45 com memórias de 1 hora)"
      ],
      phenomena: [
        "Vozes em idiomas antigos",
        "Sombras se movem contra fonte de luz",
        "Objetos caem em múltiplas direções",
        "Reflexos mostram cômodos diferentes",
        "Temperatura varia -5°C a 45°C em segundos"
      ],
      narrativeDescription: `A Casa Invertida desafia cada lei da física que você conhece. Ao entrar pela porta da frente, a gravidade é normal - você caminha naturalmente. Mas ao passar pela sala de estar, sente o puxo mudar. Em dez passos, está andando na parede. Cinco passos mais e está no teto. As escadas não fazem sentido: você sobe três andares mas termina no térreo. Cada cômodo é uma geometria diferente, um pequeno universo com suas próprias regras. E através da janela da sala? Você vê versões diferentes da mesma sala, em momentos diferentes, como se olhasse para múltiplas linhas temporais simultaneamente.`,
      dangerLevel: 8,
      recommendedTeamSize: "4+",
      timeLimit: "15 minutos",
      specialNotes: "Se você vir a si mesmo em um cômodo, SAIA IMEDIATAMENTE"
    }
  ],

  symbols: [
    {
      id: "symbol-espiral",
      name: "A Espiral Devoradora",
      appearance: "Espiral irregular que parece se mover quando observada. Geometria não-euclidiana.",
      classification: "CLASSE A",
      description: `Símbolo recorrente em locais de manifestação. Geometria não obedece leis da física. Aparições em paredes, tatuagens de vítimas, sangue em cenas de rituais.`,
      effects: [
        "Exposição causa náusea",
        "Desorientação",
        "Pesadelos recorrentes",
        "Em casos extremos: alucinações e perda de memória"
      ],
      origin: "Desconhecida",
      usage: "Marca ou portal para o Outro Lado",
      protection: "Amuletos de proteção, evitar contato visual prolongado"
    },
    {
      id: "symbol-olho",
      name: "O Olho que Tudo Vê",
      appearance: "Olho estilizado com três pupilas concêntricas. Rodeado por runas desconhecidas.",
      classification: "CLASSE B",
      description: `Símbolo de vigilância paranormal. Associado a precognição e visões proféticas. Encontrado em textos ocultistas medievais e inscrições pré-colombianas.`,
      effects: [
        "Sensação de 'estar sendo observado'",
        "Distorções visuais em câmeras",
        "Médiuns afirmam que mostra o futuro",
        "Desenvolvimento de paranoia"
      ],
      origin: "Precede culturas modernas conhecidas",
      usage: "Visão e precognição",
      protection: "Não observar por mais de 30 segundos consecutivos"
    },
    {
      id: "symbol-convergencia",
      name: "O Símbolo da Convergência Final",
      appearance: "Círculo partido com sete pontas em seu exterior. Padrão geométrico em espiral interior.",
      classification: "CLASSE X - CATACLISMICA",
      description: `Símbolo profético mencionado em múltiplos artefatos paranormais. Aparece em visões sobre evento futuro de magnitude global.`,
      effects: [
        "Visões de catástrofe",
        "Ansiedade extrema",
        "Conhecimento de data específica: 2025-2027",
        "Sensação de inevitabilidade"
      ],
      origin: "Profecia ancestral",
      usage: "Marca da Convergência Final",
      protection: "Pesquisa e preparação",
      notes: "Altamente prioritário - Conselho Internacional foi informado"
    }
  ],

  // Dados para download e impressão
  downloadTemplates: {
    encounterSheet: {
      name: "Ficha de Encontro",
      format: "PDF/JSON",
      fields: ["Dificuldade", "Criaturas", "NPCs", "Artefatos", "Locais", "Hooks Narrativos"]
    },
    creatureStats: {
      name: "Estatísticas de Criatura",
      format: "PDF/JSON",
      fields: ["HP", "Armor", "Damage", "Abilities", "Weaknesses", "Loot"]
    },
    npcDialogue: {
      name: "Árvore de Diálogos de NPC",
      format: "PDF/TXT",
      fields: ["Diálogos", "Condições", "Modificadores de Relacionamento"]
    }
  }
};
