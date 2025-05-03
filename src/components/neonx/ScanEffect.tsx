
import React from 'react';
import { cn } from "@/lib/utils";

type ScanEffectProps = {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  color?: 'green' | 'pink' | 'blue' | 'yellow';
} & React.HTMLAttributes<HTMLDivElement>;

export const ScanEffect = ({ 
  children, 
  className, 
  active = true,
  color = 'green',
  ...props 
}: ScanEffectProps) => {
  const colorClasses = {
    green: "bg-neonx-green",
    pink: "bg-neonx-pink",
    blue: "bg-neonx-blue",
    yellow: "bg-neonx-yellow"
  };
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        className
      )} 
      {...props}
    >
      {children}
      {active && (
        <div className="absolute inset-0 pointer-events-none">
          <div className={cn(
            "absolute left-0 w-full h-[2px] bg-opacity-50 animate-scanning-line",
            colorClasses[color]
          )} />
        </div>
      )}
    </div>
  );
};

export default ScanEffect;
