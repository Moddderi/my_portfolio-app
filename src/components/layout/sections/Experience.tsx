import IconArrowAltRight from "~icons/solar/alt-arrow-right-linear";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 border-t border-neutral-900/50 bg-[#050505]/40 backdrop-blur-sm"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl text-white font-light tracking-tight mb-12">
          Professional Experience
        </h2>

        <div className="space-y-12 border-l border-neutral-800 ml-3">
          <div className="relative pl-8 group">
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_0_4px_#050505] group-hover:scale-125 transition-transform group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-lg text-white font-light tracking-tight">
                Frontend Developer
              </h3>
              <span className="text-xs text-neutral-500 font-mono mt-1 md:mt-0">
                2026 — Present
              </span>
            </div>
            <div className="text-sm text-neutral-300 font-normal mb-4">
              BYPASS Team
            </div>
            <ul className="space-y-2 text-sm text-neutral-400 font-extralight list-none">
              <li className="flex items-start gap-2">
                <IconArrowAltRight
                  className="mt-1 text-purple-400"
                  style={{ strokeWidth: 1.5 }}
                />
                Developing responsive landing pages from scratch, as well as
                adapting existing websites and white pages with cross-browser
                support.
              </li>
              <li className="flex items-start gap-2">
                <IconArrowAltRight
                  className="mt-1 text-purple-400"
                  style={{ strokeWidth: 1.5 }}
                />
                Optimizing web performance: analyzing and eliminating redundant
                scripts and heavy elements to significantly boost page load
                speed and runtime efficiency.
              </li>
              <li className="flex items-start gap-2">
                <IconArrowAltRight
                  className="mt-1 text-purple-400"
                  style={{ strokeWidth: 1.5 }}
                />
                Collaborating closely within a team environment to ensure
                consistent development workflows and efficient execution of
                technical specifications.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
