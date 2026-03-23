"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint } from 'lucide-react';

export default function NadiReader() {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reading, setReading] = useState<{ past: string, present: string, future: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scanning) {
      if (progress < 100) {
        const timer = setTimeout(() => setProgress(prev => Math.min(prev + (Math.random() * 15 + 10), 100)), 400);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => {
          setScanning(false);
          generateReading();
        }, 800);
      }
    }
  }, [scanning, progress]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedPreview(url);
      setReading(null);
      setProgress(0);
      setScanning(false);
    }
  };

  const startAnalysis = () => {
    if (!selectedPreview) return;
    setScanning(true);
    setProgress(0);
    setReading(null);
  };

  const generateReading = () => {
    setReading({
      past: "In a previous cycle, you were a scholar who hoarded knowledge. The karmic debt of unshared wisdom manifests in your current life as moments of intense, unexplained isolation.",
      present: "Your Dharma requires you to act as a bridge. The struggles you face today are not punishments, but the tempering of iron to make you strong enough to carry the burdens of others.",
      future: "Moksha awaits if you learn to release. The upcoming year will present a profound choice between material gain and spiritual alignment. Choose the latter for lasting peace."
    });
  };

  const reset = () => {
    setSelectedPreview(null);
    setReading(null);
    setProgress(0);
    setScanning(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="flex flex-col items-center">
      <h2 style={{ fontSize: '2.5rem' }}>Nadi Leaf Reading</h2>
      <p className="text-center mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Nadi Astrology posits that ancient sages inscribed your destiny onto palm leaves. Upload a clear image of your fingerprint to let the cosmic algorithm locate your specific leaf.
      </p>

      {!reading ? (
        <div className="fortune-glass-card flex flex-col items-center p-8 md:p-12 w-full max-w-md">
          
          {!selectedPreview ? (
            <div className="flex flex-col items-center">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileSelect} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => fileInputRef.current?.click()}
                className="w-32 h-32 rounded-full border border-[var(--card-border)] flex flex-col items-center justify-center mb-6 cursor-pointer hover:bg-[rgba(212,175,55,0.1)]"
                style={{ background: 'transparent' }}
              >
                <Fingerprint size={48} color="var(--accent-gold)" className="mb-2" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Upload Image</span>
              </motion.button>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Please select an image of your thumbprint to begin.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <div className="relative mb-8 border overflow-hidden" style={{ width: '12rem', height: '16rem', borderRadius: '0.75rem', borderColor: scanning ? 'var(--accent-gold)' : 'var(--card-border)' }}>
                {/* Fingerprint Image Preview */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    backgroundImage: `url(${selectedPreview})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: scanning ? 'contrast(1.5) sepia(1) hue-rotate(-50deg) saturate(3)' : 'none',
                    transition: 'filter 1s ease'
                  }}
                />

                {/* Scanning line animation */}
                <AnimatePresence>
                  {scanning && (
                    <motion.div
                      initial={{ top: 0, opacity: 0 }}
                      animate={{ 
                        top: ['0%', '100%', '0%'],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "linear" 
                      }}
                      className="absolute left-0 right-0 z-20"
                      style={{ 
                        height: '0.25rem',
                        background: 'var(--accent-gold)',
                        boxShadow: '0 0 10px var(--accent-gold), 0 0 20px var(--accent-gold)' 
                      }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Ambient glow during scan */}
                <div 
                  className="absolute inset-0 z-0 transition-opacity duration-500"
                  style={{ 
                    background: 'radial-gradient(circle, var(--accent-gold-glow) 0%, transparent 80%)',
                    opacity: scanning ? 1 : 0,
                  }}
                />
              </div>

              {scanning ? (
                <p className="text-center min-h-[1.5rem] mb-4" style={{ color: 'var(--accent-gold)' }}>
                  Extracting temporal signature... {Math.floor(progress)}%
                </p>
              ) : (
                <div className="flex gap-4">
                  <button onClick={reset} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', borderColor: 'var(--text-secondary)' }}>
                    Reselect
                  </button>
                  <button onClick={startAnalysis}>
                    <span className="flex items-center gap-2">
                      <Fingerprint size={16} /> Analyze Print
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-3xl space-y-6"
        >
          <ReadingSection title="Karma (The Past)" content={reading.past} delay={0.2} />
          <ReadingSection title="Dharma (The Present)" content={reading.present} delay={0.4} />
          <ReadingSection title="Moksha (The Future)" content={reading.future} delay={0.6} />

          <div className="text-center mt-8">
            <button onClick={reset}>Consult New Signature</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function ReadingSection({ title, content, delay }: { title: string, content: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="fortune-glass-card"
    >
      <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{content}</p>
    </motion.div>
  );
}
