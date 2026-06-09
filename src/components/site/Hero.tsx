import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Portrait } from "./Sections";

const BADGES = [
  "CTO @ Carper Solutions",
  "Technical Lead @ Hub FDS",
  "MSc candidate — PPGI/UFAL",
  "Instructor at SENAC Alagoas",
  "AI applied to healthcare",
  "Software engineering",
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 radial-glow" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <OrbitalSphere />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-[0.2em] text-primary mb-7"
          >
            <Sparkles className="size-3.5" />
            System online · AI · Engineering · Research
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-8 lg:hidden"
          >
            <Portrait priority />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight"
          >
            <span className="text-gradient">Mauricésar</span>
            <br />
            <span className="text-foreground/95">Barbosa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-foreground/80 font-display"
          >
            CTO, Technical Lead, AI Researcher and Technology Educator.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-2xl text-muted-foreground leading-relaxed"
          >
            I bring together software engineering, artificial intelligence, applied research and
            education to build innovative, scalable technology with real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="text-xs font-mono px-3 py-1.5 rounded-full glass text-foreground/80 border border-border/60"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_var(--primary)] transition-shadow"
            >
              Explore my journey
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass glow-border hover:bg-white/5 transition-colors"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              Talk to me →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto hidden w-full max-w-sm flex-col gap-6 lg:flex lg:max-w-md"
        >
          <Portrait priority />
        </motion.div>
      </div>
    </section>
  );
}

function OrbitalSphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -top-32 -right-32 w-[680px] h-[680px] opacity-70"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.72_0.18_240/0.35),transparent_60%)] blur-2xl" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-primary/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute inset-24 rounded-full border border-accent/20"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute inset-40 rounded-full border border-cyan/20"
      />
    </div>
  );
}
