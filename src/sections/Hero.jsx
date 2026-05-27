import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { PERSONAL_DETAILS } from "../utils/data";
import portraitImg from "../assets/chat1.png";

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

const Linkedin = ({ size = 20, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring parallax controls for premium weight and luxurious glide
  const springConfig = { stiffness: 45, damping: 25 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Parallax layers (Background glow, orbiting rings, portrait capsule)
  const glowX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const outerRingsX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const outerRingsY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const portraitX = useTransform(springX, [-0.5, 0.5], [-28, 28]);
  const portraitY = useTransform(springY, [-0.5, 0.5], [-28, 28]);

  const innerRingsX = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const innerRingsY = useTransform(springY, [-0.5, 0.5], [-35, 35]);

  const textParallaxX = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const textParallaxY = useTransform(springY, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const normX = (clientX / width) - 0.5;
      const normY = (clientY / height) - 0.5;

      x.set(normX);
      y.set(normY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Split name into words to prevent breaking words across lines
  const words = PERSONAL_DETAILS.name.split(" ");
  
  const containerVars = {
    animate: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVars = {
    initial: { y: 35, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96svh] w-full flex items-center justify-center px-4 md:px-12 pt-28 pb-16 overflow-hidden select-none"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-[8%] left-[8%] w-[48vw] h-[48vw] rounded-full bg-brand-mango/4 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[4%] right-[4%] w-[50vw] h-[50vw] rounded-full bg-brand-sky/35 blur-[170px] pointer-events-none -z-10" />

      {/* Main Grid Container */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column (Brand & Profile Details) */}
        <motion.div
          style={{ x: textParallaxX, y: textParallaxY }}
          className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
        >
          {/* Subtle accent tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 mb-5.5 bg-brand-green/[0.04] text-brand-green-light font-sans text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase px-4.5 py-1.5 rounded-full border border-brand-green/8 shadow-[0_2px_10px_rgba(43,81,41,0.03)] backdrop-blur-[2px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-mango animate-[pulse_2.5s_infinite]" />
            Software Engineer & AI Enthusiast
          </motion.div>

          {/* Staggered Name Reveal */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] tracking-tight text-brand-brown mb-3 leading-[1.0] flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 w-full"
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="whitespace-nowrap inline-block">
                {Array.from(word).map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letterVars}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>

          {/* Role subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-brand-green-light font-medium tracking-wide mb-5.5 flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1"
          >
            <span>{PERSONAL_DETAILS.title}</span> 
            <span className="hidden sm:inline text-brand-brown/25">|</span> 
            <span className="text-brand-brown font-normal block sm:inline">{PERSONAL_DETAILS.subtitle}</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-sans text-base md:text-lg text-brand-brown/85 font-light leading-relaxed max-w-xl mb-5"
          >
            {PERSONAL_DETAILS.tagline}
          </motion.p>

          {/* Tech Stack Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1.5 text-xs md:text-sm font-sans text-brand-brown/70 mb-8 max-w-xl select-none"
          >
            <span className="font-semibold text-brand-brown/40 uppercase tracking-widest text-[10px] mr-1">Focus:</span>
            <span className="font-medium hover:text-brand-green transition-colors duration-200">Java</span>
            <span className="text-brand-green/25 font-bold select-none">•</span>
            <span className="font-medium hover:text-brand-green transition-colors duration-200">Python</span>
            <span className="text-brand-green/25 font-bold select-none">•</span>
            <span className="font-medium hover:text-brand-green transition-colors duration-200">React.js</span>
            <span className="text-brand-green/25 font-bold select-none">•</span>
            <span className="font-medium hover:text-brand-green transition-colors duration-200">Node.js</span>
            <span className="text-brand-green/25 font-bold select-none">•</span>
            <span className="font-medium hover:text-brand-green transition-colors duration-200">AI</span>
            <span className="text-brand-green/25 font-bold select-none">•</span>
            <span className="font-medium hover:text-brand-green transition-colors duration-200 text-brand-brown/90">Full Stack Development</span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10"
          >
            <button
              onClick={() => handleScrollToSection("projects")}
              className="bg-brand-green hover:bg-brand-green-light text-brand-cream font-semibold tracking-wide uppercase px-8.5 py-4 rounded-full text-xs md:text-sm shadow-[0_4px_18px_rgba(43,81,41,0.12)] hover:shadow-[0_8px_25px_rgba(43,81,41,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer focus:outline-none flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => handleScrollToSection("contact")}
              className="bg-transparent hover:bg-brand-brown/[0.03] text-brand-brown border border-brand-brown-light/15 hover:border-brand-brown/35 font-semibold tracking-wide uppercase px-8.5 py-4 rounded-full text-xs md:text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer focus:outline-none flex items-center justify-center gap-2 group"
            >
              Get in Touch
              <Mail size={16} className="group-hover:scale-105 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Social Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="flex items-center justify-center lg:justify-start gap-4 mt-2"
          >
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-brand-brown/[0.02] hover:bg-brand-green/[0.08] border border-brand-brown/[0.08] hover:border-brand-green/25 flex items-center justify-center text-brand-brown/70 hover:text-brand-green transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-brand-green/5 cursor-pointer focus:outline-none group"
              aria-label="GitHub Profile"
            >
              <Github size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-brand-brown/[0.02] hover:bg-brand-green/[0.08] border border-brand-brown/[0.08] hover:border-brand-green/25 flex items-center justify-center text-brand-brown/70 hover:text-brand-green transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-brand-green/5 cursor-pointer focus:outline-none group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="w-10 h-10 rounded-full bg-brand-brown/[0.02] hover:bg-brand-green/[0.08] border border-brand-brown/[0.08] hover:border-brand-green/25 flex items-center justify-center text-brand-brown/70 hover:text-brand-green transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-brand-green/5 cursor-pointer focus:outline-none group"
              aria-label="Email Me"
            >
              <Mail size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column (Highly Visually-Polished Layered Concentric Orbiting Gold/Green Rings + Portrait Capsule) */}
        <div className="flex lg:col-span-6 justify-center items-center order-1 lg:order-2 w-full min-h-[340px] sm:min-h-[460px] md:min-h-[520px] overflow-visible relative mb-6 lg:mb-0">
          
          {/* Main Container with slow floating animation */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[250px] h-[250px] sm:w-[340px] sm:h-[340px] lg:w-[390px] lg:h-[390px] xl:w-[410px] xl:h-[410px] aspect-square flex items-center justify-center overflow-visible"
          >
            
            {/* LAYER 1: Deepest Layer (Ambient Holographic Radial Glow) */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
            >
              <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-brand-mango/20 via-brand-orange/10 to-brand-sky/25 blur-3xl opacity-80" />
            </motion.div>

            {/* LAYER 1.5: Glassmorphic Backdrop Disk (Creates standard-grade UI/UX depth under orbit rings) */}
            <div className="absolute w-[112%] h-[112%] rounded-full bg-brand-cream-dark/[0.03] border border-brand-brown/[0.04] backdrop-blur-[1.5px] pointer-events-none" />

            {/* LAYER 2: Concentric Orbiting Rings (SVG-rendered with multi-layered glow and dual-opposite rotations) */}
            <motion.div
              style={{ x: outerRingsX, y: outerRingsY }}
              className="absolute w-[136%] h-[136%] pointer-events-none overflow-visible flex items-center justify-center"
            >
              {/* Single Shared SVG Canvas containing defs and all rotating group layers */}
              <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
                <defs>
                  {/* Luxury Metallic Gold Gradient */}
                  <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E3C39D" />
                    <stop offset="35%" stopColor="#ECCBA6" />
                    <stop offset="70%" stopColor="#D5AC81" />
                    <stop offset="100%" stopColor="#BA9267" />
                  </linearGradient>

                  {/* Luxury Warm Orange Mango Gradient */}
                  <linearGradient id="orangeMango" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFA000" />
                    <stop offset="50%" stopColor="#FFB01A" />
                    <stop offset="100%" stopColor="#FF7B47" />
                  </linearGradient>
                  
                  {/* Inner Soft radial ring glow */}
                  <radialGradient id="ringBackGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFA000" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FFA000" stopOpacity="0" />
                  </radialGradient>

                  {/* Soft Luxury Gold Glow Filter */}
                  <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComponentTransfer in="blur" result="boost">
                      <feFuncA type="linear" slope="0.75" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="boost" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Soft Nature Green Glow Filter */}
                  <filter id="greenGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComponentTransfer in="blur" result="boost">
                      <feFuncA type="linear" slope="0.6" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="boost" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ambient Ring Back Glow */}
                <circle cx="300" cy="300" r="200" fill="url(#ringBackGlow)" opacity="0.75" />

                {/* Layer 2a: Clockwise Orbiting Group (Innermost Gold Ring & Sparks) */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "300px 300px" }}
                >
                  {/* Ring 1: Inner Golden Ring (Solid, with luxury stroke glow) */}
                  <circle cx="300" cy="300" r="205" fill="none" stroke="url(#goldMetallic)" strokeWidth="2.5" filter="url(#goldGlow)" opacity="0.95" />

                  {/* Solid Orbiting Nodes & Sparks */}
                  <circle cx="300" cy="95" r="7" fill="url(#goldMetallic)" filter="url(#goldGlow)" />
                  <circle cx="155" cy="155" r="5" fill="url(#orangeMango)" />
                </motion.g>

                {/* Layer 2b: Counter-Clockwise Orbiting Group (Middle Orange/Yellow Dashed Ring & Sparks) */}
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "300px 300px" }}
                >
                  {/* Ring 2: Concentric Orange Mango Dashed Ring */}
                  <circle cx="300" cy="300" r="230" fill="none" stroke="url(#orangeMango)" strokeWidth="2.0" strokeDasharray="6 12" filter="url(#goldGlow)" opacity="0.9" />

                  {/* Solid Orbiting Nodes & Sparks */}
                  <circle cx="300" cy="70" r="8" fill="url(#orangeMango)" filter="url(#goldGlow)" />
                  <circle cx="137" cy="463" r="4.5" fill="#FFC30B" />
                </motion.g>

                {/* Layer 2c: Clockwise Orbiting Group (Outer Green Dashed Ring & Sparks) */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "300px 300px" }}
                >
                  {/* Ring 3: Concentric Algorithmic Dashed Ring (Warm natural green) */}
                  <circle cx="300" cy="300" r="255" fill="none" stroke="#3E6E3B" strokeWidth="1.8" strokeDasharray="4 8" filter="url(#greenGlow)" opacity="0.85" />

                  {/* Dotted Gold arc detail */}
                  <path d="M 85 370 A 255 255 0 0 1 175 530" fill="none" stroke="url(#goldMetallic)" strokeWidth="1.5" strokeDasharray="1 5" opacity="0.7" />

                  {/* Solid Orbiting Nodes & Sparks */}
                  <circle cx="300" cy="45" r="8.5" fill="#2B5129" filter="url(#greenGlow)" />
                  <circle cx="521" cy="200" r="5.5" fill="url(#goldMetallic)" />
                </motion.g>

                {/* Layer 2d: Counter-Clockwise Orbiting Group (Outermost Gold Thin Ring & Sparks) */}
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "300px 300px" }}
                >
                  {/* Ring 4: Large Thin Golden Ring */}
                  <circle cx="300" cy="300" r="275" fill="none" stroke="url(#goldMetallic)" strokeWidth="1.2" filter="url(#goldGlow)" opacity="0.85" />

                  {/* Solid Orbiting Nodes & Sparks */}
                  <circle cx="300" cy="25" r="6" fill="url(#goldMetallic)" />
                  <circle cx="79" cy="300" r="4.5" fill="#D5AC81" />
                </motion.g>
              </svg>
            </motion.div>

            {/* LAYER 3: Core Portrait Capsule (Thicker frosted glass edge with warm organic drop shadow) */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              className="relative w-[82%] h-[82%] rounded-full p-2 bg-brand-cream-dark/20 border-2 border-brand-green/18 backdrop-blur-[8px] shadow-[0_25px_55px_rgba(77,56,38,0.16),0_4px_15px_rgba(43,81,41,0.06)] flex items-center justify-center overflow-visible"
            >
              {/* Circular portrait mask */}
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                <img
                  src={portraitImg}
                  alt="Dasari Vamsi"
                  className="w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Elegant overlay shadow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/8 via-transparent to-brand-mango/12 pointer-events-none opacity-40 mix-blend-overlay" />
              </div>
            </motion.div>

            {/* LAYER 4: Outer Orbiting Particles (Strictly floating outside, no lines inside portrait) */}
            <motion.div
              style={{ x: innerRingsX, y: innerRingsY }}
              className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
            >
              {/* Floating micro spark particles drifting in outer spaces */}
              {[
                { delay: 0, duration: 8, left: "15%", top: "12%", size: "w-2.5 h-2.5" },
                { delay: 2.2, duration: 10, left: "85%", top: "25%", size: "w-3 h-3" },
                { delay: 4.8, duration: 9, left: "12%", top: "75%", size: "w-2 h-2" },
                { delay: 1.5, duration: 11, left: "78%", top: "82%", size: "w-2.5 h-2.5" },
                { delay: 3.5, duration: 7, left: "50%", top: "5%", size: "w-2 h-2" }
              ].map((part, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    y: [0, -12, 0],
                    x: [0, 8, 0],
                    opacity: [0, 0.85, 0]
                  }}
                  transition={{
                    duration: part.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: part.delay
                  }}
                  style={{ left: part.left, top: part.top }}
                  className={`absolute ${part.size} rounded-full bg-brand-mango/30 border border-brand-mango/60`}
                />
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity group z-20"
        onClick={() => handleScrollToSection("about")}
      >
        <span className="text-[10px] md:text-xs uppercase font-semibold tracking-[0.25em] text-brand-brown-light/80 group-hover:text-brand-brown transition-colors duration-300">Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-brand-brown-light/30 group-hover:border-brand-brown-light/60 flex items-start justify-center p-1 transition-colors duration-300">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-brand-green"
          />
        </div>
      </motion.div>
    </section>
  );
}
