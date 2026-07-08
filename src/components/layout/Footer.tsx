export const Footer = () => {
  return (
    <footer className="py-8 border-t border-neutral-900/80 bg-[#050505]/80 backdrop-blur-lg text-center relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white text-xl font-medium tracking-tighter uppercase flex items-center gap-1">
          DEV
          <span className="text-purple-400">.</span>
        </div>
        <p className="text-xs text-neutral-500 font-extralight">
          © 2026 Full Stack Developer Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
