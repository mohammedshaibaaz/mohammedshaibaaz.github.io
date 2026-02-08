import { useState } from "react";
import { LaserLoader } from "../components/LaserLoader";
import { PillNavigation } from "../components/PillNavigation";
import { IndustrialHero } from "../components/IndustrialHero";
import { IndustrialProjects } from "../components/IndustrialProjects";
import { IndustrialProcess } from "../components/IndustrialProcess";
import { IndustrialTestimonials } from "../components/IndustrialTestimonials";
import { IndustrialAbout } from "../components/IndustrialAbout";
import { IndustrialFooter } from "../components/IndustrialFooter";

// ...existing code...
export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {/* Skip to main content link - accessible via keyboard */}
      <a 
        href="#main-content" 
        className="absolute -top-10 left-4 bg-white text-black px-4 py-2 rounded-lg font-mono text-sm z-50 focus:top-4 outline-none focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to main content
      </a>

      {/* Laser loader - runs for 1.8 seconds */}
      {isLoading && <LaserLoader onComplete={() => setIsLoading(false)} />}
      
      {/* Industrial Obsidian background */}
      <div className="fixed inset-0 -z-10 bg-[var(--obsidian)]" />
      
      {/* Subtle noise texture for depth */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Centered pill navigation */}
      <PillNavigation />
      
      {/* Main content */}
      <main id="main-content">
        <IndustrialHero />
        <IndustrialProjects />
        <IndustrialProcess />
        <IndustrialTestimonials />
        <IndustrialAbout />
        <IndustrialFooter />
      </main>
    </div>
  );
}
