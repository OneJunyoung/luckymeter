import GameWrapper from '@/components/GameWrapper';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Script from 'next/script';



// Dynamically import games to avoid large initial bundle sizes
const CandyMatch = dynamic(() => import('@/components/games/CandyMatch'), { loading: () => <LoadingSpinner /> });
const BubblePop = dynamic(() => import('@/components/games/BubblePop'), { loading: () => <LoadingSpinner /> });
const ScooterRun = dynamic(() => import('@/components/games/ScooterRun'), { loading: () => <LoadingSpinner /> });
const DiceRoll = dynamic(() => import('@/components/games/DiceRoll'), { loading: () => <LoadingSpinner /> });
const GhostLeg = dynamic(() => import('@/components/games/GhostLeg'), { loading: () => <LoadingSpinner /> });
const DrawingLots = dynamic(() => import('@/components/games/DrawingLots'), { loading: () => <LoadingSpinner /> });
const Gomoku = dynamic(() => import('@/components/games/Gomoku'), { loading: () => <LoadingSpinner /> });
const Carrom = dynamic(() => import('@/components/games/Carrom'), { loading: () => <LoadingSpinner /> });

const GAME_COMPONENTS: Record<string, React.ComponentType> = {
  'candy-match': CandyMatch,
  'bubble-pop': BubblePop,
  'scooter-run': ScooterRun,
  'dice-roll': DiceRoll,
  'ghost-leg': GhostLeg,
  'drawing-lots': DrawingLots,
  'gomoku': Gomoku,
  'carrom': Carrom,
};

function LoadingSpinner() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-slate-700 border-t-sky-500 animate-spin" />
    </div>
  );
}

// Generate dynamic metadata for each game
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  if (!GAME_COMPONENTS[slug]) {
    return { title: 'Game Not Found | LuckyMeter' };
  }

  const gameName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Play ${gameName} Online Free | LuckyMeter Arcade`,
    description: `Play the classic ${gameName} game instantly online. Compete for high scores and earn LuckyMeter points while you play.`,
    keywords: `${gameName}, play ${gameName}, ${gameName} online, free web games`,
    openGraph: {
      title: `Play ${gameName} Online Free | LuckyMeter`,
      description: `Play the classic ${gameName} game instantly online on LuckyMeter.`,
      url: `https://lucky-meter.com/games/${slug}`,
      images: [
        {
          url: `/images/updated-mobile-app.jpg`,
          width: 1200,
          height: 630,
          alt: `${gameName} on LuckyMeter`,
        },
      ],
    },
  };
}

export default async function GamePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const GameComponent = GAME_COMPONENTS[slug];

  if (!GameComponent) {
    notFound();
  }

  // Format title from slug
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <>
      <Script
        id="game-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            name: title,
            url: `https://lucky-meter.com/games/${slug}`,
            description: `Play the classic ${title} game instantly online. Compete for high scores and earn LuckyMeter points while you play.`,
            playMode: "SinglePlayer",
            applicationCategory: "GameApplication",
            operatingSystem: "Web Browser",
            genre: "Arcade Game",
            provider: {
              "@type": "Organization",
              name: "LuckyMeter",
              url: "https://lucky-meter.com"
            }
          })
        }}
      />
      <GameWrapper title={title}>
         <GameComponent />
      </GameWrapper>
    </>
  );
}
