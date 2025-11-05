import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Lock, Unlock } from "lucide-react";

interface AccessTerminalProps {
  level: string;
  clearance?: string;
}

export const AccessTerminal = ({ level, clearance = "ALFA" }: AccessTerminalProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUnlocked(true);
    }, 1500);

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <Card className="bg-card/50 border-primary/30 p-4 mb-6 font-terminal">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isUnlocked ? (
            <Unlock className="h-5 w-5 text-primary" />
          ) : (
            <Lock className="h-5 w-5 text-accent animate-pulse" />
          )}
          <div>
            <p className="text-sm text-primary">
              {isUnlocked ? (
                <span className="text-primary">&gt; ACESSO CONCEDIDO</span>
              ) : (
                <span className="text-accent">&gt; VERIFICANDO CREDENCIAIS{dots}</span>
              )}
            </p>
            <p className="text-xs text-muted-foreground">
              Clearance Level: {clearance} | Classification: {level}
            </p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded text-xs font-bold ${
          isUnlocked 
            ? "bg-primary/20 text-primary" 
            : "bg-accent/20 text-accent animate-pulse"
        }`}>
          {isUnlocked ? "AUTHORIZED" : "CHECKING..."}
        </div>
      </div>
    </Card>
  );
};