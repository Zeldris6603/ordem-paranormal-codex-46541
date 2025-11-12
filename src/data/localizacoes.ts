export interface Localizacao {
  id: string;
  nome: string;
  zona: "Vermelha" | "Laranja" | "Amarela" | "Verde";
  perigo: number; // 1-10
  descricaoAmbiente: string;
  estruturaFisica: string;
  anomalias: string[];
  perigos: string[];
  tempoSeguro: string; // Quanto tempo pode permanecer
  tempoPerigoso: string; // Picos de perigo
  navigationDificuldade: "Baixa" | "Média" | "Alta" | "Extrema";
  notas: string;
}

export const localizacoes: Localizacao[] = [
  {
    id: "hotel-cascavel",
    nome: "Hotel Cascavel",
    zona: "Vermelha",
    perigo: 9,
    descricaoAmbiente: `Você chega ao Hotel Cascavel ao anoitecer. Edifício de 8 andares, década de 1970, completamente abandonado. 
A fachada de tijolos vermelhos desgastados está coberta por hera morta que parece estar congelada há décadas. As janelas, a maioria 
quebrada, refletem luz de forma não-natural. Dentro, o cheiro é de mofo extremo misturado com algo adocicado e podre. 
Cartazes antigos de hóspedes ainda estão pendurados - alguns fotos das pessoas desaparecem quando olha diretamente para elas. 
O saguão é vasto e desolado. Há uma recepção antiga com chave de latão ainda na fechadura do quarto 347. 
As luzes fluorescentes costumavam funcionar - agora apenas zumbem irregularmente, criando sombras que se movem independentemente da luz.`,
    estruturaFisica: `8 andares. 60 quartos designados (numeração vai 100-899). Cada andar tem corredor em forma de U. 
Quartos têm portas de madeira pesada com números em latão. Moquete vermelha desgastada pelo corredor. 
Banheiros comunitários espaçados a cada 3 quartos. Elevador quebrado há décadas - correntes ainda visíveis dentro do poço de elevador. 
Escadas de emergência em ambas extremidades, ambas levam a lugares que não deveriam de acordo com arquitetura. 
Sala de refeições no subsolo. Cozinha está intacta mas congelada - pratos ainda na mesa como se os hóspedes fossem retornar a qualquer momento.`,
    anomalias: [
      "Quartos reorganizam-se entre visitas",
      "Espelhos mostram futuros alternativos de quem se olha",
      "Tempo passa 10x mais rápido após 23:47 (hora paranormal)",
      "Vozes de hóspedes desaparecidos ecoam em corredores",
      "Algumas portas levam a quartos de hotéis diferentes (dimensional)",
      "Retratos de hóspedes descascam quando ninguém observa"
    ],
    perigos: [
      "Colecionador no quarto 347 que recebe visitantes",
      "Manifestações de pessoas que desapareceram em 1987",
      "Prédio fisicamente reconstrói-se - quartos trocam de posição",
      "Elevador dimensional que leva a locais desconhecidos",
      "Água quente não esfria - queimaduras paranormais se não cuidadoso"
    ],
    tempoSeguro: "30-45 minutos máximo. Após 1 hora, realidade começa se solidificar e você fica preso.",
    tempoPerigoso: "Entre 23:40-23:50 (tempo normal) - pico de atividade paranormal. Colecionador mais ativo.",
    navigationDificuldade: "Extrema",
    notas: "Recomenda-se equipe mínimo 3 pessoas. Marcadores físicos não funcionam (ficam em dimensão alternativa). Relógio de Bolso Parado oferece proteção temporal."
  },

  {
    id: "metro-linha-fantasma",
    nome: "Metrô Linha Fantasma",
    zona: "Amarela",
    perigo: 7,
    descricaoAmbiente: `Entrada escondida sob loja de conveniência fechada há 20 anos. Escadas descem 40m em espiral impossível. 
A plataforma é antiga - décadas de 1960 tecnologia. Pintura azul brilhante se descasca. Cartazes de campanhas publicitárias que 
nunca existiram estão intactos. O ar é úmido e gelado - nunca esquenta mesmo no verão. 
Um aroma metálico e ozônio permeia tudo. Trilhos parecem normais, mas brilham fracamente em verde. 
A estação se estende além do que deveria visualmente - como se o espaço fosse maior por dentro que por fora. 
Um zumbido constante de eletricidade paranormal. Ocasionalmente, você ouve vozes clamando de dentro das paredes.`,
    estruturaFisica: `Plataforma em L. Aproximadamente 150m de comprimento. Pé-direito 6m. Banco de madeira ao longo plataforma. 
Coluna de suporte a cada 15m. Relógio de parede marca sempre 2:13 AM. Sistema de som antigo com altofalantes ainda funcionais. 
Portas de trem de vidro escuro - interior completamente negro. Não se consegue ver dentro sem luz paranormal especial. 
Trilho triplo (não duplo como metrô normal). Terceiro trilho brilha diferente - propósito desconhecido.`,
    anomalias: [
      "Trem aparece entre 2:05-2:20 AM sempre (em cronograma paranormal)",
      "Passageiros são espectrais - mesmas pessoas cada noite",
      "Entrar no trem não leva a próxima estação - leva para mesa de jantar do Hotel Cascavel",
      "Som do trem causa desorientação temporal (ouve-se como se chegasse de múltiplas direções)",
      "Plataforma desliza lentamente sem se mover - realidade que se reorganiza"
    ],
    perigos: [
      "Trem se move a 200km/h - praticamente teletransporte",
      "Estar na plataforma quando trem chega o suga para dentro",
      "Pessoas dentro do trem podem te puxar através vidro",
      "Trilho terceiro é eletrificado com corrente paranormal - toque = morte",
      "Se ficar após trem sair, plataforma desaparece e você fica em escuridão"
    ],
    tempoSeguro: "45-60 minutos. Trem vem a cada 60 minutos.",
    tempoPerigoso: "Entre 2:05-2:20 - trem está na estação. Muito perigoso estar aí.",
    navigationDificuldade: "Média",
    notas: "Recomenda investigação antes de 2:00 AM. Luz brilhante afusta espíritos. Porta de emergência na parede norte."
  },

  {
    id: "cemiterio-esquecidos",
    nome: "Cemitério dos Esquecidos",
    zona: "Vermelha",
    perigo: 10,
    descricaoAmbiente: `Não existe em mapas oficiais. Localização muda - sempre encontrado por acaso ou por aqueles que já conhecem. 
Entrada é entre duas árvores mortas com padrão de cicatrizes que formam símbolo paranormal. Cruzá-la é entrar em dimensão paralela. 
Cemitério é vasto - aparentemente maior por dentro que o lote que ocupa. Lápides enfileiradas em padrão não-euclidiano. 
Algumas apontam 'para cima', outras 'para lado'. A gravidade aqui é inconsistente. Névoa brilhante cobre tudo. 
Dentro dela, você vê vultos movendo-se que desaparecem quando observa. Luz solar não penetra - está sempre crepúsculo aqui. 
O solo é terra úmida que squelcha ao caminhar. Cheiro de tumba e decomposição, mas não putrida - antiga, histórica.`,
    estruturaFisica: `Área aproximada: impossível medir. Visualmente vista 2km, mas provavelmente infinita fractal. 
Lápides de diferentes épocas - algumas talhadas em rocha precoce, outras em mármor moderno. Caminho central leva a mausoléu central. 
Mausoléu é estrutura de vidro preto com escadas para baixo. Profundidade desconhecida. Cerca ornamental rodeia área, 
mas pode ser atravessada (não oferece proteção física). Bancos de pedra espalhados. Alguns contêm inscrições de nomes.`,
    anomalias: [
      "Se vê seu próprio nome em lápide = 72 horas até desaparecimento",
      "Corpos nas lápides não têm nomes - foram apagados historicamente",
      "Realidade temporal fragmentada - caminha 100m mas passam horas",
      "Figuras espectrais são versões de você de linhas temporais alternativas",
      "Água da chuva aqui é congelada temporalmente - nunca evapora",
      "Nomes dos mortos podem ser ouvidos sussurrando em vento"
    ],
    perigos: [
      "Ver próprio nome = morte paranormal garantida em 72h",
      "Sepultados estão acordando - mobilidade lentamente increasing",
      "Entidades de Morte chamam para entrar no mausoléu",
      "Tempo passa de forma não-linear - pode envelhecer dias em minutos",
      "Se ficar após anoitecer (dentro do cemitério - que é sempre anoitecer), prisioneiro até morte",
      "Símbolo da Convergência Final aparece em várias lápides"
    ],
    tempoSeguro: "20-30 minutos máximo. Qualquer mais longo = risco crítico.",
    tempoPerigoso: "Sempre perigoso. Mais perigoso entre 18:00-6:00 (tempo normal).",
    navigationDificuldade: "Extrema",
    notas: "NÃO PROCURE POR SEU PRÓPRIO NOME. ABSOLUTAMENTE CRÍTICO. Se achar seu nome, saia imediatamente sem confirmar. Ritual de proteção recomendado ANTES de entrar."
  },

  {
    id: "casa-invertida",
    nome: "A Casa Invertida",
    zona: "Laranja",
    perigo: 8,
    descricaoAmbiente: `Casa vitoriana de 3 andares que não deveria existir de acordo com geometria euclidiana. 
Entrada é porta azul atrás de uma barbearia desativada. Ao entrar, a primeira coisa que se nota é que gravidade é local - 
mudança de cômodo = mudança de "para cima". Piso de um quarto é parede de outro. Teto é piso. A casa parece infinita em certos corredores. 
Paredes são papel de parede floral que se move ligeiramente - padrões mudam cada vez que não observa. 
Temperatura varia drasticamente entre cômodos - quarto pode ser -10°C enquanto cozinha está 50°C. Luz vem de nenhum lugar visível - 
tudo é uniformemente iluminado de forma que cria sombras que apontam em múltiplas direções. Há som constante de relógio - 
não consegue encontrar origem.`,
    estruturaFisica: `Dimensionalmente impossível documentar. Aparentemente 12 cômodos principais, mas topologia sugere 40+. 
Cômodos incluem: entrada, sala de estar, cozinha, comedor, 6 quartos, 2 banheiros, biblioteca, estúdio arte, adega, porão. 
Cada cômodo tem porta diferente para cada outro cômodo (não lineares). Móveis são vitorianos original - perfeitas condições. 
Espelhos cobrem meia do cômodos - refletem versões alternativas da casa. Quadros mostram cenas que mudaram. Relógios marcam horas diferentes.`,
    anomalias: [
      "Gravidade inverte por cômodo - precisa se ajustar caminhando",
      "Se ver-se em outro cômodo simultaneamente = saia IMEDIATAMENTE",
      "Espelhos mostram você em futuros próximos (1-5 segundos afrente)",
      "Certos objetos têm peso não-euclidiano (leve demais ou pesado demais)",
      "Algumas portas levam cômodo errado. Mapa muda cada visita",
      "Barulho de passos seguem você - origem desconhecida"
    ],
    perigos: [
      "Gravidade pode travar - cabeça para baixo indefinidamente",
      "Ver-se em outro cômodo enquanto outro você observa = paradoxo fatal",
      "Certos corredores levam cômodos que não deveriam estar lá",
      "Temperatura extrema pode causar choque térmico",
      "Espelhos podem puxar você para dentro",
      "Perder-se leva à perda de tempo - sai dias depois"
    ],
    tempoSeguro: "15 minutos por visita. Mais = risco desassociação.",
    tempoPerigoso: "Especialmente perigoso em espelhos entre 12:00-12:30 (horárium da casa).",
    navigationDificuldade: "Extrema",
    notas: "Recomendado usar corda amarrada a entrada. Não toque espelhos. Se vir-se em outro cômodo, não observar por mais que 3 segundos. Existe ritual de proteção desconhecido no porão (não recomendado primeiro visit)."
  },

  {
    id: "biblioteca-conhecimento-proibido",
    nome: "Biblioteca do Conhecimento Proibido",
    zona: "Laranja",
    perigo: 6,
    descricaoAmbiente: `Biblioteca subterrânea escondida sob edifício governamental abandonado. Acesso via cômodo traseiro de arquivo de documentos. 
O próprio espaço parece antigo - pelo menos 200 anos. Prateleiras de madeira negra se estende do chão ao teto (12m). 
Livros estão organizados em sistema de classificação paranormal próprio. Iluminação é por velas que nunca apagam. 
Cheiro é de papel antigo, tinta, e algo metálico. A temperatura é constante 15°C. 
Há mesas de pesquisa de carvalho maciço equipadas com instrumentos antigos de escrita. Um relógio enorme na parede marca horas em 13 ciclos (não 12). 
Biblioteca é silenciosa - som abafado como se fosse impossível fazer barulho.`,
    estruturaFisica: `Dimensões: aproximadamente 40m x 60m. Altura 12m. Prateleiras em 10 fileiras paralelas. 
Estimado 50,000+ livros. Cada livro tem informação paranormal catalogada. Arquivo de documentos ao fundo. 
Mesas distribuídas em área central. Cadeiras de bibliotecário de couro. Espelho grande na parede norte (propósito desconhecido). 
Quadro escuro em parede oeste para apresentações. Escada de espiral leva para subsolo adicional (não explorado completamente).`,
    anomalias: [
      "Livros rearrangam-se durante a noite",
      "Alguns livros contêm informação sobre o leitor (não escrito antes da leitura)",
      "Mesas têm capacidade de exibir conteúdo de livros em superfície",
      "Vozes sussurram informações sobre o que procura",
      "Leitura prolongada causa imersão - tempo passa diferente",
      "Alguns livros pedem para serem lidos (escrita aparece)"
    ],
    perigos: [
      "Ler mais de 2 livros em um dia causa danos psíquicos",
      "Informação em certos livros é letal para sanidade",
      "Tentar roubar livro causa manifestação de guardião",
      "Escritas antigas contêm hipnose paranormal",
      "Espelho no oeste reflete verdades que quebram mente"
    ],
    tempoSeguro: "2-3 horas máximo. Limite de 2 livros por visita.",
    tempoPerigoso: "Especialmente perigoso entre 00:00-1:00 AM - guardião está mais ativo.",
    navigationDificuldade: "Baixa",
    notas: "A Organização sabe disso e não interfere - lugar de conhecimento puro. Informação obtida aqui é confiável."
  },

  {
    id: "fabrica-temporal",
    nome: "Fábrica Temporal",
    zona: "Vermelha",
    perigo: 9,
    descricaoAmbiente: `Fábrica abandonada de década de 1950 que ainda está 'operacional' em dimensão paranormal. 
Localização: bairro industrial, warehouse aparentemente desativado com portões trancados. Ao entrar através dimensão paranormal, 
máquinas continuam funcionando - cadeias de produção movem-se lentamente produzindo... nada visível. Som é ensurdecedor - 
metal contra metal, engrenagens, vapor. Cheiro é de óleo queimado misturado com eletricidade. Luzes fluorescentes ultrapassadas piscam 
criando sombras estroboscópicas. Equipe paranormal de trabalhadores trabalham continuamente - translúcidos, ciclo infinito.`,
    estruturaFisica: `Warehouse industrial. Aproximadamente 100m x 80m. Altura 15m com estrutura de aço suportando teto. 
Máquinas ocupam 70% do espaço. Cadeias de produção de múltiplos níveis. Escritório elevado na parede norte. Escadas metálicas. 
Corredor de serviço entre máquinas. Sistema de dutos aéreos distribuindo... algo. Piso é cemento rachado. 
Certos equipamentos brilham em cores paranormais.`,
    anomalias: [
      "Máquinas produzem itens que não existem ou são abstratos",
      "Tempo passa diferente em cada zona da fábrica",
      "Trabalhadores paranormais ignoram visitantes completamente",
      "Alguns produtos ficam 'quentes' - contêm energia temporal",
      "Relógios aqui marcam progressão linear - totalmente independente",
      "Produção parece ter propósito desconhecido"
    ],
    perigos: [
      "Máquinas trituradora - contato = morte instantânea",
      "Produtos 'quentes' causam queimaduras temporais",
      "Ficar em uma zona por tempo prolongado = envelhecer naquela zona",
      "Sabotagem das máquinas causa cascata dimensional",
      "Trabalhadores podem se tornar hostis se interferir",
      "Saída é através mesma porta entrada - sem exceção"
    ],
    tempoSeguro: "20 minutos em qualquer zona. Máximo 45 em fábrica inteira.",
    tempoPerigoso: "Turno muda a cada 6 horas (tempo paranormal) - mais máquinas ligam.",
    navigationDificuldade: "Média",
    notas: "Propósito da fábrica permanece desconhecido. A Organização não conseguiu infiltrar completamente. Recomenda não tocar qualquer produto."
  },

  {
    id: "predio-administrativo",
    nome: "Prédio Administrativo do Governo Paralelo",
    zona: "Amarela",
    perigo: 7,
    descricaoAmbiente: `Prédio de escritórios de 1960 bem mantido que existe 'fora de foco' do mundo normal. 
Localização: no meio de quadra residencial, mas perceptível apenas em certas horas. Fachada é vidro espelhado. 
Entrada principal tem segurança paranormal - câmeras que veem em espectro adicional. Saguão é limpo demais - anormalmente imaculado. 
Tapete bege perfeito. Recepção está vazia - computador antigo (1980) ainda 'funciona'. Elevadores são numerados de forma estranha. 
Dentro do prédio, sensação é de ser observado constantemente. Ar é filtrado e não-natural. Cheiro é de papel novo e desinfetante corporativo.`,
    estruturaFisica: `Prédio de 20 andares. Dimensionalmente comprimido - por dentro é ~40 andares. Saguão ocupa 2 andares de altura. 
Recepção central, áreas de estar, elevadores (8 deles, cada levando lugar diferente). Escritórios por andares em configuração padrão. 
Cada andar tem cafeteria, banheiros, e cabines de telefone antigos. Porão inacessível (elevador para lá não funciona). Teto é espelhado em alguns andares.`,
    anomalias: [
      "Prédio só visível em certos horários",
      "Funcionários parecem normais mas respondem perguntas diferente cada vez",
      "Alguns andares têm funções desconhecidas",
      "Arquivos dos prédios contêm informação preditiva",
      "Elevadores podem levar a andares que não existem na contagem",
      "Vidro reflete múltiplas versões da realidade"
    ],
    perigos: [
      "Segurança paranormal detecta desconhecidos",
      "Se ser detectado = deportação forçada para dimensão paralela",
      "Alguns escritórios contêm arquivos com informação letal",
      "Porão acessível apenas durante apagões",
      "Funcionários podem ser hostis se questionado sobre operações"
    ],
    tempoSeguro: "60 minutos máximo. Mais = risco detecção.",
    tempoPerigoso: "Mais ativo entre 14:00-16:00 horas normais.",
    navigationDificuldade: "Média",
    notas: "Propósito: aparentemente administração paralela de certos eventos. Documentos recentes mencionam 'Convergência' e 'Veríssimo'. Evitar porão sem proteção paranormal."
  },

  {
    id: "rio-negro",
    nome: "Rio Negro (Paranormal)",
    zona: "Laranja",
    perigo: 7,
    descricaoAmbiente: `Rio localizado fora mapa oficial - apenas conhecido por investigadores paranormais. 
Água é literalmente preta - não reflete luz. Rio é silencioso - nenhuma som de água movimentando. 
Marginais são cobertos por vegetação morta que não apodrece. Ar tem gosto metálico. Ocasionalmente, 
luz azul-esverdeada emerge da água. Pontes antigas (impossível estimar idade) cruzam rio em múltiplos pontos. 
Cada ponte parece feita de material diferente - uma de madeira viva (que ainda cresce), uma de osso, uma de metal que brilha paranormal.`,
    estruturaFisica: `Rio aproximadamente 60m de largura. Profundidade desconhecida - sonda paranormal deixada aqui desapareceu. 
Correnteza é visível mas não existe movimento real. 4 pontes documentadas. 3 são acessíveis, 1 é guardada por entidade. 
Margens são bancada de terra preta 5m de altura. Vegetação na margem é árvores mortas retorcidas. Ocasionalmente, 
pegadas enormes aparecem na lama - propósito desconhecido.`,
    anomalias: [
      "Água não deixa marcas físicas - é como passar através",
      "Objetos jogados no rio desaparecem para dimensão desconhecida",
      "Refletos na água mostram momentos passados",
      "Luz azul induz alterações de percepção",
      "Criaturas visíveis apenas na água (não na terra)",
      "Ponte óssea leva a localização diferente cada vez"
    ],
    perigos: [
      "Beber água = morte paranormal gradual (meses)",
      "Criaturas aquáticas podem puxar visitante para dentro",
      "Ponte óssea colapsa aleatoriamente",
      "Luz azul causa alucinações se exposto por tempo prolongado",
      "Levar objeto roubado do rio = perseguição paranormal"
    ],
    tempoSeguro: "45 minutos. Não beber água.",
    tempoPerigoso: "Noites de lua nova - criaturas mais ativas.",
    navigationDificuldade: "Média",
    notas: "Recomenda não atravessar ponte óssea sem inspeção. Rio tem sido registrado por 40+ anos sem mudança observável."
  },

  {
    id: "hospital-abandonado",
    nome: "Hospital Paranormal de Saúde Alternativa",
    zona: "Laranja",
    perigo: 7,
    descricaoAmbiente: `Hospital de 1920s completamente abandonado localizado em zona industrial. Edifício de tijolos vermelhos de 6 andares. 
Janelas são vitrais paranormais que mostram cenas médicas impossíveis. Entrada principal tem vãos de vidro - pode-se ver dentro livremente. 
Recepção está preservada perfeitamente - papéis ainda na mesa como se equipe fosse retornar amanhã. Corredores são incertos - 
parece haver movimento nas paredes. Cheiro é de desinfetante antigo misturado com algo orgânico e não-natural.`,
    estruturaFisica: `Hospital padrão: recepção, ala de emergência, 4 andares de quartos, cirurgias, laboratórios. 
Aproximadamente 100 quartos. Equipamento médico é obsoleto mas funcional paranormalmente. Cada andar tem ala própria. 
Morgue está no subsolo. Sistema de elevadores antigos (2 deles). Escadas de emergência em ambas extremidades.`,
    anomalias: [
      "Certos quartos parecem ocupados mas vazios",
      "Equipamento médico funciona por conta própria",
      "Vozes de pacientes ecoam de quartos vazios",
      "Sangue em paredes forma padrões que mudam",
      "Histórico médicos descrevem doenças que não existem",
      "Cirurgias podem ser 'observadas' em espelhos operatórios"
    ],
    perigos: [
      "Entidades médicas podem tentar 'curar' visitante",
      "Estar em quarto ocupado por muito tempo = infecção paranormal",
      "Morgue contém corpos que ainda se movem",
      "Equipamento pode ligar automaticamente e prejudicar",
      "Se dormir no hospital = acordar dias depois"
    ],
    tempoSeguro: "60 minutos máximo. Evitar andares superiores.",
    tempoPerigoso: "Mais ativo entre 3:00-5:00 AM (horas críticas em hospital paranormal).",
    navigationDificuldade: "Média",
    notas: "Recomenda não descer ao subsolo sem equipe. Históricos médicos contêm informações úteis sobre entidades de Sangue."
  },

  {
    id: "mercado-noturno",
    nome: "Mercado Noturno Paranormal",
    zona: "Amarela",
    perigo: 5,
    descricaoAmbiente: `Mercado que existe apenas entre 00:00-4:00 AM. Localização muda - encontrado em diferentes bairros cada noite. 
Estrutura é barracas de lona preta sob tenda maior. Vendedores são humanoides paranormais com cicatrizes comerciais. 
Mercadorias são impossíveis - vidro em pó que cura, cristais que sussurram verdades, símbolos que se movem. 
Cheiro é de especiarias estranhas e tinta paranormal. Som é sussurros de negociação em linguagens não-humanas.`,
    estruturaFisica: `Área aproximadamente 100m x 50m. 20-30 barracas. Ruas de acesso. Praça central com vendedor central. 
Algumas barracas permanentes (sempre no mesmo 'local' dentro mercado), outras mudam. Sem piso definido - terra ou madeira. 
Tenda principal em estrutura de madeira paranormal.`,
    anomalias: [
      "Mercado só existe à noite",
      "Localizações mudam cada noite mas padrão reconhecível",
      "Vendedores conhecem desejos do comprador",
      "Preços são sempre justo (do perspectiva do vendedor)",
      "Objetos comprados afetam realidade diferente cada vez",
      "Moeda paranormal tem aceitação universal"
    ],
    perigos: [
      "Compra de certos itens pode atrair entidades",
      "Vendedores podem ser hostis a negociação ruim",
      "Sair do mercado entre 1:00-2:00 AM = perda de tempo (aparece 6h depois)",
      "Alguns itens são amaldiçoados disfarçadamente"
    ],
    tempoSeguro: "2-3 horas. Sair antes de 3:30 AM.",
    tempoPerigoso: "Entre 1:00-2:00 AM mercado é mais denso - fácil se perder.",
    navigationDificuldade: "Baixa",
    notas: "Ótimo lugar para obter artefatos paranormais. Negociar é essencial - primeira oferta raramente é verdadeira."
  }
];
