import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

// Character-spacing animation hook
function useCharacterSpacing(isHovered: boolean) {
  return {
    letterSpacing: isHovered ? "0.25rem" : "0rem",
    fontWeight: isHovered ? 400 : 700,
  };
}

// Global Signature Watermark - Traveling Spine with Subtle Parallax
function SignatureWatermark() {
  const { scrollY } = useScroll();
  
  // Very slow parallax: moves down as you scroll, but at 0.05x speed
  // This creates a subtle "traveling" effect across the entire page
  const y = useTransform(scrollY, (latest) => latest * 0.05);

  return (
    <div className="fixed right-[5vw] top-0 z-[-1] pointer-events-none select-none">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.06, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
        className="leading-none whitespace-nowrap text-white"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "10vh",
          letterSpacing: "0.25em",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          y,
        }}
      >
        SHAIBAAZ
      </motion.h1>
    </div>
  );
}

// Kinetic typography component with character-spacing animation
function KineticLink({ 
  children, 
  href, 
  onClick 
}: { 
  children: string; 
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      whileTap={isMobile ? { scale: 0.98 } : {}}
      animate={useCharacterSpacing(isHovered)}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="text-[var(--secondary-text)] hover:text-[var(--foreground)] transition-colors duration-300 font-mono text-sm tracking-wider uppercase relative will-change-transform"
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.a>
  );
}

export function IndustrialHero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 md:pt-24 pb-20 overflow-hidden">
      {/* Global Signature Watermark */}
      <SignatureWatermark />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Coordinate marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-12 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="font-mono text-xs text-[var(--tertiary-text)] tracking-wider">
            [0,0] → CREATIVE TECHNOLOGIST
          </span>
        </motion.div>

        {/* Main headline with staggered blur-in */}
        <div className="mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] leading-[0.95] mb-6 will-change-transform gpu-accelerated"
          >
            Architecting
          </motion.h2>
          
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] leading-[0.95] mb-6 will-change-transform gpu-accelerated"
          >
            High-Performance
          </motion.h2>
          
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] leading-[0.95] text-[var(--silver)] will-change-transform gpu-accelerated"
          >
            Digital Experiences
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--secondary-text)] mb-12 md:mb-16 max-w-3xl leading-relaxed will-change-transform"
        >
          I bridge the gap between complex engineering and premium design. 
          Specialized in creating conversion-driven interfaces that perform at scale.
        </motion.p>

        {/* CTA with character-spacing on hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8"
        >
          <KineticLink 
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#projects");
            }}
          >
            View Projects
          </KineticLink>
          
          <div className="w-px h-6 bg-[var(--border)] hidden sm:block" />
          
          <KineticLink 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            Start Project
          </KineticLink>
        </motion.div>

        {/* Metrics with thin borders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.33, 1, 0.68, 1] }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)]"
        >
          {[
            { value: "99+", label: "Lighthouse Score", unit: "" },
            { value: "<200ms", label: "Interaction Latency (Snappy UI)", unit: "" },
            { value: "60 FPS", label: "Animation Fluidity & Optimization", unit: "" },
            { value: "<24", label: "Response", unit: "h" },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.8, delay: 2.0 + index * 0.1 }}
              className="bg-[var(--obsidian)] p-6 md:p-8 text-center md:text-left will-change-transform"
            >
              <div className="font-mono text-3xl md:text-4xl mb-2 text-[var(--accent)]">
                {metric.value}
                <span className="text-lg text-[var(--silver)]">{metric.unit}</span>
              </div>
              <div className="text-xs md:text-sm text-[var(--tertiary-text)] uppercase tracking-wider font-mono">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-[var(--tertiary-text)] tracking-wider">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}