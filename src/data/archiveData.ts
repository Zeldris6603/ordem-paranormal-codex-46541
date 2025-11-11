export const archiveItems = [
  // DOSSIÊS - AGENTES ORIGINAIS
  {
    id: "dossier-marine",
    title: "Marine Flamarion",
    type: "dossier" as const,
    classification: "NIVEL ALFA",
    preview: "Única sobrevivente lúcida do Incidente Deus da Morte. Carreg a culpa de três mortes. Possível portadora da Maldição Flamarion.",
    content: `
      <p><strong>NOME:</strong> Marine Flamarion</p>
      <p><strong>IDADE:</strong> 30-31 anos</p>
      <p><strong>CAMINHO:</strong> Energia</p>
      <p><strong>STATUS:</strong> Ativa (reintegrada após 2 anos de afastamento)</p>
      
      <p><strong>PERFIL PSICOLÓGICO:</strong></p>
      <p>Marine é uma sobrevivente no sentido mais cruel da palavra. Ela não apenas sobreviveu ao encontro com o Deus da Morte - ela carrega o peso de ter terminado a vida de Aristoteles quando este enlouqueceu. Seus olhos refletem uma frieza adquirida através do trauma, mas por baixo ainda arde a chama de quem se recusa a desistir.</p>
      
      <p><strong>HISTÓRICO:</strong></p>
      <p>Filha de uma linhagem antiga, Marine sempre demonstrou afinidade anormal com fenômenos energéticos. Entrou para a Ordo aos 24 anos, rapidamente ascendendo nas fileiras. Formou dupla inseparável com seu irmão Firenze até o incidente que o matou.</p>
      
      <p><strong>HABILIDADES MANIFESTADAS:</strong></p>
      <ul>
        <li>Manipulação de energia vital em pequena escala</li>
        <li>Sentidos paranormais aguçados (consegue "sentir" anomalias)</li>
        <li>Resistência mental excepcional (sobreviveu à presença do Deus da Morte)</li>
        <li>NOVA MANIFESTAÇÃO: Desde o incidente, suas mãos ocasionalmente brilham com luz azulada ao tocar objetos ligados ao Outro Lado</li>
      </ul>
      
      <p><strong>NOTA CONFIDENCIAL - VERÍSSIMO:</strong></p>
      <p style="color: #ef4444;">"Marine não é apenas uma sobrevivente. Ela é a chave. A Maldição Flamarion não começou com o Deus da Morte - ele apenas a despertou. Sua linhagem está conectada aos primeiros rituais da Ordo. Ela precisa descobrir isso sozinha, ou a verdade a destruirá antes que possamos usá-la."</p>
    `
  },
  {
    id: "dossier-santer",
    title: "Santer",
    type: "dossier" as const,
    classification: "NIVEL ALFA",
    preview: "Envelheceu 10 anos em segundos. Corpo marcado pelo toque do tempo. Fobia de contato físico desenvolvida após o incidente.",
    content: `
      <p><strong>NOME:</strong> Santer</p>
      <p><strong>IDADE CRONOLÓGICA:</strong> 30 anos</p>
      <p><strong>IDADE BIOLÓGICA:</strong> 40 anos</p>
      <p><strong>CAMINHO:</strong> Sangue / Morte </p>
      <p><strong>STATUS:</strong> Ativo (reintegrado com restrições médicas)</p>
      
      <p><strong>PERFIL PSICOLÓGICO:</strong></p>
      <p>O homem que retornou do Incidente Deus da Morte não é o mesmo que entrou. Santer desenvolveu hafefobia severa (medo de ser tocado) após sentir seu corpo envelhecer instantaneamente. Usa luvas o tempo todo. Evita multidões. Mas sua mente permanece afiada - talvez até mais do que antes.</p>
      
      <p><strong>HISTÓRICO:</strong></p>
      <p>Especialista em ocultismo e tradução de textos antigos. Foi recrutado pela Ordo após decifrar sozinho um grimório que levou a organização 3 anos para traduzir parcialmente. Sua expertise foi crucial em múltiplas operações antes do incidente.</p>
      
      <p><strong>HABILIDADES:</strong></p>
      <ul>
        <li>Conhecimento enciclopédico de rituais e símbolos paranormais</li>
        <li>Capacidade de "ler" anomalias através de análise de padrões</li>
        <li>Memória eidética (desenvolvida após o incidente)</li>
        <li>ANOMALIA: Consegue "ver" brevemente o passado de objetos ao tocá-los (novo, origem desconhecida)</li>
      </ul>
      
      <p><strong>CONDIÇÃO MÉDICA:</strong></p>
      <p>O envelhecimento acelerado deixou marcas permanentes: artrite precoce nas mãos, fadiga crônica e uma peculiaridade inexplicável - suas células parecem estar "dessincronizadas" do tempo linear. Análises mostram que diferentes partes de seu corpo envelhecem em ritmos distintos.</p>
      
      <p><strong>NOTA DO DR. SANTOS:</strong></p>
      <p>"Biologicamente, Santer é um paradoxo ambulante. Recomendo monitoramento constante. Há possibilidade de que o Deus da Morte tenha deixado mais do que apenas marcas físicas."</p>
    `
  },
  {
    id: "dossier-dante",
    title: "Dante",
    type: "dossier" as const,
    classification: "ACESSO RESTRITO",
    preview: "O Resgatador. 15 anos de serviço impecável. Nunca perdeu um agente. Resistência paranormal inexplicável.",
    content: `
      <p><strong>NOME CÓDIGO:</strong> Dante</p>
      <p><strong>NOME REAL:</strong> [REDACTED]</p>
      <p><strong>IDADE:</strong> [REDACTED]</p>
      <p><strong>CAMINHO:</strong> Morte (não confirmado oficialmente)</p>
      <p><strong>POSIÇÃO:</strong> Operador de Campo Sênior / Especialista em Resgate</p>
      
      <p><strong>HISTÓRICO:</strong></p>
      <p>Agente veterano da Ordo com 15 anos de serviço documentado. Especializado em operações de alto risco e resgate em ambientes paranormais hostis. Foi o responsável pela extração de Marine Flamarion e Santer após o incidente do Deus da Morte - a única operação onde não conseguiu salvar todos.</p>
      
      <p><strong>HABILIDADES CONHECIDAS:</strong></p>
      <ul>
        <li>Expertise em combate corpo-a-corpo e armamento tático avançado</li>
        <li>Resistência anormal a efeitos paranormais (origem desconhecida)</li>
        <li>Conhecimento extenso sobre rituais de proteção e banimento</li>
        <li>Capacidade de permanecer consciente em presença de entidades Classe-X</li>
        <li>CLASSIFICADO: [REDACTED]</li>
      </ul>
      
      <p><strong>INCIDENTES NOTÁVEIS:</strong></p>
      <ul>
        <li>Operação Nightfall (2015) - Extraiu 8 agentes de zona contaminada por Lodo Vivo</li>
        <li>Resgate do Subsolo (2018) - Único sobrevivente de encontro com [REDACTED]</li>
        <li>Incidente Deus da Morte (2 anos atrás) - Conseguiu extração parcial sob condições impossíveis</li>
      </ul>
      
      <p><strong>TEORIA NÃO CONFIRMADA:</strong></p>
      <p style="color: #ef4444;">Rumores internos sugerem que Dante já teve múltiplos encontros diretos com entidades de alto nível e sobreviveu a todos eles sem explicação lógica. Alguns agentes acreditam que ele possui uma "marca" de proteção concedida por algo do Outro Lado. Outros teorizam que Dante não é totalmente humano.</p>
      
      <p><strong>NOTA DE VERÍSSIMO:</strong></p>
      <p>"Dante é nosso melhor operador de campo, mas também nossa maior incógnita. Ele nunca fala sobre como sobrevive ao impossível. Não podemos forçá-lo a revelar - precisamos dele vivo mais do que precisamos de respostas."</p>
    `
  },
  {
    id: "dossier-verissimo",
    title: "Veríssimo",
    type: "dossier" as const,
    classification: "NIVEL ALFA",
    preview: "Diretor de Operações da Ordo. Autoridade máxima em decisões de campo. Conexões desconhecidas.",
    content: `
      <p><strong>NOME:</strong> Veríssimo</p>
      <p><strong>POSIÇÃO:</strong> Diretor de Operações / Conselho da Ordo</p>
      <p><strong>PERFIL:</strong></p>
      <p>Figura enigmática que ocupa uma das mais altas posições na hierarquia da Ordo Realitas. Veríssimo é conhecido por sua frieza calculista e por tomar decisões extremamente difíceis sem hesitação. Poucos agentes já o viram pessoalmente.</p>
      <p><strong>OBSERVAÇÕES:</strong></p>
      <ul>
        <li>Nunca foi visto em campo, mas possui conhecimento detalhado de todas as operações</li>
        <li>Aparenta ter mais de 60 anos, mas registros indicam que está na Ordo há pelo menos 40 anos</li>
        <li>Possui acesso a informações que precedem a fundação oficial da organização</li>
      </ul>
      <p><strong>TEORIA NÃO CONFIRMADA:</strong> Alguns agentes acreditam que Veríssimo não é humano, ou que foi alterado por algum ritual paranormal há décadas. Essa teoria nunca foi confirmada ou negada.</p>
    `
  },
  {
    id: "dossier-coletivo",
    title: "O Coletivo das Sombras",
    type: "dossier" as const,
    classification: "AMEAÇA EXISTENCIAL",
    preview: "Culto milenar dedicado ao Outro Lado. Células em 47 países. Conexão com a origem da Maldição Flamarion confirmada.",
    content: `
      <p><strong>ORGANIZAÇÃO:</strong> O Coletivo das Sombras</p>
      <p><strong>CLASSIFICAÇÃO:</strong> Culto Paranormal Ativo / Ameaça Existencial Global</p>
      <p><strong>FUNDAÇÃO:</strong> Desconhecida (evidências sugerem atividade desde pelo menos o século XV)</p>
      
      <p><strong>DESCRIÇÃO:</strong></p>
      <p>O Coletivo das Sombras não é simplesmente um culto - é uma rede descentralizada de células que opera há séculos com um único objetivo: acelerar a fusão entre nosso mundo e o Outro Lado. Eles acreditam que a "Realidade Verdadeira" existe do outro lado do véu, e que a humanidade está presa em uma prisão de carne e física limitada.</p>
      
      <p><strong>ESTRUTURA ORGANIZACIONAL:</strong></p>
      <ul>
        <li><strong>O Arauto:</strong> Líder supremo. Identidade desconhecida. Nunca fotografado ou capturado.</li>
        <li><strong>Os Sacerdotes das Sombras:</strong> 13 líderes regionais que coordenam as células.</li>
        <li><strong>Os Iniciados:</strong> Membros de baixo nível, muitos não sabem a verdadeira extensão da organização.</li>
        <li><strong>Os Tocados:</strong> Indivíduos que foram "transformados" através de rituais, servindo como soldados paranormais.</li>
      </ul>
      
      <p><strong>ATIVIDADES CONHECIDAS:</strong></p>
      <ul>
        <li>Rituais de invocação em locais de alto fluxo paranormal (leylines, cemitérios antigos, locais de tragédias em massa)</li>
        <li>Sequestro de indivíduos específicos para sacrifícios (sempre 7 vítimas por ritual maior)</li>
        <li>Criação deliberada de anomalias como o Lodo Vivo e Sussurros na Escuridão</li>
        <li>Infiltração confirmada em 23 governos nacionais e 47 corporações multinacionais</li>
        <li>Tráfico de artefatos paranormais no mercado negro</li>
        <li>Experimentação em crianças para "despertar" potencial paranormal</li>
      </ul>
      
      <p><strong>CONEXÃO COM A MALDIÇÃO FLAMARION:</strong></p>
      <p style="color: #ef4444;">Documentos recuperados de uma célula desmantelada em 2022 mencionam explicitamente "A Linhagem Flamarion" como "A Chave Final". O Coletivo acredita que os Flamarion carregam em seu sangue a capacidade de abrir uma "Porta Permanente" para o Outro Lado - algo que rituais convencionais não conseguem alcançar.</p>
      
      <p><strong>O ARAUTO - FRAGMENTOS DE INTELIGÊNCIA:</strong></p>
      <p>Menções ao Arauto aparecem em documentos que datam de 1647. Isso é impossível... a menos que:</p>
      <ul>
        <li>O título é passado através de gerações</li>
        <li>O Arauto conseguiu alguma forma de imortalidade paranormal</li>
        <li>O Arauto não é humano e nunca foi</li>
      </ul>
      
      <p><strong>ÚLTIMA COMUNICAÇÃO INTERCEPTADA (3 semanas atrás):</strong></p>
      <p style="font-style: italic; background: rgba(239, 68, 68, 0.1); padding: 10px;">"A Flamarion retornou. O ciclo se completa em 47 dias. Preparem o Ritual da Convergência Final. O Deus da Morte foi apenas o primeiro. A verdadeira porta está prestes a se abrir."</p>
      
      <p><strong>PROTOCOLO DE ENGAJAMENTO:</strong></p>
      <p>Membros capturados do Coletivo NUNCA devem ser interrogados sem presença de um especialista em resistência mental. 67% dos interrogadores desenvolveram sintomas de corrupção paranormal após exposição prolongada. Três interrogadores se juntaram ao Coletivo após supostamente terem sido "iluminados".</p>
    `
  },
  
  // DOSSIÊS - ENTIDADES HISTÓRICAS
  {
    id: "dossier-flamarion-curse",
    title: "A Maldição Flamarion - Arquivo Histórico",
    type: "dossier" as const,
    classification: "ULTRA-SECRETO",
    preview: "Origem da linhagem Flamarion. Pacto de sangue de 1647. Sete gerações. O preço ainda não foi completamente pago.",
    content: `
      <p><strong>DOCUMENTO:</strong> Arquivo Histórico da Maldição Flamarion</p>
      <p><strong>COMPILADO POR:</strong> Santer (com acesso especial de Veríssimo)</p>
      <p><strong>DATA:</strong> Presente</p>
      
      <p><strong>LINHA DO TEMPO HISTÓRICA:</strong></p>
      
      <p><strong>1647 - A ORIGEM:</strong></p>
      <p>Laurent Flamarion, alquimista e ocultista francês, conduziu um ritual proibido para salvar sua aldeia de uma praga paranormal. O ritual exigia um "Pacto de Sangue Perpétuo" - Laurent ofereceu sua linhagem inteira como âncoras vivas para conter uma entidade que ele chamou de "Le Dévoreur d'Âmes" (O Devorador de Almas).</p>
      
      <p><strong>O PACTO:</strong></p>
      <ul>
        <li>A entidade seria aprisionada usando o sangue Flamarion como corrente</li>
        <li>Cada sétima geração precisaria "renovar" o pacto através de sacrifício</li>
        <li>Em troca, os Flamarion receberiam "dádivas" - habilidades paranormais acima do normal</li>
        <li>Falha em renovar o pacto resultaria na liberação da entidade e extinção da linhagem</li>
      </ul>
      
      <p><strong>GERAÇÕES DOCUMENTADAS:</strong></p>
      <ul>
        <li><strong>1ª Geração (1647):</strong> Laurent Flamarion - Morreu durante o ritual, mas obteve sucesso</li>
        <li><strong>2ª Geração (1680):</strong> Marguerite Flamarion - Registros perdidos</li>
        <li><strong>3ª Geração (1725):</strong> [DADOS CORROMPIDOS]</li>
        <li><strong>4ª Geração (1780):</strong> Thomas Flamarion - Morreu em um "incidente" na Bastilha</li>
        <li><strong>5ª Geração (1847):</strong> Isabelle Flamarion - Fundadora de uma das primeiras células da Ordo</li>
        <li><strong>6ª Geração (1925):</strong> Antoine Flamarion - Desapareceu durante a Segunda Guerra Mundial</li>
        <li><strong>7ª Geração (PRESENTE):</strong> Marine e Firenze Flamarion</li>
      </ul>
      
      <p><strong>A REVELAÇÃO CRÍTICA:</strong></p>
      <p style="color: #ef4444;">Marine e Firenze representam a SÉTIMA GERAÇÃO. Segundo o pacto original, eles deveriam "renovar" o acordo. Mas ninguém lhes contou isso - a informação foi perdida ao longo dos séculos. O Incidente do Deus da Morte não foi um encontro aleatório. Foi a entidade original tentando coletar o que lhe é devido.</p>
      
      <p><strong>TEORIA DE SANTER:</strong></p>
      <p>"Firenze não morreu simplesmente por estar presente. Ele foi *consumido* como parte do pagamento. Mas Marine sobreviveu, o que significa que o ritual não se completou. A Maldição está ativa, mas instável. É por isso que as anomalias estão retornando - a entidade está tentando terminar o que começou."</p>
      
      <p><strong>O DEUS DA MORTE:</strong></p>
      <p>Análise de descrições históricas revela que a entidade encontrada dois anos atrás corresponde EXATAMENTE às descrições de "Le Dévoreur d'Âmes". O "Deus da Morte" não é seu nome real - é apenas como Marine o chamou. É a mesma entidade que Laurent Flamarion aprisionou em 1647.</p>
      
      <p><strong>E AGORA?</strong></p>
      <p>Marine é a última Flamarion viva. Se o pacto não for renovado ou quebrado definitivamente, a entidade se libertará completamente. Mas renovar o pacto significa... [REDACTED]</p>
      
      <p><strong>NOTA DE VERÍSSIMO (MANUSCRITA):</strong></p>
      <p style="font-style: italic; background: rgba(239, 68, 68, 0.1); padding: 10px;">"Eu sabia sobre o pacto desde o início. Foi por isso que permiti que Marine entrasse na Ordo - para mantê-la sob vigilância até o momento inevitável. Mas agora me questiono: estou protegendo a humanidade da entidade, ou protegendo a entidade de Marine? Ela pode ser mais perigosa do que aquilo que seus ancestrais aprisionaram."</p>
    `
  },

  // SÍMBOLOS
  {
    id: "symbol-spiral",
    title: "A Espiral Devoradora",
    type: "symbol" as const,
    classification: "CLASSE A",
    preview: "Símbolo recorrente em locais de manifestação. Geometria não-euclidiana. Efeitos cognitivos comprovados.",
    content: `
      <p><strong>SÍMBOLO:</strong> A Espiral Devoradora</p>
      <p><strong>APARÊNCIA:</strong> Espiral irregular que parece se mover quando observada diretamente. A geometria do símbolo não obedece às leis da física convencional.</p>
      <p><strong>LOCAIS DE APARIÇÃO:</strong></p>
      <ul>
        <li>Paredes de estruturas onde ocorreram manifestações</li>
        <li>Tatuagens em corpos de vítimas de possessão</li>
        <li>Desenhado em sangue em cenas de rituais</li>
        <li>Aparece espontaneamente em fotografias de locais assombrados</li>
      </ul>
      <p><strong>EFEITOS OBSERVADOS:</strong></p>
      <ul>
        <li>Exposição prolongada causa náusea e desorientação</li>
        <li>Pesadelos recorrentes com o símbolo</li>
        <li>Em casos extremos: alucinações e perda temporária de memória</li>
      </ul>
      <p><strong>TEORIA:</strong> O símbolo pode funcionar como uma "marca" ou "porta" para o Outro Lado. Análises sugerem que ele não é desenhado, mas sim "manifesta-se" em nossa realidade.</p>
      <p><strong>PROTOCOLO:</strong> Agentes expostos devem passar por avaliação psicológica imediata. Fotografias do símbolo devem ser armazenadas em arquivos físicos isolados.</p>
    `
  },
  {
    id: "symbol-eye",
    title: "O Olho que Tudo Vê",
    type: "symbol" as const,
    classification: "CLASSE B",
    preview: "Símbolo de vigilância paranormal. Associado a fenômenos de precognição e visões proféticas.",
    content: `
      <p><strong>SÍMBOLO:</strong> O Olho que Tudo Vê</p>
      <p><strong>APARÊNCIA:</strong> Um olho estilizado com três pupilas concêntricas, cercado por runas desconhecidas.</p>
      <p><strong>ORIGEM:</strong> Encontrado em textos ocultistas medievais e em inscrições pré-colombianas. Sua origem verdadeira é desconhecida, mas precede culturas modernas.</p>
      <p><strong>PROPRIEDADES:</strong></p>
      <ul>
        <li>Indivíduos próximos ao símbolo relatam sensação de "serem observados"</li>
        <li>Câmeras de segurança apresentam distorções visuais na presença do símbolo</li>
        <li>Alguns médiuns afirmam que o símbolo "mostra o futuro" a quem o contemplar</li>
      </ul>
      <p><strong>INCIDENTES REGISTRADOS:</strong> Em 2019, um agente da Ordo passou 3 horas observando o símbolo gravado em uma caverna. Ele posteriormente previu com precisão a data e local de uma manifestação paranormal que ocorreu 6 meses depois. No entanto, o agente desenvolveu paranoia severa e precisou ser afastado.</p>
      <p><strong>AVISO:</strong> Não observar o símbolo por mais de 30 segundos consecutivos.</p>
    `
  },

  // CRIATURAS
  {
    id: "creature-lodo",
    title: "O Lodo Vivo",
    type: "creature" as const,
    classification: "BIOHAZARD NÍVEL 4",
    preview: "Substância orgânica anômala. Comportamento predatório. Altamente corrosiva e aparentemente inteligente.",
    content: `
      <p><strong>DESIGNAÇÃO:</strong> O Lodo Vivo (Anomalia-077)</p>
      <p><strong>APARÊNCIA:</strong> Massa viscosa de coloração preta com reflexos esverdeados. Emite um odor pútrido característico. Temperatura corporal oscila entre 2°C e 60°C sem explicação.</p>
      <p><strong>COMPORTAMENTO:</strong></p>
      <ul>
        <li>Altamente agressivo a formas de vida orgânicas</li>
        <li>Demonstra comportamento de caça coordenado quando em grandes quantidades</li>
        <li>Capaz de infiltrar-se através de pequenas aberturas</li>
        <li>Parece "aprender" com encontros anteriores</li>
      </ul>
      <p><strong>PERIGOS:</strong></p>
      <ul>
        <li>Contato com pele causa queimaduras químicas graves</li>
        <li>Inalação dos vapores leva à insuficiência respiratória em minutos</li>
        <li>Vítimas absorvidas pelo lodo nunca foram recuperadas vivas</li>
        <li>Em casos extremos, o lodo pode "animar" cadáveres parcialmente dissolvidos</li>
      </ul>
      <p><strong>NEUTRALIZAÇÃO:</strong> Fogo é efetivo, mas o lodo tenta se "dividir" para escapar. Temperatura acima de 800°C necessária para eliminação completa. Ácido sulfúrico concentrado também é efetivo.</p>
      <p><strong>ORIGEM:</strong> Desconhecida. Amostras contêm DNA de múltiplas espécies, incluindo algumas não catalogadas pela ciência.</p>
    `
  },
  {
    id: "creature-sussurro",
    title: "Sussurros na Escuridão",
    type: "creature" as const,
    classification: "CLASSE COGNITIVA",
    preview: "Entidade incorpórea. Ataque psíquico primário. Manifesta-se através de sons e vozes.",
    content: `
      <p><strong>DESIGNAÇÃO:</strong> Sussurros na Escuridão (Anomalia-143)</p>
      <p><strong>APARÊNCIA:</strong> Não possui forma física visível. Manifesta-se primariamente através de fenômenos auditivos.</p>
      <p><strong>PADRÃO DE ATAQUE:</strong></p>
      <ul>
        <li>Fase 1: Vítima começa a ouvir sussurros incompreensíveis</li>
        <li>Fase 2: Sussurros se tornam mais altos e inteligíveis, revelando segredos e medos da vítima</li>
        <li>Fase 3: Vítima entra em estado catatônico, repetindo frases sem sentido</li>
        <li>Fase 4 (CRÍTICA): Vítima age violentamente contra si mesma ou outros</li>
      </ul>
      <p><strong>CARACTERÍSTICAS:</strong></p>
      <ul>
        <li>Prefere ambientes escuros e silenciosos</li>
        <li>Pode imitar vozes de pessoas conhecidas da vítima</li>
        <li>Atrai múltiplas vítimas simultaneamente</li>
        <li>Gravações de áudio não capturam os sussurros, sugerindo ataque direto ao cérebro</li>
      </ul>
      <p><strong>CONTRAMEDIDAS:</strong></p>
      <ul>
        <li>Iluminação intensa enfraquece a manifestação</li>
        <li>Ruído branco ou músicas altas podem interromper o ataque</li>
        <li>Treinamento de resistência mental é essencial</li>
        <li>Uso de protetores auriculares NÃO é efetivo</li>
      </ul>
      <p><strong>NOTA:</strong> 3 agentes foram perdidos para esta anomalia em 2021. Protocolos atualizados exigem equipes de no mínimo 4 pessoas ao investigar suspeitas de Sussurros.</p>
    `
  },
  {
    id: "creature-boneco",
    title: "O Boneco de Vidro",
    type: "creature" as const,
    classification: "CLASSE FÍSICA",
    preview: "Entidade humanóide construída de vidro e metal. Movimento errático. Hostil a todos os seres vivos.",
    content: `
      <p><strong>DESIGNAÇÃO:</strong> O Boneco de Vidro (Anomalia-203)</p>
      <p><strong>APARÊNCIA:</strong> Aproximadamente 1,80m de altura. Corpo composto de fragmentos de vidro e peças metálicas enferrujadas. Cabeça sem rosto, apenas uma superfície lisa de vidro negro. Braços desproporcionalmente longos terminando em lâminas de vidro afiadas.</p>
      <p><strong>COMPORTAMENTO:</strong></p>
      <ul>
        <li>Patrulha áreas em padrões repetitivos, mas imprevisíveis</li>
        <li>Movimento silencioso, apesar da constituição</li>
        <li>Ataca qualquer ser vivo que entre em seu território</li>
        <li>Demonstra inteligência tática básica</li>
      </ul>
      <p><strong>PERIGOS:</strong></p>
      <ul>
        <li>Extremamente rápido em curtas distâncias</li>
        <li>Lâminas podem decapitar ou amputar membros facilmente</li>
        <li>Fragmentos de vidro do corpo são contaminados com toxina desconhecida</li>
        <li>Parece "sentir" movimento e vibrações mesmo sem olhos</li>
      </ul>
      <p><strong>FRAQUEZAS:</strong></p>
      <ul>
        <li>Explosivos de alto calibre podem fragmentar o corpo</li>
        <li>Som de alta frequência causa desorientação temporária</li>
        <li>Fogo não é efetivo, mas derretimento localizado pode limitar mobilidade</li>
      </ul>
      <p><strong>ORIGEM:</strong> Acredita-se que seja resultado de um ritual que foi mal executado, fundindo um ser humano com materiais. Ainda não foi possível confirmar se há consciência humana remanescente.</p>
    `
  },

  // ARTEFATOS
  {
    id: "artifact-lanterna",
    title: "Lanterna de Ferro Negro",
    type: "artifact" as const,
    classification: "ARTEFATO ATIVO",
    preview: "Fonte de luz anômala. Revela entidades invisíveis ao olho nu. Efeitos colaterais em uso prolongado.",
    content: `
      <p><strong>ARTEFATO:</strong> Lanterna de Ferro Negro</p>
      <p><strong>DESCRIÇÃO FÍSICA:</strong> Lanterna de ferro fundido com inscrições em língua desconhecida. Não possui fonte de combustível visível, mas emite luz constantemente. Peso anormal: 12kg apesar do tamanho compacto.</p>
      <p><strong>PROPRIEDADES:</strong></p>
      <ul>
        <li>Emite luz azulada que revela entidades paranormais invisíveis</li>
        <li>A luz não projeta sombras convencionais</li>
        <li>Criaturas do Outro Lado evitam ativamente a luz</li>
        <li>Símbolos paranormais brilham intensamente quando iluminados</li>
      </ul>
      <p><strong>EFEITOS COLATERAIS:</strong></p>
      <ul>
        <li>Usuários relatam ouvir vozes após 20 minutos de uso</li>
        <li>Exposição prolongada causa insônia severa e pesadelos</li>
        <li>Em casos extremos: visões de "outro lugar" mesmo sem a lanterna</li>
      </ul>
      <p><strong>HISTÓRIA:</strong> Recuperada em 2015 de um antiquário em São Paulo. O proprietário havia desaparecido misteriosamente 3 dias antes. Câmeras de segurança mostraram ele andando em círculos na loja enquanto segurava a lanterna, até simplesmente desaparecer.</p>
      <p><strong>PROTOCOLO DE USO:</strong> Máximo 15 minutos por operação. Avaliação psicológica obrigatória após o uso.</p>
    `
  },
  {
    id: "artifact-mascara",
    title: "Máscara da Concordância",
    type: "artifact" as const,
    classification: "ARTEFATO PERIGOSO",
    preview: "Máscara cerimonial. Concede habilidades de persuasão anômalas. Usuário gradualmente perde identidade própria.",
    content: `
      <p><strong>ARTEFATO:</strong> Máscara da Concordância</p>
      <p><strong>DESCRIÇÃO FÍSICA:</strong> Máscara de porcelana branca com sorriso fixo pintado. Olhos vazios e sem expressão. A parte interna tem textura orgânica desconfortável ao toque.</p>
      <p><strong>PROPRIEDADES:</strong></p>
      <ul>
        <li>Usuário se torna extremamente persuasivo e carismático</li>
        <li>Pessoas ao redor sentem confiança irracional no usuário</li>
        <li>Comandos verbais são aceitos sem questionamento</li>
        <li>Efeito persiste por até 1 hora após remover a máscara</li>
      </ul>
      <p><strong>PERIGOS CRÍTICOS:</strong></p>
      <ul>
        <li>Máscara "gruda" no rosto e é dolorosa de remover após 10 minutos</li>
        <li>Usuário começa a "esquecer" quem é, adotando personalidade fabricada</li>
        <li>Uso repetido resulta em perda permanente de identidade</li>
        <li>Em estágios finais, usuário não consegue mais tirar a máscara</li>
      </ul>
      <p><strong>CASOS DOCUMENTADOS:</strong> Um agente da Ordo usou a máscara durante uma infiltração em 2018. Missão foi bem-sucedida, mas o agente nunca recuperou completamente sua personalidade original. Atualmente em observação permanente.</p>
      <p><strong>STATUS ATUAL:</strong> BLOQUEADO. Uso proibido exceto com autorização direta de Veríssimo.</p>
    `
  },

  // RELATÓRIOS
  {
    id: "report-god-death",
    title: "Relatório: Incidente Deus da Morte",
    type: "report" as const,
    classification: "NIVEL MÁXIMO",
    preview: "Relatório oficial do incidente que dizimou a equipe Flamarion. Múltiplas fatalidades. Classificação máxima.",
    content: `
      <p><strong>RELATÓRIO DE INCIDENTE #1247-ALPHA</strong></p>
      <p><strong>DATA:</strong> [REDACTED], 2 anos atrás</p>
      <p><strong>EQUIPE:</strong> Flamarion (Marine, Firenze), Santer, Mathias Capulus, Aristoteles</p>
      <p><strong>OBJETIVO DA MISSÃO:</strong> Investigar anomalia de Classe-S em [LOCALIZAÇÃO REDACTED]</p>
      
      <p><strong>RESUMO DO INCIDENTE:</strong></p>
      <p>Equipe localizou foco da anomalia em estrutura subterrânea. Ao adentrarem a câmara central, confrontaram entidade não catalogada, posteriormente designada "Deus da Morte".</p>
      
      <p><strong>BAIXAS:</strong></p>
      <ul>
        <li><strong>Firenze Flamarion:</strong> KIA - Envelhecimento acelerado catastrófico. Corpo desintegrado.</li>
        <li><strong>Mathias Capulus:</strong> KIA - Envelhecimento acelerado catastrófico. Corpo desintegrado.</li>
        <li><strong>Aristoteles:</strong> KIA - Terminado por Marine Flamarion após ataque psicótico contra equipe.</li>
      </ul>
      
      <p><strong>SOBREVIVENTES:</strong></p>
      <ul>
        <li><strong>Marine Flamarion:</strong> Trauma psicológico severo. Afastada de operações ativas.</li>
        <li><strong>Santer:</strong> Envelhecimento físico de 10 anos. Danos permanentes. Afastado de operações ativas.</li>
      </ul>
      
      <p><strong>DESCRIÇÃO DA ENTIDADE:</strong></p>
      <p>"Deus da Morte" - Entidade humanóide de aproximadamente 3 metros de altura. Corpo parece ser composto de sombras solidificadas. Rosto não possui características humanas distinguíveis. Emana aura de decadência temporal.</p>
      
      <p><strong>HABILIDADES OBSERVADAS:</strong></p>
      <ul>
        <li>Envelhecimento por toque (extremamente rápido e letal)</li>
        <li>Indução de loucura em proximidade</li>
        <li>Regeneração ou invulnerabilidade (não confirmado)</li>
        <li>Presença causa falha em equipamentos eletrônicos</li>
      </ul>
      
      <p><strong>AÇÃO DE RESGATE:</strong> Operador "Dante" extraiu os sobreviventes. Método de extração: [REDACTED]</p>
      
      <p><strong>STATUS ATUAL DA ENTIDADE:</strong> Desconhecido. Área foi lacrada. Manifestações similares reportadas em 4 localizações nos últimos 6 meses.</p>
      
      <p><strong>CONCLUSÃO:</strong> Este incidente representa falha catastrófica de protocolo. Revisão completa de procedimentos recomendada. Entidade demonstra capacidades além de classificações existentes. Sugerimos criação de Classe-X para ameaças deste nível.</p>
      
      <p style="color: #ef4444; font-weight: bold;">AVISO: A ENTIDADE PODE AINDA ESTAR ATIVA. TODAS AS OPERAÇÕES FUTURAS DEVEM CONSIDERAR POSSIBILIDADE DE RECONTATO.</p>
    `
  },
  {
    id: "report-lodo-origin",
    title: "Relatório: Origem do Lodo",
    type: "report" as const,
    classification: "CONFIDENCIAL",
    preview: "Análise laboratorial e teoria sobre a origem do Lodo Vivo. Conexão com atividades de O Coletivo.",
    content: `
      <p><strong>RELATÓRIO DE ANÁLISE #0894</strong></p>
      <p><strong>DATA:</strong> Março de 2023</p>
      <p><strong>ELABORADO POR:</strong> Dra. Elisa Monteiro, Departamento de Pesquisa Paranormal</p>
      
      <p><strong>OBJETO DE ESTUDO:</strong> Amostras de "Lodo Vivo" (Anomalia-077)</p>
      
      <p><strong>ANÁLISE QUÍMICA:</strong></p>
      <p>Composição extremamente anômala. Presença de elementos orgânicos e inorgânicos em proporções impossíveis. Sequenciamento genético revelou DNA de no mínimo 47 espécies diferentes, incluindo:</p>
      <ul>
        <li>23 espécies animais terrestres</li>
        <li>12 espécies vegetais</li>
        <li>8 espécies marinhas</li>
        <li>4 sequências não identificáveis (possível origem extraplanar)</li>
      </ul>
      
      <p><strong>COMPORTAMENTO CELULAR:</strong></p>
      <p>As células do lodo não seguem comportamento biológico normal. Elas parecem "comunicar-se" de forma coordenada, sugerindo inteligência coletiva primitiva. Experimentos mostram que o lodo "aprende" com exposição repetida aos mesmos estímulos.</p>
      
      <p><strong>TEORIA DE ORIGEM:</strong></p>
      <p>Após análise de documentos apreendidos de células de O Coletivo das Sombras, acreditamos que o Lodo Vivo seja resultado de um ritual de "fusão" mal sucedido. O Coletivo estaria tentando criar um "organismo universal" que pudesse servir de ponte entre nosso mundo e o Outro Lado.</p>
      
      <p><strong>EVIDÊNCIAS:</strong></p>
      <ul>
        <li>Primeiras aparições do lodo coincidiram com aumento de atividade do Coletivo</li>
        <li>Símbolos encontrados em cenas de manifestação do lodo são idênticos aos usados pelo Coletivo</li>
        <li>Interrogatório de membro capturado revelou referências a "O Amálgama Perfeito"</li>
      </ul>
      
      <p><strong>CONCLUSÃO:</strong></p>
      <p>O Lodo Vivo não é uma anomalia natural. É uma arma biológica paranormal criada deliberadamente. Se essa teoria estiver correta, O Coletivo possui capacidade de produzir mais instâncias do lodo.</p>
      
      <p><strong>RECOMENDAÇÃO:</strong> Localização e neutralização de laboratórios do Coletivo deve ser prioridade máxima.</p>
    `
  },

  // LOCALIZAÇÕES
  {
    id: "location-hotel-cascavel",
    title: "Hotel Cascavel",
    type: "location" as const,
    classification: "ZONA VERMELHA",
    preview: "Hotel abandonado no interior de São Paulo. 47 pessoas desapareceram simultaneamente em 1987. Estrutura permanece intacta, mas vazia.",
    content: `
      <p><strong>LOCALIZAÇÃO:</strong> Hotel Cascavel</p>
      <p><strong>ENDEREÇO:</strong> [REDACTED], Interior de São Paulo</p>
      <p><strong>CLASSIFICAÇÃO:</strong> Zona Vermelha - Acesso Proibido Sem Autorização Alfa</p>
      <p><strong>STATUS:</strong> Abandonado desde 1987</p>
      
      <p><strong>HISTÓRICO:</strong></p>
      <p>O Hotel Cascavel era um estabelecimento de médio porte frequentado por famílias durante as férias. Na noite de 15 de agosto de 1987, todos os 47 hóspedes e funcionários presentes no hotel desapareceram simultaneamente. Nenhum corpo foi encontrado. Nenhum rastro de violência. As camas estavam desfeitas, alimentos ainda estavam nas mesas do restaurante, mas todas as pessoas simplesmente... sumiram.</p>
      
      <p><strong>DESCOBERTAS NO LOCAL:</strong></p>
      <ul>
        <li>Todos os relógios do hotel pararam às 3:47 da manhã</li>
        <li>Temperaturas anormalmente baixas em todos os quartos (média de 8°C mesmo no verão)</li>
        <li>Espelhos apresentam reflexos "atrasados" em 3-5 segundos</li>
        <li>Gravações de áudio captam sussurros em idioma desconhecido</li>
        <li>Quartos 47, 147 e 247 têm portas que não permanecem fechadas</li>
      </ul>
      
      <p><strong>FENÔMENOS REPORTADOS:</strong></p>
      <ul>
        <li>Aparições de figuras humanas nas janelas (sempre às 3:47 da manhã)</li>
        <li>Sons de festa e conversas vindos do salão de eventos vazio</li>
        <li>Telefonemas de dentro do hotel para números próximos (linha foi desconectada há 30 anos)</li>
        <li>Agentes relatam sensação de "serem seguidos" pelos corredores</li>
        <li>Objetos pessoais dos hóspedes permanecem nos quartos, intocados</li>
      </ul>
      
      <p><strong>TEORIA PRINCIPAL:</strong></p>
      <p>Investigações da Ordo sugerem que o hotel foi construído sobre um ponto de convergência paranormal. Análise de registros históricos revela que o terreno era um antigo cemitério indígena. A combinação de energia residual com um ritual realizado pelo Coletivo das Sombras pode ter criado um "deslocamento temporal" - as 47 pessoas não morreram, mas foram arrancadas de nossa linha temporal.</p>
      
      <p><strong>ÚLTIMO INCIDENTE:</strong></p>
      <p style="color: #ef4444;">Três agentes entraram no hotel em 2021 para investigação de rotina. Dois retornaram. O terceiro agente, Martins, foi encontrado três dias depois no quarto 247, envelhecido 20 anos e incapaz de falar. Ele repetia apenas: "Eles ainda estão lá. Eles nunca saíram. Estão presos no 15 de agosto."</p>
      
      <p><strong>PROTOCOLO ATUAL:</strong></p>
      <p>Acesso proibido. Perímetro de segurança de 200 metros. Monitoramento por câmeras remotas 24/7. Qualquer movimento detectado dentro do hotel deve ser reportado imediatamente ao Conselho.</p>
      
      <p><strong>NOTA DE VERÍSSIMO:</strong></p>
      <p style="font-style: italic;">"O Hotel Cascavel não é apenas assombrado. É uma ferida aberta na realidade. Cada vez que entramos lá, corremos o risco de juntar-nos às 47 pessoas. Ou talvez... elas já voltaram, mas em um presente diferente do nosso."</p>
    `
  },
  {
    id: "location-metro-fantasma",
    title: "Metrô Linha Fantasma",
    type: "location" as const,
    classification: "ZONA AMARELA",
    preview: "Estação de metrô desativada na Linha 3-Vermelha. Relatos de 'trens fantasmas' que aparecem às 2:13 da madrugada. Passageiros sombrios.",
    content: `
      <p><strong>LOCALIZAÇÃO:</strong> Estação [REDACTED] - Linha Fantasma</p>
      <p><strong>LOCALIZAÇÃO:</strong> Sistema de Metrô, São Paulo - SP</p>
      <p><strong>CLASSIFICAÇÃO:</strong> Zona Amarela - Acesso Restrito</p>
      <p><strong>STATUS:</strong> Oficialmente desativada desde 1998</p>
      
      <p><strong>HISTÓRICO:</strong></p>
      <p>Esta estação foi fechada oficialmente devido a "problemas estruturais", mas documentos internos revelam a verdadeira razão: 12 funcionários do metrô desapareceram nos túneis adjacentes em um período de 3 meses. A última operadora a desaparecer, Ana Carvalho, enviou uma mensagem de rádio antes de sumir: "Tem um trem chegando... mas não está no cronograma. Os passageiros... eles não têm rosto."</p>
      
      <p><strong>O TREM FANTASMA:</strong></p>
      <p>Às 2:13 da madrugada, câmeras de segurança captam a chegada de um trem nas plataformas vazias. O trem:</p>
      <ul>
        <li>Não aparece nos sistemas de rastreamento</li>
        <li>Não possui número de identificação</li>
        <li>As janelas mostram silhuetas de passageiros, mas nenhum rosto distinguível</li>
        <li>As portas se abrem por exatamente 47 segundos</li>
        <li>O trem desaparece nos túneis, mas nunca é detectado em outras estações</li>
      </ul>
      
      <p><strong>FENÔMENOS ASSOCIADOS:</strong></p>
      <ul>
        <li>Vozes ecoando nos túneis: "Próxima estação... o fim da linha..."</li>
        <li>Correntes de ar gelado mesmo com sistema de ventilação desligado</li>
        <li>Pegadas molhadas aparecendo espontaneamente nas plataformas (sem fonte de água)</li>
        <li>Agentes relatam ouvir anúncios de estações que nunca existiram</li>
        <li>Equipamentos eletrônicos apresentam interferências severas</li>
      </ul>
      
      <p><strong>EXPERIMENTO DE 2019:</strong></p>
      <p>A Ordo posicionou 3 agentes na plataforma às 2:13 da madrugada com ordem de observar, mas NÃO embarcar no trem. Quando o trem chegou, os agentes relataram:</p>
      <p style="background: rgba(239, 68, 68, 0.1); padding: 10px; font-style: italic;">"Os passageiros estavam olhando para nós através das janelas. Não tinham olhos, mas sabíamos que estavam nos vendo. Um deles pressionou a mão contra o vidro. A mão atravessou o vidro como se fosse água. Ouvimos uma voz: 'Próxima descida: vocês.'"</p>
      
      <p><strong>OS DESAPARECIDOS:</strong></p>
      <p>Investigação posterior descobriu que todas as 12 pessoas desaparecidas foram vistas pela última vez próximas à entrada da estação desativada. Testemunhas relatam que elas "pareciam estar seguindo algo" e "olhavam para a escada como se ouvissem alguém chamando".</p>
      
      <p><strong>CONEXÃO COM O OUTRO LADO:</strong></p>
      <p>Santer teoriza que o trem não é uma assombração tradicional, mas sim um "transporte inter-dimensional". As pessoas que embarcam não morrem - elas são levadas para algum lugar. Mas para onde? E por quê?</p>
      
      <p><strong>PROTOCOLO ATUAL:</strong></p>
      <p>Monitoramento remoto contínuo. Entrada bloqueada fisicamente com selos paranormais renovados mensalmente. Qualquer pessoa vista próxima à entrada deve ser abordada e orientada a se afastar. Se alguém entrar, NÃO perseguir. Considerar perdido.</p>
      
      <p><strong>NOTA PERTURBADORA:</strong></p>
      <p style="color: #ef4444;">Recentemente, usuários comuns do metrô começaram a relatar "ver" a estação fantasma ao passar pelos túneis. Eles juram ver pessoas na plataforma, acenando. O véu está enfraquecendo.</p>
    `
  },
  {
    id: "location-cemiterio-esquecidos",
    title: "Cemitério dos Esquecidos",
    type: "location" as const,
    classification: "ZONA VERMELHA",
    preview: "Cemitério no qual túmulos aparecem e desaparecem. Nomes nas lápides mudam. Mortos que não estão mortos.",
    content: `
      <p><strong>LOCALIZAÇÃO:</strong> Cemitério dos Esquecidos</p>
      <p><strong>ENDEREÇO:</strong> Zona Rural, [REDACTED], Minas Gerais</p>
      <p><strong>CLASSIFICAÇÃO:</strong> Zona Vermelha - Extremo Perigo Cognitivo</p>
      <p><strong>STATUS:</strong> Monitorado, mas não contido</p>
      
      <p><strong>HISTÓRICO:</strong></p>
      <p>O Cemitério dos Esquecidos não tem nome oficial. Registros históricos sobre sua fundação são contraditórios - alguns documentos datam de 1823, outros de 1673, e há uma lápide com data de 2047. Sim, uma data no futuro. A lápide existe fisicamente. O nome gravado é de uma agente da Ordo que está viva e ativa.</p>
      
      <p><strong>ANOMALIAS DOCUMENTADAS:</strong></p>
      <ul>
        <li><strong>Túmulos Transitórios:</strong> Lápides aparecem e desaparecem. Um túmulo mapeado na segunda-feira pode não estar lá na terça.</li>
        <li><strong>Nomes Mutantes:</strong> Os nomes nas lápides mudam. Uma lápide que dizia "João Silva" ontem pode dizer "Maria Santos" hoje.</li>
        <li><strong>Datas Impossíveis:</strong> Datas de nascimento e morte que não fazem sentido (morte antes do nascimento, datas futuras, anos que não existem).</li>
        <li><strong>Túmulos Duplicados:</strong> Mesma pessoa enterrada em 5 lugares diferentes do cemitério, com datas de morte diferentes.</li>
        <li><strong>Sepulturas Vazias:</strong> Exumações revelam caixões vazios, mesmo em túmulos recentes com registros de enterro.</li>
      </ul>
      
      <p><strong>FENÔMENO CENTRAL - OS MORTOS-VIVOS-MORTOS:</strong></p>
      <p>O aspecto mais perturbador do cemitério é que pessoas cujos nomes aparecem nas lápides ocasionalmente "sentem" algo errado. Foram documentados 23 casos de indivíduos que:</p>
      <ul>
        <li>Encontraram suas próprias lápides no cemitério (mesmo estando vivos)</li>
        <li>Começaram a ter memórias de suas "próprias mortes"</li>
        <li>Gradualmente "esquecem" que estão vivos</li>
        <li>Eventualmente desaparecem, e um corpo é encontrado em seu túmulo, como se sempre estivesse estado lá</li>
      </ul>
      
      <p><strong>CASO DOCUMENTADO - AGENTE RODRIGUES:</strong></p>
      <p style="background: rgba(239, 68, 68, 0.1); padding: 10px;">Em 2020, Agente Rodrigues encontrou sua lápide durante uma investigação de rotina. Data de morte: 23 de março de 2020. Ele encontrou a lápide em 18 de março de 2020. Nos dias seguintes, Rodrigues começou a ter "memórias" de um acidente de carro. No dia 22, ele estava convencido de que havia morrido. No dia 23, ele desapareceu. Seu corpo foi encontrado no túmulo, em estado de decomposição de 3 dias. A autópsia confirmou: morte por acidente de carro. Mas Rodrigues não possuía carro, e nenhum acidente foi registrado.</p>
      
      <p><strong>TEORIA DE SANTER:</strong></p>
      <p>"O Cemitério dos Esquecidos não é um lugar onde os mortos descansam. É um lugar onde a morte 'procura' por suas vítimas. As lápides não marcam quem morreu - elas marcam quem VAI morrer, ou quem DEVERIA ter morrido, ou quem morreu em uma realidade alternativa. O cemitério é uma interseção de linhas temporais, e a morte não entende qual é a 'correta'."</p>
      
      <p><strong>O COVEIRO:</strong></p>
      <p>Sempre há um coveiro no cemitério. Mas nunca é a mesma pessoa. Múltiplos agentes reportaram falar com "o coveiro", mas as descrições nunca batem. Jovem, velho, homem, mulher, diferentes etnias. Quando questionados, todos os "coveiros" dizem a mesma coisa: "Estou apenas cuidando dos que foram esquecidos."</p>
      
      <p><strong>AVISO CRÍTICO:</strong></p>
      <p style="color: #ef4444; font-weight: bold;">NUNCA procure por seu próprio nome no cemitério. NUNCA leia os nomes nas lápides em voz alta. NUNCA aceite flores do coveiro. Se você encontrar seu nome, SAIA IMEDIATAMENTE e reporte ao Conselho. Você tem no máximo 72 horas.</p>
      
      <p><strong>PROTOCOLO ATUAL:</strong></p>
      <p>Investigações permitidas apenas com equipes de 3+ agentes. Tempo máximo no local: 30 minutos. Nenhum agente deve ir sozinho. Se um membro da equipe encontrar sua lápide, extração imediata e quarentena psicológica.</p>
    `
  },
  {
    id: "location-casa-invertida",
    title: "A Casa Invertida",
    type: "location" as const,
    classification: "ZONA LARANJA",
    preview: "Residência onde a física não funciona corretamente. Gravidade opcional. Portas que levam a lugares impossíveis. Tempo não-linear.",
    content: `
      <p><strong>LOCALIZAÇÃO:</strong> A Casa Invertida</p>
      <p><strong>ENDEREÇO:</strong> Rua [REDACTED], Bairro Histórico, Ouro Preto - MG</p>
      <p><strong>CLASSIFICAÇÃO:</strong> Zona Laranja - Distorção Física Extrema</p>
      <p><strong>STATUS:</strong> Contida, mas instável</p>
      
      <p><strong>HISTÓRICO:</strong></p>
      <p>A Casa Invertida é uma residência colonial do século XVIII que pertenceu a um alquimista português chamado Baltazar Correia. Segundo registros, Baltazar estava obcecado com "inverter as leis de Deus" e conduziu experimentos proibidos no porão da casa. Em 1789, vizinhos reportaram ver a casa "girar" e ouvir gritos. Quando autoridades entraram, encontraram Baltazar morto no teto do porão - como se tivesse caído para cima.</p>
      
      <p><strong>ANOMALIAS FÍSICAS DOCUMENTADAS:</strong></p>
      <ul>
        <li><strong>Gravidade Variável:</strong> A gravidade dentro da casa muda de cômodo para cômodo. A sala de estar tem gravidade normal. A cozinha tem gravidade invertida. O quarto tem gravidade lateral.</li>
        <li><strong>Geometria Impossível:</strong> A casa tem 4 cômodos vistos de fora, mas 9 cômodos por dentro. Um corredor leva de volta ao mesmo cômodo, mas você entra por uma porta diferente da que saiu.</li>
        <li><strong>Portas Temporais:</strong> Abrir uma porta às 14:00 leva à cozinha. Abrir a mesma porta às 14:01 leva ao porão. Às 14:02, a porta se abre para um jardim que não existe.</li>
        <li><strong>Escadas Paradoxais:</strong> Uma escada que sobe por 3 andares, mas termina no térreo. Impossível, mas real.</li>
        <li><strong>Tempo Não-Linear:</strong> Relógios funcionam de trás para frente em alguns cômodos. Agentes relatam entrar às 15:00 e sair às 14:45, mas com memórias de uma hora de exploração.</li>
      </ul>
      
      <p><strong>FENÔMENOS PARANORMAIS:</strong></p>
      <ul>
        <li>Vozes ecoando em idiomas antigos (latim, grego arcaico, algo mais velho)</li>
        <li>Sombras que se movem contra a fonte de luz</li>
        <li>Objetos que caem para cima ou para os lados</li>
        <li>Reflexos em espelhos mostram cômodos diferentes dos reais</li>
        <li>Temperatura varia de -5°C a 45°C em questão de segundos</li>
      </ul>
      
      <p><strong>O PORÃO:</strong></p>
      <p style="background: rgba(239, 68, 68, 0.1); padding: 10px;">O porão é o epicentro da anomalia. Tudo está de cabeça para baixo, incluindo móveis, objetos e... o corpo de Baltazar, ainda lá, mumificado, preso ao teto como se a gravidade fosse invertida apenas para ele. Seu diário foi encontrado ao lado do corpo. Última entrada: "Consegui. O mundo virou. Ou fui eu que virei? Não consigo mais lembrar qual é o lado certo. As paredes estão cantando. O chão é o céu. Deus perdeu este lugar."</p>
      
      <p><strong>EXPERIMENTO DE 2018:</strong></p>
      <p>Um agente equipado com câmera corporal foi enviado para mapear a casa. O vídeo mostra:</p>
      <ul>
        <li>00:00 - Entrada pela porta da frente (gravidade normal)</li>
        <li>03:47 - Entrada em corredor (gravidade começa a falhar, câmera fica desorientada)</li>
        <li>07:22 - Agente está andando na parede como se fosse o chão</li>
        <li>12:08 - Agente abre porta, revela versão do próprio corredor, mas de 5 minutos atrás (ele vê a si mesmo entrando)</li>
        <li>15:30 - Transmissão cortada</li>
      </ul>
      <p>O agente foi encontrado 3 dias depois, do lado de fora da casa, sem memória dos últimos 40 minutos de gravação. Ele jurava ter ficado apenas 10 minutos dentro da casa.</p>
      
      <p><strong>TEORIA ATUAL:</strong></p>
      <p>Dante, especialista em operações, acredita que Baltazar conseguiu "romper" as leis físicas locais através de algum ritual. A casa não está assombrada - ela está "quebrada". As regras da realidade não se aplicam mais lá. É como se a casa existisse em múltiplas dimensões simultaneamente.</p>
      
      <p><strong>RISCO DE CONTENÇÃO:</strong></p>
      <p style="color: #ef4444;">A distorção está se expandindo. Inicialmente, apenas o interior da casa era afetado. Agora, a calçada em frente apresenta anomalias gravitacionais leves. Se não for contida, a distorção pode engolir o quarteirão inteiro... ou mais.</p>
      
      <p><strong>PROTOCOLO ATUAL:</strong></p>
      <p>Entrada proibida sem aprovação de Veríssimo. Agentes devem estar ancorados com cordas de segurança. Tempo máximo dentro: 15 minutos. Nunca entrar sozinho. Se você sentir que "cima" e "baixo" não fazem mais sentido, saia imediatamente. Se você se ver em um cômodo, SAIA. Aquilo não é um reflexo.</p>
      
      <p><strong>NOTA DE VERÍSSIMO:</strong></p>
      <p style="font-style: italic;">"A Casa Invertida é prova de que a realidade é mais frágil do que pensamos. Baltazar conseguiu quebrá-la com conhecimento e rituais. Se O Coletivo aprender a replicar isso... cada cidade pode se tornar uma Casa Invertida."</p>
    `
  },

  // PROTOCOLOS DA ORDEM
  {
    id: "protocol-alfa-9",
    title: "Protocolo Alfa-9: Contenção de Anomalias",
    type: "protocol" as const,
    classification: "NIVEL ALFA",
    preview: "Protocolo padrão de contenção para anomalias paranormais de baixo a médio risco. Estabelece perímetro de segurança e procedimentos de isolamento.",
    content: `
      <p><strong>PROTOCOLO:</strong> Alfa-9</p>
      <p><strong>DESIGNAÇÃO:</strong> Contenção de Anomalias</p>
      <p><strong>NÍVEL DE AUTORIZAÇÃO:</strong> Agentes de Campo Nível 2 ou superior</p>
      <p><strong>ÚLTIMA ATUALIZAÇÃO:</strong> 2023</p>
      
      <p><strong>OBJETIVO:</strong></p>
      <p>Estabelecer contenção rápida e efetiva de anomalias paranormais classes A, B e C antes que possam causar dano significativo à população civil ou exposição pública.</p>
      
      <p><strong>PROCEDIMENTO DE ATIVAÇÃO:</strong></p>
      <ol>
        <li><strong>DETECÇÃO:</strong> Anomalia identificada através de sensores, relatos civis ou observação direta</li>
        <li><strong>CLASSIFICAÇÃO:</strong> Avaliação rápida do nível de ameaça (Classe A-F)</li>
        <li><strong>AUTORIZAÇÃO:</strong> Contato com Central da Ordo para ativação formal do protocolo</li>
        <li><strong>EXECUÇÃO:</strong> Desdobramento de equipe de contenção no local</li>
      </ol>
      
      <p><strong>FASES DE CONTENÇÃO:</strong></p>
      
      <p><strong>FASE 1 - PERÍMETRO (0-30 minutos):</strong></p>
      <ul>
        <li>Estabelecer zona de exclusão de 50-200 metros (dependendo da anomalia)</li>
        <li>Evacuar civis usando cobertura padrão ("vazamento de gás", "emergência química", etc.)</li>
        <li>Instalar sensores de monitoramento paranormal nos pontos cardinais</li>
        <li>Ativar geradores de campo eletromagnético para dificultar manifestações</li>
      </ul>
      
      <p><strong>FASE 2 - ANÁLISE (30-90 minutos):</strong></p>
      <ul>
        <li>Especialistas conduzem avaliação in loco da anomalia</li>
        <li>Determinar origem, natureza e comportamento da manifestação</li>
        <li>Identificar possíveis gatilhos ou padrões de atividade</li>
        <li>Preparar equipamento específico para contenção definitiva</li>
      </ul>
      
      <p><strong>FASE 3 - CONTENÇÃO ATIVA (variável):</strong></p>
      <ul>
        <li>Implementar barreiras físicas e místicas apropriadas</li>
        <li>Para entidades conscientes: tentativa de comunicação e negociação</li>
        <li>Para objetos: isolamento em container de contenção classe Delta</li>
        <li>Para locais: instalação de selos de banimento permanentes</li>
      </ul>
      
      <p><strong>FASE 4 - VERIFICAÇÃO (pós-contenção):</strong></p>
      <ul>
        <li>Monitoramento contínuo por 72 horas</li>
        <li>Verificação da integridade das barreiras de contenção</li>
        <li>Aplicação de amnésticos classe B em testemunhas civis</li>
        <li>Documentação completa do incidente</li>
      </ul>
      
      <p><strong>EQUIPAMENTO PADRÃO:</strong></p>
      <ul>
        <li>Detectores EMF e câmeras de espectro completo</li>
        <li>Kits de banimento (sal consagrado, ferro frio, prata coloidal)</li>
        <li>Geradores portáteis de campo EM</li>
        <li>Containers de contenção classes Delta e Gamma</li>
        <li>Armamento padrão + munição de prata e ferro</li>
        <li>Amuletos de proteção individual</li>
      </ul>
      
      <p><strong>ESCALAÇÃO:</strong></p>
      <p style="color: #ef4444;">Se a anomalia for reclassificada para Classe D ou superior durante contenção, o Protocolo Alfa-9 deve ser ABORTADO imediatamente e substituído por Protocolo Sigma (Extração) ou Protocolo Quarentena, dependendo da situação.</p>
      
      <p><strong>TAXA DE SUCESSO:</strong></p>
      <p>87% de contenção bem-sucedida em anomalias Classe A-C nos últimos 5 anos.</p>
      
      <p><strong>CASOS NOTÁVEIS:</strong></p>
      <ul>
        <li>Contenção do Lodo Vivo em zona industrial (2021) - Sucesso</li>
        <li>Isolamento da Criança Fantasma no orfanato abandonado (2022) - Sucesso parcial</li>
        <li>Tentativa de contenção do Deus da Morte (2 anos atrás) - FALHA CRÍTICA</li>
      </ul>
      
      <p><strong>NOTA OPERACIONAL:</strong></p>
      <p>"Alfa-9 é nosso pão com manteiga. Todo agente precisa conhecer esse protocolo de cor. A diferença entre contenção e catástrofe geralmente são os primeiros 30 minutos." - Dante, Operador de Campo Sênior</p>
    `
  },
  {
    id: "protocol-sigma",
    title: "Protocolo Sigma: Extração de Agentes Comprometidos",
    type: "protocol" as const,
    classification: "ACESSO RESTRITO",
    preview: "Procedimento de resgate para agentes feridos, possuídos ou presos em ambientes paranormais hostis. Autorização de Dante ou superior requerida.",
    content: `
      <p><strong>PROTOCOLO:</strong> Sigma</p>
      <p><strong>DESIGNAÇÃO:</strong> Extração de Agentes Comprometidos</p>
      <p><strong>NÍVEL DE AUTORIZAÇÃO:</strong> Dante, Veríssimo ou Comando Superior</p>
      <p><strong>CÓDIGO DE PRIORIDADE:</strong> MÁXIMA</p>
      
      <p><strong>PRINCÍPIO FUNDAMENTAL:</strong></p>
      <p style="font-weight: bold; color: #22c55e;">"Nenhum agente fica para trás."</p>
      
      <p><strong>QUANDO ATIVAR:</strong></p>
      <ul>
        <li>Agente ferido e incapaz de evacuar por conta própria</li>
        <li>Agente preso em zona de anomalia ativa</li>
        <li>Agente sob possessão ou corrupção paranormal</li>
        <li>Perda de comunicação em operação de alto risco por mais de 30 minutos</li>
        <li>Sinal de emergência ativado (código vermelho)</li>
      </ul>
      
      <p><strong>EQUIPE DE EXTRAÇÃO:</strong></p>
      <p>Mínimo de 3 operadores, idealmente incluindo:</p>
      <ul>
        <li>1 Especialista em Combate (líder da equipe)</li>
        <li>1 Médico de Campo ou Paramédico</li>
        <li>1 Especialista em Paranormalidade (para neutralizar ameaças místicas)</li>
        <li>Dante (quando disponível - taxa de sucesso aumenta 340%)</li>
      </ul>
      
      <p><strong>PROCEDIMENTO PADRÃO:</strong></p>
      
      <p><strong>FASE PRÉ-INCURSÃO:</strong></p>
      <ol>
        <li>Reunir inteligência sobre o local e natureza da ameaça</li>
        <li>Equipar equipe com armamento pesado e amuletos de proteção reforçados</li>
        <li>Estabelecer ponto de exfiltração seguro a no máximo 500m</li>
        <li>Coordenar com equipe médica de emergência no ponto de exfil</li>
        <li>Preparar rituais de banimento de emergência</li>
      </ol>
      
      <p><strong>FASE DE PENETRAÇÃO:</strong></p>
      <ul>
        <li>Entrada rápida e agressiva na zona hostil</li>
        <li>Uso de granadas de ferro frio e sal consagrado para abrir caminho</li>
        <li>Comunicação constante com Central via rádio encriptado</li>
        <li>Marcação de rota de fuga com balizas luminosas</li>
      </ul>
      
      <p><strong>FASE DE LOCALIZAÇÃO:</strong></p>
      <ul>
        <li>Usar rastreadores biométricos para localizar agente</li>
        <li>Avaliar condição do agente (físico, mental, espiritual)</li>
        <li>Se possível, estabelecer contato verbal para verificar consciência</li>
        <li>Identificar ameaças imediatas ao redor do agente</li>
      </ul>
      
      <p><strong>FASE DE EXTRAÇÃO:</strong></p>
      <ul>
        <li>Neutralizar ou distrair entidades hostis</li>
        <li>Aplicar primeiros socorros imediatos</li>
        <li>Se agente estiver possuído: aplicar selo de contenção temporário</li>
        <li>Transportar agente para ponto de exfiltração o mais rápido possível</li>
        <li>Usar explosivos ou rituais destrutivos para cobrir a retirada se necessário</li>
      </ul>
      
      <p><strong>FASE PÓS-EXTRAÇÃO:</strong></p>
      <ul>
        <li>Avaliação médica completa</li>
        <li>Varredura paranormal para detectar contaminação ou possessão</li>
        <li>Quarentena de 72 horas se corrupção for suspeita</li>
        <li>Debriefing psicológico obrigatório</li>
        <li>Afastamento temporário até liberação médica</li>
      </ul>
      
      <p><strong>CENÁRIOS ESPECIAIS:</strong></p>
      
      <p><strong>POSSESSÃO CONFIRMADA:</strong></p>
      <p>Se o agente estiver possuído, o objetivo muda de "extração" para "captura e exorcismo". Usar força não-letal. Transportar em container de contenção. Realizar exorcismo apenas em instalação segura com equipe especializada.</p>
      
      <p><strong>AGENTE EM LOOP TEMPORAL:</strong></p>
      <p>Se o agente estiver preso em loop de tempo (raro, mas documentado), aplicar disruptor de anomalia temporal. Se isso falhar, marcar localização e consultar Santer para solução específica.</p>
      
      <p><strong>MÚLTIPLOS AGENTES COMPROMETIDOS:</strong></p>
      <p>Priorizar extração de agentes conscientes primeiro. Agentes inconscientes ou possuídos são extraídos em segunda onda se possível.</p>
      
      <p><strong>EQUIPAMENTO CRÍTICO:</strong></p>
      <ul>
        <li>Armadura tática reforçada com selos de proteção</li>
        <li>Munição abençoada e ferro frio</li>
        <li>Disruptores de anomalia portáteis</li>
        <li>Macas de evacuação reforçadas</li>
        <li>Kits de primeiros socorros paranormais</li>
        <li>Selos de contenção temporários</li>
      </ul>
      
      <p><strong>ESTATÍSTICAS:</strong></p>
      <ul>
        <li>Taxa de sucesso geral: 73%</li>
        <li>Taxa de sucesso com Dante: 91%</li>
        <li>Baixas em operações Sigma: 12% (últimos 10 anos)</li>
      </ul>
      
      <p><strong>CASOS NOTÁVEIS:</strong></p>
      <ul>
        <li>Resgate de Santer e Marine após Incidente Deus da Morte - Sucesso parcial (Firenze e Aristoteles KIA)</li>
        <li>Operação Nightfall (2015) - 8 agentes extraídos de zona de Lodo Vivo - Sucesso total</li>
        <li>Extração do Subsolo (2018) - Dante único sobrevivente da equipe de resgate</li>
      </ul>
      
      <p><strong>NOTA DE DANTE:</strong></p>
      <p style="font-style: italic; background: rgba(34, 197, 94, 0.1); padding: 10px;">"Sigma não é sobre heroísmo. É sobre competência, velocidade e não hesitar. Você entra, pega seu companheiro e sai. Cada segundo que você perde pensando é um segundo que o Outro Lado tem para matá-los. E nunca, NUNCA deixe orgulho ou medo te impedir de chamar reforços."</p>
    `
  },
  {
    id: "protocol-omega-13",
    title: "Protocolo Ômega-13: Último Recurso",
    type: "protocol" as const,
    classification: "ULTRA-SECRETO",
    preview: "Protocolo de aniquilação total. Apenas 5 pessoas têm autorização. Implica destruição completa de zona contaminada e tudo dentro dela. Irreversível.",
    content: `
      <p><strong>PROTOCOLO:</strong> Ômega-13</p>
      <p><strong>DESIGNAÇÃO:</strong> Último Recurso / Aniquilação Total</p>
      <p><strong>NÍVEL DE AUTORIZAÇÃO:</strong> ULTRA-SECRETO</p>
      <p style="color: #ef4444; font-weight: bold;">⚠️ APENAS 5 INDIVÍDUOS POSSUEM AUTORIZAÇÃO PARA ATIVAR ESTE PROTOCOLO</p>
      
      <p><strong>INDIVÍDUOS AUTORIZADOS:</strong></p>
      <ol>
        <li>Veríssimo (Diretor de Operações)</li>
        <li>[REDACTED] (Conselho Superior)</li>
        <li>[REDACTED] (Conselho Superior)</li>
        <li>[REDACTED] (Conselho Superior)</li>
        <li>[REDACTED] (Identidade classificada)</li>
      </ol>
      
      <p><strong>DEFINIÇÃO:</strong></p>
      <p>Protocolo Ômega-13 representa a admissão de que uma ameaça paranormal não pode ser contida por meios convencionais e que sua contenção falha resultaria em catástrofe de escala regional ou global. A ativação deste protocolo autoriza a destruição completa e irreversível de uma zona geográfica definida usando todos os meios necessários.</p>
      
      <p><strong>CRITÉRIOS DE ATIVAÇÃO:</strong></p>
      <p>Protocolo Ômega-13 só pode ser considerado quando TODOS os critérios abaixo são atendidos:</p>
      <ol>
        <li>Anomalia classificada como Classe F (Extinção em Potencial) ou superior</li>
        <li>Falha confirmada de pelo menos 3 protocolos de contenção diferentes</li>
        <li>Projeção indica expansão incontrolável da anomalia</li>
        <li>Impossibilidade de evacuação completa de área afetada</li>
        <li>Consenso unânime dos 5 indivíduos autorizados</li>
      </ol>
      
      <p><strong>METODOLOGIA:</strong></p>
      <p style="color: #ef4444;">INFORMAÇÃO ALTAMENTE CLASSIFICADA - Detalhes específicos removidos desta versão</p>
      <p>A aniquilação envolve combinação de:</p>
      <ul>
        <li>[REDACTED] - Arsenal tático não-convencional</li>
        <li>[REDACTED] - Ritual de banimento permanente de escala massiva</li>
        <li>[REDACTED] - Criação de "zona morta" paranormal</li>
        <li>Cobertura narrativa para população civil (desastre natural, acidente industrial, etc.)</li>
      </ul>
      
      <p><strong>CONSEQUÊNCIAS:</strong></p>
      <ul>
        <li><strong>Baixas civis:</strong> Esperadas e inevitáveis</li>
        <li><strong>Baixas da Ordo:</strong> Todo pessoal dentro da zona de aniquilação</li>
        <li><strong>Contaminação paranormal:</strong> Área se torna inabitável por 10-50 anos</li>
        <li><strong>Impacto ambiental:</strong> Severo e duradouro</li>
        <li><strong>Atenção internacional:</strong> Requer coordenação com governos e operações de encobrimento massivas</li>
      </ul>
      
      <p><strong>HISTÓRICO DE ATIVAÇÃO:</strong></p>
      <p>Desde a fundação da Ordo Realitas em [REDACTED], o Protocolo Ômega-13 foi ativado oficialmente em:</p>
      <ul>
        <li><strong>1908:</strong> [LOCALIZAÇÃO REDACTED] - Evento de Tunguska (cobertura oficial: meteoro)</li>
        <li><strong>1986:</strong> Chernobyl, Ucrânia - [DETALHES REDACTED] (cobertura oficial: acidente nuclear)</li>
        <li><strong>20██:</strong> [LOCALIZAÇÃO E DETALHES COMPLETAMENTE REDACTED]</li>
      </ul>
      
      <p><strong>ZONA DE ANIQUILAÇÃO:</strong></p>
      <p>O protocolo define três perímetros concêntricos:</p>
      <ul>
        <li><strong>Zona Vermelha (0-2km):</strong> Aniquilação total. Sobrevivência: 0%</li>
        <li><strong>Zona Amarela (2-5km):</strong> Destruição severa. Sobrevivência: &lt;5%</li>
        <li><strong>Zona Verde (5-10km):</strong> Contaminação residual. Evacuação mandatória.</li>
      </ul>
      
      <p><strong>PROCEDIMENTO DE ATIVAÇÃO:</strong></p>
      <ol>
        <li>Reunião de emergência dos 5 autorizados (presencial ou via linha segura)</li>
        <li>Apresentação de evidências e projeções</li>
        <li>Votação (deve ser unânime)</li>
        <li>Confirmação via códigos de autenticação únicos</li>
        <li>Janela de 6 horas para evacuação de pessoal autorizado</li>
        <li>Execução</li>
        <li>Contenção de informação e narrativa de cobertura</li>
      </ol>
      
      <p><strong>PÓS-ÔMEGA-13:</strong></p>
      <p>Após ativação, a área afetada é:</p>
      <ul>
        <li>Isolada permanentemente com justificativa civil</li>
        <li>Monitorada remotamente por no mínimo 25 anos</li>
        <li>Documentada extensivamente para prevenir recorrências</li>
        <li>Marcada em mapas secretos da Ordo como "Zona Morta Ômega"</li>
      </ul>
      
      <p><strong>PROTOCOLO ÔMEGA-13 E O DEUS DA MORTE:</strong></p>
      <p style="color: #ef4444;">Durante o Incidente Deus da Morte, o Protocolo Ômega-13 foi CONSIDERADO mas NÃO ativado. Dante conseguiu extrair Marine e Santer a tempo, e a entidade aparentemente "recuou" para o Outro Lado. Se a extração tivesse falhado, a cidade inteira teria sido aniquilada.</p>
      
      <p><strong>DILEMA MORAL:</strong></p>
      <p style="font-style: italic; background: rgba(239, 68, 68, 0.1); padding: 10px;">"Ômega-13 não é um protocolo. É uma confissão. É a admissão de que existem coisas que não podemos combater, apenas destruir. E quando destruímos, levamos inocentes conosco. Cada vez que discutimos ativar Ômega-13, eu me pergunto: estamos protegendo a humanidade ou apenas escolhendo quais humanos sacrificar?"</p>
      <p style="text-align: right;">- Veríssimo, notas pessoais</p>
      
      <p><strong>NOTA FINAL:</strong></p>
      <p style="color: #ef4444; font-weight: bold;">Se você está lendo isto e não é um dos 5 autorizados, seu acesso foi registrado e você será investigado. O conhecimento da existência deste protocolo já é uma violação de segurança. Espere contato imediato do Departamento de Segurança Interna.</p>
    `
  },
  {
    id: "protocol-quarantine",
    title: "Protocolo Quarentena: Isolamento de Zonas Contaminadas",
    type: "protocol" as const,
    classification: "NIVEL ALFA",
    preview: "Protocolo de isolamento de longo prazo para áreas com contaminação paranormal persistente. Estabelece perímetro permanente e monitoramento contínuo.",
    content: `
      <p><strong>PROTOCOLO:</strong> Quarentena</p>
      <p><strong>DESIGNAÇÃO:</strong> Isolamento de Zonas Contaminadas</p>
      <p><strong>NÍVEL DE AUTORIZAÇÃO:</strong> Veríssimo ou Conselho Superior</p>
      <p><strong>DURAÇÃO:</strong> Indefinida (revisão trimestral obrigatória)</p>
      
      <p><strong>OBJETIVO:</strong></p>
      <p>Estabelecer isolamento de longo prazo para locais onde a contaminação paranormal não pode ser eliminada com métodos atuais, mas pode ser contida para prevenir expansão e exposição pública.</p>
      
      <p><strong>QUANDO APLICAR:</strong></p>
      <ul>
        <li>Contaminação paranormal persistente e não-dissipável</li>
        <li>Presença de entidades que não podem ser banidas mas podem ser confinadas</li>
        <li>Anomalias espaciais ou temporais estáveis mas perigosas</li>
        <li>Locais de rituais falhados com efeitos residuais duradouros</li>
        <li>Áreas onde o "véu" entre mundos está permanentemente enfraquecido</li>
      </ul>
      
      <p><strong>CLASSIFICAÇÃO DE ZONAS:</strong></p>
      
      <p><strong>ZONA TIPO I - CONTAMINAÇÃO LEVE:</strong></p>
      <ul>
        <li>Efeitos paranormais menores e intermitentes</li>
        <li>Risco baixo para população externa</li>
        <li>Perímetro: 50-100 metros</li>
        <li>Exemplo: Residências com assombrações persistentes, cemitérios ativos</li>
      </ul>
      
      <p><strong>ZONA TIPO II - CONTAMINAÇÃO MODERADA:</strong></p>
      <ul>
        <li>Manifestações regulares de entidades</li>
        <li>Efeitos cognitivos em humanos expostos</li>
        <li>Perímetro: 100-500 metros</li>
        <li>Exemplo: Hospitais psiquiátricos abandonados, campos de batalha antigos</li>
      </ul>
      
      <p><strong>ZONA TIPO III - CONTAMINAÇÃO SEVERA:</strong></p>
      <ul>
        <li>Realidade distorcida dentro da zona</li>
        <li>Entidades de alto nível confinadas</li>
        <li>Perímetro: 500-2000 metros</li>
        <li>Exemplo: A Casa Invertida, Metrô Linha Fantasma</li>
      </ul>
      
      <p><strong>ZONA TIPO IV - CONTAMINAÇÃO CRÍTICA:</strong></p>
      <ul>
        <li>Risco existencial se contenção falhar</li>
        <li>Possível portal para o Outro Lado</li>
        <li>Perímetro: 2-5 quilômetros</li>
        <li>Exemplo: [LOCALIZAÇÃO REDACTED] - Local do incidente de [REDACTED]</li>
      </ul>
      
      <p><strong>PROCEDIMENTO DE IMPLEMENTAÇÃO:</strong></p>
      
      <p><strong>FASE 1 - AVALIAÇÃO (0-7 dias):</strong></p>
      <ol>
        <li>Equipe especializada realiza análise completa da zona</li>
        <li>Mapeamento de extensão da contaminação</li>
        <li>Identificação de fontes primárias</li>
        <li>Determinação de classificação da zona (Tipo I-IV)</li>
        <li>Cálculo de perímetro de segurança necessário</li>
      </ol>
      
      <p><strong>FASE 2 - ESTABELECIMENTO (7-30 dias):</strong></p>
      <ol>
        <li>Evacuação completa de civis (usando cobertura apropriada)</li>
        <li>Construção de barreira física (cercas, muros, bloqueios de estrada)</li>
        <li>Instalação de selos de contenção místicos nos pontos cardinais</li>
        <li>Colocação de sensores de monitoramento paranormal</li>
        <li>Estabelecimento de posto de observação permanente</li>
        <li>Implantação de narrativa de cobertura para público</li>
      </ol>
      
      <p><strong>FASE 3 - MANUTENÇÃO (contínua):</strong></p>
      <ul>
        <li>Inspeção semanal do perímetro</li>
        <li>Renovação mensal de selos místicos</li>
        <li>Monitoramento 24/7 via sensores remotos</li>
        <li>Patrulha regular para prevenir intrusões</li>
        <li>Testes trimestrais de integridade da contenção</li>
      </ul>
      
      <p><strong>NARRATIVAS DE COBERTURA PADRÃO:</strong></p>
      <ul>
        <li><strong>Urbana:</strong> Contaminação química, risco estrutural, propriedade privada</li>
        <li><strong>Rural:</strong> Resíduos tóxicos, área de conservação ambiental, campo minado</li>
        <li><strong>Industrial:</strong> Acidente nuclear/químico, zona de radiação</li>
        <li><strong>Histórica:</strong> Preservação arqueológica, risco de colapso</li>
      </ul>
      
      <p><strong>PESSOAL AUTORIZADO:</strong></p>
      <ul>
        <li>Equipes de manutenção: 4-6 agentes por zona</li>
        <li>Equipes de pesquisa: Apenas com autorização especial</li>
        <li>Equipes de resposta rápida: Em standby para emergências</li>
        <li>Entrada de civis: PROIBIDA sob qualquer circunstância</li>
      </ul>
      
      <p><strong>EQUIPAMENTO OBRIGATÓRIO:</strong></p>
      <ul>
        <li>Traje de proteção paranormal</li>
        <li>Amuletos de proteção pessoal</li>
        <li>Detectores de anomalia portáteis</li>
        <li>Rádio de emergência com alcance estendido</li>
        <li>Kit de primeiros socorros paranormais</li>
        <li>Sinal de emergência (código vermelho)</li>
      </ul>
      
      <p><strong>PROTOCOLOS DE EMERGÊNCIA:</strong></p>
      
      <p><strong>VIOLAÇÃO DE PERÍMETRO:</strong></p>
      <p>Se civis entrarem na zona: Extração imediata. Amnésticos classe B-C. Quarentena médica de 48h para verificar contaminação.</p>
      
      <p><strong>FALHA DE CONTENÇÃO:</strong></p>
      <p>Se sensores detectarem expansão da contaminação: Ativar Protocolo Alfa-9. Se Alfa-9 falhar, considerar Protocolo Ômega-13 para Zonas Tipo IV.</p>
      
      <p><strong>MANIFESTAÇÃO EXTERNA:</strong></p>
      <p>Se entidades escaparem do perímetro: Equipe de resposta rápida ativa Protocolo Sigma para contenção ou banimento.</p>
      
      <p><strong>ZONAS ATIVAS ATUAIS:</strong></p>
      <ul>
        <li>A Casa Invertida - São Paulo (Zona Tipo III)</li>
        <li>Metrô Linha Fantasma - [CIDADE REDACTED] (Zona Tipo III)</li>
        <li>Cemitério dos Esquecidos - [CIDADE REDACTED] (Zona Tipo II)</li>
        <li>Hotel Cascavel - Interior do Paraná (Zona Tipo III)</li>
        <li>[17 OUTRAS LOCALIZAÇÕES CLASSIFICADAS]</li>
      </ul>
      
      <p><strong>CUSTO OPERACIONAL:</strong></p>
      <p>Manutenção de zona de quarentena custa aproximadamente R$ 150.000 - R$ 2.000.000 por ano, dependendo do tipo. Atualmente, a Ordo mantém 21 zonas ativas globalmente, representando 23% do orçamento operacional anual.</p>
      
      <p><strong>PESQUISA E DESENVOLVIMENTO:</strong></p>
      <p>Zonas de quarentena também servem como laboratórios naturais. Pesquisadores estudam a contaminação em ambiente controlado, buscando métodos de purificação permanente. 3 zonas foram desativadas nos últimos 10 anos após desenvolvimento de técnicas de banimento avançadas.</p>
      
      <p><strong>NOTA DE CAMPO - MARINE FLAMARION:</strong></p>
      <p style="font-style: italic; background: rgba(239, 68, 68, 0.1); padding: 10px;">"Zonas de quarentena me deixam desconfortável. Não é uma solução - é uma admissão de que não temos solução. Estamos apenas esperando que a contenção aguente até descobrirmos como lidar com isso de verdade. Mas e se nunca descobrirmos? Essas zonas vão existir para sempre?"</p>
    `
  },
  {
    id: "protocol-veil",
    title: "Protocolo Véu: Encobrimento de Eventos Paranormais",
    type: "protocol" as const,
    classification: "NIVEL ALFA",
    preview: "Protocolo de controle de informação e encobrimento público. Gestão de testemunhas, manipulação de narrativas e aplicação de amnésticos.",
    content: `
      <p><strong>PROTOCOLO:</strong> Véu</p>
      <p><strong>DESIGNAÇÃO:</strong> Encobrimento de Eventos Paranormais</p>
      <p><strong>NÍVEL DE AUTORIZAÇÃO:</strong> Coordenadores de Operação ou superior</p>
      <p><strong>PRIORIDADE:</strong> CRÍTICA</p>
      
      <p><strong>FILOSOFIA CENTRAL:</strong></p>
      <p>"O maior poder da Ordo não é combater o paranormal - é garantir que o mundo nunca saiba que precisamos combatê-lo."</p>
      
      <p><strong>OBJETIVO:</strong></p>
      <p>Manter o conhecimento sobre fenômenos paranormais restrito a círculos autorizados, prevenindo pânico em massa, colapso social e interferência de governos ou organizações hostis nas operações da Ordo.</p>
      
      <p><strong>JUSTIFICATIVA:</strong></p>
      <p>Estudos psicossociológicos indicam que revelação pública da existência do paranormal resultaria em:</p>
      <ul>
        <li>Colapso de sistemas de crença estabelecidos</li>
        <li>Histeria coletiva e violência em massa</li>
        <li>Caça às bruxas moderna contra suspeitos de atividade paranormal</li>
        <li>Exploração por grupos terroristas e cultos</li>
        <li>Intervenção militar desastrosa em fenômenos que força bruta não pode resolver</li>
      </ul>
      
      <p><strong>NÍVEIS DE ENCOBRIMENTO:</strong></p>
      
      <p><strong>NÍVEL 1 - INCIDENTE ISOLADO:</strong></p>
      <p>Testemunhas: 1-5 pessoas | Evidências: Mínimas</p>
      <ul>
        <li>Aplicar amnésticos classe A (memória vaga e confusa)</li>
        <li>Remover evidências físicas</li>
        <li>Plantar memórias falsas simples (animal, alucinação, mal-entendido)</li>
        <li>Tempo de operação: 2-4 horas</li>
      </ul>
      
      <p><strong>NÍVEL 2 - INCIDENTE PÚBLICO LIMITADO:</strong></p>
      <p>Testemunhas: 5-50 pessoas | Evidências: Moderadas</p>
      <ul>
        <li>Amnésticos classe B para testemunhas diretas</li>
        <li>Controlar narrativa em mídias sociais (remoção de posts, desacreditar vídeos)</li>
        <li>Cobertura alternativa via contatos na imprensa ("explosão de gás", "exercício militar", etc.)</li>
        <li>Confisco de gravações e fotografias</li>
        <li>Tempo de operação: 12-24 horas</li>
      </ul>
      
      <p><strong>NÍVEL 3 - EXPOSIÇÃO MASSIVA:</strong></p>
      <p>Testemunhas: 50+ pessoas | Evidências: Substanciais | Cobertura de mídia: Provável</p>
      <ul>
        <li>Operação de informação em grande escala</li>
        <li>Coordenação com autoridades locais (polícia, governo)</li>
        <li>Campanha de desinformação ativa (bots, influenciadores, "especialistas")</li>
        <li>Criação de narrativa alternativa complexa e crível</li>
        <li>Amnésticos classe C para testemunhas-chave</li>
        <li>Possível envolvimento de agências governamentais aliadas</li>
        <li>Tempo de operação: 48-72 horas</li>
      </ul>
      
      <p><strong>NÍVEL 4 - CRISE DE REVELAÇÃO:</strong></p>
      <p>Cobertura internacional | Evidências irrefutáveis | Risco de revelação global</p>
      <ul>
        <li>Ativação de "Plano Manto" - protocolo de encobrimento de última instância</li>
        <li>Coordenação internacional com todas as organizações aliadas</li>
        <li>Envolvimento direto de governos do G20</li>
        <li>Campanha de descrédito massiva (CGI falso, atores, teoria da conspiração)</li>
        <li>Se necessário: Fabricar "revelação oficial" controlada com informações falsas</li>
        <li>Tempo de operação: Semanas a meses</li>
      </ul>
      
      <p><strong>AMNÉSTICOS:</strong></p>
      <p>Substâncias ou rituais que alteram memórias recentes:</p>
      <ul>
        <li><strong>Classe A:</strong> Confusão leve, memórias vagas (efeitos passam em 48h)</li>
        <li><strong>Classe B:</strong> Apagamento de 4-6 horas de memória</li>
        <li><strong>Classe C:</strong> Apagamento de até 24 horas + implantação de memórias falsas</li>
        <li><strong>Classe D:</strong> Apagamento profundo (até 1 semana) - REQUER AUTORIZAÇÃO ESPECIAL</li>
        <li><strong>Classe E:</strong> [CLASSIFICADO] - Usado apenas em casos extremos</li>
      </ul>
      
      <p><strong>EFEITOS COLATERAIS:</strong></p>
      <p>Amnésticos não são perfeitos. Efeitos colaterais incluem:</p>
      <ul>
        <li>Dores de cabeça persistentes (24-72h)</li>
        <li>Sensação de "déjà vu" ou sonhos perturbadores</li>
        <li>Em 3% dos casos: Memórias retornam parcialmente após 6-12 meses</li>
        <li>Uso repetido pode causar dano neurológico permanente</li>
      </ul>
      
      <p><strong>CONTROLE DE MÍDIAS:</strong></p>
      
      <p><strong>DIGITAIS:</strong></p>
      <ul>
        <li>Unidade de Cibersegurança monitora constantemente palavras-chave paranormais</li>
        <li>Algoritmos automatizados sinalizam postagens suspeitas</li>
        <li>Equipe de remoção age em 15-45 minutos</li>
        <li>Vídeos/fotos reais são "debunkados" com análises falsas de CGI</li>
        <li>Contas persistentes são hackeadas ou desacreditadas</li>
      </ul>
      
      <p><strong>TRADICIONAIS:</strong></p>
      <ul>
        <li>Contatos em todas as principais redes de TV e jornais</li>
        <li>Matérias problemáticas são "mortas" antes de ir ao ar</li>
        <li>Jornalistas curiosos recebem "informações exclusivas" falsas para desviá-los</li>
        <li>Em casos extremos: Pressão corporativa ou ameaças legais</li>
      </ul>
      
      <p><strong>NARRATIVAS DE COBERTURA COMUNS:</strong></p>
      <ul>
        <li><strong>Destruição/Incêndio:</strong> Vazamento de gás, curto-circuito elétrico</li>
        <li><strong>Desaparecimentos:</strong> Fuga voluntária, sequestro comum, acidente</li>
        <li><strong>Mortes inexplicáveis:</strong> Ataque cardíaco, aneurisma, suicídio</li>
        <li><strong>Fenômenos visuais:</strong> Reflexos de luz, balões meteorológicos, drones</li>
        <li><strong>Sons estranhos:</strong> Fenômenos naturais, obras de construção, animais</li>
        <li><strong>Luzes no céu:</strong> Satélites, aviões, fenômenos atmosféricos</li>
      </ul>
      
      <p><strong>TESTEMUNHAS PROBLEMÁTICAS:</strong></p>
      <p>Alguns indivíduos não respondem a amnésticos ou se recusam a aceitar explicações alternativas:</p>
      <ul>
        <li><strong>Opção 1:</strong> Recrutamento para a Ordo (se compatível)</li>
        <li><strong>Opção 2:</strong> Monitoramento contínuo e desacredito social</li>
        <li><strong>Opção 3:</strong> Internação psiquiátrica com diagnóstico fabricado</li>
        <li><strong>Opção 4:</strong> [REDACTED] - Apenas com autorização do Conselho</li>
      </ul>
      
      <p><strong>COORDENAÇÃO GOVERNAMENTAL:</strong></p>
      <p>A Ordo possui acordos secretos com:</p>
      <ul>
        <li>23 governos nacionais (incluindo Brasil, EUA, Reino Unido, França, Japão)</li>
        <li>Agências de inteligência de 15 países</li>
        <li>4 organizações paranormais internacionais aliadas</li>
      </ul>
      <p>Esses aliados fornecem cobertura oficial, acesso a recursos governamentais e proteção legal quando necessário.</p>
      
      <p><strong>CASOS NOTÁVEIS:</strong></p>
      <ul>
        <li><strong>Incidente Deus da Morte (2 anos atrás):</strong> Nível 3 - Cobertura: "Explosão de gás em prédio abandonado". 127 testemunhas tratadas com amnésticos. 43 vídeos removidos de mídias sociais. Sucesso.</li>
        <li><strong>Surto de Lodo Vivo (2021):</strong> Nível 2 - Cobertura: "Vazamento químico industrial". 34 testemunhas. Sucesso.</li>
        <li><strong>Aparição do Cemitério (2019):</strong> Nível 1 - Cobertura: "Névoa + imaginação". 8 testemunhas. Sucesso.</li>
      </ul>
      
      <p><strong>TAXA DE SUCESSO:</strong></p>
      <p>Protocolo Véu tem taxa de sucesso de 94% na prevenção de revelação pública em larga escala. Os 6% de falhas geralmente envolvem:</p>
      <ul>
        <li>Eventos grandes demais para encobrir completamente (convertidos em "lendas urbanas")</li>
        <li>Testemunhas com plataformas muito grandes (celebridades, políticos)</li>
        <li>Evidências físicas impossíveis de remover completamente</li>
      </ul>
      
      <p><strong>DILEMA ÉTICO:</strong></p>
      <p style="font-style: italic; background: rgba(239, 68, 68, 0.1); padding: 10px;">"Cada vez que aplicamos amnésticos, estamos violando o livre-arbítrio de alguém. Cada vez que manipulamos a verdade, nos tornamos pouco melhores que aqueles que combatemos. Mas a alternativa - deixar o mundo saber a verdade - pode ser pior. Protocolo Véu não é sobre o que é certo. É sobre o que é necessário."</p>
      <p style="text-align: right;">- Veríssimo</p>
      
      <p><strong>NOTA PARA AGENTES:</strong></p>
      <p>Você é autorizado a aplicar Protocolo Véu Nível 1 em campo sem aprovação superior. Níveis 2-4 requerem autorização. Lembre-se: Encobrimento é tão importante quanto contenção. Uma operação paranormal bem-sucedida que deixa 100 testemunhas falando é uma FALHA.</p>
    `
  },
];
