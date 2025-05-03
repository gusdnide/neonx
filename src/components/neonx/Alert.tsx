
import React from 'react';
import { cn } from "@/lib/utils";
import { X } from 'lucide-react';

type AlertProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'info' | 'warning' | 'success' | 'danger';
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Alert = ({
  title,
  children,
  className,
  variant = 'info',
  dismissible = false,
  onDismiss,
  icon,
  ...props
}: AlertProps) => {
  const baseClasses = "p-4 rounded-md border relative";
  
  const variantClasses = {
    info: "bg-neonx-blue bg-opacity-10 border-neonx-blue text-neonx-blue",
    warning: "bg-neonx-yellow bg-opacity-10 border-neonx-yellow text-neonx-yellow",
    success: "bg-neonx-green bg-opacity-10 border-neonx-green text-neonx-green",
    danger: "bg-neonx-pink bg-opacity-10 border-neonx-pink text-neonx-pink"
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {dismissible && (
        <button
          onClick={onDismiss}
          className="absolute right-2 top-2 text-current opacity-70 hover:opacity-100"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      )}
      <div className="flex gap-3">
        {icon && <div className="flex-shrink-0 mt-0.5">{icon}</div>}
        <div>
          {title && <div className="font-medium mb-1">{title}</div>}
          <div className="text-sm opacity-90">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
