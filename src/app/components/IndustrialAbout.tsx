import { motion } from "motion/react";

const expertise = [
  { area: "UI & Visual Design", level: 98, description: "Translating complex brand intent into minimal, intentional interfaces with a focus on hierarchy and white space." },
  { area: "Responsive Architecture", level: 95, description: "Engineering flexible grid systems that maintain structural integrity and performance across all device viewports." },
  { area: "AI-Assisted Workflows", level: 92, description: "Leveraging advanced prompt engineering and iterative refinement to accelerate design-to-code production cycles." },
  { area: "Interaction Logic", level: 88, description: "Designing smooth micro-interactions and navigation flows inspired by the strategic pacing of chess and visual narratives." },
  { area: "Brand Systems", level: 85, description: "Developing consistent design languages, from typography selection to color systems, that reflect premium brand positioning." },
];

const techStack = {
  frontend: ["HTML5", "CSS3", "JavaScript Basics", "Figma", "Responsive Design"],
  backend: ["MongoDB (AI-Assisted)", "SQL Basics", "Python Fundamentals"],
  tools: ["GitHub", "Prompt Engineering", "Browser Dev Tools"]
};

export function IndustrialAbout() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
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
              Profile
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-none"
            style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
          >
            Engineering Philosophy
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--border)] p-px rounded-3xl overflow-hidden">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="bg-[var(--obsidian)] lg:row-span-2 will-change-transform"
          >
            <div className="h-full borderless-card rounded-none p-8 md:p-12">
              <h3 
                className="text-2xl md:text-3xl mb-6"
                style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
              >
                Bridging Narrative Intent & Technical Precision
              </h3>
              
              <div className="space-y-6 text-[var(--secondary-text)] leading-relaxed text-base md:text-lg">
                <div>
                  <h4 className="text-[var(--foreground)] font-semibold mb-3 text-lg">The Core Philosophy</h4>
                  <p>
                    Digital experiences should not only look clean—they must feel deliberate. This principle guides the engineering process, where the focus remains on building responsive, visually balanced interfaces that perform with total consistency across all devices. By prioritizing layout structure and purposeful typography, every element is designed to serve a specific function, ensuring the final product feels intentional rather than overdone.
                  </p>
                </div>
                
                <div className="relative">
                  <h4 className="text-[var(--foreground)] font-semibold mb-3 text-lg">Analytical Influence</h4>
                  <p>
                    The approach is deeply influenced by the structural logic of chess and the pacing of visual storytelling. This background shapes a unique problem-solving framework—one that values long-term planning, structural integrity, and the careful pacing of user interactions. These influences translate into a design process where every decision is a calculated step toward a more cohesive and accessible user experience.
                  </p>
                  {/* Subtle chess knight icon */}
                  <div className="absolute -right-4 top-0 opacity-5 pointer-events-none select-none">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M19 22H5v-2h14v2m-1-10.8V10h-3v1H9c0-1.2.6-2 1.6-2.7.3-.2.8-.5 1.4-.9.5-.4.9-.7 1-1 .4-.4.7-.8.8-1.2.1-.4.2-.8.2-1.2 0-.8-.2-1.5-.6-2-.4-.5-1.1-.8-2-.8-.9 0-1.6.3-2 .9-.4.6-.6 1.3-.6 2.1H6c0-1.4.4-2.5 1.3-3.4S9.3 1 10.9 1c1.5 0 2.7.4 3.5 1.2.8.8 1.2 1.9 1.2 3.2 0 .6-.1 1.2-.4 1.7-.3.6-.6 1.1-1 1.5-.5.5-1.3 1.1-2.4 1.9-.6.4-.9.7-1.1.9-.1.1-.3.3-.3.5h6.3l-1.7 4.1z"/>
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[var(--foreground)] font-semibold mb-3 text-lg">Development Focus</h4>
                  <p>
                    Specialized in translating brand intent and visual direction into functional, modern landing pages and concept brand environments. Leveraging AI-assisted development workflows allows for the rapid iteration of complex UI components while maintaining a high standard for clean code and performance benchmarks.
                  </p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="mt-10 pt-8 border-t border-[var(--border)]">
                <h4 className="text-xs uppercase tracking-wider text-[var(--tertiary-text)] mb-6 font-mono">
                  The Tech Stack
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-[var(--accent)] mb-2 block">Frontend</span>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 text-sm rounded-lg font-mono text-[var(--secondary-text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
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
                  <div>
                    <span className="text-xs font-mono text-[var(--accent)] mb-2 block">Backend & Data</span>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 text-sm rounded-lg font-mono text-[var(--secondary-text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
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
                  <div>
                    <span className="text-xs font-mono text-[var(--accent)] mb-2 block">Development Tools</span>
                    <div className="flex flex-wrap gap-2">
                      {techStack.tools.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 text-sm rounded-lg font-mono text-[var(--secondary-text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
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
              </div>
            </div>
          </motion.div>

          {/* Expertise bars */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="bg-[var(--obsidian)] will-change-transform"
          >
            <div className="h-full borderless-card rounded-none p-8 md:p-10">
              <h3 className="text-sm uppercase tracking-wider text-[var(--tertiary-text)] mb-8 font-mono">
                Core Expertise
              </h3>

              <div className="space-y-8">
                {expertise.map((skill, index) => (
                  <div key={skill.area}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-mono text-sm text-[var(--foreground)]">
                        {skill.area}
                      </span>
                      <span className="font-mono text-xs text-[var(--accent)]">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs text-[var(--tertiary-text)] leading-relaxed mb-3">
                      {skill.description}
                    </p>
                    <div className="relative h-0.5 bg-[var(--border)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.2 + index * 0.1,
                          ease: [0.33, 1, 0.68, 1] 
                        }}
                        className="absolute top-0 left-0 h-full bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="bg-[var(--obsidian)] will-change-transform"
          >
            <div className="h-full borderless-card rounded-none p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-sm uppercase tracking-wider text-[var(--tertiary-text)] mb-8 font-mono">
                Status & Metrics
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl md:text-4xl font-mono text-[var(--accent)] mb-2">
                    2024–2028
                  </div>
                  <div className="text-xs font-mono text-[var(--tertiary-text)] uppercase tracking-wider">
                    B.E. in AI & Machine Learning
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-mono text-[var(--accent)] mb-2">
                    Open
                  </div>
                  <div className="text-xs font-mono text-[var(--tertiary-text)] uppercase tracking-wider">
                    For Frontend Internships & Freelance
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-mono text-[var(--accent)] mb-2">
                    05+
                  </div>
                  <div className="text-xs font-mono text-[var(--tertiary-text)] uppercase tracking-wider">
                    Completed Portfolio Concept Projects
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
