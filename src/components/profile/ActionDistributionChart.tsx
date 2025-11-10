import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ActionData {
  name: string;
  value: number;
  color: string;
}

interface ActionDistributionChartProps {
  data: ActionData[];
}

export const ActionDistributionChart = ({ data }: ActionDistributionChartProps) => {
  const COLORS = [
    "hsl(var(--primary))",
    "hsl(var(--accent))",
    "hsl(220, 90%, 60%)",
    "hsl(280, 90%, 60%)",
    "hsl(340, 90%, 60%)",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribuição de Atividades</CardTitle>
        <CardDescription>
          Tipos de ações realizadas no sistema
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
