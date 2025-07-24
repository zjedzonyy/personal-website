import React, { useState, useRef, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Code,
  GraduationCap,
  Briefcase,
  Lightbulb,
  ArrowDown,
} from "lucide-react";

export default function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState(null);

  const handleSetHoveredId = id => {
    hoveredId === id ? setHoveredId(null) : setHoveredId(id);
  };

  // const detailRefs = useRef({});

  // useEffect(() => {
  //   if (hoveredId && detailRefs.current[hoveredId]) {
  //     detailRefs.current[hoveredId].scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }
  // }, [hoveredId]);

  const experiences = [
    {
      id: 5,
      title: "Skill Development",
      company: "Self-directed Learning",
      location: "Busko-Zdrój, Poland",
      period: "08/2025 - Present",
      type: "Education",
      description:
        "Expanding technical skills through personal projects and modern web development practices.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Prisma",
        "Express",
        "React",
        "Tailwind",
        "Jest",
        "Vitest",
      ],
      achievements: [
        "Delivered several full-stack apps using REST APIs",
        "Practiced testing, deployment, and CI with modern tools",
        "Completed The Odin Project (Full Stack JavaScript)",
      ],
      icon: Lightbulb,
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "WB Electronics",
      location: "Skarżysko-Kamienna, Poland",
      period: "11/2023 - 03/2025",
      type: "Full-time",
      description:
        "Worked as a Software Developer, providing production support and overseeing a web application used in manufacturing. Worked with Linux systems and collaborated on production systems for military-grade equipment.",
      technologies: ["JavaScript", "Docker", "PostgreSQL", "Linux", "Unix"],
      achievements: [
        "Worked with multiple teams to deploy a web tool for manufacturing operations",
        "Contributed to the successful launch of a core product in production",
        "Improved development and production workflows through custom scripting",
      ],
      icon: Code,
    },
    {
      id: 3,
      title: "AEC Global Teamwork Project",
      company: "Stanford University",
      location: "Stanford, USA",
      period: "01/2023 - 06/2023",
      type: "Education",
      description:
        "Member of 8-person interdisciplinary team designing sustainable university building in San Francisco. Applied parametric modeling and automation for architecture-engineering collaboration. Delivered multiple presentations to project stakeholders and industry mentors to exchange ideas and receive feedbac",
      technologies: ["CFD", "BIM", "VR design", "Energy Analysis"],
      achievements: [
        "Successfully completed a sustainable building concept compliant with the highest WELL standards",
        "Gained experience in cross-cultural remote teamwork and engineering workflows",
        "Improved technical communication through regular stakeholder reviews",
      ],
      icon: GraduationCap,
    },

    {
      id: 1,
      title: "HVAC Design Assistant",
      company: "CEgroup",
      location: "Gliwice, Poland",
      period: "2022 - 2023",
      type: "Full-time",
      description:
        "Conducted engineering calculations and designed HVAC systems for large-scale buildings. Modeled systems and coordinated cross-disciplinary collaboration.",
      technologies: ["CAD", "HVAC Design", "Engineering Calculations", "Revit"],
      achievements: [
        "Designed systems for large-scale commercial buildings",
        "Coordinated cross-disciplinary engineering teams",
      ],
      icon: Briefcase,
    },
    {
      id: 2,
      title: "M.Sc. Environmental Engineering",
      company: "Silesian University of Technology",
      location: "Gliwice, Poland",
      period: "2021 - 2023",
      type: "Education",
      description:
        "Engineering-focused graduate studies centered on thermodynamics and fluid mechanics, with specialization in HVAC systems. Master's thesis explored CFD-BIM integration optimizations for HVAC systems.",
      technologies: ["BIM", "Ansys Fluent", "HVAC Systems", "Research"],
      achievements: [
        "Built a structured problem-solving approach grounded in scientific reasoning and engineering validation",
        "Published 2+ scientific papers on CFD and HVAC topics",
        "Developed CFD-BIM optimization guidelines for industry applications",
      ],
      icon: GraduationCap,
    },
  ];

  const getTypeColor = type => {
    switch (type) {
      case "Full-time":
        return "bg-blue-500";
      case "Part-time":
        return "bg-blue-500";
      case "Education":
        return "bg-purple-500";
      case "Career Transition":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen px-4 py-20 lg:pb-80 z-[11] flex items-center"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center mb-8 ">Experience</h2>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Vertical Snake Path */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <div className="w-full h-full bg-gradient-to-t from-emerald-500/30 via-blue-500/30 via-purple-500/30 to-orange-500/30 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const IconComponent = exp.icon;

              return (
                <div key={exp.id} className="relative flex items-center justify-center">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${getTypeColor(exp.type)} rounded-full shadow-lg z-20 border-4  blur-2xl`}
                  ></div>
                  <div
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${getTypeColor(exp.type)} rounded-full cursor-pointer shadow-lg z-20 border-4 border-white/10 `}
                  >
                    {/* <div className="absolute inset-0 m-auto w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div> */}

                    <IconComponent size={16} className="absolute inset-0 m-auto text-white " />
                  </div>

                  {/* Compact Timeline Item */}

                  <div
                    className={`relative ${isLeft ? "pr-12 text-right" : "pl-12 text-left"} w-1/2 ${isLeft ? "mr-auto" : "ml-auto"} pt-4`}
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Connecting line */}
                    <div
                      className={`absolute top-1/2 w-8 h-0.5 bg-emerald-500 ${isLeft ? "right-4" : "left-4"}`}
                    ></div>

                    {/* Compact Info */}
                    <div className="cursor-pointer">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-emerald-400 font-medium mb-1">{exp.company}</p>
                      <p
                        className={`text-gray-400 text-sm flex items-center gap-1 ${isLeft && "justify-end"}`}
                      >
                        <Calendar size={12} />
                        {exp.period}
                      </p>
                    </div>

                    {/* Hover Tooltip */}
                    {hoveredId === exp.id && (
                      <div
                        // ref={el => (detailRefs.current[exp.id] = el)}
                        className={`absolute top-[6rem] ${isLeft ? "right-[1.5rem] mr-4" : "left-[1.5rem] ml-4"} animate-slide-down2 w-80 z-30 `}
                      >
                        <div className="bg-black/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 shadow-2xl">
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span
                                className={`text-xs font-semibold px-2 py-1 rounded-full ${getTypeColor(exp.type)} text-white`}
                              >
                                {exp.type}
                              </span>
                              <span className="text-gray-400 text-sm flex items-center gap-1">
                                <MapPin size={12} />
                                {exp.location}
                              </span>
                            </div>
                          </div>

                          <p className="text-start text-gray-300 mb-4 leading-relaxed text-sm">
                            {exp.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="text-start text-emerald-400 text-sm font-semibold mb-2">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-white/10 text-start text-gray-300 text-xs rounded border border-white/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-emerald-400 text-start text-sm font-semibold mb-2">
                              Achievements
                            </h4>
                            <ul className="space-y-1 text-start">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="text-gray-300 text-sm flex items-start gap-2"
                                >
                                  <span className="text-emerald-400">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative ">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-t from-emerald-500/30 via-blue-500/30 to-orange-500/30"></div>

            <div className="space-y-6">
              {experiences.map(exp => {
                const IconComponent = exp.icon;

                return (
                  <div key={exp.id} className="relative flex items-start pl-16">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 transform -translate-x-1/2 w-6 h-6 ${getTypeColor(exp.type)} rounded-full shadow-sm z-20 border-4  blur-xl`}
                    ></div>
                    <div
                      className={`absolute left-4 w-6 h-6 ${getTypeColor(exp.type)} rounded-full shadow-lg border-2 border-white/10 transform -translate-x-1/2`}
                    >
                      <IconComponent size={12} className="absolute inset-0 m-auto text-white" />
                    </div>

                    {/* Mobile Item */}
                    <div className="w-full" onClick={() => handleSetHoveredId(exp.id)}>
                      <div className="cursor-pointer">
                        <h3 className="text-xs sm:text-lg font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-xs sm:text-s text-emerald-400 font-medium mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-s flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </p>
                      </div>

                      {/* Mobile Expanded Info */}
                      {hoveredId === exp.id && (
                        <div className="mt-4 bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-2 animate-in slide-in-from-top duration-200">
                          <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                            {exp.description}
                          </p>

                          <div className="mb-3">
                            <h4 className="text-emerald-400 text-sm font-semibold mb-2">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded border border-white/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-emerald-400 text-xs font-semibold mb-2">
                              Achievements
                            </h4>
                            <ul className="space-y-1 text-start">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="text-gray-300 text-xs flex items-start gap-2"
                                >
                                  <span className="text-emerald-400">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
