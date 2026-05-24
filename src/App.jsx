import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./sections/LoadingScreen";
import BackgroundCanvas from "./components/BackgroundCanvas";
import FloatingMenu from "./components/FloatingMenu";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full font-sans antialiased text-brand-brown selection:bg-brand-mango/30 selection:text-brand-brown">
      
      {/* Dynamic mounting of sprout loading screen or portfolio sections */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" className="fixed inset-0 z-50">
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="w-full relative"
          >
            {/* Interactive physics-based canvas leaf background */}
            <BackgroundCanvas />

            {/* Sticky capsule navigation menu */}
            <FloatingMenu />

            {/* Cinematic sections scroll stack */}
            <main className="w-full">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
