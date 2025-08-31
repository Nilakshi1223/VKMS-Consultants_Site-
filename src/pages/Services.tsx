
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // ✅ Import Link
import ServicesBg from "../assets/AboutUsBackground.webp";

// Import your service images
import IsoImage from "../assets/services/iso-certification.webp";
import ConsultancyImage from "../assets/services/management-consultancy.webp";

const services = [
  {
    image: IsoImage,
    title: "ISO Certification Services",
    description: "Helping organizations achieve ISO standards efficiently.",
    path: "/iso-services",  // ✅ Navigation path
  },
  {
    image: ConsultancyImage,
    title: "Regulatory Practice Certifications",
    description:
      "Helping your organization stay compliant with regulations easily and effectively.",
    path: "/regulatory-practice",  // ✅ Navigation path
  },
];

export default function Services() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${ServicesBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center pb-10 px-6 md:px-20">
        {/* Section Header */}
        <div
          id="services"
          className="relative z-10 text-center pt-20 pb-10 px-6 md:px-20"
        >
          <div className="inline-block my-8 px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
            Get Our Services
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            VKMS provides a wide range of consultancy services designed to
            enhance your organization’s efficiency, compliance, and growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Link to={service.path} key={idx}> {/* ✅ Make card clickable */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image */}
                <div className="w-48 h-48 rounded-3xl overflow-hidden mx-auto mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
