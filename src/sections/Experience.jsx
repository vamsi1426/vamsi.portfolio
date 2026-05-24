import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Award, Network } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "../utils/data";

export default function Experience() {
  // Combine education and experience into a unified timeline sorted chronologically
  const timelineItems = [
    {
      type: "experience",
      date: EXPERIENCE[0].duration,
      title: EXPERIENCE[0].role,
      institution: EXPERIENCE[0].company,
      score: null,
      details: EXPERIENCE[0].bullets.join(" "),
      bullets: EXPERIENCE[0].bullets,
      icon: <Briefcase className="text-brand-mango" size={18} />,
    },
    {
      type: "education",
      date: EDUCATION[0].duration,
      title: EDUCATION[0].degree,
      institution: EDUCATION[0].school,
      score: EDUCATION[0].score,
      details: EDUCATION[0].details,
      bullets: null,
      icon: <GraduationCap className="text-brand-green-light" size={18} />,
    },
    {
      type: "education",
      date: EDUCATION[1].duration,
      title: EDUCATION[1].degree,
      institution: EDUCATION[1].school,
      score: EDUCATION[1].score,
      details: EDUCATION[1].details,
      bullets: null,
      icon: <GraduationCap className="text-brand-green-light" size={18} />,
    },
    {
      type: "education",
      date: EDUCATION[2].duration,
      title: EDUCATION[2].degree,
      institution: EDUCATION[2].school,
      score: EDUCATION[2].score,
      details: EDUCATION[2].details,
      bullets: null,
      icon: <GraduationCap className="text-brand-green-light" size={18} />,
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-20 px-4 md:px-12 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-[30%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-green/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-mango/3 blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold tracking-widest text-brand-green uppercase mb-2">
            <Network size={14} className="text-brand-green animate-sway" />
            Seasonal Growth
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-brown tracking-tight">
            Academic & Career Journey
          </h2>
          <div className="w-20 h-1 bg-brand-mango rounded-full mt-3" />
        </div>

        {/* The Growth Trunk Timeline */}
        <div className="relative w-full">
          
          {/* Central Vertical Trunk Line (Visual Vine) */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-green via-brand-brown-light/40 to-brand-mango rounded-full hidden sm:block overflow-visible">
            {/* Trunk node accents */}
            <div className="absolute top-1/4 -left-1 w-3 h-3 rounded-full bg-brand-green" />
            <div className="absolute top-2/4 -left-1 w-3 h-3 rounded-full bg-brand-brown-light" />
            <div className="absolute top-3/4 -left-1 w-3 h-3 rounded-full bg-brand-mango" />
          </div>

          {/* Timeline Cards wrapper */}
          <div className="flex flex-col gap-12">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-stretch w-full ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Left / Right Card Container */}
                  <div className="w-full sm:w-[46%] flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 18 }}
                      whileHover={{ y: -4 }}
                      className="p-6 md:p-8 rounded-[32px] glass-panel border border-brand-green/10 hover:border-brand-mango/30 shadow-[0_6px_24px_rgba(77,56,38,0.03)] transition-all duration-300 relative text-left glow-border group"
                    >
                      {/* Floating Category Tag inside card */}
                      <span className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-green/8 text-brand-green border border-brand-green/12">
                        {item.type}
                      </span>

                      {/* Header details */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-cream-dark/50 flex items-center justify-center shadow-inner group-hover:bg-brand-green/10 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-mono text-xs font-semibold text-brand-green flex items-center gap-1">
                            <Calendar size={11} />
                            {item.date}
                          </span>
                          <h3 className="font-sans font-bold text-lg md:text-xl text-brand-brown group-hover:text-brand-green transition-colors mt-0.5 leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Score Badge (For Education) */}
                      {item.score && (
                        <div className="flex items-center gap-1.5 mb-4 pl-0.5 text-xs font-bold text-brand-mango uppercase tracking-widest font-sans">
                          <Award size={13} />
                          Cumulative Score: <span className="text-brand-green font-mono font-bold ml-0.5">{item.score}</span>
                        </div>
                      )}

                      {/* Institution / Company */}
                      <div className="font-sans font-semibold text-sm text-brand-brown-light/80 uppercase tracking-wider mb-3">
                        {item.institution}
                      </div>

                      {/* Accomplishments details */}
                      {item.bullets ? (
                        <ul className="flex flex-col gap-2 font-sans text-xs md:text-sm text-brand-brown/85 font-light leading-relaxed pl-4 list-disc marker:text-brand-green">
                          {item.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-sans text-xs md:text-sm text-brand-brown/85 font-light leading-relaxed pl-0.5">
                          {item.details}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for Trunk connecting dot */}
                  <div className="w-[8%] hidden sm:flex items-center justify-center relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-6 h-6 rounded-full border-[3px] border-brand-cream bg-brand-green shadow-md z-10"
                    />
                  </div>

                  {/* Empty balance block (Desktop alignment spacing) */}
                  <div className="w-full sm:w-[46%] hidden sm:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
