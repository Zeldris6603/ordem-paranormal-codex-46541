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
  const styles = typeStyles[type];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className={`${styles.bg} border-2 ${styles.border} p-6 cursor-pointer hover:shadow-horror transition-all duration-500 hover:scale-105 group`}>
          <div className="flex items-start justify-between mb-3">
            <h3 className={`text-xl font-bold ${styles.text} group-hover:animate-pulse`}>{title}</h3>
            <Badge className={`${styles.bg} ${styles.text} ${styles.border}`}>
              {typeLabels[type]}
            </Badge>
          </div>
          {classification && (
            <Badge className="mb-3 bg-destructive/20 text-destructive border-destructive">
              {classification}
            </Badge>
          )}
          <p className="text-muted-foreground text-sm line-clamp-3">{preview}</p>
          <p className={`text-xs ${styles.text} mt-4 opacity-70 group-hover:opacity-100 transition-opacity`}>
            Clique para investigar...
          </p>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Badge className={`${styles.bg} ${styles.text} ${styles.border}`}>
              {typeLabels[type]}
            </Badge>
            {classification && (
              <Badge className="bg-destructive/20 text-destructive border-destructive">
                {classification}
              </Badge>
            )}
          </div>
          <DialogTitle className={`text-2xl ${styles.text}`}>{title}</DialogTitle>
        </DialogHeader>
        {imageUrl && (
          <div className="my-4 rounded-lg overflow-hidden border border-border">
            <img src={imageUrl} alt={title} className="w-full h-auto" />
          </div>
        )}
        <DialogDescription className="text-foreground prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
