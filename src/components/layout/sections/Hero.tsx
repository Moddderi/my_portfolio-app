import IconLetter from "~icons/solar/letter-linear";

import IconStar from "~icons/solar/star-linear";
import IconCodeSquare from "~icons/solar/code-square-linear";
import IconCase from "~icons/solar/case-minimalistic-linear";

import IconInstagram from "~icons/mdi/instagram";
import IconGithub from "~icons/mdi/github";
import IconTelegram from "~icons/mdi/telegram";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 pt-24 pb-16 lg:pt-24 lg:pb-24 border-x border-b border-neutral-900/80 grid grid-cols-1 lg:grid-cols-2 gap-12 relative bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]/90 z-10"></div>

        {/* Сканирующий луч: добавили will-change-transform */}
        <div
          className="absolute inset-x-0 h-[150px] bg-gradient-to-t from-transparent via-purple-500/20 to-transparent blur-xl z-20 will-change-transform"
          style={{ animation: "scanBeam 6s linear infinite" }}
        ></div>

        {/* Видео: добавили will-change-transform */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover mix-blend-screen will-change-transform"
        >
          <source src="/assets/video/1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col items-start justify-center text-left relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-800/40 bg-purple-900/10 text-xs text-purple-300 mb-8 uppercase tracking-widest font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
          Open for new projects
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-medium tracking-tighter mb-6 leading-[1.05]">
          Building <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 animate-gradient-x">
            RESULTS <br />
          </span>
          <br className="hidden lg:block" />
          through code.
        </h1>
        <p className="text-base md:text-lg text-neutral-400 font-extralight max-w-xl mb-10 leading-relaxed">
          <br />
          <br />
          {/* Full Stack Developer. I build scalable web-apps and reliable services.
          Focused on architecture, clean code, and business results. */}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] animate-gradient-x border border-indigo-400/20"
          >
            <IconCase className="text-lg" style={{ strokeWidth: 1.5 }} />
            Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-xl text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-gradient-x border border-purple-400/20"
          >
            <IconLetter className="text-lg" style={{ strokeWidth: 1.5 }} />
            Contact
          </a>
          <a
            href="#experience"
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white rounded-xl text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] animate-gradient-x border border-fuchsia-400/20"
          >
            <IconStar className="text-lg" style={{ strokeWidth: 1.5 }} />
            Experience
          </a>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-neutral-900/50 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-purple-400 hover:via-fuchsia-500 hover:to-pink-500 transition-all hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
            title="Instagram"
          >
            <IconInstagram className="text-2xl" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-neutral-900/50 flex items-center justify-center text-white hover:bg-[#333] transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/5 hover:border-transparent hover:-translate-y-1"
            title="GitHub"
          >
            <IconGithub className="text-2xl" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-neutral-900/50 flex items-center justify-center text-white hover:bg-indigo-500 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
            title="Telegram"
          >
            <IconTelegram className="text-2xl" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="w-12 h-12 rounded-full bg-neutral-900/50 flex items-center justify-center text-white hover:bg-purple-500 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
            title="Email"
          >
            <IconLetter className="text-2xl" style={{ strokeWidth: 1.5 }} />
          </a>
        </div>
      </div>

      <div className="hidden lg:flex relative items-center justify-center w-full h-full min-h-[300px] mt-12 lg:mt-0 window-content z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent blur-3xl animate-pulse"></div>

        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border border-purple-500/30 p-2 shadow-[0_0_60px_rgba(168,85,247,0.2)] group hover:border-purple-400 hover:shadow-[0_0_80px_rgba(168,85,247,0.4)] transition-all duration-700 animate-float z-20 bg-[#050505]">
          <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-neutral-900">
            <img
              src="assets/avatar.png"
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
            />
            <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors duration-500 z-20"></div>
          </div>

          <div className="absolute -bottom-2 -right-4 md:-bottom-2 md:-right-8 z-[100] bg-neutral-900/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(168,85,247,0.3)] flex items-center gap-3 animate-float-delayed isolate">
            <div className="w-10 h-10 rounded-full bg-purple-900/40 flex items-center justify-center text-purple-400 border border-purple-500/20">
              <IconCodeSquare
                className="text-2xl"
                style={{ strokeWidth: 1.5 }}
              />
            </div>
            <div>
              <div className="text-xs text-neutral-400 font-extralight">
                Опыт
              </div>
              <div className="text-sm text-white font-normal whitespace-nowrap">
                1.5+ лет
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
