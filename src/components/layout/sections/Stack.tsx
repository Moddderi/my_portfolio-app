import { useState, useRef, useEffect } from "react";
import IconArrowAltUp from "~icons/solar/alt-arrow-up-linear";
import IconLayers from "~icons/solar/layers-linear";
import IconMonitorSmartphone from "~icons/solar/monitor-smartphone-linear";
import IconServerSquare from "~icons/solar/server-square-linear";
import IconDatabase from "~icons/solar/database-linear";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

// Импортируем твой готовый массив иконок
import { LANGUAGE_IMAGES } from "@/data/languages";

export const Stack = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActivePopup(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const togglePopup = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePopup(activePopup === cardId ? null : cardId);
  };

  const frontendTech = LANGUAGE_IMAGES.filter((tech) =>
    [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind Css",
      "Redux",
      "Framer Motion",
      "Html5",
      "Css",
      "Sass",
    ].includes(tech.name),
  );

  const backendTech = LANGUAGE_IMAGES.filter((tech) =>
    ["Node JS", "Express JS", "Sequelize", "Zod"].includes(tech.name),
  );

  const devopsTech = LANGUAGE_IMAGES.filter((tech) =>
    ["Git", "Postman"].includes(tech.name),
  );

  return (
    <section
      id="stack"
      className="py-24 border-t border-neutral-900/50 bg-[#050505]/75 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        {/* Хедер секции */}
        <div className="mb-16 flex flex-col lg:flex-row gap-10 lg:items-end justify-between relative">
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full z-0 pointer-events-none"></div>
          <Reveal className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs text-purple-300 mb-6 uppercase tracking-widest font-medium">
              MY SKILLS
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tighter mb-4">
              Tech Stack
            </h2>
            <p className="text-base text-neutral-400 font-extralight max-w-xl leading-relaxed">
              Tools I use to build high-load, high-performance products.
            </p>
          </Reveal>

          {/* Проекты / Технологии Каунтеры */}
          <Reveal delay={0.15} direction="left" className="relative z-10">
            <div className="flex flex-wrap sm:flex-nowrap gap-8 md:gap-10 p-6 md:p-8 rounded-3xl border border-neutral-800/60 bg-[#070707]/95 backdrop-blur-md shadow-2xl">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl text-white font-medium tracking-tighter mb-1 flex items-center">
                  5
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 ml-1">
                    +
                  </span>
                </span>
                <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  PROJECTS
                </span>
              </div>
              <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent"></div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl text-white font-medium tracking-tighter mb-1 flex items-center">
                  10
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 ml-1">
                    +
                  </span>
                </span>
                <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  TECHNOLOGIES
                </span>
              </div>
              <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent"></div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl text-white font-medium tracking-tighter mb-1 flex items-center">
                  100
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 ml-1">
                    %
                  </span>
                </span>
                <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  DEDICATION
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Сетка карточек */}
        <Stagger
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          stagger={0.15}
          delay={0.15}
        >
          {/* 1. FRONTEND CARD */}
          <StaggerItem className="group-3d h-full">
            <div className="card-3d p-8 rounded-3xl border border-neutral-800/60 bg-neutral-900/60 hover:bg-neutral-900/80 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.15)] hover:border-indigo-500/40 transition-all duration-500 relative flex flex-col h-full group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -z-10 group-hover:bg-indigo-500/20 transition-colors duration-500 animate-blob"></div>
              <div className="content-3d flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-indigo-400 group-hover:border-indigo-500/40 group-hover:bg-indigo-900/30 transition-all duration-500">
                  <IconMonitorSmartphone
                    className="text-2xl"
                    style={{ strokeWidth: 1.5 }}
                  />
                </div>
                <h3 className="text-xl text-white font-light mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">
                  Frontend
                </h3>
                <p className="text-sm text-neutral-400 font-extralight mb-8 flex-1 group-hover:text-neutral-300 transition-colors">
                  Creating interactive, responsive, and high-performance user
                  interfaces with a focus on UX and accessibility.
                </p>

                {/* Обертка кнопки и попапа БЕЗ overflow-visible проблем */}
                <div className="relative mt-auto w-full lg:w-max">
                  {/* Мобильный/Десктопный адаптированный контейнер */}
                  <div
                    className={`lg:absolute lg:bottom-full lg:left-0 lg:mb-3 w-full lg:w-max lg:max-w-md rounded-2xl border border-neutral-800 bg-neutral-950/95 lg:bg-neutral-900/98 backdrop-blur-xl p-5 shadow-2xl shadow-indigo-500/10 transition-all duration-300 z-50
                      /* Логика отображения */
                      ${
                        activePopup === "frontend"
                          ? "opacity-100 visible max-h-[500px] my-4 lg:my-0 lg:translate-y-0"
                          : "opacity-0 invisible max-h-0 lg:max-h-none overflow-hidden lg:overflow-visible lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0"
                      }`}
                  >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      {frontendTech.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 text-sm text-neutral-300 hover:text-indigo-300 transition-colors cursor-default"
                        >
                          <img
                            src={tech.href}
                            alt={tech.name}
                            className="w-5 h-5 object-contain"
                          />
                          <span className="font-normal text-xs sm:text-sm">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => togglePopup("frontend", e)}
                    className={`w-full lg:w-auto px-5 py-2.5 rounded-xl border text-sm font-normal transition-all flex items-center justify-center lg:justify-start gap-2 lg:group-hover:text-white lg:group-hover:border-indigo-500/50 lg:group-hover:bg-indigo-900/40 
                      ${activePopup === "frontend" ? "text-white border-indigo-500/50 bg-indigo-900/40" : "border-neutral-800 bg-neutral-900/90 text-neutral-300"}`}
                  >
                    <IconLayers
                      className="text-lg"
                      style={{ strokeWidth: 1.5 }}
                    />
                    Stack
                    <IconArrowAltUp
                      className={`ml-1 opacity-50 transition-transform ${activePopup === "frontend" ? "rotate-180" : "lg:group-hover:rotate-180"}`}
                      style={{ strokeWidth: 1.5 }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* 2. BACKEND CARD */}
          <StaggerItem className="group-3d h-full">
            <div className="card-3d p-8 rounded-3xl border border-neutral-800/60 bg-neutral-900/60 hover:bg-neutral-900/80 hover:shadow-[0_20px_40px_-10px_rgba(168,85,247,0.15)] hover:border-purple-500/40 transition-all duration-500 relative flex flex-col h-full group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full -z-10 group-hover:bg-purple-500/20 transition-colors duration-500 animate-blob animation-delay-2000"></div>
              <div className="content-3d flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-purple-400 group-hover:border-purple-500/40 group-hover:bg-purple-900/30 transition-all duration-500">
                  <IconServerSquare
                    className="text-2xl"
                    style={{ strokeWidth: 1.5 }}
                  />
                </div>
                <h3 className="text-xl text-white font-light mb-3 tracking-tight group-hover:text-purple-300 transition-colors">
                  Backend
                </h3>
                <p className="text-sm text-neutral-400 font-extralight mb-8 flex-1 group-hover:text-neutral-300 transition-colors">
                  Architecting reliable, scalable APIs and microservices capable
                  of handling high loads.
                </p>

                <div className="relative mt-auto w-full lg:w-max">
                  <div
                    className={`lg:absolute lg:bottom-full lg:left-0 lg:mb-3 w-full lg:w-max lg:max-w-md rounded-2xl border border-neutral-800 bg-neutral-950/95 lg:bg-neutral-900/98 backdrop-blur-xl p-5 shadow-2xl shadow-purple-500/10 transition-all duration-300 z-50
                      ${
                        activePopup === "backend"
                          ? "opacity-100 visible max-h-[500px] my-4 lg:my-0 lg:translate-y-0"
                          : "opacity-0 invisible max-h-0 lg:max-h-none overflow-hidden lg:overflow-visible lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0"
                      }`}
                  >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      {backendTech.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 text-sm text-neutral-300 hover:text-purple-300 transition-colors cursor-default"
                        >
                          <img
                            src={tech.href}
                            alt={tech.name}
                            className="w-5 h-5 object-contain"
                          />
                          <span className="font-normal text-xs sm:text-sm">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => togglePopup("backend", e)}
                    className={`w-full lg:w-auto px-5 py-2.5 rounded-xl border text-sm font-normal transition-all flex items-center justify-center lg:justify-start gap-2 lg:group-hover:text-white lg:group-hover:border-purple-500/50 lg:group-hover:bg-purple-900/40 
                      ${activePopup === "backend" ? "text-white border-purple-500/50 bg-purple-900/40" : "border-neutral-800 bg-neutral-900/90 text-neutral-300"}`}
                  >
                    <IconLayers
                      className="text-lg"
                      style={{ strokeWidth: 1.5 }}
                    />
                    Stack
                    <IconArrowAltUp
                      className={`ml-1 opacity-50 transition-transform ${activePopup === "backend" ? "rotate-180" : "lg:group-hover:rotate-180"}`}
                      style={{ strokeWidth: 1.5 }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* 3. DEVOPS & TOOLS CARD */}
          <StaggerItem className="group-3d h-full">
            <div className="card-3d p-8 rounded-3xl border border-neutral-800/60 bg-neutral-900/60 hover:bg-neutral-900/80 hover:shadow-[0_20px_40px_-10px_rgba(217,70,239,0.15)] hover:border-fuchsia-500/40 transition-all duration-500 relative flex flex-col h-full group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 blur-[80px] rounded-full -z-10 group-hover:bg-fuchsia-500/20 transition-colors duration-500 animate-blob animation-delay-4000"></div>
              <div className="content-3d flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/40 group-hover:bg-fuchsia-900/30 transition-all duration-500">
                  <IconDatabase
                    className="text-2xl"
                    style={{ strokeWidth: 1.5 }}
                  />
                </div>
                <h3 className="text-xl text-white font-light mb-3 tracking-tight group-hover:text-fuchsia-300 transition-colors">
                  DevOps &amp; Tools
                </h3>
                <p className="text-sm text-neutral-400 font-extralight mb-8 flex-1 group-hover:text-neutral-300 transition-colors">
                  Optimizing databases, configuring CI/CD pipelines, and
                  containerizing applications for seamless deployment.
                </p>

                <div className="relative mt-auto w-full lg:w-max">
                  <div
                    className={`lg:absolute lg:bottom-full lg:left-0 lg:mb-3 w-full lg:w-max lg:max-w-md rounded-2xl border border-neutral-800 bg-neutral-950/95 lg:bg-neutral-900/98 backdrop-blur-xl p-5 shadow-2xl shadow-fuchsia-500/10 transition-all duration-300 z-50
                      ${
                        activePopup === "devops"
                          ? "opacity-100 visible max-h-[500px] my-4 lg:my-0 lg:translate-y-0"
                          : "opacity-0 invisible max-h-0 lg:max-h-none overflow-hidden lg:overflow-visible lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0"
                      }`}
                  >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      {devopsTech.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 text-sm text-neutral-300 hover:text-fuchsia-300 transition-colors cursor-default"
                        >
                          <img
                            src={tech.href}
                            alt={tech.name}
                            className="w-5 h-5 object-contain"
                          />
                          <span className="font-normal text-xs sm:text-sm">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => togglePopup("devops", e)}
                    className={`w-full lg:w-auto px-5 py-2.5 rounded-xl border text-sm font-normal transition-all flex items-center justify-center lg:justify-start gap-2 lg:group-hover:text-white lg:group-hover:border-fuchsia-500/50 lg:group-hover:bg-fuchsia-900/40 
                      ${activePopup === "devops" ? "text-white border-fuchsia-500/50 bg-fuchsia-900/40" : "border-neutral-800 bg-neutral-900/90 text-neutral-300"}`}
                  >
                    <IconLayers
                      className="text-lg"
                      style={{ strokeWidth: 1.5 }}
                    />
                    Stack
                    <IconArrowAltUp
                      className={`ml-1 opacity-50 transition-transform ${activePopup === "devops" ? "rotate-180" : "lg:group-hover:rotate-180"}`}
                      style={{ strokeWidth: 1.5 }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};
