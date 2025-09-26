import glpImage from "../../assets/services/glp.webp"; 
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function GLP() {
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
            Good Laboratory Practice (GLP)
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            GLP certification ensures laboratory studies are conducted with quality, consistency, and reliability, supporting regulatory compliance and scientific integrity.
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
            src={glpImage}
            alt="GLP"
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
              Good Laboratory Practice (GLP) is a quality system concerned with the organizational process and conditions under which laboratory studies are planned, performed, monitored, recorded, and reported. It ensures reliability and integrity of data submitted to regulatory authorities.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensures quality, consistency, and integrity of laboratory results",
                "Supports regulatory compliance for studies submitted to authorities",
                "Improves laboratory management and operational procedures",
                "Increases credibility and confidence in data",
                "Facilitates international recognition of laboratory studies",
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
              <li>Define standard operating procedures (SOPs) for all laboratory activities.</li>
              <li>Train personnel to ensure competency and compliance.</li>
              <li>Maintain and calibrate laboratory equipment regularly.</li>
              <li>Document all laboratory processes and maintain traceability.</li>
              <li>Conduct internal audits to verify compliance.</li>
              <li>Undergo external inspections for GLP certification.</li>
            </ol>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt GLP
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Pharmaceutical, chemical, cosmetic, and research laboratories aiming for regulatory compliance, data integrity, and international recognition of study results.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get GLP Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
