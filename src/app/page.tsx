import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RewardsSection from "@/components/RewardsSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RewardsSection />
      <EntertainmentSection />
      <CtaSection />
    </main>
  );
}
