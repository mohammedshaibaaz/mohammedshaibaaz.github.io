import { motion } from "motion/react";
import { Globe, Layout, Gauge, BarChart } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack applications with modern frameworks and best practices",
  },
  {
    icon: Layout,
    title: "Frontend Architecture",
    description: "Scalable component systems and state management solutions",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description: "Core Web Vitals optimization and lighthouse score improvements",
  },
  {
    icon: BarChart,
    title: "Data Dashboards & SaaS UI",
    description: "Complex data visualization and admin panel development",
  },
];

export function SkillsSection() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Skills & Services
          </h2>
          <p className="text-xl md:text-2xl text-[var(--secondary-text)] max-w-2xl mx-auto">
            Specialized expertise in building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative p-8 lg:p-10 border border-[var(--border)] rounded-2xl hover:border-[var(--border-hover)] transition-all duration-500 bg-gradient-to-br from-[var(--card-bg)] to-transparent h-full">
                  {/* Subtle glow on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--accent)] to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-glow)] transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[var(--accent)]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-[var(--secondary-text)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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
