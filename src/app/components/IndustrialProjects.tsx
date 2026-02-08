import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const projects = [
  {
    id: "veltrin",
    title: "VELTRIN",
    tagline: "HERITAGE & PRECISION",
    description: "A high-fidelity e-commerce experience for a luxury watch brand. Engineered with sub-second page transitions and custom micro-interactions to reflect brand craftsmanship.",
    stack: ["Next.js", "Framer Motion", "Luxury UI"],
    size: "large",
    color: "#ffffff"
  },
  {
    id: "ember-cafe",
    title: "EMBER CAFE",
    tagline: "TACTILE & MODERN",
    description: "A warm-minimalist digital extension of a specialty coffee house. Balancing organic textures with modern performance and an intuitive menu architecture.",
    stack: ["Responsive UX", "Design", "Brand Identity"],
    size: "small",
    color: "#c0c0c0"
  },
  {
    id: "scale-now",
    title: "SCALE NOW",
    tagline: "GROWTH & PERFORMANCE",
    description: "A conversion-focused platform for a modern digital agency. Designed for speed and clarity, featuring a modular grid system and optimized asset delivery.",
    stack: ["Performance", "Scalable UI", "Business Strategy"],
    size: "small",
    color: "#fafafa"
  },
  {
    id: "pulse",
    title: "PULSE",
    tagline: "BOLD & FUNCTIONAL",
    description: "A performance-centric fitness platform designed for clarity. Focused on user flow optimization, booking systems, and a high-energy visual discipline.",
    stack: ["User Flow", "Functional UI", "App Design"],
    size: "medium",
    color: "#d8d8d8"
  },
  {
    id: "aurivane",
    title: "AURIVANE",
    tagline: "ATMOSPHERE & STORYTELLING",
    description: "A sensorial digital journey for a premium fragrance line. Built with a custom typography system and fluid, scroll-based motion to reflect brand elegance.",
    stack: ["React", "Fluid Motion", "Editorial Design"],
    size: "medium",
    color: "#f0f0f0"
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
      whileTap={isMobile ? { scale: 0.98 } : {}}
      className={`relative ${sizeClasses[project.size as keyof typeof sizeClasses]} min-h-[320px] md:min-h-0 will-change-transform`}
    >
      <Link to={`/project/${project.id}`} className="block h-full">
        <div
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          className="relative h-full group"
        >
          {/* Borderless card with depth via shadow */}
          <motion.div
            animate={{
              boxShadow: isHovered 
                ? `0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 0 40px ${project.color}20, 0 12px 48px rgba(0, 0, 0, 0.7)`
                : "0 0 0 0.5px rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.6)"
            }}
            transition={{ duration: 0.4 }}
            className="h-full rounded-3xl overflow-hidden backdrop-blur-xl will-change-transform gpu-accelerated"
            style={{
              background: "rgba(17, 17, 17, 0.5)",
            }}
          >
            {/* Subtle gradient overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at top right, ${project.color} 0%, transparent 50%)`
              }}
            />

            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-10 md:p-12">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="font-mono text-xs text-[var(--tertiary-text)] tracking-wider uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <motion.div
                  animate={{ 
                    x: isHovered ? 4 : 0,
                    y: isHovered ? -4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ color: project.color }}
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </div>

              {/* Main content */}
              <div>
                <motion.h3
                  animate={{
                    letterSpacing: isHovered ? "0.05em" : "0em",
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight will-change-transform"
                  style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
                >
                  {project.title}
                </motion.h3>

                <div className="font-mono text-xs tracking-[0.25em] text-[var(--tertiary-text)] uppercase mb-4">
                  {project.tagline}
                </div>

                <p className="text-[var(--secondary-text)] mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs rounded-lg font-mono text-[var(--tertiary-text)]"
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "0.5px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-px origin-left"
              style={{ backgroundColor: project.color }}
            />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export function IndustrialProjects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16 md:mb-20 will-change-transform"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs text-[var(--tertiary-text)] tracking-wider uppercase">
              Selected Projects
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-none"
            style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
          >
            Featured Work
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] max-w-2xl leading-relaxed">
            Production-ready applications engineered for performance and conversion
          </p>
        </motion.div>

        {/* Bento Box Grid with 0.5px borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] p-px rounded-3xl overflow-hidden">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-[var(--obsidian)] ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : 
                index === 3 || index === 4 ? 'md:row-span-2' : ''
              }`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}