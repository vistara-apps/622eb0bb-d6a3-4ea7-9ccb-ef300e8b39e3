'use client';

import { useState } from 'react';
import { ButtonPrimary } from './ui/ButtonPrimary';
import { TipInput } from './ui/TipInput';
import { TransactionStatus } from './ui/TransactionStatus';
import { ConfirmationModal } from './ui/ConfirmationModal';
import { useTipping } from '../hooks/useTipping';

export default function TipNowCard() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('0.001');
  const [showConfirm, setShowConfirm] = useState(false);
  
  const { sendTip, transactionStatus, isLoading, error } = useTipping();

  const handleTipSubmit = async () => {
    if (!recipient || !amount) return;
    
    try {
      await sendTip({
        recipientAddress: recipient,
        amount: parseFloat(amount),
      });
      setShowConfirm(true);
    } catch (err) {
      console.error('Tip failed:', err);
    }
  };

  return (
    <>
      <div className="glass-effect rounded-lg p-6 animate-scale-in">
        <h3 className="text-heading text-white mb-6">Tip Now</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-white/80 mb-2">
              Creator Address or ENS
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="0x... or creator.eth"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>
          
          <TipInput
            value={amount}
            onChange={setAmount}
            label="Tip Amount (ETH)"
          />
          
          <ButtonPrimary
            onClick={handleTipSubmit}
            loading={isLoading}
            disabled={!recipient || !amount || isLoading}
            className="w-full"
          >
            {isLoading ? 'Processing...' : 'Tip Now'}
          </ButtonPrimary>
          
          {transactionStatus && (
            <TransactionStatus
              status={transactionStatus.status}
              hash={transactionStatus.hash}
              error={error || undefined}
            />
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        variant={transactionStatus?.status === 'confirmed' ? 'success' : 'error'}
        title={transactionStatus?.status === 'confirmed' ? 'Tip Sent!' : 'Transaction Failed'}
        message={
          transactionStatus?.status === 'confirmed'
            ? `Successfully sent ${amount} ETH to the creator!`
            : error || 'Something went wrong with your transaction.'
        }
      />
    </>
  );
}
