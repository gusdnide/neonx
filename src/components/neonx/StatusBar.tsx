
import React from 'react';
import { cn } from "@/lib/utils";

type StatusBarProps = {
  items: Array<{
    id: string;
    content: React.ReactNode;
    status?: 'online' | 'offline' | 'warning' | 'error' | 'loading';
  }>;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const StatusBar = ({ items, className, ...props }: StatusBarProps) => {
  const statusColors = {
    online: "bg-neonx-green",
    offline: "bg-neonx-light-gray",
    warning: "bg-neonx-yellow",
    error: "bg-neonx-pink",
    loading: "bg-neonx-blue animate-pulse"
  };

  return (
    <div 
      className={cn(
        "bg-neonx-dark bg-opacity-80 backdrop-blur-sm px-4 py-2 border-t border-neonx-gray flex items-center justify-between",
        className
      )} 
      {...props}
    >
      {items.map(item => (
        <div key={item.id} className="flex items-center space-x-2">
          {item.status && (
            <div className={cn("h-2 w-2 rounded-full", statusColors[item.status])} />
          )}
          <span className="text-sm text-white">{item.content}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;
