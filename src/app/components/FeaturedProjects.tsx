import { motion, useMotionValue, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const projects = [
  {
    id: "veltrin",
    title: "Analytics Dashboard",
    problem: "Real-time data visualization for enterprise clients",
    stack: ["React", "TypeScript", "D3.js", "TailwindCSS"],
    outcome: "40% faster load times, 95+ Lighthouse score",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "ember-cafe",
    title: "E-Commerce Platform",
    problem: "Scalable shopping experience with complex product filtering",
    stack: ["Next.js", "React Query", "Stripe", "Vercel"],
    outcome: "2x conversion rate, sub-second page loads",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "scale-now",
    title: "SaaS Onboarding Flow",
    problem: "Streamlined user activation and feature discovery",
    stack: ["React", "Motion", "Radix UI", "Zustand"],
    outcome: "60% increase in user activation rate",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Link to={`/project/${project.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-2xl overflow-hidden"
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-2xl opacity-0 blur-xl transition-opacity duration-500"
            animate={{ opacity: isHovered ? 0.15 : 0 }}
          />

          <div className="relative bg-gradient-to-br from-[var(--card-bg)] to-[var(--background-subtle)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--border-hover)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project visual with gradient */}
              <div className={`relative aspect-video lg:aspect-square bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Subtle pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23fff' fill-opacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                {/* Animated gradient orb */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: isHovered
                      ? `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(139, 127, 184, 0.2) 0%, transparent 50%)`
                      : "none",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* View project indicator */}
                <motion.div
                  animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5"
                >
                  <ArrowUpRight className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              {/* Project details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-transparent to-[var(--background-subtle)]/30">
                <motion.div
                  animate={{ y: isHovered ? -4 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[var(--secondary-text)] mb-6 leading-relaxed text-lg">
                    {project.problem}
                  </p>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] font-mono text-[var(--tertiary-text)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--border)]">
                    <p className="text-sm text-[var(--tertiary-text)] mb-2 uppercase tracking-wider font-medium">
                      Outcome
                    </p>
                    <p className="font-semibold text-[var(--primary-text)]">
                      {project.outcome}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 md:py-40 lg:py-48 px-6 md:px-12 lg:px-24 bg-[var(--background-subtle)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-[var(--secondary-text)] max-w-2xl">
            Production-ready applications built for real clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
