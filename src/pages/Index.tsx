import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAgent } from "@/contexts/AgentContext";
import heroImage from "@/assets/hero-paranormal.jpg";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArchiveCard } from "@/components/ArchiveCard";
import { archiveItems } from "@/data/archiveData";
import { Timeline } from "@/components/Timeline";
import { OrdoHeader } from "@/components/OrdoHeader";
import { ClassifiedBanner } from "@/components/ClassifiedBanner";
import { GlitchText } from "@/components/GlitchText";
import { DecodingLoader } from "@/components/DecodingLoader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ClassifiedFilesSection } from "@/components/ClassifiedFilesSection";
import { KonamiCode } from "@/components/KonamiCode";
import { SecretsDiscovered } from "@/components/SecretsDiscovered";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { useEasterEggs } from "@/hooks/useEasterEggs";
import { EasterEggDialog } from "@/components/EasterEggDialog";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { agent, loading, signOut, logActivity } = useAgent();
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const { discoverEgg } = useEasterEggs();
  const { toast } = useToast();
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEggDialog, setShowEggDialog] = useState(false);
  const [currentEgg, setCurrentEgg] = useState<any>(null);

  useEffect(() => {
    if (!loading && !agent) {
      navigate("/auth");
    }
  }, [agent, loading, navigate]);

  useEffect(() => {
    if (agent) {
      logActivity("PAGE_VIEW", "Accessed main dashboard");
    }
  }, [agent]);

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Remove opacity and apply fade-in animation
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add("opacity-1", "animate-fade-in");
              // Stop observing after animation
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(section);
      return observer;
    }).filter(obs => obs !== null);

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <DecodingLoader text="CARREGANDO PERFIL DO AGENTE" />
      </div>
    );
  }

  if (!agent) {
    return null;
  }

  const handleLogout = async () => {
    await logActivity("LOGOUT", "Agent logged out");
    await signOut();
    navigate("/auth");
  };

  const handleLogoClick = async () => {
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);

    if (newCount === 3) {
      const egg = await discoverEgg("triple_click_logo");
      if (egg) {
        setCurrentEgg(egg);
        setShowEggDialog(true);
        toast({
          title: "👁 O TERCEIRO OLHO SE ABRE",
          description: "Você vê o que está oculto...",
        });
      }
      setLogoClicks(0);
    }

    setTimeout(() => {
      setLogoClicks(0);
    }, 2000);
  };

  // Theme color mapping
  const themeColors: Record<string, string> = {
    wine: "from-rose-950 to-background",
    slate: "from-slate-800 to-background",
    emerald: "from-emerald-900 to-background",
    amber: "from-amber-900 to-background",
    blue: "from-blue-900 to-background",
  };

  const accentColors: Record<string, string> = {
    wine: "border-rose-500/30",
    slate: "border-slate-500/30",
    emerald: "border-emerald-500/30",
    amber: "border-amber-500/30",
    blue: "border-blue-500/30",
  };

  const gradientClass = themeColors[agent.theme_color] || themeColors.wine;
  const accentClass = accentColors[agent.theme_color] || accentColors.wine;

  return (
    <main className={`min-h-screen bg-gradient-to-b ${gradientClass} text-foreground scanline`}>
      <KonamiCode />
      <OrdoHeader onLogoClick={handleLogoClick} />
      <NavigationMenu />
      
      {/* Agent Status Bar */}
      <div className={`fixed top-20 right-4 z-40 bg-card/90 backdrop-blur border ${accentClass} p-4 rounded font-terminal text-sm max-w-xs`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-primary">&gt; AGENTE ATIVO:</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="h-6 px-2"
          >
            <LogOut className="w-3 h-3" />
          </Button>
        </div>
        <p className="text-foreground font-bold">{agent.code_name}</p>
        <p className="text-muted-foreground text-xs">{agent.real_name}</p>
        <p className="text-muted-foreground text-xs mt-1">
          Classe: {agent.class} | Origem: {agent.origin}
        </p>
        <div className="mt-2 pt-2 border-t border-primary/30">
          <p className="text-xs text-accent">
            Nível de Acesso: <span className="font-bold">{agent.access_level}</span>
          </p>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
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
          <Badge className="mb-6 bg-primary/20 text-primary border-primary hover:bg-primary/30 text-lg px-6 py-2 font-courier">
            ARQUIVO CONFIDENCIAL
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight font-mono-tech">
            <GlitchText 
              text="ORDEM PARANORMAL"
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            />
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-accent mb-6 font-typewriter">
            Os Filhos da Maldição
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-courier">
            Dois anos após o pesadelo, a anomalia retorna. A convocação foi feita.
          </p>
          <div className="mt-8 text-sm text-primary/70 font-terminal">
            &gt; ACESSO CONCEDIDO | SISTEMA OPERACIONAL
          </div>
        </div>
      </section>

      <ClassifiedBanner />

      {/* Synopsis Section */}
      <section id="synopsis" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div 
          ref={(el) => el && (sectionsRef.current[1] = el)}
          className="opacity-0 transition-all duration-1000"
        >
          <div className="mb-6 text-center">
            <span className="text-primary font-terminal text-sm">&gt; DECODIFICANDO ARQUIVO...</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-courier">
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
          <div className="mb-6 text-center">
            <span className="text-accent font-terminal text-sm animate-pulse">&gt; ALERTA: NOVA AMEAÇA DETECTADA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-courier">
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
      <section id="agents" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div 
          ref={(el) => el && (sectionsRef.current[3] = el)}
          className="opacity-0 transition-all duration-1000"
        >
          <div className="mb-6 text-center">
            <span className="text-primary font-terminal text-sm">&gt; ACESSANDO DOSSIÊS DE AGENTES...</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-courier">
            Os <span className="text-primary">Agentes</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 font-courier">
            Conheça os sobreviventes e os novos recrutas da Ordo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            {/* Mikael Trovi */}
            <Card className="bg-card border-border p-8 hover:shadow-horror transition-all duration-500 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary">Mikael Trovi</h3>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500">Ocultista</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Jovem ocultista de mechas rosadas. Perdeu a família para o Coletivo das Sombras. Especialista em runas e simbologia.
              </p>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fortes:</span>
                  <p className="text-sm text-muted-foreground">Conhecimento ritualístico, improviso, coragem</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fracos:</span>
                  <p className="text-sm text-muted-foreground">Impulsividade, insubordinação, sede de vingança</p>
                </div>
              </div>
            </Card>

            {/* Noah */}
            <Card className="bg-card border-border p-8 hover:shadow-horror transition-all duration-500 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary">Noah</h3>
                <Badge className="bg-amber-500/20 text-amber-400 border-amber-500">Especialista</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Ex-mercenário salvo pela Ordo após contato com Lodo Vivo. Agora serve como analista tático da equipe.
              </p>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fortes:</span>
                  <p className="text-sm text-muted-foreground">Precisão, análise tática, frieza sob pressão</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fracos:</span>
                  <p className="text-sm text-muted-foreground">Desconfiança, isolamento emocional</p>
                </div>
              </div>
            </Card>

            {/* Kornell Kalashnikov */}
            <Card className="bg-card border-border p-8 hover:shadow-horror transition-all duration-500 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary">Kornell Kalashnikov</h3>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500">Combatente</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Ex-trapaceiro que enganou a pessoa errada. Agora serve à Ordem, usando sua lábia e reflexos para o bem.
              </p>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fortes:</span>
                  <p className="text-sm text-muted-foreground">Combate corpo a corpo, lábia excepcional, reflexos rápidos</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">Pontos Fracos:</span>
                  <p className="text-sm text-muted-foreground">Passado criminal, dificuldade em confiar, tendência a trapacear</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section id="archive" className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-background via-card/30 to-background">
        <div 
          ref={(el) => el && (sectionsRef.current[4] = el)}
          className="opacity-0 transition-all duration-1000"
        >
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="text-destructive font-terminal text-sm animate-pulse">&gt; REQUER AUTORIZAÇÃO NÍVEL ALFA</span>
            </div>
            <Badge className="mb-6 bg-destructive/20 text-destructive border-destructive hover:bg-destructive/30 text-lg px-6 py-2 font-courier">
              ACESSO RESTRITO
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-courier">
              Arquivo da <span className="text-primary">Ordo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-courier">
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

      {/* Classified Files Database Section */}
      <ClassifiedFilesSection />

      {/* Secrets Discovered Section */}
      <section id="secrets" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="text-accent font-terminal text-sm animate-pulse">
              &gt; DECODIFICANDO ARQUIVOS SECRETOS...
            </span>
          </div>
          <Badge className="mb-6 bg-accent/20 text-accent border-accent hover:bg-accent/30 text-lg px-6 py-2 font-courier">
            EASTER EGGS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-courier">
            Segredos da <span className="text-primary">Ordo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-courier mb-4">
            Mistérios ocultos esperam por aqueles com olhos para ver. Explore a interface e descubra o que está escondido.
          </p>
          <p className="text-sm text-accent/70 font-terminal">
            💡 DICA: Experimente sequências de teclas, cliques em locais inesperados...
          </p>
        </div>
        <SecretsDiscovered />
      </section>

      {/* Timeline Section */}
      <Timeline />

      {currentEgg && (
        <EasterEggDialog
          isOpen={showEggDialog}
          onClose={() => setShowEggDialog(false)}
          title={currentEgg.title}
          description={currentEgg.description}
          secret={currentEgg.secret}
        />
      )}

      <ClassifiedBanner
        level="FIM DE TRANSMISSÃO" 
        message="Mantenha-se vigilante. Eles estão observando."
      />

      {/* Footer */}
      <footer className="py-12 px-4 border-t-2 border-primary/30 bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground font-courier mb-2">
            <span className="text-primary font-terminal">&gt;</span> Uma campanha de <span className="text-primary font-semibold">Ordem Paranormal</span>
          </p>
          <p className="text-sm text-muted-foreground font-terminal">
            A anomalia aguarda. Vocês estão prontos?
          </p>
          <div className="mt-4 text-xs text-primary/50 font-terminal">
            ORDO_REALITAS_v2.7.3 | SISTEMA OPERACIONAL | ACESSO: AUTORIZADO
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
