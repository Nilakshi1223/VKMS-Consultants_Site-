import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../assets/vkmsHomeBg.webp"; 

import AboutUs from "./AboutUs";
import Contact from "./Contact";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      bg: `url(${Background})`,
      overlay: "bg-black/10",
      heading1: "Leading ISO & Management  ",
      heading2: " Consultancy",
      textColor: "text-gray-100",
      gradient1: "from-gray-200 to-gray-300",
      gradient2: "from-blue-300 to-blue-100",
      cardBg: "bg-black/60",
    },
    {
      id: 2,
      bg: `url(${Background})`, 
      overlay: "bg-white/10",
      heading1: "Empowering Businesses with ",
      heading2: "ISO Excellence",
      textColor: "text-gray-900",
      gradient1: "from-gray-700 to-gray-900",
      gradient2: "from-blue-700 to-cyan-600",
      cardBg: "bg-white/80",
    },
  ];

  

 

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Slides */}
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, idx) =>
              idx === currentSlide && (
                <motion.section
                  key={slide.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex items-center justify-center text-center bg-cover bg-center"
                  style={{ backgroundImage: slide.bg }}
                >
                  <div className={`absolute inset-0 ${slide.overlay}`}></div>

                  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`space-y-6 p-6 rounded-lg inline-block ${slide.cardBg}`}
                    >
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                        <span className={`bg-gradient-to-r ${slide.gradient1} bg-clip-text text-transparent`}>
                          {slide.heading1}
                        </span>
                        <br />
                        <span className={`bg-gradient-to-r ${slide.gradient2} bg-clip-text text-transparent`}>
                          {slide.heading2}
                        </span>
                      </h1>
                      <p className={`text-xl md:text-2xl ${slide.textColor} max-w-4xl mx-auto leading-relaxed`}>
                        Empowering Businesses with ISO & Management Consultancy Excellence
                      </p>
                    </motion.div>
                  </div>
                </motion.section>
              )
          )}
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "bg-blue-600 w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <AboutUs/>

      
      <Contact/>
    </div>
  );
}
