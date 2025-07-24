import React from "react";
import { Mail, Linkedin, Github, ExternalLink, MapPin, File } from "lucide-react";
import { AuthContext } from "../auth/index";

// Contact Section Component
export default function Contact() {
  const { handleCopy } = React.useContext(AuthContext);
  return (
    <section id="contact" className="relative flex items-center px-4 min-h-screen">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl md:text-4xl font-bold text-white mb-6">
          Let's Connect and Build Stuff Together
        </h2>

        <p className="text-sm md:text-md lg:text-xl text-gray-300 mb-8 leading-relaxed">
          Open for <span className="font-bold">backend</span>/full-stack roles, internships, or
          collaborations.
          <br />
          Currently diving into IoT and building a plant auto-watering system with Arduino and
          TypeScript.{" "}
        </p>

        {/* Contact Options */}
        <div className="flex flex-row items-center justify-center md:gap-6 mb-6 md:mb-12">
          {/* Primary CTA - Email */}
          <a
            onClick={handleCopy}
            className="group cursor-pointer inline-flex items-center gap-3 hover:bg-emerald-700 text-white px-4 py-4 rounded-xl font-semibold text-s md:text-lg lg:text-lgtransition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
          >
            <Mail size={28} className="transition-transform duration-300" />
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Get in Touch
            </div>
          </a>
          {/* Download CV */}
          <a
            href="/ArturTompor_CV.pdf"
            download={true}
            className="group inline-flex items-center gap-3  hover:bg-white/20  hover:border-white/40 text-white  px-4 py-4 rounded-xl font-semibold text-s md:text-lg transition-all duration-300 hover:scale-105"
          >
            <File size={28} className="transition-transform duration-300" />
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Download CV
            </div>
          </a>

          {/* Secondary CTA - LinkedIn */}
          <a
            href="https://linkedin.com/in/artompor"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3  hover:bg-white/20  hover:border-white/40 text-white  px-4 py-4 rounded-xl font-semibold text-s md:text-lg transition-all duration-300 hover:scale-105"
          >
            <Linkedin
              size={28}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Connect on LinkedIn
            </div>
          </a>
        </div>

        {/* Quick Info */}
        <div className="text-center md:mb-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-block text-xs md:text-sm text-slate-400 mb-0 pb-0"
            href="https://www.google.com/maps/place/28-100+Busko-Zdr%C3%B3j/..."
          >
            <div className=" backdrop-blur-sm p-2 transition-all duration-300 animate-pulse">
              <div className="flex gap-2 items-center justify-center p-0 ">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <p className="text-emerald-400">Busko-Zdrój, Poland</p>
              </div>
            </div>
          </a>
          {/* Simple status text */}
          <p className="flex flex-wrap items-center justify-center text-gray-400 text-xs md:text-sm">
            Backend-focused • Open to relocation
          </p>
        </div>
      </div>
    </section>
  );
}
