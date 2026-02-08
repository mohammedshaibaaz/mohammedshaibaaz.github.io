import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

// Magnetic button component
function MagneticButton({ 
  children, 
  className = "",
  href,
  onClick
}: { 
  children: React.ReactNode; 
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pull effect (max 20px)
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = motion.a;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? {} : { x: springX, y: springY }}
      whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
      className={className}
    >
      {children}
    </Component>
  );
}

// Liquid text reveal component
function LiquidText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");

  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4 md:mr-6">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ 
                opacity: 0, 
                y: 50,
                filter: "blur(10px)",
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: delay + (wordIndex * 0.1) + (charIndex * 0.03),
                ease: [0.33, 1, 0.68, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export function EliteHeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 md:pt-24 pb-20">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main headline with liquid text reveal */}
        <div className="mb-10 md:mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-black tracking-tighter leading-none">
            <LiquidText text="I build high-" delay={0} />
            <br />
            <LiquidText text="performance," delay={0.3} />
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--aurora-purple)] to-[var(--aurora-pink)] bg-clip-text text-transparent">
              <LiquidText text="conversion-driven" delay={0.6} />
            </span>
            <br />
            <LiquidText text="digital experiences" delay={0.9} />
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--secondary-text)] mb-12 md:mb-16 max-w-3xl leading-relaxed"
        >
          for modern startups who need more than just pretty designs—they need results that scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
        >
          {/* Magnetic primary button */}
          <MagneticButton
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#projects");
            }}
            className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] text-white rounded-2xl font-bold text-base md:text-lg shadow-2xl shadow-[var(--accent-glow)] overflow-hidden min-w-[200px] sm:min-w-0 justify-center flex items-center gap-3 min-h-[48px]"
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--accent)]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
          </MagneticButton>

          {/* Magnetic secondary button */}
          <MagneticButton
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="group px-8 md:px-10 py-4 md:py-5 glass-strong text-white rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 min-w-[200px] sm:min-w-0 justify-center flex items-center min-h-[48px]"
          >
            Start a Project
          </MagneticButton>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1, ease: [0.33, 1, 0.68, 1] }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "2.5x", label: "Avg. Conversion Lift" },
            { value: "24h", label: "Response Time" },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.3 + index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-[var(--secondary-text)]">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-11 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-2.5 bg-[var(--accent)] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
