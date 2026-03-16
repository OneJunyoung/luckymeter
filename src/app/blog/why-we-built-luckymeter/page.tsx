import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Why We Built LuckyMeter | Blog",
  description: "Discover the vision behind LuckyMeter and why we added a free arcade to our platform.",
};

export default function BlogPost() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background flex justify-center">
      <div className="max-w-3xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="space-y-6 mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 text-primary uppercase tracking-wider font-semibold rounded-full">Company</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> March 16, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Why We Built LuckyMeter: More Than Just a Rewards App
          </h1>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
          <p className="lead text-xl text-foreground font-medium mb-8">
            When we first conceptualized LuckyMeter, our goal was simple: to create a system that tangibly rewards the hard-working individuals who keep our cities moving. Today, LuckyMeter has grown into India's premier rewards platform for auto rickshaw and cab drivers, but our mission extends far beyond simple cashbacks.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Daily Grind of the Indian Driver</h2>
          <p className="mb-6">
            Driving in India's bustling metropolitan hubs—like Chennai, Bengaluru, and Mumbai—is not for the faint of heart. It requires immense concentration, endless patience, and an unparalleled ability to navigate chaos. For auto and cab drivers, their vehicle is their livelihood, their office, and their second home. They spend upwards of 12 hours a day traversing congested streets, dealing with irate passengers, and battling the elements.
          </p>
          <p className="mb-6">
            Despite forming the backbone of urban transportation, these drivers often operate on slim margins. We saw a stark imbalance: the immense value they provide wasn't being reflected in their everyday earnings. We asked ourselves, "How can we make every kilometer count for something more?"
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Introducing LuckyMeter</h2>
          <p className="mb-6">
            That question birthed LuckyMeter. We built an application designed specifically for the Indian mobility professional. By seamlessly running in the background while they work, LuckyMeter tracks the distance covered and converts it into points. These points are not arbitrary digital tokens; they represent actual, usable rewards—ranging from fuel subsidies and vehicle maintenance discounts to direct cash deposits.
          </p>
          <p className="mb-6">
            The reception was overwhelmingly positive. We watched thousands of drivers sign up, their daily routines transformed from a grueling grind into a gamified quest for rewards. But as our community grew, we realized there was another aspect of their daily lives we weren't addressing: downtime.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Why an Arcade?</h2>
          <p className="mb-6">
            During lunch breaks, while waiting in long queues at CNG stations, or during the lull between passenger rides, drivers have pockets of free time. This downtime is crucial for mental recuperation, but there are limited ways to truly unwind while sitting behind the wheel.
          </p>
          <p className="mb-6">
            We decided to expand LuckyMeter from being just a utilitarian rewards tracker into a holistic digital companion. We integrated the <strong>LuckyMeter Arcade</strong>—a collection of lightweight, instantly accessible HTML5 mini-games built directly into the platform. We intentionally selected games that are familiar, easy to pick up, and incredibly fun.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Carrom:</strong> A nostalgic callback to the incredibly popular South Asian board game.</li>
            <li><strong>Gomoku:</strong> A strategic, slow-paced game of Five-in-a-Row for those wanting a mental puzzle.</li>
            <li><strong>Quick Mini-Games:</strong> Scooter Run, Candy Match, and Bubble Pop for instant, fast-paced distraction.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Building for the Community</h2>
          <p className="mb-6">
            The addition of the Arcade transformed the LuckyMeter platform. It ceased to be merely a tool and became a community hub. Drivers were no longer just comparing kilometers; they were competing on the global Leaderboard for the highest score in Carrom.
          </p>
          <p className="mb-6">
            We believe that mental well-being is just as importantly as financial well-being. By providing a combination of tangible financial rewards for their hard work and engaging entertainment for their breaks, LuckyMeter is dedicated to improving the daily lives of drivers across the nation.
          </p>
          <p className="mb-6">
            Thank you to every driver who uses LuckyMeter. You are the engine that drives us forward.
          </p>
        </div>
      </div>
    </article>
  );
}
