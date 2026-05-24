import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Dynamic status text to suggest nature/compiling synthesis
  const statusTexts = [
    "Preparing the rich soil...",
    "Watering the visual roots...",
    "Nurturing compiler branches...",
    "Ripening code fruits...",
    "Shedding winter leaves...",
    "Stepping into the Orchard..."
  ];

  const currentStatusText = statusTexts[Math.min(
    Math.floor((progress / 100) * statusTexts.length),
    statusTexts.length - 1
  )];

  useEffect(() => {
    let speed = 25; // initial increment delay ms
    let currentProgress = 0;

    const interval = setInterval(() => {
      // Simulate natural slow-down as it gets closer to 100
      if (currentProgress >= 90) {
        speed = 100;
      } else if (currentProgress >= 60) {
        speed = 50;
      }

      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          // Wait for sprout animation to finish before notifying parent
          setTimeout(() => {
            onComplete();
          }, 1800);
        }, 300);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-cream text-brand-brown">
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center select-none">
        
        {/* Seed & Sprout SVG Container */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-6">
          
          {/* Seed Graphic */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-6 w-10 h-6 bg-brand-brown-light rounded-b-full rounded-t-[40%] origin-bottom"
            style={{ boxShadow: "0 4px 6px -1px rgba(77, 56, 38, 0.15)" }}
          >
            {/* Crack lines on seed */}
            {progress > 50 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 4 }}
                className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-brand-cream"
              />
            )}
          </motion.div>

          {/* Growing Sprout (Triggered after 50% progress, blooms fully at 100%) */}
          <AnimatePresence>
            {progress >= 50 && (
              <svg
                viewBox="0 0 100 100"
                className="absolute bottom-[28px] w-24 h-24 pointer-events-none overflow-visible origin-bottom"
              >
                {/* Sprout Stem */}
                <motion.path
                  d="M 50 100 Q 48 65 52 35"
                  fill="transparent"
                  stroke="#3E6E3B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: (progress - 50) / 50 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Left Sprout Leaf */}
                {progress >= 75 && (
                  <motion.path
                    d="M 50 60 Q 30 45 42 35 Q 48 45 50 60"
                    fill="#4E8A42"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.95 }}
                    style={{ transformOrigin: "50px 60px" }}
                    transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
                  />
                )}

                {/* Right Sprout Leaf (Blooms when 100% loaded) */}
                {isFinished && (
                  <motion.path
                    d="M 52 35 Q 70 20 60 12 Q 52 22 52 35"
                    fill="#3E6E3B"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    style={{ transformOrigin: "52px 35px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 8, delay: 0.3 }}
                  />
                )}
              </svg>
            )}
          </AnimatePresence>

          {/* Soft ambient water droplet ripple */}
          {progress < 50 && progress % 20 === 0 && (
            <motion.div
              key={progress}
              initial={{ scale: 0.2, opacity: 0.6 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute bottom-6 w-12 h-12 rounded-full border border-brand-green-light/20 pointer-events-none"
            />
          )}
        </div>

        {/* Loading Progress percentage */}
        <motion.div 
          className="font-display text-4xl font-bold tracking-tight text-brand-brown mb-2"
          animate={isFinished ? { scale: [1, 1.1, 1], color: "#2B5129" } : {}}
          transition={{ duration: 0.6 }}
        >
          {progress}%
        </motion.div>

        {/* Progress bar loader */}
        <div className="w-48 h-[3px] bg-brand-cream-dark rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-brand-green"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Status text */}
        <motion.p
          key={currentStatusText}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 0.8, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="text-xs font-sans tracking-wide uppercase opacity-75"
        >
          {currentStatusText}
        </motion.p>
      </div>
    </div>
  );
}
