import { Introduction } from "@/components/introduction";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </section>
  );
}
