import { useState } from "react";
import { Portal } from "../Portal";
import IconLetter from "~icons/solar/letter-linear";
import IconLetterOpened from "~icons/solar/letter-opened-linear";
import IconPlain from "~icons/solar/plain-linear";
import IconDocument from "~icons/solar/document-linear";

import IconLinkedin from "~icons/mdi/linkedin";
import IconGithub from "~icons/mdi/github";
import IconTelegram from "~icons/mdi/telegram";

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Отправляем запрос на Vercel Serverless Function (папка /api/contact)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Email successfully sent!");
        setEmail("");
        setMessage("");
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        setStatus(data.message || "Error while sending");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("Failed to connect to server");
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-2xl mx-auto px-6 group-3d perspective-1200">
        <div className="card-3d p-8 md:p-12 rounded-3xl border border-neutral-800/80 bg-[#050505]/60 backdrop-blur-xl relative overflow-hidden shadow-2xl hover:border-purple-500/30 hover:shadow-[0_40px_80px_-20px_rgba(168,85,247,0.2)]">
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-fuchsia-500/10 opacity-50"></div>
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
              <button
                onClick={() => setIsOpen(true)}
                className="w-full sm:w-auto px-8 py-4 text-white rounded-xl text-sm font-medium hover:text-white transition-all shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 bg-linear-to-r from-purple-500 to-fuchsia-500 animate-gradient-x border border-purple-400/20 cursor-pointer"
              >
                <IconPlain className="text-xl" style={{ strokeWidth: 1.5 }} />
                Let's Talk
              </button>

              <a
                href="/resume.pdf"
                download="Oleh_Kyrychenko_CV.pdf"
                className="w-full sm:w-auto px-8 py-4 bg-neutral-800/60 backdrop-blur-md text-white rounded-xl text-sm font-normal hover:bg-neutral-700 transition-all border border-white/10 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                <IconDocument
                  className="text-lg"
                  style={{ strokeWidth: 1.5 }}
                />
                Download CV
              </a>
            </div>

            {/* Оборачиваем модальное окно в Portal, чтобы избавиться от z-index / overflow багов верстки */}
            {isOpen && (
              <Portal>
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
                  <div className="bg-[#050505] border border-neutral-800 p-8 rounded-3xl max-w-md w-full relative shadow-2xl text-left">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-4 right-4 text-neutral-400 hover:text-white text-2xl cursor-pointer"
                    >
                      &times;
                    </button>
                    <h3 className="text-2xl text-white font-light mb-6">
                      Write to me
                    </h3>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">
                          Message
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Hello, let's discuss..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-purple-500 resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-linear-to-r from-purple-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:-translate-y-1 transition-all cursor-pointer border border-purple-400/20 shadow-lg shadow-purple-500/20"
                      >
                        Send Message
                      </button>

                      {status && (
                        <p className="text-xs text-center text-neutral-400 mt-2">
                          {status}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </Portal>
            )}

            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/oleh-kyrychenko-8839b73a6/"
                className="w-12 h-12 rounded-full bg-neutral-900/50 flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
                title="LinkedIn"
              >
                <IconLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/Moddderi"
                className="w-12 h-12 rounded-full bg-neutral-900/50 flex items-center justify-center text-white hover:bg-[#333] transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/5 hover:border-transparent hover:-translate-y-1"
                title="GitHub"
              >
                <IconGithub className="text-2xl" />
              </a>
              <a
                href="https://t.me/kiricholeg5"
                className="w-12 h-12 rounded-full bg-neutral-900/50 flex items-center justify-center text-white hover:bg-indigo-500 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
                title="Telegram"
              >
                <IconTelegram className="text-2xl" />
              </a>
              <a
                href="mailto:kiricenkoo182@gmail.com"
                className="w-12 h-12 rounded-full bg-neutral-900/50 flex items-center justify-center text-white hover:bg-purple-500 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-white/5 hover:border-transparent hover:-translate-y-1"
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
