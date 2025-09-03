import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Like2Tip - Tip creators directly on Likes with Base',
  description: 'A Base MiniApp that allows users to tip creators on their liked content within Farcaster.',
  openGraph: {
    title: 'Like2Tip',
    description: 'Tip creators directly on Likes with Base',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="gradient-bg">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
