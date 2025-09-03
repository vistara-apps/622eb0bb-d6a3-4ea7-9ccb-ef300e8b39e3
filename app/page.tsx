'use client';

import { useState } from 'react';
import Header from './components/Header';
import TipNowCard from './components/TipNowCard';
import TipHistoryCard from './components/TipHistoryCard';
import Dashboard from './components/Dashboard';
import { Heart, TrendingUp, Users, Zap } from 'lucide-react';

export default function Home() {
  const [activeView, setActiveView] = useState<'home' | 'dashboard'>('home');

  return (
    <main className="min-h-screen">
      <Header />
      
      {activeView === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-display text-white mb-6 animate-fade-in">
                Like2Tip
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                A Base MiniApp that allows MiniApp users to creators
                <br />
                to tip creators on their liked content within Farcaster.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <div className="flex items-center gap-2 text-white/80">
                  <Heart className="w-5 h-5" />
                  <span>Like-to-Tip</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Zap className="w-5 h-5" />
                  <span>Base Integration</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <TrendingUp className="w-5 h-5" />
                  <span>Creator Support</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5" />
                  <span>Community</span>
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="container mx-auto px-4 pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TipNowCard />
                </div>
                <div className="space-y-6">
                  <Dashboard onViewDashboard={() => setActiveView('dashboard')} />
                </div>
              </div>
              
              <div className="mt-6">
                <TipHistoryCard />
              </div>
            </div>
          </section>
        </>
      ) : (
        <Dashboard onViewDashboard={() => setActiveView('home')} isFullView />
      )}
    </main>
  );
}
