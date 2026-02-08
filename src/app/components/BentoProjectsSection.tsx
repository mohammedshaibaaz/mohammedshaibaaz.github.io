import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Zap } from "lucide-react";
import { Link } from "react-router";

const projects = [
  {
    id: "veltrin",
    title: "Analytics Dashboard",
    problem: "Real-time data visualization platform for enterprise metrics",
    stack: ["React", "TypeScript", "D3.js"],
    size: "large", // large takes 2 columns
    gradient: "from-violet-500/30 via-purple-600/20 to-transparent",
    color: "#8b5cf6"
  },
  {
    id: "ember-cafe",
    title: "E-Commerce Platform",
    problem: "High-converting checkout with advanced product filtering",
    stack: ["Next.js", "Stripe", "Vercel"],
    size: "small",
    gradient: "from-cyan-500/30 via-blue-600/20 to-transparent",
    color: "#06b6d4"
  },
  {
    id: "scale-now",
    title: "SaaS Onboarding",
    problem: "Interactive user activation flow with 60% completion rate",
    stack: ["React", "Motion", "Radix UI"],
    size: "small",
    gradient: "from-pink-500/30 via-rose-600/20 to-transparent",
    color: "#ec4899"
  },
  {
    id: "pulse",
    title: "FinTech Dashboard",
    problem: "Real-time financial tracking with AI-powered insights",
    stack: ["React", "Chart.js", "WebSocket"],
    size: "medium",
    gradient: "from-emerald-500/30 via-green-600/20 to-transparent",
    color: "#10b981"
  },
  {
    id: "aurivane",
    title: "Social Platform",
    problem: "Content-driven community with advanced moderation tools",
    stack: ["Next.js", "PostgreSQL", "Redis"],
    size: "medium",
    gradient: "from-orange-500/30 via-amber-600/20 to-transparent",
    color: "#f59e0b"
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  
  const imageScale = useSpring(1, { stiffness: 300, damping: 20 });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    imageScale.set(1.05);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    imageScale.set(1);
  };

  // Bento box sizing classes
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={isMobile ? { scale: 0.98 } : {}}
      className={`relative ${sizeClasses[project.size as keyof typeof sizeClasses]} min-h-[320px] md:min-h-0`}
    >
      <Link to={`/project/${project.id}`} className="block h-full">
        <motion.div
          style={isMobile ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-full group"
        >
          {/* Glow effect */}
          <motion.div
            animate={{ opacity: isHovered ? 0.6 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute -inset-1 rounded-3xl blur-2xl"
            style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
          />

          {/* Glassmorphic card */}
          <div className="relative h-full glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
            
            {/* Image/Visual area with scale effect */}
            <motion.div
              style={{ scale: imageScale }}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              {/* Animated pattern overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23fff' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Project icon */}
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.2 : 1,
                  rotate: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20"
                  style={{ background: `${project.color}20` }}
                >
                  <Zap className="w-10 h-10 md:w-12 md:h-12" style={{ color: project.color }} />
                </div>
              </motion.div>
            </motion.div>

            {/* Content overlay */}
            <div className="relative h-full flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[var(--midnight-obsidian)] via-[var(--midnight-obsidian)]/80 to-transparent">
              <motion.div
                animate={{ y: isHovered ? -6 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight pr-4">
                    {project.title}
                  </h3>
                  <motion.div
                    animate={{ 
                      x: isHovered ? 4 : 0,
                      y: isHovered ? -4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-[var(--accent)]" />
                  </motion.div>
                </div>

                <p className="text-[var(--secondary-text)] mb-4 leading-relaxed text-sm md:text-base">
                  {project.problem}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs md:text-sm rounded-lg glass font-mono text-[var(--secondary-text)] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Border glow on hover */}
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                boxShadow: `inset 0 0 40px ${project.color}40`,
              }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function BentoProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight leading-none">
            Featured Work
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] max-w-2xl leading-relaxed">
            Production-ready applications that drive measurable business outcomes
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-[minmax(300px,1fr)]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
