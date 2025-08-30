import React, { useState, useEffect } from "react";
import assets from "../assets/assets.js";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Hero slides
  const heroImages = [
    assets.hero_webimg,
    assets.hero_webimg1,
    assets.hero_webimg2,
    assets.hero_webimg3,
    assets.hero_webimg4,
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  // Mobile swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e) => (touchStartX = e.changedTouches[0].screenX);
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) prevSlide();
    else if (touchStartX - touchEndX > 50) nextSlide();
  };

  return (
    <div
      id="Hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img className="w-20" src={assets.group_profile} alt="Group Profile" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[80%] sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 mb-6 rounded-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white font-medium shadow-lg hover:scale-105 transition-transform"
      >
        Request Your Website
      </motion.button>

      <ProjectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Hero Slider */}
      <div
        className="relative w-full max-w-6xl h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence>
          {heroImages.map((img, index) =>
            index === current ? (
              <motion.img
                key={index}
                src={img}
                alt={`Hero ${index}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full"
              />
            ) : null
          )}
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        >
          ▶
        </button>

        {/* Progress Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-white" : "bg-white/50"
              } transition-all`}
            ></button>
          ))}
        </div>

        {/* Parallax Background (subtle) */}
        <motion.div
          className="absolute inset-0 bg-black/10 pointer-events-none"
          style={{ zIndex: -1 }}
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
