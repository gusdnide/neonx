
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

type TerminalProps = {
  lines?: string[];
  className?: string;
  prefix?: string;
  autoplay?: boolean;
  typingSpeed?: number;
  blinkCursor?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Terminal = ({ 
  lines = [], 
  className, 
  prefix = "> ",
  autoplay = true,
  typingSpeed = 50,
  blinkCursor = true,
  ...props 
}: TerminalProps) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!autoplay || lines.length === 0) {
      setVisibleLines(lines);
      setIsComplete(true);
      return;
    }

    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => {
          const updatedLines = [...prev];
          if (updatedLines.length <= currentLineIndex) {
            updatedLines.push(currentLine.substring(0, currentCharIndex + 1));
          } else {
            updatedLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          }
          return updatedLines;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, typingSpeed * 10);
    }
  }, [autoplay, currentCharIndex, currentLineIndex, lines, typingSpeed]);

  return (
    <div
      className={cn(
        "bg-neonx-dark rounded-md border border-neonx-gray p-4 font-mono text-sm text-neonx-green overflow-auto max-h-96",
        className
      )}
      {...props}
    >
      {visibleLines.map((line, index) => (
        <div key={index} className="flex">
          <span className="text-neonx-light-gray mr-2">{prefix}</span>
          <span>{line}</span>
        </div>
      ))}
      {!isComplete && blinkCursor && (
        <span className="animate-blink">▋</span>
      )}
    </div>
  );
};

export default Terminal;
