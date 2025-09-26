import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import {
  Trophy,
  Users,
  Globe,
  Eye,
  Target,
  HeartHandshake,
} from "lucide-react";
import AboutBg from "../assets/AboutUsBackground.webp";
import Testimonials from "./Testimonials";
import AccreditedPartners from "./AccreditedPartners";
import Process from "./Process";

// Business Features Data
const businessFeatures = [
  {
    icon: Trophy,
    title: "Years Experience",
    from: 1,
    to: 10,
    suffix: "+",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Clients Served",
    from: 1,
    to: 150,
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Industries Covered",
    from: 1,
    to: 15,
    suffix: "+",
    color: "from-emerald-500 to-teal-500",
  },
];

// Counter Component
function Counter({
  from,
  to,
  suffix,
}: {
  from: number;
  to: number;
  suffix?: string;
}) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return controls.stop;
  }, [count, to]);

  return (
    <motion.span>
      {display}
      {suffix || ""}
    </motion.span>
  );
}

export default function AboutUs() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${AboutBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero */}
      <div
        id="about-us"
        className="relative z-10 text-center pt-20 pb-10 px-6 md:px-20"
      >
        <div className="inline-block my-8 px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
          Choosing Us
        </div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          VK Management Syatems (PVT) LTD is a professional consultancy firm offering ISO certification
          support, management system consultancy, and corporate training
          services. We help organizations achieve global standards of excellence
          through compliance, innovation, and continuous improvement.
        </motion.p>
      </div>

      {/* Vision, Mission, Values */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Vision */}
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200
                       hover:scale-105 hover:border-blue-500 hover:shadow-2xl transition-all duration-200 ease-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              To be the leading consultancy partner for businesses seeking global
              standards of excellence, while delivering unmatched services at
              affordable prices.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200
                       hover:scale-105 hover:border-green-500 hover:shadow-2xl transition-all duration-200 ease-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              To deliver value-driven consultancy that enhances organizational
              performance, simplifies compliance, and fosters continuous
              improvement with a cutting-edge approach.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200
                       hover:scale-105 hover:border-purple-500 hover:shadow-2xl transition-all duration-200 ease-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-md">
              <HeartHandshake size={28} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Values</h3>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-2 text-left">
              <li>✔ Integrity in all we do</li>
              <li>✔ Excellence as a standard</li>
              <li>✔ Innovation in solutions</li>
              <li>✔ Long-term client commitment</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us with Tile Background */}
      <motion.section
        id="experience-power"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 relative z-10 
                   bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 
                   bg-[url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'40\\' height=\\'40\\' fill=\\'none\\' stroke=\\'rgba(0,0,0,0.05)\\'><rect width=\\'40\\' height=\\'40\\'/></svg>')]"
      >
        <div className="max-w-7xl pb-12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
              Expirence Power
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why You Should Choose VKMS
            </h2>
            <p className="text-gray-600 max-w-2xl text-base mx-auto">
              We stand apart through our experience, reliability, and
              client-centered approach. Here’s what makes us the preferred
              consultancy partner:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="border-0 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 bg-white p-6 text-center space-y-3 rounded-xl"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Animated Number */}
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    <Counter
                      from={feature.from}
                      to={feature.to}
                      suffix={feature.suffix}
                    />
                  </h3>

                  <p className="text-base font-semibold text-gray-700">
                    {feature.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Process />
        <AccreditedPartners />
        <Testimonials />
      </motion.section>
    </div>
  );
}
