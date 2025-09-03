'use client';

import { Loader2, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

interface TransactionStatusProps {
  status: 'pending' | 'confirmed' | 'failed';
  hash?: string;
  error?: string;
  variant?: 'pending' | 'confirmed' | 'failed';
}

export function TransactionStatus({
  status,
  hash,
  error,
  variant = status
}: TransactionStatusProps) {
  const getStatusConfig = () => {
    switch (variant) {
      case 'pending':
        return {
          icon: Loader2,
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-400/10',
          borderColor: 'border-yellow-400/20',
          text: 'Transaction Pending...',
          animate: true
        };
      case 'confirmed':
        return {
          icon: CheckCircle,
          color: 'text-green-400',
          bgColor: 'bg-green-400/10',
          borderColor: 'border-green-400/20',
          text: 'Transaction Confirmed',
          animate: false
        };
      case 'failed':
        return {
          icon: XCircle,
          color: 'text-red-400',
          bgColor: 'bg-red-400/10',
          borderColor: 'border-red-400/20',
          text: 'Transaction Failed',
          animate: false
        };
      default:
        return {
          icon: Loader2,
          color: 'text-gray-400',
          bgColor: 'bg-gray-400/10',
          borderColor: 'border-gray-400/20',
          text: 'Processing...',
          animate: true
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor}`}>
      <div className="flex items-center gap-3">
        <Icon 
          className={`w-5 h-5 ${config.color} ${config.animate ? 'animate-spin' : ''}`} 
        />
        <div className="flex-1">
          <div className={`font-medium ${config.color}`}>
            {config.text}
          </div>
          
          {hash && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-white/60 text-sm font-mono">
                {hash.slice(0, 10)}...{hash.slice(-8)}
              </span>
              <a
                href={`https://basescan.org/tx/${hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
          
          {error && (
            <div className="text-red-400 text-sm mt-1">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
