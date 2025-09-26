import iso27001 from "../../assets/services/iso27001.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso27001() {
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
            ISO 27001 : 2013
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Information Security Management certification helps organizations protect sensitive data, mitigate risks, and ensure business continuity.
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
            src={iso27001}
            alt="ISO 27001"
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
              ISO 27001:2013 specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It provides a structured framework to manage information security risks and protect organizational assets.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Protects sensitive and confidential information",
                "Mitigates risks of data breaches and cyber threats",
                "Enhances customer and stakeholder confidence",
                "Supports compliance with legal and regulatory requirements",
                "Improves overall information security governance",
                "Fosters a culture of security awareness within the organization"
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
              <li>Define an information security policy and objectives.</li>
              <li>Identify information assets and assess associated risks.</li>
              <li>Establish controls and procedures to mitigate identified risks.</li>
              <li>Train employees on information security awareness.</li>
              <li>Monitor, measure, and review the performance of the ISMS.</li>
              <li>Obtain certification through an accredited audit process.</li>
            </ol>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 27001
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO 27001 is ideal for organizations of any size or sector that manage sensitive data, including IT companies, financial institutions, healthcare providers, and government agencies. It ensures data confidentiality, integrity, and availability, building trust with clients and regulators.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 27001 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
