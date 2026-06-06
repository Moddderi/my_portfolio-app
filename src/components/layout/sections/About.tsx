import SolarVerifiedCheckBold from "~icons/solar/verified-check-bold";

export const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto border-x border-b border-neutral-900/80 p-8 md:p-16 flex flex-col items-start bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.06)_0%,_transparent_50%)] bg-[#050505]/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <div className="text-xs text-neutral-500 uppercase tracking-widest font-normal">
              Introduction
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-2">
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1]">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 animate-gradient-x">
                Oleh Kyrychenko
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 font-extralight mt-2 tracking-tight">
              I turn bold business ideas into high-performance code and scalable
              architecture.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-base md:text-lg text-neutral-400 font-extralight leading-relaxed">
            <p className="text-lg md:text-xl text-neutral-300 font-extralight leading-relaxed mb-4">
              I specialize in architecting complex web platforms, dynamic SaaS
              products, and custom solutions with non-standard functionality.
              From tailored feature development to heavy-lift database design, I
              build systems engineered around your unique business logic.
            </p>
            <p className="text-base md:text-lg text-neutral-400 font-extralight leading-relaxed">
              For me, code is never just an end in itself—it’s a powerful tool
              to solve your specific challenges. I design robust architecture
              engineered to drive your business growth for years to come.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#EE5E4C]/30 bg-[#EE5E4C]/10 text-sm text-white font-normal shadow-[0_0_15px_rgba(238,94,76,0.15)] backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#EE5E4C]/20 hover:border-[#EE5E4C]/50 hover:shadow-[0_0_20px_rgba(238,94,76,0.3)]">
              <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 bg-[#EE5E4C]">
                <img
                  src="assets/mate.png"
                  alt="Mate Academy"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="tracking-tight">Graduate Mate Academy</span>
              <SolarVerifiedCheckBold className="text-blue-500 text-lg" />
            </div>

            {/* Блок ItStep Academy */}
            <div className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm text-white font-normal shadow-[0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 bg-blue-600">
                <img
                  src="assets/itStep.png"
                  alt="ItStep Academy"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="tracking-tight">Graduate ItStep Academy</span>
              <SolarVerifiedCheckBold className="text-blue-400 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
