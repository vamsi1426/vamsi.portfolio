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
  
  // Smooth spring parallax controls
  const springConfig = { stiffness: 65, damping: 22 };
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
          className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1"
        >
          {/* Subtle accent tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 mb-4 bg-brand-green/6 text-brand-green font-sans text-xs md:text-sm font-semibold tracking-widest uppercase px-4.5 py-1.5 rounded-full border border-brand-green/12"
          >
            <span className="w-2 h-2 rounded-full bg-brand-mango animate-pulse" />
            Full Stack & AI Engineer
          </motion.div>

          {/* Staggered Name Reveal */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-brown mb-3 leading-[0.92] flex flex-wrap gap-x-4 gap-y-2 w-full"
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
            className="font-sans text-lg md:text-2xl text-brand-green-light font-medium tracking-wide mb-5"
          >
            {PERSONAL_DETAILS.title} <span className="text-brand-brown/40 mx-2">|</span> <span className="text-brand-brown">{PERSONAL_DETAILS.subtitle}</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-sans text-base md:text-lg text-brand-brown font-light leading-relaxed max-w-xl mb-9"
          >
            {PERSONAL_DETAILS.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4.5 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollToSection("projects")}
              className="bg-brand-green hover:bg-brand-green-light text-brand-cream font-semibold tracking-wide uppercase px-8.5 py-4 rounded-full text-xs md:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-2 group"
            >
              Harvest Projects
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollToSection("contact")}
              className="bg-transparent hover:bg-brand-brown/5 text-brand-brown border border-brand-brown-light/20 font-semibold tracking-wide uppercase px-8.5 py-4 rounded-full text-xs md:text-sm transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-2"
            >
              Get in Touch
              <Mail size={16} />
            </button>
          </motion.div>

          {/* Social Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="flex items-center gap-5 mt-12"
          >
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noreferrer"
              className="text-brand-brown hover:text-brand-green transition-colors focus:outline-none"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-brand-brown hover:text-brand-green transition-colors focus:outline-none"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="text-brand-brown hover:text-brand-green transition-colors focus:outline-none"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column (Concentric Orbiting Gold Rings + Portrait Capsule - Hidden on Mobile, Flex on Desktop) */}
        <div className="hidden lg:flex lg:col-span-6 justify-center items-center order-1 lg:order-2 w-full min-h-[440px] md:min-h-[520px] overflow-visible relative">
          
          {/* Main Container with slow floating animation */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-square flex items-center justify-center overflow-visible"
          >
            
            {/* LAYER 1: Deepest Layer (Ambient Holographic Radial Glow) */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
            >
              <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-brand-mango/20 via-brand-orange/10 to-brand-sky/25 blur-3xl opacity-80" />
            </motion.div>

            {/* LAYER 2: Concentric Orbiting Rings (SVG-rendered for absolute golden elegance matching reference image) */}
            <motion.div
              style={{ x: outerRingsX, y: outerRingsY }}
              className="absolute w-[136%] h-[136%] pointer-events-none overflow-visible flex items-center justify-center"
            >
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 500 500" 
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Luxury Metallic Gold Gradient */}
                  <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E3C39D" />
                    <stop offset="35%" stopColor="#ECCBA6" />
                    <stop offset="70%" stopColor="#D5AC81" />
                    <stop offset="100%" stopColor="#BA9267" />
                  </linearGradient>
                  
                  {/* Inner Soft radial ring glow */}
                  <radialGradient id="ringBackGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ECCBA6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#ECCBA6" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Back glow underneath */}
                <circle cx="250" cy="250" r="190" fill="url(#ringBackGlow)" />

                {/* Ring 1: Medium Golden Ring (Strictly outside portrait r=205 boundary) */}
                <circle cx="250" cy="250" r="215" fill="none" stroke="url(#goldMetallic)" strokeWidth="1.2" opacity="0.85" />

                {/* Ring 2: Large Golden Ring (Thinner, far outside portrait boundary) */}
                <circle cx="250" cy="250" r="245" fill="none" stroke="url(#goldMetallic)" strokeWidth="0.8" opacity="0.6" />

                {/* Dotted arc details (Sparsely placed strictly outside the picture) */}
                <path d="M 250 5 A 245 245 0 0 1 470 185" fill="none" stroke="url(#goldMetallic)" strokeWidth="0.8" strokeDasharray="1 5" opacity="0.7" />
                <path d="M 35 320 A 245 245 0 0 1 125 470" fill="none" stroke="#3E6E3B" strokeWidth="1.2" strokeDasharray="1 3" opacity="0.6" />

                {/* Solid Orbiting Nodes & Sparks - Strictly outside the picture */}
                {/* Large gold/beige dot */}
                <circle cx="430" cy="150" r="6" fill="#D5AC81" />
                {/* Large organic green dot */}
                <circle cx="442" cy="108" r="7" fill="#2B5129" />
                {/* Tiny golden node spark */}
                <circle cx="410" cy="188" r="3.2" fill="#ECCBA6" />
                {/* Gold dot left */}
                <circle cx="70" cy="262" r="5" fill="#D5AC81" />
                {/* Small beige dot bottom left */}
                <circle cx="125" cy="405" r="4.5" fill="#BA9267" />
                {/* Green dot bottom */}
                <circle cx="320" cy="455" r="6.2" fill="#3E6E3B" />
              </motion.svg>
            </motion.div>

            {/* LAYER 3: Core Portrait Capsule (Frosted glass frame envelope) */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              className="relative w-[82%] h-[82%] rounded-full p-2.5 bg-brand-cream-dark/15 border border-brand-green/12 backdrop-blur-[6px] shadow-[0_20px_50px_rgba(77,56,38,0.12)] flex items-center justify-center overflow-visible"
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
                { delay: 0, duration: 8, left: "15%", top: "12%" },
                { delay: 2.2, duration: 10, left: "85%", top: "25%" },
                { delay: 4.8, duration: 9, left: "12%", top: "75%" }
              ].map((part, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 6, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: part.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: part.delay
                  }}
                  style={{ left: part.left, top: part.top }}
                  className="absolute w-2.5 h-2.5 rounded-full bg-brand-mango/30 border border-brand-mango/50"
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => handleScrollToSection("about")}
      >
        <span className="text-xs uppercase font-semibold tracking-widest text-brand-brown-light">Scroll Journey</span>
        <div className="w-5 h-8 rounded-full border-2 border-brand-brown-light/40 flex items-start justify-center p-1">
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
