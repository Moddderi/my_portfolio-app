import { Outlet } from "react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "./components/layout/Footer";

export const App = () => {
  return (
    <div className="text-neutral-400 antialiased selection:bg-purple-900/50 selection:text-white relative min-h-screen bg-[#050505]">
      <div className="fixed inset-0 z-[50] pointer-events-none bg-noise mix-blend-overlay opacity-30" />

      <div className="fixed inset-0 z-[1] pointer-events-none bg-grid animate-grid-flow" />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-[#050505]/0 to-[#050505]/0 z-[2] animate-pulse-slow pointer-events-none" />

      <div className="sticky top-0 left-0 right-0 w-full z-[70]">
        <Header />
      </div>

      <div className="relative z-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
