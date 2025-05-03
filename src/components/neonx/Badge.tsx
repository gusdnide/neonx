
import React from 'react';
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'default';
  pulse?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Badge = ({ 
  children, 
  className, 
  variant = 'default',
  pulse = false,
  ...props 
}: BadgeProps) => {
  const baseClasses = "inline-flex items-center justify-center text-xs font-medium px-2.5 py-0.5 rounded-full";
  
  const variantClasses = {
    default: "bg-neonx-gray text-white",
    success: "bg-neonx-green text-black",
    warning: "bg-neonx-yellow text-black",
    danger: "bg-neonx-pink text-white",
    info: "bg-neonx-blue text-white"
  };
  
  const pulseClasses = pulse ? "animate-badge-pulse" : "";
  
  return (
    <span 
      className={cn(
        baseClasses, 
        variantClasses[variant],
        pulseClasses,
        className
      )} 
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
