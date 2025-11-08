import { useEasterEggs } from "@/hooks/useEasterEggs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Eye, Lock } from "lucide-react";
import { DecodingLoader } from "./DecodingLoader";

export const SecretsDiscovered = () => {
  const { getDiscoveredEggs, getProgress, loading, allEggs } = useEasterEggs();
  const discoveredEggs = getDiscoveredEggs();
  const progress = getProgress();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <DecodingLoader text="CARREGANDO SEGREDOS" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 backdrop-blur border-primary/30">
        <CardHeader>
          <CardTitle className="font-terminal text-primary flex items-center gap-2">
            <Eye className="w-5 h-5" />
            SEGREDOS DESCOBERTOS
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-mono-tech">
              <span className="text-muted-foreground">Progresso</span>
              <span className="text-primary font-bold">
                {progress.discovered}/{progress.total} ({progress.percentage}%)
              </span>
            </div>
            <Progress value={progress.percentage} className="h-2" />
          </div>

          <div className="space-y-3 mt-6">
            {allEggs.map((egg) => {
              const isDiscovered = discoveredEggs.some((d) => d.id === egg.id);
              return (
                <Card
                  key={egg.id}
                  className={`${
                    isDiscovered
                      ? "bg-primary/5 border-primary/30"
                      : "bg-card/30 border-muted/20"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      {isDiscovered ? (
                        <Eye className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      ) : (
                        <Lock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className={`font-terminal text-sm font-bold ${
                              isDiscovered ? "text-primary" : "text-muted-foreground"
                            }`}
                          >
                            {isDiscovered ? egg.title : "???"}
                          </h3>
                          {isDiscovered && (
                            <Badge className="bg-primary/20 text-primary border-primary text-xs">
                              DESBLOQUEADO
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground font-mono-tech">
                          {isDiscovered ? egg.description : "Segredo ainda não descoberto"}
                        </p>
                        {isDiscovered && (
                          <p className="text-xs text-foreground/80 font-courier mt-2 pt-2 border-t border-primary/20">
                            {egg.secret}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {progress.percentage === 100 && (
        <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50">
          <CardContent className="p-6 text-center">
            <Eye className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-terminal text-xl font-bold text-primary mb-2">
              TODOS OS SEGREDOS REVELADOS
            </h3>
            <p className="text-sm text-foreground/80 font-courier">
              Você desvendou todos os mistérios ocultos da Ordo Realitas. O conhecimento é
              poder, agente. Use-o com sabedoria.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
