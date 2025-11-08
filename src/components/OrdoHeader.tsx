import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { AlertTriangle, Clock, Shield } from "lucide-react";

export const OrdoHeader = ({ onLogoClick }: { onLogoClick?: () => void }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(glitchInterval);
    };
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary/30 ${glitch ? 'animate-glitch' : ''}`}>
      <div className="max-w-full px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo e Título */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLogoClick}
            title="Clique 3 vezes para revelar um segredo..."
          >
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className={`text-xl md:text-2xl font-bold font-mono-tech tracking-wider ${glitch ? 'text-accent' : 'text-primary'}`}>
                ORDO REALITAS
              </h1>
              <p className="text-xs text-muted-foreground font-courier">ARQUIVO CLASSIFICADO</p>
            </div>
          </div>

          {/* Centro - Alertas */}
          <div className="hidden md:flex items-center gap-2">
            <Badge variant="destructive" className="animate-pulse font-courier">
              <AlertTriangle className="h-3 w-3 mr-1" />
              NÍVEL MÁXIMO
            </Badge>
            <Badge variant="outline" className="border-accent text-accent font-courier">
              AMEAÇA ATIVA
            </Badge>
          </div>

          {/* Direita - Data/Hora */}
          <div className="flex items-center gap-3 font-terminal text-primary">
            <Clock className="h-5 w-5" />
            <div className="text-right">
              <div className="text-sm md:text-base font-bold tabular-nums">
                {formatTime(currentTime)}
              </div>
              <div className="text-xs text-muted-foreground tabular-nums">
                {formatDate(currentTime)}
              </div>
            </div>
          </div>
        </div>

        {/* Alerta mobile */}
        <div className="md:hidden mt-2 flex gap-2">
          <Badge variant="destructive" className="text-xs animate-pulse font-courier">
            <AlertTriangle className="h-3 w-3 mr-1" />
            NÍVEL MÁXIMO
          </Badge>
          <Badge variant="outline" className="text-xs border-accent text-accent font-courier">
            AMEAÇA ATIVA
          </Badge>
        </div>
      </div>

      {/* Linha de "ruído" animada */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
    </header>
  );
};