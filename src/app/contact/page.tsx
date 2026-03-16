import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | LuckyMeter Arcade",
  description: "Get in touch with the LuckyMeter support team. We're here to help!",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background flex justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about the app, rewards, or our arcade games? Our team is always ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Our Headquarters</h3>
                  <p className="text-muted-foreground mt-1">Chennai, Tamil Nadu<br />India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:luckymeter@lucky-meter.com" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">luckymeter@lucky-meter.com</a>
                  <p className="text-xs text-muted-foreground mt-1">We aim to respond within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone Support</h3>
                  <a href="tel:+918122027408" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">+91 81220 27408 (India)</a>
                  <a href="tel:+821036768436" className="text-muted-foreground hover:text-primary transition-colors block">+82 10 3676 8436 (Korea)</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                  <p className="text-muted-foreground mt-1">Monday - Friday<br />9:00 AM - 6:00 PM (IST)</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp / Social CTA */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-primary/5 to-orange-500/5 border border-primary/20 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
             {/* Decorative Background Elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10 text-center space-y-6">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">Need Instant Help?</h3>
                <p className="text-muted-foreground">
                  The fastest way to reach our support team is through our official WhatsApp channel. Join drivers across India getting real-time assistance!
                </p>
                <div className="pt-4">
                  <a href="https://chat.whatsapp.com/LG8sGb67HZ3GqdHGq5DU0l?mode=gi_t" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1">
                     <Phone className="w-5 h-5 fill-current" />
                     Chat on WhatsApp
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
