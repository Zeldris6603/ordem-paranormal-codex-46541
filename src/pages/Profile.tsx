import { useState, useEffect } from "react";
import { useAgent } from "@/contexts/AgentContext";
import { supabase } from "@/integrations/supabase/client";
import { useEasterEggs } from "@/hooks/useEasterEggs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { OrdoHeader } from "@/components/OrdoHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { 
  Activity, 
  FileText, 
  Lock, 
  TrendingUp, 
  Edit, 
  Save,
  Calendar,
  Award,
  Eye
} from "lucide-react";
import { Navigate } from "react-router-dom";

interface ActivityLog {
  id: string;
  action: string;
  details: string | null;
  timestamp: string;
}

interface Statistics {
  totalActivities: number;
  filesAccessed: number;
  easterEggsFound: number;
  daysActive: number;
}

export default function Profile() {
  const { agent, loading: agentLoading, logActivity } = useAgent();
  const { getProgress } = useEasterEggs();
  const { toast } = useToast();
  
  const [activities, setActivities] = useState<ActivityLog[]>([]);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    biography: "",
    strengths: "",
    weaknesses: ""
  });

  useEffect(() => {
    if (agent) {
      loadProfileData();
      setEditForm({
        biography: agent.biography || "",
        strengths: agent.strengths || "",
        weaknesses: agent.weaknesses || ""
      });
    }
  }, [agent]);

  const loadProfileData = async () => {
    if (!agent) return;

    try {
      // Load activity logs
      const { data: activityData, error: activityError } = await supabase
        .from("activity_logs")
        .select("*")
        .eq("agent_id", agent.id)
        .order("timestamp", { ascending: false })
        .limit(20);

      if (activityError) throw activityError;
      setActivities(activityData || []);

      // Calculate statistics
      const { data: allActivities } = await supabase
        .from("activity_logs")
        .select("action, timestamp")
        .eq("agent_id", agent.id);

      const filesAccessed = allActivities?.filter(a => a.action === "FILE_ACCESS").length || 0;
      const easterEggs = getProgress();
      
      // Calculate days active
      const timestamps = allActivities?.map(a => new Date(a.timestamp).getTime()) || [];
      const uniqueDays = new Set(
        timestamps.map(t => new Date(t).toDateString())
      ).size;

      setStatistics({
        totalActivities: allActivities?.length || 0,
        filesAccessed,
        easterEggsFound: easterEggs.discovered,
        daysActive: uniqueDays
      });

    } catch (error) {
      console.error("Error loading profile data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!agent) return;

    try {
      const { error } = await supabase
        .from("agents")
        .update({
          biography: editForm.biography,
          strengths: editForm.strengths,
          weaknesses: editForm.weaknesses
        })
        .eq("id", agent.id);

      if (error) throw error;

      await logActivity("PROFILE_UPDATED", "Agente atualizou suas informações");
      
      toast({
        title: "PERFIL ATUALIZADO",
        description: "Suas informações foram salvas com sucesso.",
      });

      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "ERRO",
        description: "Falha ao atualizar perfil.",
        variant: "destructive",
      });
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case "FILE_ACCESS":
        return <FileText className="h-4 w-4" />;
      case "EASTER_EGG_DISCOVERED":
        return <Lock className="h-4 w-4" />;
      case "PROFILE_UPDATED":
        return <Edit className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getActionLabel = (action: string) => {
    const labels: Record<string, string> = {
      FILE_ACCESS: "Arquivo Acessado",
      EASTER_EGG_DISCOVERED: "Segredo Descoberto",
      PROFILE_UPDATED: "Perfil Atualizado",
      LOGIN: "Login",
      LOGOUT: "Logout"
    };
    return labels[action] || action;
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Agora mesmo";
    if (diffMins < 60) return `${diffMins}m atrás`;
    if (diffHours < 24) return `${diffHours}h atrás`;
    if (diffDays < 7) return `${diffDays}d atrás`;
    return date.toLocaleDateString("pt-BR");
  };

  if (agentLoading) {
    return (
      <div className="min-h-screen bg-background">
        <OrdoHeader />
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-12 w-64 mb-8" />
          <div className="grid gap-6 md:grid-cols-4 mb-8">
            {[1, 2, 3, 4].map(i => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!agent) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <OrdoHeader />
      <NavigationMenu />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-4xl font-bold text-foreground">
              DOSSIÊ: {agent.code_name}
            </h1>
            <Badge 
              variant="outline" 
              className="text-sm"
              style={{ borderColor: agent.theme_color }}
            >
              NÍVEL {agent.access_level}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {agent.real_name} • {agent.class} • {agent.origin}
          </p>
        </div>

        {/* Statistics Cards */}
        {statistics && (
          <div className="grid gap-6 md:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Atividades Totais
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{statistics.totalActivities}</div>
                <p className="text-xs text-muted-foreground">
                  Registros no sistema
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Arquivos Acessados
                </CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{statistics.filesAccessed}</div>
                <p className="text-xs text-muted-foreground">
                  Documentos consultados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Segredos Descobertos
                </CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{statistics.easterEggsFound}</div>
                <p className="text-xs text-muted-foreground">
                  Easter eggs revelados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Dias Ativos
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{statistics.daysActive}</div>
                <p className="text-xs text-muted-foreground">
                  Presença no sistema
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tabs */}
        <Tabs defaultValue="info" className="space-y-6">
          <TabsList>
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="activity">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Perfil do Agente</CardTitle>
                  <CardDescription>
                    Informações detalhadas sobre sua identidade e capacidades
                  </CardDescription>
                </div>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                >
                  {isEditing ? (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Salvar
                    </>
                  ) : (
                    <>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="biography">Biografia</Label>
                  {isEditing ? (
                    <Textarea
                      id="biography"
                      value={editForm.biography}
                      onChange={(e) => setEditForm({ ...editForm, biography: e.target.value })}
                      className="mt-2 min-h-[100px]"
                      placeholder="Conte sua história..."
                    />
                  ) : (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {agent.biography || "Nenhuma biografia cadastrada."}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="strengths">Pontos Fortes</Label>
                  {isEditing ? (
                    <Textarea
                      id="strengths"
                      value={editForm.strengths}
                      onChange={(e) => setEditForm({ ...editForm, strengths: e.target.value })}
                      className="mt-2 min-h-[80px]"
                      placeholder="Suas habilidades e competências..."
                    />
                  ) : (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {agent.strengths || "Nenhum ponto forte cadastrado."}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="weaknesses">Pontos Fracos</Label>
                  {isEditing ? (
                    <Textarea
                      id="weaknesses"
                      value={editForm.weaknesses}
                      onChange={(e) => setEditForm({ ...editForm, weaknesses: e.target.value })}
                      className="mt-2 min-h-[80px]"
                      placeholder="Suas limitações e desafios..."
                    />
                  ) : (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {agent.weaknesses || "Nenhum ponto fraco cadastrado."}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Atividades</CardTitle>
                <CardDescription>
                  Registro cronológico das suas ações no sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                ) : activities.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    Nenhuma atividade registrada ainda.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                      >
                        <div className="mt-1">
                          {getActionIcon(activity.action)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">
                            {getActionLabel(activity.action)}
                          </p>
                          {activity.details && (
                            <p className="text-xs text-muted-foreground">
                              {activity.details}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground">
                            {formatTimestamp(activity.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
