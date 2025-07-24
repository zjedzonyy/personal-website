import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth/index";
import { LoadingWrapper } from "../common/index";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300${
        scrolled ? "bg-slate-900/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between items-center sm:items-center sm:flex-row h-16">
          {/* Logo */}
          <div className="flex items-center mt-2 sm:mt-0">
            <a href="#about">
              <span className="text-l italic bg-gradient-to-r font-serif from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-slide-left">
                zjedzonyy
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center justify-end text-[0.7rem] sm:text-xs space-x-4 sm:space-x-8 mb-3 mt-1 sm:mb-0 animate-slide-right">
            <a
              href="#techstack"
              className="text-slate-300 font-serif hover:text-emerald-400  transition-colors duration-200 relative group"
            >
              STACK
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#experience"
              className="text-slate-300 font-serif hover:text-emerald-400  transition-colors duration-200 relative group"
            >
              EXPERIENCE
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="text-slate-300 font-serif hover:text-emerald-400  transition-colors duration-200 relative group"
            >
              PROJECTS
              <span className="absolute -bottom-1 font-serif left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#contact"
              className="text-slate-300 font-serif hover:text-emerald-400  transition-colors duration-200 relative group"
            >
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
