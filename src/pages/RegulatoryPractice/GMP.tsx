import gmpImage from "../../assets/services/gmp.webp"; 
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function GMP() {
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
            Good Manufacturing Practice (GMP)
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            GMP certification ensures that products are consistently produced and controlled according to quality standards, ensuring safety and efficacy for consumers.
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
            src={gmpImage}
            alt="GMP"
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
              Good Manufacturing Practice (GMP) is a system for ensuring that products are consistently produced and controlled according to quality standards. It covers all aspects of production, from raw materials to training of staff and hygiene.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensures product safety, quality, and efficacy",
                "Reduces risks of contamination, errors, and defects",
                "Supports regulatory compliance and international recognition",
                "Improves production processes and operational efficiency",
                "Enhances consumer confidence and brand reputation",
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
              <li>Establish documented procedures for production and quality control.</li>
              <li>Train personnel to ensure compliance and competency.</li>
              <li>Maintain clean, controlled, and monitored environments.</li>
              <li>Monitor production processes and perform quality checks.</li>
              <li>Conduct internal audits and inspections regularly.</li>
              <li>Undergo external audits for GMP certification.</li>
            </ol>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt GMP
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Pharmaceutical, food, cosmetic, and manufacturing companies that aim to ensure product quality, safety, and regulatory compliance.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get GMP Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
