import { motion, useScroll, useTransform } from "framer-motion";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

const NAV = {
  pt: [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#work", label: "Atuação" },
    { href: "#projects", label: "Projetos" },
    { href: "#research", label: "Pesquisa" },
    { href: "#education", label: "Educação" },
    { href: "#universe", label: "Universo" },
    { href: "#contact", label: "Contato" },
  ],
  en: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#research", label: "Research" },
    { href: "#education", label: "Education" },
    { href: "#universe", label: "Universe" },
    { href: "#contact", label: "Contact" },
  ],
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, isEnglish } = useLanguage();
  const nav = NAV[language];
  const contactLabel = language === "pt" ? "Fale comigo" : "Get in touch";
  const menuLabel = language === "pt" ? "Abrir menu" : "Open menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
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

          <nav className="hidden xl:flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative story-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium glass glow-border hover:bg-primary/10 transition-colors"
            >
              {contactLabel}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              aria-label={menuLabel}
              onClick={() => setOpen((value) => !value)}
              className="size-10 grid place-items-center rounded-md glass"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 bg-foreground transition ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span className={`h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
                <span
                  className={`h-0.5 w-5 bg-foreground transition ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden glass border-t border-border/60 px-6 py-4 flex flex-col gap-3"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full px-4 py-2 text-sm font-medium glass glow-border"
            >
              {contactLabel}
            </a>
          </motion.div>
        )}
      </motion.header>

      {isEnglish && <EnglishNotice />}
    </>
  );
}

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "pt" ? "English" : "Português";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch to ${nextLanguage}`}
      title={`Switch to ${nextLanguage}`}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-mono uppercase tracking-[0.16em] glass glow-border hover:bg-white/[0.04] transition-colors"
    >
      <Languages className="size-3.5 text-primary" />
      <span className={language === "pt" ? "text-primary" : "text-muted-foreground"}>PT</span>
      <span className="text-muted-foreground">/</span>
      <span className={language === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
    </button>
  );
}

function EnglishNotice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed left-1/2 top-20 z-40 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-2xl border border-primary/25 bg-background/85 px-4 py-3 text-sm text-muted-foreground shadow-[0_0_24px_oklch(0.72_0.18_240/0.18)] backdrop-blur-xl"
    >
      <span className="font-medium text-foreground">English version enabled.</span>{" "}
      This portfolio opens in Portuguese by default. Use the PT/EN control to return to Portuguese.
    </motion.div>
  );
}

export function HeaderProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, (value) => value);
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-16 inset-x-0 h-px z-50 bg-gradient-to-r from-primary via-accent to-cyan"
    />
  );
}
