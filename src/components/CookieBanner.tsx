"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // In a full implementation, you'd trigger AdSense tag loading here if delayed
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
    // Note: Declining personalized ads should ideally configure Google targeting parameters
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-20 md:pb-6 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-6 pointer-events-auto relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-500" />
        
        <button 
          onClick={() => setShowBanner(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-center pr-8 md:pr-0">
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-bold text-foreground">We value your privacy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to personalize content, tailor and measure ads (via Google AdSense), and provide a better user experience. By clicking "Accept All", you agree to the storing of cookies on your device. For more details, see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-muted font-medium transition-colors w-full sm:w-auto"
            >
              Essential Only
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors shadow-lg shadow-primary/20 w-full sm:w-auto"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
