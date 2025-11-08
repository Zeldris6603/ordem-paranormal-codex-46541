import { useEffect, useState } from "react";
import { useEasterEggs } from "@/hooks/useEasterEggs";
import { EasterEggDialog } from "./EasterEggDialog";
import { useToast } from "@/hooks/use-toast";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export const KonamiCode = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [eggData, setEggData] = useState<any>(null);
  const { discoverEgg } = useEasterEggs();
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const expectedKey = KONAMI_CODE[currentIndex].toLowerCase();

      if (key === expectedKey) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);

        if (nextIndex === KONAMI_CODE.length) {
          activateKonamiCode();
          setCurrentIndex(0);
        }
      } else {
        setCurrentIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const activateKonamiCode = async () => {
    const egg = await discoverEgg("konami_code");
    if (egg) {
      setEggData(egg);
      setShowDialog(true);
      toast({
        title: "🎮 CÓDIGO SECRETO ATIVADO!",
        description: "Segredo da Ordo revelado...",
      });
    } else {
      toast({
        title: "🎮 Código Konami ativado!",
        description: "Mas você já descobriu este segredo...",
      });
    }
  };

  return (
    <>
      {eggData && (
        <EasterEggDialog
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          title={eggData.title}
          description={eggData.description}
          secret={eggData.secret}
        />
      )}
    </>
  );
};
