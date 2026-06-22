import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectData, ProjectTech } from "../../data/projects";

import IconClose from "~icons/solar/close-circle-linear";
import IconFolder from "~icons/solar/folder-with-files-linear";
import IconPlay from "~icons/solar/play-circle-linear";
import IconDocument from "~icons/solar/document-text-linear";
import IconArrowLeft from "~icons/solar/arrow-left-linear";
import IconArrowRight from "~icons/solar/arrow-right-linear";
import IconShop from "~icons/solar/shop-linear";
import IconSmartphone from "~icons/solar/smartphone-line-duotone";
import IconGamepad from "~icons/solar/gamepad-linear";
import IconLink from "~icons/solar/link-linear";

const ACTION_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "solar:play-circle-linear": IconPlay,
  "solar:document-text-linear": IconDocument,
  "solar:shop-linear": IconShop,
  "solar:smartphone-line-duotone": IconSmartphone,
  "solar:gamepad-linear": IconGamepad,
  "solar:link-linear": IconLink,
};

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <ModalContent key={project.id} project={project} onClose={onClose} />,
    document.body,
  );
};

interface ModalContentProps {
  project: ProjectData;
  onClose: () => void;
}

const ModalContent = ({ project, onClose }: ModalContentProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectImages = project.images;

  // Синхронизируем скролл контейнера при изменении currentSlide
  useEffect(() => {
    const container = document.getElementById("modal-slider-container");
    const slides = container?.querySelectorAll(".slider-slide");
    if (container && slides && slides[currentSlide]) {
      slides[currentSlide].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [currentSlide, projectImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length,
    );
  };

  const { border, shadow, badge, gradient } = project.theme;
  const LiveIconComponent = ACTION_ICONS[project.liveIcon] || IconPlay;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-4 py-6 sm:py-12 bg-[#050505]/60 backdrop-blur-md transition-all duration-300">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <div
        className={`relative bg-linear-to-b from-[#0a0a0a] to-[#050505] border ${border} rounded-3xl p-6 sm:p-8 w-full max-w-5xl ${shadow} transform transition-all duration-500 ease-out overflow-y-auto max-h-full scrollbar-none`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-neutral-500 hover:text-white transition-colors bg-neutral-900/50 hover:bg-neutral-800 rounded-full w-10 h-10 flex items-center justify-center border border-white/5 z-30"
        >
          <IconClose className="text-xl" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* РОДИТЕЛЬСКИЙ БЛОК СЛАЙДЕРА */}
          <div className="lg:col-span-2 flex flex-col bg-neutral-950/40 rounded-2xl border border-neutral-800/40 overflow-hidden min-h-70 lg:h-full relative group">
            {/* СКРОЛЛЯЩИЙСЯ КОНТЕЙНЕР ДЛЯ КАРТИНОК */}
            <div
              id="modal-slider-container"
              className="relative w-full h-full min-h-60 flex-1 flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
            >
              {projectImages.map((imgUrl, index) => (
                <div
                  key={index}
                  className="slider-slide w-full h-full flex-shrink-0 snap-start relative min-w-full flex items-center justify-center bg-black/20"
                >
                  {/* ИЗМЕНЕНО: object-cover на object-contain */}
                  <img
                    src={imgUrl}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            {/* КНОПКИ СТРЕЛОК (вынесены из скроллящегося контейнера) */}
            {currentSlide > 0 && (
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 border border-white/10 hidden sm:flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900"
              >
                <IconArrowLeft className="text-sm" />
              </button>
            )}

            {currentSlide < projectImages.length - 1 && (
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 border border-white/10 hidden sm:flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900"
              >
                <IconArrowRight className="text-sm" />
              </button>
            )}

            {/* Точки-индикаторы */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
              {projectImages.map((_, index) => {
                let activeColor = "bg-purple-500";
                if (project.id === "kirich-sewing-studio")
                  activeColor = "bg-fuchsia-500";
                if (project.id === "phone-catalog")
                  activeColor = "bg-slate-400";
                if (project.id === "my-bike") activeColor = "bg-amber-500";
                if (project.id === "game-2048") activeColor = "bg-emerald-500";

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? `w-4 ${activeColor}`
                        : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Контент */}
          <div className="lg:col-span-3 flex flex-col justify-center py-2">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${badge} text-[11px] mb-5 uppercase tracking-widest font-medium w-max`}
            >
              {project.badge}
            </div>

            <h3 className="text-3xl sm:text-4xl text-white font-medium tracking-tight mb-5 leading-tight">
              {project.title}
            </h3>

            <div className="space-y-4 text-neutral-400 font-extralight mb-8 text-base leading-relaxed">
              {project.paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Стек */}
            <div className="mb-8">
              <h4 className="text-white text-sm font-medium mb-3">
                Стек технологий
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: ProjectTech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 text-neutral-300 text-xs font-medium border border-neutral-800 flex items-center gap-1.5"
                  >
                    {tech.icon && (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-3.5 h-3.5 object-contain"
                      />
                    )}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex flex-wrap items-center gap-4 mt-auto">
              <a
                href={project.liveLink}
                className={`px-6 py-3.5 ${gradient} text-white rounded-xl text-sm font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 w-full sm:w-auto`}
              >
                <LiveIconComponent className="text-xl" />
                {project.liveLabel}
              </a>
              <a
                href={project.codeLink}
                className="px-6 py-3.5 bg-neutral-800 text-white rounded-xl text-sm font-medium hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2 border border-neutral-700 w-full sm:w-auto"
              >
                <IconFolder className="text-xl" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
