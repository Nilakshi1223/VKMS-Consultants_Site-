import haccpImage from "../../assets/services/haccp.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function HACCP() {
  return (
    <section className="bg-gray-50 pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
            HACCP Certification
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            HACCP certification ensures food safety by identifying, evaluating, and controlling hazards throughout the food production process.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img
            src={haccpImage}
            alt="HACCP"
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12 text-gray-700"
        >
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              HACCP (Hazard Analysis and Critical Control Points) is a systematic approach to food safety that identifies biological, chemical, and physical hazards in production processes and establishes critical control points to prevent contamination.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensures food safety and hygiene throughout production",
                "Reduces risk of foodborne illnesses and contamination",
                "Supports compliance with national and international regulations",
                "Enhances customer confidence and brand reputation",
                "Facilitates international trade and market access",
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Implementation Steps */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Implementation Process
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 leading-relaxed">
              <li>Conduct hazard analysis for biological, chemical, and physical risks.</li>
              <li>Identify critical control points (CCPs) to prevent hazards.</li>
              <li>Establish monitoring procedures and corrective actions.</li>
              <li>Maintain accurate records and documentation.</li>
              <li>Train staff and ensure compliance with procedures.</li>
              <li>Undergo audit by an accredited body for certification.</li>
            </ol>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt HACCP
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Food manufacturers, processors, restaurants, catering services, and any organization involved in food production or handling that aims to ensure safety and compliance with regulations.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-b;ue-700 transition-colors"
            >
              Get HACCP Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
