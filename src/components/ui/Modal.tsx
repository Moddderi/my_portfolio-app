import { useEffect } from "react";
import { createPortal } from "react-dom";
import IconClose from "~icons/solar/close-circle-linear"; // Импортируйте иконку крестика

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  // Блокируем скролл страницы при открытой модалке
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Рендерим модалку в корень body, чтобы избежать конфликтов с CSS стилями карточек
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity">
      {/* Клик по заднему фону закроет модалку */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Контентное окно */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-neutral-800 bg-[#0d0d0d] p-6 md:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl text-white font-light tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <IconClose className="text-2xl" />
          </button>
        </div>

        <div className="text-sm text-neutral-400 font-extralight leading-relaxed">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};
