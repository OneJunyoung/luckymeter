import Image from "next/image";
import { Star, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-secondary to-background pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-primary">#1 Rewards App for Drivers in India</span>
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Drive More, <span className="text-primary">Earn More</span> with Every Kilometer
            </h1>
            
            <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl">
              Turn your daily rides into rewards! LuckyMeter tracks your distance and converts it into points you can redeem for Amazon, Blinkit, Zomato gift cards, or instant bank transfers.
            </p>
            
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="#cta" className="inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap font-medium h-10 rounded-md px-6 w-full gap-2 bg-primary text-lg text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 sm:w-auto">
                Download Free
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#entertainment" className="inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap font-medium shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 w-full gap-2 border-2 text-lg sm:w-auto bg-transparent hover:scale-105 transition-transform">
                <Play className="h-5 w-5 fill-primary text-primary" />
                Watch Demo
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-background bg-muted">
                    <img alt={`Indian driver portrait ${i}`} src={`/indian-man-driver-portrait-${i}.jpg`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">50,000+ happy drivers</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[3rem] border-8 border-foreground/90 bg-foreground/90 shadow-2xl">
                <Image
                  src="/images/image-2025-12-18-17-48-12.png"
                  alt="LuckyMeter App Interface"
                  width={280}
                  height={560}
                  className="h-auto w-[280px]"
                />
              </div>
              <div className="absolute inset-0">
                <div className="floating-coin absolute -left-8 top-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-500 shadow-lg shadow-accent/30">
                  <span className="text-xl font-bold text-foreground">₹</span>
                </div>
                <div className="floating-coin absolute -right-6 top-32 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-600 shadow-lg shadow-primary/30" style={{ animationDelay: '1s' }}>
                  <span className="text-sm font-bold text-primary-foreground">+5</span>
                </div>
                <div className="floating-coin absolute -left-4 bottom-40 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-yellow-400 shadow-lg shadow-accent/20" style={{ animationDelay: '2s' }}>
                  <Star className="h-5 w-5 fill-foreground text-foreground" />
                </div>
                <div className="floating-coin absolute -right-10 bottom-60 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30" style={{ animationDelay: '0.5s' }}>
                  <span className="text-lg font-bold text-white">₹₹</span>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 rounded-[3rem] bg-primary/30 blur-3xl animate-pulse"></div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-background"></path>
        </svg>
      </div>
    </section>
  );
}
