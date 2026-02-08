import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Tablet Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-7xl hidden md:block"
      >
        <div className="glass-strong rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            whileHover={{ fontWeight: 700 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-semibold tracking-tight"
            style={{ fontWeight: 400 }}
          >
            Mohd Shabaaz
          </motion.a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-[var(--secondary-text)] hover:text-white transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Start a Project Button with Pulse */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] text-white rounded-xl font-semibold shadow-lg overflow-hidden"
            >
              {/* Pulse animation */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] rounded-xl"
              />
              <span className="relative z-10">Start a Project</span>
            </motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:hidden"
      >
        <div className="glass-strong rounded-2xl px-5 py-4 flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-semibold tracking-tight"
          >
            Mohd Shabaaz
          </motion.a>

          {/* Hamburger Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] md:hidden"
      >
        <div className="glass-strong rounded-2xl p-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="text-[var(--secondary-text)] hover:text-white transition-colors duration-300 font-medium text-lg py-2"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 px-6 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] text-white rounded-xl font-semibold shadow-lg text-center min-h-[48px] flex items-center justify-center"
            >
              Start a Project
            </motion.a>
          </nav>
        </div>
      </motion.div>
    </>
  );
}
