import { Eye } from "lucide-react";

interface ClassifiedBannerProps {
  level?: string;
  message?: string;
}

export const ClassifiedBanner = ({ 
  level = "NIVEL ALFA", 
  message = "O que foi amaldiçoado jamais será esquecido" 
}: ClassifiedBannerProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-destructive/20 via-primary/20 to-destructive/20 border-y-2 border-primary/50 py-3">
      {/* Pattern de fundo */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          currentColor 10px,
          currentColor 20px
        )`
      }}></div>

      <div className="relative flex items-center justify-center gap-4 px-4">
        <Eye className="h-5 w-5 text-primary animate-pulse" />
        <span className="font-courier text-sm md:text-base text-primary font-bold tracking-widest">
          {level}
        </span>
        <span className="hidden md:inline text-muted-foreground font-typewriter italic">
          {message}
        </span>
        <Eye className="h-5 w-5 text-primary animate-pulse" />
      </div>
    </div>
  );
};