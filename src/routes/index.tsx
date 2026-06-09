import { createFileRoute } from "@tanstack/react-router";
import { Header, HeaderProgress } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Experience,
  Research,
  Skills,
  Projects,
  Education,
  PersonalUniverse,
  TimelineSection,
  Contact,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mauricésar Barbosa | CTO, AI, Software & Education" },
      {
        name: "description",
        content:
          "Personal site of Mauricésar Barbosa — CTO at Carper Solutions, Technical Lead at Hub FDS, AI researcher in computer vision for healthcare, educator and builder of innovative software.",
      },
      { property: "og:title", content: "Mauricésar Barbosa | CTO, AI, Software & Education" },
      {
        property: "og:description",
        content:
          "CTO, technical lead, AI researcher and technology educator. Innovative solutions in software, AI and computer vision applied to healthcare.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
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
  );
}
