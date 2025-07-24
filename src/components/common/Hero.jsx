import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../auth/index";
import { MapPin } from "lucide-react";
export default function Hero() {
  const { handleCopy } = useContext(AuthContext);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center text-center min-h-screen px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_80%)]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      {/* Main content */}
      <div className="relative z-10 sm:space-y-6 animate-fade-in">
        {/* Greeting */}
        <div className="">
          <h2 className=" text-l sm:text-xl md:text-2xl text-left sm:ml-16 text-emerald-400 font-mono tracking-wider animate-slide-down">
            HELLO, I'M
          </h2>
          {/* Name with gradient */}
          <h1 className="mt-0 mb-2 sm:mb-4 text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent animate-slide-up">
            Artur Tompór
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-slate-300 mb-2 font-light tracking-wide animate-slide-up delay-100">
            BACKEND-FOCUSED DEVELOPER
          </h2>
        </div>

        {/* Description */}
        <div className="animate-slide-up delay-200">
          <p className="text-s sm:text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
            Crafting full-stack applications with{" "}
            <span className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-default">
              Node.js
            </span>
            ,{" "}
            <span className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-default">
              Express
            </span>
            ,{" "}
            <span className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-default">
              React
            </span>{" "}
            &{" "}
            <span className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-default">
              PostgreSQL
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up delay-300">
          <a href="#projects">
            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
              View My Work
            </button>
          </a>
          <button
            onClick={handleCopy}
            className=" bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-9 py-3 rounded-lg font-semibold  transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
      {/* Scroll indicator - hide with animation after first scroll down */}
      <div
        className={`
        absolute bottom-8 transition-opacity duration-700  animate-bounce
        ${!showScrollIndicator ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
