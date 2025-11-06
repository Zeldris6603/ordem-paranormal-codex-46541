import { useState } from "react";
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

const authSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

const signUpSchema = authSchema.extend({
  agentCode: z.string().min(1, { message: "Código do agente obrigatório" }),
});

export default function Auth() {
  const navigate = useNavigate();
  const { signIn, signUp, user } = useAgent();
  const [loading, setLoading] = useState(false);
  
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ email: "", password: "", agentCode: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (user) {
    navigate("/");
    return null;
  }

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

    setLoading(true);
    await signIn(loginData.email, loginData.password);
    setLoading(false);
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

    setLoading(true);
    const { error } = await signUp(signUpData.email, signUpData.password, signUpData.agentCode);
    setLoading(false);
    
    if (!error) {
      navigate("/");
    }
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
                    disabled={loading}
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
                    disabled={loading}
                  />
                  {errors.password && (
                    <p className="text-xs text-destructive font-terminal">{errors.password}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full font-terminal"
                  disabled={loading}
                >
                  {loading ? "AUTENTICANDO..." : "ACESSAR SISTEMA"}
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
                    placeholder="MARINE, SANTER, MIKAEL, NOAH"
                    value={signUpData.agentCode}
                    onChange={(e) => setSignUpData({ ...signUpData, agentCode: e.target.value.toUpperCase() })}
                    className="font-mono-tech bg-background/50 uppercase"
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
                  />
                  {errors.password && (
                    <p className="text-xs text-destructive font-terminal">{errors.password}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full font-terminal"
                  disabled={loading}
                >
                  {loading ? "REGISTRANDO..." : "REGISTRAR ACESSO"}
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
