import { motion, AnimatePresence } from "motion/react";
import { X, Copy, MessageCircle, Linkedin } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohdshabaaz1919@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 z-50"
          >
            <div className="bg-[var(--obsidian)] border border-[var(--border)] rounded-3xl p-8 md:p-10 backdrop-blur-xl bg-opacity-95">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-[var(--border)] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl md:text-3xl mb-8 pr-8" style={{ fontFamily: "Instrument Serif, Georgia, serif" }}>
                Let's Connect
              </h2>

              {/* Email Option */}
              <div className="mb-6">
                <button
                  onClick={handleCopyEmail}
                  className="w-full group relative overflow-hidden rounded-2xl border border-[var(--border)] p-4 text-left hover:border-white/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-xs text-[var(--tertiary-text)] mb-1">Email Me</p>
                      <p className="text-sm md:text-base font-mono truncate">mohdshabaaz1919@gmail.com</p>
                      <p className="font-mono text-xs text-[var(--tertiary-text)] mt-2">
                        Typical Response: &lt; 24 Hours
                      </p>
                    </div>
                    <Copy className="w-5 h-5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-white/10 rounded-2xl backdrop-blur-sm"
                    >
                      <span className="font-mono text-xs font-bold">Copied!</span>
                    </motion.div>
                  )}
                </button>
              </div>

              {/* WhatsApp Option */}
              <div className="mb-6">
                <a
                  href="https://wa.me/917386884710?text=Hi%20Mohammed,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full rounded-2xl border border-[var(--border)] p-4 text-left hover:border-white/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-xs text-[var(--tertiary-text)] mb-1">Instant Message</p>
                      <p className="text-sm md:text-base font-mono">+91 73868 84710</p>
                      <p className="font-mono text-xs text-[var(--tertiary-text)] mt-2">WhatsApp Direct</p>
                    </div>
                    <div className="flex-shrink-0 w-5 h-5 text-white opacity-60 group-hover:opacity-100 transition-all group-hover:text-[#25d366] duration-300">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              </div>

              {/* LinkedIn Option */}
              <div>
                <a
                  href="https://www.linkedin.com/in/mohammed-shaibaaz-uddin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full rounded-2xl border border-[var(--border)] p-4 text-left hover:border-white/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-xs text-[var(--tertiary-text)] mb-1">Professional Network</p>
                      <p className="text-sm md:text-base font-mono">Mohammed Shaibaaz Uddin</p>
                      <p className="font-mono text-xs text-[var(--tertiary-text)] mt-2">View Profile</p>
                    </div>
                    <Linkedin className="w-5 h-5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
