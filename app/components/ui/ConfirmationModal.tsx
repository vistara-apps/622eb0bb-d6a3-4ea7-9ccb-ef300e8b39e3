'use client';

import { ReactNode } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'success' | 'error';
  title: string;
  message: string;
  children?: ReactNode;
}

export function ConfirmationModal({
  isOpen,
  onClose,
  variant,
  title,
  message,
  children
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  const Icon = variant === 'success' ? CheckCircle : XCircle;
  const iconColor = variant === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative glass-effect rounded-lg p-6 w-full max-w-md animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <Icon className={`w-12 h-12 mx-auto mb-4 ${iconColor}`} />
          
          <h3 className="text-heading text-white mb-2">
            {title}
          </h3>
          
          <p className="text-white/80 mb-6">
            {message}
          </p>
          
          {children}
          
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-accent hover:bg-accent/80 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
