"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VERSES = [
  "The path is fraught with illusions, but your current focus will burn them away. Proceed with courage.",
  "Patience is not inactive; it is concentrated strength. Wait for the auspicious moment before deciding.",
  "A hidden truth will soon reveal itself. Do not force the locks, let the key find you.",
  "Your karma from past endeavors is ripening. A sudden, positive shift in fortune is imminent.",
  "The bonds you cherish are being tested. Speak truth, but wrap it in compassion to preserve harmony.",
  "Like the river finds the ocean, your seeking will reach its end. Surrender the need to control every ripple.",
  "A period of isolation is needed. Step back from the noise of the world to hear the whispers of the divine.",
  "Action without attachment is the highest offering. Do your duty without obsessing over the reward.",
  "Darkness is merely the canvas upon which the stars are drawn. This difficult phase is shaping your ultimate victory."
];

// Generate a random 5x5 grid of mystical characters
const SYMBOLS = ['ॐ', '🪷', '☀️', '🌙', '🔱', '🪔', '☸️', '🐚', '👁️', '✨'];

export default function Prashnavali() {
  const [selectedVerse, setSelectedVerse] = useState<string | null>(null);
  const [hasAsked, setHasAsked] = useState(false);

  // Generate grid cells once
  const [grid] = useState(() => 
    Array.from({ length: 25 }).map(() => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)])
  );

  const handleSelect = () => {
    if (selectedVerse) return;
    const randomVerse = VERSES[Math.floor(Math.random() * VERSES.length)];
    setSelectedVerse(randomVerse);
  };

  const reset = () => {
    setSelectedVerse(null);
    setHasAsked(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 style={{ fontSize: '2.5rem' }}>Ram Prashnavali</h2>
      <p className="text-center mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        An ancient oracle practice. Clear your mind, hold a specific question in your heart, and select a symbol from the mystical grid to receive divine guidance.
      </p>

      <AnimatePresence mode="wait">
        {!hasAsked && !selectedVerse ? (
          <motion.div 
            key="ask"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fortune-glass-card flex flex-col items-center"
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Are you ready to seek the oracle?
            </h3>
            <button onClick={() => setHasAsked(true)}>I Have My Question</button>
          </motion.div>
        ) : !selectedVerse ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-5 gap-2 md:gap-4 p-4 fortune-glass-card"
          >
            {grid.map((symbol, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSelect}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl border border-[var(--card-border)] rounded-sm cursor-pointer"
                style={{ 
                  background: 'var(--bg-secondary)', 
                  color: 'var(--accent-gold)',
                  fontFamily: 'sans-serif'
                }}
              >
                {symbol}
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fortune-glass-card text-center max-w-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--accent-gold), transparent)', opacity: 0.1 }} />
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              The Oracle Speaks
            </h3>
            <blockquote style={{ 
              fontSize: '1.25rem', 
              fontStyle: 'italic', 
              lineHeight: 1.6,
              margin: '0 0 2rem 0',
              padding: '0 1rem',
              borderLeft: '4px solid var(--accent-gold)'
            }}>
              "{selectedVerse}"
            </blockquote>
            <button onClick={reset}>Seek Again</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
