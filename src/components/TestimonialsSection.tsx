import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      type: "Ola Driver, Delhi",
      image: "/indian-man-driver-portrait-1.jpg",
      quote: "LuckyMeter has changed my life! I earn extra ₹3000-4000 every month just by doing my regular rides. The redemption process is super fast.",
      earned: "₹45,000+"
    },
    {
      name: "Suresh Patil",
      type: "Uber Driver, Mumbai",
      image: "/indian-man-driver-portrait-2.jpg",
      quote: "I love the mini-games feature. Between rides, I play Lucky Spin and earn bonus points. Best app for drivers!",
      earned: "₹38,000+"
    },
    {
      name: "Arun Singh",
      type: "Rapido Captain, Bangalore",
      image: "/indian-man-driver-portrait-3.jpg",
      quote: "Direct bank transfer option is amazing. I get my money within 24 hours. Highly recommend to all my fellow drivers.",
      earned: "₹52,000+"
    },
    {
      name: "Mohan Yadav",
      type: "Auto Driver, Hyderabad",
      image: "/indian-man-driver-portrait-4.jpg",
      quote: "Even as an auto driver, I'm earning well with LuckyMeter. The sports highlights keep me entertained during wait times.",
      earned: "₹28,000+"
    }
  ];

  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="testimonials-title mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by <span className="text-primary">50,000+</span> Drivers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from real drivers earning real rewards every day.
          </p>
        </div>
        
        <div className="testimonials-container mt-16">
          <div className="relative md:hidden">
            <div className="testimonial-card overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="text-foreground">{testimonials[0].quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <img alt={testimonials[0].name} src={testimonials[0].image} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">{testimonials[0].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[0].type}</p>
                  <div className="mt-1 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs text-muted-foreground">Total Earned</p>
                  <p className="font-bold text-primary">{testimonials[0].earned}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-2">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border shadow-xs hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full bg-transparent">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                <button className="h-2 rounded-full transition-all w-6 bg-primary"></button>
                <button className="h-2 w-2 rounded-full transition-all bg-border"></button>
                <button className="h-2 w-2 rounded-full transition-all bg-border"></button>
                <button className="h-2 w-2 rounded-full transition-all bg-border"></button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border shadow-xs hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full bg-transparent">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="hidden grid-cols-2 gap-6 md:grid">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="text-foreground">{t.quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <img alt={t.name} src={t.image} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.type}</p>
                    <div className="mt-1 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-muted-foreground">Total Earned</p>
                    <p className="font-bold text-primary">{t.earned}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
