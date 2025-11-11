import { FileText, Skull, Eye, Box, ClipboardList, Clock, Lock, UserCircle, Home } from "lucide-react";
import { Card } from "./ui/card";
import { useNavigate, useLocation } from "react-router-dom";

export const NavigationMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isOnHomePage = location.pathname === "/";
  
  const scrollToSection = (id: string) => {
    // Se não estiver na página inicial, navegar primeiro para ela
    if (!isOnHomePage) {
      navigate("/");
      // Aguardar a navegação e então fazer scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
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

  const navigationItems = [
    { id: "profile", label: "Perfil", icon: UserCircle, isRoute: true },
  ];

  return (
    <Card className="fixed left-4 top-32 z-40 bg-card/95 backdrop-blur-md border-2 border-primary/30 p-4 hidden lg:block">
      <div className="space-y-2">
        <div className="mb-4 pb-3 border-b border-primary/30">
          <p className="text-xs text-primary font-terminal">&gt; NAVEGAÇÃO</p>
        </div>
        
        {!isOnHomePage && (
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-primary hover:bg-primary/20 rounded transition-all duration-300 font-courier group mb-3 border border-primary/30"
          >
            <Home className="h-4 w-4" />
            <span>Voltar ao Início</span>
          </button>
        )}
        
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
        
        <div className="mt-4 pt-3 border-t border-primary/30">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/${item.id}`)}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded transition-all duration-300 font-courier group"
            >
              <item.icon className="h-4 w-4 group-hover:text-primary" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};