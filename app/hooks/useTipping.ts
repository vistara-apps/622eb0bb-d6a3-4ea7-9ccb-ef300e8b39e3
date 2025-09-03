'use client';

import { useState } from 'react';
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

interface TipParams {
  recipientAddress: string;
  amount: number;
}

interface TransactionStatus {
  status: 'pending' | 'confirmed' | 'failed';
  hash?: string;
}

export function useTipping() {
  const { address } = useAccount();
  const [transactionStatus, setTransactionStatus] = useState<TransactionStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { sendTransaction, isPending: isTransactionPending } = useSendTransaction({
    mutation: {
      onSuccess: (hash) => {
        setTransactionStatus({ status: 'pending', hash });
        setError(null);
      },
      onError: (error) => {
        setTransactionStatus({ status: 'failed' });
        setError(error.message || 'Transaction failed');
      },
    },
  });

  const { isLoading: isReceiptLoading } = useWaitForTransactionReceipt({
    hash: transactionStatus?.hash as `0x${string}`,
    query: {
      enabled: !!transactionStatus?.hash && transactionStatus.status === 'pending',
    },
  });

  const sendTip = async ({ recipientAddress, amount }: TipParams) => {
    if (!address) {
      throw new Error('Wallet not connected');
    }

    if (!recipientAddress || amount <= 0) {
      throw new Error('Invalid recipient or amount');
    }

    try {
      setError(null);
      
      // Validate recipient address format (basic check)
      if (!recipientAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
        throw new Error('Invalid recipient address format');
      }

      sendTransaction({
        to: recipientAddress as `0x${string}`,
        value: parseEther(amount.toString()),
        gas: BigInt(21000), // Standard gas for ETH transfer
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      setTransactionStatus({ status: 'failed' });
      throw err;
    }
  };

  return {
    sendTip,
    transactionStatus,
    isLoading: isTransactionPending || isReceiptLoading,
    error,
    isConnected: !!address,
    address,
  };
}
