import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Leaf } from "lucide-react";

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
import { PERSONAL_DETAILS } from "../utils/data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // =========================================================================
    // DYNAMIC PRODUCTION EMAIL GATEWAY (Web3Forms - 100% Free, No Backend Required)
    // 1. Go to: https://web3forms.com (Enter your email to get your free API access key)
    // 2. Replace the placeholder string below with your new Web3Forms access key
    // =========================================================================
    const WEB3FORMS_ACCESS_KEY = "ef6ee258-1bc1-4e1e-8379-97734036a10f";

    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || !WEB3FORMS_ACCESS_KEY) {
      // Fallback elegant cinematic simulation if the access key is not yet configured
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Connection Request from ${formData.name}`,
          from_name: "Dasari Vamsi Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        alert("Oops! Submission failed. Please try again or email dasarivamsi514@gmail.com directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again or check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-brand-orange/6"
    >
      {/* Background ambient lighting (Sunset Warmth) */}
      <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-orange/15 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-brand-mango/10 blur-[150px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold tracking-widest text-brand-green uppercase mb-2">
            <Mail size={14} className="text-brand-green animate-sway" />
            Establish Connections
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-brown tracking-tight">
            Golden Hour Connect
          </h2>
          <div className="w-20 h-1 bg-brand-mango rounded-full mt-3" />
        </div>

        {/* Main Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column (Coordinates Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between text-left">
            <div className="flex flex-col gap-5">
              <h3 className="font-display text-2xl md:text-3xl text-brand-brown font-semibold leading-snug">
                Let's nurture something remarkable together.
              </h3>
              <p className="font-sans text-sm md:text-base text-brand-brown/85 font-light leading-relaxed max-w-md">
                Whether you have a specific machine learning role, a challenging full-stack project, or just want to chat about AI integrations — reach out! My channels are always open.
              </p>
            </div>

            {/* Visual list of connections */}
            <div className="flex flex-col gap-4 mt-6">
              
              {/* Email Card */}
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-brand-cream-dark/20 border border-brand-green/8 hover:border-brand-mango/30 hover:bg-brand-cream-dark/40 transition-all duration-300 group shadow-sm focus:outline-none"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-green/8 text-brand-green flex items-center justify-center group-hover:bg-brand-mango/15 transition-colors">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-brown-light/60">Email</span>
                  <span className="font-sans font-semibold text-sm md:text-base text-brand-brown group-hover:text-brand-green transition-colors mt-0.5">
                    {PERSONAL_DETAILS.email}
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-brand-cream-dark/20 border border-brand-green/8 hover:border-brand-mango/30 hover:bg-brand-cream-dark/40 transition-all duration-300 group shadow-sm focus:outline-none"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-green/8 text-brand-green flex items-center justify-center group-hover:bg-brand-mango/15 transition-colors">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-brown-light/60">Phone Call</span>
                  <span className="font-sans font-semibold text-sm md:text-base text-brand-brown group-hover:text-brand-green transition-colors mt-0.5">
                    {PERSONAL_DETAILS.phone}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-cream-dark/20 border border-brand-green/8 shadow-sm cursor-default">
                <div className="w-11 h-11 rounded-xl bg-brand-green/8 text-brand-green flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-brown-light/60">Location</span>
                  <span className="font-sans font-semibold text-sm md:text-base text-brand-brown mt-0.5">
                    Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social rows */}
            <div className="flex items-center gap-4 mt-8 pl-1">
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-green text-brand-cream hover:bg-brand-green-light transition-all shadow-md focus:outline-none"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-green text-brand-cream hover:bg-brand-green-light transition-all shadow-md focus:outline-none"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Right Column (Glassmorphism Contact Form) */}
          <div className="lg:col-span-7 flex flex-col justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 rounded-[36px] glass-panel border border-brand-green/10 shadow-[0_8px_32px_rgba(77,56,38,0.04)] text-left w-full glow-border"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-6 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-sans font-bold text-sm text-brand-brown-light pl-0.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 rounded-2xl bg-brand-cream/80 border border-brand-green/8 text-brand-brown focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 outline-none transition-all font-sans text-sm md:text-base placeholder:text-brand-brown/40"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-sans font-bold text-sm text-brand-brown-light pl-0.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-3.5 rounded-2xl bg-brand-cream/80 border border-brand-green/8 text-brand-brown focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 outline-none transition-all font-sans text-sm md:text-base placeholder:text-brand-brown/40"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-sans font-bold text-sm text-brand-brown-light pl-0.5">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="What details would you like to share?"
                        className="w-full px-5 py-4 rounded-2xl bg-brand-cream/80 border border-brand-green/8 text-brand-brown focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 outline-none transition-all font-sans text-sm md:text-base resize-none placeholder:text-brand-brown/40"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-green hover:bg-brand-green-light disabled:bg-brand-brown/40 text-brand-cream font-semibold tracking-wide uppercase px-8 py-4 rounded-2xl text-xs md:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-2.5 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Leaf className="animate-spin text-brand-mango" size={16} />
                          Planting Message...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Connection Request
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10 px-4"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6"
                    >
                      <CheckCircle size={36} fill="none" stroke="currentColor" />
                    </motion.div>
                    
                    <h4 className="font-display font-bold text-2xl text-brand-green mb-3">
                      Message Taken Root!
                    </h4>
                    
                    <p className="font-sans text-sm md:text-base text-brand-brown/85 font-light leading-relaxed max-w-sm mb-2">
                      Thank you for reaching out, Dasari Vamsi has received your connection request. I will respond to your email shortly.
                    </p>
                    
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-mango mt-4">
                      Cultivating response...
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Footer Coordinate Block */}
        <footer className="w-full mt-24 pt-8 border-t border-brand-green/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left select-none text-brand-brown-light/75 text-xs font-sans tracking-wide">
          <p>© {new Date().getFullYear()} Dasari Vamsi. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Designed & Engineered with</span>
            <Leaf size={12} fill="currentColor" className="text-brand-green animate-sway" />
            <span>in React & Tailwind v4</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
