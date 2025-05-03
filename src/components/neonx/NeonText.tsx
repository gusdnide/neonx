
import React from 'react';
import { cn } from "@/lib/utils";

type NeonTextProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'green' | 'pink' | 'blue' | 'yellow' | 'gradient';
  as?: keyof JSX.IntrinsicElements;
  glowing?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const NeonText = ({ 
  children, 
  className, 
  color = 'green',
  as: Component = 'span',
  glowing = true,
  ...props 
}: NeonTextProps) => {
  const colorClasses = {
    green: "text-neonx-green",
    pink: "text-neonx-pink",
    blue: "text-neonx-blue",
    yellow: "text-neonx-yellow",
    gradient: "bg-gradient-to-r from-neonx-green to-neonx-blue bg-clip-text text-transparent"
  };
  
  const glowingClasses = {
    green: glowing ? "text-shadow-neon-green" : "",
    pink: glowing ? "text-shadow-neon-pink" : "",
    blue: glowing ? "text-shadow-neon-blue" : "",
    yellow: glowing ? "text-shadow-neon-yellow" : "",
    gradient: ""
  };
  
  return (
    <Component
      className={cn(
        colorClasses[color],
        glowingClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const createTextShadow = (color: string, intensity: number = 1) => {
  return `
    @layer utilities {
      .text-shadow-${color} {
        text-shadow: 0 0 ${5 * intensity}px ${color}, 0 0 ${10 * intensity}px ${color};
      }
    }
  `;
};

export default NeonText;
