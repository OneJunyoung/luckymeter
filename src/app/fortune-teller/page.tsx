"use client";
import './fortune.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ScrollText, Fingerprint, MoonStar } from 'lucide-react';
import Prashnavali from '@/components/fortune-teller/Prashnavali';
import NadiReader from '@/components/fortune-teller/NadiReader';
import VedicInsight from '@/components/fortune-teller/VedicInsight';

type FortuneMethod = 'menu' | 'prashnavali' | 'nadi' | 'vedic';

export default function FortuneTellerPage() {
  const [activeMethod, setActiveMethod] = useState<FortuneMethod>('menu');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const method = params.get('method');
      if (method && ['prashnavali', 'nadi', 'vedic'].includes(method)) {
        setActiveMethod(method as FortuneMethod);
      }
    }
  }, []);

  return (
    <div className="fortune-wrapper">
      <div className="min-h-screen relative p-4 md:p-12 pl-4 pr-4 flex flex-col items-center pt-24">
        {/* Added pt-24 to step below the generic Navbar nicely */}
        <header className="text-center mb-8 z-10 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="title-glow" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Mystic India Fortune
            </h1>
            <p className="mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Discover your destiny through ancient, deep mythological fortune-telling methods that have guided seekers for millennia.
            </p>
            
            {activeMethod !== 'menu' && (
              <button 
                onClick={() => setActiveMethod('menu')}
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
              >
                &larr; Back to Methods
              </button>
            )}
          </motion.div>
        </header>

        <main className="w-full z-10 flex-1 flex justify-center">
          <AnimatePresence mode="wait">
            {activeMethod === 'menu' && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
              >
                <MethodCard
                  title="Ram Prashnavali"
                  icon={<ScrollText size={40} />}
                  description="Think of a question and click to receive a guiding verse."
                  onClick={() => setActiveMethod('prashnavali')}
                />
                <MethodCard
                  title="Nadi Astrology"
                  icon={<Fingerprint size={40} />}
                  description="Simulated thumbprint reading to reveal your past, present, and future."
                  onClick={() => setActiveMethod('nadi')}
                />
                <MethodCard
                  title="Vedic Insight"
                  icon={<MoonStar size={40} />}
                  description="Deep astrological daily insights based on your moon sign."
                  onClick={() => setActiveMethod('vedic')}
                />
              </motion.div>
            )}

            {activeMethod === 'prashnavali' && (
              <motion.div key="prashnavali" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Prashnavali />
              </motion.div>
            )}
            
            {activeMethod === 'nadi' && (
              <motion.div key="nadi" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <NadiReader />
              </motion.div>
            )}

            {activeMethod === 'vedic' && (
              <motion.div key="vedic" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <VedicInsight />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-12 text-center w-full z-10" style={{ color: 'var(--text-secondary)' }}>
          <p className="flex items-center justify-center gap-2">
            <Sparkles size={16} color="var(--accent-gold)" />
            Embrace the ancient wisdom
            <Sparkles size={16} color="var(--accent-gold)" />
          </p>
        </footer>
      </div>
    </div>
  );
}

function MethodCard({ title, icon, description, onClick }: { title: string, icon: React.ReactNode, description: string, onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 10px 40px rgba(212, 175, 55, 0.2)' }}
      className="fortune-glass-card flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      <div style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{description}</p>
      
      <div 
        className="absolute inset-0 z-[-1]" 
        style={{ 
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }} 
      />
    </motion.div>
  );
}
