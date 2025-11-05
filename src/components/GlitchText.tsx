import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchChance?: number;
}

export const GlitchText = ({ text, className = "", glitchChance = 0.02 }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < glitchChance) {
        setIsGlitching(true);
        const glitchChars = "█▓▒░╬╣║╗╝╜╛┐└┴┬├─┼╚╔╩╦╠═╬АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬ";
        
        setDisplayText(
          text
            .split("")
            .map((char) => 
              Math.random() > 0.7 
                ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
                : char
            )
            .join("")
        );

        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, 50 + Math.random() * 100);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [text, glitchChance]);

  return (
    <span className={`${className} ${isGlitching ? 'text-accent' : ''} transition-colors duration-75`}>
      {displayText}
    </span>
  );
};