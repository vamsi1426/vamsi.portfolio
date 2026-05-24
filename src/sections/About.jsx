import React from "react";
import { motion } from "framer-motion";
import { Brain, Layers, Cpu, Compass, BookOpen } from "lucide-react";
import { ABOUT_ME } from "../utils/data";

export default function About() {
  // Map string to Lucide icon components
  const getIcon = (iconName) => {
    switch (iconName) {
      case "brain":
        return <Brain className="text-brand-mango" size={24} />;
      case "layers":
        return <Layers className="text-brand-mango" size={24} />;
      case "cpu":
        return <Cpu className="text-brand-mango" size={24} />;
      default:
        return <Compass className="text-brand-mango" size={24} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 px-4 md:px-12 flex items-center justify-center overflow-hidden"
    >
      {/* Background organic light ring shadow */}
      <div className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-green/4 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-[25vw] h-[25vw] rounded-full bg-brand-mango/3 blur-[80px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-1.5 text-xs md:text-sm font-semibold tracking-widest text-brand-green uppercase mb-2"
          >
            <BookOpen size={14} className="text-brand-green animate-sway" />
            Roots & Growth
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-brand-brown tracking-tight"
          >
            My Story
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-brand-mango rounded-full mt-3 origin-left"
          />
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <motion.h3 
              variants={itemVariants}
              className="font-display text-2xl md:text-3xl text-brand-brown font-semibold leading-snug"
            >
              {ABOUT_ME.intro}
            </motion.h3>

            <div className="flex flex-col gap-5 text-base md:text-lg text-brand-brown/85 font-sans leading-relaxed">
              {ABOUT_ME.story.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Embedded Quote Box */}
            <motion.div
              variants={itemVariants}
              className="mt-4 p-5 rounded-2xl border-l-4 border-brand-green bg-brand-cream-dark/30 italic text-brand-brown-light font-sans text-sm md:text-base relative overflow-hidden"
            >
              "Like a healthy mango tree, software grows sturdy roots through basic computer sciences, branches outwards with full-stack adaptability, and ripens with intelligent AI frameworks."
            </motion.div>
          </motion.div>

          {/* Right Cards Column (Core Focus Interests) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-5 w-full"
          >
            <motion.div 
              variants={itemVariants}
              className="text-left font-sans text-xs md:text-sm font-semibold tracking-wider text-brand-brown-light/70 uppercase mb-2 pl-1"
            >
              Core Areas of Interest
            </motion.div>

            {ABOUT_ME.interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group flex gap-4 p-6 rounded-3xl glass-panel text-left cursor-default transition-all duration-300 shadow-[0_4px_24px_rgba(77,56,38,0.03)] border border-brand-green/8 hover:border-brand-mango/30 glow-border"
              >
                {/* Icon wrapper with glow effect */}
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-green/6 flex items-center justify-center group-hover:bg-brand-mango/10 transition-colors shadow-inner">
                  {getIcon(interest.icon)}
                </div>

                <div className="flex flex-col">
                  <h4 className="font-sans font-bold text-base md:text-lg text-brand-brown group-hover:text-brand-green transition-colors">
                    {interest.title}
                  </h4>
                  <p className="font-sans text-sm text-brand-brown/75 leading-relaxed mt-1">
                    {interest.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
