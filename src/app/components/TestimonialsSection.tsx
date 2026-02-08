import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    company: "SaaS Platform",
    quote: "Shabaaz transformed our vision into a conversion machine. Our user activation rate jumped 60% within the first month. His attention to detail and understanding of user psychology is unmatched.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Product, FinFlow",
    company: "FinTech Dashboard",
    quote: "Working with Shabaaz felt like having a senior product engineer on the team. He didn't just build what we asked for—he challenged our assumptions and delivered something better.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Emily Thompson",
    role: "Founder, ShopLocal",
    company: "E-Commerce Platform",
    quote: "Our conversion rate doubled after the redesign. Shabaaz built a blazing-fast checkout experience that actually feels premium. Best investment we made this year.",
    rating: 5,
    avatar: "ET",
  },
  {
    name: "David Kim",
    role: "CTO, DataViz Pro",
    company: "Analytics Platform",
    quote: "Clean code, excellent architecture, and delivered ahead of schedule. Shabaaz is the rare developer who understands both the technical and business side equally well.",
    rating: 5,
    avatar: "DK",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
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
            Client Success Stories
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] max-w-3xl mx-auto leading-relaxed">
            Real results from real partnerships
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
              <div className="absolute -inset-1 bg-gradient-to-br from-[var(--accent)] via-[var(--secondary-accent)] to-[var(--aurora-pink)] rounded-3xl opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative h-full glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--secondary-accent)]/20 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[var(--accent)] text-[var(--accent)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[var(--primary-text)] leading-relaxed mb-8 text-base md:text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--secondary-accent)] flex items-center justify-center font-bold text-white text-lg">
                    {testimonial.avatar}
                  </div>

                  <div>
                    <div className="font-bold text-lg mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-[var(--secondary-text)] text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-[var(--tertiary-text)] text-xs mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
