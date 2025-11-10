import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, FileText, Lock, Calendar } from "lucide-react";

interface ProgressData {
  label: string;
  value: number;
  max: number;
  icon: React.ReactNode;
  color: string;
}

interface ProgressChartProps {
  easterEggsProgress: number;
  filesAccessedProgress: number;
  daysActiveProgress: number;
  themeColor: string;
}

export const ProgressChart = ({ 
  easterEggsProgress, 
  filesAccessedProgress, 
  daysActiveProgress,
  themeColor 
}: ProgressChartProps) => {
  const progressItems: ProgressData[] = [
    {
      label: "Segredos Descobertos",
      value: easterEggsProgress,
      max: 100,
      icon: <Lock className="h-4 w-4" />,
      color: "hsl(var(--primary))"
    },
    {
      label: "Arquivos Explorados",
      value: Math.min(filesAccessedProgress, 100),
      max: 100,
      icon: <FileText className="h-4 w-4" />,
      color: themeColor
    },
    {
      label: "Dias de Atividade",
      value: Math.min(daysActiveProgress, 100),
      max: 100,
      icon: <Calendar className="h-4 w-4" />,
      color: "hsl(var(--accent))"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Progresso do Agente
        </CardTitle>
        <CardDescription>
          Metas e objetivos alcançados
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {progressItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {item.value}%
              </span>
            </div>
            <Progress 
              value={item.value} 
              className="h-2"
              style={{
                // @ts-ignore
                "--progress-background": item.color
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
