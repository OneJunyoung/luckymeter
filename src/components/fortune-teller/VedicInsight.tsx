"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RASHIS = [
  { id: 'mesha', name: 'Mesha', en: 'Aries', element: 'Fire', lord: 'Mars' },
  { id: 'vrishabha', name: 'Vrishabha', en: 'Taurus', element: 'Earth', lord: 'Venus' },
  { id: 'mithuna', name: 'Mithuna', en: 'Gemini', element: 'Air', lord: 'Mercury' },
  { id: 'karka', name: 'Karka', en: 'Cancer', element: 'Water', lord: 'Moon' },
  { id: 'simha', name: 'Simha', en: 'Leo', element: 'Fire', lord: 'Sun' },
  { id: 'kanya', name: 'Kanya', en: 'Virgo', element: 'Earth', lord: 'Mercury' },
  { id: 'tula', name: 'Tula', en: 'Libra', element: 'Air', lord: 'Venus' },
  { id: 'vrischika', name: 'Vrischika', en: 'Scorpio', element: 'Water', lord: 'Mars' },
  { id: 'dhanu', name: 'Dhanu', en: 'Sagittarius', element: 'Fire', lord: 'Jupiter' },
  { id: 'makara', name: 'Makara', en: 'Capricorn', element: 'Earth', lord: 'Saturn' },
  { id: 'kumbha', name: 'Kumbha', en: 'Aquarius', element: 'Air', lord: 'Saturn' },
  { id: 'meena', name: 'Meena', en: 'Pisces', element: 'Water', lord: 'Jupiter' }
];

export default function VedicInsight() {
  const [selectedRashi, setSelectedRashi] = useState<typeof RASHIS[0] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (rashi: typeof RASHIS[0]) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRashi(rashi);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 style={{ fontSize: '2.5rem' }}>Jyotish (Vedic Insight)</h2>
      <p className="text-center mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Vedic astrology focuses on your Rashi (Moon sign) rather than your Sun sign. It illuminates the mind and emotional nature, directly reflecting the karmic blueprint.
      </p>

      <AnimatePresence mode="wait">
        {!selectedRashi && !loading ? (
          <motion.div 
            key="selector"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
          >
            {RASHIS.map((rashi) => (
              <motion.button
                key={rashi.id}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect(rashi)}
                className="fortune-glass-card flex flex-col items-center justify-center !p-4 !border-[var(--card-border)] hover:!border-[var(--accent-gold)]"
                style={{ background: 'transparent', width: '100%', border: '1px solid' }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '0.25rem' }}>
                  {rashi.name}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {rashi.en}
                </span>
              </motion.button>
            ))}
          </motion.div>
        ) : loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center my-12"
          >
            <div className="w-16 h-16 rounded-full border-t-2 border-l-2 mb-4 animate-spin" style={{ borderColor: 'var(--accent-gold)' }} />
            <p style={{ color: 'var(--accent-gold)' }}>Consulting cosmic positions...</p>
          </motion.div>
        ) : (
          <motion.div
            key="reading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fortune-glass-card w-full max-w-3xl relative overflow-hidden"
          >
            <div className="absolute p-8 pointer-events-none" style={{ top: 0, right: 0, opacity: 0.05 }}>
              <span style={{ fontSize: '8rem', fontFamily: 'serif', color: 'var(--accent-gold)' }}>{selectedRashi?.name[0]}</span>
            </div>
            
            <div className="mb-6 pb-4 border-b" style={{ borderColor: 'var(--card-border)' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold)', margin: 0 }}>{selectedRashi?.name}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Lorded by {selectedRashi?.lord} • {selectedRashi?.element} Element</p>
            </div>

            <div className="space-y-4 mb-8">
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                Under the influence of {selectedRashi?.lord}, your analytical abilities are currently heightened. However, the transiting lunar node suggests a potential disruption in communication. 
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                <strong>Current Transit Advice:</strong> The celestial bodies suggest a return to inward reflection. Before making external commitments, seek internal stillness. A financial or career-related bottleneck will dissolve naturally within the next lunar cycle—do not attempt to force it open.
              </p>
            </div>

            <div className="text-center">
              <button onClick={() => setSelectedRashi(null)}>Check Another Rashi</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
