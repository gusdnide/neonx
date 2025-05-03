
import React from 'react';
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  isLoading,
  disabled,
  icon,
  ...props
}: ButtonProps) => {
  const baseClasses = "rounded-md font-medium transition-all duration-200 flex items-center justify-center gap-2";
  
  const variantClasses = {
    primary: "bg-neonx-green text-neonx-dark hover:shadow-neon-green",
    secondary: "bg-neonx-gray text-white hover:bg-opacity-80",
    danger: "bg-neonx-pink text-white hover:shadow-neon-pink",
    outline: "bg-transparent border border-neonx-gray text-white hover:bg-neonx-gray hover:bg-opacity-20",
    ghost: "bg-transparent text-white hover:bg-neonx-gray hover:bg-opacity-20"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const disabledClasses = "opacity-50 cursor-not-allowed";
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        (disabled || isLoading) && disabledClasses,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="h-4 w-4 border-2 border-t-transparent rounded-full animate-loading-spin" />
      )}
      {!isLoading && icon}
      {children}
    </button>
  );
};

export default Button;
