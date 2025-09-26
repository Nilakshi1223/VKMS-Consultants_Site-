import iso20001 from "../../assets/services/iso20001.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso20001() {
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
            ISO 20000-1 : 2018
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            IT Service Management certification ensures organizations deliver high-quality IT services aligned with business needs and industry best practices.
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
            src={iso20001}
            alt="ISO 20000-1"
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
              ISO 20000-1:2018 provides requirements for an IT Service Management System (ITSMS) to ensure the effective planning, delivery, and improvement of IT services. It helps organizations align IT services with business objectives and industry best practices.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Improves IT service delivery and quality",
                "Aligns IT services with business goals",
                "Enhances customer satisfaction and trust",
                "Supports continual service improvement",
                "Ensures compliance with industry best practices",
                "Boosts organizational efficiency and reliability",
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
              <li>Define IT service processes and responsibilities.</li>
              <li>Document procedures and service management policies.</li>
              <li>Train staff on ITSM practices and standards.</li>
              <li>Monitor IT service performance and key metrics.</li>
              <li>Conduct internal audits and corrective actions.</li>
              <li>Obtain certification through an accredited body audit.</li>
            </ol>
          </div>

          {/* Who Should Adopt ISO 20000-1 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 20000-1
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO 20000-1 is ideal for IT service providers, corporate IT departments, and organizations aiming to improve service quality, align IT with business objectives, and achieve industry recognition.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 20000-1 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
