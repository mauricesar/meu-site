import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Code2,
  Compass,
  Database,
  Eye,
  FileText,
  Gamepad2,
  Github,
  Globe,
  GraduationCap,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Network,
  Rocket,
  ScanLine,
  School,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { pick, useLanguage } from "./LanguageContext";
import { Section, SectionTitle, Reveal } from "./Section";
import { TerminalPanel } from "./TerminalPanel";
import portraitUrl from "@/assets/IMG_9500.JPEG";

const COPY = {
  pt: {
    about: {
      eyebrow: "Sobre mim",
      title: "Tecnologia, pesquisa e educação em uma só jornada.",
      paragraphs: [
        "Sou profissional de tecnologia, educador, pesquisador e líder de inovação. Minha trajetória conecta desenvolvimento de software, inteligência artificial, pesquisa científica e formação profissional. Sou formado em Ciência da Computação, tenho especializações em Inteligência Artificial, Banco de Dados, Ciência de Dados e Docência para Educação Profissional e Tecnológica, e atualmente curso o mestrado em Informática no PPGI/UFAL, pesquisando visão computacional aplicada à saúde.",
        "Atuo na interseção entre indústria, academia e educação, transformando conhecimento técnico em soluções práticas, produtos digitais, experiências de aprendizagem e projetos com impacto social real.",
      ],
      tags: [
        "Liderança técnica",
        "Arquitetura de software",
        "Inteligência artificial",
        "Visão computacional",
        "Educação em tecnologia",
        "Inovação",
      ],
    },
    experience: {
      eyebrow: "Atuação profissional",
      title: "Onde lidero tecnologia hoje",
      description: "Três frentes complementares conectando produto, educação e inovação aplicada.",
      roles: [
        {
          icon: Building2,
          role: "Chief Technology Officer",
          org: "Carper Solutions",
          text: "Como CTO da Carper Solutions, lidero estratégia tecnológica, arquitetura de software, times de engenharia e o desenho de soluções inovadoras com IA, da concepção do produto à implementação escalável.",
          accent: "from-primary/60 to-violet/40",
        },
        {
          icon: Briefcase,
          role: "Líder Técnico",
          org: "Hub FDS",
          text: "No Hub FDS, atuo como líder técnico em projetos voltados à educação, formação profissional e transformação digital, construindo soluções de software e IA que fortalecem processos de ensino e aprendizagem.",
          accent: "from-accent/60 to-magenta/40",
        },
        {
          icon: School,
          role: "Instrutor de Tecnologia",
          org: "SENAC Alagoas",
          text: "No SENAC Alagoas, contribuo para formar profissionais em programação, desenvolvimento web, bancos de dados, engenharia de software, inteligência artificial e tecnologias emergentes.",
          accent: "from-cyan/60 to-primary/40",
        },
      ],
    },
    research: {
      eyebrow: "Pesquisa & Inteligência Artificial",
      title: "IA, visão computacional e saúde",
      description:
        "Desenvolvo pesquisa em inteligência artificial, machine learning e visão computacional aplicada à saúde, com foco em modelos inteligentes que apoiam a análise de imagens médicas.",
      items: [
        "Detecção de padrões em imagens médicas",
        "Visão computacional aplicada à saúde",
        "Modelos de detecção de objetos",
        "IA para apoio ao diagnóstico",
        "Avaliação de modelos inteligentes",
        "Pesquisa aplicada com impacto social",
      ],
    },
    skills: {
      eyebrow: "Competências",
      title: "Stack, liderança e ensino",
      description: "Competências organizadas em quatro frentes que se complementam no meu trabalho diário.",
      groups: [
        {
          icon: Code2,
          title: "Desenvolvimento de Software",
          items: ["React", "TypeScript", "Python", "Flask", "Django", "APIs", "Bancos de dados", "Arquitetura"],
        },
        {
          icon: Brain,
          title: "Inteligência Artificial",
          items: ["Machine Learning", "Deep Learning", "Visão Computacional", "Detecção de Objetos", "Processamento de Imagens"],
        },
        {
          icon: ShieldCheck,
          title: "Liderança & Produto",
          items: ["Liderança técnica", "Gestão de times", "Estratégia tech", "Arquitetura de soluções", "Mentoria"],
        },
        {
          icon: GraduationCap,
          title: "Educação",
          items: ["Ensino de tecnologia", "Formação profissional", "Metodologias ativas", "Projetos práticos"],
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Trabalhos selecionados",
      description: "Iniciativas que combinam engenharia, IA e impacto educacional.",
      details: "Ver detalhes",
      items: [
        {
          title: "Soluções de IA e Software",
          sub: "Carper Solutions",
          text: "Construção de soluções digitais focadas em automação, inteligência artificial e transformação tecnológica.",
          tags: ["IA", "Software", "Automação", "Produto"],
        },
        {
          title: "Tecnologia para Educação",
          sub: "Hub FDS",
          text: "Desenho de soluções para formação profissional, educação digital e apoio a processos de aprendizagem.",
          tags: ["EdTech", "IA", "Plataformas", "UX"],
        },
        {
          title: "Visão Computacional para Saúde",
          sub: "Pesquisa — PPGI/UFAL",
          text: "Pesquisa acadêmica aplicando modelos inteligentes à análise de imagens médicas e apoio diagnóstico.",
          tags: ["Visão Computacional", "Deep Learning", "Saúde"],
        },
        {
          title: "Formação Profissional em Tech",
          sub: "SENAC · Projetos integradores",
          text: "Experiências educacionais práticas para formar estudantes em programação, web, bancos de dados e IA.",
          tags: ["Educação", "Programação", "Bancos de Dados", "IA"],
        },
      ],
    },
    education: {
      eyebrow: "Educação & Impacto",
      title: "Formando a próxima geração de tecnologia",
      description:
        "Além da atuação na indústria e na pesquisa, sou comprometido com a formação de novos profissionais, aproximando teoria, prática e demandas reais do mercado.",
      items: ["Desenvolvimento Web", "Programação", "Bancos de Dados", "Inteligência Artificial", "Engenharia de Software", "Projetos Integradores"],
    },
    universe: {
      eyebrow: "Universo pessoal",
      title: "O lado humano por trás do código",
      paragraphs: [
        "Fora da vida profissional e acadêmica, sou apaixonado por tecnologia, cultura geek e jogos competitivos no PC. Gosto de desafios que envolvem estratégia, raciocínio lógico, trabalho em equipe, adaptação constante e tomada rápida de decisão.",
        "Também sou fã do universo Marvel e de ficção científica em geral. Histórias sobre personagens extraordinários, inovação e os limites do possível inspiram minha forma de pensar tecnologia e criatividade.",
      ],
      items: ["Gamer competitivo", "Marvel", "Ficção científica", "Cultura geek", "Estratégia", "Criatividade"],
    },
    timeline: {
      eyebrow: "Linha do tempo",
      title: "Marcos profissionais e acadêmicos",
      items: [
        ["Graduação", "Ciência da Computação", "Base sólida em algoritmos, sistemas e engenharia de software."],
        ["Especializações", "IA · Bancos de Dados · Data Science · Docência", "Formação conectando tecnologia, dados e educação."],
        ["SENAC AL", "Instrutor de Tecnologia", "Formação de novos profissionais em programação e tecnologias emergentes."],
        ["PPGI / UFAL", "Mestrado em Informática", "Pesquisa em IA e visão computacional aplicada à saúde."],
        ["Carper Solutions", "Chief Technology Officer", "Liderança técnica, estratégia e produtos com IA."],
        ["Hub FDS", "Líder Técnico", "Soluções de software e IA para educação e formação profissional."],
        ["Pesquisa aplicada", "Visão computacional para saúde", "Modelos inteligentes para apoiar análise de imagens médicas."],
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo inovador?",
      description:
        "Estou aberto a conexões profissionais, projetos de tecnologia, parcerias em inteligência artificial, educação, pesquisa aplicada e desenvolvimento de software.",
    },
    footer: {
      tagline: "Tecnologia, IA, Educação e Inovação.",
      nav: ["Sobre", "Atuação", "Projetos", "Pesquisa", "Contato"],
    },
  },
  en: {
    about: {
      eyebrow: "About me",
      title: "Technology, research and education in a single journey.",
      paragraphs: [
        "I'm a technology professional, educator, researcher and innovation leader. My journey brings together software development, artificial intelligence, scientific research and professional training. I hold a degree in Computer Science and specializations in Artificial Intelligence, Databases, Data Science and Teaching for Technical Education, and I'm currently pursuing a Master's in Informatics at PPGI/UFAL, researching computer vision applied to healthcare.",
        "I work at the intersection of industry, academia and education, turning technical knowledge into practical solutions, digital products, learning experiences and projects with real social impact.",
      ],
      tags: ["Tech leadership", "Software architecture", "Artificial intelligence", "Computer vision", "Tech education", "Innovation"],
    },
    experience: {
      eyebrow: "Professional work",
      title: "Where I lead technology today",
      description: "Three complementary fronts connecting product, education and applied innovation.",
      roles: [
        {
          icon: Building2,
          role: "Chief Technology Officer",
          org: "Carper Solutions",
          text: "As CTO of Carper Solutions, I lead technology strategy, software architecture, engineering teams and the design of innovative AI-driven solutions, from product conception to scalable implementation.",
          accent: "from-primary/60 to-violet/40",
        },
        {
          icon: Briefcase,
          role: "Technical Lead",
          org: "Hub FDS",
          text: "At Hub FDS, I act as Technical Lead on projects focused on education, professional training and digital transformation, building software and AI solutions that strengthen teaching and learning processes.",
          accent: "from-accent/60 to-magenta/40",
        },
        {
          icon: School,
          role: "Technology Instructor",
          org: "SENAC Alagoas",
          text: "At SENAC Alagoas, I help train professionals in programming, web development, databases, software engineering, artificial intelligence and emerging technologies.",
          accent: "from-cyan/60 to-primary/40",
        },
      ],
    },
    research: {
      eyebrow: "Research & Artificial Intelligence",
      title: "AI, computer vision and healthcare",
      description:
        "I develop research in artificial intelligence, machine learning and computer vision applied to healthcare, focused on intelligent models that support the analysis of medical images.",
      items: [
        "Pattern detection in medical images",
        "Computer vision applied to healthcare",
        "Object detection models",
        "AI to support diagnosis",
        "Evaluation of intelligent models",
        "Applied research with social impact",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Stack, leadership and teaching",
      description: "Skills organized in four fronts that complement each other in my daily work.",
      groups: [
        {
          icon: Code2,
          title: "Software Development",
          items: ["React", "TypeScript", "Python", "Flask", "Django", "APIs", "Databases", "Software architecture"],
        },
        {
          icon: Brain,
          title: "Artificial Intelligence",
          items: ["Machine Learning", "Deep Learning", "Computer Vision", "Object Detection", "Image processing"],
        },
        {
          icon: ShieldCheck,
          title: "Leadership & Product",
          items: ["Technical leadership", "Team management", "Tech strategy", "Solution architecture", "Mentoring"],
        },
        {
          icon: GraduationCap,
          title: "Education",
          items: ["Teaching technology", "Professional training", "Active methodologies", "Hands-on projects"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
      description: "Initiatives combining engineering, AI and educational impact.",
      details: "View details",
      items: [
        {
          title: "AI and Software Solutions",
          sub: "Carper Solutions",
          text: "Building innovative digital solutions focused on automation, artificial intelligence and technological transformation.",
          tags: ["AI", "Software", "Automation", "Product"],
        },
        {
          title: "Technology for Education",
          sub: "Hub FDS",
          text: "Designing solutions for professional training, digital education and support for learning processes.",
          tags: ["EdTech", "AI", "Platforms", "UX"],
        },
        {
          title: "Computer Vision for Healthcare",
          sub: "Research — PPGI/UFAL",
          text: "Academic research applying intelligent models to medical image analysis and diagnostic support.",
          tags: ["Computer Vision", "Deep Learning", "Healthcare"],
        },
        {
          title: "Professional Training in Tech",
          sub: "SENAC · Integrative projects",
          text: "Educational projects and hands-on experiences training students in programming, web development, databases and AI.",
          tags: ["Education", "Programming", "Databases", "AI"],
        },
      ],
    },
    education: {
      eyebrow: "Education & Impact",
      title: "Shaping the next generation of tech",
      description:
        "Beyond my work in industry and research, I'm deeply committed to training new professionals, bridging theory, practice and real market demands.",
      items: ["Web Development", "Programming", "Databases", "Artificial Intelligence", "Software Engineering", "Integrative Projects"],
    },
    universe: {
      eyebrow: "Personal universe",
      title: "The human side behind the code",
      paragraphs: [
        "Outside my professional and academic life, I'm passionate about technology, geek culture and competitive PC gaming. I enjoy challenges that involve strategy, logical reasoning, teamwork, constant adaptation and fast decision-making.",
        "I'm also a big fan of the Marvel universe and science fiction in general. Stories about extraordinary characters, innovation and the limits of what's possible inspire how I think about technology and creativity.",
      ],
      items: ["Competitive gamer", "Marvel", "Science fiction", "Geek culture", "Strategy", "Creativity"],
    },
    timeline: {
      eyebrow: "Timeline",
      title: "Professional and academic milestones",
      items: [
        ["Undergrad", "Computer Science", "Solid foundation in algorithms, systems and software engineering."],
        ["Graduate studies", "AI · Databases · Data Science · Teaching", "Specializations connecting technology, data and education."],
        ["SENAC AL", "Technology Instructor", "Training new professionals in programming and emerging technologies."],
        ["PPGI / UFAL", "Master's in Informatics", "Research on AI and computer vision applied to healthcare."],
        ["Carper Solutions", "Chief Technology Officer", "Technical leadership, strategy and AI-driven products."],
        ["Hub FDS", "Technical Lead", "Software and AI solutions for education and professional training."],
        ["Applied research", "Computer vision for healthcare", "Intelligent models to support medical image analysis."],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something innovative?",
      description:
        "I'm open to professional connections, technology projects, partnerships in artificial intelligence, education, applied research and software development.",
    },
    footer: {
      tagline: "Technology, AI, Education and Innovation.",
      nav: ["About", "Work", "Projects", "Research", "Contact"],
    },
  },
};

const ICONS = [Rocket, Layers, Brain, Eye, GraduationCap, Sparkles];
const RESEARCH_ICONS = [ScanLine, Eye, Network, Activity, Brain, Globe];
const EDU_ICONS = [Code2, BookOpen, Database, Brain, Layers, Rocket];
const UNIVERSE_ICONS = [Gamepad2, Star, Rocket, Sparkles, Compass, Brain];

export function About() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).about;
  return (
    <Section id="about">
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} />
      <div className="mt-12 grid lg:grid-cols-[0.8fr_1.4fr] gap-10 items-start">
        <Reveal className="h-full">
          <TerminalPanel expanded />
        </Reveal>
        <div className="space-y-10">
          <Reveal className="space-y-5 text-foreground/80 leading-relaxed text-base md:text-lg">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {copy.tags.map((label, index) => {
                const Icon = ICONS[index];
                return <InfoTile key={label} icon={Icon} label={label} />;
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Portrait({ priority = false }: { priority?: boolean }) {
  const { language } = useLanguage();
  const alt = language === "pt" ? "Retrato de Mauricésar Barbosa" : "Portrait of Mauricésar Barbosa";
  return (
    <div className="relative mx-auto w-full max-w-sm">
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
        <span className="pointer-events-none absolute top-3 left-3 size-4 border-t border-l border-primary/60 rounded-tl-md" />
        <span className="pointer-events-none absolute top-3 right-3 size-4 border-t border-r border-primary/60 rounded-tr-md" />
        <span className="pointer-events-none absolute bottom-3 left-3 size-4 border-b border-l border-primary/60 rounded-bl-md" />
        <span className="pointer-events-none absolute bottom-3 right-3 size-4 border-b border-r border-primary/60 rounded-br-md" />
        <div className="relative aspect-[4/5] rounded-[1.4rem] overflow-hidden bg-card">
          <img
            src={portraitUrl}
            alt={alt}
            width={800}
            height={1024}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0 2px, oklch(0.72 0.18 240 / 0.25) 2px 3px)",
            }}
          />
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

export function Experience() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).experience;
  return (
    <Section id="work">
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {copy.roles.map(({ icon: Icon, role, org, text, accent }, index) => (
          <Reveal key={org} delay={index * 0.08}>
            <article className="group relative h-full glass glow-border rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r ${accent} opacity-70`} />
              <div className="size-11 rounded-xl grid place-items-center bg-primary/10 text-primary border border-primary/20 mb-5">
                <Icon className="size-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">{role}</div>
              <h3 className="mt-1 text-xl font-semibold">{org}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Research() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).research;
  return (
    <Section id="research" className="relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden />
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-6">
        <Reveal>
          <MetricCard />
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="grid sm:grid-cols-2 gap-3">
            {copy.items.map((label, index) => {
              const Icon = RESEARCH_ICONS[index];
              return (
                <li key={label} className="glass glow-border rounded-xl p-4 flex items-start gap-3 hover:bg-white/[0.03] transition-colors">
                  <div className="size-9 rounded-lg grid place-items-center bg-accent/10 text-accent border border-accent/20">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-sm font-medium leading-snug pt-1.5">{label}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Skills() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).skills;
  return (
    <Section id="skills">
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {copy.groups.map(({ icon: Icon, title, items }, index) => (
          <Reveal key={title} delay={index * 0.06}>
            <div className="h-full glass glow-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="size-10 rounded-lg grid place-items-center bg-primary/10 text-primary border border-primary/20">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <Pills items={items} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).projects;
  return (
    <Section id="projects">
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {copy.items.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <motion.article whileHover={{ y: -4 }} className="group relative h-full glass glow-border rounded-2xl p-6 overflow-hidden">
              <div className="absolute -top-24 -right-24 size-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-primary/90">{project.sub}</div>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.text}</p>
              <div className="mt-5">
                <Pills items={project.tags} small />
              </div>
              <button type="button" className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors">
                {copy.details}
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).education;
  return (
    <Section id="education">
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {copy.items.map((label, index) => {
          const Icon = EDU_ICONS[index];
          return (
            <Reveal key={label} delay={index * 0.05}>
              <div className="glass glow-border rounded-xl p-5 flex items-center gap-4 hover:bg-white/[0.03] transition-colors">
                <div className="size-11 rounded-lg grid place-items-center bg-cyan/10 text-cyan border border-cyan/20">
                  <Icon className="size-5" />
                </div>
                <div className="font-medium">{label}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function PersonalUniverse() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).universe;
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
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} />
      <div className="mt-12 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <Reveal className="space-y-5 text-foreground/80 leading-relaxed text-base md:text-lg">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {copy.items.map((label, index) => {
              const Icon = UNIVERSE_ICONS[index];
              return (
                <span key={label} className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-full glass glow-border text-foreground/85">
                  <Icon className="size-3.5 text-accent" />
                  {label}
                </span>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <RuneSigil />
        </Reveal>
      </div>
    </Section>
  );
}

export function TimelineSection() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).timeline;
  return (
    <Section id="journey">
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} />
      <div className="mt-14 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />
        <div className="space-y-10">
          {copy.items.map(([year, title, text], index) => {
            const left = index % 2 === 0;
            return (
              <Reveal key={title} delay={index * 0.04}>
                <div className="relative md:grid md:grid-cols-2 md:gap-12">
                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="glass glow-border rounded-2xl p-5 inline-block w-full md:w-auto md:max-w-md">
                      <div className="text-xs font-mono uppercase tracking-[0.18em] text-primary">{year}</div>
                      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
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

const LINKS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mauricesar/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mauricesarf/" },
  { icon: Github, label: "GitHub", href: "https://github.com/mauricesar" },
  { icon: Gamepad2, label: "Steam", href: "https://steamcommunity.com/id/mauricesar/" },
  { icon: Mail, label: "Email", href: "mailto:mauricesarf@gmail.com" },
  { icon: FileText, label: "CV", href: "cv-mauricesar-barbosa.pdf" },
];

export function Contact() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).contact;
  return (
    <Section id="contact" className="relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden />
      <div className="relative max-w-4xl mx-auto text-center">
        <SectionTitle align="center" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
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

export function Footer() {
  const { language } = useLanguage();
  const copy = pick(language, COPY).footer;
  const navTargets = ["#about", "#work", "#projects", "#research", "#contact"];
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-muted-foreground">
        <div>
          <div className="font-display text-foreground">Mauricésar Barbosa</div>
          <div className="mt-1">{copy.tagline}</div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {copy.nav.map((label, index) => (
            <a key={label} href={navTargets[index]} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {LINKS.slice(0, 5).map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="size-9 grid place-items-center rounded-lg glass hover:text-primary transition-colors"
            >
              <Icon className="size-4" />
            </a>
          ))}
          <span className="ml-3">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

function InfoTile({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="glass glow-border rounded-xl p-4 flex items-start gap-3 hover:bg-white/[0.03] transition-colors">
      <div className="size-9 rounded-lg grid place-items-center bg-primary/10 text-primary border border-primary/20">
        <Icon className="size-4" />
      </div>
      <span className="text-sm font-medium leading-tight pt-1.5">{label}</span>
    </div>
  );
}

function MetricCard() {
  return (
    <div className="glass glow-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="text-xs font-mono uppercase tracking-[0.18em] text-primary">model.health.vision</div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          training
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          ["Accuracy", "96.2%"],
          ["F1", "0.94"],
          ["Latency", "38ms"],
        ].map(([key, value]) => (
          <div key={key} className="rounded-lg bg-white/[0.02] border border-border/60 p-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{key}</div>
            <div className="text-lg font-display font-semibold text-foreground">{value}</div>
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

function Pills({ items, small = false }: { items: string[]; small?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`font-mono rounded-full bg-white/[0.03] border border-border/60 text-foreground/85 ${
            small ? "text-[11px] px-2.5 py-1" : "text-xs px-3 py-1.5"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function RuneSigil() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.7_0.2_310/0.35),transparent_60%)] blur-2xl" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-2 rounded-full border border-accent/30" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-10 rounded-full border border-primary/30 border-dashed" />
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
