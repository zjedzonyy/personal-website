import { Hero, Experience, TechStack, MyProjects, Contact } from "../common/index";
import React, { useEffect, useState } from "react";

export function SmoothScrollContainer({ children }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = e => {
      if (isScrolling) return;

      e.preventDefault();
      setIsScrolling(true);

      const sections = document.querySelectorAll("[data-section]");
      const totalSections = sections.length;

      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        // Scroll w dół
        setCurrentSection(prev => prev + 1);
        sections[currentSection + 1]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll w górę
        setCurrentSection(prev => prev - 1);
        sections[currentSection - 1]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, isScrolling]);

  return <div>{children}</div>;
}

export default function Homepage() {
  return (
    <div className="min-h-screen transition-colors duration-500 animate-fade-in scroll-smooth">
      {/* Hero Section */}
      <Hero></Hero>

      {/* Tech Stack Section */}
      <TechStack></TechStack>

      <Experience></Experience>

      {/* My Project Section */}
      <MyProjects></MyProjects>

      {/* Contact */}
      <Contact></Contact>
    </div>
  );
}
