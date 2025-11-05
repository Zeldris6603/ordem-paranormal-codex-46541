import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AccessTerminal } from "./AccessTerminal";
import { FileText, AlertTriangle } from "lucide-react";

interface ArchiveCardProps {
  title: string;
  type: "dossier" | "symbol" | "creature" | "artifact" | "report";
  preview: string;
  content: string;
  classification?: string;
  imageUrl?: string;
}

const typeStyles = {
  dossier: { bg: "bg-primary/10", text: "text-primary", border: "border-primary" },
  symbol: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary" },
  creature: { bg: "bg-accent/10", text: "text-accent", border: "border-accent" },
  artifact: { bg: "bg-destructive/10", text: "text-destructive", border: "border-destructive" },
  report: { bg: "bg-muted/20", text: "text-foreground", border: "border-muted" },
};

const typeLabels = {
  dossier: "DOSSIÊ",
  symbol: "SÍMBOLO",
  creature: "CRIATURA",
  artifact: "ARTEFATO",
  report: "RELATÓRIO",
};

export const ArchiveCard = ({ title, type, preview, content, classification, imageUrl }: ArchiveCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const styles = typeStyles[type];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card 
          className={`${styles.bg} border-2 ${styles.border} p-6 cursor-pointer hover:shadow-horror transition-all duration-500 hover:scale-105 group relative overflow-hidden`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Efeito de scan line ao hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse pointer-events-none"></div>
          )}
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className={`h-4 w-4 ${styles.text}`} />
                <h3 className={`text-xl font-bold ${styles.text} group-hover:text-shadow-glow font-courier`}>
                  {title}
                </h3>
              </div>
              <Badge className={`${styles.bg} ${styles.text} ${styles.border} font-terminal text-xs`}>
                {typeLabels[type]}
              </Badge>
            </div>
            {classification && (
              <Badge className="mb-3 bg-destructive/20 text-destructive border-destructive font-terminal text-xs flex items-center gap-1 w-fit">
                <AlertTriangle className="h-3 w-3" />
                {classification}
              </Badge>
            )}
            <p className="text-muted-foreground text-sm line-clamp-3 font-courier">{preview}</p>
            <p className={`text-xs ${styles.text} mt-4 opacity-70 group-hover:opacity-100 transition-opacity font-terminal`}>
              &gt; CLIQUE PARA ACESSAR ARQUIVO_
            </p>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-background/98 backdrop-blur-md border-2 border-primary/50">
        <DialogHeader>
          <AccessTerminal level={classification || "NIVEL ALFA"} />
          
          <div className="flex items-center gap-3 mb-2">
            <Badge className={`${styles.bg} ${styles.text} ${styles.border} font-terminal`}>
              {typeLabels[type]}
            </Badge>
            {classification && (
              <Badge className="bg-destructive/20 text-destructive border-destructive font-terminal flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                {classification}
              </Badge>
            )}
          </div>
          <DialogTitle className={`text-3xl ${styles.text} font-courier`}>{title}</DialogTitle>
        </DialogHeader>
        {imageUrl && (
          <div className="my-4 rounded-lg overflow-hidden border-2 border-primary/30">
            <img src={imageUrl} alt={title} className="w-full h-auto" />
          </div>
        )}
        <DialogDescription className="text-foreground prose prose-invert max-w-none font-courier prose-headings:font-courier prose-headings:text-primary prose-p:text-foreground">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </DialogDescription>
        
        {/* Footer do documento */}
        <div className="mt-6 pt-4 border-t border-primary/30 text-xs text-muted-foreground font-terminal">
          <p>&gt; FIM DE DOCUMENTO | CLASSIFICAÇÃO: {classification || "NIVEL ALFA"}</p>
          <p>&gt; ORDO_REALITAS | ACESSO RESTRITO</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
