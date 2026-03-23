import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Dice5, Sparkles, Moon, Star, Trophy, CirclePlay, ScrollText, Fingerprint, MoonStar } from "lucide-react";

export default function EntertainmentSection() {
  return (
    <section id="entertainment" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="entertainment-title mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            More Than Just <span className="text-primary">Rewards</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay entertained between rides with mini-games, fortune telling, and sports highlights.
          </p>
        </div>
        
        <div className="entertainment-grid mt-16 grid gap-8 lg:grid-cols-3">
          
          <div className="games-card overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-secondary/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Gamepad2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Mini Games</h3>
                  <p className="text-sm text-muted-foreground">Play & earn bonus points</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <Link href="/games/dice-roll" className="flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all bg-primary/10 ring-2 ring-primary">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110 bg-primary text-primary-foreground">
                    <Dice5 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Dice Roll</p>
                    <p className="text-sm text-muted-foreground">Roll the dice for your luck</p>
                  </div>
                  <div className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">Up to 100 pts</div>
                </Link>
                
                <Link href="/games/scooter-run" className="flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all bg-muted hover:bg-muted/80">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110 bg-background">
                    <Gamepad2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Scooter Run</p>
                    <p className="text-sm text-muted-foreground">Fun driving mini-game</p>
                  </div>
                  <div className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">Up to 50 pts</div>
                </Link>
                
                <Link href="/games/candy-match" className="flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all bg-muted hover:bg-muted/80">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110 bg-background">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Candy Match</p>
                    <p className="text-sm text-muted-foreground">Match 3 candies!</p>
                  </div>
                  <div className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">Mystery rewards</div>
                </Link>
              </div>
              
              <Link href="/games" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 mt-6 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <GiftIcon className="h-4 w-4" />
                Play Now in App
              </Link>
            </div>
          </div>
          
          <div className="fortune-card relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 shadow-lg">
            <div className="absolute inset-0 overflow-hidden">
              <Star className="fortune-star absolute left-4 top-4 h-4 w-4 text-yellow-300/40" />
              <Star className="fortune-star absolute right-8 top-12 h-3 w-3 text-yellow-300/30" />
              <Star className="fortune-star absolute left-12 bottom-20 h-5 w-5 text-yellow-300/20" />
              <Star className="fortune-star absolute right-4 bottom-8 h-4 w-4 text-yellow-300/30" />
              <Sparkles className="absolute right-6 top-20 h-6 w-6 text-purple-300/20 animate-pulse" />
            </div>
            
            <div className="relative border-b border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500">
                  <Moon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Fortune Teller</h3>
                  <p className="text-sm text-purple-200">Discover your destiny</p>
                </div>
              </div>
            </div>
            
            <div className="relative p-6">
              <div className="space-y-4">
                <Link href="/fortune-teller?method=prashnavali" className="flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all duration-300 bg-white/10 hover:bg-white/15">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 bg-white/10">
                    <ScrollText className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">Ram Prashnavali</p>
                    <p className="text-sm text-purple-200">Think of a question</p>
                  </div>
                  <Sparkles className="h-5 w-5 transition-all duration-300 text-purple-300" />
                </Link>
                
                <Link href="/fortune-teller?method=nadi" className="flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all duration-300 bg-white/10 hover:bg-white/15">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 bg-white/10">
                    <Fingerprint className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">Nadi Astrology</p>
                    <p className="text-sm text-purple-200">Simulated thumbprint reading</p>
                  </div>
                  <Sparkles className="h-5 w-5 transition-all duration-300 text-purple-300" />
                </Link>
                
                <Link href="/fortune-teller?method=vedic" className="flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all duration-300 bg-white/10 hover:bg-white/15">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 bg-white/10">
                    <MoonStar className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">Vedic Insight</p>
                    <p className="text-sm text-purple-200">Deep astrological daily insights</p>
                  </div>
                  <Sparkles className="h-5 w-5 transition-all duration-300 text-purple-300" />
                </Link>
              </div>
              
              <Link href="/fortune-teller" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-primary/90 h-9 px-4 py-2 mt-6 w-full gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 border-0">
                <Sparkles className="h-4 w-4" />
                Read My Fortune
              </Link>
            </div>
          </div>
          
          <div className="sports-card overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-secondary/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Sports Highlights</h3>
                  <p className="text-sm text-muted-foreground">Watch between rides</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="group flex items-center gap-4 rounded-xl bg-muted p-3 transition-all hover:bg-muted/80 cursor-pointer">
                  <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <img alt="IND vs AUS" src="/cricket-match-highlights.png" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <CirclePlay className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Cricket</span>
                    <p className="mt-1 font-medium text-foreground">IND vs AUS</p>
                    <p className="text-sm text-muted-foreground">Latest highlights</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 rounded-xl bg-muted p-3 transition-all hover:bg-muted/80 cursor-pointer">
                  <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <img alt="ISL Final" src="/football-match-highlights.png" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <CirclePlay className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Football</span>
                    <p className="mt-1 font-medium text-foreground">ISL Final</p>
                    <p className="text-sm text-muted-foreground">Latest highlights</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 rounded-xl bg-muted p-3 transition-all hover:bg-muted/80 cursor-pointer">
                  <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <img alt="PKL Highlights" src="/kabaddi-match-highlights.jpg" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <CirclePlay className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Kabaddi</span>
                    <p className="mt-1 font-medium text-foreground">PKL Highlights</p>
                    <p className="text-sm text-muted-foreground">Latest highlights</p>
                  </div>
                </div>
              </div>
              
              <a href="#cta" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 mt-6 w-full gap-2 border-2 bg-transparent rounded-md">
                <CirclePlay className="h-4 w-4" />
                View All Sports
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="8" width="18" height="4" rx="1"></rect>
      <path d="M12 8v13"></path>
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
    </svg>
  );
}
