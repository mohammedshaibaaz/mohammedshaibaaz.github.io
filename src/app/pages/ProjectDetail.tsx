import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { PillNavigation } from "@/app/components/PillNavigation";
import { ContactModal } from "@/app/components/ContactModal";

const projectData: Record<string, any> = {
  "veltrin": {
    title: "VELTRIN",
    subtitle: "Luxury High-Fidelity Horology Experience",
    description: "An editorial digital environment designed to mirror the craftsmanship of luxury watchmaking. The platform translates brand heritage into a high-contrast interface where visual hierarchy and intentional spacing establish a premium market position.",
    problem: {
      title: "The Challenge",
      points: [
        "Translate high-end brand intent into a functional digital interface.",
        "Balance large-scale luxury imagery with optimized load performance.",
        "Ensure a 'silent luxury' aesthetic through restrained UI and deliberate typography.",
        "Maintain structural integrity and responsiveness on high-density displays."
      ]
    },
    solution: {
      title: "Technical Approach",
      points: [
        "Architected core sections to emphasize visual hierarchy and editorial spacing.",
        "Utilized AI-assisted workflows to refine interaction logic and layout responsiveness.",
        "Implemented custom CSS transitions to ensure fluid, premium page behavior.",
        "Integrated Google Analytics for professional user behavior auditing."
      ]
    },
    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "AI-Assisted Workflows", "Google Analytics"],
    results: [
      "99+ Lighthouse performance score for optimized asset delivery.",
      "< 1.2s Largest Contentful Paint (LCP) for instant brand immersion.",
      "100% responsive fidelity across mobile and high-DPI viewports.",
      "Successful implementation of brand-consistent contact flows."
    ],
    image: "/veltrin.png",
    liveUrl: "https://veltrin-luxury-watch.netlify.app/",
    githubUrl: "https://github.com/mohammedshaibaaz/veltrin-luxury-watch-website",
    color: "#ffffff"
  },
  "ember-cafe": {
    title: "EMBER CAFE",
    subtitle: "Editorial Specialty Coffee",
    description: "A calm, sensorial digital extension of a modern café. The project prioritizes 'Atmospheric UX,' using organic textures and generous white space to reflect a warm, intentional brand identity.",
    problem: {
      title: "The Challenge",
      points: [
        "Develop an editorial-style interface that maintains high usability on mobile.",
        "Plan a logical information architecture for complex menu and navigation flows.",
        "Ensure a crisp, readable typography system for a 'slow-living' user experience.",
        "Manage asset-heavy content without degrading performance on mobile networks."
      ]
    },
    solution: {
      title: "Technical Approach",
      points: [
        "Designed a mobile-first navigation flow and information architecture.",
        "Refined micro-interactions through iterative AI-assisted design cycles.",
        "Applied high-performance typography rendering for a crisp editorial feel.",
        "Established tracking systems to monitor engagement on inquiry forms."
      ]
    },
    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive Design", "Google Analytics"],
    results: [
      "95+ Accessibility score based on inclusive design fundamentals.",
      "Sub-second interaction latency for all menu navigation components.",
      "Zero Layout Shift (CLS) during high-resolution image rendering.",
      "Enhanced brand perception through purposeful use of negative space."
    ],
    image: "/ember.png",
    liveUrl: "https://mohammedshaibaaz.github.io/ember-cafe/",
    githubUrl: "https://github.com/mohammedshaibaaz/ember-cafe",
    color: "#c0c0c0"
  },
  "scale-now": {
    title: "SCALE NOW",
    subtitle: "Digital Agency Growth & Performance",
    description: "A conversion-focused platform for a modern digital agency. The design emphasizes speed, technical authority, and clear value communication for performance-driven clients.",
    problem: {
      title: "The Challenge",
      points: [
        "Build a modular and scalable component library for rapid service updates.",
        "Achieve a professional, neutral aesthetic that builds immediate technical trust.",
        "Optimize the technical architecture for maximum search engine visibility.",
        "Ensure sub-200ms interaction latency for a 'blazing-fast' experience."
      ]
    },
    solution: {
      title: "Technical Approach",
      points: [
        "Architected a clean, modular codebase using HTML5 and CSS3 fundamentals.",
        "Leveraged AI-assisted development workflows to accelerate feature deployment.",
        "Structured layout components for maximum scanability and conversion potential.",
        "Applied strict visual hierarchy to focus attention on agency metrics and results."
      ]
    },
    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "AI-Assisted Development", "SEO Optimization"],
    results: [
      "100/100 Lighthouse SEO score for technical accessibility.",
      "Sub-200ms Time to First Byte (TTFB) for rapid response.",
      "Instantaneous page transitions and navigation response times.",
      "Scalable architecture ready for future service expansion."
    ],
    image: "/scalenow.png",
    liveUrl: "https://scale-now-digital.vercel.app/",
    githubUrl: "https://github.com/mohammedshaibaaz/ScaleNow",
    color: "#fafafa"
  },
  "pulse": {
    title: "PULSE STRENGTH",
    subtitle: "High-Performance Training",
    description: "A performance-centric platform designed for functional clarity. Built for athletes, the interface eliminates friction through a bold, systematic layout that prioritizes scannable data and high-energy visuals.",
    problem: {
      title: "The Challenge",
      points: [
        "Establish a scannable structure for rapid retrieval of training information.",
        "Integrate a secure database solution for storing user inquiry submissions.",
        "Maintain total visual consistency across aggressive, high-contrast UI components.",
        "Engineer a responsive grid that holds structural integrity under data density."
      ]
    },
    solution: {
      title: "Technical Approach",
      points: [
        "Developed a systematic layout centered on grid-based discipline and bold hierarchy.",
        "Connected frontend forms to a MongoDB backend for secure data storage.",
        "Utilized AI guidance to refine backend logic and CRUD operations for form storage.",
        "Meticulously audited UI components for cross-device consistency."
      ]
    },
    stack: ["HTML5", "CSS3", "JavaScript", "MongoDB (Atlas)", "Figma", "Vercel"],
    results: [
      "100% data accuracy for form-to-database submissions.",
      "90+ Best Practices score on modern browser audits.",
      "Zero performance lag during high-intensity user interactions.",
      "High-efficiency user flow for membership and booking inquiries."
    ],
    image: "/pulse.png",
    liveUrl: "https://pulse-strength-gym.vercel.app/",
    githubUrl: "https://github.com/mohammedshaibaaz/pulse-strength-gym",
    color: "#d8d8d8"
  },
  "aurivane": {
    title: "AURIVANE",
    subtitle: "Editorial Fragrance & Scent Storytelling",
    description: "A sensorial digital journey for a premium fragrance line. The project leverages 'Visual Narrative' to evoke luxury scent through high-fidelity imagery and fluid, scroll-based interactions.",
    problem: {
      title: "The Challenge",
      points: [
        "Execute a 'Restrained UI' that allows visual content to drive the user journey.",
        "Implement hardware-accelerated transitions for organic, fluid movement.",
        "Ensure crisp visual fidelity for high-DPI 'Retina' displays.",
        "Maintain a minimal technical footprint while delivering a heavy visual experience."
      ]
    },
    solution: {
      title: "Technical Approach",
      points: [
        "Engineered a custom editorial grid using modern CSS3 layout principles.",
        "Applied advanced prompt engineering to bridge the gap between Figma and code.",
        "Optimized image delivery using WebP formats to ensure zero-stutter scrolling.",
        "Balanced technical logic with aesthetic intent to maintain brand storytelling."
      ]
    },
    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "Midjourney (Assets)", "Prompt Engineering"],
    results: [
      "60 FPS motion fidelity across all scroll-based transitions.",
      "40% reduction in total page weight through asset optimization.",
      "High engagement on core visual-storytelling sections.",
      "Universal responsive compatibility across modern browsers."
    ],
    image: "/aurivane.png",
    liveUrl: "https://mohammedshaibaaz.github.io/aurivane-editorial-fragrance-site/",
    githubUrl: "https://github.com/mohammedshaibaaz/aurivane-editorial-fragrance-site",
    color: "#f0f0f0"
  }
};

export function ProjectDetail() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const project = projectData[id || ""];

  if (!project) {
    return (
      <div className="relative min-h-screen bg-[var(--obsidian)]">
        <PillNavigation />
        <div className="min-h-screen flex items-center justify-center px-6 pt-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Instrument Serif, Georgia, serif" }}>
              Project Not Found
            </h1>
            <Link 
              to="/" 
              className="text-[var(--accent)] hover:text-[var(--silver)] font-mono text-sm uppercase tracking-wider"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[var(--obsidian)]">
      {/* Noise texture */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <PillNavigation />

      <div className="relative pt-32 pb-20">
        {/* Back button - Sticky */}
        <div className="sticky top-6 z-30 px-6 md:px-12 lg:px-24 mb-12 width-full flex justify-start">
          <Link to="/">
            <motion.button
              whileHover={{ x: -6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm uppercase tracking-wider borderless-card bg-[var(--obsidian)]/80 backdrop-blur-md border border-[var(--border)]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.button>
          </Link>
        </div>

        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="will-change-transform"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                <span className="font-mono text-xs text-[var(--tertiary-text)] tracking-wider uppercase">
                  Case Study
                </span>
              </div>

              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-none"
                style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
              >
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-[var(--secondary-text)] mb-12 leading-tight">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-12">
                {project.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl font-mono text-sm borderless-card"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 min-h-[56px]"
                  style={{
                    background: project.color,
                    color: "#050505",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 borderless-card rounded-xl font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 min-h-[56px]"
                >
                  <Github className="w-4 h-4" />
                  Source
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Visual */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="relative aspect-video rounded-3xl borderless-card overflow-hidden will-change-transform bg-[var(--obsidian)]"
            >
              <img
                src={project.image}
                alt={`${project.title} Project Screenshot`}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="borderless-card rounded-3xl p-10 md:p-14 will-change-transform"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ fontFamily: "Instrument Serif, Georgia, serif" }}>
                Overview
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-[var(--secondary-text)] leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--border)] p-px rounded-3xl overflow-hidden">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="bg-[var(--obsidian)] will-change-transform"
              >
                <div className="borderless-card rounded-none p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "Instrument Serif, Georgia, serif" }}>
                    {project.problem.title}
                  </h3>
                  <ul className="space-y-4">
                    {project.problem.points.map((point: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div 
                          className="w-1 h-1 rounded-full mt-2.5 flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="text-[var(--secondary-text)] leading-relaxed">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="bg-[var(--obsidian)] will-change-transform"
              >
                <div className="borderless-card rounded-none p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "Instrument Serif, Georgia, serif" }}>
                    {project.solution.title}
                  </h3>
                  <ul className="space-y-4">
                    {project.solution.points.map((point: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div 
                          className="w-1 h-1 rounded-full mt-2.5 flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="text-[var(--secondary-text)] leading-relaxed">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="will-change-transform"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-10 text-center" style={{ fontFamily: "Instrument Serif, Georgia, serif" }}>
                Key Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] p-px rounded-3xl overflow-hidden">
                {project.results.map((result: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[var(--obsidian)]"
                  >
                    <div className="borderless-card rounded-none p-8 md:p-10 text-center font-mono text-base md:text-lg">
                      {result}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="will-change-transform"
            >
              {/* Header */}
              <h2 
                className="text-[4vw] mb-6 leading-none text-center"
                style={{ fontFamily: "Instrument Serif, Georgia, serif", fontStyle: "italic", fontWeight: 700 }}
              >
                Let's Build Something Exceptional
              </h2>

              {/* Body Text */}
              <p className="text-lg md:text-xl text-[var(--secondary-text)] mb-12 max-w-3xl mx-auto text-center leading-relaxed">
                Currently seeking high-impact opportunities for frontend internships and freelance collaborations. Let's transform technical vision into intentional digital reality.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-5 rounded-2xl font-mono text-sm uppercase tracking-wider min-h-[56px] border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all"
                >
                  Start a Conversation ↗
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}