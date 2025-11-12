import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MasterGate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // Credencial hardcoded para o Mestre
  const MASTER_PASSWORD = "VERÍSSIMO_REALITAS_2025";

  const handleMasterLogin = () => {
    if (isLocked) {
      toast({
        variant: "destructive",
        title: "🔒 Acesso Bloqueado",
        description: "Muitas tentativas falhadas. Tente novamente em 5 minutos.",
      });
      return;
    }

    if (password === MASTER_PASSWORD) {
      // Salvar sessão do Mestre
      sessionStorage.setItem("master_session", "true");
      localStorage.setItem("master_login_time", new Date().toISOString());
      
      toast({
        title: "✓ Bem-vindo, Mestre",
        description: "Acesso ao Painel de Controle concedido",
      });

      setTimeout(() => {
        navigate("/master");
      }, 500);
    } else {
      const newCount = attemptCount + 1;
      setAttemptCount(newCount);

      if (newCount >= 3) {
        setIsLocked(true);
        toast({
          variant: "destructive",
          title: "🔒 Acesso Bloqueado",
          description: "3 tentativas falhadas. Sistema bloqueado por segurança.",
        });
        
        // Desbloquear após 5 minutos
        setTimeout(() => {
          setIsLocked(false);
          setAttemptCount(0);
          setPassword("");
        }, 300000);
      } else {
        toast({
          variant: "destructive",
          title: "❌ Senha Incorreta",
          description: `Tentativa ${newCount} de 3. Cuidado: o Outro Lado está observando...`,
        });
      }

      setPassword("");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-background text-foreground scanline flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <Card className="relative z-10 bg-card/95 border-primary/50 backdrop-blur max-w-md w-full p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="mb-4 text-4xl">🔐</div>
          <h1 className="text-3xl font-bold font-courier mb-2 text-primary">
            PAINEL DO MESTRE
          </h1>
          <p className="text-muted-foreground font-terminal text-sm">
            Acesso Restrito - Nível Ultra-Secreto
          </p>
        </div>

        <Badge className="w-full justify-center mb-6 bg-destructive/20 text-destructive border-destructive">
          AUTENTICAÇÃO BIOMÉTRICA PARANORMAL
        </Badge>

        <div className="space-y-4 mb-6">
          <div className="relative">
            <label className="block text-sm font-semibold mb-2 text-foreground font-terminal">
              &gt; CREDENCIAL DE MESTRE:
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleMasterLogin()}
                placeholder="••••••••••••••••••••••••"
                className="bg-input border-primary/30 text-foreground placeholder-muted-foreground/50 pr-10"
                disabled={isLocked}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {attemptCount > 0 && !isLocked && (
            <div className="text-xs text-amber-500 font-terminal">
              ⚠️ Tentativas restantes: {3 - attemptCount}/3
            </div>
          )}

          {isLocked && (
            <div className="text-xs text-destructive font-terminal bg-destructive/10 p-2 rounded">
              🔒 Sistema bloqueado. Aguarde 5 minutos.
            </div>
          )}
        </div>

        <Button
          onClick={handleMasterLogin}
          disabled={isLocked || password.length === 0}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-10 font-terminal mb-4"
        >
          {isLocked ? "SISTEMA BLOQUEADO" : "AUTENTICAR"}
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="w-full text-muted-foreground hover:text-foreground"
        >
          Voltar ao Arquivo
        </Button>

        <div className="mt-8 pt-6 border-t border-primary/20 text-center">
          <p className="text-xs text-muted-foreground font-terminal space-y-2">
            <div>&gt; SISTEMA SEGURO PARANORMAL</div>
            <div>&gt; ACESSO MONITORADO EM TEMPO REAL</div>
            <div>&gt; NÃO COMPARTILHE CREDENCIAIS</div>
          </p>
        </div>
      </Card>
    </main>
  );
};

export default MasterGate;
