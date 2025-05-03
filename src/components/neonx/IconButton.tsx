
import React from 'react';
import { cn } from "@/lib/utils";

type IconButtonProps = {
  icon: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  tooltip?: string;
  isLoading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({
  icon,
  className,
  variant = 'primary',
  size = 'md',
  tooltip,
  isLoading,
  disabled,
  ...props
}: IconButtonProps) => {
  const baseClasses = "rounded-full flex items-center justify-center transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-neonx-green text-neonx-dark hover:shadow-neon-green",
    secondary: "bg-neonx-gray text-white hover:bg-opacity-80",
    danger: "bg-neonx-pink text-white hover:shadow-neon-pink",
    outline: "bg-transparent border border-neonx-gray text-white hover:bg-neonx-gray hover:bg-opacity-20",
    ghost: "bg-transparent text-white hover:bg-neonx-gray hover:bg-opacity-20"
  };
  
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
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
      title={tooltip}
      aria-label={tooltip}
      {...props}
    >
      {isLoading ? (
        <div className="h-4 w-4 border-2 border-t-transparent rounded-full animate-loading-spin" />
      ) : (
        icon
      )}
    </button>
  );
};

export default IconButton;
