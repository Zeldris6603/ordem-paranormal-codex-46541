import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MasterCardProps {
  title: string;
  subtitle?: string;
  badge?: { label: string; variant?: "default" | "secondary" | "destructive" | "outline" };
  children: React.ReactNode;
  data?: any;
  onCopy?: (text: string) => void;
  onDownload?: (data: any, filename: string) => void;
}

export const MasterCard = ({
  title,
  subtitle,
  badge,
  children,
  data,
  onCopy,
  onDownload,
}: MasterCardProps) => {
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    if (onCopy) {
      onCopy(text);
    } else {
      navigator.clipboard.writeText(text);
      toast({
        title: "✓ Copiado",
        description: "Conteúdo copiado para área de transferência",
      });
    }
  };

  const handleDownload = () => {
    if (onDownload && data) {
      onDownload(data, `${title.toLowerCase().replace(/\s+/g, "-")}.json`);
    }
  };

  return (
    <Card className="bg-card/80 border-primary/30 p-6 hover:border-primary/50 transition">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          {badge && (
            <Badge variant={badge.variant || "default"}>{badge.label}</Badge>
          )}
        </div>
      </div>

      <div className="mb-4">{children}</div>

      {(onCopy || onDownload) && (
        <div className="flex gap-2 pt-4 border-t border-primary/20">
          {onCopy && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleCopy(data || "")}
              className="flex-1"
            >
              <Copy size={14} className="mr-1" /> Copiar
            </Button>
          )}
          {onDownload && data && (
            <Button
              size="sm"
              variant="ghost"
              onClick={handleDownload}
              className="flex-1"
            >
              <Download size={14} className="mr-1" /> Baixar
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};

export default MasterCard;
