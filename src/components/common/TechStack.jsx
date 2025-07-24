import React, { useEffect, useState } from "react";

const TechStack = () => {
  const mainTechs = [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "React",
    "JavaScript",
    "TypeScript",
    "Git",
    "Jest/Vitest",
    "Linux",
    "Tailwind",
  ];

  // Floating words
  const backgroundTechs = [
    "Python",
    "Prisma",
    "HTML/CSS",
    "REST APIs",
    "Webpack",
    "Vite",
    "Passport.js",
    "Swagger",
    "Postman",
    "Python",
    "pgAdmin",
    "Railway",
    "Netlify",
    "Supabase",
    "Eslint",
    "Prettier",
    "express-validator",
    "npm",
    "VS Code",
    "GitHub",
  ];

  const [floatingItems, setFloatingItems] = useState([]);

  useEffect(() => {
    // Generate floating words with random style
    const items = [];
    backgroundTechs.forEach((tech, index) => {
      // Each word x3 (to fill background)
      for (let i = 0; i < 3; i++) {
        items.push({
          tech,
          id: `${index}-${i}`,
          top: Math.random() * 100,
          right: Math.random() * 200,
          delay: Math.random() * 5,
          duration: 25 + Math.random() * 15,
          size: Math.random() > 0.5 ? "text-sm" : "text-xs",
          opacity: Math.random() * 0.3 + 0.1, // 0.1 do 0.4
        });
      }
    });
    setFloatingItems(items);
  }, []);

  return (
    <section id="techstack" className=" relative py-14 lg:py-24 min-h-screen">
      {/* Animated Background*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingItems.map(item => (
          <div
            key={item.id}
            className={`absolute ${item.size} text-emerald-400 font-medium whitespace-nowrap select-none`}
            style={{
              top: `${item.top}%`,
              right: `${item.right}%`,
              opacity: item.opacity,
              animation: `floatAcross ${item.duration}s ${item.delay}s infinite linear`,
            }}
          >
            {item.tech}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 overflow-visible">
        <h2 className="text-4xl font-bold text-white text-center mb-4 lg:mb-16">Tech Stack</h2>

        {/* Tech Stack */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:mx-8 lg:mx-16">
          {mainTechs.map((tech, index) => (
            <div
              key={tech}
              className="group relative h-12 md:h-20 w-full bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 hover:border-emerald-500/40"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Tech Name */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <span className="text-white font-semibold text-center text-xs sm:text-sm leading-tight">
                  {tech}
                </span>
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/0 via-blue-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-blue-400/10 group-hover:to-emerald-400/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Utils carousel */}
        <div className=" relative left-[-12rem] w-[calc(100%+24rem)] mt-4 lg:mt-16  bg-emerald-700 border border-emerald-500/10 rounded-full">
          <div className="flex r whitespace-nowrap animate-scroll">
            {/* First round */}
            {backgroundTechs.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="inline-flex items-center mx-2 sm:mx-4 sm:px-4 py-2 font-serif italic rounded-full text-emerald-300/80 text-sm font-medium"
              >
                {tech}
              </div>
            ))}
            {/* Second round */}
            {backgroundTechs.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="inline-flex items-center mx-4 px-4 py-2 bg-white/5 border border-emerald-500/10 rounded-full text-emerald-300/80 text-sm font-medium hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes floatAcross {
          0% {
            transform: translateX(-150px) translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateX(25vw) translateY(-30px) rotate(5deg);
          }
          50% {
            transform: translateX(50vw) translateY(20px) rotate(-3deg);
          }
          75% {
            transform: translateX(75vw) translateY(-15px) rotate(7deg);
          }
          100% {
            transform: translateX(calc(100vw + 150px)) translateY(10px) rotate(-5deg);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
