import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAgent } from "@/contexts/AgentContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlitchText } from "@/components/GlitchText";
import { Lock, UserPlus } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const authSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

const signUpSchema = authSchema.extend({
  agentCode: z.string().min(1, { message: "Código do agente obrigatório" }),
});

export default function Auth() {
  const navigate = useNavigate();
  const { signIn, signUp, user, agent, signOut, loading: authLoading } = useAgent();
  const { toast } = useToast();
  const [formLoading, setFormLoading] = useState(false);
  
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ email: "", password: "", agentCode: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Navigate to main page when user is present. Do this in an effect
  // to avoid updating Router state during render (React warning).
  // Only navigate to main page when we have a linked agent.
  // If a user exists but `agent` is null, we must stay on the auth page
  // (this can happen when the user exists but hasn't been linked to an agent yet).
  useEffect(() => {
    if (user && agent) {
      navigate("/");
    }
  }, [user, agent, navigate]);

  // If the user is authenticated but not linked to an agent, show a helpful
  // message so they know why navigation didn't occur.

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validation = authSchema.safeParse(loginData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

  console.log("Auth: handleLogin called", loginData);
  toast({ title: "Autenticando..." });
  setFormLoading(true);
  const res = await signIn(loginData.email, loginData.password);
  console.log("Auth: signIn result", res);
  setFormLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validation = signUpSchema.safeParse(signUpData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

  console.log("Auth: handleSignUp called", signUpData);
  toast({ title: "Registrando..." });
  setFormLoading(true);
  const { error } = await signUp(signUpData.email, signUpData.password, signUpData.agentCode);
  console.log("Auth: signUp result", { error });
  setFormLoading(false);
    
    // Do not navigate immediately after signUp; wait for the
    // auth/agent listener to set `agent` and let the effect above
    // handle routing to the main page when appropriate.
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <div className="scanline pointer-events-none" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <Card className="w-full max-w-md relative z-10 bg-card/90 backdrop-blur border-primary/30">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-terminal text-center">
            <GlitchText text="ORDO REALITAS" className="text-primary" />
          </CardTitle>
          <CardDescription className="text-center font-mono-tech">
            SISTEMA DE AUTENTICAÇÃO SECURIZADO
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            {user && !agent && !authLoading && (
              <div className="mb-4 p-4 bg-destructive/5 border border-destructive/20 rounded">
                <p className="text-sm font-terminal text-destructive mb-2">Conta autenticada, mas sem vínculo de agente.</p>
                <p className="text-xs text-muted-foreground mb-3">Se você já se registrou, espere alguns segundos para vinculação automática ou contate um administrador para vincular sua conta ao agente correto.</p>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => signOut()} className="font-terminal">SAIR</Button>
                </div>
              </div>
            )}
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" className="font-terminal">
                <Lock className="w-4 h-4 mr-2" />
                LOGIN
              </TabsTrigger>
              <TabsTrigger value="signup" className="font-terminal">
                <UserPlus className="w-4 h-4 mr-2" />
                REGISTRO
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="font-terminal text-primary">
                    &gt; EMAIL
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="agente@ordo.gov"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="font-mono-tech bg-background/50"
                    disabled={formLoading}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive font-terminal">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="font-terminal text-primary">
                    &gt; SENHA
                  </Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="font-mono-tech bg-background/50"
                    disabled={formLoading}
                  />
                  {errors.password && (
                    <p className="text-xs text-destructive font-terminal">{errors.password}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full font-terminal"
                  disabled={formLoading}
                >
                  {formLoading ? "AUTENTICANDO..." : "ACESSAR SISTEMA"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-code" className="font-terminal text-primary">
                    &gt; CÓDIGO DO AGENTE
                  </Label>
                  <Input
                    id="signup-code"
                    type="text"
                    placeholder="MARINE, SANTER, MIKAEL, NOAH, KORNELL"
                    value={signUpData.agentCode}
                    onChange={(e) => setSignUpData({ ...signUpData, agentCode: e.target.value.toUpperCase() })}
                    className="font-mono-tech bg-background/50 uppercase"
                    disabled={formLoading}
                  />
                  {errors.agentCode && (
                    <p className="text-xs text-destructive font-terminal">{errors.agentCode}</p>
                  )}
                  <p className="text-xs text-muted-foreground font-mono-tech">
                    Apenas agentes autorizados pela Ordo podem se registrar.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="font-terminal text-primary">
                    &gt; EMAIL
                  </Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="agente@ordo.gov"
                    value={signUpData.email}
                    onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                    className="font-mono-tech bg-background/50"
                    disabled={formLoading}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive font-terminal">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="font-terminal text-primary">
                    &gt; SENHA
                  </Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    className="font-mono-tech bg-background/50"
                    disabled={formLoading}
                  />
                  {errors.password && (
                    <p className="text-xs text-destructive font-terminal">{errors.password}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full font-terminal"
                  disabled={formLoading}
                >
                  {formLoading ? "REGISTRANDO..." : "REGISTRAR ACESSO"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 p-3 bg-accent/10 border border-accent/30 rounded">
            <p className="text-xs font-terminal text-accent text-center">
              ⚠ ACESSO RESTRITO A AGENTES DA ORDO REALITAS
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
