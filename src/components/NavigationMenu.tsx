import { FileText, Skull, Eye, Box, ClipboardList, Clock, Lock } from "lucide-react";
import { Card } from "./ui/card";

export const NavigationMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { id: "synopsis", label: "Sinopse", icon: FileText },
    { id: "agents", label: "Agentes", icon: Skull },
    { id: "archive", label: "Arquivo", icon: Box },
    { id: "classified-files", label: "Base de Dados", icon: Eye },
    { id: "secrets", label: "Segredos", icon: Lock },
    { id: "timeline", label: "Linha do Tempo", icon: Clock },
  ];

  return (
    <Card className="fixed left-4 top-32 z-40 bg-card/95 backdrop-blur-md border-2 border-primary/30 p-4 hidden lg:block">
      <div className="space-y-2">
        <div className="mb-4 pb-3 border-b border-primary/30">
          <p className="text-xs text-primary font-terminal">&gt; NAVEGAÇÃO</p>
        </div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded transition-all duration-300 font-courier group"
          >
            <item.icon className="h-4 w-4 group-hover:text-primary" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};