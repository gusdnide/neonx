
import React from 'react';
import { cn } from "@/lib/utils";

type NeonTextProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  color?: 'green' | 'pink' | 'blue' | 'yellow' | 'gradient';
} & React.HTMLAttributes<HTMLElement>;

export const NeonText = ({ 
  children,
  as: Component = 'span', 
  className, 
  color = 'green',
  ...props 
}: NeonTextProps) => {
  
  const getTextClasses = () => {
    switch (color) {
      case 'green':
        return 'text-neonx-green drop-shadow-[0_0_3px_rgba(0,255,140,0.7)]';
      case 'pink':
        return 'text-neonx-pink drop-shadow-[0_0_3px_rgba(255,60,165,0.7)]';
      case 'blue':
        return 'text-neonx-blue drop-shadow-[0_0_3px_rgba(0,163,255,0.7)]';
      case 'yellow':
        return 'text-neonx-yellow drop-shadow-[0_0_3px_rgba(255,214,0,0.7)]';
      case 'gradient':
        return 'bg-gradient-to-r from-neonx-green to-neonx-blue bg-clip-text text-transparent';
      default:
        return 'text-neonx-green drop-shadow-[0_0_3px_rgba(0,255,140,0.7)]';
    }
  };

  return (
    <Component
      className={cn(
        getTextClasses(),
        className
      )} 
      {...props}
    >
      {children}
    </Component>
  );
};

export default NeonText;
