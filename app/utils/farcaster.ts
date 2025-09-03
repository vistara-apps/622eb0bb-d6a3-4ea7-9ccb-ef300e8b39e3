// Utility functions for Farcaster integration

export interface FarcasterUser {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  verifications: string[];
}

export async function getFarcasterUser(fid: number): Promise<FarcasterUser | null> {
  try {
    // In a real implementation, you would call the Farcaster Hubs API
    // For now, return mock data
    return {
      fid,
      username: `user${fid}`,
      displayName: `Creator ${fid}`,
      pfpUrl: '',
      verifications: [],
    };
  } catch (error) {
    console.error('Error fetching Farcaster user:', error);
    return null;
  }
}

export function getCreatorAddressFromFid(fid: number): string | null {
  // In a real implementation, this would:
  // 1. Look up the user's verified addresses from Farcaster
  // 2. Return the Base wallet address if available
  // 3. Handle cases where no Base address is found
  
  // Mock implementation for demo
  return `0x${fid.toString(16).padStart(40, '0')}`;
}

export function formatAddress(address: string): string {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatEth(wei: string): string {
  // Simple conversion - in production use proper Wei conversion
  const eth = parseFloat(wei) / 1e18;
  return eth.toFixed(4);
}
