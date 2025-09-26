import iso50001 from "../../assets/services/iso50001.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso50001() {
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
            ISO 50001 : 2018
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Energy Management System certification helps organizations improve energy efficiency, reduce costs, and lower environmental impact.
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
            src={iso50001}
            alt="ISO 50001"
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
              ISO 50001:2018 provides a framework for establishing, implementing, and improving an Energy Management System (EnMS). It helps organizations monitor and optimize energy use, reduce greenhouse gas emissions, and cut energy costs.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Improves energy efficiency and reduces energy consumption",
                "Lowers operational costs and energy expenses",
                "Reduces greenhouse gas emissions and environmental impact",
                "Supports compliance with energy regulations",
                "Promotes a culture of sustainable energy management",
                "Enhances corporate reputation as a green organization"
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
              <li>Establish energy policies and objectives.</li>
              <li>Measure and monitor energy performance.</li>
              <li>Identify areas for improvement and set targets.</li>
              <li>Train staff on energy efficiency and conservation.</li>
              <li>Conduct audits and monitor implementation.</li>
              <li>Achieve certification through an accredited audit body.</li>
            </ol>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 50001
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Manufacturing, industrial, commercial, and service organizations can benefit from ISO 50001 by reducing energy costs, optimizing resource usage, complying with regulations, and demonstrating sustainability.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 50001 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
