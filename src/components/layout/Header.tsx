import { useState } from "react";
import IconHamburger from "~icons/solar/hamburger-menu-linear";

// Если в вашей иконке нет встроенного крестика, можно импортировать иконку закрытия
// или просто красиво повернуть бургер. Ниже покажу, как сделать анимацию.

export const Header = () => {
  // 1. Создаем состояние для отслеживания открытия меню
  const [isOpen, setIsOpen] = useState(false);

  // Функция для плавного закрытия при клике на ссылку
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="relative w-full border-b border-white/5 bg-[#050505]/70 backdrop-blur-3xl z-[60] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-white text-xl font-medium tracking-tighter uppercase relative z-10"
          >
            DEV <span className="text-purple-400">.</span> KIRICH
          </a>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center gap-8 text-sm font-light">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#stack" className="hover:text-white transition-colors">
              Technologies
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 text-white rounded-lg text-sm font-medium hover:text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hidden md:block hover:-translate-y-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 animate-gradient-x border border-purple-400/20"
          >
            Contact
          </a>

          {/* 2. Кнопка бургера с обработчиком клика */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white relative z-10 p-2 -mr-2 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <IconHamburger
              className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-90 text-purple-400" : ""}`}
              style={{ strokeWidth: 1.5 }}
            />
          </button>
        </div>
      </nav>

      {/* 3. Мобильное меню с динамическими классами Tailwind */}
      <div
        className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-3xl z-[50] transition-all duration-500 ease-out flex flex-col items-center justify-center md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        {/* Добавляем handleLinkClick, чтобы меню закрывалось после выбора раздела */}
        <div className="flex flex-col items-center w-full max-w-sm px-6 gap-2 text-xl tracking-tight">
          <a
            href="#about"
            onClick={handleLinkClick}
            className="mobile-link text-neutral-400 hover:text-white font-light transition-colors py-4 w-full text-center border-b border-white/5"
          >
            About
          </a>
          <a
            href="#stack"
            onClick={handleLinkClick}
            className="mobile-link text-neutral-400 hover:text-white font-light transition-colors py-4 w-full text-center border-b border-white/5"
          >
            Technologies
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="mobile-link text-neutral-400 hover:text-white font-light transition-colors py-4 w-full text-center border-b border-white/5"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={handleLinkClick}
            className="mobile-link text-neutral-400 hover:text-white font-light transition-colors py-4 w-full text-center border-b border-white/5"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mobile-link mt-6 w-full py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-xl text-center text-base font-medium border border-purple-400/20 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:scale-[1.02] transition-transform"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
