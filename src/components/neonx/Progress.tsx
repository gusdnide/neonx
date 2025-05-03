
import React from 'react';
import { cn } from "@/lib/utils";

type ProgressProps = {
  value: number;
  max?: number;
  className?: string;
  variant?: 'default' | 'danger' | 'success' | 'warning' | 'info';
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Progress = ({ 
  value, 
  max = 100, 
  className, 
  variant = 'default',
  showValue = false,
  size = 'md',
  glowing = false,
  ...props 
}: ProgressProps) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const baseClasses = "w-full bg-neonx-gray rounded-full overflow-hidden";
  
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3"
  };
  
  const variantClasses = {
    default: "bg-gradient-to-r from-neonx-green to-neonx-blue",
    success: "bg-neonx-green",
    danger: "bg-neonx-pink",
    warning: "bg-neonx-yellow",
    info: "bg-neonx-blue"
  };

  const glowClasses = glowing ? "shadow-neon-green" : "";
  
  return (
    <div className="w-full">
      <div 
        className={cn(
          baseClasses, 
          sizeClasses[size],
          className
        )} 
        {...props}
      >
        <div 
          className={cn(
            "h-full transition-all duration-300",
            variantClasses[variant],
            glowClasses
          )} 
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <div className="mt-1 text-xs text-right text-neonx-light-gray">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default Progress;
