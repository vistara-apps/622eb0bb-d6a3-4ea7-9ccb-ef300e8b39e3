'use client';

import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonPrimaryProps {
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: 'default' | 'loading';
}

export function ButtonPrimary({
  children,
  onClick,
  loading = false,
  disabled = false,
  className = '',
  variant = 'default'
}: ButtonPrimaryProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative px-6 py-3 rounded-lg font-medium transition-all duration-150
        bg-accent hover:bg-accent/80 text-white
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-accent/50
        active:scale-95
        ${className}
      `}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      )}
      <span className={loading ? 'opacity-0' : ''}>
        {children}
      </span>
    </button>
  );
}
