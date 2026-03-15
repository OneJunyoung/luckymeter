import Image from "next/image";
import { Smartphone, Apple } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-primary py-20 sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <div className="cta-content text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Start Earning Today
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Join 50,000+ drivers who are already earning extra income with every kilometer they drive. Download LuckyMeter now and turn your daily rides into rewards!
            </p>
            
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="https://play.google.com/store/apps/details?id=com.rupeewalk.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap font-medium rounded-md px-6 h-10 w-full gap-2 bg-white text-lg text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl hover:scale-105 sm:w-auto">
                <Smartphone className="h-5 w-5" />
                Google Play
              </a>
              <a href="https://apps.apple.com/us/app/luckymeter/id6746455228" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap font-medium rounded-md px-6 h-10 w-full gap-2 bg-foreground text-lg text-background shadow-lg transition-all hover:bg-foreground/90 hover:shadow-xl hover:scale-105 sm:w-auto">
                <Apple className="h-5 w-5" />
                App Store
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-primary-foreground/80 lg:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-foreground">Free</p>
                <p className="text-sm">No hidden charges</p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/30"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-foreground">4.8</p>
                <p className="text-sm">Play Store rating</p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/30"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-foreground">₹50</p>
                <p className="text-sm">Minimum withdrawal</p>
              </div>
            </div>
          </div>
          
          <div className="cta-phone flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-8 border-foreground/80 bg-foreground/80 shadow-2xl">
                <Image
                  src="/images/image-2025-12-18-17-12-47.png"
                  alt="LuckyMeter App"
                  width={240}
                  height={480}
                  className="h-auto w-[240px]"
                />
              </div>
              <div className="cta-float-card absolute -left-6 top-20 rounded-xl bg-white p-3 shadow-xl z-20">
                <p className="text-xs font-medium text-muted-foreground">Daily Earnings</p>
                <p className="text-lg font-bold text-primary">+₹150</p>
              </div>
              <div className="cta-float-card absolute -right-4 bottom-32 rounded-xl bg-white p-3 shadow-xl z-20">
                <p className="text-xs font-medium text-muted-foreground">Points Today</p>
                <p className="text-lg font-bold text-primary">+320 pts</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
