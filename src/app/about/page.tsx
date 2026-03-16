import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const metadata = {
  title: "About Us | LuckyMeter Arcade",
  description: "Learn more about LuckyMeter, India's #1 rewards app for drivers, and our arcade entertainment platform.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background flex justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            About <span className="text-primary">LuckyMeter</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bringing joy and rewards to every kilometer driven.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
            <p>
              LuckyMeter is India's leading rewards platform designed specifically for auto and cab drivers. Born out of Chennai, Tamil Nadu, our mission is to ensure that every driver gets more value out of their daily routes. We believe that hard work on the road deserves to be matched with instant, tangible rewards that make a difference in your everyday life.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">The Arcade Experience</h2>
            <p>
              Driving the busy streets of India is exhausting work. We created the <strong>LuckyMeter Arcade</strong> as a relaxing, fun entertainment hub where drivers (and anyone else!) can take a well-deserved break. Our collection of highly addictive HTML5 mini-games—from Candy Match to Carrom—is entirely free to play.
            </p>
            <p>
              Whether you're waiting for your next ride request or relaxing after a long shift, our minimal, engaging arcade is designed to bring a little test of luck and skill into your day.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            <p>
              We envision a future where mobility professionals are universally respected and adequately rewarded for the essential services they provide. LuckyMeter is continuously evolving to offer better financial tools, engaging content, and a supportive community for our drivers.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="mailto:luckymeter@lucky-meter.com" className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <p className="text-sm">luckymeter@lucky-meter.com</p>
                </div>
              </a>

              <a href="tel:+918122027408" className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us (India)</p>
                  <p className="text-sm">+91 81220 27408</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
