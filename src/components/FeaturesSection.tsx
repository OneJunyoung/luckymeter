import { Car, Coins, Shield, Zap, Clock, Smartphone } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="features-title mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Drivers <span className="text-primary">Love</span> LuckyMeter
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built by drivers, for drivers. Every feature is designed to make earning rewards effortless.
          </p>
        </div>
        
        <div className="features-grid mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="feature-card group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <div className="feature-icon mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <Car className="h-7 w-7 text-primary transition-all duration-300 group-hover:text-primary-foreground icon-spin" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Auto Distance Tracking</h3>
            <p className="mt-2 text-muted-foreground">Just drive! Our smart GPS tracks every kilometer automatically while you focus on the road.</p>
          </div>
          
          <div className="feature-card group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <div className="feature-icon mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <Coins className="h-7 w-7 text-primary transition-all duration-300 group-hover:text-primary-foreground icon-spin" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Instant Points Conversion</h3>
            <p className="mt-2 text-muted-foreground">Every kilometer you drive converts to points instantly. 1 km = 1 point, driving or walking!</p>
          </div>
          
          <div className="feature-card group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <div className="feature-icon mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <Shield className="h-7 w-7 text-primary transition-all duration-300 group-hover:text-primary-foreground icon-spin" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Secure & Reliable</h3>
            <p className="mt-2 text-muted-foreground">Bank-grade security ensures your earnings and personal data are always protected.</p>
          </div>
          
          <div className="feature-card group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <div className="feature-icon mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <Zap className="h-7 w-7 text-primary transition-all duration-300 group-hover:text-primary-foreground icon-spin" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Fast Redemption</h3>
            <p className="mt-2 text-muted-foreground">Redeem your points instantly. Gift cards delivered in seconds, bank transfers within 24 hours.</p>
          </div>
          
          <div className="feature-card group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <div className="feature-icon mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <Clock className="h-7 w-7 text-primary transition-all duration-300 group-hover:text-primary-foreground icon-spin" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Works Offline</h3>
            <p className="mt-2 text-muted-foreground">Low battery or no signal? No problem. Your distance is tracked and synced when you're back online.</p>
          </div>
          
          <div className="feature-card group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <div className="feature-icon mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <Smartphone className="h-7 w-7 text-primary transition-all duration-300 group-hover:text-primary-foreground icon-spin" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Battery Optimized</h3>
            <p className="mt-2 text-muted-foreground">Designed for all-day use without draining your battery. Keep earning while you drive.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
