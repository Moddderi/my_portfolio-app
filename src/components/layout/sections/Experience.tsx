import { motion } from "framer-motion";
import IconArrowAltRight from "~icons/solar/alt-arrow-right-linear";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 border-t border-neutral-900/50 bg-[#050505]/40 backdrop-blur-sm"
    >
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <h2 className="text-2xl text-white font-light tracking-tight mb-12">
            Professional Experience
          </h2>
        </Reveal>

        <div className="space-y-12 border-l border-neutral-800 ml-3">
          <Reveal delay={0.1} direction="left">
            <div className="relative pl-8 group">
              <motion.div
                className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_0_4px_#050505] group-hover:scale-125 transition-transform group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260 }}
              />
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
              <Stagger className="space-y-2" stagger={0.1} delay={0.15}>
                <StaggerItem>
                  <div className="flex items-start gap-2 text-sm text-neutral-400 font-extralight">
                    <IconArrowAltRight
                      className="mt-1 text-purple-400 shrink-0"
                      style={{ strokeWidth: 1.5 }}
                    />
                    Developing responsive landing pages from scratch, as well as
                    adapting existing websites and white pages with cross-browser
                    support.
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-start gap-2 text-sm text-neutral-400 font-extralight">
                    <IconArrowAltRight
                      className="mt-1 text-purple-400 shrink-0"
                      style={{ strokeWidth: 1.5 }}
                    />
                    Optimizing web performance: analyzing and eliminating
                    redundant scripts and heavy elements to significantly boost
                    page load speed and runtime efficiency.
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-start gap-2 text-sm text-neutral-400 font-extralight">
                    <IconArrowAltRight
                      className="mt-1 text-purple-400 shrink-0"
                      style={{ strokeWidth: 1.5 }}
                    />
                    Collaborating closely within a team environment to ensure
                    consistent development workflows and efficient execution of
                    technical specifications.
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
