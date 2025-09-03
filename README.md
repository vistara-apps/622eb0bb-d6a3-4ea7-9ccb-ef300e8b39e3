# Like2Tip - Base MiniApp

A Base MiniApp that allows users to tip creators directly on their liked content within Farcaster.

## Features

- **Like-to-Tip Conversion**: Users can click a button on liked posts to instantly tip creators
- **Seamless Base Integration**: Uses Base Wallet and Farcaster Frames for in-frame tipping
- **Creator Dashboard**: View tipping history and supporter analytics
- **Real-time Transaction Status**: Track tip transactions in real-time

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Blockchain**: Base Network, Wagmi, Viem
- **OnchainKit**: Coinbase OnchainKit for wallet integration
- **Frame Integration**: Farcaster Frame SDK

## Getting Started

1. **Install Dependencies**:
```bash
npm install
```

2. **Environment Setup**:
Copy `.env.local` and add your configuration:
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
- `NEXT_PUBLIC_BASE_URL`: Your app's base URL

3. **Run Development Server**:
```bash
npm run dev
```

4. **Open Browser**:
Navigate to `http://localhost:3000`

## Core Components

### Tipping Flow
1. User sees a Farcaster post they like
2. Like2Tip frame appears below the post
3. User clicks "Tip Creator" button
4. Base Wallet prompts for transaction confirmation
5. Transaction is submitted to Base network
6. Success/failure feedback shown

### Frame Actions
The app supports Farcaster Frame actions with:
- **Tip Creator**: Initiates a tip transaction
- **Post URL**: `/api/tip` for processing tips
- **Confirmation URL**: `/api/tip-confirm` for transaction verification

### Wallet Integration
- Uses Coinbase OnchainKit for seamless Base wallet integration
- Supports ENS resolution for creator addresses
- Real-time transaction status tracking

## Data Models

### TipTransaction
```typescript
{
  tipId: string;
  creatorAddress: string;
  tipperAddress: string;
  amount: string; // in wei
  transactionHash: string;
  timestamp: Date;
  channel: string;
}
```

### Creator
```typescript
{
  creatorAddress: string;
  displayName: string;
  profileUrl: string;
  totalTipsReceived?: string;
  tipCount?: number;
}
```

## API Endpoints

- `POST /api/tip` - Process tip frame actions
- `POST /api/tip-confirm` - Handle transaction confirmations
- `GET /frames/tip-success` - Success frame after tipping

## Design System

The app uses a cohesive design system with:
- **Colors**: Purple gradient background with glass morphism effects
- **Typography**: Clean, modern font hierarchy
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth transitions and micro-interactions

## Deployment

The app is ready for deployment on Vercel or similar platforms that support Next.js applications.

## License

MIT License
