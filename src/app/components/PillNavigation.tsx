import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Character-spacing animation for nav links
function NavLink({ 
  children, 
  href,
  onClick,
  isActive = false
}: { 
  children: string; 
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  isActive?: boolean;
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
      animate={{
        letterSpacing: isHovered ? "0.2rem" : "0rem",
        fontWeight: isHovered ? 400 : 600,
      }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="relative text-[var(--secondary-text)] hover:text-[var(--foreground)] transition-colors duration-300 font-mono text-xs md:text-sm tracking-wider uppercase will-change-transform"
      style={{ display: "inline-block" }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--accent)]"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.a>
  );
}

export function PillNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ["projects", "process", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section === "projects" ? "work" : section);
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string, sectionName: string) => {
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { label: "Work", href: "#projects", section: "work" },
    { label: "Process", href: "#process", section: "process" },
    { label: "Contact", href: "#contact", section: "contact" },
  ];

  return (
    <>
      {/* Desktop Navigation - Centered Pill at Top */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="glass-pill rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl shadow-black/50">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href, link.section);
              }}
              isActive={activeSection === link.section}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation - Bottom Pill for One-Handed Use */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <div className="glass-pill rounded-full px-6 py-4 flex items-center gap-6 shadow-2xl shadow-black/50">
          {isMobileMenuOpen ? (
            <>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <NavLink
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href, link.section);
                    }}
                    isActive={activeSection === link.section}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </>
          ) : (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </motion.nav>
    </>
  );
}