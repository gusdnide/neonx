
import React from 'react';
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'terminal' | 'outlined';
  glowing?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ 
  children, 
  className, 
  variant = 'default',
  glowing = false,
  ...props 
}: CardProps) => {
  const baseClasses = "rounded-lg p-4 transition-all duration-300";
  
  const variantClasses = {
    default: "bg-neonx-card bg-opacity-70 backdrop-filter backdrop-blur-md border border-neonx-gray border-opacity-50",
    glass: "bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-10",
    terminal: "bg-neonx-dark font-mono text-neonx-green border border-neonx-gray",
    outlined: "bg-transparent border border-neonx-gray"
  };
  
  const glowClasses = glowing ? "shadow-lg hover:shadow-neon-green" : "";
  
  return (
    <div 
      className={cn(
        baseClasses, 
        variantClasses[variant],
        glowClasses,
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
