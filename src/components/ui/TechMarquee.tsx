import { useState } from "react";
// Импортируем твой массив с путями к SVG
import { LANGUAGE_IMAGES } from "@/data/languages";

export const TechMarquee = () => {
  const [loadedCount, setLoadedCount] = useState(0);

  // Вычисляем состояние "на лету" прямо во время рендера, без всяких useEffect!
  const allLoaded = loadedCount > 0 && loadedCount === LANGUAGE_IMAGES.length;

  return (
    /* Добавили carousel-container в конец списка классов */
    <div className="w-full overflow-hidden whitespace-nowrap relative select-none py-6 will-change-transform carousel-container">
      <div className="absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center">
        {/* ПЕРВЫЙ РЯД */}
        <div
          className={`flex items-center gap-16 md:gap-20 pr-16 md:pr-20 shrink-0 ${allLoaded ? "animate-carousel" : ""}`}
        >
          {LANGUAGE_IMAGES.map((tech) => (
            <div
              key={tech.name + "-first"}
              className="flex items-center justify-center group cursor-default transition-transform duration-300 hover:scale-110"
              title={tech.name}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img
                  src={tech.href}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  loading="eager"
                  onLoad={() => setLoadedCount((prev) => prev + 1)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ВТОРОЙ РЯД (ДУБЛИКАТ ДЛЯ БЕСШОВНОСТИ) */}
        <div
          className={`flex items-center gap-16 md:gap-20 pr-16 md:pr-20 shrink-0 ${allLoaded ? "animate-carousel" : ""}`}
        >
          {LANGUAGE_IMAGES.map((tech) => (
            <div
              key={tech.name + "-second"}
              className="flex items-center justify-center group cursor-default transition-transform duration-300 hover:scale-110"
              title={tech.name}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img
                  src={tech.href}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
