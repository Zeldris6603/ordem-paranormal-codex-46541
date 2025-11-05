import { useEffect, useState } from "react";

interface DecodingLoaderProps {
  text: string;
  onComplete?: () => void;
  delay?: number;
}

export const DecodingLoader = ({ text, onComplete, delay = 30 }: DecodingLoaderProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const glitchChars = "█▓▒░01";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        // Efeito de "decodificação"
        let iterations = 0;
        const decodeInterval = setInterval(() => {
          setDisplayText(
            text
              .split("")
              .map((char, index) => {
                if (index < currentIndex) {
                  return text[index];
                }
                if (index === currentIndex) {
                  return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                return "";
              })
              .join("")
          );

          iterations++;
          if (iterations > 3) {
            clearInterval(decodeInterval);
            setDisplayText(text.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          }
        }, 50);

        return () => clearInterval(decodeInterval);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return (
    <span className="font-terminal text-primary">
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  );
};