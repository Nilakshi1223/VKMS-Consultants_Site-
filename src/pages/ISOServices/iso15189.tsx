import iso15189 from "../../assets/services/iso15189.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso15189() {
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
            ISO 15189 : 2022
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Medical Laboratories Quality Management System certification ensures accurate,
            reliable, and safe laboratory testing and results.
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
            src={iso15189}
            alt="ISO 15189"
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
              ISO 15189:2022 specifies requirements for quality and competence in
              medical laboratories. It ensures laboratories produce accurate and
              reliable results to support patient care and clinical decision-making.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Improves accuracy and reliability of lab results",
                "Ensures patient safety and quality of care",
                "Supports compliance with regulatory and accreditation requirements",
                "Enhances laboratory efficiency and process standardization",
                "Builds trust with healthcare providers and patients",
                "Promotes continuous improvement and risk management",
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
              <li>Establish a quality management system for laboratory operations.</li>
              <li>Define laboratory procedures and document workflows.</li>
              <li>Train staff on quality and regulatory requirements.</li>
              <li>Conduct internal audits and performance monitoring.</li>
              <li>Maintain accurate records of tests and results.</li>
              <li>Undergo certification audit by an accredited body.</li>
            </ol>
          </div>

          {/* Who Should Adopt ISO 15189 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 15189
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO 15189 is designed for medical laboratories of all sizes, including
              diagnostic, clinical, and research labs. It ensures reliable testing,
              supports accreditation, and improves confidence among patients and
              healthcare providers.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 15189 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
