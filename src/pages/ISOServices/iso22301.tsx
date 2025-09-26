import iso22301 from "../../assets/services/iso22301.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso22301() {
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
            ISO 22301 : 2019
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Business Continuity Management certification helps organizations prepare for, respond to, and recover from disruptive incidents effectively.
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
            src={iso22301}
            alt="ISO 22301"
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
              ISO 22301:2019 specifies requirements for a Business Continuity Management System (BCMS) to help organizations identify potential threats, ensure continuity of critical operations, and reduce the impact of disruptions. It provides a framework for risk assessment, planning, and continuous improvement.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensures continuity of critical business operations",
                "Reduces the impact of disruptions and emergencies",
                "Enhances organizational resilience and risk management",
                "Builds confidence with stakeholders, clients, and regulators",
                "Supports regulatory compliance and business reputation",
                "Promotes proactive risk identification and mitigation"
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
              <li>Identify key business processes and critical functions.</li>
              <li>Conduct risk assessment and business impact analysis.</li>
              <li>Develop business continuity plans and recovery strategies.</li>
              <li>Train staff and conduct awareness sessions.</li>
              <li>Perform exercises, tests, and audits to ensure readiness.</li>
              <li>Obtain certification through an accredited audit.</li>
            </ol>
          </div>

          {/* Who Should Adopt ISO 22301 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 22301
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO 22301 is ideal for organizations of all sizes, including corporations, government agencies, hospitals, and critical infrastructure providers, that need to ensure business continuity, minimize risks, and maintain stakeholder trust during disruptions.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 22301 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
