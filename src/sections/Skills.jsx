import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, Code, Globe, Shield, Database, Cpu, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "../utils/data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages");

  // Get icon for category title
  const getCategoryIcon = (categoryId) => {
    const iconClass = "text-inherit";
    switch (categoryId) {
      case "languages":
        return <Code className={iconClass} size={18} />;
      case "frontend":
        return <Globe className={iconClass} size={18} />;
      case "backend":
        return <Shield className={iconClass} size={18} />;
      case "databases":
        return <Database className={iconClass} size={18} />;
      case "ai":
        return <Cpu className={iconClass} size={18} />;
      case "tools":
        return <Wrench className={iconClass} size={18} />;
      default:
        return <Sprout className={iconClass} size={18} />;
    }
  };

  const activeCategoryData = SKILL_CATEGORIES.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative w-full py-20 px-4 md:px-12 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-sky/20 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[5%] w-[30vw] h-[30vw] rounded-full bg-brand-mango/4 blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold tracking-widest text-brand-green uppercase mb-2">
            <Sprout size={14} className="text-brand-green animate-sway" />
            Branches of Expertise
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-brown tracking-tight">
            Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-brand-mango rounded-full mt-3" />
        </div>

        {/* Categories Tab Layout (Visual twigs/roots linking together) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Tree Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none w-full shrink-0">
            {SKILL_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3.5 px-6 py-4 rounded-2xl text-sm font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer focus:outline-none whitespace-nowrap shadow-[0_2px_12px_rgba(77,56,38,0.02)] border text-left ${
                    isSelected
                      ? "bg-brand-green text-brand-cream border-brand-green"
                      : "bg-brand-cream-dark/20 text-brand-brown/75 border-brand-green/8 hover:border-brand-green/20 hover:bg-brand-cream-dark/40"
                  }`}
                >
                  <span className={`transition-transform duration-300 ${isSelected ? "scale-110" : ""}`}>
                    {getCategoryIcon(category.id)}
                  </span>
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Skills Display Branch Grid */}
          <div className="lg:col-span-8 min-h-[300px] w-full relative">
            
            {/* Visual twig sprout path background (Subtle watermark SVGs) */}
            <div className="absolute right-0 bottom-0 w-48 h-48 opacity-10 pointer-events-none -z-10">
              <svg viewBox="0 0 100 100" fill="none" stroke="#2B5129" strokeWidth="2">
                <path d="M10,90 Q40,80 50,50 Q60,20 90,10" />
                <path d="M50,50 Q30,40 20,20" />
                <path d="M50,50 Q70,45 80,30" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {activeCategoryData.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-3xl glass-panel border border-brand-green/6 hover:border-brand-mango/30 transition-all duration-300 shadow-[0_4px_20px_rgba(77,56,38,0.02)] flex flex-col text-left cursor-default glow-border"
                  >
                    {/* Title & Level Indicator Text */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-sans font-bold text-base md:text-lg text-brand-brown">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs font-semibold text-brand-green px-2.5 py-0.5 rounded-full bg-brand-green/8">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Growing Leaf Sprout Progress slider */}
                    <div className="relative w-full h-[5px] bg-brand-cream-dark/60 rounded-full overflow-hidden">
                      
                      {/* Spring Scale-out Progress fill */}
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          type: "spring",
                          stiffness: 70,
                          damping: 15,
                          delay: index * 0.08 + 0.2,
                        }}
                        className="h-full bg-gradient-to-r from-brand-green to-brand-green-light rounded-full"
                      />
                    </div>

                    {/* Subtext info */}
                    <span className="text-[10px] uppercase tracking-widest text-brand-brown-light/60 mt-2 font-semibold font-sans">
                      Proficiency Level
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
