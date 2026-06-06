import IconStarsMinimalistic from "~icons/solar/stars-minimalistic-linear";
import IconAltArrowRight from "~icons/solar/alt-arrow-right-linear";

export const Banner = () => {
  return (
    <aside className="relative  z-[70] w-full overflow-hidden border-b border-white/10 backdrop-blur-md bg-black/15">
      {/* Базовый фиолетовый градиент */}
      <div className="absolute inset-0 bg-banner-gradient" aria-hidden="true" />

      {/* Наложение текстуры шума с эффектом смешивания overlay */}
      <div
        className="absolute inset-0 bg-banner-noise opacity-[0.15] mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Затемняющий слой для читаемости текста */}
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      {/* Контент баннера */}
      <div className="relative mx-auto max-w-6xl ">
        <a
          href="#contact"
          className="group relative flex h-9 items-center justify-center gap-2.5 px-6 text-xs font-medium tracking-wide text-white/90 sm:text-sm"
        >
          {/* Иконка звезд с эффектом мягкого неонового свечения */}
          <IconStarsMinimalistic className="w-4 h-4 flex-shrink-0 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />

          {/* Текст для мобильных экранов */}
          <span className="truncate drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] sm:hidden">
            Сайт під ключ — від ідеї до готового проєкту
          </span>

          {/* Текст для десктопа */}
          <span className="hidden truncate drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] sm:inline">
            Сайт під ключ — від ідеї до готового проєкту
          </span>

          {/* Стрелка с анимацией сдвига вправо при наведении */}
          <IconAltArrowRight className="w-4 h-4 flex-shrink-0 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </aside>
  );
};
