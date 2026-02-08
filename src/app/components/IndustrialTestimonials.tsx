import { motion } from "motion/react";

const testimonials = [
  {
    name: "Performance Optimization",
    role: "Benchmark: 99+ Lighthouse Score",
    company: "",
    quote: "Every project is engineered for sub-second load times and optimal Core Web Vitals. Meticulous code splitting and asset optimization ensure a \"blazing-fast\" experience across all devices and network conditions.",
    metric: "99+",
    metricLabel: "Lighthouse Score",
  },
  {
    name: "Interaction Fidelity",
    role: "Benchmark: 60 FPS Animation Fluidity",
    company: "",
    quote: "High-fidelity motion systems are implemented with hardware acceleration. Transitions and micro-interactions are tested rigorously to maintain a consistent 60 frames per second, ensuring the interface feels premium and responsive.",
    metric: "60 FPS",
    metricLabel: "Animation Fluidity",
  },
  {
    name: "Technical Architecture",
    role: "Benchmark: 100% Scalable Codebase",
    company: "",
    quote: "Built with modular, reusable component architectures. Using strict TypeScript and clean-code principles, every application is designed to be easily maintainable and ready for large-scale production deployment.",
    metric: "100%",
    metricLabel: "Scalable Codebase",
  },
  {
    name: "Operational Efficiency",
    role: "Benchmark: <200ms Server Response",
    company: "",
    quote: "Back-end logic and API integrations are optimized for minimal latency. Systematic data handling ensures that user interactions—from complex filtering to real-time updates—feel instantaneous and reliable.",
    metric: "<200ms",
    metricLabel: "Server Response",
  },
];

export function IndustrialTestimonials() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
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
              Technical Standards
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-none"
            style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
          >
            Success Metrics
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] max-w-3xl mx-auto leading-relaxed">
            Quantifiable benchmarks from production-ready applications
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] p-px rounded-3xl overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
              <div className="relative h-full borderless-card rounded-none p-12 md:p-16">
                {/* Metric watermark */}
                <div className="absolute top-6 right-6 text-right">
                  <div className="font-mono text-2xl md:text-3xl text-[var(--accent)] mb-1">
                    {testimonial.metric}
                  </div>
                  <div className="font-mono text-xs text-[var(--tertiary-text)]">
                    {testimonial.metricLabel}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[var(--primary-text)] leading-relaxed mb-8 text-base md:text-lg pr-20">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-[var(--border)]">
                  <div className="font-mono text-sm mb-1">
                    {testimonial.name}
                  </div>
                  <div className="font-mono text-xs text-[var(--tertiary-text)]">
                    {testimonial.role}
                  </div>
                </div>

                {/* Accent indicator */}
                <div className="absolute bottom-0 left-0 w-1 h-16 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
