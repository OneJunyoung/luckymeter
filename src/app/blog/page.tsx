import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export const metadata = {
  title: "LuckyMeter Blog | Arcade Insights & Strategies",
  description: "Read the latest news, game strategies, and deep dives from the LuckyMeter team.",
};

const POSTS = [
  {
    slug: "why-we-built-luckymeter",
    title: "Why We Built LuckyMeter: More Than Just a Rewards App",
    excerpt: "Discover the vision behind LuckyMeter, the #1 app for Indian drivers, and why we decided to add a free arcade to our platform.",
    date: "March 16, 2026",
    readTime: "4 min read",
    category: "Company",
  },
  {
    slug: "the-history-of-carrom",
    title: "The Fascinating History of Carrom: India's Favorite Board Game",
    excerpt: "Explore the origins, the cultural significance, and the global spread of Carrom, and learn why it remains a timeless classic.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "History",
  },
  {
    slug: "strategies-for-gomoku",
    title: "Mastering Gomoku: Strategies to Win (Five in a Row)",
    excerpt: "Want to improve your Gomoku skills? Learn the opening strategies, defensive maneuvers, and winning tactics to dominate the board.",
    date: "March 14, 2026",
    readTime: "6 min read",
    category: "Strategy",
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background flex justify-center">
      <div className="max-w-5xl w-full space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            The <span className="text-primary">Lucky</span> Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, strategies, and stories from the team behind India's favorite rewards app and arcade platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-3">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-8 flex-1 line-clamp-4">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
