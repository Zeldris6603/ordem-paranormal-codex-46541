import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-paranormal.jpg";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArchiveCard } from "@/components/ArchiveCard";
import { archiveItems } from "@/data/archiveData";
import { Timeline } from "@/components/Timeline";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
            }
          });
        },
        { threshold: 0.1 }
      );

      if (section) observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div 
          ref={(el) => el && (sectionsRef.current[0] = el)}
          className="relative z-10 text-center px-4 opacity-0 transition-all duration-1000"
        >
          <Badge className="mb-6 bg-primary/20 text-primary border-primary hover:bg-primary/30 text-lg px-6 py-2">
            Uma Historia Original
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Ordem Paranormal
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-accent mb-6">
            Os Filhos da Maldição
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Dois anos após o pesadelo, a anomalia retorna. A convocação foi feita.
          </p>
        </div>
      </section>

      {/* Synopsis Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div 
          ref={(el) => el && (sectionsRef.current[1] = el)}
          className="opacity-0 transition-all duration-1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            O Pesadelo de <span className="text-primary">Dois Anos Atrás</span>
          </h2>
          
          <Card className="bg-card border-border p-8 md:p-12 shadow-horror">
            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <p className="text-foreground leading-relaxed">
                Há dois anos, a equipe de agentes composta por <span className="text-primary font-semibold">Marine Flamarion</span>, <span className="text-primary font-semibold">Santer</span>, <span className="text-primary font-semibold">Firenze Flamarion</span>, <span className="text-primary font-semibold">Mathias Capulus</span> e <span className="text-primary font-semibold">Aristoteles</span> falhou miseravelmente. A missão, que parecia uma simples investigação, os levou ao epicentro de uma anomalia catastrófica, diretamente à frente do <span className="text-accent font-bold">Deus da Morte</span>.
              </p>

              <p className="text-foreground leading-relaxed">
                O confronto foi rápido e brutal. <span className="text-primary font-semibold">Santer</span>, o primeiro a ser pego, foi segurado por apenas um segundo pelo ser, mas esse ínfimo momento o fez envelhecer dez anos. Em um ato desesperado, <span className="text-primary font-semibold">Firenze</span>, o irmão gêmeo de Marine, se lançou para libertá-lo, mas foi capturado e envelheceu tão rapidamente que se transformou em pó diante dos olhos de todos.
              </p>

              <p className="text-foreground leading-relaxed">
                O horror da cena fez <span className="text-primary font-semibold">Mathias</span> enlouquecer, atacando o Deus da Morte com tudo que tinha, apenas para encontrar o mesmo destino trágico. Diante de tudo aquilo, <span className="text-primary font-semibold">Aristoteles</span> perdeu a sanidade e, em um surto de loucura, virou-se contra os próprios companheiros. Tomada pelo pânico e desespero, Marine o partiu ao meio para se defender. O que restava da equipe foi resgatado por "Dante" e levado de volta à base da <span className="text-secondary font-semibold">Ordo</span>, onde o evento foi abafado e classificado como um fracasso total.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* The召唤 Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div 
          ref={(el) => el && (sectionsRef.current[2] = el)}
          className="opacity-0 transition-all duration-1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            A <span className="text-accent">Convocação</span>
          </h2>
          
          <Card className="bg-card border-border p-8 md:p-12 shadow-horror">
            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <p className="text-foreground leading-relaxed">
                Dois anos se passaram. Santer e Marine tentaram seguir com suas vidas, acreditando que o pesadelo havia finalmente terminado. Eles foram dispensados de missões ativas, isolados para se recuperarem, mas a verdade é que o luto e a culpa jamais os abandonaram. O corpo de Santer, mesmo curado, ainda guarda as marcas do tempo, enquanto Marine vive com a memória daquele olhar insano de seu amigo e a ação desesperada que a fez matá-lo.
              </p>

              <p className="text-foreground leading-relaxed">
                No entanto, a Anomalia que eles enfrentaram há dois anos está de volta, manifestando-se de forma ainda mais virulenta. Uma nova onda de criaturas, o mesmo <span className="text-accent font-semibold">lodo</span> e os mesmos símbolos começam a surgir por todo o mundo.
              </p>

              <p className="text-foreground leading-relaxed">
                Agora, o enigmático <span className="text-secondary font-semibold">Veríssimo</span> convoca Santer e Marine para uma nova reunião. Ele não oferece desculpas, não explica o motivo. Apenas dá a eles uma nova missão, com uma nova equipe, e diz que é hora de eles voltarem a campo para buscar por respostas.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div 
          ref={(el) => el && (sectionsRef.current[3] = el)}
          className="opacity-0 transition-all duration-1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Os <span className="text-primary">Agentes</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Conheça os sobreviventes e os novos recrutas da Ordo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Marine Flamarion */}
            <Card className="bg-card border-border p-8 hover:shadow-horror transition-all duration-500 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary">Marine Flamarion</h3>
                <Badge className="bg-accent/20 text-accent border-accent">Sobrevivente</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Perdeu seu irmão gêmeo Firenze e matou Aristoteles em legítima defesa. Carrega o peso da culpa e da perda.
              </p>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fortes:</span>
                  <p className="text-sm text-muted-foreground">Resiliente, determinada, experiência em combate</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fracos:</span>
                  <p className="text-sm text-muted-foreground">Trauma profundo, hesitação em confiar em aliados</p>
                </div>
              </div>
            </Card>

            {/* Santer */}
            <Card className="bg-card border-border p-8 hover:shadow-horror transition-all duration-500 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary">Santer</h3>
                <Badge className="bg-accent/20 text-accent border-accent">Sobrevivente</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Envelheceu dez anos em um segundo. Seu corpo guarda as marcas do toque do Deus da Morte.
              </p>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fortes:</span>
                  <p className="text-sm text-muted-foreground">Conhecimento do inimigo, coragem inabalável</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fracos:</span>
                  <p className="text-sm text-muted-foreground">Corpo enfraquecido, medo do toque mortal</p>
                </div>
              </div>
            </Card>

            {/* Placeholder for new agents */}
            <Card className="bg-card/50 border-border border-dashed p-8 hover:shadow-horror transition-all duration-500">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-secondary">Novo Agente</h3>
                <Badge className="bg-secondary/20 text-secondary border-secondary">Recruta</Badge>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                Os novos membros da equipe ainda serão revelados...
              </p>
            </Card>

            <Card className="bg-card/50 border-border border-dashed p-8 hover:shadow-horror transition-all duration-500">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-secondary">Novo Agente</h3>
                <Badge className="bg-secondary/20 text-secondary border-secondary">Recruta</Badge>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                Os novos membros da equipe ainda serão revelados...
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-background via-card/30 to-background">
        <div 
          ref={(el) => el && (sectionsRef.current[4] = el)}
          className="opacity-0 transition-all duration-1000"
        >
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-destructive/20 text-destructive border-destructive hover:bg-destructive/30 text-lg px-6 py-2">
              ACESSO RESTRITO
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Arquivo da <span className="text-primary">Ordo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dossiês, símbolos, criaturas e artefatos catalogados. Investigue os mistérios que aguardam nas sombras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveItems.map((item) => (
              <ArchiveCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Uma campanha de <span className="text-primary font-semibold">Ordem Paranormal</span> por Lil
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            A anomalia aguarda. Vocês estão prontos?
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
