import { Header, HeaderProgress } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  PersonalUniverse,
  Projects,
  Research,
  Skills,
  TimelineSection,
} from "@/components/site/Sections";
import { LanguageProvider } from "@/components/site/LanguageContext";

export function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <Header />
        <HeaderProgress />
        <main>
          <Hero />
          <About />
          <Experience />
          <Research />
          <Skills />
          <Projects />
          <Education />
          <PersonalUniverse />
          <TimelineSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
