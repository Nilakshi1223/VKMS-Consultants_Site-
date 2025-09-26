import iso45001 from "../../assets/services/iso45001.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso45001() {
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
            ISO 45001 : 2018
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Occupational Health & Safety Management certification helps organizations create safe workplaces, reduce work-related risks, and improve employee well-being.
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
            src={iso45001}
            alt="ISO 45001"
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
              ISO 45001:2018 specifies requirements for an Occupational Health & Safety Management System (OHSMS). It helps organizations proactively improve workplace safety, prevent injuries, and comply with occupational health regulations.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Reduces workplace accidents and incidents",
                "Enhances employee health, safety, and well-being",
                "Supports compliance with legal and regulatory requirements",
                "Improves organizational reputation and trust",
                "Encourages a proactive safety culture",
                "Strengthens operational risk management"
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
              <li>Identify workplace hazards and risks.</li>
              <li>Define safety policies and objectives.</li>
              <li>Establish procedures for risk control and emergency response.</li>
              <li>Train employees and stakeholders on safety practices.</li>
              <li>Monitor OHS performance and conduct internal audits.</li>
              <li>Obtain certification through an accredited audit process.</li>
            </ol>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 45001
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Organizations across all sectors—especially manufacturing, construction, healthcare, and industrial services—benefit from ISO 45001 by ensuring workplace safety, protecting employees, and demonstrating compliance with occupational health standards.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 45001 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
