import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function LaserLoader({ onComplete }: { onComplete: () => void }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Loader runs for exactly 1.8 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
      // Wait for exit animation before calling onComplete
      setTimeout(onComplete, 300);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          {/* Pure black background that transitions to obsidian */}
          <motion.div
            initial={{ backgroundColor: "#000000" }}
            animate={{ backgroundColor: "#050505" }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          />

          {/* Coordinate point in center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-[10px] text-[var(--tertiary-text)] tracking-wider">
                [0,0]
              </span>
            </div>
          </motion.div>

          {/* Horizontal laser line that sweeps from top to bottom */}
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{ 
              duration: 1.8, 
              ease: [0.33, 1, 0.68, 1],
              delay: 0 
            }}
            className="absolute left-0 right-0 h-px will-change-transform gpu-accelerated"
          >
            {/* Main laser line */}
            <div className="absolute inset-0 bg-[var(--accent)]" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 blur-sm bg-[var(--accent)]" />
            <div className="absolute inset-0 blur-md bg-[var(--accent)] opacity-50" />
          </motion.div>

          {/* Watermark signature revealed by the laser */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ 
                duration: 1.8, 
                ease: [0.33, 1, 0.68, 1] 
              }}
              className="text-center will-change-transform"
            >
              <h1 
                className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none tracking-tighter whitespace-nowrap"
                style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
              >
                MOHAMMED
                <br />
                SHAIBAAZ
                <br />
                UDDIN
              </h1>
            </motion.div>
          </div>

          {/* Loading progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex items-center gap-4">
              <div className="w-32 md:w-48 h-px bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "linear" }}
                  className="h-full bg-[var(--accent)]"
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-xs text-[var(--tertiary-text)] tracking-wider"
              >
                <motion.span
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  LOADING
                </motion.span>
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}