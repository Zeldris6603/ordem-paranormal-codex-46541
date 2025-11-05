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
      <p><strong>IDADE:</strong> 34 anos</p>
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
      <p><strong>IDADE CRONOLÓGICA:</strong> 38 anos</p>
      <p><strong>IDADE BIOLÓGICA:</strong> 48 anos</p>
      <p><strong>CAMINHO:</strong> Conhecimento</p>
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
];
