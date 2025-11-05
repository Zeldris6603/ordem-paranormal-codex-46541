import { Card, CardContent } from "./ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  classification: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1647",
    title: "O Pacto Original",
    description: "Laurent Flamarion conduz o Ritual de Contenção, aprisionando 'Le Dévoreur d'Âmes' usando sua própria linhagem como corrente. A Maldição Flamarion nasce.",
    classification: "ORIGEM"
  },
  {
    year: "1847",
    title: "Fundação da Ordo Brasileira",
    description: "Isabelle Flamarion (5ª geração) participa da fundação de uma das primeiras células da Ordo Realitas no Brasil, trazendo conhecimento ancestral.",
    classification: "HISTÓRICO"
  },
  {
    year: "1925",
    title: "O Desaparecimento de Antoine",
    description: "Antoine Flamarion (6ª geração) desaparece durante a Segunda Guerra Mundial em circunstâncias misteriosas. Seus diários nunca foram encontrados.",
    classification: "CLASSIFICADO"
  },
  {
    year: "2015",
    title: "Operação Nightfall",
    description: "Dante extrai 8 agentes de zona contaminada por Lodo Vivo. Primeira manifestação confirmada da anomalia em território nacional.",
    classification: "OPERACIONAL"
  },
  {
    year: "2018",
    title: "Resgate do Subsolo",
    description: "Dante é o único sobrevivente de um encontro com [REDACTED]. Detalhes permanecem ultra-secretos.",
    classification: "ULTRA-SECRETO"
  },
  {
    year: "2 anos atrás",
    title: "Incidente Deus da Morte",
    description: "Equipe Flamarion confronta entidade Classe-X. 3 KIA. Marine e Santer sobrevivem com danos permanentes. Firenze Flamarion consumido.",
    classification: "NIVEL MÁXIMO"
  },
  {
    year: "6 meses atrás",
    title: "Primeiras Manifestações",
    description: "Símbolos da Espiral Devoradora começam a aparecer em 4 localizações distintas. Análise de Cipher revela padrão geométrico.",
    classification: "ATIVO"
  },
  {
    year: "3 meses atrás",
    title: "Interceptação do Coletivo",
    description: "Comunicações interceptadas mencionam 'A Flamarion retornou'. Célula em Porto Alegre desmantelada, mas líder escapa.",
    classification: "CRÍTICO"
  },
  {
    year: "3 semanas atrás",
    title: "Ritual da Convergência",
    description: "Coletivo das Sombras menciona 'Ritual da Convergência Final' em 47 dias. Veríssimo reativa Marine e Santer para nova operação.",
    classification: "AMEAÇA IMINENTE"
  },
  {
    year: "PRESENTE",
    title: "Mobilização da Ordo",
    description: "Nova equipe formada: Marine, Santer, Atlas, Nightingale e Cipher. Missão: Impedir o ritual e confrontar a verdade sobre a Maldição Flamarion.",
    classification: "EM ANDAMENTO"
  }
];

export const Timeline = () => {
  return (
    <section className="py-20 px-4" id="timeline">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            LINHA DO TEMPO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do Pacto de 1647 até a crise atual. Séculos de segredos, sacrifícios e a maldição que se aproxima de seu clímax.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-[0_0_20px_rgba(var(--primary),0.5)]" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="text-2xl font-bold text-primary">{event.year}</span>
                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-mono">
                          {event.classification}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
