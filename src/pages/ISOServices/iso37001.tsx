import iso37001 from "../../assets/services/iso37001.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso37001() {
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
            ISO 37001 : 2019
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Anti-Bribery Management System certification helps organizations prevent, detect, and address bribery, ensuring ethical business practices.
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
            src={iso37001}
            alt="ISO 37001"
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
              ISO 37001:2019 provides requirements for establishing, implementing, and maintaining an Anti-Bribery Management System (ABMS). It supports organizations in detecting and mitigating bribery risks while promoting transparency and ethical business conduct.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Reduces risks of bribery and corruption",
                "Promotes ethical business practices and transparency",
                "Enhances trust with clients, partners, and regulators",
                "Supports compliance with anti-bribery laws",
                "Improves corporate governance and risk management",
                "Strengthens organizational reputation and stakeholder confidence"
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
              <li>Define anti-bribery policies and objectives.</li>
              <li>Conduct bribery risk assessments across operations.</li>
              <li>Establish controls and procedures to prevent and detect bribery.</li>
              <li>Train employees and stakeholders on ethical practices.</li>
              <li>Monitor compliance and conduct internal audits.</li>
              <li>Obtain certification through an accredited audit process.</li>
            </ol>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 37001
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Organizations of all sizes and sectors, especially those in finance, construction, government, and international trade, benefit from ISO 37001 by establishing a culture of integrity and compliance, mitigating bribery risks, and building trust with clients and regulators.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 37001 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
