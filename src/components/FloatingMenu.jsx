import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { PERSONAL_DETAILS } from "../utils/data";
import portraitImg from "../assets/chat1.png";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      // Check active section
      const scrollPosition = window.scrollY + 160;
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
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

  const triggerResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Dasari_Vamsi_Resume.pdf";
    link.click();
  };

  return (
    <>
      {/* Navbar Container */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl px-4 md:px-6 py-2.5 rounded-full glass-panel shadow-[0_8px_32px_rgba(77,56,38,0.06)] flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-green/20 shadow-inner flex items-center justify-center bg-brand-cream-dark">
            <img src={portraitImg} alt="D. Vamsi" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300" />
          </div>
          <span className="font-display font-bold tracking-tight text-lg text-brand-brown group-hover:text-brand-green transition-colors">
            D. Vamsi
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer focus:outline-none ${
                activeSection === item.id
                  ? "text-brand-green font-semibold"
                  : "text-brand-brown/70 hover:text-brand-green"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavBg"
                  className="absolute inset-0 bg-brand-green/8 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions Button (Resume Download) */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerResumeDownload}
            className="hidden sm:flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-cream px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer focus:outline-none"
          >
            <ArrowDownToLine size={13} />
            Resume
          </motion.button>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brand-brown hover:text-brand-green md:hidden cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        {/* Scroll Progress indicator line */}
        <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-brand-cream-dark rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-mango transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-[2.5%] right-[2.5%] z-30 p-6 rounded-3xl glass-panel shadow-2xl flex flex-col gap-4 border border-brand-green/10 md:hidden"
          >
            <div className="flex flex-col gap-2.5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full py-3 px-4 rounded-xl text-left font-medium tracking-wide uppercase transition-colors focus:outline-none ${
                    activeSection === item.id
                      ? "bg-brand-green/8 text-brand-green font-semibold"
                      : "text-brand-brown/70 hover:bg-brand-cream-dark/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <hr className="border-brand-green/10" />

            <button
              onClick={triggerResumeDownload}
              className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-cream py-3 rounded-xl text-sm font-semibold uppercase tracking-wider shadow-md focus:outline-none"
            >
              <ArrowDownToLine size={15} />
              Download Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
