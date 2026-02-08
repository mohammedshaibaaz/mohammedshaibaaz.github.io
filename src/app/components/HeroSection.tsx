import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-muted)] via-transparent to-transparent opacity-40" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 127, 184, 0.1) 0%, transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            I build fast, scalable websites{" "}
            <span className="text-[var(--accent)]">for modern businesses</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-[var(--secondary-text)] mb-14 max-w-3xl mx-auto leading-relaxed"
          >
            Production-ready web applications with exceptional performance, clean code, and attention to detail
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="#projects">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(139, 127, 184, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group px-9 py-4 bg-[var(--accent)] text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:bg-[var(--accent-hover)] transition-all duration-300 min-w-[180px] justify-center"
              >
                View Projects
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>

            <Link to="#contact">
              <motion.button
                whileHover={{ scale: 1.03, borderColor: "var(--border-hover)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="px-9 py-4 border-2 border-[var(--border)] text-[var(--primary-text)] rounded-xl font-semibold hover:border-[var(--border-hover)] hover:bg-[var(--accent-muted)] transition-all duration-300 min-w-[180px]"
              >
                Contact
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Refined scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-11 border-2 border-[var(--border)] rounded-full flex items-start justify-center p-2"
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
