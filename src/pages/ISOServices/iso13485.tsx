import iso13485 from "../../assets/services/iso13485.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso9001() {
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
            ISO 13485 : 2016
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Medical Device Quality Management Systems certification ensures consistent
            design, development, production, and delivery of safe medical devices
            worldwide.
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
            src={iso13485}
            alt="ISO 13485"
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
              ISO 13485:2016 specifies requirements for a Quality Management System (QMS)
              where an organization must demonstrate its ability to provide medical
              devices and related services that consistently meet customer and
              regulatory requirements. It ensures safety, compliance, and process
              efficiency in the medical device lifecycle.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensures consistent quality and safety of medical devices",
                "Supports compliance with regulatory requirements globally",
                "Improves operational efficiency in design and production",
                "Reduces risks of product recalls or failures",
                "Enhances trust and credibility with clients and stakeholders",
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
              <li>Define QMS processes for design, production, and post-market activities.</li>
              <li>Document procedures, work instructions, and quality records.</li>
              <li>Train staff on regulatory and ISO 13485 requirements.</li>
              <li>Implement the processes and monitor performance consistently.</li>
              <li>Conduct internal audits to identify gaps and improve processes.</li>
              <li>Engage an accredited certification body for the audit and certification.</li>
            </ol>
          </div>

          {/* Who Should Adopt ISO 9001 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 13485
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO 13485 is essential for medical device manufacturers, suppliers,
              and organizations involved in design, development, production, or
              servicing of medical devices. Compliance ensures safety, regulatory
              adherence, and global market acceptance.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 13485 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
