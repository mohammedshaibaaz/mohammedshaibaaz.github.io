import { motion } from "motion/react";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ContactModal } from "./ContactModal";

function CTAButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      whileTap={isMobile ? { scale: 0.98 } : {}}
      className="group relative inline-flex items-center gap-4 px-10 md:px-12 py-5 md:py-6 rounded-2xl font-mono text-base md:text-lg overflow-hidden min-h-[56px] justify-center will-change-transform gpu-accelerated"
      style={{
        background: "rgba(17, 17, 17, 0.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* Animated background */}
      <motion.div
        animate={{
          scaleX: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="absolute inset-0 bg-[var(--accent)] origin-left"
      />

      <span 
        className="relative z-10 flex items-center gap-3 transition-colors"
        style={{ color: isHovered ? "#050505" : "#ffffff" }}
      >
        Start a Conversation
        <motion.span
          animate={{ 
            x: isHovered ? 4 : 0,
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
        </motion.span>
      </span>
    </motion.button>
  );
}

export function IndustrialFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/mohammedshaibaaz" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-shaibaaz-uddin" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/__mohd__shabaaz__/" },
  ];

  return (
    <footer id="contact" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="relative mb-20 md:mb-32 will-change-transform"
        >
          <div className="borderless-card rounded-[3rem] p-12 md:p-16 lg:p-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-xs text-[var(--tertiary-text)] tracking-wider uppercase">
                Available for Projects
              </span>
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-none"
              style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
            >
              Let's Build Something Exceptional
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
              Currently seeking opportunities to contribute to real-world projects through frontend internships and freelance collaborations. Let's transform technical constraints into intentional digital experiences.
            </p>

            <CTAButton onClick={() => setIsModalOpen(true)} />

            <div className="mt-12 pt-8 border-t border-[var(--border)] space-y-2">
              <p className="text-sm md:text-base text-[var(--secondary-text)] font-mono">
                Email: mohdshabaaz1919@gmail.com
              </p>
              <p className="text-xs md:text-sm text-[var(--tertiary-text)] uppercase tracking-wider font-mono">
                Response Time: &lt; 24 Hours
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-[var(--border)]"
        >
          {/* Branding */}
          <div>
            <div 
              className="text-2xl mb-2"
              style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
            >
              Mohammed Shaibaaz Uddin
            </div>
            <div className="font-mono text-sm text-[var(--secondary-text)]">
              Creative Technologist
            </div>
            <div className="font-mono text-xs text-[var(--tertiary-text)] mt-1">
              Web Engineering & UI Design
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--tertiary-text)] mb-4 font-mono">
              Navigation
            </h4>
            <div className="space-y-2">
              <a
                href="#projects"
                className="block font-mono text-sm text-[var(--secondary-text)] hover:text-[var(--accent)] transition-colors"
              >
                Work
              </a>
              <a
                href="#process"
                className="block font-mono text-sm text-[var(--secondary-text)] hover:text-[var(--accent)] transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                className="block font-mono text-sm text-[var(--secondary-text)] hover:text-[var(--accent)] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--tertiary-text)] mb-4 font-mono">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "0.5px solid rgba(255, 255, 255, 0.05)",
                    }}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-[var(--secondary-text)] hover:text-[var(--accent)]" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-mono text-xs text-[var(--tertiary-text)]">
            © {new Date().getFullYear()} Mohammed Shaibaaz Uddin. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-mono text-xs text-[var(--tertiary-text)]">
              System Status: Operational
            </span>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
