import { motion } from "motion/react";
import { Lightbulb, Code, Rocket, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery & Strategy",
    description: "Deep-dive into your business goals, target audience, and competitive landscape to craft a winning strategy.",
  },
  {
    icon: Code,
    number: "02",
    title: "Design & Development",
    description: "Build pixel-perfect, high-performance interfaces with clean, maintainable code architecture.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Testing & Optimization",
    description: "Rigorous QA, performance tuning, and conversion rate optimization before launch.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Launch & Scale",
    description: "Smooth deployment with ongoing support, monitoring, and iterative improvements.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight leading-none">
            My Process
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] max-w-3xl mx-auto leading-relaxed">
            A proven framework that delivers results every time
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.33, 1, 0.68, 1] 
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-accent)] rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent">
                  {/* Step number */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8">
                    <span className="text-6xl md:text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 mb-6"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--secondary-accent)] flex items-center justify-center shadow-lg shadow-[var(--accent-glow)]">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-[var(--secondary-text)] leading-relaxed text-base md:text-lg relative z-10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
