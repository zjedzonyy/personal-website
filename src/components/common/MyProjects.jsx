import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function MyProjects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 328);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const myProjects = [
    {
      name: "AdVenture",
      image: "/adventure.png",
      imageMobile: "/adventure-mobile.png",
      description:
        "Full Stack App for Discovering Things to Do in Your Free Time.AdVenture is a curated collection of activities and experiences — from the well-known to  the wonderfully obscure. AdVenture helps you discover new ways to spend your free time — organized, accessible, and tailored to your interests.",
      technologies: "JS, Express, React, PostgreSQL, Supabase, Prisma, Jest, Vitest",
      liveDemo: "https://at-adventure.netlify.app/",
      gitHub: "https://github.com/zjedzonyy/AdVenture-backend",
    },
  ];

  return (
    <section id="projects" className="relative py-20 min-h-screen">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">My Projects</h2>

        {/* Projects List */}
        <div className="space-y-20">
          {myProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.name}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <div className="relative group overflow-hidden sm:grayscale hover:filter-none rounded-xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 ease-out">
                    <img
                      src={!isMobile ? project.image : project.imageMobile}
                      alt={project.name}
                      className="w-full h-64 lg:h-80 transition-transform duration-300"
                      onError={e => {
                        // Fallback for missing image
                        e.target.src =
                          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23374151"/><text x="200" y="150" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="16">Project Image</text></svg>';
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  {/* Project Name */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{project.name}</h3>
                  {/* Description */}
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <p className="text-gray-400 text-sm">{project.technologies}</p>
                  </div>
                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.liveDemo === "disabled" ? (
                      <a
                        href="#"
                        onClick={e => e.preventDefault()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg font-medium "
                      >
                        Clone & Run
                      </a>
                    ) : (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 group"
                      >
                        <ExternalLink
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                    >
                      <Github size={16} />
                      View More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
