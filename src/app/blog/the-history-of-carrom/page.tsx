import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "The History of Carrom | Blog",
  description: "Explore the origins, cultural significance, and global spread of Carrom.",
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
            <span className="px-3 py-1 bg-primary/10 text-primary uppercase tracking-wider font-semibold rounded-full">History</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> March 15, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            The Fascinating History of Carrom: India's Favorite Board Game
          </h1>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
          <p className="lead text-xl text-foreground font-medium mb-8">
            Walk down almost any street in South Asia on a lazy Sunday afternoon, and there is a high probability you will hear the distinctive, sharp 'clack' of a heavy striker hitting wooden coins, followed by the soft thud of a coin dropping into a netted pocket. This is Carrom, a game woven deeply into the cultural fabric of the Indian subcontinent.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Origins Shrouded in Mystery</h2>
          <p className="mb-6">
            The exact origins of Carrom are hotly debated among historians and gaming enthusiasts alike. Unlike Chess, which has a relatively well-documented lineage leading back to the Indian game of Chaturanga, Carrom's beginnings are murkier. 
          </p>
          <p className="mb-6">
            Some historians suggest the game originated in the Indian subcontinent. The earliest known Carrom boards, crafted with exquisite detail from glass, were found in the palaces of Indian Maharajas. However, alternative theories suggest connections to Portugal or even Britain, given the similarity to games like billiards and snooker, albeit played with fingers instead of cues. Regardless of where the first board was built, it is undeniable that India adopted, perfected, and popularized the game.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Mechanics of the Game</h2>
          <p className="mb-6">
            For the uninitiated, Carrom is often described as "finger billiards." It is played on a smooth wooden square board with a pocket in each corner. 
          </p>
          <p className="mb-6">
            The objective is simple: players use a heavier disc, known as the 'striker', to knock lighter wooden discs, known as 'carrom men' or 'coins', into the pockets. A standard game uses nine white coins, nine black coins, and one red coin called the 'Queen'. Covering the Queen is an essential and strategic part of the game that often dictates the winner. 
          </p>
          <p className="mb-6">
            The board is generously dusted with finely milled powder—typically boric acid or specialized carrom powder—to reduce friction, allowing the striker and coins to glide effortlessly across the surface. This creates a fast-paced game heavily reliant on angles, geometry, and precise finger-flicking technique.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Cultural Significance</h2>
          <p className="mb-6">
            In India, Carrom is significantly more than just a pastime; it is a social event. It transcends social, economic, and generational divides. It is played in exclusive clubs, in cramped alleyways, under streetlights, and inside millions of homes. 
          </p>
          <p className="mb-6">
            It is the quintessential family game. Grandparents challenge their grandchildren, often demonstrating that experience and geometric intuition easily trump youthful enthusiasm. Tournaments held during festivals draw massive crowds, with local champions revered in their neighborhoods. The game fosters community, requiring players to sit facing each other around the board, inherently promoting conversation and camaraderie.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Road to International Recognition</h2>
          <p className="mb-6">
            While deeply rooted in Asia, Carrom began spreading globally in the latter half of the 20th century. The game traveled with the South Asian diaspora to Europe, North America, and the Middle East. 
          </p>
          <p className="mb-6">
            To standardise the rules and promote the game at a professional level, the International Carrom Federation (ICF) was established in 1988 in Chennai, India. The ICF formalized regulations regarding board dimensions, coin weight, and tournament structures. Today, the ICF oversees the Carrom World Championship, drawing highly skilled competitors from dozens of countries. Countries like Sri Lanka, the Maldives, and surprisingly, several European nations, now boast incredibly strong professional carrom scenes.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Digital Evolution</h2>
          <p className="mb-6">
            As with all physical games, the advent of the smartphone era brought Carrom into the digital realm. Digital versions of Carrom—including the one we've painstakingly recreated here in the LuckyMeter Arcade—have introduced the game to an entirely new generation of global players. 
          </p>
          <p className="mb-6">
            Developers utilize complex 2D physics engines to simulate the essential friction, restitution, and collision mechanics that define real-world Carrom. While a touchscreen may never fully replicate the tactile satisfaction of flicking a physical striker coated in powder, digital Carrom has successfully captured the strategic essence and geometric puzzles of the original game.
          </p>
          <p className="mb-6">
            Whether played on a lovingly maintained wooden board passed down through generations, or on the glowing screen of a smartphone during a commute, Carrom's core appeal remains unchanged: it is a beautifully simple, infinitely complex game of skill and geometry.
          </p>
        </div>
      </div>
    </article>
  );
}
