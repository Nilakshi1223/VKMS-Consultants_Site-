// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Background from "../assets/vkmsHomeBg.webp"; 

// import AboutUs from "./AboutUs";
// import Contact from "./Contact";

// export default function Index() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       bg: `url(${Background})`,
//       overlay: "bg-black/10",
//       heading1: "Leading ISO & Management  ",
//       heading2: " Consultancy",
//       textColor: "text-gray-100",
//       gradient1: "from-gray-200 to-gray-300",
//       gradient2: "from-blue-300 to-blue-100",
//       cardBg: "bg-black/60",
//     },
//     {
//       id: 2,
//       bg: `url(${Background})`, 
//       overlay: "bg-white/10",
//       heading1: "Empowering Businesses with ",
//       heading2: "ISO Excellence",
//       textColor: "text-gray-900",
//       gradient1: "from-gray-700 to-gray-900",
//       gradient2: "from-blue-700 to-cyan-600",
//       cardBg: "bg-white/80",
//     },
//   ];

  

 

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
//       {/* Hero Section with Slides */}
//       <div className="relative h-screen overflow-hidden">
//         <AnimatePresence mode="wait">
//           {slides.map(
//             (slide, idx) =>
//               idx === currentSlide && (
//                 <motion.section
//                   key={slide.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -50 }}
//                   transition={{ duration: 1 }}
//                   className="absolute inset-0 flex items-center justify-center text-center bg-cover bg-center"
//                   style={{ backgroundImage: slide.bg }}
//                 >
//                   <div className={`absolute inset-0 ${slide.overlay}`}></div>

//                   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 1, delay: 0.3 }}
//                       className={`space-y-6 p-6 rounded-lg inline-block ${slide.cardBg}`}
//                     >
//                       <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
//                         <span className={`bg-gradient-to-r ${slide.gradient1} bg-clip-text text-transparent`}>
//                           {slide.heading1}
//                         </span>
//                         <br />
//                         <span className={`bg-gradient-to-r ${slide.gradient2} bg-clip-text text-transparent`}>
//                           {slide.heading2}
//                         </span>
//                       </h1>
//                       <p className={`text-xl md:text-2xl ${slide.textColor} max-w-4xl mx-auto leading-relaxed`}>
//                         Empowering Businesses with ISO & Management Consultancy Excellence
//                       </p>
//                     </motion.div>
//                   </div>
//                 </motion.section>
//               )
//           )}
//         </AnimatePresence>

//         {/* Dots Navigation */}
//         <div className="absolute bottom-6 w-full flex justify-center space-x-3">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === idx ? "bg-blue-600 w-6" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       <AboutUs/>

      
//       <Contact/>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AboutUs from "./AboutUs";
import Contact from "./Contact";

import BgVideo from "../assets/BgVideo.mp4"; // 👈 add your video in assets

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      heading1: "Leading ISO & Management",
      heading2: "Consultancy",
      subtext:
        "Providing expert guidance to help businesses achieve excellence and ISO compliance.",
    },
    {
      id: 2,
      heading1: "Business Growth ",
      heading2: "via ISO",
      subtext:
        "We empower businesses to achieve international recognition and sustainable growth by guiding them through ISO standards and management excellence.",
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={BgVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20 z-10" />

        {/* Slide Content */}
        <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24">
          <AnimatePresence mode="wait">
            {slides.map(
              (slide, idx) =>
                idx === currentSlide && (
                  <motion.section
                    key={slide.id}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                      {slide.heading1}
                      <br />
                      <span className="text-blue-400">{slide.heading2}</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                      {slide.subtext}
                    </p>
                  
                  </motion.section>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        {/* <div className="absolute bottom-6 w-full flex justify-center space-x-3 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "bg-blue-500 w-8" : "bg-white/70 w-3"
              }`}
            />
          ))}
        </div> */}
      </div>

      {/* Other Sections */}
      <AboutUs />
      <Contact />
    </div>
  );
}
