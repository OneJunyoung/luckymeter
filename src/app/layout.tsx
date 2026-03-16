import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lucky Meter India's #1 Rewards App for Auto/Cab Drivers",
  description: "Turn your daily kilometers into instant rewards with Lucky Meter! The ultimate app for auto and cab drivers in India. Download now and start earning on every ride!",
  keywords: "driver rewards, auto drivers, cab drivers, lucky meter app, earn money driving, best app for drivers india, mileage tracker app, rewards for driving",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased text-foreground bg-background`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4003263516632195" 
          crossOrigin="anonymous" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
