import Image from "next/image";
import Link from "next/link";
import { MapPin, Instagram, Facebook, MessageCircle, CircleHelp, Users, Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image src="/images/ec-9e-90-ec-82-b0-202.png" alt="LuckyMeter Logo" width={48} height={48} className="h-12 w-12" />
              <span className="text-xl font-bold text-white">Lucky<span className="text-primary">Meter</span></span>
            </div>
            <p className="mt-4 max-w-xs text-muted-foreground">
              India's #1 rewards app for drivers. Turn every kilometer into earnings with LuckyMeter.
            </p>
            <div className="mt-4 flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-sm">Chennai, Tamil Nadu, India</span>
            </div>
            
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/lucky_meter/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/10 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582178288707" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/10 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/lucky-meter-09506338b/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/10 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://chat.whatsapp.com/LG8sGb67HZ3GqdHGq5DU0l?mode=gi_t" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/10 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110" aria-label="WhatsApp Customer Service">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#features" className="text-muted-foreground transition-colors hover:text-primary">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground transition-colors hover:text-primary">How It Works</a></li>
              <li><a href="#rewards" className="text-muted-foreground transition-colors hover:text-primary">Rewards</a></li>
              <li><a href="#entertainment" className="text-muted-foreground transition-colors hover:text-primary">Entertainment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground transition-colors hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="https://chat.whatsapp.com/LG8sGb67HZ3GqdHGq5DU0l?mode=gi_t" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"><CircleHelp className="h-4 w-4" />Help Center</a></li>
              <li><a href="https://chat.whatsapp.com/LG8sGb67HZ3GqdHGq5DU0l?mode=gi_t" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"><MessageCircle className="h-4 w-4" />Customer Service</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 border-t border-muted/20 pt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href="mailto:luckymeter@lucky-meter.com" className="flex items-center gap-3 transition-colors hover:text-primary">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">luckymeter@lucky-meter.com</span>
            </a>
            <a href="tel:+918122027408" className="flex items-center gap-3 transition-colors hover:text-primary">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+91 81220 27408 (India)</span>
            </a>
            <a href="tel:+821036768436" className="flex items-center gap-3 transition-colors hover:text-primary">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+82 10 3676 8436 (Korea)</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-muted/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 LuckyMeter. All rights reserved. Made with love in Chennai for Indian drivers.</p>
        </div>
        
      </div>
    </footer>
  );
}
