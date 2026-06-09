import { Section, SectionTitle, Reveal } from "./Section";
import { TerminalPanel } from "./TerminalPanel";
import {
  Brain,
  Layers,
  Eye,
  GraduationCap,
  Rocket,
  Building2,
  Code2,
  Database,
  School,
  Briefcase,
  Activity,
  Sparkles,
  Globe,
  ScanLine,
  Gauge,
  Network,
  ShieldCheck,
  Gamepad2,
  FileText,
  BookOpen,
  Star,
  Compass,
  Linkedin,
  Github,
  Instagram,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import portraitUrl from "@/assets/IMG_9500.JPEG";

/* ------------------------ ABOUT ------------------------ */

const ABOUT_TAGS = [
  { icon: Rocket, label: "Tech leadership" },
  { icon: Layers, label: "Software architecture" },
  { icon: Brain, label: "Artificial intelligence" },
  { icon: Eye, label: "Computer vision" },
  { icon: GraduationCap, label: "Tech education" },
  { icon: Sparkles, label: "Innovation" },
];

export function About() {
  return (
    <Section id="about">
      <SectionTitle
        eyebrow="About me"
        title={<>Technology, research and education <br className="hidden md:block" /> in a single journey.</>}
      />
      <div className="mt-12 grid lg:grid-cols-[0.8fr_1.4fr] gap-10 items-start">
        <Reveal className="h-full">
          <TerminalPanel expanded />
        </Reveal>
        <div className="space-y-10">
          <Reveal className="space-y-5 text-foreground/80 leading-relaxed text-base md:text-lg">
            <p>
              I'm a technology professional, educator, researcher and innovation leader. My journey
              brings together software development, artificial intelligence, scientific research and
              professional training. I hold a degree in Computer Science and specializations in
              Artificial Intelligence, Databases, Data Science and Teaching for Technical Education,
              and I'm currently pursuing a Master's in Informatics at PPGI/UFAL, researching computer
              vision applied to healthcare.
            </p>
            <p>
              I work at the intersection of industry, academia and education, turning technical
              knowledge into practical solutions, digital products, learning experiences and projects
              with real social impact.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {ABOUT_TAGS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass glow-border rounded-xl p-4 flex items-start gap-3 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="size-9 rounded-lg grid place-items-center bg-primary/10 text-primary border border-primary/20">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-sm font-medium leading-tight pt-1.5">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Portrait({ priority = false }: { priority?: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Glow background */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.18_240/0.35),transparent_60%),radial-gradient(circle_at_70%_80%,oklch(0.7_0.2_310/0.25),transparent_60%)] blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass glow-border rounded-[1.75rem] p-2 overflow-hidden"
      >
        {/* Corner brackets */}
        <span className="pointer-events-none absolute top-3 left-3 size-4 border-t border-l border-primary/60 rounded-tl-md" />
        <span className="pointer-events-none absolute top-3 right-3 size-4 border-t border-r border-primary/60 rounded-tr-md" />
        <span className="pointer-events-none absolute bottom-3 left-3 size-4 border-b border-l border-primary/60 rounded-bl-md" />
        <span className="pointer-events-none absolute bottom-3 right-3 size-4 border-b border-r border-primary/60 rounded-br-md" />

        <div className="relative aspect-[4/5] rounded-[1.4rem] overflow-hidden bg-card">
          <img
            src={portraitUrl}
            alt="Portrait of Mauricésar Barbosa"
            width={800}
            height={1024}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          {/* Scanline overlay */}
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0 2px, oklch(0.72 0.18 240 / 0.25) 2px 3px)",
            }}
          />
          {/* Bottom gradient + tag */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 via-background/40 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
                  identity
                </div>
                <div className="font-display font-semibold text-sm">Mauricésar Barbosa</div>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded-full glass border border-border/60 text-muted-foreground">
                v.1.0
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------ EXPERIENCE ------------------------ */

const ROLES = [
  {
    icon: Building2,
    role: "Chief Technology Officer",
    org: "Carper Solutions",
    text:
      "As CTO of Carper Solutions, I lead the technology strategy, software architecture, engineering teams and the design of innovative AI-driven solutions — from product conception to scalable implementation aligned with the market.",
    accent: "from-primary/60 to-violet/40",
  },
  {
    icon: Briefcase,
    role: "Technical Lead",
    org: "Hub FDS",
    text:
      "At Hub FDS, I act as Technical Lead on projects focused on education, professional training and digital transformation, building software and AI solutions that strengthen teaching, learning and training processes.",
    accent: "from-accent/60 to-magenta/40",
  },
  {
    icon: School,
    role: "Technology Instructor",
    org: "SENAC Alagoas",
    text:
      "At SENAC Alagoas, I help train professionals in programming, web development, databases, software engineering, artificial intelligence and emerging technologies, bringing students closer to the real demands of the market.",
    accent: "from-cyan/60 to-primary/40",
  },
];

export function Experience() {
  return (
    <Section id="work">
      <SectionTitle
        eyebrow="Professional work"
        title="Where I lead technology today"
        description="Three complementary fronts connecting product, education and applied innovation."
      />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {ROLES.map(({ icon: Icon, role, org, text, accent }, i) => (
          <Reveal key={org} delay={i * 0.08}>
            <article className="group relative h-full glass glow-border rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div
                className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r ${accent} opacity-70`}
              />
              <div className="size-11 rounded-xl grid place-items-center bg-primary/10 text-primary border border-primary/20 mb-5">
                <Icon className="size-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                {role}
              </div>
              <h3 className="mt-1 text-xl font-semibold">{org}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------ RESEARCH ------------------------ */

const RESEARCH = [
  { icon: ScanLine, label: "Pattern detection in medical images" },
  { icon: Eye, label: "Computer vision applied to healthcare" },
  { icon: Network, label: "Object detection models" },
  { icon: Activity, label: "AI to support diagnosis" },
  { icon: Gauge, label: "Evaluation of intelligent models" },
  { icon: Globe, label: "Applied research with social impact" },
];

export function Research() {
  return (
    <Section id="research" className="relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden />
      <SectionTitle
        eyebrow="Research & Artificial Intelligence"
        title="AI, computer vision and healthcare"
        description="I develop research in artificial intelligence, machine learning and computer vision applied to healthcare, focused on intelligent models that support the analysis of medical images."
      />
      <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-6">
        <Reveal>
          <div className="glass glow-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
                model.health.vision
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                training
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { k: "Accuracy", v: "96.2%" },
                { k: "F1", v: "0.94" },
                { k: "Latency", v: "38ms" },
              ].map((m) => (
                <div key={m.k} className="rounded-lg bg-white/[0.02] border border-border/60 p-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    {m.k}
                  </div>
                  <div className="text-lg font-display font-semibold text-foreground">{m.v}</div>
                </div>
              ))}
            </div>
            <Spark />
            <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[11px] text-muted-foreground">
              <div>dataset: medical_imaging_v3</div>
              <div>arch: cnn + attention</div>
              <div>epochs: 100</div>
              <div>opt: adamw</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="grid sm:grid-cols-2 gap-3">
            {RESEARCH.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass glow-border rounded-xl p-4 flex items-start gap-3 hover:bg-white/[0.03] transition-colors"
              >
                <div className="size-9 rounded-lg grid place-items-center bg-accent/10 text-accent border border-accent/20">
                  <Icon className="size-4" />
                </div>
                <span className="text-sm font-medium leading-snug pt-1.5">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

function Spark() {
  const pts = [8, 22, 16, 30, 26, 40, 34, 52, 48, 58, 55, 70, 64, 72];
  const w = 360;
  const h = 80;
  const step = w / (pts.length - 1);
  const max = Math.max(...pts);
  const d = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * (h - 8) - 4}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
      <defs>
        <linearGradient id="sg" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.18 240)" />
          <stop offset="100%" stopColor="oklch(0.7 0.2 310)" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#sg)" strokeWidth="2" />
      <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill="url(#sg)" opacity="0.12" />
    </svg>
  );
}

/* ------------------------ SKILLS ------------------------ */

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Software Development",
    items: ["React", "TypeScript", "Python", "Flask", "Django", "APIs", "Databases", "Software architecture"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "Object Detection", "Image processing", "Intelligent models"],
  },
  {
    icon: ShieldCheck,
    title: "Leadership & Product",
    items: ["Technical leadership", "Team management", "Tech strategy", "Solution architecture", "Innovation", "Technical mentoring"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: ["Teaching technology", "Professional training", "Active methodologies", "Educational planning", "Hands-on projects", "Teaching programming"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="Stack, leadership and teaching"
        description="Skills organized in four fronts that complement each other in my daily work."
      />
      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {SKILL_GROUPS.map(({ icon: Icon, title, items }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <div className="h-full glass glow-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="size-10 rounded-lg grid place-items-center bg-primary/10 text-primary border border-primary/20">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] border border-border/60 text-foreground/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------ PROJECTS ------------------------ */

const PROJECTS = [
  {
    title: "AI and Software Solutions",
    sub: "Carper Solutions",
    text:
      "Building innovative digital solutions focused on automation, artificial intelligence and technological transformation.",
    tags: ["AI", "Software", "Automation", "Product"],
  },
  {
    title: "Technology for Education",
    sub: "Hub FDS",
    text:
      "Designing solutions for professional training, digital education and support for learning processes.",
    tags: ["EdTech", "AI", "Platforms", "UX"],
  },
  {
    title: "Computer Vision for Healthcare",
    sub: "Research — PPGI/UFAL",
    text:
      "Academic research applying intelligent models to medical image analysis and diagnostic support.",
    tags: ["Computer Vision", "Deep Learning", "Healthcare"],
  },
  {
    title: "Professional Training in Tech",
    sub: "SENAC · Integrative projects",
    text:
      "Educational projects and hands-on experiences training students in programming, web development, databases and AI.",
    tags: ["Education", "Programming", "Databases", "AI"],
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        eyebrow="Projects"
        title="Selected work"
        description="Initiatives combining engineering, AI and educational impact."
      />
      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -4 }}
              className="group relative h-full glass glow-border rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 size-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-primary/90">
                {p.sub}
              </div>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.03] border border-border/60 text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors"
              >
                View details
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------ EDUCATION ------------------------ */

const EDU = [
  { icon: Code2, label: "Web Development" },
  { icon: BookOpen, label: "Programming" },
  { icon: Database, label: "Databases" },
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Layers, label: "Software Engineering" },
  { icon: Rocket, label: "Integrative Projects" },
];

export function Education() {
  return (
    <Section id="education">
      <SectionTitle
        eyebrow="Education & Impact"
        title="Shaping the next generation of tech"
        description="Beyond my work in industry and research, I'm deeply committed to training new professionals — bridging theory, practice and real market demands."
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {EDU.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 0.05}>
            <div className="glass glow-border rounded-xl p-5 flex items-center gap-4 hover:bg-white/[0.03] transition-colors">
              <div className="size-11 rounded-lg grid place-items-center bg-cyan/10 text-cyan border border-cyan/20">
                <Icon className="size-5" />
              </div>
              <div className="font-medium">{label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------ PERSONAL UNIVERSE ------------------------ */

const UNIVERSE = [
  { icon: Gamepad2, label: "Competitive gamer" },
  { icon: Star, label: "Marvel" },
  { icon: Rocket, label: "Science fiction" },
  { icon: Sparkles, label: "Geek culture" },
  { icon: Compass, label: "Strategy" },
  { icon: Brain, label: "Creativity" },
];

export function PersonalUniverse() {
  return (
    <Section id="universe" className="relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, oklch(0.7 0.2 310 / 0.18), transparent 55%), radial-gradient(circle at 10% 80%, oklch(0.72 0.18 240 / 0.18), transparent 55%)",
        }}
        aria-hidden
      />
      <SectionTitle
        eyebrow="Personal universe"
        title="The human side behind the code"
      />
      <div className="mt-12 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <Reveal className="space-y-5 text-foreground/80 leading-relaxed text-base md:text-lg">
          <p>
            Outside my professional and academic life, I'm passionate about technology, geek culture
            and competitive PC gaming. I enjoy challenges that involve strategy, logical reasoning,
            teamwork, constant adaptation and fast decision-making.
          </p>
          <p>
            I'm also a big fan of the Marvel universe and science fiction in general — stories about
            extraordinary characters, innovation and the limits of what's possible inspire how I
            think about technology and creativity.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {UNIVERSE.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-full glass glow-border text-foreground/85"
              >
                <Icon className="size-3.5 text-accent" />
                {label}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <RuneSigil />
        </Reveal>
      </div>
    </Section>
  );
}

function RuneSigil() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.7_0.2_310/0.35),transparent_60%)] blur-2xl" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-accent/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-primary/30 border-dashed"
      />
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <defs>
          <linearGradient id="rg" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.18 240)" />
            <stop offset="100%" stopColor="oklch(0.7 0.2 310)" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#rg)" strokeWidth="0.8">
          <polygon points="100,40 160,140 40,140" />
          <polygon points="100,160 40,60 160,60" opacity="0.7" />
          <circle cx="100" cy="100" r="58" />
          <circle cx="100" cy="100" r="40" opacity="0.6" />
          <circle cx="100" cy="100" r="6" fill="url(#rg)" />
        </g>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x = 100 + Math.cos(a) * 78;
          const y = 100 + Math.sin(a) * 78;
          return <circle key={i} cx={x} cy={y} r="1.6" fill="oklch(0.82 0.15 200)" />;
        })}
      </svg>
    </div>
  );
}

/* ------------------------ TIMELINE ------------------------ */

const TIMELINE = [
  { year: "Undergrad", title: "Computer Science", text: "Solid foundation in algorithms, systems and software engineering." },
  { year: "Graduate studies", title: "AI · Databases · Data Science · Teaching", text: "Specializations connecting technology, data and education." },
  { year: "SENAC AL", title: "Technology Instructor", text: "Training new professionals in programming and emerging technologies." },
  { year: "PPGI / UFAL", title: "Master's in Informatics", text: "Research on AI and computer vision applied to healthcare." },
  { year: "Carper Solutions", title: "Chief Technology Officer", text: "Technical leadership, strategy and AI-driven products." },
  { year: "Hub FDS", title: "Technical Lead", text: "Software and AI solutions for education and professional training." },
  { year: "Applied research", title: "Computer vision for healthcare", text: "Intelligent models to support medical image analysis." },
];

export function TimelineSection() {
  return (
    <Section id="journey">
      <SectionTitle
        eyebrow="Timeline"
        title="Professional and academic milestones"
      />
      <div className="mt-14 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />
        <div className="space-y-10">
          {TIMELINE.map((t, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={t.title} delay={i * 0.04}>
                <div className="relative md:grid md:grid-cols-2 md:gap-12">
                  <div
                    className={`pl-12 md:pl-0 ${
                      left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="glass glow-border rounded-2xl p-5 inline-block w-full md:w-auto md:max-w-md">
                      <div className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
                        {t.year}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 size-3 rounded-full bg-primary shadow-[0_0_12px_var(--primary)] border border-background" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------ CONTACT ------------------------ */

const LINKS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mauricesar/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mauricesarf/" },
  { icon: Github, label: "GitHub", href: "https://github.com/mauricesar" },
  { icon: Gamepad2, label: "Steam", href: "https://steamcommunity.com/id/mauricesar/" },
  { icon: Mail, label: "Email", href: "mailto:mauricesarf@gmail.com" },
  { icon: FileText, label: "CV", href: "cv-mauricesar-barbosa.pdf" },
];

export function Contact() {
  return (
    <Section id="contact" className="relative">
      <div
        className="absolute inset-0 grid-bg opacity-40 pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <SectionTitle
          align="center"
          eyebrow="Contact"
          title="Let's build something innovative?"
          description="I'm open to professional connections, technology projects, partnerships in artificial intelligence, education, applied research and software development."
        />
        <Reveal delay={0.1}>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group glass glow-border rounded-xl p-4 flex items-center justify-between hover:bg-white/[0.04] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="size-9 rounded-lg grid place-items-center bg-primary/10 text-primary border border-primary/20">
                    <Icon className="size-4" />
                  </span>
                  <span className="font-medium">{label}</span>
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------ FOOTER ------------------------ */

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-muted-foreground">
        <div>
          <div className="font-display text-foreground">Mauricésar Barbosa</div>
          <div className="mt-1">Technology, AI, Education and Innovation.</div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#research" className="hover:text-foreground transition-colors">Research</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/mauricesar/" target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-lg glass hover:text-primary transition-colors">
            <Linkedin className="size-4" />
          </a>
          <a aria-label="Instagram" href="https://www.instagram.com/mauricesarf/" target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-lg glass hover:text-primary transition-colors">
            <Instagram className="size-4" />
          </a>
          <a aria-label="GitHub" href="https://github.com/mauricesar" target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-lg glass hover:text-primary transition-colors">
            <Github className="size-4" />
          </a>
          <a aria-label="Steam" href="https://steamcommunity.com/id/mauricesar/" target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-lg glass hover:text-primary transition-colors">
            <Gamepad2 className="size-4" />
          </a>
          <a aria-label="Email" href="mailto:mauricesarf@gmail.com" className="size-9 grid place-items-center rounded-lg glass hover:text-primary transition-colors">
            <Mail className="size-4" />
          </a>
          <span className="ml-3">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
