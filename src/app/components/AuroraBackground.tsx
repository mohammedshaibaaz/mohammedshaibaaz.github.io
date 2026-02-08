import { motion, useScroll, useTransform } from "motion/react";

export function AuroraBackground() {
  const { scrollY } = useScroll();
  
  // Parallax effect - background moves slower (0.2x speed)
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.7]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base midnight obsidian background */}
      <div className="absolute inset-0 bg-[var(--midnight-obsidian)]" />

      {/* Animated Aurora mesh gradient */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        {/* Purple orb */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle, var(--aurora-purple) 0%, transparent 70%)`,
          }}
        />

        {/* Cyan orb */}
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle, var(--aurora-cyan) 0%, transparent 70%)`,
          }}
        />

        {/* Pink accent orb */}
        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -80, 80, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: `radial-gradient(circle, var(--aurora-pink) 0%, transparent 70%)`,
          }}
        />

        {/* Secondary purple orb */}
        <motion.div
          animate={{
            x: [0, -120, 60, 0],
            y: [0, 80, -100, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/3 w-[550px] h-[550px] rounded-full opacity-25 blur-3xl"
          style={{
            background: `radial-gradient(circle, var(--aurora-purple-light) 0%, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--midnight-obsidian)]/50 to-[var(--midnight-obsidian)]" />
    </div>
  );
}
