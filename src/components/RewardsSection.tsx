import Image from "next/image";
import { Gift, Banknote, CreditCard, ArrowRight } from "lucide-react";

export default function RewardsSection() {
  const giftCards = [
    { name: "Amazon", points: 100, src: "/amazon-logo.png", popular: true },
    { name: "Zomato", points: 50, src: "/zomato-logo-red.jpg", popular: true },
    { name: "Blinkit", points: 50, src: "/blinkit-logo-yellow.jpg" },
    { name: "Zepto", points: 50, src: "/zepto-logo-purple.jpg" },
    { name: "Swiggy", points: 50, src: "/swiggy-logo-orange.png" },
    { name: "Uber", points: 50, src: "/uber-logo-black.png" },
    { name: "Flipkart", points: 100, src: "/flipkart-logo-blue.jpg" },
  ];

  return (
    <section id="rewards" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rewards-title mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Redeem Points for <span className="text-primary">Real Rewards</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose from India's most popular brands or get instant cash to your bank account.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Gift Cards</h3>
            </div>
            <div className="rewards-grid grid grid-cols-2 gap-4 sm:grid-cols-3">
              {giftCards.map((card, i) => (
                <div key={i} className="reward-card group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                  {card.popular && (
                    <span className="absolute right-2 top-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                      Popular
                    </span>
                  )}
                  <div className="flex h-16 items-center justify-center">
                    <img 
                      src={card.src} 
                      alt={card.name} 
                      className="h-auto max-h-12 w-auto object-contain" 
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-medium text-foreground">{card.name}</p>
                    <p className="text-sm text-muted-foreground">From {card.points} pts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bank-card">
            <div className="mb-4 flex items-center gap-2">
              <Banknote className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Direct Bank Transfer</h3>
            </div>
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-orange-600 p-6 text-primary-foreground shadow-xl">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="text-sm opacity-90">Convert Points to</p>
                  <p className="text-3xl font-bold">₹ Cash</p>
                </div>
                <CreditCard className="h-10 w-10 opacity-80" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-white/20 p-3">
                  <span>1000 points</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="font-bold">₹10</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/20 p-3">
                  <span>5000 points</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="font-bold">₹50</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/20 p-3">
                  <span>10000 points</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="font-bold">₹100</span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 mt-6 w-full bg-white text-primary hover:bg-white/90">
                Link Your Bank Account
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
