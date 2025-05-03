
import React from 'react';
import { cn } from "@/lib/utils";

type InputProps = {
  className?: string;
  icon?: React.ReactNode;
  error?: string;
  loading?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, loading, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neonx-light-gray">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-neonx-card bg-opacity-70 border border-neonx-gray rounded-md py-2 px-3 text-white placeholder-neonx-light-gray focus:outline-none focus:ring-2 focus:ring-neonx-green transition-all duration-200",
            icon && "pl-10",
            error && "border-neonx-pink focus:ring-neonx-pink",
            loading && "pr-10",
            className
          )}
          {...props}
        />
        {loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="h-4 w-4 border-2 border-neonx-light-gray border-t-transparent rounded-full animate-loading-spin" />
          </div>
        )}
        {error && (
          <p className="mt-1 text-xs text-neonx-pink">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
