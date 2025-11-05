import { useState } from "react";

interface RedactedTextProps {
  children: string;
  revealOnHover?: boolean;
  className?: string;
}

export const RedactedText = ({ children, revealOnHover = true, className = "" }: RedactedTextProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  if (!revealOnHover) {
    return (
      <span className={`bg-foreground text-foreground select-none ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={`relative inline-block transition-all duration-300 cursor-help ${className}`}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <span
        className={`transition-all duration-300 ${
          isRevealed ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
      >
        {children}
      </span>
      <span
        className={`absolute inset-0 bg-foreground transition-all duration-300 ${
          isRevealed ? "opacity-0" : "opacity-100"
        }`}
        style={{ mixBlendMode: "multiply" }}
      >
        {children.replace(/./g, "█")}
      </span>
    </span>
  );
};