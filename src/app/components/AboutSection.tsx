import { motion } from "motion/react";
import { Code2, Zap, Users, Award } from "lucide-react";

const skills = [
  { icon: Code2, label: "React & Next.js", level: 95 },
  { icon: Zap, label: "Performance Optimization", level: 98 },
  { icon: Users, label: "UX Engineering", level: 92 },
  { icon: Award, label: "Conversion Design", level: 90 },
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2.5x", label: "Avg. ROI Increase" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight leading-none">
            About Me
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] max-w-3xl leading-relaxed">
            I'm Mohd Shabaaz, a web developer who bridges the gap between design and engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Building experiences that convert
              </h3>
              
              <div className="space-y-4 text-[var(--secondary-text)] leading-relaxed text-base md:text-lg">
                <p>
                  I specialize in creating high-performance web applications for startups and scale-ups. 
                  My approach combines technical excellence with business strategy—because beautiful code 
                  means nothing if it doesn't drive results.
                </p>
                
                <p>
                  Over the past 6+ years, I've helped dozens of companies launch and scale their digital 
                  products. From early-stage MVPs to enterprise-grade platforms, I focus on what matters: 
                  speed, conversion, and maintainability.
                </p>
                
                <p>
                  When I'm not coding, I'm studying user behavior patterns, optimizing Core Web Vitals, 
                  or experimenting with the latest web technologies to stay ahead of the curve.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-center"
                >
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-[var(--secondary-text)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/10 bg-gradient-to-br from-white/5 to-transparent h-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Core Expertise
              </h3>

              <div className="space-y-8">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--secondary-accent)]/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[var(--accent)]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-lg">{skill.label}</span>
                            <span className="text-[var(--secondary-text)] text-sm font-mono">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1.5, 
                                delay: 0.3 + index * 0.1,
                                ease: [0.33, 1, 0.68, 1] 
                              }}
                              className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tech stack tags */}
              <div className="mt-10 pt-8 border-t border-white/5">
                <h4 className="text-sm uppercase tracking-wider text-[var(--tertiary-text)] mb-4 font-bold">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind", "Motion", "Node.js", "PostgreSQL", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 text-sm rounded-lg glass border border-white/5 font-mono text-[var(--secondary-text)] hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
