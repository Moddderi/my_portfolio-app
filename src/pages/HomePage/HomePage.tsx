import { Hero } from "../../components/layout/sections/Hero";
import { About } from "@/components/layout/sections/About";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { Stack } from "@/components/layout/sections/Stack";
import { Projects } from "@/components/layout/sections/Projects";
import { Experience } from "@/components/layout/sections/Experience";
import { Contact } from "@/components/layout/sections/Contact";

export const HomePage = () => {
  return (
    <>
      <main>
        <Hero />

        <About />

        <div className="w-full bg-gradient-to-r from-[#050505] via-neutral-900/30 to-[#050505] border-y border-white/5  flex justify-center items-center flex-wrap gap-6 md:gap-14 px-6 relative z-10 backdrop-blur-md">
          <TechMarquee />
        </div>

        <Stack />

        <Projects />

        <Experience />

        <Contact />
      </main>
    </>
  );
};
