import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Subtle glow background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-3xl opacity-10 blur-2xl" />
          
          <div className="relative text-center border border-[var(--border)] rounded-3xl p-12 md:p-16 lg:p-20 bg-gradient-to-br from-[var(--card-bg)] via-[var(--background-subtle)] to-[var(--card-bg)]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Let's Build Something Great
            </h2>

            <p className="text-xl md:text-2xl text-[var(--secondary-text)] mb-12 max-w-2xl mx-auto leading-relaxed">
              Looking for a developer who understands both code and business outcomes? 
              Let's discuss your project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.a
                href="mailto:hello@developer.com"
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(139, 127, 184, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group px-9 py-4 bg-[var(--accent)] text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:bg-[var(--accent-hover)] transition-all duration-300 min-w-[200px] justify-center"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.a>
            </div>

            <div className="pt-8 border-t border-[var(--border)]">
              <p className="text-sm text-[var(--tertiary-text)] uppercase tracking-wider font-medium">
                Typically respond within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-[var(--border)]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[var(--tertiary-text)]">
            © 2026 Web Developer Portfolio. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["LinkedIn", "GitHub", "Twitter"].map((platform, index) => (
              <motion.a
                key={platform}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2, color: "var(--accent)" }}
                className="text-[var(--secondary-text)] hover:text-[var(--accent)] transition-colors font-medium"
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
