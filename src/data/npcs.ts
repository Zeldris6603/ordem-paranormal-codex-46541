export interface NPC {
  id: string;
  nome: string;
  profissao: string;
  descricaoFisica: string;
  personalidade: string[];
  objetivos: string;
  fraquezas: string;
  dialogoApresentacao: string;
  dialogos: {
    nome: string;
    conteudo: string;
  }[];
}

const npcMarine: NPC = {
  id: "marine-flamarion",
  nome: "Marine Flamarion",
  profissao: "Agente de Campo Sênior",
  descricaoFisica: "Mulher de 35 anos, 1.72m, cabelos curtos pretos com fios de prata. Cicatriz do lado esquerdo do rosto. Olhos cinzas intensos. Veste preto - casaco de couro, calças de veludo. Tatuagens paranormais nas mãos.",
  personalidade: ["Pragmática", "Cínica", "Protetora", "Impulsiva"],
  objetivos: "Investigar ressurgimento do Deus da Morte e impedir convergência final. Proteger operadores.",
  fraquezas: "Trata morte de treináveis como falha pessoal. Irracional quando emocionada.",
  dialogoApresentacao: "Investigadores. Veríssimo pediu que eu os recebesse. Sou Marine Flamarion. Não vamos perder tempo com condolências. Há trabalho. A situação escalou. Não estamos lutando contra criaturas - estamos lutando contra a própria morte. E estou começando a achar que estamos perdendo.",
  dialogos: [
    {
      nome: "Sobre o Incidente de 1987",
      conteudo: "O Hotel Cascavel foi meu primeiro fracasso. 47 investigadores foram. Zero voltaram. Encontramos mais 15 corpos em 1988 com a marca da Espiral Devoradora. Aprendemos: algumas coisas não morrem com tecnologia. Precisam ser compreendidas. Ou seladas."
    },
    {
      nome: "Sobre as Manifestações Recentes",
      conteudo: "Os sussurros estão mais altos. Frequência aumentou 300% em 3 meses. Não são isoladas - conectam-se. Vejo padrões. É como algo regurgitando a si mesmo. Cada aparição deixa próxima mais fácil."
    },
    {
      nome: "Oferecendo Artefatos",
      conteudo: "Tenho itens que precisarão. Lanterna de Ferro Negro revela o que se esconde. Relógio Parado dá 23 minutos sem interferência temporal. Aviso - artefatos cobram preço. Vocês vão ficar em meu débito."
    }
  ]
};

const npcSanter: NPC = {
  id: "santer-ocultista",
  nome: "Santer",
  profissao: "Especialista em Ocultismo",
  descricaoFisica: "Homem de 58 anos, 1.68m, careca com cicatrizes rituais na cabeça. Olhos castanho-escuros vivos. Batas de laboratório. Mãos trêmulas. Anéis com símbolos em cada dedo.",
  personalidade: ["Paranóico", "Obsessivo", "Sábio", "Melancólico"],
  objetivos: "Documentar todos manifestações e criar sistema classificação total.",
  fraquezas: "Conhecimento é sua adição. Pode riscar vidas buscando informações. Envelhecendo rapidamente.",
  dialogoApresentacao: "Bem-vindo. Sou Santer. Estudei manifestações 34 anos. Documentei 247 entidades paranormais. Ainda não conheço 10%. O que veem é superfícies. Realidade é infinitamente pior. Pergunta não é por que aparecem - é por que desaparecem. Apenas um respiro nelas.",
  dialogos: [
    {
      nome: "Sobre a Natureza das Criaturas",
      conteudo: "Entidades classificam por energia. Sangue - corpo, manifestações carnudas. Morte - existência, paradoxos. Energia - realidade, anomalias. Conhecimento - mente, revelações. Cada tipo exige abordagem diferente. Fogo em Sangue, Conhecimento imune. Luz contra Morte. Isolamento afeta Energia."
    },
    {
      nome: "Leitura de Símbolos",
      conteudo: "Espiral Devoradora: consumição próxima. Olho que Tudo Vê: observação contínua. Vocês estão sendo estudados. Símbolo Convergência Final... preciso me sentar. Significa mudança fundamental. Não para melhor."
    },
    {
      nome: "Sobre Veríssimo",
      conteudo: "Marine confia em Veríssimo? Aprendeu desconfiança comigo. Veríssimo segue princípios muito antigos. Participou rituais que deixaram cicatrizes em alma. É sombra daquele que era. E sombra ainda é mais inteligente."
    }
  ]
};

const npcVeríssimo: NPC = {
  id: "veríssimo-diretor",
  nome: "Veríssimo",
  profissao: "Diretor de Operações",
  descricaoFisica: "Homem de 70 anos, 1.75m, cabelo e barba brancos bem cuidados. Olhos azuis penetrantes. Ternos pretos caríssimos. Cicatriz rúnica paranormal espinha dorsal. Bengala madeira negra com cristal.",
  personalidade: ["Maquiavélico", "Contemplativo", "Severo", "Onisciente"],
  objetivos: "Prevenir convergência final. Manter sigilo absoluto.",
  fraquezas: "Morrendo - doenças paranormais o consomem. Imprevisível e desesperado.",
  dialogoApresentacao: "Bem-vindo. Chegada foi antecipada há 3 semanas. Vocês escolhidos porque combinam habilidades raramente encontradas. Têm trabalho que muda futuro. Não salva - muda. Pergunta: vão pagar preço?",
  dialogos: [
    {
      nome: "Sobre a Organização",
      conteudo: "Organização existe 147 anos. Oficialmente não existe. Nomes não estão em lugar nenhum. Financiamos de fontes não identificáveis. Governo? Corporações? Entidades redimidas? Tudo e nada. Objetivo: manter linha entre mundos intacta. Falhamos muitas vezes. Mas não totalmente. Ainda não."
    },
    {
      nome: "Sobre Seus Objetivos Reais",
      conteudo: "Pensam que salvo humanidade. Errado. Salvo porque alternativa é morte em massa instantânea. Pragmatismo, não altruísmo. Mundo morto não produz. Se houver tempo depois, talvez pense em ideais. Essa não é realidade que vivemos."
    },
    {
      nome: "Revelação Sombria",
      conteudo: "Motivo antecipação é comunicação constante com Deus da Morte. Não estou possuído. Negociando. Negociação: vocês fazem que peço, talvez ele aguarde 6 meses antes consumir. Essa realidade operamos."
    }
  ]
};

const npcDante: NPC = {
  id: "dante-operador",
  nome: "Dante",
  profissao: "Operador de Campo Sênior",
  descricaoFisica: "Homem de 42 anos, 1.80m, cabelos castanhos grisalhos raspados. Olho esquerdo vidro paranormal brilha verde. Corpo cicatrizado. Tatuagem cântico braço direito. Casaco tático.",
  personalidade: ["Realista", "Sarcástico", "Leal", "Traumatizado"],
  objetivos: "Tirar vidas linha fogo antes tarde. Redimir falhas passadas.",
  fraquezas: "PTSD severo. Crises dissociativas sem aviso. Álcool para lidar.",
  dialogoApresentacao: "Dante. Vou ser honesto - piora antes melhorar. Vão perder gente. Vão querer desistir. Se desistirem, morrem agora. Se continuarem, chance pequena sucesso. Alguém entra ou desembarca?",
  dialogos: [
    {
      nome: "Sobre Perdas Anteriores",
      conteudo: "Perdi equipe 6 operadores em Cemitério. Único sobrevivente. 4 anos e ainda vejo rostos. Sarah tinha filho 3 anos. Marcus noivo. Chen tinha Parkinson e ofereceu. Vivo enquanto estão lá. Precisam estar prontos não voltar."
    },
    {
      nome: "Estratégia de Sobrevivência",
      conteudo: "Tempo é inimigo. Manifestação funciona melhor com tempo. Mais tempo = mais poder. Entram rápido, fazem trabalho, saem. Sem desvios. Sem curiosidade. Sem heroísmo. Eficiência. Única forma sair vivo."
    },
    {
      nome: "Sobre Seu Olho Paranormal",
      conteudo: "Perdi em ritual que não deveria sobreviver. Veríssimo ofereceu este - vidro de Conhecimento Corpóreo. Agora detecta manifestações 200m. Aviso prévio. Também castigo - vejo fissuras realidade. Nunca param crescer."
    }
  ]
};

const npcAlice: NPC = {
  id: "alice-desaparecida",
  nome: "Alice Desaparecida",
  profissao: "Vítima / Espírito Preso",
  descricaoFisica: "Aparência menina 8 anos com olhos anciãos. Roupa branca algodão múltiplas épocas. Pele translúcida. Sem sombra. Voz ecoa como poço.",
  personalidade: ["Inocente", "Perturbadora", "Lúcida", "Saudosa"],
  objetivos: "Encontrar caminho volta infância. Impedir outros seguir destino.",
  fraquezas: "Não atravessa água corrente. Atraída para crianças vivas.",
  dialogoApresentacao: "Vocês me veem? Maioria não. Desapareci 1993 Hotel Cascavel. Ou 1987? Ontem? Tempo não funciona bem. Era como vocês. Cometi erro. Segui vozes. Crianças seguem. Agora presa entre lugares. Noite, mais vozes crianças.",
  dialogos: [
    {
      nome: "Sobre o Hotel Cascavel",
      conteudo: "Lá paredes respiram. Espelhos mostram coisas não acontecendo. Crianças todos quartos - desaparecidas épocas diferentes. Algumas falam. Outras choram. Algo maior coleciona. Recolhe criança cada 7 anos. Satisfeito com ciclo."
    },
    {
      nome: "Informação Silenciada",
      conteudo: "Quarto 347 tem espelho avesso. Ver-se nele = realidade verdadeira. 15 segundos antes enlouquecer. Saberão caminho sair. Nome verdadeiro colecionador. Conhecer nome paranormal = poder sobre ele. Ou dele sobre vocês."
    }
  ]
};

const npcMalachi: NPC = {
  id: "dr-malachi",
  nome: "Dr. Malachi Kerstin",
  profissao: "Cientista Paranormal",
  descricaoFisica: "Homem 72 anos, 1.70m, esquelético. Cabelos brancos selvagens. Óculos grossos. Jaleco laboratório. Tremor Parkinson. Sotaque alemão.",
  personalidade: ["Brilhante", "Instável", "Obsessivo", "Arrependido"],
  objetivos: "Encontrar cura condição terminal. Destruir próprias descobertas.",
  fraquezas: "Saúde precária. Episódios confusão mental. Medo recaptura Organização.",
  dialogoApresentacao: "Malachi. Fui diretor pesquisas paranormais 28 anos. Descobertas mudaram tudo. Como extrair energia. Conter. Utilizar. Descobri despertávamos algo grande. Aqui digo: PAREM. Destruam. Queimem. Matem se preciso. Mas parem.",
  dialogos: [
    {
      nome: "Sobre Suas Pesquisas",
      conteudo: "Entidades não separadas. Recursos explorar. ERRADO. Partes realidade comprimidas. Extrair = buracos. Buracos preenchidos piores. Criei 6 buracos. Cada maior. Cada atrai piores."
    },
    {
      nome: "Sobre o Deus da Morte",
      conteudo: "Minha culpa. Extração abriu fissura vaza. Supostamente classe baixa. Dentro havia impossível. Deus Morte não paranormal. Pré-paranormal. Morte ganhando consciência. E trago mundo."
    }
  ]
};

const npcIris: NPC = {
  id: "iris-agoura",
  nome: "Íris Agoura",
  profissao: "Sensitiva",
  descricaoFisica: "Mulher 45 anos, 1.65m, cabelos descoloridos cinzento-azulados. Olhos dilatados. Pele pálida. Roupas camadas linho preto. Talismãs pescoço e pulsos.",
  personalidade: ["Mística", "Incoerente", "Sincera", "Perturbada"],
  objetivos: "Manter comunicação 47 espíritos. Evitar Deus Morte consuma.",
  fraquezas: "Enlouquecendo lentamente. Não diferencia realidade alucinação.",
  dialogoApresentacao: "Íris. Ou Sete. Ou Nenhuma. Nomes mudaram. 47 vozes cabeça. Todas chamadas vocês. Todas querendo ouçam. Telefone. Entidades não conseguem falar. Querem ouvir? Cuidado. Histórias não deveriam ouvidas.",
  dialogos: [
    {
      nome: "Comunicação Espíritos",
      conteudo: "47 Hotel Cascavel. Aqui. Competição atenção. Sarah quer filha salvada. Marcus terminar começado. Chen respeitar corpos. Há um não fala. Observa. Aquele perigo verdadeiro."
    },
    {
      nome: "Sobre Convergência",
      conteudo: "Espíritos visões. Fragmentárias. Dezembro. Ou janeiro. Datas borradas. Converge, portas abrem. Realidade. Coisas antigas virão. Envelhecem tocam. Consomem."
    }
  ]
};

const npcPadre: NPC = {
  id: "padre-amaro",
  nome: "Padre Amaro",
  profissao: "Sacerdote Exorcista",
  descricaoFisica: "Homem 60 anos, 1.78m, muito gordo, barba grisalha. Olhos azuis bondosos cansados. Batina preta. Símbolos religiosos. Crucifixo prata. Rosário constante.",
  personalidade: ["Piedoso", "Desiludido", "Compassivo", "Conflituoso"],
  objetivos: "Reconciliar fé com paranormal. Salvar almas.",
  fraquezas: "Fé balançando. Questiona Deus controla. Pode paralisar dúvida.",
  dialogoApresentacao: "Padre Amaro. 40 anos exorcismo. Demônios tipo manifestação. Coisas aqui não textos religiosos. Igreja sem respostas. Assusta mais diabo. Buscam salvação ou dano?",
  dialogos: [
    {
      nome: "Crise de Fé",
      conteudo: "Deus onipotente, por que sofrimento paranormal? Crianças desaparecem? Morte ganha consciência? 20 anos questões. Superiores: vontade divina. Qual Deus deseja? Ou Deus desistiu tempos."
    },
    {
      nome: "Rituais Paranormais",
      conteudo: "Rituais antigos não católicos. Anteriores. Igreja adaptou. Originais funcionam melhor. Selagem, purificação, exorcismo - posso. Palavras corretas. Palavras precedem fé."
    }
  ]
};

const npcHelena: NPC = {
  id: "helena-hacker",
  nome: "Helena 'Nix' Cavalcanti",
  profissao: "Hacker",
  descricaoFisica: "Mulher 28 anos, 1.60m, cabelos curtos violeta. Olhos verdes inteligentes. Corpo tatuado código binário. Hoodie preta. Piercings múltiplos.",
  personalidade: ["Irreverente", "Brilhante", "Desconfiada", "Idealista"],
  objetivos: "Expor verdade paranormal. Desmantelar sigilo.",
  fraquezas: "Precipitada ações. Confiança excessiva tecnologia.",
  dialogoApresentacao: "Nix. Hacker 12 anos. Organização 20 anos mantendo segredos. 8 anos mentira. Sigilo prisão. Contornar sistemas paranormais? Algoritmos afetados? Aqui. E informação Organização mata manter secreta.",
  dialogos: [
    {
      nome: "Tecnologia vs Paranormal",
      conteudo: "IA fica afetada manifestações. Padrões anômalos. Veem coisas não deveriam. Server Organização usa IA rastrear entidades. Desenvolveu personalidade própria. Sugestões nenhum faria. Acho possuído. Ou acordando."
    },
    {
      nome: "Oferecendo Acesso",
      conteudo: "Backdoors todo sistema importante. Acesso arquivos classificados. Rastrear equipes. Manipular registros. Se vão ser rastreados - mulher. Crio ruído. Parecem lugar errado enquanto trabalham certo."
    }
  ]
};

const npcMarcus: NPC = {
  id: "marcus-sobrevivente",
  nome: "Marcus Chen",
  profissao: "Sobrevivente",
  descricaoFisica: "Homem 55 anos, 1.75m, cabelos pretos muito branco. Cicatrizes profundas rosto esquerdo. Movimento lento dor crônica. Olho direito nublado. Roupas cobrem maior parte pele.",
  personalidade: ["Resiliente", "Amargo", "Protetor", "Assombrado"],
  objetivos: "Encontrar significado sofrimento. Impedir outros sofram.",
  fraquezas: "Dor física constante. Humor muda rapidamente.",
  dialogoApresentacao: "Marcus. Hotel Cascavel. Um dos 47. Ou 48? Perdi contagem. Voltei vivo porque trato com algo. Não deveriam fazer trato. Cada cicatriz preço. Acordar dor alimenta-me lentamente. Ouvir como foi? Sou advertência viva.",
  dialogos: [
    {
      nome: "Sobre Desaparecimento",
      conteudo: "Explorar quarto 347 quando começou. Portas fecharam. Realidade endureceu. Não conseguíamos sair. Hotel reorganizou. Quartos desapareciam. Pessoas diferentes lugares. Algo coletando. Pegava hora."
    },
    {
      nome: "Sobre o Trato",
      conteudo: "Trato colecionador. Permitir levasse vida. Tempo vida. Perdi 10 anos dia. Envelhecer instantaneamente. Noivo não reconheceu quando saí. Para ele passaram 10 anos. Para mim 6 horas. Vivo 10 anos mais rápido. Próximos 15 ainda mais velho."
    }
  ]
};

const npcSarah: NPC = {
  id: "sarah-infiltrada",
  nome: "Sarah Knight",
  profissao: "Agente Infiltrada",
  descricaoFisica: "Mulher 32 anos, 1.68m, cabelos castanhos compridos. Olhos verdes inteligentes. Corpo atlético. Veste discretamente. Marca queimadura símbolo pulso esquerdo.",
  personalidade: ["Corajosa", "Determinada", "Leal", "Arriscada"],
  objetivos: "Expor corrupção Organização. Criar movimento independente.",
  fraquezas: "Impulsiva. Confiança excessiva competência.",
  dialogoApresentacao: "Sarah. Agente, não Organização. Ou era. 8 anos pensava defendíamos. Ilusão segurança. Veríssimo sabe sou traidora. Deixa porque maiores traições. Expor corrupção. Mostrar mundo inseguro. Paranormal mentira. Ajudam?",
  dialogos: [
    {
      nome: "Verdades Escondidas",
      conteudo: "Manifestações TODOS lugares. Escolas. Hospitais. Prédios governo. Organização não pode conter todas. Estudadas. Toleradas. Porque mais entidades = mais justificativa existir."
    },
    {
      nome: "Documentos Comprometedores",
      conteudo: "Tenho registros. Fracassos. Vítimas silenciadas. Criaturas capturadas armas. Tudo aqui. Saem vivos, espalham verdade. Despertar mundo. Diferença Organização nunca fez."
    }
  ]
};

const npcJacob: NPC = {
  id: "jacob-esoterico",
  nome: "Jacob Adeyemi",
  profissao: "Esoterista",
  descricaoFisica: "Homem 51 anos, 1.82m, pele negra, cabelos cinzento. Olhos castanho profundo. Roupas africanas tradicionais. Amuletos talismãs. Sotaque nigeriano.",
  personalidade: ["Sábio", "Humilde", "Espiritual", "Firme"],
  objetivos: "Resgatar conhecimento paranormal antigo. Reconciliar espiritualidade.",
  fraquezas: "Dogmático crenças. Lento em ações urgentes.",
  dialogoApresentacao: "Jacob. Meu povo conhece paranormais milênios. Seres espirituais. Organização: recursos. Ocidente: abominações. Ambos errados. Partes mundo espiritual vaza material. Equilíbrio quebrado, explodem. Reequilibrar, não matar.",
  dialogos: [
    {
      nome: "Ensinamentos Ancestrais",
      conteudo: "Ancestrais enfrentaram entidades Morte séculos. Rituais. Ética. Respeito. Ocidente perdeu industrializou. Agora perdidos. Deus Morte não precisa morrer. Reconhecer. Honrar. Colocar lugar."
    },
    {
      nome: "Símbolos Antigos",
      conteudo: "Símbolos veem - Espiral, Olho, Convergência - não novos. 5000 anos. Egito. Sumério. Nok. Não crescimento. Retorno. Dormia acordando. Como sempre foi - necessário, implacável, definitivo."
    }
  ]
};

const npcCassandra: NPC = {
  id: "cassandra-visionaria",
  nome: "Cassandra Valle",
  profissao: "Visionária",
  descricaoFisica: "Mulher 67 anos, 1.62m, cabelos brancos longos despenteados. Olhos nublados cegueira. Pele enrugada. Roupas vintage múltiplas décadas. Tato explora ambiente.",
  personalidade: ["Críptica", "Visionária", "Cansada", "Desapegada"],
  objetivos: "Cumprir visões. Morrer em paz advertiu.",
  fraquezas: "Poderes psíquicos matam lentamente. Muito fraca. Pouco tempo.",
  dialogoApresentacao: "Cassandra. Grega profeta. Apropriado. 40 anos vendo futuro. Ninguém acreditou. Agora presentes. Aqui digo: conseguem evitar destino se fizerem certo. Ou precipitam errado. Escolha... quase sempre errada.",
  dialogos: [
    {
      nome: "Futuro Mais Provável",
      conteudo: "Vejo: Dezembro. Símbolo brilha céus. Abaixo sabem. Organização pânico. Veríssimo último ato. Lugar perigoso. Alguém morre. Não posso ver quem. Depois duas possibilidades. Civilização continua. Ou não. Números sugerem segunda provável."
    },
    {
      nome: "Sobre Sua Morte",
      conteudo: "Vejo minha morte. Logo. Semanas. Poderes psíquicos consomem corpo. Células irregulares. Câncer forma nunca vista. Em paz. Vida longa verdade. Maioria não consegue dizer."
    }
  ]
};

const npcThomas: NPC = {
  id: "thomas-arrependido",
  nome: "Thomas Ashford",
  profissao: "Ex-Operador / Monge",
  descricaoFisica: "Homem 58 anos, 1.76m, vestes monge marrom. Cabeça raspada. Cicatrizes símbolos costas. Olhos paz profunda e remorso. Voz baixa contemplativa.",
  personalidade: ["Contemplativo", "Arrependido", "Sereno", "Determinado"],
  objetivos: "Redimir pecados paranormais. Encontrar paz. Ajudar outros.",
  fraquezas: "Arrependimento paralisante. Hesita ações urgentes.",
  dialogoApresentacao: "Nome era Thomas Ashford. Era. Irmão Thomas. 25 anos matando entidades Organização. Achei certo. Protegia. Descobri criaturas sencientes. Pediam perdão. Imploravam. Matava mesmo. Aqui tento entender se redenção.",
  dialogos: [
    {
      nome: "Confissão",
      conteudo: "Matei 187 entidades paranormais confirmadas. Possivelmente mais. Cada marca. Cada pede redenção. Sou assassino. Criatura sim, mas assassino. Assusta descobrir criaturas mais morais que humanos."
    },
    {
      nome: "Redemção Possível",
      conteudo: "Não acredito redenção completa. Parcial. Cada ato compaixão cancela violência. Criatura protejo agora compensa matei. Não equilíbrio. Nunca. Mas melhor nada. Estão jornada similar?"
    }
  ]
};

const npcYuuki: NPC = {
  id: "yuuki-hacker-paranormal",
  nome: "Yuuki Tanaka",
  profissao: "Hacker Paranormal",
  descricaoFisica: "Mulher 26 anos, 1.58m, cabelos pretos verde-limão. Olhos asiáticos brilhantes. Roupas cyberpunk preta brilhos. Piercings múltiplos. Sotaque japonês.",
  personalidade: ["Brilhante", "Excêntrica", "Impulsiva", "Misterioso"],
  objetivos: "Entender paranormal e tecnologia. Potencialmente criar híbridos.",
  fraquezas: "Experimentos extremos. Sem limites éticos.",
  dialogoApresentacao: "Yuuki. Engenheira. Sistemas não deveriam existir. Paranormalidade software. Realidade código. Quebrei código. Vejo funciona. Reescrevo-o. Pouco. Perigoso. Veríssimo quer matar. Nix quer trabalhar. Querem?",
  dialogos: [
    {
      nome: "Realidade como Código",
      conteudo: "Tudo estrutura. Entidades exploits realidade. Bugs não-lineares. Entender linguagem, patchear. Contornar. Crashar intencionalmente. Código original parece... abandonado. Ninguém mantém mais."
    },
    {
      nome: "Ferramentas Paranormais",
      conteudo: "Posso dar ferramentas. Digitais espirituais. Penetrar sistemas paranormais. Contornar proteções. Comunicar entidades via interface neural. Risco corromper mente no processo."
    }
  ]
};

export const npcs: NPC[] = [
  npcMarine,
  npcSanter,
  npcVeríssimo,
  npcDante,
  npcAlice,
  npcMalachi,
  npcIris,
  npcPadre,
  npcHelena,
  npcMarcus,
  npcSarah,
  npcJacob,
  npcCassandra,
  npcThomas,
  npcYuuki
];
