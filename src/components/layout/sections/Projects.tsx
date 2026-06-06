import { useState } from "react";
import { PROJECTS_DATA } from "@/data/projects";
import type { ProjectData } from "@/data/projects";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { motion } from "framer-motion";

import IconArrowRightUp from "~icons/solar/arrow-right-up-linear";
import IconFolder from "~icons/solar/folder-with-files-linear";
import IconInfoCircle from "~icons/solar/info-circle-linear";

const marqueeVariants = {
  animate: {
    x: [0, "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 30,
        ease: "linear" as const,
      },
    },
  },
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  const renderProjectRow = (uniqueKey: string) => {
    return (
      <div className="flex gap-8 pr-8 shrink-0">
        {PROJECTS_DATA.map((project, index) => {
          // Деструктуризируем новые индивидуальные стили из конфига темы
          const { cardHover, textLink, btnHover } = project.theme;

          return (
            <div
              key={`${project.id}-${uniqueKey}-${index}`}
              className="w-95 shrink-0"
            >
              <div
                className={`group flex flex-col h-full rounded-2xl border border-neutral-800/60 bg-[#070707] overflow-hidden ${cardHover} transition-all duration-300`}
              >
                <div
                  className="h-52 relative overflow-hidden flex items-center justify-center bg-neutral-900 cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#070707] via-[#070707]/50 to-transparent"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col relative z-10 -mt-10 bg-linear-to-t from-[#070707] via-[#070707] to-transparent">
                  <h3 className="text-lg text-white font-light tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-extralight mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-0.5 rounded bg-neutral-900/60 text-neutral-400 text-[11px] font-medium border border-neutral-800"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <button
                      onClick={() => setActiveProject(project)}
                      className={`text-xs text-white font-medium flex items-center gap-1.5 transition-all px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 ${btnHover}`}
                    >
                      <IconInfoCircle className="text-base" /> More Details
                    </button>
                    <a
                      href={project.liveLink}
                      className={`text-xs ${textLink} font-normal flex items-center gap-1 transition-colors`}
                    >
                      Live Demo <IconArrowRightUp className="text-base" />
                    </a>
                    <a
                      href={project.codeLink}
                      className="text-xs text-neutral-500 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <IconFolder className="text-base" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-24 relative z-10 overflow-hidden w-full"
    >
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tighter mb-4">
              PROJECTS
            </h2>
          </div>
        </div>
      </div>

      <div className="carousel-container w-full relative overflow-hidden flex py-4 mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max items-center">
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex shrink-0 animate-carousel"
          >
            {renderProjectRow("first")}
          </motion.div>
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex shrink-0 animate-carousel"
          >
            {renderProjectRow("second")}
          </motion.div>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
