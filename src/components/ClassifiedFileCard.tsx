import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Lock, Unlock, FileText, AlertTriangle } from "lucide-react";
import { ClassifiedFile } from "@/hooks/useClassifiedFiles";
import { useAgent } from "@/contexts/AgentContext";
import { AccessTerminal } from "./AccessTerminal";

interface ClassifiedFileCardProps {
  file: ClassifiedFile;
  hasAccess: boolean;
}

export const ClassifiedFileCard = ({ file, hasAccess }: ClassifiedFileCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { agent, logActivity } = useAgent();

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      report: "RELATÓRIO",
      creature: "CRIATURA",
      artifact: "ARTEFATO",
      symbol: "SÍMBOLO",
      prophecy: "PROFECIA",
    };
    return labels[category] || category.toUpperCase();
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      report: "bg-blue-500/20 text-blue-400 border-blue-500",
      creature: "bg-red-500/20 text-red-400 border-red-500",
      artifact: "bg-purple-500/20 text-purple-400 border-purple-500",
      symbol: "bg-emerald-500/20 text-emerald-400 border-emerald-500",
      prophecy: "bg-amber-500/20 text-amber-400 border-amber-500",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  const getClassificationColor = (classification: string) => {
    if (classification.includes("ULTRA")) return "text-destructive";
    if (classification.includes("SECRETO")) return "text-accent";
    if (classification.includes("CONFIDENCIAL")) return "text-primary";
    return "text-muted-foreground";
  };

  const handleOpen = () => {
    if (hasAccess) {
      logActivity("FILE_ACCESS", `Accessed: ${file.title}`);
    }
    setIsOpen(true);
  };

  return (
    <>
      <Card 
        className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
          hasAccess 
            ? "hover:shadow-horror hover:border-primary/50" 
            : "opacity-60 hover:border-destructive/50"
        }`}
        onClick={handleOpen}
      >
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge className={`${getCategoryColor(file.category)} font-terminal text-xs`}>
              {getCategoryLabel(file.category)}
            </Badge>
            {hasAccess ? (
              <Unlock className="w-4 h-4 text-primary" />
            ) : (
              <Lock className="w-4 h-4 text-destructive" />
            )}
          </div>
          <CardTitle className="font-courier text-lg">{file.title}</CardTitle>
          <CardDescription className={`font-terminal text-xs ${getClassificationColor(file.classification)}`}>
            {file.classification}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono-tech">
            <FileText className="w-3 h-3" />
            <span>Nível Requerido: {file.required_access_level}</span>
          </div>
          {!hasAccess && (
            <div className="mt-3 flex items-center gap-2 text-xs text-destructive font-terminal">
              <AlertTriangle className="w-3 h-3" />
              <span>ACESSO NEGADO</span>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur border-primary/30">
          <DialogHeader>
            {hasAccess ? (
              <AccessTerminal level={file.classification} clearance={`NÍVEL ${agent?.access_level}`} />
            ) : (
              <div className="bg-destructive/10 border border-destructive/30 p-4 rounded font-terminal">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="h-6 w-6 text-destructive animate-pulse" />
                  <p className="text-lg text-destructive font-bold">
                    &gt; ACESSO NEGADO
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Suas credenciais não possuem autorização para acessar este arquivo.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Contate o Diretor Veríssimo para solicitar elevação de clearance.
                </p>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4">
              <Badge className={`${getCategoryColor(file.category)} font-terminal`}>
                {getCategoryLabel(file.category)}
              </Badge>
              <span className={`text-xs font-terminal ${getClassificationColor(file.classification)}`}>
                {file.classification}
              </span>
            </div>
            
            <DialogTitle className="font-courier text-2xl mt-2">{file.title}</DialogTitle>
            <DialogDescription className="font-mono-tech">
              Arquivo classificado da Ordo Realitas
            </DialogDescription>
          </DialogHeader>

          {hasAccess ? (
            <div className="mt-6 space-y-4">
              <div className="prose prose-invert max-w-none">
                <div 
                  className="font-courier text-sm leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: file.content }}
                />
              </div>
            </div>
          ) : (
            <div className="mt-6 p-8 bg-background/50 border border-destructive/20 rounded">
              <div className="space-y-4 text-center">
                <AlertTriangle className="w-16 h-16 text-destructive mx-auto animate-pulse" />
                <p className="text-xl font-terminal text-destructive">
                  CONTEÚDO CLASSIFICADO
                </p>
                <p className="text-sm text-muted-foreground font-mono-tech max-w-md mx-auto">
                  Este arquivo requer nível de acesso {file.required_access_level}.
                  Seu nível atual: {agent?.access_level}.
                </p>
                <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded">
                  <p className="text-xs font-terminal text-destructive/80">
                    PROTOCOLO 7-ALFA: Tentativas não autorizadas de acesso serão registradas e reportadas.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <Button onClick={() => setIsOpen(false)} variant="outline" className="font-terminal">
              FECHAR
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
