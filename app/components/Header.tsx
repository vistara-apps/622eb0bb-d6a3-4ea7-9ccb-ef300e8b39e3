'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Identity } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';

export default function Header() {
  const { address } = useAccount();

  return (
    <header className="w-full py-4 px-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-bold text-white">Like2Tip</h2>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Popular
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Farcaster App
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-white/80 hover:text-white transition-colors">
            Help
          </button>
          {address ? (
            <Identity address={address} />
          ) : (
            <ConnectWallet className="bg-white/10 hover:bg-white/20 text-white border border-white/20" />
          )}
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-colors">
            Share →
          </button>
        </div>
      </div>
    </header>
  );
}
