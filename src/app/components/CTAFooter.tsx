import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function MagneticCTA() {
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

    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href="mailto:hello@shabaaz.dev"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? {} : { x: springX, y: springY }}
      whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
      whileHover={{ scale: 1.03 }}
      className="group relative inline-flex items-center gap-4 px-10 md:px-12 py-5 md:py-6 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] text-white rounded-2xl font-bold text-lg md:text-xl shadow-2xl shadow-[var(--accent-glow)] overflow-hidden min-h-[56px] justify-center"
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--accent)]"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Pulse ring */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-2xl border-4 border-white/30"
      />

      <span className="relative z-10 flex items-center gap-3">
        <Mail className="w-6 h-6" />
        Let's Build Together
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.span>
      </span>
    </motion.a>
  );
}

export function CTAFooter() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <footer id="contact" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="relative mb-20 md:mb-32"
        >
          {/* Background glow */}
          <div className="absolute -inset-20 bg-gradient-to-r from-[var(--accent)] via-[var(--secondary-accent)] to-[var(--aurora-pink)] rounded-full opacity-10 blur-3xl" />
          
          {/* Content */}
          <div className="relative glass-strong rounded-[3rem] p-12 md:p-16 lg:p-20 text-center border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight leading-none">
                Ready to Build<br />Something Amazing?
              </h2>
              
              <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
                Let's turn your vision into a high-performing digital product that drives real results
              </p>

              <MagneticCTA />

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-sm md:text-base text-[var(--tertiary-text)] uppercase tracking-wider font-bold">
                  Typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5"
        >
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">Mohd Shabaaz</div>
            <div className="text-[var(--secondary-text)]">
              Web Developer & UI Engineer
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl glass border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-[var(--secondary-text)] group-hover:text-[var(--accent)] transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center text-[var(--tertiary-text)] text-sm"
        >
          © {new Date().getFullYear()} Mohd Shabaaz. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
