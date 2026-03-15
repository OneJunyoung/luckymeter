import { Users, MapPin, Gift, Wallet } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          
          <div className="stat-card rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground sm:text-4xl">50,000+</div>
            <p className="mt-2 text-sm text-muted-foreground">Active Drivers</p>
          </div>
          
          <div className="stat-card rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground sm:text-4xl">12M+ km</div>
            <p className="mt-2 text-sm text-muted-foreground">Distance Tracked</p>
          </div>
          
          <div className="stat-card rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground sm:text-4xl">150K+</div>
            <p className="mt-2 text-sm text-muted-foreground">Rewards Redeemed</p>
          </div>
          
          <div className="stat-card rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground sm:text-4xl">25L+ ₹</div>
            <p className="mt-2 text-sm text-muted-foreground">Paid to Drivers</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
