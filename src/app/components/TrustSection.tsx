import { motion } from "motion/react";
import { Zap, Gauge, Code2 } from "lucide-react";

const trustItems = [
  {
    icon: Zap,
    title: "SaaS & Dashboards",
    description: "Complex data-driven applications built for scale and usability",
  },
  {
    icon: Gauge,
    title: "Performance First",
    description: "Optimized for speed with lighthouse scores of 95+",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Maintainable, well-documented code that your team can work with",
  },
];

export function TrustSection() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative p-8 lg:p-10 border border-[var(--border)] rounded-2xl hover:border-[var(--border-hover)] transition-all duration-500 bg-gradient-to-br from-[var(--card-bg)] to-transparent h-full">
                  {/* Subtle glow on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--accent)] to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-6 group-hover:bg-[var(--accent-glow)] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[var(--accent)]" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-[var(--secondary-text)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
