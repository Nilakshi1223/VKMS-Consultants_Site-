import iso17025 from "../../assets/services/iso17025.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso17025() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
            ISO/IEC 17025 : 2017
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Testing and Calibration Laboratories certification ensures competence, consistency, and reliability of laboratory results worldwide.
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
            src={iso17025}
            alt="ISO 17025"
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Overview & Benefits */}
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
              ISO/IEC 17025:2017 specifies requirements for the competence of testing and calibration laboratories. 
              It ensures laboratories produce precise, accurate, and reliable results, enhancing credibility and trust in testing services.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensures accuracy and reliability of lab results",
                "Improves customer confidence in laboratory services",
                "Supports international recognition and compliance",
                "Enhances operational efficiency and consistency",
                "Reduces errors and risks in testing and calibration",
                "Strengthens credibility with clients and regulators",
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
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
              <li>Establish standardized procedures for testing and calibration.</li>
              <li>Document workflows, methods, and equipment usage.</li>
              <li>Train staff on competency and quality requirements.</li>
              <li>Conduct internal audits and performance monitoring.</li>
              <li>Maintain accurate records of tests, calibrations, and results.</li>
              <li>Undergo certification audit by an accredited body.</li>
            </ol>
          </div>

          {/* Who Should Adopt ISO 17025 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 17025
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO/IEC 17025 is ideal for testing and calibration laboratories of all sizes,
              ensuring reliability of results, international recognition, and enhanced customer trust.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 17025 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
