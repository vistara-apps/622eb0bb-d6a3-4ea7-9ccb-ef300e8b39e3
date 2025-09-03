export interface TipTransaction {
  tipId: string;
  creatorAddress: string;
  tipperAddress: string;
  amount: string; // in wei
  transactionHash: string;
  timestamp: Date;
  channel: string;
}

export interface Creator {
  creatorAddress: string;
  displayName: string;
  profileUrl: string;
  totalTipsReceived?: string;
  tipCount?: number;
}

export interface FrameActionPayload {
  untrustedData: {
    fid: number;
    url: string;
    messageHash: string;
    timestamp: number;
    network: number;
    buttonIndex: number;
    castId: {
      fid: number;
      hash: string;
    };
  };
  trustedData: {
    messageBytes: string;
  };
}
