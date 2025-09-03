'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

interface TipActivity {
  id: string;
  date: string;
  amount: string;
  recipient: string;
  status: 'completed' | 'pending' | 'failed';
  txHash?: string;
}

export default function TipHistoryCard() {
  const [tipActivity, setTipActivity] = useState<TipActivity[]>([]);
  const [totalTipped, setTotalTipped] = useState('0.00');

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockData: TipActivity[] = [
      {
        id: '1',
        date: '2024-01-15',
        amount: '0.001',
        recipient: '0x742d...4f2a',
        status: 'completed',
        txHash: '0xabc123...'
      },
      {
        id: '2',
        date: '2024-01-14',
        amount: '0.002',
        recipient: '0x123a...8b9c',
        status: 'completed',
        txHash: '0xdef456...'
      },
      {
        id: '3',
        date: '2024-01-13',
        amount: '0.001',
        recipient: '0x456e...1d2f',
        status: 'pending'
      }
    ];
    
    setTipActivity(mockData);
    
    // Calculate total
    const total = mockData
      .filter(tip => tip.status === 'completed')
      .reduce((sum, tip) => sum + parseFloat(tip.amount), 0);
    setTotalTipped(total.toFixed(4));
  }, []);

  return (
    <div className="glass-effect rounded-lg p-6 animate-scale-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-heading text-white">Tip Activity</h3>
        <div className="flex items-center gap-2 text-white/80">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">Total: {totalTipped} ETH</span>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="h-32 bg-white/5 rounded-lg mb-6 p-4 flex items-center justify-center">
        <div className="w-full h-full relative">
          <svg className="w-full h-full" viewBox="0 0 300 100">
            <polyline
              points="0,80 50,60 100,40 150,50 200,30 250,45 300,25"
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
            />
            <circle cx="300" cy="25" r="3" fill="rgba(59, 130, 246, 0.8)" />
          </svg>
        </div>
      </div>

      {/* Activity list */}
      <div className="space-y-3">
        {tipActivity.slice(0, 3).map((tip) => (
          <div
            key={tip.id}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                tip.status === 'completed' ? 'bg-green-400' :
                tip.status === 'pending' ? 'bg-yellow-400' : 'bg-red-400'
              }`} />
              <div>
                <div className="text-white text-sm">
                  Tipped {tip.recipient}
                </div>
                <div className="text-white/60 text-xs">
                  {new Date(tip.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-sm">
                {tip.amount} ETH
              </span>
              {tip.txHash && (
                <ArrowUpRight className="w-4 h-4 text-white/60 hover:text-white cursor-pointer" />
              )}
            </div>
          </div>
        ))}
      </div>

      {tipActivity.length > 3 && (
        <button className="w-full mt-4 text-white/80 hover:text-white text-sm transition-colors">
          View All Activity
        </button>
      )}
    </div>
  );
}
