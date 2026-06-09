import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#universe", label: "Universe" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)] group-hover:scale-125 transition-transform" />
          <span className="font-display font-semibold tracking-tight">
            Mauricésar <span className="text-muted-foreground font-normal">Barbosa</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-muted-foreground hover:text-foreground transition-colors relative story-link"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium glass glow-border hover:bg-primary/10 transition-colors"
        >
          Get in touch
        </a>
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden size-10 grid place-items-center rounded-md glass"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass border-t border-border/60 px-6 py-4 flex flex-col gap-3"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground py-1"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center rounded-full px-4 py-2 text-sm font-medium glass glow-border"
          >
            Get in touch
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}

export function HeaderProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, (v) => v);
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-16 inset-x-0 h-px z-50 bg-gradient-to-r from-primary via-accent to-cyan"
    />
  );
}
