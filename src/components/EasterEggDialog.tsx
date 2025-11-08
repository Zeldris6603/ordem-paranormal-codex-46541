import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Eye, Lock } from "lucide-react";

interface EasterEggDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  secret: string;
}

export const EasterEggDialog = ({
  isOpen,
  onClose,
  title,
  description,
  secret,
}: EasterEggDialogProps) => {
  const [isDecoding, setIsDecoding] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsDecoding(true);
      const timer = setTimeout(() => {
        setIsDecoding(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card/95 backdrop-blur border-primary/30 font-terminal">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            {isDecoding ? (
              <Lock className="w-5 h-5 text-accent animate-pulse" />
            ) : (
              <Eye className="w-5 h-5 text-primary" />
            )}
            <Badge className="bg-primary/20 text-primary border-primary">
              SEGREDO DESCOBERTO
            </Badge>
          </div>
          <DialogTitle className="text-2xl font-bold text-primary">
            {isDecoding ? "DECODIFICANDO..." : title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono-tech">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {isDecoding ? (
            <div className="space-y-2">
              <div className="h-4 bg-primary/10 rounded animate-pulse" />
              <div className="h-4 bg-primary/10 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-primary/10 rounded animate-pulse w-4/6" />
            </div>
          ) : (
            <div className="p-4 bg-accent/5 border border-accent/30 rounded">
              <p className="text-sm text-foreground leading-relaxed font-courier">
                {secret}
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 p-3 bg-destructive/5 border border-destructive/20 rounded">
          <p className="text-xs text-destructive font-terminal text-center">
            ⚠ ESTE CONHECIMENTO É ALTAMENTE CONFIDENCIAL
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
