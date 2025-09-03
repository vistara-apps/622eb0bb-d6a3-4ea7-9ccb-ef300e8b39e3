'use client';

import { Wallet, CheckCircle } from 'lucide-react';
import { useAccount } from 'wagmi';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

interface DashboardProps {
  onViewDashboard: () => void;
  isFullView?: boolean;
}

export default function Dashboard({ onViewDashboard, isFullView = false }: DashboardProps) {
  const { address, isConnected } = useAccount();

  if (isFullView) {
    return (
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-display text-white mb-8 text-center">
            Creator Dashboard
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-heading text-white mb-4">Total Tips Received</h3>
              <div className="text-3xl font-bold text-white">0.0045 ETH</div>
              <div className="text-white/60 text-sm mt-2">≈ $12.34 USD</div>
            </div>
            
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-heading text-white mb-4">Total Supporters</h3>
              <div className="text-3xl font-bold text-white">7</div>
              <div className="text-white/60 text-sm mt-2">Unique tippers</div>
            </div>
            
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-heading text-white mb-4">This Week</h3>
              <div className="text-3xl font-bold text-white">0.001 ETH</div>
              <div className="text-white/60 text-sm mt-2">+20% from last week</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="glass-effect rounded-lg p-6 animate-scale-in">
      <h3 className="text-heading text-white mb-4">Tip Now</h3>
      
      <div className="space-y-4">
        <div className="text-sm text-white/80">
          Wallet address transaction
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="w-4 h-4 text-white/60" />
          <span className="text-white/80 text-sm">Tip Tokens</span>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="text-white text-sm mb-1">Wallet Address</div>
            {isConnected && address ? (
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-xs font-mono">Connected</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-orange-400 text-xs">Not Connected</span>
              </div>
            )}
          </div>
        </div>
        
        {!isConnected && (
          <ConnectWallet className="w-full bg-accent hover:bg-accent/80 text-white" />
        )}
        
        <div className="text-xs text-white/60 mt-4 space-y-1">
          <div>• Focus into The Features on</div>
          <div className="pl-2">Base Real CA team for 3 boosters</div>
          <div>• £0.8/ pair via Game & emotions</div>
          <div className="pl-2">Free personal X create in the Ray</div>
          <div className="pl-2">owner Collaborations and IT boosters.</div>
        </div>
      </div>
    </div>
  );
}
