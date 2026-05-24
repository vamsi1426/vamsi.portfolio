import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, FolderHeart } from "lucide-react";

const Github = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import { PROJECTS } from "../utils/data";
import GlassModal from "../components/UI/GlassModal";

const getMangoColor = (id) => {
  switch (id) {
    case 1: return "#FFB01A"; // Ripe golden yellow
    case 2: return "#FFA000"; // Deep honey orange
    case 3: return "#FF7B47"; // Warm peach orange
    case 4: return "#94B535"; // Fresh half-ripe mango green
    case 5: return "#FFC30B"; // Golden sunrise yellow
    case 6: return "#FF9E00"; // Vibrant amber orange
    case 7: return "#FFB703"; // Goldenrod yellow
    case 8: return "#FB8500"; // Deep gold-orange
    default: return "#FFA000";
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const renderProjectCard = (project) => {
    const isHovered = hoveredCard === project.id;
    return (
      <div
        key={project.id}
        className="relative flex flex-col items-center w-full"
        onMouseEnter={() => setHoveredCard(project.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Visual Hanging Rope/Vine connecting card to twigs (Desktop only) */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-brand-green/30 hidden md:block overflow-visible">
          <div className="absolute top-4 -left-1.5 w-3.5 h-3.5 rounded-full border border-brand-green/30 bg-brand-cream-dark flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-mango" />
          </div>
        </div>

        {/* Physics-sway card wrapper */}
        <motion.div
          style={{ transformOrigin: "top center" }}
          animate={
            isHovered
              ? {
                  rotate: [0, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
                  transition: { duration: 2.2, ease: "easeInOut" },
                }
              : {}
          }
          whileHover={{ y: 4 }}
          className="w-full flex flex-col justify-between p-6 md:p-8 rounded-[36px] glass-panel border border-brand-green/10 hover:border-brand-mango/30 shadow-[0_8px_32px_rgba(77,56,38,0.03)] hover:shadow-[0_16px_40px_rgba(77,56,38,0.07)] transition-all duration-300 relative text-left group glow-border"
        >
          
          {/* Organic glowing background gradient node */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-brand-mango/5 group-hover:bg-brand-mango/15 blur-xl transition-all duration-500 pointer-events-none" />

          {/* Header containing Title & Hanging Mango visual */}
          <div className="flex justify-between items-start gap-4 mb-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-brand-green uppercase tracking-widest font-sans">
                <FolderHeart size={13} className="text-brand-green animate-sway" />
                Featured Fruit
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-brown group-hover:text-brand-green transition-colors leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Small visual hanging vector mango that sways on card hover */}
            <div className="w-12 h-12 flex justify-center items-center shrink-0">
              <svg
                viewBox="0 0 50 50"
                className={`w-10 h-10 overflow-visible origin-[25px_5px] filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.06)] ${
                  isHovered ? "animate-gentle-swing" : ""
                }`}
                style={{ transformOrigin: "25px 5px" }}
              >
                <line x1="25" y1="5" x2="25" y2="18" stroke="#3E6E3B" strokeWidth="2" />
                <path
                  d="M 25 18 C 12 21, 10 32, 22 42 C 32 48, 42 38, 36 25 C 33 20, 29 18, 25 18 Z"
                  fill={getMangoColor(project.id)}
                />
                <path d="M 22 18 Q 15 10, 24 8" fill="#4E8A42" />
              </svg>
            </div>
          </div>

          {/* Body Short Description */}
          <p className="font-sans text-sm md:text-base text-brand-brown/85 font-light leading-relaxed mb-6">
            {project.shortDesc}
          </p>

          {/* Tech stack pills container */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs font-semibold text-brand-brown-light/80 bg-brand-cream-dark/40 px-3.5 py-1.5 rounded-full border border-brand-green/6"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions Row */}
          <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-brand-green/8">
            <button
              onClick={() => setSelectedProject(project)}
              className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-green hover:text-brand-green-light cursor-pointer focus:outline-none flex items-center gap-1.5 group/btn"
            >
              Harvest Details
              <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </button>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-brand-cream-dark/20 hover:bg-brand-cream-dark/60 text-brand-brown-light hover:text-brand-green transition-all border border-brand-green/6 focus:outline-none"
                aria-label="View Source on GitHub"
              >
                <Github size={16} />
              </a>
              {project.liveDemo !== "#" && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-brand-cream-dark/20 hover:bg-brand-cream-dark/60 text-brand-brown-light hover:text-brand-green transition-all border border-brand-green/6 focus:outline-none"
                  aria-label="View Live Demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="relative w-full py-20 px-4 md:px-12 flex items-center justify-center overflow-hidden"
    >
      {/* Background soft styling gradients */}
      <div className="absolute top-[25%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-brand-mango/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-green/4 blur-[110px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold tracking-widest text-brand-green uppercase mb-2">
            <Sparkles size={14} className="text-brand-green animate-sway" />
            The Fruits of Labour
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-brown tracking-tight">
            The Mango Harvest
          </h2>
          <div className="w-20 h-1 bg-brand-mango rounded-full mt-3" />
        </div>

        {/* Project Twig Branch silhouette (Horizontal support branch) */}
        <div className="relative w-full mb-12 hidden md:block">
          <svg
            viewBox="0 0 1000 30"
            className="w-full h-8 overflow-visible filter drop-shadow-[0_4px_6px_rgba(77,56,38,0.15)]"
          >
            {/* Sturdy wood branch path */}
            <path
              d="M 0 15 C 200 15, 300 8, 500 18 C 700 8, 850 15, 1000 10"
              fill="transparent"
              stroke="#5C4033"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Small leaves shooting off the horizontal branch */}
            <path d="M 120 12 Q 130 0, 140 10 Q 125 18, 120 12" fill="#2B5129" />
            <path d="M 450 16 Q 440 28, 430 18 Q 445 10, 450 16" fill="#3E6E3B" />
            <path d="M 780 12 Q 795 2, 805 14 Q 790 20, 780 12" fill="#4E8A42" />
          </svg>
        </div>

        {/* Desktop 3-Column Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-start mt-6">
          <div className="flex flex-col gap-12 w-full">
            {PROJECTS.filter((_, idx) => idx % 3 === 0).map(renderProjectCard)}
          </div>
          <div className="flex flex-col gap-12 w-full">
            {PROJECTS.filter((_, idx) => idx % 3 === 1).map(renderProjectCard)}
          </div>
          <div className="flex flex-col gap-12 w-full">
            {PROJECTS.filter((_, idx) => idx % 3 === 2).map(renderProjectCard)}
          </div>
        </div>

        {/* Tablet 2-Column Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 items-start mt-6">
          <div className="flex flex-col gap-12 w-full">
            {PROJECTS.filter((_, idx) => idx % 2 === 0).map(renderProjectCard)}
          </div>
          <div className="flex flex-col gap-12 w-full">
            {PROJECTS.filter((_, idx) => idx % 2 === 1).map(renderProjectCard)}
          </div>
        </div>

        {/* Mobile 1-Column Layout */}
        <div className="grid grid-cols-1 gap-8 mt-6 md:hidden w-full">
          {PROJECTS.map(renderProjectCard)}
        </div>

        {/* Cinematic Detail Expansion Modal overlay */}
        <GlassModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <div className="text-left flex flex-col gap-6">
              
              {/* Tag indicator */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-green uppercase tracking-widest font-sans">
                <Sparkles size={12} className="text-brand-green animate-sway" />
                Harvesting Insights
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-brown leading-tight border-b border-brand-green/8 pb-4">
                {selectedProject.title}
              </h3>

              {/* Project Full description */}
              <div className="flex flex-col gap-4 font-sans text-sm md:text-base text-brand-brown/90 leading-relaxed">
                <h4 className="font-bold text-brand-green text-sm uppercase tracking-wider pl-0.5">
                  Scope & Architecture
                </h4>
                <p className="font-light">
                  {selectedProject.longDesc}
                </p>
              </div>

              {/* Tech Spec section */}
              <div className="flex flex-col gap-3">
                <h4 className="font-sans font-bold text-brand-green text-sm uppercase tracking-wider pl-0.5">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.tech.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs font-bold text-brand-green bg-brand-green/8 px-4 py-2 rounded-full border border-brand-green/12"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions links */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6 pt-6 border-t border-brand-green/8">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-green hover:bg-brand-green-light text-brand-cream font-semibold tracking-wide uppercase px-6 py-3.5 rounded-full text-xs md:text-sm shadow-md hover:shadow-lg transition-all text-center focus:outline-none flex items-center justify-center gap-2 group"
                >
                  <Github size={15} />
                  GitHub Repository
                </a>
                {selectedProject.liveDemo !== "#" && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent hover:bg-brand-brown/5 text-brand-brown border border-brand-brown-light/20 font-semibold tracking-wide uppercase px-6 py-3.5 rounded-full text-xs md:text-sm transition-all text-center focus:outline-none flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={15} />
                    Live Deployment
                  </a>
                )}
              </div>
            </div>
          )}
        </GlassModal>
      </div>
    </section>
  );
}
