import IconLetter from "~icons/solar/letter-linear";
import IconLetterOpened from "~icons/solar/letter-opened-linear";
import IconPlain from "~icons/solar/plain-linear";
import IconDocument from "~icons/solar/document-linear";

// Social media icons from the MDI set
import IconInstagram from "~icons/mdi/instagram";
import IconGithub from "~icons/mdi/github";
import IconTelegram from "~icons/mdi/telegram";

export const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-2xl mx-auto px-6 group-3d perspective-1200">
        <div className="card-3d p-8 md:p-12 rounded-3xl border border-neutral-800/80 bg-[#050505]/60 backdrop-blur-xl relative overflow-hidden shadow-2xl hover:border-purple-500/30 hover:shadow-[0_40px_80px_-20px_rgba(168,85,247,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/10 opacity-50"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-fuchsia-500/20 blur-3xl rounded-full animate-blob animation-delay-2000"></div>
          <div className="relative z-10 text-center content-3d">
            <IconLetterOpened
              className="text-5xl text-purple-400 mb-6"
              style={{ strokeWidth: 1.5 }}
            />
            <h2 className="text-3xl text-white font-light tracking-tight mb-4">
              Let’s discuss your next project
            </h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto font-extralight">
              Ready to dive into your business challenges and deliver an optimal
              technical solution. Get in touch, and let’s find the best way to
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="w-full sm:w-auto px-8 py-4 text-white rounded-xl text-sm font-medium hover:text-white transition-all shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 animate-gradient-x border border-purple-400/20"
              >
                <IconPlain className="text-xl" style={{ strokeWidth: 1.5 }} />
                Let's Talk
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 bg-neutral-800/60 backdrop-blur-md text-white rounded-xl text-sm font-normal hover:bg-neutral-700 transition-all border border-white/10 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                <IconDocument
                  className="text-lg"
                  style={{ strokeWidth: 1.5 }}
                />
                Download CV
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-800/50 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-purple-400 hover:via-fuchsia-500 hover:to-pink-500 transition-all hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
                title="Instagram"
              >
                <IconInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-800/50 flex items-center justify-center text-white hover:bg-[#333] transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/5 hover:border-transparent hover:-translate-y-1"
                title="GitHub"
              >
                <IconGithub className="text-2xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-800/50 flex items-center justify-center text-white hover:bg-indigo-500 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
                title="Telegram"
              >
                <IconTelegram className="text-2xl" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="w-12 h-12 rounded-full bg-neutral-800/50 flex items-center justify-center text-white hover:bg-purple-500 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
                title="Email"
              >
                <IconLetter className="text-2xl" style={{ strokeWidth: 1.5 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
