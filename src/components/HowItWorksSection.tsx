import { Download, Car, Gift, Wallet } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hiw-title mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start Earning in <span className="text-primary">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No complicated setup. No hidden fees. Just drive and earn.
          </p>
        </div>
        
        <div className="steps-container relative mt-16">
          <div className="connecting-line absolute left-0 right-0 top-20 hidden h-1 bg-gradient-to-r from-primary via-accent to-primary lg:block"></div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="step-card relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
                <Download className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute left-1/2 top-6 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-foreground lg:flex">01</div>
              <h3 className="text-lg font-semibold text-foreground">Download the App</h3>
              <p className="mt-2 text-muted-foreground">Get LuckyMeter free from Play Store or App Store. Quick setup in under 2 minutes.</p>
            </div>
            
            <div className="step-card relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
                <Car className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute left-1/2 top-6 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-foreground lg:flex">02</div>
              <h3 className="text-lg font-semibold text-foreground">Start Driving</h3>
              <p className="mt-2 text-muted-foreground">Open the app and hit the road. We track your distance automatically in the background.</p>
            </div>
            
            <div className="step-card relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
                <Gift className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute left-1/2 top-6 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-foreground lg:flex">03</div>
              <h3 className="text-lg font-semibold text-foreground">Earn Points</h3>
              <p className="mt-2 text-muted-foreground">Watch your points grow with every kilometer. Bonus points for daily goals and achievements!</p>
            </div>
            
            <div className="step-card relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
                <Wallet className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute left-1/2 top-6 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-foreground lg:flex">04</div>
              <h3 className="text-lg font-semibold text-foreground">Redeem Rewards</h3>
              <p className="mt-2 text-muted-foreground">Exchange points for gift cards or direct bank transfer. It's that simple!</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
