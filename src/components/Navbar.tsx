"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isGamesPage = pathname.startsWith('/games');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isGamesPage
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
            <img
              src="/images/ec-9e-90-ec-82-b0-202.png"
              alt="LuckyMeter Logo"
              className="h-10 w-10 md:h-12 md:w-12 ml-4 md:ml-0"
            />
            <span className="text-xl font-bold text-foreground md:text-2xl whitespace-nowrap hidden sm:inline-block">
              Lucky<span className="text-primary">Meter</span>
            </span>
          </Link>
          
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              How It Works
            </a>
            <a href="#rewards" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Rewards
            </a>
            <a href="#entertainment" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Entertainment
            </a>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/games" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Go to Play Games
            </Link>
          </div>

          <div className="hidden md:flex">
            <a href="#cta" className="inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-4 w-4" />
              Download App
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-6 shadow-lg">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#rewards" className="text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Rewards
            </a>
            <a href="#entertainment" className="text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Entertainment
            </a>
            <Link href="/blog" className="text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/games" className="text-base font-medium text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
              Go to Play Games
            </Link>
            <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="mt-4 flex flex-shrink-0 items-center justify-center rounded-md font-medium h-10 w-full gap-2 bg-primary text-primary-foreground">
              <Download className="h-4 w-4" />
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
