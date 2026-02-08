import { motion } from "motion/react";
import { Code2, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery & Strategy",
    description: "Defining core objectives, technical constraints, and data requirements. This stage establishes a strategic foundation, ensuring every decision aligns with the underlying \"why\" before execution begins.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Architecture & Design",
    description: "Transforming complex logic into high-fidelity digital systems. Focus remains on building scalable codebases and visual frameworks where structural integrity and premium aesthetics work in total harmony.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Analysis & Optimization",
    description: "A rigorous cycle of performance profiling and data auditing. Continuous refinement of speed, accessibility, and interaction accuracy ensures a frictionless experience under any technical condition.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Deployment & Insights",
    description: "Seamless production release followed by continuous analytical monitoring. Post-launch data provides the insights necessary to ensure the solution scales effectively and remains exceptional over time.",
  },
];

export function IndustrialProcess() {
  return (
    <section id="process" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16 md:mb-20 text-center will-change-transform"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs text-[var(--tertiary-text)] tracking-wider uppercase">
              Methodology
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-none"
            style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
          >
            Engineering Process
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] max-w-3xl mx-auto leading-relaxed">
            A systematic framework engineered for consistent, measurable results
          </p>
        </motion.div>

        {/* Process grid with thin borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] p-px rounded-3xl overflow-hidden">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.33, 1, 0.68, 1] 
                }}
                className="bg-[var(--obsidian)] group will-change-transform"
              >
                <div className="relative h-full borderless-card rounded-none p-8 md:p-12">
                  {/* Step number watermark */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8">
                    <span 
                      className="text-6xl md:text-7xl lg:text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity"
                      style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6 inline-block">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--accent)]/30 transition-colors">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-[var(--accent)]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-2xl md:text-3xl mb-4 relative z-10"
                    style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  
                  <p className="text-[var(--secondary-text)] leading-relaxed text-base md:text-lg relative z-10">
                    {step.description}
                  </p>

                  {/* Accent line on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 h-px bg-[var(--accent)] origin-left"
                    style={{ width: "100%" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
